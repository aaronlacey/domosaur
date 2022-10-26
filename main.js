/*Change the span with the class `mess-with-me` to have a 
font size of 40px. (A span is an inline element tag, 
typically used inside a block of text)*/

let span = document.querySelector('span.mess-with-me');
span.style.fontSize = '40px';


/*Change the background color of 
the paragraph to green.*/

let paragraph = document.querySelector('p.mess-with-me');
paragraph.style.backgroundColor = 'green';


/*Hide the second dinosaur.*/

let hide = document.querySelector('#hide-me-area');
hide.style.display = 'none';

let firstDino = document.querySelector('#triceratops');
firstDino.style.width = '324px';

//Add an event listener to the span with the class mess-with-me so that when it is clicked, the font color changes to orange.

span.addEventListener('click', function(){
    span.style.color = 'orange';
}
)

firstDino.addEventListener('click', function(){
    firstDino.style.border = 'solid red';
}
)

let feathers = document.querySelector('#feathers');
feathers.addEventListener('click', function(){
    feathers.style.opacity = '0.5';
}
)

let biggify = document.querySelector('#biggify');
biggify.addEventListener('mouseover', function(){
    biggify.style.width = '200px';
}
)

