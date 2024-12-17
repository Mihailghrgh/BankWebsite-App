'use strict';

//Just the beginning

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////// Implementing Smooth Scrolling ////////////

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const scroll = section1.getBoundingClientRect();

  console.log(e.target.getBoundingClientRect());

  //scrolling absolute position relative to the page
  // window.scrollTo({
  //   left: scroll.left + window.scrollX,
  //   top: scroll.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  //this way a scroll is declared a smooth scroll

  //This only works in modern browsers !!!!
  section1.scrollIntoView({ behavior: 'smooth' });
});

///Lots of DOM EVENTS that will be used for this section to create more of a dynamic website Also Inheritance in Javascript is in multiple

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

//individual sections within a class
document.getElementById('section--1');
const allBtns = document.getElementsByTagName('button');

//selecting elements by class Names
const allEl = document.getElementsByClassName('btn');

//creating and inserting elements
const newElement = document.createElement('div');
newElement.classList.add('cookie-message');

//inserting the element by creating a inner HTML and passing it into a section
newElement.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got It!</button>';

//prepend first child // append last child of the elements
//header.prepend(newElement);
//you can also clone the elements
//header.append(newElement.cloneNode(true));
//you can also use the before or after instead of prepend

//deleting the elements
header.before(newElement);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    newElement.remove();
    //we can also use this method
    //newElement.parentElement.removeChild(newElement);
  });

///////////////////// Styles in JS AND DOM //////////////////

newElement.style.backgroundColor = '#37383d';
const color = newElement.style.backgroundColor;
//Two ways of accessings the value of certain attribute
//Get method selecting the element and color
console.log(getComputedStyle(newElement).backgroundColor);

//storing the element in another variable and console log it
console.log(color);

//parsing
newElement.style.height =
  Number.parseFloat(getComputedStyle(newElement).height) + 20 + 'px';

//Just like GET . We also have a SET Proprety option for elements in the DOM.

//document.documentElement.style.setProperty('--color-primary', 'orangered');

//////////////////// Atributes in HTML //////////////////////

//setting and getting attributes of a HTML element
const logo = document.querySelector('.nav__link');
logo.setAttribute('company', 'Regina Olteniei');
logo.getAttribute('href');
console.log(logo);

//HREF is absolute it will return the absolute URL of this page while the get attribute with
const link = document.querySelector('.nav__link--btn');
link.href;
link.getAttribute('href');

//Data Attributes in HTML
link.dataset.versionNumber; //storing data in the HTML code

//Classes to Add elements, remove , toggle specific areas of the HTML code , or contains
// link.classList.add('c');
// link.classList.remove('c');
// link.classList.toggle('c');
// link.classList.contains('c');

///////////////// EVENTS AND EVENT HANDLER //////////////////

//another type of event Listener
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  //alert('Here it is' + e.target.getBoundingClientRect());
  //one way to remove the evnet Listener after it was done its purpose
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

//used to be done like this but now always add an event Listener to a button for an event , you can remove an event Listener

//h1.onmouseenter = (e) => alert(e.target.getBoundingClientRect());

/////////// EVENT PROPAGATION AND BUBBLING //////////////////

// rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();

//     //This stops the event from going back through all the elements
//     //e.stopPropagation();

//     //third parameter check if the other elements will listen to all other elements
//   },
//   true
// );

//////// Bubble Event Delegation and Page Navigation ////////

// The bellow function is O(n) searching time since it would search all elements

// document.querySelectorAll('.nav__link').forEach((el) =>
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     //take the HREF ATTRIbute from the HTML which represents where to scroll to
//     const iD = this.getAttribute('href');
//     //add the scroll into view for the ID for each element in the NAV_LINK
//     document.querySelector(iD).scrollIntoView({ behavior: 'smooth' });
//   })
// );

//This one is O(1) since it will take only the elements necessary

// Another way to do it
//1.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  //matching strategy
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const iD = e.target.getAttribute('href');
    document.querySelector(iD).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////  DOM  TRAVERSING /////////////////////////

