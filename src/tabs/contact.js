import '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/contact.css'

export default function createContact() {
 const content = document.querySelector('.tabs');
 const contact = document.createElement('h2');
   
 contact.innerHTML = "CONTACT";

 contact.setAttribute('class', "contact");
 content.appendChild(contact);
}