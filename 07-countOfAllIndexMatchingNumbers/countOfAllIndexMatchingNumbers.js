// Karim Nekzad
let countOfAllIndexMatchingNumbers = nums => {
  let indexMatch = 0

  for(let i=0; i<nums.length; i++) {
    if(nums[i] === i) {
      indexMatch++
    }
  }

  return indexMatch
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;