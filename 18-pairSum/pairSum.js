// Karim Nekzad

let pairSum = (nums, target) => {
  if (nums.length < 2) {
    throw 'The \'nums\' array must be at least of length 2'
  }
  // An object of key value pairs where the key is each number in the array 'nums' given,
  // and the value is the number needed to sum with the key to reach the target.
  // i.e. if the key was 3 and the target was 10, the value would be 7 for the key 3.
  let potentialPairs = {}

  for (number of nums) {
    // If the current number is a sum with the key value in 'potentialPairs' to equal the target, return true
    for (key of Object.keys(potentialPairs)) {
      if (number === potentialPairs[key]) {
        return true
      }
    }
    // If the current number does not exist as a key in the 'potentialPairs' object 
    // (in which case it returns 'undefined' in the if statement, which equals false),
    // create a key of that number and make its value equal to the number needed to sum
    // it with to reach the target value
    if(!potentialPairs[number]) {
      potentialPairs[number] = target - number
    }
  }

  return false
}

// Do not edit this line;
module.exports = pairSum;