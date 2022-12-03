const numbers = [1, 2, 3, 4, 5]

numbers.forEach(switcher);

function switcher(number) {
    switch (number) {
        case 1:
            console.log("one");
            break;
        case 2:
            console.log("two");
            break;
        case 3:
            console.log("three");
            break;
        case 4:
            console.log("four");
            break;
        default:
            console.log("five");
    }
}