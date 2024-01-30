//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.


let newArrayForLoop = []

function findMinNum(numOfArr) {

    let minNum = numOfArr[0]
    for(let i= 1; i < numOfArr.length;i++){
    
        if(numOfArr[i] < minNum){
            minNum = numOfArr[i]
        }
    
        else{
            return minNum
        }

        console.log(minNum)
    }
}


let newArray = []
let minvalues = (arrOfNum)=>{return newArray.push(arrOfNum.sort((a,b) =>{ return a-b}).shift())}

function makeItOrder(arrOfNum){

    if(arrOfNum.length === 0){
        console.log("New Array:"+ newArray)
    }

    else{
        minvalues(arrOfNum)
        return makeItOrder(arrOfNum)
    }
}


console.log(makeItOrder(nums2))

