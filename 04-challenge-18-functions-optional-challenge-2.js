//Assignment - Functions Optional Challenge 2

// Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// The first numbers are:

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// So if n were 6, the sum of 1+1+2+3+5+8 would be 20
// Don't hardcode the sequence.

let fibonacci = []
let finalSum = 0

function numbers(n) {
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      fibonacci.push(1)
    } else if (i >= 2) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }

    finalSum += fibonacci[i]
  }

  return finalSum
}

console.log(numbers(6))
