// src/scripts/ui.js
// IntersectionObserver: reveal, nav highlight, lazy project details
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// nav highlight
const navLinks = Array.from(document.querySelectorAll('a[data-section]'));
const sections = Array.from(document.querySelectorAll('main section[id]'));

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(a => a.classList.toggle('font-semibold', a.getAttribute('data-section') === id));
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => navObserver.observe(s));

// lazy-load project details when project section comes into view
const projectSection = document.getElementById('project');
if (projectSection) {
  const projDetails = document.getElementById('project-details');
  const projObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && projDetails && !projDetails.classList.contains('lazy')) {
        // simulate fetch/render
        setTimeout(() => {
          projDetails.innerHTML = `
            <h4 class="font-semibold">Dettagli tecnici</h4>
            <ul class="list-disc ml-5 py-4">
              <li>Firmware Rust su AM335x</li>
              <li>Comunicazione DALI tramite PLM bridge</li>
              <li>MQTT + DB per telemetria</li>
            </ul>
          `;
          projDetails.style.maxHeight = '500px';
          projDetails.style.opacity = '1';
          projDetails.classList.add('lazy');
        }, 380);
      }
    });
  }, { threshold: 0.35 });

  projObserver.observe(projectSection);
}

// smooth scroll fallback for browsers (CSS handles most; this improves header offset)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const headerOffset = document.querySelector('header')?.offsetHeight || 16;
    const rect = target.getBoundingClientRect();
    const targetY = window.pageYOffset + rect.top - headerOffset - 8;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  });
});
