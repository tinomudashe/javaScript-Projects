const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function(legs) {
        return this.firstName + " " + legs;
    }
}

console.log(person.fullName("wings"));