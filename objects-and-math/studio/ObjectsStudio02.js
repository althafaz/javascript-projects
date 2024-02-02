// Code your orbitCircumference function here:
function orbitCircumference(radius){
  return Math.round(2*Math.PI*radius)
}

// Code your missionDuration function here:
function missionDuration(numOfOrbComp,orbRadius = 2000,orbiSpd = 28000){
  const missionDur = Math.round(((numOfOrbComp * orbitCircumference(orbRadius))/orbiSpd) * 100) /100
  return missionDur 
}

console.log(missionDuration(5))

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(ids) {

  let randomIdx = Math.floor(Math.random() * ids.length);
  return ids[randomIdx];
}

// Code your oxygenExpended function here:
function oxygenExpended(astronaut){
  let duration = missionDuration(3); // duration days/hours
  let oxUsed = Math.round(astronaut.o2Used(duration)*1000)/1000;
  return `${astronaut.name} will perform the spacewalk, which will last ${duration} hours and require ${oxUsed} kg of oxygen.`;
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 //
 console.log(oxygenExpended(selectRandomEntry(crew)))