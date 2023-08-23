import '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/menu.css'


export default function createContact() {
 const content = document.querySelector('.tabs');
 const menu = document.createElement('h2');

 menu.innerHTML = "MENU";
 menu.setAttribute('class', "menu");

 content.appendChild(menu);
 return menu
}