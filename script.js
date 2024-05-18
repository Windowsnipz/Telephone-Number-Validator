const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

checkBtn.addEventListener('click', () => { // Check phone number
    if (userInput.value === '') {
        alert('Please provide a phone number');
        return;
    }
    const validString = validateNumber();
    appendResult(validString);
});

clearBtn.addEventListener('click', () => { // Clear results div
    resultsDiv.classList.remove('section');
    resultsDiv.innerHTML = '';
    userInput.value = '';
});


function validateNumber() {
    const numRegex = /^1?[-\s]?((\(\d{3}\))|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    if (userInput.value.match(numRegex)) {
        return 'Valid US number: ';
    } else {
        return 'Invalid US number: ';
    }
}

function appendResult(str) {
    const resultString = str + userInput.value;
    const resultText = document.createElement('h4');
    resultText.textContent = resultString;
    resultsDiv.appendChild(resultText);
    resultsDiv.classList.add('section');
}