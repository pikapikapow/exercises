// // #101 Checks whether a given string contains only Latin letters and no two uppercase and no two lowercase letters that are in adjacent positions.

// // function checkString(input_str) {
// //   let is_lower_case = function (symbol) {
// //     if ("a" <= symbol && symbol <= "z") {
// //       return true;
// //     }
// //     return false;
// //   };

// //   let is_upper_case = function (symbol) {
// //     if ("A" <= symbol && symbol <= "Z") {
// //       return true;
// //     }
// //     return false;
// //   };

// //   let is_first_char_lower = is_lower_case(input_str[0]),
// //     is_first_char_upper = is_upper_case(input_str[0]);

// //   if (!(is_first_char_lower || is_first_char_upper)) {
// //     return false;
// //   }

// //   for (let i = 1; i < input_str.length; i++) {
// //     if (i % 2) {
// //       if (
// //         is_lower_case(input_str[i]) === is_first_char_lower ||
// //         is_upper_case(input_str[i]) === is_first_char_upper
// //       ) {
// //         return false;
// //       }
// //     } else {
// //       if (
// //         is_lower_case(input_str[i]) !== is_first_char_lower ||
// //         is_upper_case(input_str[i]) !== is_first_char_upper
// //       ) {
// //         return false;
// //       }
// //     }
// //   }

// //   return true;
// // }

// // console.log(test_string("xYr"));
// // console.log(test_string("XXyx"));

// // #102 Checks how many inversions there are in an array.

// // function numberOfInversionsNaive(arr) {
// //   var ctr = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //     for (let j = i + 1; j < arr.length; j++) {
// //       if (arr[i] > arr[j]) ctr++;
// //     }
// //   }
// //   return ctr;
// // }

// // console.log(numberOfInversionsNaive([0, 3, 2, 5, 9]));
// // console.log(numberOfInversionsNaive([1, 5, 4, 3]));
// // console.log(numberOfInversionsNaive([10, 30, 20, -10]));

// // #103 FInds out what can be the greatest number after an integer gets one digit removed.

// // function digit_delete(num) {
// //   let result = 0,
// //     num_digits = [];

// //   while (num) {
// //     num_digits.push(num % 10);
// //     num = Math.floor(num / 10);
// //   }

// //   for (let index_num = 0; index_num < num_digits.length; index_num++) {
// //     let n = 0;

// //     for (let i = num_digits.length - 1; i >= 0; i--) {
// //       if (i !== index_num) {
// //         n = n * 10 + num_digits[i];
// //       }
// //     }

// //     result = Math.max(n, result);
// //   }

// //   return result;
// // }

// // console.log(digit_delete(100));
// // console.log(digit_delete(10));
// // console.log(digit_delete(1245));

// // #104 FInds if the absolute difference between two numbers in an array is less than a certain number and as close as possible.

// // function underButClose(ara, n) {
// //   var max_val = -1;
// //   for (var i = 0; i < ara.length; i++) {
// //     for (var j = i + 1; j < ara.length; j++) {
// //       var x = Math.abs(ara[i] - ara[j]);
// //       if (x <= n) {
// //         max_val = Math.max(max_val, x);
// //       }
// //     }
// //   }
// //   return max_val;
// // }

// // console.log(underButClose([3, 6, 7, 10], 5));

// // #105 Finds number of times to replace a number with the sum of its digits until it is a one digit number
// // function sumDigitReplace(num) {
// //   let counter = 0;

// //   while (num >= 10) {
// //     num = num
// //       .toString()
// //       .split("")
// //       .reduce((sum, eachDigit) => sum + Number(eachDigit), 0);
// //     counter++;
// //   }
// //   console.log(`It took ${counter} times to get ${num}`);
// // }

// // sumDigitReplace(29297);

// // #106 Divides integers until the result is an integer/

// // function dividingIntegers(num, d) {
// //   if (d === 1) {
// //     return num;
// //   } else {
// //     while (num % d === 0) {
// //       num /= d;
// //     }
// //     return num;
// //   }
// // }

// // console.log(dividingIntegers(3, 1));

// // function arr_pairs(arr) {
// //   let result = 0;

// //   for (let i = 0; i < arr.length; i++) {
// //       for (let j = i + 1; j < arr.length; j++) {

// //           if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
// //               result++;
// //           }
// //       }
// //   }

// //   return result;
// // }

// // console.log(arr_pairs([1, 2, 3]));
// // console.log(arr_pairs([2, 4, 6]));

// // The exercises before dont make sense, so #111. Find the unique number in a set of three.

// // function uniqueOfThree(x, y, z) {
// //   if (x === y) {
// //     return z;
// //   } else if ((y = z)) {
// //     return x;
// //   } else if ((x = z)) {
// //     return y;
// //   } else {
// //     return "All three numbers are unique.";
// //   }
// // }

// // console.log(uniqueOfThree(1, 2, 2));

// // #114 Checks if the sentence given is correct.

// // function isCorrectSentence(input_str) {
// //   var first_char = input_str[0];
// //   var last_char = input_str[input_str.length - 1];
// //   return /[A-Z]/.test(first_char) && last_char == ".";
// // }

// // console.log(isCorrectSentence("Big sandwiches have a lot of sandwich."));

// // #118 Checks if a number is in a given range.

// // function inRange(num, min, max) {
// //   if (num >= min && num <= max) {
// //     return "Yes, the number is in the range.";
// //   } else {
// //     return "No, the number is out of the range.";
// //   }
// // }

// // console.log(inRange(3, 2, 5));
// // console.log(inRange(2, 5, 6));

// // #119 Checks if a number has increasing digits. Ex. 123 yes, 341 no.

// function increasingDigits(num) {
//   let numOfIncreasingDigits = 0;
//   let digits = num.toString().split("");
//   for (let i = 0; i < digits.length; i++) {
//     if (i > 0) {
//       if (digits[i] > digits[i - 1]) {
//         numOfIncreasingDigits++;
//       }
//     } else {
//       continue;
//     }
//   }
//   if (numOfIncreasingDigits === digits.length - 1) {
//     return "Yes, the number has increasing digits.";
//   } else {
//     return "No, the number doesn't have increasing digits.";
//   }
// }

// console.log(increasingDigits(4321));

// #149 Turn all letters in a string to a different capitalization.

function changeAllCaps(str) {
  let capStr = str.toUpperCase();
  return capStr;
}
console.log(changeAllCaps("hamburger"));
