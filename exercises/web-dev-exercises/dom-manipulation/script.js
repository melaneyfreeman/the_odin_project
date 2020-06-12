const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is the text-content!!!';

const content2 = document.createElement('div');
content2.classList.add('content2')
content2.textContent = 'here';

const par = document.createElement('p');
const head3 = document.createElement('h3');
const newDiv = document.createElement('div');
const divh1 = document.createElement('h1');
const divPar = document.createElement('p');

par.textContent = "Hey I'm red!";
head3.textContent = "I'm a blue h3!";
divh1.textContent = "I'm in a div";
divPar.textContent = "ME TOO!"

par.style.color = "red";
head3.style.color = "blue";
newDiv.style.backgroundColor = "pink";
newDiv.style.borderColor = "black";
newDiv.style.borderStyle = "solid";


container.appendChild(content);
container.appendChild(content2);
content2.appendChild(par);
content2.appendChild(head3);
content2.appendChild(newDiv);
newDiv.appendChild(divh1);
newDiv.appendChild(divPar);


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        alert(button.id);
    });
});

