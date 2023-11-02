const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", 
                "Funda", "Luis", "Alexandru", "Andrej", "Danté", "jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"]

const currentArticle = document.querySelector('article');

const shuffleLearner = learners.sort((a, b) => 0.5 - Math.random());

const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function getCharacter(index) {
    return hexCharacters[index];
}

function generateNewColor() {
    let hexColorRep = "#";

    for (let index = 0; index < 6; index++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }

    return hexColorRep;
}

function getTextColor(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Choose text color based on luminance
   // return luminance > 0.5 ? '#000000' : '#FFFFFF';
   if (luminance > 0.5) {
    return '#000000'; // Return black if luminance is greater than 0.5
} else {
    return '#FFFFFF'; // Return white if luminance is not greater than 0.5
}
}

learners.forEach(function (learner) {
    const newSection = document.createElement("section");
    newSection.innerText = learner;
    const bgColor = generateNewColor();
    newSection.style.backgroundColor = bgColor;
    newSection.style.color = getTextColor(bgColor);
    currentArticle.append(newSection);
});

// TODO: make a section element for each student 
// TODO: Add random background for each section
// TODO: Create a paragraph with name of learner as content 
// TODO: Append section to article element 