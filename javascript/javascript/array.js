function arrayPrint(array) {

    for (let i = 1; i < 5; i++) {
        var text = `${array[i]}\n`;
        console.log(text);
    }
}

const test = ['love', 'trust', 'responsibilty', 'commitment', 'promises'];

arrayPrint(test);
console.log(test.sort());