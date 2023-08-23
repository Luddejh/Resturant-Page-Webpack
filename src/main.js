import { head } from "lodash";
import '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/main.css';

export default function createHeadLineContent() {
 const divContainer = document.getElementById('content');
 
 const mainContentContainer = document.createElement('div');
 mainContentContainer.setAttribute('class', 'mainContentContainer')


 const headLine = document.createElement('h1');
 headLine.innerHTML = "AGARWAL RESTURANT";
 headLine.setAttribute('class', 'headline');

 const main = document.createElement('h5');
 main.innerHTML = "Indulge in an unrivaled symphony of flavors and hospitality at our restaurant, where artful cuisine and a welcoming atmosphere converge to create an unparalleled dining experience. Undoubtedly the best in the world"
 main.setAttribute('class', 'main');

 divContainer.appendChild(mainContentContainer);
 mainContentContainer.appendChild(headLine);
 mainContentContainer.appendChild(main);    
}

