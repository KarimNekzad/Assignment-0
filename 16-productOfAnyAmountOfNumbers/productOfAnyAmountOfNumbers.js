// Karim Nekzad
let productOfAnyAmountOfNumbers = (...args) => {
  // spread our arguments in '...args' into an array
  let nums = ([...args])

  let result = product(nums, 0)
  return result
}

let product = (arr, index) => {
  // base case: final index of array reached
  if (index === arr.length - 1) {
    return arr[arr.length-1]
  } else {
    return arr[index] * product(arr, index+1)
  }
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;