// Initialize Variables below
const date = "Monday 2019-03-18"
const time = "10:05:34 AM"
let astronautCount = 7
let astronautStatus = "ready"
let averageAstronautMassKg = 80.7
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg =74842.31
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg
const maximumMassLimit	= 850000
fuelTempCelsius = -225
minimumFuelTemp	= -300
maximumFuelTemp	= -150
fuelLevel = "100%"
weatherStatus = "clear"
preparedForLiftOff = true
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
const check1 = (astronautCount <= 7)
// add logic below to verify all astronauts are ready
const check2 = (astronautStatus === "ready")
// add logic below to verify the total mass does not exceed the maximum limit of 850000
const check3 = (totalMassKg <= 850000)
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
const check4 = (fuelTempCelsius <= -150 && fuelTempCelsius >= -300)
// add logic below to verify the fuel level is at 100%
const check5 = (fuelLevel === "100%")
// add logic below to verify the weather status is clear
const check6 = (weatherStatus === "clear")
// Verify shuttle launch can proceed based on above conditions

preparedForLiftOff = ( check1 && check2 && check3 && check4 && check5 && check6)


const result = () =>{
    console.log("All systems are a go!. Initiating space shuttle launch sequence.")
    console.log("...................................................................")
    console.log("Date: "+ date)
    console.log("Time: "+ time)
    console.log("Astronaut count: "+ astronautCount)
    console.log("Crew Mass: "+ crewMassKg)
    console.log("Fuel Mass: "+ fuelMassKg)
    console.log("Shuttle Mass: "+ shuttleMassKg)
    console.log("Total Mass: "+ totalMassKg)
    console.log("Fuel Temperature: "+ fuelTempCelsius)
    console.log("Wheather Status: "+ weatherStatus)
    console.log("...................................................................")
    console.log("Have a sage trip Astronauts!") 
}


let isliftOff = (preparedForLiftOff) ? result() : console.log("Mission abborted")


