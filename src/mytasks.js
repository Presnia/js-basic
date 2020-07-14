"use strict"

let summ = 0;
for (let index = 0; index <= 1000; index = index + 1) {

  summ = summ + index;
}

console.log(summ);

//task for evens of 1000

let summm = 0;
for (let i = 0; i <= 1000; i = i + 2) {

  summm = summm + i;
}

console.log(summm);

//task for numers that are divisible for 18

let summy = 0;
for (let i = 0; i <= 1000; i = i + 1) {
  if (i % 18 == 0) {
    summy = summy + i;
  }
}

console.log(summy);

// Name by number
// let weekDayNumber = [1, 2, 3, 4, 5, 6, 7]

function getWeekDay() {
  let weekDayName = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];
  for (let i = 1; i <= 7; i = i + 1) {
    console.log(weekDayName);
    break  
  }
}

getWeekDay();