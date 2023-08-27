import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/contact.css'; 

export const createContactContent = () => {
  const content = document.querySelector('#content');
  const contactContent = document.createElement('h5');
  contactContent.setAttribute('class', 'tabcontent');
  contactContent.setAttribute('id', 'contactContent');
  contactContent.innerHTML = 'FUTURE CONTACT CONTENT';

  content.appendChild(contactContent);
}


