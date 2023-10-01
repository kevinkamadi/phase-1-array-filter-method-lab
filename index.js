// Code your solution here
function findMatching(array, drivers){
    const driversMatching = array.filter(function(element){
        element.drivers===drivers
        if(element === drivers){
            return element
        }else if(element.toLowerCase()===drivers.toLowerCase()){
            return element
        }

    })
    return driversMatching
}

function fuzzyMatch(array,letters){
    const matchingLetters = array.filter((element)=> element.startsWith(letters) )
    return matchingLetters
}

function matchName(array,drivers){
    const nameMatches = array.filter((element) => element.name === drivers)
    return nameMatches
}