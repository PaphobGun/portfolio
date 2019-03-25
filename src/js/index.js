import '../scss/main.scss';

// DOM ELEMENTS
const navBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const navProfile = document.querySelector('.nav__profile');

// Init for toggle
let isShow = false;

// Handle Nav
const handleNav = command => {
  // close
  if (command === 'close') {
    navBtn.classList.remove('show');
    nav.classList.remove('show');
    navList.classList.remove('show');
    navProfile.classList.remove('show');
    isShow = false;
    // open
  } else if (command === 'open') {
    navBtn.classList.add('show');
    nav.classList.add('show');
    navList.classList.add('show');
    navProfile.classList.add('show');
    isShow = true;
  }
};

// Handle toggle nav
navBtn.addEventListener('click', () => {
  if (isShow) {
    // close nav
    handleNav('close');
  } else if (!isShow) {
    // open nav
    handleNav('open');
  }
});

// Close nav when navigate
navList.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link')) {
    // close nav
    handleNav('close');
  }
});
