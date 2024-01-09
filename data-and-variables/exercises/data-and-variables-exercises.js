// Declare and assign the variables below
let shutName = 'Determination';
let shutSpdMph = 17500;
let disToMarsKm = 225000000;
let distToMnKm = 38400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shutName)
console.log(typeof shutSpdMph)
console.log(typeof disToMarsKm)
console.log(typeof distToMnKm)
console.log(typeof milesPerKm)

// Calculate a space mission below
let milesToMars = disToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shutSpdMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(shutName + " will take " + daysToMars + " days to reach the Mars.");

// Calculate a trip to the moon below

let milesToMoon = distToMnKm * milesPerKm;
let hoursToMoon = milesToMoon / shutSpdMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shutName + " will take " + daysToMoon + " days to reach the Moon.");