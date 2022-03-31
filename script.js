const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) => {
    calculatorScreen.value = number;
}
const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value);
    })
})

let prevNum = "";
let calcOpr = "";
let currNum = "";
const inputNumber = (number) => {
    if (currNum === "0") {
        currNum = number;
    } else {
        currNum += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currNum);
    })
})

const oper = document.querySelectorAll(".operator");
oper.forEach((opr) => {
    opr.addEventListener("click", (event) => {
        inptOpr(event.target.value);
    })
})

const inptOpr = (oper) => {
    prevNum = currNum
    calcOpr = oper
    currNum = ""
}

const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currNum);
})

const calculate = () => {
    let result = "";
    switch (calcOpr) {
        case "+":
            result = parseFloat(prevNum) + parseFloat(currNum)
            break
        case "-":
            result = parseFloat(prevNum) - parseFloat(currNum)
            break
        case "*":
            result = parseFloat(prevNum) * parseFloat(currNum)
            break
        case "/":
            result = parseFloat(prevNum) / parseFloat(currNum)
            break
        case "%":
            result = parseFloat(prevNum) / 100
            break
        default:
            break
    }
    currNum = result
    calcOpr = ""
}

const clearAll = () => {
    prevNum = ""
    calcOpr = ""
    currNum = "0"
}
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currNum);
})

inputDecimal = (dot) => {
    if (currNum.includes('.')) {
        return;
    }
    currNum += dot
}
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currNum);
})
