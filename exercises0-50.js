// add function; adds two values

function add(a, b) {
  console.log(a + b);
}
add(2, 8);

// cube function; returns the cubed version of a number

function cubed(a) {
  console.log(a * a * a);
}
cubed(3);

// energy function; calculates the energy through the current and voltage

function energy(current, voltage) {
  console.log(current * voltage);
}
energy(7, 3);

// adds 1 to a number

function integers(a) {
  console.log((a += 1));
}
integers(2);

// adds all the numbers before the big number

function addup(a) {
  let big_num = 0;
  for (let i = 1; i <= a; i++) {
    big_num += i;
  }
  console.log(big_num);
}

addup(5);

// calculates how many seconds there is in an amount of minutes

function minute_To_Seconds(a) {
  console.log(a * 60);
}

minute_To_Seconds(4);

// calculates the biggest edge of a triangle from the two smaller sides

function maximumedge(one, two) {
  console.log(one + two - 1);
}
maximumedge(1, 4);

// calculates how many seconds there is in an amount of hours

function hour_To_Seconds(a) {
  console.log(a * 3600);
}
hour_To_Seconds(2);

// shows which error based on a number

function error(num) {
  let errors = [
    "Check the fan",
    "Emergency Stop",
    "Pump Error",
    "c",
    "Temperature Sensor Error",
  ];

  if (num < 5) {
    console.log(errors[num]);
  } else {
    console.log(101);
  }
}

error(2);

// calculates the area of a triangle

function triangle_Area(b, h) {
  console.log((b * h) / 2);
}

triangle_Area(3, 8);

// returns the first value of an array

function first_Value_Finder(array) {
  console.log(array[0]);
}
first_Value_Finder(["3", "2", "1"]);

// shows how many matchsticks you would need to build an amount of houses

function matchstick_house(num) {
  console.log(num * 6 - (num - 1));
}

matchstick_house(3);

// calculates how many days you've been living

function age_to_day(age) {
  console.log(age * 365);
}

age_to_day(4);

// calculates the mean of a set of numbers

function mean(array) {
  total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  console.log(total / array.length);
}

mean([2, 5, 9, 8]);

// calculate if you would get a profit from playing

function profit(prob, prize, pay) {
  if (prob * prize > pay) {
    console.log("True");
  } else {
    console.log("False");
  }
}

profit(0.8, 92, 60);

// function minMax(array) {
//   small_num = 0;
//   big_number = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (i = 0  array[i] < small_num) {

//     }
//   }
// }
