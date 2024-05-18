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

});


function validateNumber() {

    return 'true';
}

function appendResult(str) {

}