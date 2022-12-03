let x = "fine";

//let x = 0;
//the value cannot be redifined 

{
    let x = 2;
    //cannot be used anyway
}

{
    var y = 2;
    //can be used anyway
}

{
    carName = "volvo";
    var carName;
    //let hoisting
}