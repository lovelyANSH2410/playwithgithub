// Add input element inside form, before button, to take fruit description


// Show the fruit description in italics on the next line
const filter = document.getElementById('filter');
const fruitForm = document.getElementById('fruitForm');
const fruitList = document.querySelector('.fruits');

fruitForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const fruitName = document.getElementById('fruit-to-add').value;
  const fruitDescription = document.getElementById('fruit-description').value;

  if (fruitName.trim() !== '') {
    const newFruitItem = document.createElement('li');
    newFruitItem.classList.add('fruit');
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'x';

    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.classList.add('description');
    descriptionParagraph.innerHTML = `<em>${fruitDescription}</em>`;

    newFruitItem.textContent = fruitName;
    newFruitItem.appendChild(descriptionParagraph);
    newFruitItem.appendChild(deleteButton);

    fruitList.appendChild(newFruitItem);

    document.getElementById('fruit-to-add').value = '';
    document.getElementById('fruit-description').value = '';
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text


filter.addEventListener("keyup", function(event){
  const textEntered = event.target.value.toLowerCase();
  const fruitItems = document.getElementsByClassName("fruit");
  for(let i = 0; i<fruitItems.length; i++){
    const currentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
    if(currentFruitText.indexOf(textEntered) === -1){
      fruitItems[i].style.display = 'none';
    } else{
      fruitItems[i].style.display = 'flex';
    }
  }
});