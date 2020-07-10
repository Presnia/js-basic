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

