// Automatically detects current page and highlights it
(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Define which pages belong to which dropdown for active state
    const officialRolesPages = ['roles.html', 'becoming-king.html', 'heir.html', 'regent.html', 'steward.html', 'master-treasury.html', 'guards.html', 'military.html', 'diplomacy.html', 'coroner.html', 'executioner.html', 'warden.html', 'high-emissary.html', 'envoy.html'];
    const politicalSystemsPages = ['succession.html', 'coronation.html', 'royal-tenure.html', 'seat-system.html'];
    const justiceSystemsPages = ['execution-mechanics.html', 'jail.html', 'bounty.html'];
    const cityServicesPages = ['salary-system.html', 'housing.html', 'property.html'];
    const systemsPages = [...politicalSystemsPages, ...justiceSystemsPages, ...cityServicesPages];
    const philosophyPages = ['philosophy.html', 'britain-sole-civic.html', 'new-player-experience.html'];
    const taxationPages = ['economic-philosophy.html', 'crown-taxation.html', 'guild-faction-economy.html', 'crown-liens.html', 'seizure-enforcement.html', 'tax-roles.html'];
    const guildsFactionsPages = ['guilds.html', 'factions.html', 'faction-guild-banking.html', 'faction-guild-upkeep.html', 'britain-factions.html', 'faction-interactions.html', 'player-controlled-vendors.html'];
    const specialPages = ['appointments-ledger.html', 'land-ledger.html', 'treasury-ledger.html', 'registry-estates.html', 'tax-ledger.html', 'arrest-ledger.html', 'death-ledger.html', 'faction-standing-chronicle.html'];
    
    // Check if current page is in a dropdown
    const isOfficialRolesActive = officialRolesPages.includes(currentPage);
    const isSystemsActive = systemsPages.includes(currentPage);
    const isPoliticalSystemsActive = politicalSystemsPages.includes(currentPage);
    const isJusticeSystemsActive = justiceSystemsPages.includes(currentPage);
    const isCityServicesActive = cityServicesPages.includes(currentPage);
    const isPhilosophyActive = philosophyPages.includes(currentPage);
    const isTaxationActive = taxationPages.includes(currentPage);
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
                <a href="britain-sole-civic.html">Britain as the Sole Civic System</a>
                <a href="new-player-experience.html">Re-Imagining the New Player Experience</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isGuildsFactionsActive ? 'class="active"' : ''}>Guilds and Factions ▼</a>
            <div class="nav-dropdown-content">
                <a href="guilds.html">Guilds</a>
                <a href="factions.html">Factions</a>
                <a href="faction-guild-banking.html">Faction & Guild Banking</a>
                <a href="faction-guild-upkeep.html">Faction & Guild Upkeep</a>
                <a href="britain-factions.html">Britain's Relationship with Factions</a>
                <a href="faction-interactions.html">Faction Interactions with Other Factions</a>
                <a href="player-controlled-vendors.html">Player Controlled Vendors</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isTaxationActive ? 'class="active"' : ''}>Taxation & Economy ▼</a>
            <div class="nav-dropdown-content">
                <a href="economic-philosophy.html">Economic Philosophy</a>
                <a href="crown-taxation.html">Crown Taxation System</a>
                <a href="guild-faction-economy.html">Guild & Faction Economy</a>
                <a href="crown-liens.html">Crown Liens</a>
                <a href="seizure-enforcement.html">Seizure, Enforcement & Insolvency</a>
                <a href="tax-roles.html">Tax-Related Roles & Administration</a>
            </div>
        </div>
        <div class="nav-dropdown">
            <a ${isOfficialRolesActive ? 'class="active"' : ''}>Official Roles ▼</a>
            <div class="nav-dropdown-content">
                <a href="roles.html">All Official Roles</a>
                <a href="becoming-king.html">King</a>
                <a href="heir.html">Heir Presumptive</a>
                <a href="regent.html">Regent</a>
                <a href="steward.html">Land Commissioner & Steward</a>
                <a href="master-treasury.html">Master of the Treasury</a>
                <a href="guards.html">Guards</a>
                <a href="military.html">Military</a>
                <a href="diplomacy.html">Diplomacy</a>
                <a href="warden.html">Warden of the Dungeons</a>
                <a href="coroner.html">Coroner</a>
                <a href="executioner.html">Executioner</a>
                <a href="high-emissary.html">High Emissary</a>
                <a href="envoy.html">Envoy</a>
            </div>
        </div>
        <a href="claimant.html" ${currentPage === 'claimant.html' ? 'class="active"' : ''}>Claimants</a>
        <a href="unofficial-roles.html" ${currentPage === 'unofficial-roles.html' ? 'class="active"' : ''}>Unofficial Roles</a>
        <a href="permadeath-downed.html" ${currentPage === 'permadeath-downed.html' ? 'class="active"' : ''}>Permadeath</a>
        <div class="nav-dropdown">
            <a ${isSystemsActive ? 'class="active"' : ''}>Britain's City Systems ▼</a>
            <div class="nav-dropdown-content">
                <div class="nav-dropdown-nested">
                    <a ${isPoliticalSystemsActive ? 'class="active"' : ''}>Political Systems ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="succession.html">Succession & Crown Transfer</a>
                        <a href="coronation.html">Coronation Ceremony</a>
                        <a href="royal-tenure.html">Royal Tenure</a>
                        <a href="seat-system.html">Seat System</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isJusticeSystemsActive ? 'class="active"' : ''}>Justice Systems ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="execution-mechanics.html">Execution Mechanics</a>
                        <a href="jail.html">Jail System</a>
                        <a href="bounty.html">Bounty System</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isCityServicesActive ? 'class="active"' : ''}>City Services ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="salary-system.html">City Salary System</a>
                        <a href="housing.html">Housing & Land</a>
                        <a href="property.html">Property & Auctions</a>
                    </div>
                </div>
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
                <a href="faction-standing-chronicle.html">Register of Standing & Interfaction Chronicle</a>
            </div>
        </div>
    `;
    
    // Find nav element and insert navigation
    const navElement = document.querySelector('nav.nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
    }
})();
