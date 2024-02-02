// Code your selectRandomEntry function here:
function selectRandomEntryTwo(animalsList) {

  let randomIdx = Math.floor(Math.random() * animalsList.length);
  return ([animals[randomIdx].astronautID, randomIdx]);
}


function selectRandomEntry(ids) {

  let randomIdx = Math.floor(Math.random() * ids.length);
  return ids[randomIdx];
}



function drawThreeRandomNumbersTwo(animalsList){
  let luckyAnimalsList = []

    let [randomNumber,idx] = selectRandomEntryTwo(animalsList)

  while(luckyAnimalsList.length < 3){

    if(luckyAnimalsList.includes(animals[idx])){
      [randomNumber,idx] = selectRandomEntryTwo(animalsList)
    }
    else{
      console.log(randomNumber,idx)
          luckyAnimalsList.push(animals[idx])
    }
  }

  return luckyAnimalsList;
}

let recursionRandom = []
function selectThreeRecursion(ids){

  let id = selectRandomEntry(ids)
  if(recursionRandom.length == 3){
    return recursionRandom
  }

  if(recursionRandom.includes(id)){
    return selectThreeRecursion(ids)
  }
  else{
    recursionRandom.push(id);
    return selectThreeRecursion(ids)
  }
}


// Code your buildCrewArray function here:
function buildCrewArray(idx,candidateObj){
  let luckyCrew = []
  for( id in idx){
      for(candidate of candidateObj){
        if(candidate.astronautID == idx[id]){
          luckyCrew.push(candidate)
        }
      }
    }
  
    return luckyCrew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
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

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
let luckyWinners = buildCrewArray(selectThreeRecursion(idNumbers),animals)
console.log(`${luckyWinners[0].name}, ${luckyWinners[1].name}, and ${luckyWinners[2].name} are going to space!`)

// for(let i = 0; i < 5;i++)
// {
//   console.log(drawThreeRandomNumbers(animals));
// }

//console.log(selectThreeRecursion(idNumbers));
//console.log(buildCrewArray(selectThreeRecursion(idNumbers),animals))