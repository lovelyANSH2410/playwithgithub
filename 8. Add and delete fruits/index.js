// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'
const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');
  //newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">Edit</button>';
  const newLiText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newLiText);
  newLi.className = 'fruit';

  //delete btn
  const deleteBtn = document.createElement('button');
  const deleteBtnText = document.createTextNode('x');
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = 'delete-btn';
  newLi.appendChild(deleteBtn);

  //edit button
  const editBtn = document.createElement('button');
  const editBtnText = document.createTextNode('Edit');
  editBtn.appendChild(editBtnText);
  editBtn.className = 'edit-btn';
  newLi.appendChild(editBtn);
  
  fruits.appendChild(newLi);
})

fruits.addEventListener('click', function(event){
  if(event.target.classList.contains('delete-btn')){
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
})