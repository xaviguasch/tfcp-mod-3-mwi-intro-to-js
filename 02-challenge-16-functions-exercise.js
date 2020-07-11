//Assignment - Functions Exercise

// Functions are important building blocks in any language. They help ensure that your code follows the DRY principle and that you follow a design principle called Separation of Concerns. Your functions should “do one thing and do it well” (McIlroy). These exercises will help strengthen your function know-how.

// Write a function that accepts two numbers as parameters, and returns the sum.

function sum(n1, n2) {
  return n1 + n2
}

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// function getLargest(n1, n2, n3) {
//   let largest = 0

//   if (n1 >= n2) {
//     largest = n1
//   } else {
//     largest = n2
//   }

//   if (n3 >= largest) {
//     largest = n3
//   }

//   return largest
// }

// ALTERNATIVE SOLUTION

var largestNumber = function (num1, num2, num3) {
  var greatestNumber = 0
  var numbersArray = [num1, num2, num3]

  for (var i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > greatestNumber) {
      greatestNumber = numbersArray[i] //9
    }
  }

  console.log('My greatest number is ' + greatestNumber)
}

// console.log(largestNumber(6, 3, 9))

// console.log(getLargest(10, 20, 31))

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

function oddOrEven(num) {
  return num % 2 === 0 ? 'even' : 'odd'
}

// console.log(oddOrEven(11))
