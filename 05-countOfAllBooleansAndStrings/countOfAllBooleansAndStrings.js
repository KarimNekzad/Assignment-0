// Karim Nekzad
let countOfAllBooleansAndStrings = arr => arr.filter(element => element === true
                                                     || element === false
                                                     || typeof element === 'string'
                                                     || element instanceof String).length

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;