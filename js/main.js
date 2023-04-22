import '../news.css';
import '../index.css';
import '../activities.css';
import '../calender.css';
import '../join.css';
import '../images/trophy-solid.svg';
import runAccordion from './accordion';

// https://www.freecodecamp.org/news/javascript-debounce-example/
// debounce to stop scroll event firing too often and slowing site down
function debounce(func, timeout = 10) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function hideNav() {
  const currentScrollPos = window.pageYOffset;
  const common = document.getElementById('commonlinks-cont');

  const mainheader = document.getElementById('header-container');
  const logo = document.getElementById('logo');

  if (currentScrollPos > 200) {
    mainheader.classList.add('small');
    logo.classList.add('small');
    common.classList.add('vanish');
    mainheader.classList.add('light');
  } else {
    mainheader.classList.remove('small');
    logo.classList.remove('small');
    common.classList.remove('vanish');
    mainheader.classList.remove('light');
  }
}

const readMore = (element) => {
  const chevron = document.getElementById(element.childNodes[1].id);
  chevron.classList.add('move');
};

const readMoreLeave = (element) => {
  const chevron = document.getElementById(element.childNodes[1].id);
  chevron.classList.remove('move');
};

function openNav() {
  const mobileNav = document.getElementById('mobile-nav');
  const icon = document.getElementById('nav-icon1');
  mobileNav.classList.toggle('open');
  icon.classList.toggle('open');
}

function init() {
  const elem = document.querySelector('.carousel');
  if (elem) {
    // eslint-disable-next-line no-unused-vars, no-undef
    const flkty = new Flickity(elem, {
      // options
      autoPlay: 5000,
      wrapAround: true,
      bgLazyLoad: true,
      contain: true,
    });
  }
  runAccordion();
  const icon = document.getElementById('nav-icon1');
  icon.addEventListener('click', openNav);

  window.addEventListener('scroll', debounce(hideNav));
  const read = document.querySelectorAll('.readmore');

  read.forEach((element) => {
    element.addEventListener('mouseover', () => readMore(element));
    element.addEventListener('mouseleave', () => readMoreLeave(element));
  });
}

window.addEventListener('load', () => {
  init();
});
