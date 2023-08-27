import { createHomeContent } from "./tabs/home";
import { createMenuContent } from "./tabs/menu";
import { createContactContent } from './tabs/contact';
import { pageLoad } from "./pageLoad";
import { onClickButtons } from "./pageLoad";
import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/main.css';
import { create } from "lodash";

pageLoad();

const homeButton = document.querySelector('.Home');
const menuButton = document.querySelector('.Menu');
const contactButton = document.querySelector('.Contact');

homeButton.addEventListener('click', openPage.bind(event, 'homeContent'));
menuButton.addEventListener('click',  openPage.bind(event, 'menuContent'));
contactButton.addEventListener('click', openPage.bind(event, 'contactContent'));

function openPage(evt, page) {
 createHomeContent();
 createContactContent();
 createMenuContent();
 console.log(evt);

 let tabcontent = document.querySelectorAll('.tabcontent');
  for(let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

 //viewing the tab that the user is clicking 
 if(evt === 'homeContent') {
  createHomeContent();
 } else if (evt === 'menuContent') {
  createMenuContent();
 } else if (evt === 'contactContent') {
  createContactContent();
 }
} 
