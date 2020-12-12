//Karim Nekzad
function titleCaseEdit(title) {
  // creates an array of each word in the title
  let words = title.split(' ')

  // capitalizes the first letter of each word
  for(let i=0; i<words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }

  let result = ''
  for(word of words) {
    result += word + " "
  }

  // using 'substring()' to remove the extra space appended to the end of the string
  // as a result of the for loop that rebulids the title from the 'words' array
  return result.substring(0, result.length-1)
}

// Do not edit this line;
module.exports = titleCaseEdit;