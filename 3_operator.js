let score = 8;
console.log("Mid-level Skills: ",score > 0 && score < 10);

let timeRemaining = 0;
let energy = 10;

console.log("GameOver : ",timeRemaining == 0 || energy == 0);

let num1 = 10;

console.log("Odd Number: ",10%2 == 1);

let israining = false;
if (israining) console.log("It's Raining");
else console.log("Not Raining");

let numberScoredPerson1 = 21;
let numberScoredPerson2 = 44;

let pass = "Pass the Exam";
let fail = "Fail the Exam";

if (numberScoredPerson1 > 40) console.log("Person 1",pass); else console.log("Person 1",fail);
if (numberScoredPerson2 > 40) console.log("Person 2",pass); else console.log("Person 2",fail);

var person1position = "second";
var person2position = "fourth";
var person3position = "third";
var person4position = "first";
var person5position = "fifth";

switch(person3position){
    case "first":
        console.log("Gold Medal");
        break;
    case "second":
        console.log("Silver Medal");
        break;
    case "third":
        console.log("Bronze Medal");
        break;
    default:
        console.log("No Medal"); 
}

var age = 71;

if(age >= 65) console.log("You get your income from your pension");
else if (age >= 18 && age < 65) console.log("Each Month You Get a Salary");
else if (age < 18) console.log("You Get Monthly Allowance");
else console.log("Kindly Choose a Valid Number");

var day = "Saturday";

switch(day){
    case "Monday":
        console.log("It's Monday Do Work Today");
        break;
    case "Tuesday":
        console.log("It's Tuesday Watch a movie Today");
        break;
    case "Wednesday":
        console.log("It's Wednesday Read a book Today");
        break;
    case "Thursday":
        console.log("It's Thursday Play basketball Today");
        break;
    case "Friday":
        console.log("It's Friday Socialize Today");
        break;
    case "Saturday":
        console.log("It's Saturday Enjoy Party Today");
        break;
    case "Sunday":
        console.log("It's Sunday Have Barbecue Today");
        break;
    default:
        console.log("There's no Such Day");
        break;
}
