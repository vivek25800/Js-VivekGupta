
let score = "33abc"
let score2 = undefined

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score2) // conversion

//console.log(typeof valueInNumber);
//console.log(valueInNumber); //NaN (Not a Number)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = ""

let BooleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(BooleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "vivek" => true

let someNumber = 123

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);