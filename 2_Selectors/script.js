
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

