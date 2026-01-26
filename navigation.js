// Automatically detects current page and highlights it
(function() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Define which pages belong to which dropdown for active state
    const royalRolesPages = ['becoming-king.html', 'regent.html', 'heir.html'];
    const nobleRolesPages = ['master-treasury.html', 'high-emissary.html', 'steward.html', 'guards.html', 'military.html'];
    const guardRolesPages = ['guards.html'];
    const militaryRolesPages = ['military.html'];
    const diplomacyRolesPages = ['high-emissary.html', 'envoy.html', 'diplomacy.html'];
    const propertyRolesPages = ['steward.html'];
    const lawJusticePages = ['warden.html', 'coroner.html', 'executioner.html'];
    const wildCardRolesPages = ['wildcard-roles.html'];
    const officialRolesPages = ['roles.html', ...royalRolesPages, ...nobleRolesPages, ...guardRolesPages, ...militaryRolesPages, ...diplomacyRolesPages, ...propertyRolesPages, ...lawJusticePages, ...wildCardRolesPages];
    const politicalSystemsPages = ['succession.html', 'coronation.html', 'royal-tenure.html', 'seat-system.html'];
    const justiceSystemsPages = ['execution-mechanics.html', 'jail.html', 'bounty.html'];
    const cityServicesPages = ['salary-system.html', 'housing.html', 'property.html'];
    const systemsPages = [...politicalSystemsPages, ...justiceSystemsPages, ...cityServicesPages];
    const philosophyPages = ['philosophy.html', 'britain-sole-civic.html', 'new-player-experience.html'];
    const taxationPages = ['economic-philosophy.html', 'crown-taxation.html', 'guild-faction-economy.html', 'crown-liens.html', 'seizure-enforcement.html', 'tax-roles.html'];
    const guildsFactionsPages = ['guilds.html', 'emergent-factions.html', 'guild-banking.html', 'guild-upkeep.html', 'crown-recognition.html', 'guild-interactions.html', 'player-controlled-vendors.html', 'historic-property.html'];
    const specialPages = ['appointments-ledger.html', 'land-ledger.html', 'treasury-ledger.html', 'registry-estates.html', 'tax-ledger.html', 'arrest-ledger.html', 'death-ledger.html', 'faction-standing-chronicle.html'];
    
    // Check if current page is in a dropdown
    const isOfficialRolesActive = officialRolesPages.includes(currentPage);
    const isRoyalRolesActive = royalRolesPages.includes(currentPage);
    const isNobleRolesActive = nobleRolesPages.includes(currentPage);
    const isGuardRolesActive = guardRolesPages.includes(currentPage);
    const isMilitaryRolesActive = militaryRolesPages.includes(currentPage);
    const isDiplomacyRolesActive = diplomacyRolesPages.includes(currentPage);
    const isPropertyRolesActive = propertyRolesPages.includes(currentPage);
    const isLawJusticeActive = lawJusticePages.includes(currentPage);
    const isWildCardRolesActive = wildCardRolesPages.includes(currentPage);
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
            <a ${isGuildsFactionsActive ? 'class="active"' : ''}>Guilds ▼</a>
            <div class="nav-dropdown-content">
                <a href="guilds.html">Guilds (Core System)</a>
                <a href="emergent-factions.html">Emergent Factions</a>
                <a href="historic-property.html">Historic Property</a>
                <a href="guild-banking.html">Guild Banking</a>
                <a href="guild-upkeep.html">Guild Upkeep</a>
                <a href="crown-recognition.html">Crown Recognition</a>
                <a href="guild-interactions.html">Guild Interactions</a>
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
                <div class="nav-dropdown-nested">
                    <a ${isRoyalRolesActive ? 'class="active"' : ''}>Royal Roles ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="becoming-king.html">King</a>
                        <a href="regent.html">Regent</a>
                        <a href="heir.html">Heir Presumptive</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isNobleRolesActive ? 'class="active"' : ''}>Noble Roles ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="master-treasury.html">Master of the Treasury</a>
                        <a href="high-emissary.html">High Emissary</a>
                        <a href="steward.html">Land Commissioner</a>
                        <a href="guards.html">Marshal of the Guard</a>
                        <a href="military.html">High Commander of Britain</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a href="guards.html" ${isGuardRolesActive ? 'class="active"' : ''}>Civic Guard ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="marshal-guard.html">Marshal of the Guard</a>
                        <a href="captain-guard.html">Captain of the Guard</a>
                        <a href="city-guard.html">City Guard</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a href="military.html" ${isMilitaryRolesActive ? 'class="active"' : ''}>Royal Army ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="high-commander.html">Lord of the Royal Army</a>
                        <a href="field-commander.html">Captain of the Crown</a>
                        <a href="soldier.html">Knight of Britannia</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a href="diplomacy.html" ${isDiplomacyRolesActive ? 'class="active"' : ''}>Diplomacy Roles ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="high-emissary.html">Emissary of the Crown</a>
                        <a href="envoy.html">Royal Envoy</a>
                        <a href="diplomat.html">Crown Diplomat</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isPropertyRolesActive ? 'class="active"' : ''}>Property Roles ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="steward.html">Land Commissioner</a>
                        <a href="steward.html">Steward</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isLawJusticeActive ? 'class="active"' : ''}>Law and Justice ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="warden.html">Warden of the Dungeon</a>
                        <a href="coroner.html">Coroner of the Crown</a>
                        <a href="executioner.html">Executioner of the Crown</a>
                    </div>
                </div>
                <div class="nav-dropdown-nested">
                    <a ${isWildCardRolesActive ? 'class="active"' : ''}>Wildcard Roles ▶</a>
                    <div class="nav-dropdown-nested-content">
                        <a href="wildcard-roles.html">Wildcard Roles</a>
                    </div>
                </div>
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
