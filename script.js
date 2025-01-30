const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const result = document.getElementById('results-div');

checkButton.addEventListener('click', () => {
    const userInputValue = userInput.value;
    const regex = /^1?\s?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
    if (userInputValue.match(regex) = "") {
        alert("Please provide a phone number");
    } else if (regex.test(userInputValue)) {
        result.textContent = `Valid US number: ${userInputValue}`;
    } else {
        result.textContent = `Invalid US Number: ${userInputValue}`;
    }
});

clearButton.addEventListener('click', () => {
    userInput.value = "";
    result.textContent = "";
});