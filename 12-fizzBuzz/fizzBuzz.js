// Karim Nekzad
let fizzBuzz = (start, end) => {
  let nums = []

  for (let i = start; i <= end; i++) {
    nums.push(i)
  }

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i]
    if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
      nums[i] = 'FizzBuzz'
    } else if (currentNumber % 3 === 0) {
      nums[i] = 'Fizz'
    } else if (currentNumber % 5 === 0) {
      nums[i] = 'Buzz'
    }
  }

  return nums
}

// Do not edit this line;
module.exports = fizzBuzz;