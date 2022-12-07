const person = {

    firstName: "john",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};