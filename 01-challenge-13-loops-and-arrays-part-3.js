//Assignment - Loops and Arrays Part 3

// Optional Bonus challenge
// Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times.

// The light is off to start with. Log to the console whether or not the light is on at the end.

// Sample Arrays:

// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

// FIRST SOLUTION

// let arr = [9, 3, 4, 2]

// let counter = 0

// for (let i = 0; i < arr.length; i++) {
//   counter += arr[i]
// }

// counter % 2 === 0 ? console.log('the light is off') : console.log('the light is on')

// SECOND SOLUTION

let arr = [9, 3, 4, 2]

let lights = false

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i]; j++) {
    lights = !lights
  }
}

if (lights) {
  console.log('the lights are ON')
} else {
  console.log('the lights are OFF')
}
