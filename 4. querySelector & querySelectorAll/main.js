// Write the code as shown in the video below:

const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruitBasket = document.getElementById('basket-heading');
fruitBasket.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const basketHeading = document.querySelector('h2');
basketHeading.style.leftMargin = '30px';

//querySelectorAll is used to grab all the elements with same class or tag

const fruitItems = document.querySelectorAll('.fruit');

for(let i = 0; i<fruitItems.length; i++){
  fruitItems[i].style.backGroundColor = 'white';
  fruitItems[i].style.padding = '10px';
  fruitItems[i].style.margin = '10px';
  fruitItems[i].style.borderRadius = '5px';
}

const oddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i = 0; i<oddFruitItems.length; i++){
  oddFruitItems[i].style.backgroundColor = 'lightgrey';
}

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i = 0; i<evenFruitItems.length; i++){
  evenFruitItems[i].style.backgroundColor = 'brown';
  evenFruitItems[i].style.color = 'white';
}







// Write answer to the questions asked below: