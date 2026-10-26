document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

const dataModes = ['demo', 'worst'];
const requestedMode = new URLSearchParams(window.location.search).get('data');
if (dataModes.includes(requestedMode)) {
  const controls = document.createElement('div');
  controls.className = 'data-mode-controls';
  controls.setAttribute('aria-label', 'Demo data controls');
  controls.innerHTML = '<span>Data</span><a href="?data=demo">Demo</a><a href="?data=worst">Worst case</a>';
  document.body.append(controls);

  if (requestedMode === 'worst') {
    const projectCards = document.querySelectorAll('.project-card');
    const worstTitles = [
      'Cachet for international asset operations',
      'Quant Market Prediction for volatile conditions',
      'Automated Trading Bot with long-horizon signals'
    ];
    projectCards.forEach((card, index) => {
      const title = card.querySelector('h3');
      if (title) title.textContent = worstTitles[index];
    });
    const email = document.querySelector('.contact-email > span:last-child');
    if (email) email.firstChild.textContent = 'bartholomew.fitzgerald@northwind-industries-holdings.example.com ';
  }
}

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (event) => {
  if (!siteNav?.classList.contains('is-open')) return;
  if (siteNav.contains(event.target) || menuToggle?.contains(event.target)) return;
  siteNav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !siteNav?.classList.contains('is-open')) return;
  siteNav.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.focus();
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const label = button.querySelector('span:last-child');
    if (!email || !label) return;

    try {
      await navigator.clipboard.writeText(email);
      label.firstChild.textContent = 'Copied — ';
      window.setTimeout(() => {
        label.firstChild.textContent = 'Copy my email ';
      }, 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  });
});

document.querySelector('[data-current-year]')?.replaceChildren(String(new Date().getFullYear()));

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, revealObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
