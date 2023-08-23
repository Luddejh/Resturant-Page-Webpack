import indianFood from '/home/ludaga/Resturant-Page-Webpack/src/images/indian.jpg';


export default function test() {
 const divContainer = document.querySelector('#content');
 const indian = new Image();
 indian.src = indianFood; 

 divContainer.appendChild(indian);
}
