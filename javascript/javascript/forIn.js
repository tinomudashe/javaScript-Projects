const person = { firstName: "John", lastName: "Doe", age: 25 }

let text = "";

for (let x in person) {
    text += ` ${person[x]}`
}
console.log(text);