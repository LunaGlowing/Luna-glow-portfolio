document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.luna-glow-journey-content, .luna-glow-hobbies, .luna-glow-poem, .luna-glow-skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    const lunaGlowConstellation = document.querySelector('.luna-glow-constellation');
    for (let i = 0; i < 50; i++) {
        createParticle(lunaGlowConstellation);
    }
});

function createParticle(parent) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 3 + 1}px`;
    particle.style.height = particle.style.width;
    particle.style.animationDelay = `${Math.random() * 3}s`;
    parent.appendChild(particle);
}
