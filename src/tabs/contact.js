import { create } from 'lodash';
import '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/contact.css'


export default function createContact() {  
 const content = document.querySelector('.tabs');
 const contact = document.createElement('h2');
   
 contact.innerHTML = "CONTACT";

 contact.setAttribute('class', "contact");
 content.appendChild(contact);

 return content
}

export function appendContactContent() {
 const maincontainer = document.querySelector('#content');

 const contactContainer = document.createElement('div');
 contactContainer.setAttribute('class', 'contactContainer');

 maincontainer.appendChild(contactContainer);
}


//function for removing the content when the user clicks on the contact tab.
export function removeMainContent() {
 const removeContent = document.querySelector('.mainContentContainer');
 const removeImage = document.querySelector('.indianFood');

 removeContent.remove();
 removeImage.remove();
}

