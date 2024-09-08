// // add function; adds two values

// function add(a, b) {
//   console.log(a + b);
// }
// add(2, 8);

// // cube function; returns the cubed version of a number

// function cubed(a) {
//   console.log(a * a * a);
// }
// cubed(3);

// // energy function; calculates the energy through the current and voltage

// function energy(current, voltage) {
//   console.log(current * voltage);
// }
// energy(7, 3);

// // adds 1 to a number

// function integers(a) {
//   console.log((a += 1));
// }
// integers(2);

// // adds all the numbers before the big number

// function addup(a) {
//   let big_num = 0;
//   for (let i = 1; i <= a; i++) {
//     big_num += i;
//   }
//   console.log(big_num);
// }

// addup(5);

// // calculates how many seconds there is in an amount of minutes

// function minute_To_Seconds(a) {
//   console.log(a * 60);
// }

// minute_To_Seconds(4);

// // calculates the biggest edge of a triangle from the two smaller sides

// function maximumedge(one, two) {
//   console.log(one + two - 1);
// }
// maximumedge(1, 4);

// // calculates how many seconds there is in an amount of hours

// function hour_To_Seconds(a) {
//   console.log(a * 3600);
// }
// hour_To_Seconds(2);

// // shows which error based on a number

// function error(num) {
//   let errors = [
//     "Check the fan",
//     "Emergency Stop",
//     "Pump Error",
//     "c",
//     "Temperature Sensor Error",
//   ];

//   if (num < 5) {
//     console.log(errors[num]);
//   } else {
//     console.log(101);
//   }
// }

// error(2);

// // calculates the area of a triangle

// function triangle_Area(b, h) {
//   console.log((b * h) / 2);
// }

// triangle_Area(3, 8);

// // returns the first value of an array

// function first_Value_Finder(array) {
//   console.log(array[0]);
// }
// first_Value_Finder(["3", "2", "1"]);

// // shows how many matchsticks you would need to build an amount of houses

// function matchstick_house(num) {
//   console.log(num * 6 - (num - 1));
// }

// matchstick_house(3);

// // calculates how many days you've been living

// function age_to_day(age) {
//   console.log(age * 365);
// }

// age_to_day(4);

// // calculates the mean of a set of numbers

// function mean(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   console.log(total / array.length);
// }

// mean([2, 5, 9, 8]);

// // calculate if you would get a profit from playing

// function profit(prob, prize, pay) {
//   if (prob * prize > pay) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// profit(0.8, 92, 60);

// // finds the smallest and biggest numbers in an array

// function minMax(array) {
//   let small_num = 0;
//   let big_number = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > big_number || i === 0) {
//       big_number = array[i];
//     } else if (array[i] < small_num || i === 0) {
//       small_num = array[i];
//     }
//   }

//   console.log("The biggest number is " + big_number);
//   console.log("The smallest number is " + small_num);
//   return small_num, big_number;
// }

// minMax([-5, -7, 4, 22, 0]);

// // turns a hex into binary

// function hexToBinary(hex) {
//   let num = parseInt(hex, 16);

//   let binary = num.toString(2);

//   console.log(binary);
// }

// hexToBinary("AAAA");

// // Checks if its time for milk and cookies

// function christmasEve(newDate) {
//   let date = newDate.getDate();
//   let month = newDate.getMonth();
//   let year = newDate.getFullYear();
//   console.log(`${date} / ${month + 1} / ${year}`);
//   if (date === 24 && month === 11) {
//     console.log("Yum");
//   } else {
//     console.log("False");
//   }
// }

// christmasEve(new Date(2015, 11, 24));

// // Checks which function gives off a higher value

// function higherFunction(f, g) {
//   if (f() > g()) {
//     return "f";
//   } else if (g() > f()) {
//     return "g";
//   } else if (g() === f()) {
//     return "neither";
//   }
// }

// console.log(
//   higherFunction(
//     function f() {
//       return 2;
//     },
//     function g() {
//       return 4;
//     }
//   )
// );

// // Swaps position of inputs

// function swap(a, b) {
//   console.log(b, a);
// }

// swap(3, 6);

// // Splits a number.

// function numberSplit(num) {
//   if (num % 2 === 0) {
//     console.log([num / 2, num / 2]);
//   } else if (num % 2 === 1) {
//     console.log([num / 2 - 0.5, num / 2 + 0.5]);
//   } else {
//     console.log("What?");
//   }
// }

// numberSplit(91);

// // Replaces numbers divisible by 3 with Fizz, 5 with Buzz, and both with FizzBuzz

