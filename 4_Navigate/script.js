const ol = document.querySelector('ol');
const lastChild = ol.children[4]; // Select the last child of the <ol> tag
const firstChild = ol.children[0]; // Select the first child of the <ol> tag

// Move the last child to the beginning of the list
ol.insertBefore(lastChild, firstChild);

console.log(ol)