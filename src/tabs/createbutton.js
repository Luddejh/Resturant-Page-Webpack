export function createButton() {
  const tab = document.createElement('div');
  tab.setAttribute('class', 'tab');

  const homeButton = document.createElement('h1');
  const contactButton = document.createElement('h1');
  const menuButton = document.createElement('h1');
 
  homeButton.innerHTML = 'HOME';
  contactButton.innerHTML = 'CONTACT';
  menuButton.innerHTML = 'MENU';

  homeButton.setAttribute('class', 'tablinks');
  contactButton.setAttribute('class', 'tablinks');
  menuButton.setAttribute('class', 'tablinks');

  const content = document.querySelector('#content');

  content.appendChild(homeButton);
  content.appendChild(contactButton);
  content.appendChild(menuButton);
}