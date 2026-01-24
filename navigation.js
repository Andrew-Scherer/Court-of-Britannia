// Shared Navigation for Kingdoms of Britannia Wiki
// Automatically detects current page and highlights it
(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Define which pages belong to which dropdown for active state
    const rolesPages = ['roles.html', 'becoming-king.html', 'heir.html', 'regent.html', 'claimant.html', 'steward.html', 'guards.html', 'coroner.html', 'executioner.html', 'warden.html'];
    const systemsPages = ['succession.html', 'coronation.html', 'permadeath-downed.html', 'execution-mechanics.html', 'jail.html', 'housing.html', 'property.html', 'bounty.html', 'seat-system.html'];
    const specialPages = ['appointments-ledger.html', 'land-ledger.html', 'registry-estates.html', 'arrest-ledger.html', 'death-ledger.html'];
    
    // Check if current page is in a dropdown
    const isRolesActive = rolesPages.includes(currentPage);
    const isSystemsActive = systemsPages.includes(currentPage);
    const isSpecialActive = specialPages.includes(currentPage);
    
    // Build navigation HTML
    const navHTML = `
        <a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a>
        <a href="why-play.html" ${currentPage === 'why-play.html' ? 'class="active"' : ''}>Why Play This?</a>
        <a href="philosophy.html" ${currentPage === 'philosophy.html' ? 'class="active"' : ''}>Philosophy</a>
        <a href="bloodlines.html" ${currentPage === 'bloodlines.html' ? 'class="active"' : ''}>Bloodlines</a>
        <a href="houses.html" ${currentPage === 'houses.html' ? 'class="active"' : ''}>Houses</a>
        <div class="nav-dropdown">
            <a ${isRolesActive ? 'class="active"' : ''}>Roles ▼</a>
            <div class="nav-dropdown-content">
                <a href="roles.html">All Roles</a>
                <a href="becoming-king.html">King</a>
                <a href="heir.html">Heir Presumptive</a>
                <a href="regent.html">Regent</a>
                <a href="claimant.html">Claimants</a>
                <a href="steward.html">Land Commissioner & Steward</a>
                <a href="guards.html">Guards</a>
                <a href="warden.html">Warden of the Dungeons</a>
                <a href="coroner.html">Coroner</a>
                <a href="executioner.html">Executioner</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isSystemsActive ? 'class="active"' : ''}>Game Systems ▼</a>
            <div class="nav-dropdown-content">
                <a href="succession.html">Succession & Crown Transfer</a>
                <a href="coronation.html">Coronation Ceremony</a>
                <a href="permadeath-downed.html">Permadeath & Downed States</a>
                <a href="execution-mechanics.html">Execution Mechanics</a>
                <a href="jail.html">Jail System</a>
                <a href="housing.html">Housing & Land</a>
                <a href="property.html">Property & Auctions</a>
                <a href="bounty.html">Bounty System</a>
                <a href="seat-system.html">Seat System</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isSpecialActive ? 'class="active"' : ''}>Special Items ▼</a>
            <div class="nav-dropdown-content">
                <a href="appointments-ledger.html">Noble Appointments Ledger</a>
                <a href="land-ledger.html">Royal Land Ledger</a>
                <a href="registry-estates.html">Registry of Estates & Holdings</a>
                <a href="arrest-ledger.html">Arrest Ledger</a>
                <a href="death-ledger.html">Public Death Ledger</a>
            </div>
        </div>
    `;
    
    // Find nav element and insert navigation
    const navElement = document.querySelector('nav.nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
})();
