// #101 Checks whether a given string contains only Latin letters and no two uppercase and no two lowercase letters that are in adjacent positions.

// function checkString(input_str) {
//   let is_lower_case = function (symbol) {
//     if ("a" <= symbol && symbol <= "z") {
//       return true;
//     }
//     return false;
//   };

//   let is_upper_case = function (symbol) {
//     if ("A" <= symbol && symbol <= "Z") {
//       return true;
//     }
//     return false;
//   };

//   let is_first_char_lower = is_lower_case(input_str[0]),
//     is_first_char_upper = is_upper_case(input_str[0]);

//   if (!(is_first_char_lower || is_first_char_upper)) {
//     return false;
//   }

//   for (let i = 1; i < input_str.length; i++) {
//     if (i % 2) {
//       if (
//         is_lower_case(input_str[i]) === is_first_char_lower ||
//         is_upper_case(input_str[i]) === is_first_char_upper
//       ) {
//         return false;
//       }
//     } else {
//       if (
//         is_lower_case(input_str[i]) !== is_first_char_lower ||
//         is_upper_case(input_str[i]) !== is_first_char_upper
//       ) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

// console.log(test_string("xYr"));
// console.log(test_string("XXyx"));

// #102 Checks how many inversions there are in an array.

// function numberOfInversionsNaive(arr) {
//   var ctr = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) ctr++;
//     }
//   }
//   return ctr;
// }

// console.log(numberOfInversionsNaive([0, 3, 2, 5, 9]));
// console.log(numberOfInversionsNaive([1, 5, 4, 3]));
// console.log(numberOfInversionsNaive([10, 30, 20, -10]));

// #103 FInds out what can be the greatest number after an integer gets one digit removed.

// function digit_delete(num) {
//   let result = 0,
//     num_digits = [];

//   while (num) {
//     num_digits.push(num % 10);
//     num = Math.floor(num / 10);
//   }

//   for (let index_num = 0; index_num < num_digits.length; index_num++) {
//     let n = 0;

//     for (let i = num_digits.length - 1; i >= 0; i--) {
//       if (i !== index_num) {
//         n = n * 10 + num_digits[i];
//       }
//     }

//     result = Math.max(n, result);
//   }

//   return result;
// }

// console.log(digit_delete(100));
// console.log(digit_delete(10));
// console.log(digit_delete(1245));

// #104 FInds if the absolute difference between two numbers in an array is less than a certain number and as close as possible.

// function underButClose(ara, n) {
//   var max_val = -1;
//   for (var i = 0; i < ara.length; i++) {
//     for (var j = i + 1; j < ara.length; j++) {
//       var x = Math.abs(ara[i] - ara[j]);
//       if (x <= n) {
//         max_val = Math.max(max_val, x);
//       }
//     }
//   }
//   return max_val;
// }

// console.log(underButClose([3, 6, 7, 10], 5));

// #105 Finds number of times to replace a number with the sum of its digits until it is a one digit number

function sumDigitReplace(num) {
  let checkedDigit = checkDigits(num);
  if (checkedDigit >= 10) {
    checkedDigit = checkDigits(checkedDigit);
  }
  console.log(checkedDigit);
}

function checkDigits(num) {
  let oneDigit;
  let digitSum = 0;
  if (num >= 0 && num <= 9) {
    oneDigit = num;
  } else {
    let digitsArr = num.toString().split("");

    for (const dig of digitsArr) {
      digitSum += +dig;
      oneDigit = digitSum;
    }
  }
  return oneDigit;
}

sumDigitReplace(2);
