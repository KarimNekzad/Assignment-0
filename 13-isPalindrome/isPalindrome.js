// Karim Nekzad
let isPalindrome = word => {
  word = word.toLowerCase().split('') // input: Horse Output:  [ 'h', 'o', 'r', 's', 'e' ]

  for (let i = 0; i < word.length/2; i++) {
    let endIndex = word.length - 1
    if (word[i] !== word[endIndex-i]) {
      return false
    }
  }

  return true
}

// Do not edit this line;
module.exports = isPalindrome;