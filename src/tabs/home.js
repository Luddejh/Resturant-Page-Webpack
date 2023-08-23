import '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/home.css';

export default function createContact() {
 const content = document.querySelector('.tabs');
 const home = document.createElement('h2');

 home.innerHTML = "HOME";

 home.setAttribute('class', "home");
 content.appendChild(home);
 return home
}