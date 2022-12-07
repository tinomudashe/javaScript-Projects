class Student {
    constructor(studentNumber, studentName, studentCoarse) {
        this.studentNumber = studentNumber;
        this.studentCoarse = studentName;
        this.studentCoarse = studentCoarse;
    }
    coarse() {
        return this.studentCoarse
    }

}

let max = new Student('01', 'Maxwell', 'Computer Science');

console.log(max.coarse());