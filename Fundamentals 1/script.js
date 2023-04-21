/* let js = "amazing";
if (js === "amazing") alert("javascript is fun");
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
/*
let markHeight1 = 1.69;
let markMass1 = 78;

let johnHeight1 = 1.95;
let johnMass1 = 92;

let markBMI1 = markMass1 / markHeight1 ** 2;
let johnBMI1 = johnMass1 / johnHeight1 ** 2;

console.log(markBMI1, johnBMI1);

let markHigherBMI = markBMI1 > johnBMI1;
console.log(markHigherBMI);

console.log("");

let markHeight2 = 1.88;
let markMass2 = 95;

let johnHeight2 = 1.76;
let johnMass2 = 85;

let markBMI2 = markMass2 / markHeight2 ** 2;
let johnBMI2 = johnMass2 / johnHeight2 ** 2;

console.log(markBMI2, johnBMI2);

markHigherBMI = markBMI2 > johnBMI2;

console.log(markHigherBMI);
*/

/*
const firstName = "Lucas";
const job = "teacher";
const birthYear = 2000;
const year = 2023;

const lucas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job;

console.log(lucas);

const lucasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;

console.log(lucasNew);
*/
/*
const age = 16;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log(`Sarah can start her driving license`);
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah ain't old enough. Wait ${yearLeft} years`);
}
*/
////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉
*/
/*
let markHeight = 1.69;
let markMass = 78;
let markBMI = markMass / markHeight ** 2;

let johnHeight = 1.95;
let johnMass = 92;
let johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

console.log("");

markHeight = 1.88;
markMass = 95;

johnHeight = 1.76;
johnMass = 85;

markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

console.log(markBMI, johnBMI);

let differenceBMI;
if (markBMI > johnBMI) {
  differenceBMI = String(markBMI - johnBMI);
  console.log(`Mark's BMI is ${differenceBMI.slice(0, 4)} higher than John's!`);
} else {
  differenceBMI = String(johnBMI - markBMI);
  console.log(`John's BMI is ${differenceBMI.slice(0, 4)} lower than Mark's!`);
}

console.log(`23` + 2 + `1`);
*/

//let hi = prompt(`hi`);

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
const dolphinsTeamScore = [];
const koalasTeamScore = [];
let minimumScore = 100;

const dataDolphin1 = [101, 108, 99];
const dataKoala1 = [101, 99, 108];

const dataDolphin2 = [97, 112, 101];
const dataKoala2 = [300, 95, 123];

const dataDolphin3 = [97, 112, 101];
const dataKoala3 = [109, 95, 106];

function score(data) {
  const initialValue = 0;
  return (
    data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    ) / data.length
  );
}

function announce(minimumScore, dataDolphin, dataKoala) {
  const dolphinsScoreRaw = `${score(dataDolphin)}`;
  const koalasScoreRaw = `${score(dataKoala)}`;
  let dolphinsScore = dolphinsScoreRaw.slice(0, 5);
  let koalasScore = koalasScoreRaw.slice(0, 5);
  
  if (koalasScore >= minimumScore && dolphinsScore >= minimumScore) {
    console.log(`Both teams have qualified.`);
    if (koalasScore > dolphinsScore) {
      console.log(`Koalas have won with ${koalasScore} points!`);
    } else if (dolphinsScore > koalasScore) {
      console.log(`Dolphins have won with ${dolphinsScore} points!`);
    } else {
      console.log(`It's a draw!`);
    }
  } else if (koalasScore >= minimumScore && dolphinsScore <= minimumScore) {
    console.log(`Koalas have qualified!`);
    console.log(
      `Koalas have won by disqualification with ${koalasScore} Points!`
    );
  } else if (dolphinsScore >= minimumScore && koalasScore <= minimumScore) {
    console.log(`Dolphins have qualified!`);
    console.log(
      `Dolphins have won by disqualification with ${dolphinsScore} Points!`
    );
  } else {
    console.log(`Neither of the teams have qualified.`);
  }
}

//const Game1 = announce(minimumScore, dataDolphin1, dataKoala1);
//const Game2 = announce(minimumScore, dataDolphin2, dataKoala2);
//const Game3 = announce(minimumScore, dataDolphin3, dataKoala3);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*

function finalBill(bill) {
  let tipPercentage = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
  let tip = bill * tipPercentage;

  console.log(
    `Your bill will be £${bill} with £${tip} as the tip, making the total £${
      bill + tip
    }`
  );
}
*/
