function checkIsValid(value, message) {
    if ((value <= 0) || (!Number.isInteger(value))) {
        alert(message);
        return false;
    }
    return true;
}

function checkIsValidWithZero(value, message) {
    if ((value < 0) || (!Number.isInteger(value))) {
        alert(message);
        return false;
    }
    return true;
}

//Sum
function getSum() {
    let sum;
    let min;
    let max;

    min = +prompt('Input your min value');
    let conditionMin = new RegExp("^[0-9]*$");
    if (!conditionMin.test(min)) {
        alert('Input number!!!');
        return false;
    }

    max = +prompt('Input your max value');
    let conditionMax = new RegExp("^[0-9]*$");
    if (!conditionMax.test(max)) {
        alert('Input number!!!');
        return false;
    }
    sum = min;
    for (let i = min + 1; i <= max; i++) {
        sum = sum + i;
    }
    alert(`Sum is ${sum}`);
}

// GCD
function getGcd() {

    let firstNumber = prompt('Input your first value');
    let conditionFirst = new RegExp("^[1-9]*$");

    if (!firstNumber) {
        alert('Have a nice day');
        return false;
    }

    firstNumber = Math.abs(+firstNumber);

    while (!conditionFirst.test(firstNumber)) {

        alert('Input right number!!!');
        firstNumber = +prompt('Input your first value');

        if (!firstNumber) {
            alert('Have a nice day');
            return false;
        }
    }

    let secondNumber = prompt('Input your second value');
    let conditionSecond = new RegExp("^[1-9]*$");

    if (!secondNumber) {
        alert('We will miss you');
        return false;
    }

    secondNumber = Math.abs(+secondNumber);

    while (!conditionSecond.test(secondNumber)) {

        alert('Input right number!!!');

        secondNumber = Math.abs(+prompt('Input your second value'));

        if (!secondNumber) {
            alert('We will miss you');
            return false;
        }
    }

    let gcd;
    while (firstNumber * secondNumber != 0) {

        if (firstNumber >= secondNumber) {
            firstNumber = firstNumber % secondNumber;
        } else {
            secondNumber = secondNumber % firstNumber;
        }
        gcd = firstNumber + secondNumber;


    }
    alert(`Your gcd is ${gcd}`);
}

//All Dividers 

function getAllDividers() {
    let userNumber = prompt('Input your number');

    if (userNumber == null) {
        alert('Good bye');
        return false;
    }

    userNumber = +userNumber;


    let checkNumber = new RegExp("^[1-9]*$");

    while (!checkNumber.test(userNumber)) {



        alert('Input right number!!!');
        userNumber = +prompt('Input your number');

        if (userNumber == null) {
            alert('Later...');
            return false;
        }

    }

    let dividers = `All dividers of ${userNumber} are: 1`;
    for (let i = 2; i <= userNumber; i++) {
        if (userNumber % i == 0) {
            dividers += ", " + i;

        }

    }
    alert(dividers);
}

//DigitsQuantity
function getDigitsQuantity() {

    let userNumber = prompt('Input your number');

    if (userNumber == null) {
        alert('Good bye');
        return false;
    } else if (userNumber == 0) {
        alert("It is Zero, single digit");
        return false;
    }

    userNumber = +userNumber;

    let checkNumber = new RegExp("^[1-9]*$");
    let digits = 0;

    while (!checkNumber.test(userNumber)) {

        alert('Input right number!!!');

        userNumber = prompt('Input your number');

        if (userNumber == 0) {
            alert("It is Zero, single digit");
            return false;
        }

        if (userNumber == null) {
            alert('Good bye');
            return false;
        }
        userNumber = +userNumber;
    }

    while (userNumber >= 1) {
        userNumber = userNumber / 10;
        digits++;

    }
    alert(`You have ${digits} digits`);

}

