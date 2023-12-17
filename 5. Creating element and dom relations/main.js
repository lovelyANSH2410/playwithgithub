// Write your code below:

//create element
const para = document.createElement('p');

//createTextNode
const paraText = document.createTextNode('Total fruits: 4');
//appendchild
para.appendChild(paraText);

//
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
//secondDiv.appendChild(para);

//insert before
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para,fruits);

//setAttribute className id
para.className = 'fruitsCount';
para.id = 'fruits-total';
para.setAttribute = ('title', 'fruitsTotal');

//1.
const text = document.createElement('h3');
const textContent = document.createTextNode('Buy high quality organic fruits online');
text.appendChild(textContent);
text.style.fontStyle = 'italic';
const firstDiv = divs[0];
firstDiv.appendChild(text);