// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Initialize Typed.js
const typed = new Typed('#typed', {
  strings: [
    'Data Scientist',
    'Machine Learning Engineer',
    'AI Researcher',
    'NLP Specialist'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 2000,
  loop: true
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollTop = 0;
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});