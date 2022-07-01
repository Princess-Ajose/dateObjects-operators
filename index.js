// DAY 3 EXERCISES

// 1.

let firstName = 'Halimot'
let lastName = 'Ajose'
let country = 'Nigeria'
let city = 'Lagos'
let age = 22
let isMarried = false
let recent_year = 2022


console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof recent_year);

// 2

let num = '10'
console.log(+num);

// 3

let num2 = '9.8'
console.log(Math.round(parseFloat(num2)));

// 4 i

let java = 'JavaScript'
let java2 = 'JavaScript'
console.log(java == java2);
console.log(java === java2);
console.log(java >= java2);

// 4 ii

console.log(java !== java2);
console.log(java != java2);
console.log(java > java2);

// 5
let four_three_greater = 4 > 3
let four_three_equal = 4 >= 3
let four_three_less = 4 < 3
let four_th_le_eq = 4 <= 3
let four_four_value = 4 == 4
let four_four_strict = 4 === 4
let four_four_neg = 4 != 4
let four_fo_neg_value = 4 !== 4
let four_four_str = 4 != '4'
let four_fo_str_val = 4 == '4'
let four_fo_strict = 4 === '4'

console.log(four_three_greater);
console.log(four_three_equal);
console.log(four_three_less);
console.log(four_th_le_eq);
console.log(four_four_value);
console.log(four_four_strict);
console.log(four_four_neg);
console.log(four_fo_neg_value);
console.log(four_four_str);
console.log(four_fo_str_val);
console.log(four_fo_strict);

let jag = 'jargon'
let pyt = 'python'
let jag_le = jag.length
let pyt_le = pyt.length
console.log(jag_le !== pyt_le);


// 6
let tenTh = 4 > 3 && 10 < 12
let tenTw = 4 > 3 && 10 > 12
let fouThr = 4 > 3 || 10 < 12
let tenTwe = 4 > 3 || 10 > 12
let tenTwNe = !(4 > 3)
let tenTweNe = !(4 < 3)
let FasLe = !(false)
let fals = !(4 > 3 && 10 < 12)
let falsey = !(4 > 3 && 10 > 12)
let four_falsey = !(4 === '4')
let dra = 'dragon, python'

console.log(tenTh);
console.log(tenTw);
console.log(fouThr);
console.log(tenTwe);
console.log(tenTwNe);
console.log(tenTweNe);
console.log(FasLe);
console.log(fals);
console.log(falsey);
console.log(four_falsey);

console.log(!dra.includes('on'));

// 7

// let now = new Date();
//Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

// Using getTime()
// const now = new Date() //
// console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
// Using Date.now()
// const allSeconds = Date.now() //
// console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// const timeInSeconds = new Date().getTime()
// console.log(allSeconds == timeInSeconds) // true
// let recentYear = now.getFullYear()

let now, hour_here, recentYear, minutes, months, day;

now = new Date()
hour_here = now.getHours()
recentYear = now.getFullYear()
minutes = now.getMinutes()
months = now.getMonth() + 1
day = now.getDate();

console.log(recentYear);
console.log(months)
console.log(now);
console.log(day);
console.log(hour_here);
console.log(minutes);

let seconds = Date.now()
console.log(seconds);

// Level 2

// 1

// const baseOfTri = prompt('Enter the  base of a triangle');
// const heightOfTri = prompt('Enter the height of a triangle');
// const areaOfTri = 0.5 * baseOfTri * heightOfTri
// confirm('Are you sure you want to find the Area of the Triangle?');
// // alert(`The area of the triangle is ${areaOfTri}`);
// console.log(`The area of the triangle is ${areaOfTri}`);

// // 2

// const sideA = prompt('Enter the first side of the triangle');
// const sideB = prompt('Enter the second side of the triangle');
// const sideC = prompt('Enter the last side of the triangle');
// const perimeterOfTri = sideA + sideB + sideC
// confirm('Are you sure you want to find the perimeter of the triangle?');
// // alert(`The perimeter of the triangle is ${perimeterOfTri}`);
// console.log(`The perimeter of the triangle is ${perimeterOfTri}`);

// // 3

// const length = prompt('Enter the length of the rectangle');
// const width = prompt('Enter the width of the rectangle');
// const areaOfRec = length * width;
// const perimeterOfRec = 2 * (length+width);
// confirm('Are you sure you want to find the area and the perimeter of the rectangle?');
// // alert(`The area of the rectangle is ${areaOfRec} and the perimeter of the rectangle is ${perimeterOfRec}`);
// console.log(`The area of the rectangle is ${areaOfRec} and the perimeter of the rectangle is ${perimeterOfRec}`);

// // 4
// const pi = 3.14

