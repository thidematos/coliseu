'use strict';

const navLinks = document.querySelector('#nav');
const hamb = document.querySelector('.hamb');
const hambContainer = document.querySelector('.hamb_container');
const knowMoreBtn = document.querySelector('.btn__knowMore');

//Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperServices = new Swiper('.swiperServices', {
  effect: 'cards',
  rotate: true,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Tabbed Component
const componentContainer = document.querySelector('.operations');

const tabs = [...document.querySelectorAll('.operations__tab')];

const content = [...document.querySelectorAll('.operations__content')];

componentContainer.addEventListener('click', (e) => {
  if (!e.target.classList.contains('operations__tab')) return;

  const dataset = e.target.dataset.tab;

  tabs.forEach((tab) => {
    tab.classList.remove('operations__tab--active');
    e.target.classList.add('operations__tab--active');
  });

  content.forEach((content) => {
    content.classList.remove('operations__content--active');
    document
      .querySelector(`.operations__content--${dataset}`)
      .classList.add('operations__content--active');
  });
});

//Rocks Slide
const rockSliders = document.querySelectorAll('.rockSlider');

const handleHover = function (e) {
  if (!e.target.classList.contains('rockSlide')) return;

  e.target.previousElementSibling.classList.toggle('scale');
};

rockSliders.forEach((e) => {
  e.addEventListener('mouseover', handleHover);
  e.addEventListener('mouseout', handleHover);
});

//Fade
const handleNav = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const hovered = e.target;
    const siblings = [...document.querySelectorAll('.nav__link')];
    const logo = hovered.closest('#nav').querySelector('.logo');

    siblings.forEach((e) => {
      if (e !== hovered) {
        if (this) {
          logo.classList.remove('opacity20');
          e.classList.remove('opacity20');
        } else {
          logo.classList.add('opacity20');
          e.classList.add('opacity20');
        }
      }
    });
  }
};

navLinks.addEventListener('mouseover', handleNav.bind(false));

navLinks.addEventListener('mouseout', handleNav.bind(true));

//Scroll Smooth

const smoothScroll = function (e) {
  if (!e.target.classList.contains('nav__link')) return;

  e.preventDefault();

  document
    .querySelector(e.target.getAttribute('href'))
    .scrollIntoView({ behavior: 'smooth' });
};

navLinks.addEventListener('click', smoothScroll);
document.querySelector('.btn__knowMore').addEventListener('click', (e) => {
  console.log(e.target.dataset.href);
  document
    .querySelector(e.target.dataset.href)
    .scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#btn__knowMore').addEventListener('click', (e) => {
  console.log(e.target.dataset.href);
  document
    .querySelector(e.target.dataset.href)
    .scrollIntoView({ behavior: 'smooth' });
});

//Sticky NavBar
const section1 = document.querySelector('#section-1');

const stickyHandler = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navLinks.classList.add('sticky');

    document.querySelector('.main').style.marginTop =
      parseInt(getComputedStyle(navLinks).height) +
      parseInt(getComputedStyle(navLinks).marginTop) +
      parseInt(getComputedStyle(navLinks).marginBottom) +
      'px';
    navLinks.classList.remove('mt-2');
    navLinks.classList.remove('lg:mt-6');
  } else {
    navLinks.classList.remove('sticky');
    document.querySelector('.main').style = '';
    navLinks.classList.add('mt-2');
    navLinks.classList.add('lg:mt-6');
  }
};

const observer = new IntersectionObserver(stickyHandler, {
  root: null,
  threshold: 0,
  rootMargin: '-' + getComputedStyle(navLinks).height,
});

observer.observe(section1);

//Reveal Elements
const sections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');

  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((e) => sectionObserver.observe(e));

// Hamb
let statusHamb = false;

hamb.addEventListener('click', (e) => {
  statusHamb = !statusHamb;

  if (statusHamb) {
    hamb.src = '../assets/xmark.png';
  } else {
    hamb.src = '../assets/menu-hamb.png';
  }

  hambContainer.classList.toggle('hidden');
  hambContainer.classList.toggle('hamb_container-style');
});

// Flip Card
const cardContainer = document.querySelector('.cards');

cardContainer.addEventListener('click', (e) => {
  e.target.closest('.card')?.classList.toggle('flipCard');
});

//Retiring Margin Left
const marginSlider = document.querySelectorAll('.sliderML');

const handleResize = function () {
  marginSlider.forEach((e) => {
    if (window.screen.width >= 1280) {
      if (e.dataset.margin === 'true') {
        e.style.marginRight = '4%';
      } else {
        e.style.marginLeft = 0;
      }
    } else {
      e.style = '';
    }
  });
};
handleResize();

window.addEventListener('resize', handleResize);

//Change State
const changers = document.querySelectorAll('.logo');

let pageStatus = true;

changers.forEach((e) =>
  e.addEventListener('click', () => {
    pageStatus = !pageStatus;
    if (pageStatus) {
      observer.observe(section1);
    } else {
      observer.unobserve(section1);
    }

    const secondPage = document.querySelector('.secondPage');
    const main = document.querySelector('.main');

    navLinks.classList.toggle('hidden');
    main.classList.toggle('hidden');

    secondPage.classList.toggle('hidden');
    secondPage.classList.toggle('flex');
  })
);
