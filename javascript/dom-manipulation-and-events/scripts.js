// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

//adds red text
const redText = document.createElement('p');
redText.classList.add('red-text');
redText.textContent = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

//adds blue h3
const blueText = document.createElement('h3');
blueText.classList.add('blue-text');
blueText.textContent = "I'm a blue h3!";
blueText.style.color = "blue";
container.appendChild(blueText);

