/*const fruits = new Map(
    ["apples", 500], ["bananas", 300]
    ["oranges", 200]);*/

const fruits = new Map()

fruits.set("apples", 100);
fruits.set("banana", 200);
fruits.set("cucumber", 200);

console.log(fruits.get("apples"));
console.log(fruits.size);

fruits.forEach((value) => console.log(value * 100));

for (const x of fruits.entries()) {
    console.log(x);
}