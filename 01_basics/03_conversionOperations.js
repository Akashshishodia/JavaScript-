let value = "Akash";

console.log(typeof value);       //string
console.log(typeof (value));     //string (via method)

let valueInNumber = Number(value);
console.log(typeof valueInNumber);    //number
console.log(valueInNumber);           //NaN

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "Deepak";

let isLoggedInBoolean = Boolean(isLoggedIn);

console.log(isLoggedInBoolean);  //true

// 1 => true; 0 => false
// "" => false

let someValue = 12;

let someValueString = String(someValue);

console.log(someValueString);  //12

//                **************************OPERATIONS****************************

let rate = 3 ;

let negRate = -rate;
console.log(negRate);  //-3

console.log(2+2); //4
console.log(2-2); //0
console.log(2*3); //6
console.log(2**3);  //8
console.log(10/5);  //2
console.log(10%4);  //0

let str1 = 4;
let str2 = 5;

console.log(str1 + str2); //9

console.log("1" + 2);           //12
console.log(1 + "2");           //12
console.log("1" + 2 + 2);       //122
console.log(1 + 2 + "2");       //32

console.log(+true);                //1
console.log(+"");                  //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2      // NOt Good to assign value // less readblity


let gameCounter = 100
++gameCounter;
console.log(gameCounter);       //101




console.log(+true);    //1

console.log(typeof +true);  //+ makes it a number(type)

console.log(+"");  //0

console.log(typeof +"");   // + makes it a number(type)





