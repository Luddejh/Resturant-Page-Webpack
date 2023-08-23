import _ from 'lodash';
import createHeadLineContent from './main.js';
import createContact from './tabs/contact.js';
import createHome from './tabs/home.js';
import createMenu from './tabs/menu.js';
import indian from '/home/ludaga/Resturant-Page-Webpack/src/images/indian.jpg';
import test from '/home/ludaga/Resturant-Page-Webpack/src/images/showimage.js';

function components() {
  createContact();
  createHome();
  createMenu();
  createHeadLineContent();
  test();
}

components();

const home = document.querySelector('.home');
const contact = document.querySelector('.contact');
const menu = document.querySelector('.menu');

function eventListeners() {
 home.addEventListener('click', showHomeContent);
 contact.addEventListener('click', showContactContent);
 menu.addEventListener('click', showMenuContent);
}

eventListeners();

function showMenuContent() {
  console.log('Menu');
}

function showHomeContent() {
 console.log('Home');
}

function showContactContent() {
 console.log('Contact')
}




