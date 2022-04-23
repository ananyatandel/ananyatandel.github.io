let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
  var paragraph = document.createElement('p');
  // make text show up after adding a task
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  // clear the input text field after adding a task
  inputField.value = "";
  // function to check off a task from the to do list
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration = "line-through";
  })
  // function to remove a task from the to do list
  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph);
  })
})
