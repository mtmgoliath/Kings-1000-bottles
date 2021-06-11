//initialise array of 1000 with int bool
let bottles = new Array(1000).fill(0)
//Randomly decide which bottle between 0-999 to poison
let poisonRandomBottle = Math.floor(Math.random() * 1000)
bottles[poisonRandomBottle] = 1
// this will allow us to check if the evaluator is getting the right bottle index at the end

class Prisoner {
    //Properties
    name = "Prisoner"  
    isAlive = 1;
    exponentValue = 0;
    exponentResult = 0
    indiciesOfBottlesDrank = [];

    constructor(exponentValue, name) {
        //initializes the values for the sequence
        this.exponentValue = exponentValue
        this.exponentResult = (2 ** exponentValue)
        //sets prisoner name for user clarity in the console output
        this.name = "Prisoner " + name
    }

    //Methods
    givePrisonerWine(bottles) {
        let selectionUpperLimit = 2 ** this.exponentValue
        let selectionLowerLimit = 0
        let indexToSelect = 0
        let finishedDrinking = false

        while (finishedDrinking === false) {

            for (indexToSelect; (indexToSelect < Math.min(1000, selectionUpperLimit)) &&
                (indexToSelect >= selectionLowerLimit); indexToSelect++) { 
                this.indiciesOfBottlesDrank.push(bottles[indexToSelect])
            }
            selectionLowerLimit += 2 * (2 ** this.exponentValue)
            selectionUpperLimit += 2 * (2 ** this.exponentValue)
            indexToSelect = selectionLowerLimit
            finishedDrinking = selectionUpperLimit >= 999
        }
        //re-initializing the values between iterations of the for loop
        indexToSelect = 0
        selectionLowerLimit = 0
        selectionUpperLimit = 0
        return this.indiciesOfBottlesDrank
    }

    //checks whether every entry(bottlesDrank) == 0 and not poisoned, else prisoner dies.
    isPrisonerAliveAfter24Hours() {
        let isItPoisoned = (currentValue) => currentValue == 0
        if (this.indiciesOfBottlesDrank.every(isItPoisoned)) {
            console.log(`${this.name} lives`)
        } else {
            this.isAlive = 0
            console.log(`${this.name} dies`)
        }
    }
}


//this function will call the isPrisonerAliveAfter24Hours method once for each prisoner in prisoner array
function poisonedBottle(prisonerArray, bottles) {
    let poisonedBottleIndex = 0
    prisonerArray.forEach(element => {
        //give prisoner object wine selection based on their exponentValue property
        element.givePrisonerWine(bottles)
        //check to see if there is poison in the prisoner's wine selection and update Prisoner.isAlive based on result
        element.isPrisonerAliveAfter24Hours()
        //the poisionedBottleIndex gets increased if prisoner is alive
        if (element.isAlive) {
            poisonedBottleIndex += element.exponentResult
        }

    })

    //it will then return an int which is the index of the poisoned bottle
    return poisonedBottleIndex

}

// A Prisoner factory, that creates an array and
// populates it with a number of prisoner objects
// equal to int parameter passed and sets their
// exponent value incrementally
function createArrayOfPrisonerObjects(numberOfPrisoners) {
    let arrayOfPrisonerObjects = []
    for (i = 0; i < numberOfPrisoners; i++) {
        let prisonerObject = new Prisoner(i, i + 1)
        arrayOfPrisonerObjects.push(prisonerObject)
    }
    return arrayOfPrisonerObjects
}


//running it will 10 prisoner objects
let prisonersArray = createArrayOfPrisonerObjects(10)
let result = poisonedBottle(prisonersArray, bottles)

console.log("The poisoned bottle is at index " + result)
