let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = String(result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
alert("Hey! iam nasrallah and this is my project");