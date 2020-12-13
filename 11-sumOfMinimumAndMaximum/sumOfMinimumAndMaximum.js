// Karim Nekzad
let sumOfMinimumAndMaximum = nums => {
  let min = 9999999

  for (number of nums) {
    if (number < min) {
      min = number
    }
  }

  let max = -9999999

  for (number of nums) {
    if (number > max) {
      max = number
    }
  }

  return min + max
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;