// 10 digits
function getTenDigits() {

    let positiveDigits = 0;
    let negativeDigits = 0;
    let zeroDigits = 0;

    for (let i = 0; i < 4; i++) {
        let userNumber = prompt('Input your number');

        if (userNumber == null) {
            alert('Good bye');
            return false;
        }

        userNumber = +userNumber;

        let checkNumber = new RegExp("^[-,0-9]*$");



        while (!checkNumber.test(userNumber)) {

            alert('Input right number!!!');
            userNumber = prompt('Input your number');

            if (userNumber == null) {

                alert('See you soon');
                return false;
            }
            userNumber = +userNumber;
        }


        if (userNumber > 0) {
            positiveDigits++;
        } else if (userNumber < 0) {
            negativeDigits++;
        } else {
            zeroDigits++;
        }
    }
    alert(`You have ${positiveDigits} positive, ${negativeDigits} negative digits
     and ${zeroDigits} zeros.`)

}

// Calculator

function getCalculator() {

    let firstNumber;
    let secondNumber;
    let operand;
    let result;
    let question;

    while (1) {
        firstNumber = +prompt('Input first number')
        secondNumber = +prompt('Input second number')
        operand = +prompt(`Choose your operand: 
        1 for '+'
        2 for '-'
        3 for '*'
        4 for '/' `);

        if (!firstNumber || !secondNumber || !operand) break;
        if (operand == 1) {
            result = firstNumber + secondNumber;
        } else if (operand == 2) {
            result = firstNumber - secondNumber;
        } else if (operand == 3) {
            result = firstNumber * secondNumber;
        } else if (operand == 4) {
            result = firstNumber / secondNumber;
        } else {
            alert('Check your input');
        }
        alert(`Result is ${result}.`)
        question = prompt('One more time?');
        if (question == null) break;
    }
    alert('Good luck');
}

// Push the digits
function getPushedNumber() {
    let userNumber;
    let pushIndex;
    let resultNumber;
    let pushedDigits = '';
    let staticDigits = '';
    userNumber = prompt(`Input your number`);
    pushIndex = +prompt(`Input your push index`);
    for (let i = 0; i < pushIndex; i++) {
        pushedDigits += userNumber[i];
    }
    for (let j = pushIndex; j < userNumber.length; j++) {
        staticDigits += userNumber[j];
    }
    resultNumber = staticDigits + pushedDigits;
    alert(`
    Your input: ${userNumber};
    Result : ${resultNumber}.`);

}

function getWeeksDay() {

    alert(`Hello, let's start!`);

    let randomDay = Math.floor(Math.random() * 7);
    let question;



    for (let i = randomDay;; i++) {

        switch (i) {
            case 0:
                question = prompt(`Sunday. Next day?`);
                break;
            case 1:
                question = prompt(`Monday. Next day?`);
                break;
            case 2:
                question = prompt(`Tuesday. Next day?`);
                break;
            case 3:
                question = prompt(`Wednesday. Next day?`);
                break;
            case 4:
                question = prompt(`Thursday. Next day?`);
                break;
            case 5:
                question = prompt(`Friday. Next day?`);
                break;
            case 6:
                question = prompt(`Saturday. Next day?`);
                break;
        }
        if (question == null) {
            break
        };

        if (i == 6) {
            i = -1;
        }

    }
    alert(`Good luck`);
}

//Table 
function getTable() {
    alert(`Hello, let's start!`);

    for (let i = 2; i < 10; i++) {
        console.log(`${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${j} * ${i} = ${j *i}`);

        }
    }
}

//Guess number

function getGuessNumber() {
    alert(`Choose your number from 0 to 100`);
    let userNumber = 50;
    let start = 0;
    let finish = 100;
    let half = 50;
    let interval;
    let a = b = half,
        c;


    while (prompt(`Your number is ${userNumber}?`) == null) {

        interval = +prompt(`Your number is smaller(1) or bigger(2)?`);

        if (interval == 1) {
            finish = userNumber - 1;
            alert(`start ${start} finish ${finish}`);
            if ((finish - start) % 2 == 0) {
                half = (finish - start) / 2;
            } else {
                half = ((finish - start) - 1) / 2 + 1;
            }


            userNumber = finish - half;



            alert(`Your  small half number is ${half}`);


        } else if (interval == 2) {
            start = userNumber + 1;
            alert(`start ${start} finish ${finish}`);
            if ((finish - start) % 2 == 0) {
                half = (finish - start) / 2;
            } else {
                half = ((finish - start) - 1) / 2 + 1;
            }

            userNumber = start + half;
            alert(`Your  big half number is ${half}`);
        }
    }
    alert(`Your number is ${userNumber}`);

}