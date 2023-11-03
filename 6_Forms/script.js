const spanInput = document.body.querySelector('span');
const firstnameInput = document.getElementById("firstname")

// Add a keyup listener on the first input field
firstnameInput.addEventListener("keyup", function(event) {
    let inputValue = event.target.value;
    console.log(inputValue);
    spanInput.textContent = inputValue;
    // displayFirstnameInput.textContent = inputValue;

    console.log("Input Value: " + inputValue);
});

const numberInput = document.getElementById("age");
const hardTruth = document.getElementById("a-hard-truth");

//Add a keyup listener on the second input
numberInput.addEventListener("keyup", function(event) {
    let inputNumber = parseInt(event.target.value);
    if (inputNumber < 18) {
        hardTruth.style.visibility = "hidden";
    } else {
        hardTruth.style.visibility = "visible";
    }
});

const passwordTrue = document.getElementById("pwd");
const passwordConfirmTrue = document.getElementById("pwd-confirm");

// Add a keyup listener on both fields and show a visual hint
passwordTrue.addEventListener("keyup", validatePassword);
passwordConfirmTrue.addEventListener("keyup", validatePassword); 

function validatePassword() {
    const password = passwordTrue.value;
    const confirmPassword = passwordConfirmTrue.value;

    if (password.lenght < 6 || password !== confirmPassword) {
        passwordTrue.style.borderColor = "red";
        passwordConfirmTrue.style.borderColor = "red";
    } else {
        passwordTrue.style.borderColor = "";
        passwordConfirmTrue.style.borderColor = "";
    }
};

const toggleDarkmode = document.getElementById('toggle-darkmode');
const body = document.body;

toggleDarkmode.addEventListener("change",(event) => {
    if (toggleDarkmode.value === "dark") {
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else {
        body.style.backgroundColor = ""
        body.style.color = ""
    }
});


// TODO: Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
// TODO: Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
// TODO: Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
// TODO: Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.