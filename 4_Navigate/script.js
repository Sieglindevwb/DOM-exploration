const ol = document.querySelector('ol');
const lastChild = ol.children[4]; // Select the last child of the <ol> tag
const firstChild = ol.children[0]; // Select the first child of the <ol> tag

// Move the last child to the beginning of the list
ol.insertBefore(lastChild, firstChild);

console.log(ol)

const section = document.querySelectorAll('section');
const h2 = document.querySelectorAll('h2');
//console.log(section);
const titleThird = section[1].querySelector('h2');
const titleSecond = section[2].querySelector('h2');

section[2].insertBefore(titleThird, section[2].firstElementChild);
section[1].insertBefore(titleSecond, section[1].firstElementChild);
console.log(section);