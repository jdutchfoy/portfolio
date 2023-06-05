// Scroll to top button functionality
const scrollButton = document.querySelector('.back-to-top');
scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight current navigation item based on scroll position
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    
    if (currentScrollPos >= sectionTop && currentScrollPos < sectionTop + sectionHeight) {
      navLink.classList.add('active');
    } else {
      navLink.classList.remove('active');
    }
  });
});
