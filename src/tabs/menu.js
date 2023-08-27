import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/menu.css';

export const createMenuContent = () => {
  const content = document.querySelector('#content');
  const menuContent = document.createElement('h5');
  menuContent.setAttribute('class', 'tabcontent');
  menuContent.setAttribute('id','menuContent');
  menuContent.innerHTML = 'FUTURE MENU CONTENT';
 


  content.appendChild(menuContent);
}
