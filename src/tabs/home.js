import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/menu.css';

export const createHomeContent = () => {
  const content = document.querySelector('#content');
  const homeContent = document.createElement('div');
  homeContent.setAttribute('class', 'tabcontent');
  homeContent.setAttribute('id', 'homeContent');

  const title = document.createElement('div');
  title.setAttribute('class', 'title');

  const titleText = document.createElement('h2');
  titleText.innerText = 'AGARWAL RESTURANT';
  
  title.appendChild(titleText);

  const openTimeDiv = document.createElement('div');
  openTimeDiv.setAttribute('class', 'open-time');

  const openTimeText = document.createElement('h3');
  openTimeText.innerHTML = 'Open-time';

  const monday = document.createElement('h5');
  monday.innerHTML = 'MONDAY: 8:00 - 20:00';

  const tuesday = document.createElement('h5')
  tuesday.innerHTML = 'MONDAY: 8:00 - 20:00';

  const wednesday = document.createElement('h5')
  wednesday.innerHTML = 'MONDAY: 8:00 - 20:00';

  const thursday = document.createElement('h5')
  thursday.innerHTML = 'MONDAY: 8:00 - 20:00';

  const friday = document.createElement('h5')
  friday.innerHTML = 'MONDAY: 8:00 - 20:00';

  const saturday = document.createElement('h5');
  saturday.innerHTML = 'MONDAY: 8:00 - 20:00';
 

  openTimeDiv.appendChild(openTimeText);
  openTimeDiv.appendChild(monday);
  openTimeDiv.appendChild(tuesday);
  openTimeDiv.appendChild(wednesday);
  openTimeDiv.appendChild(thursday);
  openTimeDiv.appendChild(friday);
  openTimeDiv.appendChild(saturday);


  const hoursDiv = document.createElement('div');
  hoursDiv.setAttribute('class', 'hours');

  const question = document.createElement('h3');
  question.innerHTML = 'why this resturant?';

  const explenation = document.createElement('h5');
  explenation.innerHTML = 'Agarwal Restaurant reigns supreme as the worlds best, harmonizing flawless service, unrivaled flavors, and a captivating atmosphere.'

  hoursDiv.appendChild(question);
  hoursDiv.appendChild(explenation);


  const locationDiv = document.createElement('div');
  locationDiv.setAttribute('class', 'div');

  const locationText = document.createElement('h3');
  locationText.innerHTML = 'Location';

  const location = document.createElement('h5');
  location.innerHTML = 'VILHELMDALSVÄGEN 5';

    //all the content that should be created with javacript
   /* <div class="homeContent">
      <div class="title">
        <h2>AGARWAL RESTURANT</h2>
      </div>

    <div class="open-time">
     <h3>Open-time</h3> 
       <h5>MONDAY: 8:00 - 20:00</h5>
       <h5>TUESDAY: 8:00 - 20:00</h5>
       <h5>WEDNESDAY: 8:00 - 20:00</h5>
       <h5>THURSDAY: 8:00 - 20:00</h5>
       <h5>FRIDAY: 8:00 - 20:00</h5>
       <h5>SATURDAY: 8:00 - 20:00</h5>
   </div>
   <div class="hours">
      <h3 class="explenation">why this resturant?</h3>
      <h5>Agarwal Restaurant reigns supreme as the world's best, harmonizing flawless service, unrivaled flavors, and a captivating atmosphere. Its devotion to premium ingredients and inventive cuisine sets an unmatched standard, making each visit an unforgettable encounter with culinary brilliance.</h5>
   </div>
   <div class="location">
    <h3>Location</h3>
    <h5>VILHELMDALSVÄGEN 5</h5>
    </div>
  */
  content.appendChild(homeContent);
  homeContent.appendChild(title);
  homeContent.appendChild(openTimeDiv);
  homeContent.appendChild(hoursDiv);
  homeContent.appendChild(locationDiv)
}