// const radius = prompt('Enter the radius of a circle')
// const areaOfCir = pi * radius * radius
// const circumferenceOfCir = 2 * pi * radius;
// confirm('Are you sure you want to find the area and the circumference of the circle?');
// // alert(`The area of the circle is ${areaOfCir} and the circumference of the circle is ${circumferenceOfCir}`);
// console.log(`The area of the circle is ${areaOfCir} and the circumference of the circle is ${circumferenceOfCir}`);

// // 5

// const interceptX = prompt('Enter the valus of X in your slope')
// const slope = 2 * interceptX - 2;
// confirm('Are you sure you want to calculate the slope?')
// console.log(`The value of y is ${slope}`)

// let x = 4
// let y = 2 * x - 2
// console.log(y);


// // 6

// const firstY = prompt('Enter the value of y1');
// const secondY = prompt('Enter the value of of y2');
// const firstX = prompt('Enter the value of x1');
// const secondX = prompt('Enter the value of x2');
// const slopeM = (secondY - firstY) / (secondX - firstX); 
// confirm('Are you sure you want to calculate the gradient?')
// console.log(`The slope between point (${firstX},${firstY}) and point (${secondX},${secondY}) is ${slopeM}`);

// let y1 = 2
// let y2 = 10
// let x1 = 2
// let x2 = 6
// let m = (y2 - y1) / (x2 - x1)

// console.log(m);

// // 7 

// console.log(slope === slopeM);

// // 8
// // let e = 2 
// // console.log(e * e);
// // console.log(2 ** 2);
// const quadricEq = prompt('Enter only the value of x in the equation')
// const equation = quadricEq ** quadricEq + 6 * quadricEq + 9;

// // 9

// const hours = prompt('Enter the hours you use to work per week');
// const ratePerHour = prompt('Enter the rate you earn per hour');
// const weeklyEarnings = hours * ratePerHour;
// confirm('Are you sure you want to know your weekly earning?')
// console.log(`WOW!!!. Your weekly earning is ${weeklyEarnings}`)

// 10
// let yourName = "folashade"
// let yourName = prompt('Enter your name here');
// let nameLength = yourName.length

// // nameLength == 7
// nameLength > 7
// ?console.log(`Your name is long`)
// :console.log(`Your name is short`);

// if (nameLength > 7) {
//    console.log(`Your name is long`)
// } else {
//    console.log(`Your name is short`)
// }

// 11

// let realName = prompt('Enter your first name ');
// let surName = prompt('Enter your last name');
// let realLength = realName.length;
// let surLength = surName.length;

// realLength > surLength
// ?console.log(`Your first name, ${realName} is longer than your family name, ${surName}.`)
// : console.log(`Your family name, ${surName} is longer than your first name, ${realName}`);

// if (realLength > surLength) {
//    console.log(`Your first name, ${realName} is longer than your family name, ${surName}.`)
// } else {
//    console.log(`Your family name, ${surName} is longer than your first name, ${realName}`)
// }


// // 12

// let myAge = 500
// let yourAge = prompt('Enter your Age');
// let allAge = myAge - yourAge
// allAge > yourAge

// ?console.log(`I am ${allAge} years older than you.`)
// :console.log(`Respect!, You have been living for ${yourAge} years on earth`);

// if (allAge > yourAge) {
//    console.log(`I am ${allAge} years older than you.`)
// } else {
//    console.log(`Respect!, You have been living for ${yourAge} years on earth`);
// };

// 13

let users, usersYear, agge, remaingYear;
now = new Date();
users = prompt('Enter your birth year');
agge = now.getFullYear() - users;
remaingYear = 18 - agge;

agge < 18
? console.log(`opps! You are to wait for ${remaingYear} year before you can drive.`)
: console.log(`wow! You are allowed to Drive`)

// if (agge < 18){
//    console.log(`opps! You are to wait for ${remaingYear} year before you can drive.`)
// }else {
//    console.log(`wow! You are allowed to Drive`)
// }

// 14

const userNumbersOfYears = prompt('Enter your birth year');
const totalSecond = +userNumbersOfYears * (60 * 60 * 24 * 365.25);
console.log(`You've lived for ${totalSecond} on earth.`);


// 15 i

let hour, year, minute, month, days;

now = new Date()
hour = now.getHours()
year = now.getFullYear()
minute = now.getMinutes()
month = now.getMonth() + 1
days = now.getDate() + 1

console.log(`${year}-${month}-${days} ${hour}:${minute}`);
console.log(`${days}_${month}-${year} ${hour}:${minute}`);
console.log(`${days}/${month}/${year} ${hour}:${minute}`);

// Level 3 
// 1

console.log(`${year}-${month}-${days} ${hour}:${minute}`)
