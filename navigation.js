// Shared Navigation for Kingdoms of Britannia Wiki
// Automatically detects current page and highlights it
(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Define which pages belong to which dropdown for active state
    const rolesPages = ['roles.html', 'becoming-king.html', 'heir.html', 'regent.html', 'claimant.html', 'steward.html', 'master-treasury.html', 'guards.html', 'coroner.html', 'executioner.html', 'warden.html'];
    const systemsPages = ['succession.html', 'coronation.html', 'permadeath-downed.html', 'execution-mechanics.html', 'jail.html', 'how-taxes.html', 'salary-system.html', 'housing.html', 'royal-tenure.html', 'property.html', 'bounty.html', 'seat-system.html'];
    const cityStatePages = ['city-residency.html', 'city-activation.html', 'capital-status.html', 'capital-recognition.html', 'fealty-sovereignty.html', 'intercity-treaties.html', 'fealty-ledger.html', 'intercity-tithes.html', 'secession-rebellion.html', 'protection-promises.html'];
    const philosophyPages = ['philosophy.html', 'new-player-experience.html'];
    const guildsFactionsPages = ['guilds.html', 'factions.html'];
    const specialPages = ['appointments-ledger.html', 'land-ledger.html', 'treasury-ledger.html', 'registry-estates.html', 'tax-ledger.html', 'arrest-ledger.html', 'death-ledger.html'];
    
    // Check if current page is in a dropdown
    const isRolesActive = rolesPages.includes(currentPage);
    const isSystemsActive = systemsPages.includes(currentPage);
    const isCityStateActive = cityStatePages.includes(currentPage);
    const isPhilosophyActive = philosophyPages.includes(currentPage);
    const isGuildsFactionsActive = guildsFactionsPages.includes(currentPage);
    const isSpecialActive = specialPages.includes(currentPage);
    
    // Build navigation HTML
    const navHTML = `
        <a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a>
        <a href="why-play.html" ${currentPage === 'why-play.html' ? 'class="active"' : ''}>Why Play This?</a>
        <div class="nav-dropdown">
            <a ${isPhilosophyActive ? 'class="active"' : ''}>Philosophy ▼</a>
            <div class="nav-dropdown-content">
                <a href="philosophy.html">Server Philosophy</a>
                <a href="new-player-experience.html">Re-Imagining the New Player Experience</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isGuildsFactionsActive ? 'class="active"' : ''}>Guilds and Factions ▼</a>
            <div class="nav-dropdown-content">
                <a href="guilds.html">Guilds</a>
                <a href="factions.html">Factions</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isCityStateActive ? 'class="active"' : ''}>City-State Systems ▼</a>
            <div class="nav-dropdown-content">
                <a href="city-residency.html">City Residency & Civic Belonging</a>
                <a href="city-activation.html">City Activation & Political Dormancy</a>
                <a href="capital-status.html">Capital Status & Spawn Gravity</a>
                <a href="capital-recognition.html">Capital Recognition System</a>
                <a href="fealty-sovereignty.html">Fealty & Sovereignty</a>
                <a href="intercity-treaties.html">Inter-City Treaties</a>
                <a href="fealty-ledger.html">Fealty Ledger</a>
                <a href="intercity-tithes.html">Inter-City Tithes & Treasury Routing</a>
                <a href="secession-rebellion.html">Secession, Neutrality, and Rebellion</a>
                <a href="protection-promises.html">Protection Promises & Failure</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isRolesActive ? 'class="active"' : ''}>Roles ▼</a>
            <div class="nav-dropdown-content">
                <a href="roles.html">All Roles</a>
                <a href="becoming-king.html">King</a>
                <a href="heir.html">Heir Presumptive</a>
                <a href="regent.html">Regent</a>
                <a href="claimant.html">Claimants</a>
                <a href="steward.html">Land Commissioner & Steward</a>
                <a href="master-treasury.html">Master of the Treasury</a>
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
                <a href="how-taxes.html">How Taxes Work</a>
                <a href="salary-system.html">City Salary System</a>
                <a href="housing.html">Housing & Land</a>
                <a href="royal-tenure.html">Royal Tenure</a>
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
                <a href="treasury-ledger.html">Royal Treasury Ledger</a>
                <a href="registry-estates.html">Registry of Estates & Holdings</a>
                <a href="tax-ledger.html">Tax Ledger</a>
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
