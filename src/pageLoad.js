import { create } from "lodash";
import { openTabContent } from ".";
import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/main.css';

export const pageLoad = () => {
 const content = document.querySelector('#content');
 const createTab = document.createElement('div');
 createTab.setAttribute('class', 'tab');

 content.appendChild(createTab);

 const homeButton = document.createElement('h1');
 const menuButton = document.createElement('h1');
 const contactButton = document.createElement('h1');

 homeButton.setAttribute('class', 'Home');
 menuButton.setAttribute('class', 'Menu');
 contactButton.setAttribute('class', 'Contact');

 homeButton.innerHTML = 'HOME';
 menuButton.innerHTML = 'MENU';
 contactButton.innerHTML = 'CONTACT';

 createTab.appendChild(homeButton);
 createTab.appendChild(menuButton);
 createTab.appendChild(contactButton);
}


