function add(a, b) {
  console.log(a + b);
}
add(2, 8);

function cubed(a) {
  console.log(a * a * a);
}
cubed(3);

function energy(current, voltage) {
  console.log(current * voltage);
}
energy(7, 3);

function integers(a) {
  console.log((a += 1));
}
integers(2);

function addup(a) {
  let big_num = 0;
  for (let i = 1; i <= a; i++) {
    big_num += i;
  }
  console.log(big_num);
}

addup(5);

function minute_To_Seconds(a) {
  console.log(a * 60);
}

minute_To_Seconds(4);

function maximumedge(one, two) {
  console.log(one + two - 1);
}
maximumedge(1, 4);

function hour_To_Seconds(a) {
  console.log(a * 3600);
}
hour_To_Seconds(2);

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

function triangle_Area(b, h) {
  console.log((b * h) / 2);
}

triangle_Area(3, 8);

function first_Value_Finder(array) {
  console.log(array[0]);
}
first_Value_Finder(["3", "2", "1"]);

function matchstick_house(num) {
  console.log(num * 6 - (num - 1));
}

matchstick_house(3);

function age_to_day(age) {
  print(age * 365);
}
