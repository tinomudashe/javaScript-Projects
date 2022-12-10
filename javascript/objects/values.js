const person = {
    name: "john",
    age: 30,
    city: "New York"
};

const myArray = Object.values(person);
const myArray1 = Object.keys(person);

console.log(myArray);
console.log(myArray1);

for (x of Object.keys(person)) {
    console.log(x);
}