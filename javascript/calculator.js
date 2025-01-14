let runningTotal = 0;
let buffer = "O";
let previousOperator;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value)
    } else {
        // this is a number
        handleNumber(value);
    };
    screen.innerText = buffer;
}
 
function handleSymbol(symbol) { 
    // if (symbol === 'C') {
    //     buffer = '0';
    //     runningTotal = 0;
    // }

    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '-':
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        console.log('+','-','×','÷')
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    
    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '&times') {
        runningTotal *= intBuffer;
    } else if (previousOperator === '&divide') {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) { 
    if (buffer === "0") {
      buffer = numberString;
    } else {
        buffer += numberString;
    }
    
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

init();

