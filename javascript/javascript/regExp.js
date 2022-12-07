let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3School");
let num = 1;

console.log(result);

console.log(/m/i.test(text));
/*
try {
    text = text;
    if (typeof undefined) throw "bad text";
} catch (err) {
    console.log(err);
} finally {
    console.log("we have already done the try and catch");
}*/

try {
    num.toPrecision(500);
} catch (err) {
    console.log(err.name);
}