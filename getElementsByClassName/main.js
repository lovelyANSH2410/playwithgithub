const items = document.getElementsByClassName('fruit');
items[2].style.backgroundColor = 'yellow';

for(let i = 0; i<items.length; i++){
  items[i].style.fontWeight = 'bold';
}