// Assignment - Loop Olympics - Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.

// let arr = []
// for (let i = 0; i <= 9; i++) {
//   arr.push(i)
// }
// console.log(arr)

// Write a for loop that prints to the console only even numbers 0 through 100.

// for (let i = 0; i <= 100; i++) {
//   i % 2 === 0 ? console.log(i) : null
// }

// Write a for loop that will push every other fruit to an array.
const fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']

let arr = []

for (let i = 0; i < fruit.length; i++) {
  i % 2 !== 0 ? arr.push(fruit[i]) : null
}

console.log(arr)
