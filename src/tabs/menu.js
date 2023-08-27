import css from '/home/ludaga/Resturant-Page-Webpack/src/tabs/styles/contact.css'; 

export const createMenuContent = () => {
  const content = document.querySelector('#content');
  const menuContent = document.createElement('div');
  menuContent.setAttribute('class', 'tabcontent');
  menuContent.setAttribute('id', 'menuContent');

  const columnOne = document.createElement('div');
  columnOne.setAttribute('class', 'column1')

  const food1 = document.createElement('h5');

  const food2 = document.createElement('h5');
  const food3 = document.createElement('h5');
  const food4 = document.createElement('h5');
  const food5 = document.createElement('h5');

  food1.innerHTML = 'Food1 30kr'
  food2.innerHTML = 'Food2 40kr'
  food3.innerHTML = 'Food3 50kr'
  food3.innerHTML = 'Food4 60kr'
  food5.innerHTML = 'Food5 70kr'

  columnOne.appendChild(food1);
  columnOne.appendChild(food2);
  columnOne.appendChild(food3);
  columnOne.appendChild(food4);
  columnOne.appendChild(food5);

  const columnTwo = document.createElement('div');
  columnTwo.setAttribute('class', 'column2')

  const food6 = document.createElement('h5');
  const food7 = document.createElement('h5');
  const food8 = document.createElement('h5');
  const food9 = document.createElement('h5');
  const food10 = document.createElement('h5');

  food6.innerHTML = 'Food6 30kr'
  food7.innerHTML = 'Food7 40kr'
  food8.innerHTML = 'Food8 50kr'
  food9.innerHTML = 'Food9 60kr'
  food10.innerHTML = 'Food10 70kr'

  columnTwo.appendChild(food6);
  columnTwo.appendChild(food7);
  columnTwo.appendChild(food8);
  columnTwo.appendChild(food9);
  columnTwo.appendChild(food10);

  const columnThree = document.createElement('div');
  columnThree.setAttribute('class', 'column3')
  
  const food11 = document.createElement('h5');
  const food12 = document.createElement('h5');
  const food13 = document.createElement('h5');
  const food14 = document.createElement('h5');

  food11.innerHTML = 'Food11 30kr'
  food12.innerHTML = 'Food12 40kr'
  food13.innerHTML = 'Food13 50kr'
  food14.innerHTML = 'Food14 60kr'

  columnThree.appendChild(food11);
  columnThree.appendChild(food12);
  columnThree.appendChild(food13);
  columnThree.appendChild(food13);
  columnThree.appendChild(food14);

  content.appendChild(menuContent);
  menuContent.appendChild(columnOne);
  menuContent.appendChild(columnTwo);
  menuContent.appendChild(columnThree);

}