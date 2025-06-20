const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active'));
});



document.addEventListener("DOMContentLoaded", () => {
    const seeMoreBtn = document.getElementById("seeMoreBtn");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("popupClose");

    if (seeMoreBtn && popup && closeBtn) {
      seeMoreBtn.addEventListener("click", () => {
        popup.classList.add("active");
      });

      closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
      });

      popup.addEventListener("click", (e) => {
        if (e.target === popup) {
          popup.classList.remove("active");
        }
      });
    }
  });

  const scrollBtn = document.getElementById('scrollToTopBtn');
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  };

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });