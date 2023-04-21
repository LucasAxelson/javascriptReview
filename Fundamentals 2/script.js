"use strict";

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const dolphinsData1 = [`Dolphins`, 44, 23, 71];
const dolphinsData2 = [`Dolphins`, 85, 54, 41];

const koalasData1 = [`Koalas`, 65, 54, 49];
const koalasData2 = [`Koalas`, 23, 34, 27];

const calcAverage = (data) => {
  const [x, data1, data2, data3] = data;
  return (data1 + data2 + data3) / 3;
};

function checkWinner(data1, data2) {
  let average1 = calcAverage(data1);
  let average2 = calcAverage(data2);
  if (average1 >= average2 * 2) {
    let data = data1[0];
    return console.log(`${data} win (${average1} v ${average2})`);
  } else if (average2 >= average1 * 2) {
    let data = data2[0];
    return console.log(`${data} win (${average2} v ${average1})`);
  } else {
    return console.log(`It's a draw!`);
  }
}
*/
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const bill1 = finalBill(125);
const bill2 = finalBill(555);
const bill3 = finalBill(44);

function finalBill(bill) {
  let tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  let tip = bill * tipPercentage;
  let total = bill + tip;

  const array = [bill, tip, total];
  return array;
}

const allBills = new Array();
allBills[0] = bill1;
allBills[1] = bill2;
allBills[2] = bill3;


// const bills = [bill1[0], bill2[0], bill3[0]];
// const tips = [bill1[1], bill2[1], bill3[1]];
// const totals = [bill1[2], bill2[2], bill3[2]];


function myDinnerBills() {
  for (let i = 0; i < 3; i++) {
    console.log(
      `Your bill will be £${allBills[i][0]} with £${allBills[i][1]} as the tip, making the total £${allBills[i][2]}`
    );
  }
}
*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    console.log(
      `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he ${
        this.hasDriversLicense ? `has` : `doesn't have`
      } a driver's license`
    );
  },
};

console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/
///////////////////////////////////////
// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
let markHeight = 1.69;
let markMass = 78;
let markBMI = markMass / markHeight ** 2;

let johnHeight = 1.95;
let johnMass = 92;
let johnBMI = johnMass / johnHeight ** 2;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;
*/
/*
let differenceBMI;
if (markBMI > johnBMI) {
  differenceBMI = String(markBMI - johnBMI);
  console.log(`Mark's BMI is ${differenceBMI.slice(0, 4)} higher than John's!`);
} else {
  differenceBMI = String(johnBMI - markBMI);
  console.log(`John's BMI is ${differenceBMI.slice(0, 4)} lower than Mark's!`);
}
*/
/*

const Mark = {
  first: `Mark`,
  last: `Miller`,
  height: 1.88,
  mass: 95,
  calcBMI: function () {
    let result = `${this.mass / this.height ** 2}`;
    this.BMI = result.slice(0, 4);
    return this.BMI;
  },
};
const John = {
  first: `John`,
  last: `Smith`,
  height: 1.76,
  mass: 85,
  calcBMI: function () {
    let result = `${this.mass / this.height ** 2}`;
    this.BMI = result.slice(0, 4);
    return this.BMI;
  },
};

John.calcBMI();
Mark.calcBMI();

if (Mark.BMI > John.BMI) {
  console.log(
    `${Mark.first + ` ` + Mark.last}'s BMI (${Mark.BMI}) is higher than ${
      John.first + ` ` + John.last
    }'s (${John.BMI})!`
  );
} else if (John.BMI > Mark.BMI) {
  console.log(
    `${John.first + ` ` + John.last}'s BMI (${John.BMI}) is higher than ${
      Mark.first + ` ` + Mark.last
    }'s (${Mark.BMI})!`
  );
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

function finalBill(bill) {
  let tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;

  let tip = bill * tipPercentage;
  let total = bill + tip;

  const array = [tip, total];
  return array;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const elements = finalBill(bills[i]);
  tips.push(elements[0]);
  totals.push(elements[1]);
}

function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  let average = total / arr.length;
  console.log(average);
}
