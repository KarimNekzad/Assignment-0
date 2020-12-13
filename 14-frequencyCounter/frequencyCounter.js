// Karim Nekzad
let frequencyCounter = word => {
  let frequency = {}
  for (let i=0; i<word.length; i++) {
    let character = word[i]
    if(frequency[character]) { // if undefined, returns false, if letter encounterd before, returns frequency, which === true
      frequency[character]++
    } else {
      frequency[character] = 1 // starting value
    }
  }

  return frequency
}

// Do not edit this line;
module.exports = frequencyCounter;