'use strict';

const navLinks = document.querySelector('#nav');
const navLinks2 = document.querySelector('#nav2');
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

//////////////////////////////////////////////////////////////
//Scroll Smooth
const smoothScroll = function (e) {
  if (!e.target.classList.contains('nav__link')) return;

  e.preventDefault();

  const el = document.querySelector(e.target.getAttribute('href'));

  let isShowwed = el.classList.contains('section--hidden');

  if (e.target.id === 'section-6') {
    document
      .querySelector(`#${e.target.id}`)
      .scrollIntoView({ behavior: 'smooth' });
  } else {
    const headerHeight = isShowwed ? 96 + 128 : 96;
    const position = el.getBoundingClientRect().top;
    const offsetPosition = position + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const smoothBtnHandler = function (e) {
  const el = document.querySelector(e.target.dataset.href);

  let isShowwed = el.classList.contains('section--hidden');

  const headerHeight = isShowwed ? 96 + 128 : 96;
  const position = el.getBoundingClientRect().top;
  const offsetPosition = position + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

navLinks.addEventListener('click', smoothScroll);
document
  .querySelector('.btn__knowMore')
  .addEventListener('click', smoothBtnHandler);

document
  .querySelector('#btn__knowMore')
  .addEventListener('click', smoothBtnHandler);

/////////////////////////////////////////////////////////////////////////////
//Sticky NavBar
const section1 = document.querySelector('#section-1');
const section1_0 = document.querySelector('#section-1_0');

const stickyHandler = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navLinks.classList.add('sticky');
    document.querySelector('.dummyMain').classList.remove('hidden');
  } else {
    navLinks.classList.remove('sticky');
    document.querySelector('.dummyMain').classList.add('hidden');
  }
};

const stickyHandler2 = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    document.querySelector('.dummy').classList.remove('hidden');
    navLinks2.classList.add('sticky');
  } else {
    document.querySelector('.dummy').classList.add('hidden');
    navLinks2.classList.remove('sticky');
    document.querySelector('#section-1_0').style = '';
  }
};

const observer = new IntersectionObserver(stickyHandler, {
  root: null,
  threshold: 0,
  rootMargin: '-' + (parseInt(getComputedStyle(navLinks).height) - 2) + 'px',
});

observer.observe(section1);

const observer2 = new IntersectionObserver(stickyHandler2, {
  root: null,
  threshold: 0,
  rootMargin: '-' + (parseInt(getComputedStyle(navLinks2).height) - 2) + 'px',
});

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

////////////////////////////////////////////////////////////////////
// Hamb
let statusHamb = [false, false];

const hambHandler = function (e) {
  const whichHamb = Number(e.target.dataset.hamb);

  statusHamb[whichHamb] = !statusHamb[whichHamb];

  if (statusHamb[whichHamb])
    hambs[whichHamb].src = '../assets/menu-hamb-open.png';
  else hambs[whichHamb].src = '../assets/menu-hamb.png';

  hambContainers[whichHamb].classList.toggle('hamb_container-style');
};

const hambs = [...document.querySelectorAll('.hamb')];
const hambContainers = [...document.querySelectorAll('.hamb_container')];

hambs.forEach((e) => e.addEventListener('click', hambHandler));

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
const switcher = document.querySelectorAll('.switcher');
const secondPage = document.querySelector('.secondPage');
const main = document.querySelector('.main');

const handleSwitch = function (e) {
  if (!e.target.classList.contains('pageState')) return;

  console.log(e.target.dataset.page);

  pageStatus = Number(e.target.dataset.page);

  if (pageStatus) {
    observer.unobserve(section1);
    observer2.unobserve(section1_0);
    toggleStates(pageStatus);
    observer.observe(section1);
    document.title = 'O Coliseu - Marmoraria';
  } else {
    observer2.unobserve(section1_0);
    observer.unobserve(section1);
    window.scrollTo(0, 0);
    toggleStates(pageStatus);

    observer2.observe(section1_0);
    document.title = 'O Coliseu - Esquadrias e Vidros';
  }
};

const toggleStates = function (status) {
  if (status) {
    navLinks.classList.remove('hidden');
    main.classList.remove('hidden');
    secondPage.classList.add('hidden');
  } else {
    navLinks.classList.add('hidden');
    main.classList.add('hidden');
    secondPage.classList.remove('hidden');
    secondPage.classList.add('flex');
  }
};

let pageStatus = 1;

switcher.forEach((element) => element.addEventListener('click', handleSwitch));

//
