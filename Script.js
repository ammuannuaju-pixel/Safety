function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'scale(0.8)';
        section.style.transition = 'all 0.3s ease';
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'block';
    setTimeout(() => {
        targetSection.style.opacity = '1';
        targetSection.style.transform = 'scale(1)';
    }, 10);
}

// Hero Data (unchanged - perfect!)
const heroes = [
    { name: "Captain Consent", power: "The Boundary Shield - Teaches the power of saying 'No'." },
    { name: "Guardian Gopal", power: "Safety Aura - Protects children from child labor." },
    { name: "Detective Danya", power: "Truth Vision - Helps identify safe and unsafe touches." },
    { name: "Signal Surya", power: "Sonic Alert - Connects children instantly to help lines." },
    { name: "Justice Jaya", power: "The Gavel of Equality - Ensures every child is treated fairly." }
];

// Enhanced hero injection with hover bounce
const heroList = document.getElementById('hero-list');
if(heroList) {
    heroes.forEach((hero, index) => {
        const div = document.createElement('div');
        div.className = 'card';
        div.style.transition = 'transform 0.2s ease';
        div.style.cursor = 'pointer';
        div.innerHTML = `<h3>${hero.name}</h3><p><strong>Superpower:</strong> ${hero.power}</p>`;
        
        // Hero-specific click to show their section
        div.onclick = () => showSection(`hero-${index + 1}`);
        div.onmouseenter = () => div.style.transform = 'scale(1.05)';
        div.onmouseleave = () => div.style.transform = 'scale(1)';
        
        heroList.appendChild(div);
    });
}
