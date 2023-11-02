const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const actionSquares = document.querySelectorAll('.actionsquare')
const logList = document.querySelector('ul');
const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');

const clickOnSquare = (e) => {
  const color = e.target.classList[1];
  console.log(e.target.classList[1])
  console.log(getElapsedTime())


    // Create new <li> element
    const newListItem = document.createElement('li');
    newListItem.textContent = `Clicked on ${color} square at ${getElapsedTime()}`;

     // Append new <li> to the log list
     logList.appendChild(newListItem);
    
     // Create a new div with class .displayedsquare and append it
     const newDiv = document.createElement("div");
     newDiv.classList.add("displayedsquare", color);
     
    displayedsquareWrapper.appendChild(newDiv);
     
     // Alert with the color when a square is clicked
     newDiv.addEventListener('click', function() {
       alert(`You clicked on a ${color} square!`);
      });
    };

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare) 
}

// Event listener for keyboard events
document.body.addEventListener('keydown', function(event) {
  if (event.key === ' ') {
    // Randomly change background color of the whole page
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    
    // Log spacebar usage
    console.log(`Spacebar used at ${getElapsedTime()}`);
  } else if (event.key === 'l') {
    // Clear the log list using a while loop
    while (logList.firstChild) {
      logList.removeChild(logList.firstChild);
    }
    console.log('Log cleared');
  } else if (event.key === 's') {
    // Delete the squares
    const displayedsquares = document.querySelectorAll('.displayedsquare');
    displayedsquares.forEach(square => square.remove());
    console.log('Squares deleted');
  }
});

// TODO: Everytime the user clicks on one of the action squares - 1: Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above

// TODO: Everytime the user clicks on one of the action squares - 2: Create a new <li>
// TODO: Add an event listener on the document <body>, listening for the keypress event. 
// 1: When the spacebar is hit randomly change the background color of the whole page
// 2: Log when the spacebar is used the same way you used for the generated squares.
// 3: When the l key is pressed the log gets deleted (erases the generated <li>s)
// 4: When the s key is pressed the squares get deleted 
// TODO: Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
