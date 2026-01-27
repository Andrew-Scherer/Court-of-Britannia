#!/usr/bin/env python3
"""
Batch convert HTML wiki pages to GitHub Wiki Markdown format.
"""

import os
import re
from pathlib import Path
from bs4 import BeautifulSoup

def extract_title_from_header(soup):
    """Extract the title from the header h1 tag."""
    header = soup.find('header', class_='header')
    if header:
        h1 = header.find('h1')
        if h1:
            return h1.get_text(strip=True)
    return "Untitled"

def extract_subtitle_from_header(soup):
    """Extract subtitle from the header p tag."""
    header = soup.find('header', class_='header')
    if header:
        p = header.find('p')
        if p:
            return p.get_text(strip=True)
    return None

def convert_html_to_markdown(html_content):
    """Convert HTML content to Markdown, preserving structure."""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Extract title and subtitle
    title = extract_title_from_header(soup)
    subtitle = extract_subtitle_from_header(soup)
    
    # Get main container content
    container = soup.find('main', class_='container')
    if not container:
        container = soup.find('div', class_='container')
    if not container:
        return None
    
    # Start building markdown
    md_lines = [f"# {title}", ""]
    if subtitle:
        md_lines.extend([f"**{subtitle}**", "", "---", ""])
    
    # Process container contents
    for element in container.children:
        if element.name is None:  # Text node
            text = element.strip()
            if text:
                md_lines.append(text)
            continue
            
        # Headers
        if element.name in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            level = int(element.name[1])
            text = element.get_text(strip=True)
            md_lines.extend(["", "#" * level + " " + text, ""])
        
        # Paragraphs
        elif element.name == 'p':
            text = process_inline_html(element)
            if text.strip():
                md_lines.extend([text, ""])
        
        # Lists
        elif element.name == 'ul':
            md_lines.append("")
            for li in element.find_all('li', recursive=False):
                text = process_inline_html(li)
                md_lines.append(f"- {text}")
            md_lines.append("")
        
        elif element.name == 'ol':
            md_lines.append("")
            for idx, li in enumerate(element.find_all('li', recursive=False), 1):
                text = process_inline_html(li)
                md_lines.append(f"{idx}. {text}")
            md_lines.append("")
        
        # Quote blocks
        elif element.name == 'div' and 'quote' in element.get('class', []):
            # Remove the quote::before content artifact
            text = element.get_text(strip=True)
            if text.startswith('"'):
                text = text[1:]
            md_lines.extend(["", f"> *{text}*", ""])
        
        elif element.name == 'div' and 'quote-simple' in element.get('class', []):
            text = element.get_text(strip=True)
            md_lines.extend(["", f"> {text}", ""])
        
        # Info boxes / Principle / Warning boxes
        elif element.name == 'div' and any(cls in element.get('class', []) for cls in ['info-box', 'principle', 'warning', 'success']):
            md_lines.append("")
            md_lines.append("> **" + ("❗ " if 'warning' in element.get('class', []) else "") + ("✅ " if 'success' in element.get('class', []) else "") + "Note**")
            for child in element.children:
                if child.name == 'h3' or child.name == 'h4':
                    md_lines.append(f"> **{child.get_text(strip=True)}**")
                    md_lines.append(">")
                elif child.name == 'p':
                    text = process_inline_html(child)
                    for line in text.split('\n'):
                        md_lines.append(f"> {line}")
                elif child.name == 'ul':
                    for li in child.find_all('li', recursive=False):
                        text = process_inline_html(li)
                        md_lines.append(f"> - {text}")
                elif child.name == 'ol':
                    for idx, li in enumerate(child.find_all('li', recursive=False), 1):
                        text = process_inline_html(li)
                        md_lines.append(f"> {idx}. {text}")
            md_lines.append("")
        
        # Tables
        elif element.name == 'table':
            md_lines.append("")
            rows = element.find_all('tr')
            if rows:
                # Header row
                header = rows[0]
                headers = [th.get_text(strip=True) for th in header.find_all(['th', 'td'])]
                md_lines.append("| " + " | ".join(headers) + " |")
                md_lines.append("|" + "|".join(["---" for _ in headers]) + "|")
                
                # Data rows
                for row in rows[1:]:
                    cells = [td.get_text(strip=True) for td in row.find_all(['td', 'th'])]
                    md_lines.append("| " + " | ".join(cells) + " |")
            md_lines.append("")
    
    return "\n".join(md_lines)

def process_inline_html(element):
    """Process inline HTML elements to Markdown."""
    if isinstance(element, str):
        return element
    
    text = ""
    for child in element.children:
        if child.name is None:  # Text node
            text += str(child)
        elif child.name == 'strong' or child.name == 'b':
            text += f"**{child.get_text()}**"
        elif child.name == 'em' or child.name == 'i':
            text += f"*{child.get_text()}*"
        elif child.name == 'code':
            text += f"`{child.get_text()}`"
        elif child.name == 'br':
            text += "  \n"
        elif child.name == 'a':
            href = child.get('href', '')
            link_text = child.get_text(strip=True)
            # Convert internal HTML links to wiki-style links
            if href.endswith('.html'):
                page_name = href.replace('.html', '').replace('-', '-').title()
                # Keep kebab-case for wiki links
                page_name = href.replace('.html', '')
                # Convert to Title-Case-With-Dashes
                parts = page_name.split('-')
                page_name = '-'.join(part.capitalize() for part in parts)
                text += f"[[{link_text}|{page_name}]]"
            else:
                text += f"[{link_text}]({href})"
        else:
            # Recursively process nested elements
            text += process_inline_html(child)
    
    return text

def convert_file(html_file, output_dir):
    """Convert a single HTML file to Markdown."""
    try:
        with open(html_file, 'r', encoding='utf-8') as f:
            html_content = f.read()
        
        markdown = convert_html_to_markdown(html_content)
        if not markdown:
            print(f"⚠️  Could not extract content from {html_file.name}")
            return False
        
        # Determine output filename
        md_filename = html_file.stem.title().replace('-', '-') + '.md'
        # Keep kebab-case
        md_filename = html_file.stem + '.md'
        # Convert to Title-Case
        parts = html_file.stem.split('-')
        md_filename = '-'.join(part.capitalize() for part in parts) + '.md'
        
        output_path = output_dir / md_filename
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(markdown)
        
        print(f"✅ Converted: {html_file.name} → {md_filename}")
        return True
        
    except Exception as e:
        print(f"❌ Error converting {html_file.name}: {e}")
        return False

def main():
    """Main conversion function."""
    wiki_dir = Path(__file__).parent
    
    # Find all HTML files except index.html (already converted as Home.md)
    html_files = []
    skip_files = {'index.html', 'nav-template.txt'}
    
    for html_file in wiki_dir.glob('*.html'):
        if html_file.name not in skip_files:
            html_files.append(html_file)
    
    # Skip files we've already manually converted
    already_converted = {
        'why-play.html',
        'philosophy.html', 
        'britain-sole-civic.html'
    }
    
    html_files = [f for f in html_files if f.name not in already_converted]
    
    print(f"Found {len(html_files)} HTML files to convert")
    print("=" * 60)
    
    success_count = 0
    for html_file in sorted(html_files):
        if convert_file(html_file, wiki_dir):
            success_count += 1
    
    print("=" * 60)
    print(f"✅ Successfully converted {success_count}/{len(html_files)} files")
    
    if success_count < len(html_files):
        print(f"⚠️  {len(html_files) - success_count} files had errors")

if __name__ == '__main__':
    main()
