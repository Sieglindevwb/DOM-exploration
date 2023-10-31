
const allTitles = document.body.querySelectorAll(".important")

allTitles.forEach (function (title) {
  title.setAttribute('title', 'This is an important item');
});


const importantImages = document.querySelectorAll('img.important');

document.querySelectorAll('img').forEach(function (image) {
    if( Array.from(importantImages).includes(image)) {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
});


const allParagraphs = document.body.querySelectorAll("p");

allParagraphs.forEach (function(paragraph){
    console.log('Paragraph Text:' + paragraph.innerText);
    console.log('Paragraph Class' + paragraph.className);
    console.log('-----------------------');
});

const colorParagraph = document.body.querySelectorAll('p')

document.querySelectorAll('p').forEach(function (paragraph){
    if(paragraph.classList.length === 0){
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        paragraph.style.color = randomColor;
    } 
});