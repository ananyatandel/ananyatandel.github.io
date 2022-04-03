// first interaction
function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}

function windowLoaded() {
  console.log('loaded');
  document.getElementById('button-1').addEventListener('click', button1Clicked);
  // other examples: mouseover, mousedown, mouseup, mousemove, mouseout
}

window.onload = windowLoaded;



// second interaction
const message = document.querySelector('p');

message.addEventListener('click', updateMessage);

function updateMessage() {
  const word = prompt('Enter your message:');
  message.textContent = `your message: ${word}`;
}
