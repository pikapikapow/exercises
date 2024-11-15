// Returns 30 if all 3 values are equal, 40 if 2 are, and 20 if none are equal.

// function equalFinder(a, b, c) {
//   if (a === b && b === c) {
//     return 30;
//   } else if (a === b || b === c || a === c) {
//     return 40;
//   } else {
//     return 20;
//   }
// }

// console.log(equalFinder(3, 2, 1));

// Function that evaluates three given integers to determine if any one of them is greater than or equal to 20 and less than at least one of the other two.

// function integervs20(a, b, c) {
//   if (a > 20 && (a < b || a < c)) {
//     return "True";
//   } else if (b > 20 && (b < a || b < c)) {
//     return "True";
//   } else if (c > 20 && (c < a || c < b)) {
//     return "True";
//   } else {
//     return "False";
//   }
// }

// console.log(integervs20(0, 10, 50));

// Function that sees if a given number is in the range of 40 to 10 thousand.

// function isitin40to100(num) {
//   if (num >= 40 && num <= 10000) {
//     return "Yes, the number is above 40 and under 10000.";
//   } else {
//     return "Nope, the number is either below 40 or above 10000";
//   }
// }

// console.log(isitin40to100(3200));

// Function that runs division on two numbers

// function divider(a, b) {
//   let quotient = a / b;
//   return quotient;
// }

// console.log(divider(9, 3));

// function that runs quadratic formula on an equation.

// function quadraticFormula(a, b, c) {
//   const sqrt = Math.sqrt(b ** 2 - 4 * a * c);
//   const quadraticAnswer1 = [b * -1 + sqrt] / (2 * a);
//   const quadraticAnswer2 = [b * -1 - sqrt] / (2 * a);
//   if (quadraticAnswer1 === quadraticAnswer2) {
//     let solution = `The solution to an equation with an a of ${a}, a b of ${b}, and a c of ${c} that is in ax^2 + bx + c = 0 form is ${quadraticAnswer1}. `;
//     return solution;
//   } else {
//     let solution = `The solutions to an equation with an a of ${a}, a b of ${b}, and a c of ${c} that is in ax^2 + bx + c = 0 form are ${quadraticAnswer1} and ${quadraticAnswer2}. `;
//     return solution;
//   }
// }

// console.log(quadraticFormula(1, 4, 4));

// function that finds the discriminant of a quadratic equation and what type of answers it would have.

// function discriminant(a, b, c) {
//   const discriminant = b ** 2 - 4 * a * c;
//   if (discriminant > 0) {
//     let returnMessage = `The discriminant is ${discriminant} so there are two real answers.`;
//     return returnMessage;
//   } else if (discriminant === 0) {
//     let returnMessage = `The discriminant is ${discriminant} so there is a repeated real answer.`;
//     return returnMessage;
//   } else {
//     let returnMessage = `The discriminant is ${discriminant} so there are two complex answers.`;
//     return returnMessage;
//   }
// }

// console.log(discriminant(1, 5, 3));

// takes in 2 strings and connects them but removes their first character.

// function connect2AndRemove(str1, str2) {
//   let arr1 = str1.split("");
//   arr1.splice(0, 1);
//   let arr2 = str2.split("");
//   arr2.splice(0, 1);
//   let removedstr1 = arr1.toString();
//   let finalstr1 = removedstr1.replace(/,/g, "");
//   let removedstr2 = arr2.toString();
//   let finalstr2 = removedstr2.replace(/,/g, "");
//   let connected = finalstr1 + finalstr2;
//   return connected;
// }

// console.log(connect2AndRemove("burger", "sandwich"));

// #67. Write a JavaScript program to create a new string from a given string. This program removes the first and last characters of the string if the first or last character is 'P'. Return the original string if the condition is not satisfied.

// function removeP(str) {
// let arr = str.split("");
// if (arr[0].toLowerCase() === "p" || arr[arr.length - 1].toLowerCase === "p") {
// arr.splice(0, 1);
// arr.pop();
// }
// return arr;
// }

// console.log(removeP("Potato"));

// #69 takes in an array and returns the sum of them all.

// function additionofAll(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(additionofAll([3, 5, 81]));

// #70 returns a given array of integers of length 3 that is rotated to the left.

// function leftRotator(arr) {
//   const rotated = [arr[1], arr[2], arr[0]];
//   return rotated;
// }

// console.log(leftRotator([3, 4, 5]));

// #71 checks if 1 is the first or last value in an array of integers

// function isit1(arr) {
//   if (arr[0] === 1 && arr[arr.length - 1] === 1) {
//     return "Yes, both the first and last values of the array equal one.";
//   } else if (arr[0] === 1) {
//     return "Yes, the first value is equal to one.";
//   } else if (arr[arr.length - 1] === 1) {
//     return "Yes, the last value is equal to one.";
//   } else {
//     return "No, the first nor the last value is one.";
//   }
// }

// console.log(isit1([2, 3]));

// #72 checks if the first and last value of an array are the same.

