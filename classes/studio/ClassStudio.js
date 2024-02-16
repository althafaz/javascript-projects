const { count } = require("console")

//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name,mass,scores=[]){
        this.name = name
        this.mass = mass
        this.scores = scores
    }

    addscore(score) {
        if(score > 0 && !isNaN(score)){
        this.scores.push(score)
        }
    }

    average(){
        let total = this.scores.reduce((rec,curr)=>(rec+=curr,rec))
        return Math.round(total/this.scores.length * 10) /10
    }

    status(){
        if(this.average() >= 90){
            return 'Accepted'
        }

        else if(this.average() <= 89 && this.average() >= 80){
            return 'Reserve'
        }

        else if(this.average() <= 79 && this.average() >=70){
            return 'Probationary'
        }

        else {
            return 'Rejected'
        }
    }

    test(){
        return `${this.name} earned an average test score of ${this.average()}% and has a status of ${this.status()}.`
    }

}


let bubbaBear = new CrewCandidate('Bubba Bear',135,[88.85,85,90])
let merryMaltese = new CrewCandidate('Merry Maltese',1.5,[93,88,97])
let gladGator = new CrewCandidate('Glad Gator',225,[75,78,62])

bubbaBear.addscore(83)
console.log(bubbaBear,merryMaltese,gladGator)
console.log(merryMaltese.average())
console.log(merryMaltese.status())
console.log(merryMaltese.test())


function makeitRight(avg,count = 0){
    
    // let getAverage = gladGator.average()
    // let numOfAttempt = 0
    // while(80 >= getAverage && getAverage < 99){
    //     console.log("AverageUpdate:"+getAverage)
    //     letRandomScore = Math.round(Math.random() * 100)
    //     gladGator.addscore(letRandomScore)
    //     console.log(letRandomScore,)
    // }

    // return i
    let getAverage = avg.average()
    console.log(getAverage,"new average")
    if(getAverage > 80 && getAverage < 99){
        return `it took ${count} tests to get a status of ${avg.status()}`
    }

    else{
        letRandomScore = Math.round(Math.random() * (99-90 +1)+90)
        avg.addscore(letRandomScore)
        //console.log(`new score added ${avg.scores}`,'score')
        return makeitRight(avg,count+=1)
    }
}



console.log(makeitRight(gladGator))
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.