// Write your code here!
const main = document.querySelector('main');
main.remove();

const victory = document.createElement('h1');
victory.id = "victory"
document.body.appendChild(victory);
const  newHeader = document.querySelector('h1#victory');

newHeader.innerHTML = "YOUR-NAME is the champion";