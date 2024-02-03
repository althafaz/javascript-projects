function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let idx = Math.floor(Math.random() * arr.length)
  return arr[idx]

}

console.log(randomFromArray([1,2,3,4]))
//TODO: Export the randomFromArray function.
module.exports = randomFromArray