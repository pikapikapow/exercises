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
