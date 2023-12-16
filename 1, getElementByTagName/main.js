// getElementById

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange';

const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';


// getElementsByClassName
const items = document.getElementsByClassName('fruit');
items[2].style.backgroundColor = 'yellow';

for(let i = 0; i<items.length; i++){
  items[i].style.fontWeight = 'bold';
}