// function FizzBuzz(num) {
//   let fizzedbuzzed = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       fizzedbuzzed.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       fizzedbuzzed.push("Fizz");
//     } else if (i % 5 === 0) {
//       fizzedbuzzed.push("Buzz");
//     } else {
//       fizzedbuzzed.push(i);
//     }
//   }
//   return fizzedbuzzed;
// }

// console.log(FizzBuzz(40));

// //

// function rectangles(n) {
//   let numOfRectangles = ((n * (n + 1)) / 2) ** 2;
//   return numOfRectangles;
// }

// console.log(rectangles(3));

// // Checks each digit and shows which digits together, even or odd, are bigger.

// function evenOrOdd(numstring) {
//   evens = 0;
//   odds = 0;
//   let digits = numstring.split("").map(Number);
//   for (let i = 0; i < digits.length; i++) {
//     if (digits[i] % 2 === 0) {
//       evens += digits[i];
//     } else {
//       odds += digits[i];
//     }
//   }
//   if (evens > odds) {
//     return "Evens is greater than odds";
//   } else if (odds > evens) {
//     return "Odds is greater than evens";
//   } else if (odds === evens) {
//     return "Odds and evens are the same";
//   } else {
//     return "How did you get this message?";
//   }
// }

// console.log(evenOrOdd("16263535"));

// // Sum of the digits in the array cubed

// function sumOfCubes(n) {
//   let sum = 0;
//   for (let i = 0; i < n.length; i++) {
//     sum += n[i] ** 3;
//   }
//   return sum;
// }

// console.log(sumOfCubes([3, 5, 8]));

// // Calculates and equation

// function calc(a, sign, b) {
//   if (sign === "+") {
//     return a + b;
//   } else if (sign === "-") {
//     return a - b;
//   } else if (sign === "*") {
//     return a * b;
//   } else if (sign === "/") {
//     if (b === 0) {
//       return "You can't divide by zero.";
//     } else {
//       return a / b;
//     }
//   }
// }
// console.log(calc(3, "*", 4));

// // Gets an array and shows which numbers are divisible by c.

// function arrayOperation(x, y, n) {
//   divisibles = [];
//   for (let i = x; i <= y; i++) {
//     if (i % n === 0) {
//       divisibles.push(i);
//     }
//   }
//   return divisibles;
// }

// console.log(arrayOperation(3, 27, 2));

// function numberToArray(num) {
//   let array = num.toString().split("").map(Number);
//   return array;
// }

// function arrayToNumber(arr) {
//   let num = arr.join("");
//   return num;
// }

// console.log(numberToArray(345));
// console.log(arrayToNumber([1, 2, 3]));

// function spotlightSum(num) {
//   let sum =
//     num -
//     11 +
//     (num - 10) +
//     (num - 9) +
//     (num - 1) +
//     num +
//     (num + 1) +
//     (num + 9) +
//     (num + 10) +
//     (num + 11);
//   return sum;
// }

// console.log(spotlightSum(32));

// function leftShift(num, num2) {
//   let leftshifted = num * 2 ** num2;
//   return leftshifted;
// }

// console.log(leftShift(5, 2));

// function highestDigit(num) {
//   let bignum = 0;
//   let arr = num.toString().split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > bignum) {
//       bignum = arr[i];
//     } else {
//       continue;
//     }
//   }
//   return bignum;
// }
// console.log(highestDigit(346));

// Checks the amount of digits in a number

// function numberOfDigits(num) {
//   let digits = num.toString().split("");
//   return digits.length;
// }

// console.log(numberOfDigits(20202020));

// Reverse the digits in a number

// function numReverse(num) {
//   let digits = num.toString().split("");
//   let reverse = digits.reverse();
//   return reverse.join("");
// }

// console.log(numReverse(341));

// Calculates the sum of the absolute values of an array

// function absValueSum(arr) {
//   absSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     absSum += Math.abs(arr[i]);
//   }
//   console.log(absSum);
// }

// absValueSum([3, -5, 3]);

// Calculates the mean for an array of numbers.

// function meanCalculator(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let mean = sum / arr.length;
//   return mean;
// }

// console.log(meanCalculator([3, 5, 7, 8, 9]));

// Sees if Maurice or Steve wins the snail race,
// considering Maurice sacrifices his slowest snail for Steve's fastest, uses middle snail against Steve's slowest,
// and Maurice's fastest goes against Steve's middle snail.

// function snailRace(Maurice, Steve) {
//   if (Maurice[1] > Steve[0] && Maurice[2] > Steve[1]) {
//     return "Maurice wins!!!!!!!!!!";
//   } else {
//     return "Steve wins!!!!!!!!!!";
//   }
// }
// console.log(snailRace([3, 9, 22], [5, 6, 7]));
