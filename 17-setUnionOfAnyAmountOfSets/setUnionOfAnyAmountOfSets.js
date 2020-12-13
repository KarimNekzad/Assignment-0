// Karim Nekzad
function setUnionOfAnyAmountOfSets(...args) {
  let sets = [...args]
  let masterSet = new Set()

  for (set of sets) {
    for (number of set) {
      masterSet.add(number)
    } 
  }
  
  return masterSet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;