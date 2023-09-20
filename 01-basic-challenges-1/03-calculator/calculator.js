function calculator(num1, num2, operator) {
    let result;

    // Using a switch Statement

    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         break;
    //     case '-':
    //         result = num1 - num2;
    //         break;
    //     case '*':
    //         result = num1 * num2;
    //         break;
    //     case '/':
    //         result = num1 / num2;
    //         break;
    //     default:
    //         throw new Error('Invalid operator');
    // }

    // Using an if Statement
    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        throw new Error('Thats not  how we do it Bro');
    }

    return result;
}

module.exports = calculator;