const header1 = document.querySelector('h1');

//Searching through children in an Element
console.log(header1.querySelectorAll('.highlight'));
console.log(header1.childNodes);
console.log(header1.children);
console.log(header1.firstElementChild);
console.log(header1.lastElementChild);
// header1.firstElementChild.style.color = 'white';
// header1.lastElementChild.style.color = 'orangered';

//Going Upwards through parents in an element
console.log(header.parentNode);
console.log(header.parentElement);

//another way to select the closes element in the class of type .header
// header1.closest('header').style.background = 'var(--gradient-secondary)';

// header1.closest('h1').style.background = 'var(--gradient-primary)';

//Going sideways to select siblings
console.log(header1.previousElementSibling);
console.log(header1.nextElementSibling);

console.log(header1.previousSibling);
console.log(header1.nextSibling);
console.log(header1.parentElement.children);

//sidways traversing the siblings to check if they are similar to something
// [...header1.parentElement.children].forEach((el) =>{
//   if(el!== header1){
//     el.style.transform = `scale(0.5)`
//   }
// })

////////////// TABBED COMPONENT /////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const containers = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

containers.addEventListener('click', function (e) {
  //find the closest btn of class operations Tab
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  //removes the active classes for tabs and content
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  //activate tab selected
  clicked.classList.add('operations__tab--active');

  //activate data content
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////// Passing Arguments in Events Handlers//////////

const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav_link'));

  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  //const logo = document.querySelector('.header__img');

  siblings.forEach((el) => {
    if (el !== link) el.style.opacity = this;
  });

  //logo loading looks trash
  //logo.style.opacity = this;
};

//need to pass the function into the function in the event handler in order to use different values.
//bind basically helps get rid of the function call back inside the addeventListener
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

///////////// Sticky Navigation For Menu Bar ////////////////

// const initialCoord = section1.getBoundingClientRect();

// Works but its really laggy to use the scroll function from the Windows
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoord.x) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//Using the Intersection Observer API

// const obsCallBack = function (entries, observer) {
//   entries.forEach((entry) => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;

  if (entry.isIntersecting) nav.classList.add('sticky');

  //<<< I like the sticky Nav class so Not really keen on removing this since its easier to navigate back where you need>>>>///
  //else nav.classList.remove('sticky');
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: [0, 0.2],
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//////////// Intersection API with images ///////////////////

//Reveal section
const allSection = document.querySelectorAll('.section');

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

allSection.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//////////// Lazy Loading for Images ////////////////////////

const imgTarget = document.querySelectorAll('img[data-src]');

const revealImage = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  //replacing the src attribute with the right ones

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(revealImage, {
  root: null,
  threshold: 0.15,
});

imgTarget.forEach((img) => imgObserver.observe(img));

/////////// Implementing slider in Web Development //////////

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const dotContainer = document.querySelector('.dots');

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class ="dots__dot"data-slide="${i}"></button>`
    );
  });
};

createDots();

const activateDot = (slide) => {
  //remove the active class
  document
    .querySelectorAll('.dots__dot')
    .forEach((dot) => dot.classList.remove('dots__dot--active'));

  //activate the selected dot
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = (slide) => {
  //change the size of the next slide to fit into the form
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

activateDot(0);
goToSlide(0);

const nextSlide = () => {
  currentSlide === maxSlide - 1 ? (currentSlide = 0) : currentSlide++;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const prevSlide = () => {
  currentSlide === 0 ? (currentSlide = maxSlide - 1) : currentSlide--;

  goToSlide(currentSlide);
  activateDot(currentSlide);
};

//Event Handlers

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft' || e.key === 'a') {
    prevSlide();
  }

  if (e.key === 'ArrowRight' || e.key === 'd') {
    nextSlide();
  }
});

dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = +e.target.dataset.slide;
    currentSlide = slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

////////// Lifecycle of DOM EVENTS /////////////////////

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
