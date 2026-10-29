// Small progressive enhancements for the static multi-page site.
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('#form-message');
    message.textContent = 'Thanks! Your information is ready. Please contact the academy to confirm registration.';
  });
}

const prevNews = document.querySelector('#prev-news');
const nextNews = document.querySelector('#next-news');
if (prevNews && nextNews) {
  // The reference design currently contains one story; controls remain accessible.
  const showNotice = () => {
    const caption = document.querySelector('.news-caption');
    caption.style.display = caption.style.display === 'block' ? 'none' : 'block';
  };
  prevNews.addEventListener('click', showNotice);
  nextNews.addEventListener('click', showNotice);
}
