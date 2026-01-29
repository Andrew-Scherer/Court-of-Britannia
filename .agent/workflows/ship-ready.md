---
description: Mark a document as ship-ready with proper metadata and linked integrations
---

# Ship-Ready Agent Workflow

This workflow applies ship-ready metadata to the top of a completed document.

## Instructions

0. **Scan for files that need ship-ready metadata** (optional step)
   - Search the wiki directory for markdown files
   - Check each file to see if it has the "**Status:** Ship-Ready" metadata
   - Identify files that appear complete but lack ship-ready metadata
   - Suggest these files to the user as candidates for marking ship-ready
   - Note: This step can be skipped if the user has already selected a specific document to mark

1. **Analyze the current document** to understand its scope and integrations
   - Review the document content
   - Identify what systems/mechanics it describes
   - Identify what it explicitly excludes
   - Identify which other documents it integrates with

2. **Search for integration references** in the wiki
   - Look for references to other system names mentioned in the document
   - Find the actual file paths for those systems in the wiki directory

3. **Apply the metadata block** at the top of the document in this format:

```markdown
**Status:** Ship-Ready (v1.0)  
**Last Edited:** [YYYY-MM-DD - use current date]  
**Scope:** [Brief description of what this document covers - market mechanics, combat system, etc.]  
**Integrated With:** [System Name 1](relative/path/to/doc.md), [System Name 2](relative/path/to/doc2.md)  
**Explicitly Excludes:** [List mechanics/systems that are intentionally out of scope]

---
```

4. **Ensure proper linking**
   - Each item in "Integrated With" must be a clickable link to the actual document
   - Use relative paths from the current document location
   - Verify all linked documents exist

5. **Preserve existing content**
   - Add the metadata block at the very top
   - Keep all existing document content below the separator line

## Notes

- The version number (v1.0) indicates the first ship-ready version
- Update scope to accurately reflect what the document defines
- Only include systems in "Integrated With" that have direct mechanical dependencies
- "Explicitly Excludes" helps prevent scope creep by documenting what's intentionally not covered
