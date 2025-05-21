// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
      // Close mobile menu after clicking
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
    }
    });
});

// Sticky Navigation
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    navbar.classList.remove('sticky');
    return;
  }
  
  if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
    // Scrolling down
    navbar.classList.remove('sticky');
    navbar.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
    // Scrolling up
    navbar.classList.remove('scroll-down');
    navbar.classList.add('sticky');
  }
  
  lastScroll = currentScroll;
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Loader
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

// Form Animations
const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });
});

// Gallery Image Hover Effect
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.querySelector('.gallery-overlay').style.transform = 'translateY(100%)';
  });
});

// Team Member Hover Effect
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(member => {
  member.addEventListener('mouseenter', () => {
    member.style.transform = 'translateY(-10px)';
  });
  
  member.addEventListener('mouseleave', () => {
    member.style.transform = 'translateY(0)';
  });
});

// Service Card Hover Effect
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'block' : 'none';
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
setInterval(nextTestimonial, 5000);

// Initialize first testimonial
showTestimonial(0); 

// Sticky header animation for navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}); 