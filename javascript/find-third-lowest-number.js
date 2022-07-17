let numberSet = [2, 3, 43, 41, 42, 4];

function findThirdGreatestNum(listOfNumbers) {
    let lenOfList = listOfNumbers.length - 1;
    let startingVariable = listOfNumbers[0];
    let highest = startingVariable;
    let lowest = startingVariable;
    let secondHighest = lowest;
    let thirdHighest = lowest;

    //start loop to find values;
    //find lowest and highest values in the list
    for (let i = 0; i <= lenOfList; i++) {
        if (listOfNumbers[i] > highest) {
            highest = listOfNumbers[i];
        }
        if (listOfNumbers[i] < lowest) {
            lowest = listOfNumbers[i];
        }
    }

    //find second highest value
    for (let j = 0; j <= lenOfList; j++) {
        if (listOfNumbers[j] > lowest && listOfNumbers[j] < highest && listOfNumbers[j] > secondHighest) {
            secondHighest = listOfNumbers[j];
        }
    }


    //find third highest value
    for (let k = 0; k <= lenOfList; k++) {
        if (listOfNumbers[k] > lowest && listOfNumbers[k] < secondHighest && listOfNumbers[k] > thirdHighest) {
            thirdHighest = listOfNumbers[k];
        }
    }

    

    return thirdHighest;
}

meep = findThirdGreatestNum(numberSet);

console.log(meep);