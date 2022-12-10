// Objects are mutable : They are addressed by reference, not by value
// if person is an object, the following statement will not create a copy of person

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

//const x = person;

let eyeColor = person.eyeColor.toLocaleUpperCase();

for (x in person) {
    console.log(eyeColor);
}