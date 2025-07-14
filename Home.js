  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".dropdown-toggle");
    const parentLi = toggle.closest("li");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      parentLi.classList.toggle("active");
    });
  });
 
 
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".sub");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


const toggleBtn = document.querySelector('.nav-toggle');
const menu = document.querySelector('.list');
const icon = toggleBtn.querySelector('i');

toggleBtn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  icon.className = isOpen ? 'fa fa-times' : 'fa fa-bars';
});

 let currentIndex = 0;
  const testimonials = document.querySelectorAll(".testimonial");
  const dots = document.querySelectorAll(".dot");
  const total = testimonials.length;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.remove("active");
      dots[i].classList.remove("active");
    });
    testimonials[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % total;
    showTestimonial(currentIndex);
  }

  showTestimonial(currentIndex);

  setInterval(nextTestimonial, 3000);




