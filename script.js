// ===== AOS INIT =====
AOS.init({ duration: 800, once: true, offset: 80 });

// ===== MOBILE SIDEBAR TOGGLE =====
const toggle = document.getElementById('mobileToggle');
const header = document.getElementById('header');

toggle.addEventListener('click', () => {
  header.classList.toggle('active');
  const icon = toggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      header.classList.remove('active');
      const icon = toggle.querySelector('i');
      icon.classList.add('fa-bars');
      icon.classList.remove('fa-times');
    }
  });
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (scrollY >= top) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ===== BACK TO TOP =====
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('active', scrollY > 400);
});

// ===== TYPING EFFECT =====
const words = [
  'Data Science Enthusiast',
  'AI / ML Enthusiast',
  'Full-Stack Developer',
  'Problem Solver',
  'Java Developer',
  'B.Tech CSE Graduate'
];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const current = words[wordIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === current.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}
typeEffect();

// ===== SKILL BARS ANIMATION =====
const skillBars = document.querySelectorAll('.progress-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.width + '%';
      skillObserver.unobserve(bar);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(bar => skillObserver.observe(bar));

// ===== PORTFOLIO FILTER =====
const filterBtns = document.querySelectorAll('.portfolio-filters li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('filter-active'));
    btn.classList.add('filter-active');
    const filter = btn.dataset.filter;

    portfolioItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.classList.remove('hidden');
        item.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// ===== CERTIFICATION FILTER =====
const certFilterBtns = document.querySelectorAll('.cert-filters li');
const certCards = document.querySelectorAll('.cert-card');

certFilterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    certFilterBtns.forEach(b => b.classList.remove('cert-filter-active'));
    btn.classList.add('cert-filter-active');
    const filter = btn.dataset.certFilter;

    certCards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeIn 0.5s ease forwards';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== FADE-IN KEYFRAME =====
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
`;
document.head.appendChild(style);