// function firstLastSame(arr) {
//   if (arr[0] === arr[arr.length - 1]) {
//     return "Yes, the last and first values of the array are the same.";
//   } else {
//     return "Nope, the first and last values are different.";
//   }
// }

// console.log(firstLastSame([3, 4, 5]));

// #73 returns the values of an array reversed

// function reverser(arr) {
//   let reversedArray = arr.reverse();
//   return reversedArray;
// }

// console.log(reverser([3, 5, 6]));

// #74 Finds the greatest value in the entire array, and sets the array to only that big value.

// function allToBig(arr) {
//   let theBig = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       theBig = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = theBig;
//   }
//   return arr;
// }

// console.log(allToBig([3, 4, 50]));

// #75 takes the two middle elements of two arrays that are length 3 and makes another array of those two.

// function middleTwoTogether(arr1, arr2) {
//   let middle1 = arr1[1];
//   let middle2 = arr2[1];
//   let middleConnected = [middle1, middle2];
//   return middleConnected;
// }

// console.log(middleTwoTogether([3, 4, 5], [3, 9, 5]));

// #76 takes the first and last elements of an array and makes another array out of them.

// function firstLastTogether(arr) {
//   const first = arr[0];
//   const last = arr[arr.length - 1];
//   let newArray = [first, last];
//   return newArray;
// }

// console.log(firstLastTogether([3, 4, 6]));

// #77 Sees if one of two values in an array is 1 or 3

// function isit1or3(arr) {
//   let istherea1or3 = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1 || arr[i] === 3) {
//       istherea1or3 = true;
//     }
//   }
//   if (istherea1or3 === true) {
//     return "Yes, one or both of the values is 1 or 3.";
//   } else {
//     return "Nope, none of the values are 1 or 3.";
//   }
// }

// console.log(isit1or3([2, 2]));

// #78 Sees if 1 or 3 is not in an array.

// function isItNot1or3(arr) {
//   let istherea1or3 = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1 || arr[i] === 3) {
//       istherea1or3 = true;
//     }
//   }
//   if (istherea1or3 === true) {
//     return "Nope, one or both of the values is 1 or 3.";
//   } else {
//     return "Yes, none of the values are 1 or 3.";
//   }
// }

// console.log(isItNot1or3([3, 1]));

// #79 Sees if 30 and 40 are in an array twice.

// function twice30And40(arr) {
//   let numberOf30 = 0;
//   let numberOf40 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 30) {
//       numberOf30++;
//     } else if (arr[i] === 40) {
//       numberOf40++;
//     }
//   }
//   if (numberOf30 > 2 || numberOf40 > 2) {
//     return "There are too many 30s, 40s, or both.";
//   } else if (numberOf30 === 2 && numberOf40 === 2) {
//     return "Yes, there is 30 and 40 twice in the array.";
//   } else {
//     return "Nope, there are too little 30s and / or 40s.";
//   }
// }

// console.log(twice30And40([30, 40, 30]));

// #80 Swaps the first and last values in an array.

// function firstLastSwap(arr) {
//   let firstValue = arr[0];
//   let lastValue = arr[arr.length - 1];
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === 0) {
//       newArr.push(lastValue);
//     } else if (i === arr.length - 1) {
//       newArr.push(firstValue);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(firstLastSwap([3, 4, 5]));

// #81 Adds two digits a given integer.

// function twoDigitAdder(integer) {
//   let numStr = integer.toString();
//   let digitsStr = "22";

//   let resultStr = numStr + digitsStr;
//   let result = parseInt(resultStr);
//   return result;
// }

// console.log(twoDigitAdder(32));

// #82 add two integers without carrying

// function add_two_int_without_carrying(n1, n2) {
//   var result = 0,
//     x = 1;

//   while (n1 > 0 && n2 > 0) {
//     result += x * ((n1 + n2) % 10);
//     n1 = Math.floor(n1 / 10);
//     n2 = Math.floor(n2 / 10);
//     x *= 10;
//   }

//   return result;
// }

// console.log(add_two_int_without_carrying(222, 911));

// #83 finds the longest string out of an array of them.

// function longest_string(str_ara) {
//   var max = str_ara[0].length;
//   str_ara.map((v) => (max = Math.max(max, v.length)));
//   result = str_ara.filter((v) => v.length == max);
//   return result;
// }
// console.log(longest_string(["a", "aa", "aaa", "aaaaa", "aaaa"]));

// #84 Finds the type of angle a given angle is.

function angleFinder(angle) {
  if (angle > 180) {
    angle = angle - 180;
    if (angle > 0 && angle < 90) {
      return "the angle is acute.";
    } else if (angle === 90) {
      return "the angle is a right angle.";
    } else if (angle > 90 && angle < 180) {
      return "the angle is obtuse.";
    } else if (angle === 180) {
      return "the angle is straight.";
    }
  } else {
    if (angle > 0 && angle < 90) {
      return "the angle is acute.";
    } else if (angle === 90) {
      return "the angle is a right angle.";
    } else if (angle > 90 && angle < 180) {
      return "the angle is obtuse.";
    } else if (angle === 180) {
      return "the angle is straight.";
    }
  }
}

console.log(angleFinder(360));
