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

// setUnionOfAnyAmountOfSets({ 1, 2, 4 }, { 4, 5, 6 }, { 6, 7, 8 }) //given e.g. in .md file
setUnionOfAnyAmountOfSets([1, 2, 4], [4, 5, 6], [6, 7, 8])

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;