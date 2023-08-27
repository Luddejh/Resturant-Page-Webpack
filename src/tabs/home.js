import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/home.css';

export const createHomeContent = () => {
  const content = document.querySelector('#content');
  const homeContent = document.createElement('h5');
  homeContent.setAttribute('class', 'tabcontent');
  homeContent.setAttribute('id', 'homeContent');
  homeContent.innerHTML = 'FUTURE HOME CONTENT';

  content.appendChild(homeContent);
}
