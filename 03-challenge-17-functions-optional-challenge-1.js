//Assignment - Functions Optional Challenge 1

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string. You will need to use a string method or two:
// -slice()
// -concat() (optional)

function stringer(str) {
  if (str.length <= 20) {
    return str.concat(str)
  } else {
    return str.slice(0, str.length / 2)
  }
}

console.log(stringer('I am the man'))
console.log(stringer("Meet me in the bathroom that's what she said"))
