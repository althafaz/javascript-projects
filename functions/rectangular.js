const { clearScreenDown } = require("readline")

function makeLine(size) {
    let line = ""
    for(let i=1; i <= size;i++){
        line += "#"
    }

    return line
}
function makeSquare(width,height) {
    let line =""

    for(let i=1; i <= height;i++){
         line += makeLine(width) + '\n'
    }

    return line
}


function makeDownwardStairs(height) {
    line =""
    for(let x=1; x <=height;x++){
        line += makeLine(x) + '\n'
    }

    return line
}

function makeTriangle(height)
  {
    let triangle='';
    for(let i=0;i < height;i++){
            
        for(let j = height; j > i;j--){
            triangle +=' '
        }
        triangle += makeLine(2*i +1) + '\n'
    }

    return triangle

  }

  function diamond(height)
  {

    /*let triangle='';
    for(let i=height;i >= 0;i--){
            
        for(let j = height; j >= i;j--){
            triangle +=' '
        }
        triangle += makeLine(2*i -1) + '\n'
    }*/

    // let reverse = makeTriangle(height)  //method
    // reverse = reverse.split('\n').reverse()
    // reverse.shift()

    let reverse = makeTriangle(height)
   return makeTriangle(height) + reverse.split('\n').reverse().slice(1).join("\n")



  }

  

console.log(diamond(5))
// console.log(makeLine(5))
// console.log("xxxxx")
// console.log(makeSquare(5,5))
// console.log(makeDownwardStairs(5))