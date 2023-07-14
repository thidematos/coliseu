'use strict';

const navLinks = document.querySelector('#nav');
const navLinks2 = document.querySelector('#nav2');
const hamb = document.querySelector('.hamb');
const hambContainer = document.querySelector('.hamb_container');
const knowMoreBtn = document.querySelector('.btn__knowMore');

const componentContainer = document.querySelector('.operations');
const tabs = [...document.querySelectorAll('.operations__tab')];
const content = [...document.querySelectorAll('.operations__content')];

const rockSliders = document.querySelectorAll('.rockSlider');

const section1 = document.querySelector('#section-1');
const section1_0 = document.querySelector('#section-1_0');
const sections = document.querySelectorAll('.section');
const sections2 = document.querySelectorAll('.section2');

const marginSlider = document.querySelectorAll('.sliderML');

const hambs = [...document.querySelectorAll('.hamb')];
const hambContainers = [...document.querySelectorAll('.hamb_container')];

const switcher = document.querySelectorAll('.switcher');
const roundSwitchs = document.querySelectorAll('.roundSwitch');
const secondPage = document.querySelector('.secondPage');
const main = document.querySelector('.main');

const dummyAside = document.querySelector('.dummy');
const dummyMain = document.querySelector('.dummyMain');

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
    if (window.screen.width >= 1024) {
      const hovered = e.target;
      const siblings = [...document.querySelectorAll('.nav__link')];
      const logo = hovered.closest('.nav').querySelector('.logo');

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
  }
};

navLinks.addEventListener('mouseover', handleNav.bind(false));

navLinks.addEventListener('mouseout', handleNav.bind(true));

navLinks2.addEventListener('mouseover', handleNav.bind(false));

navLinks2.addEventListener('mouseout', handleNav.bind(true));

//////////////////////////////////////////////////////////////
//Scroll Smooth
const smoothScroll = function (e) {
  if (!e.target.classList.contains('nav__link')) return;

  e.preventDefault();

  hambHandler(e);

  const el = document.querySelector(e.target.getAttribute('href'));

  let isShowwed = el.classList.contains('section--hidden');

  if (e.target.id === 'section-6') {
    document
      .querySelector(`#${e.target.id}`)
      .scrollIntoView({ behavior: 'smooth' });
  } else {
    const headerHeight = isShowwed ? 100 + 128 : 100;
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

  const headerHeight = isShowwed ? 100 + 128 : 100;
  const position = el.getBoundingClientRect().top;
  const offsetPosition = position + window.pageYOffset - headerHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

navLinks.addEventListener('click', smoothScroll);
navLinks2.addEventListener('click', smoothScroll);

document
  .querySelector('.btn__knowMore')
  .addEventListener('click', smoothBtnHandler);

document
  .querySelector('#btn__knowMore')
  .addEventListener('click', smoothBtnHandler);

document
  .querySelectorAll('.knowMoreAside')
  .forEach((e) => e.addEventListener('click', smoothBtnHandler));

/////////////////////////////////////////////////////////////////////////////
//Sticky NavBar
const stickyHandler = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navLinks.classList.add('sticky');
    dummyMain.classList.remove('hidden');
  } else {
    navLinks.classList.remove('sticky');
    dummyMain.classList.add('hidden');
  }
};

const stickyHandler2 = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    dummyAside.classList.remove('hidden');
    navLinks2.classList.add('sticky');
  } else {
    dummyAside.classList.add('hidden');
    navLinks2.classList.remove('sticky');
    document.querySelector('#section-1_0').style = '';
  }
};

const observer = new IntersectionObserver(stickyHandler, {
  root: null,
  threshold: 0,
  rootMargin: '-' + (parseInt(getComputedStyle(navLinks).height) - 20) + 'px',
});

observer.observe(section1);

const observer2 = new IntersectionObserver(stickyHandler2, {
  root: null,
  threshold: 0,
  rootMargin: '-' + (parseInt(getComputedStyle(navLinks2).height) - 20) + 'px',
});

