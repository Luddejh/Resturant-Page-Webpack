import indianFood from '/home/ludaga/Resturant-Page-Webpack/src/images/indian.jpg';


export default function showImage() {
 const divContainer = document.querySelector('#content');
 const indian = new Image();
 indian.src = indianFood; 
 indian.setAttribute('class', 'indianFood');

 divContainer.appendChild(indian);
}


