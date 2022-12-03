const numbers = [45, 4, 9, 16];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}