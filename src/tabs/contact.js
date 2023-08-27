import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/contact.css'; 

export const createContactContent = () => {
  const content = document.querySelector('#content');
  const contactContent = document.createElement('div');
  contactContent.setAttribute('class', 'tabcontent');
  contactContent.setAttribute('id', 'contactContent');
  const Email = document.createElement('h5');
  Email.innerHTML = 'Email: Ludvig.Agarwal@gmail.com';

  const Number = document.createElement('h5');
  Number.innerHTML = 'Number: 076-136-01-40';

  content.appendChild(contactContent);
  contactContent.appendChild(Email);
  contactContent.appendChild(Number);
}
