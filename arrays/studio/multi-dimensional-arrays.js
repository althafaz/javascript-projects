const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [food.split(",").sort(),equipment.split(",").sort(),pets.split(",").sort(),sleepAids.split(",").sort()].sort()
console.log(cargoHold)
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
userNum = input.question("Please enter the cabinet selection: ")
userItem = input.question("Please enter the item name: ")
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

/*userNum <=3 
? console.log(`Cabinet ${userNum} contains: ${cargoHold[userNum]} `)
: console.log("invalid number") */

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
userNum <=3 
? cargoHold[userNum].includes(userItem.trim()) ? console.log(`Cabinet ${userNum} DOES contain ${userItem}`) : console.log(`Cabinet ${userNum} DOES NOT contain ${userItem}`)
: console.log("invalid number")