/////////////////////////////////////////////////////////////////////
//Reveal Elements
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

const sectionObserver2 = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((e) => sectionObserver.observe(e));

////////////////////////////////////////////////////////////////////
// Hamb
let statusHamb = [false, false];

const hambHandler = function (e) {
  if (window.screen.width < 1024) {
    if (e.target.classList.contains('pageState')) {
      statusHamb = [false, false];
      hambs.forEach((e) => (e.src = '../assets/menu-hamb.png'));
      hambContainers.forEach((e) => e.classList.remove('hamb_container-style'));
    } else {
      const whichHamb = Number(
        e.target.dataset.hamb ||
          e.target
            .closest('.hamb_container')
            .previousElementSibling.querySelector('.hamb').dataset.hamb
      );

      statusHamb[whichHamb] = !statusHamb[whichHamb];

      if (statusHamb[whichHamb]) {
        hambs[whichHamb].src = '../assets/menu-hamb-open.png';
        hambContainers[whichHamb].classList.add('hamb_container-style');
      } else {
        hambs[whichHamb].src = '../assets/menu-hamb.png';
        hambContainers[whichHamb].classList.remove('hamb_container-style');
      }
    }
  }
};

hambs.forEach((e) => e.addEventListener('click', hambHandler));

// Flip Card
const cardContainer = document.querySelector('.cards');

cardContainer.addEventListener('click', (e) => {
  e.target.closest('.card')?.classList.toggle('flipCard');
});

//Retiring Margin Left
const handleResize = function () {
  if (window.screen.width > 768 && window.screen.width < 1024) {
    sections.forEach((e) => e.classList.remove('section--hidden'));
    sections2.forEach((e) => e.classList.remove('section--hidden'));
  }

  if (window.screen.width > 1023) {
    document
      .querySelectorAll('.largeList')
      .forEach((e) => e.classList.remove('hamb_container'));
  }

  marginSlider.forEach((e) => {
    if (window.screen.width >= 1024) {
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
const handleClick = function (e) {
  if (!e.target.classList.contains('pageState')) return;

  pageStatus = Number(e.target.dataset.page);

  handleSwitch(false, pageStatus);
};

const toggleStates = function (status) {
  if (status) {
    navLinks.classList.add('hidden');
    main.classList.add('hidden');
    secondPage.classList.remove('hidden');
    secondPage.classList.add('flex');
  } else {
    navLinks.classList.remove('hidden');
    main.classList.remove('hidden');
    secondPage.classList.add('hidden');
  }
};

const handleSwitch = function (timer, pageStatus) {
  observer2.unobserve(section1_0);
  observer.unobserve(section1);

  dummyMain.classList.add('hidden');
  dummyAside.classList.add('hidden');

  const handler = function () {
    statusHamb = [false, false];
    hambs.forEach((e) => (e.src = '../assets/menu-hamb.png'));
    hambContainers.forEach((e) => e.classList.remove('hamb_container-style'));

    if (pageStatus) {
      window.scrollTo(0, 0);
      toggleStates(pageStatus);
      roundSwitchs.forEach((e) => (e.checked = true));
      sections2.forEach((e) => sectionObserver2.observe(e));
      observer2.observe(section1_0);
      document.title = 'O Coliseu - Esquadrias e Vidros';
    } else {
      window.scrollTo(0, 0);
      toggleStates(pageStatus);
      roundSwitchs.forEach((e) => (e.checked = false));
      observer.observe(section1);
      document.title = 'O Coliseu - Marmoraria';
    }
  };

  if (timer) setTimeout(handler, 300);
  else handler();
};

let pageStatus = 0;

switcher.forEach((element) => element.addEventListener('click', handleClick));
roundSwitchs.forEach((switcher) =>
  switcher.addEventListener('change', (e) => {
    handleSwitch(true, e.target.checked);
  })
);

//
