import _ from 'lodash';
import createHeadLineContent from './main.js';
import createContact from './tabs/contact.js';
import createHome from './tabs/home.js';
import createMenu from './tabs/menu.js';
import showImage from '/home/ludaga/Resturant-Page-Webpack/src/images/showimage.js';
import { appendContactContent } from './tabs/contact.js';
import { removeMainContent } from './tabs/contact.js';

function components() {
  createContact();
  createHome();
  createMenu();
  createHeadLineContent();
  showImage();
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
 removeMainContent();
 appendContactContent();
}




