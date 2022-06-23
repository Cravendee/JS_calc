// Operator Input
const operator = prompt ('Enter Operator (select either +, -, *, or /): ');

// Operand Input
const num1 = parseFloat(prompt ('Enter First Number: '));
const num2 = parseFloat(prompt ('Enter Second Number: '));

let result;

if (operator == '+') {
    result = num1 + num2;
}
else if (operator == '-') {
    result = num1 - num2;
}
else if (operator == '*') {
    result = num1 * num2;
}
else if (operator == '/') {
    result = num1 / num2;
}
else {
    result = "Invalid operator selected"
}

alert(result);
