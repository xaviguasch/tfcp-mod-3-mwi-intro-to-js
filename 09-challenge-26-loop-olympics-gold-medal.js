// Assigment - Loop Olympics - Gold Medal
// 1 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [0, 0, 0],
// [0, 0, 0]]

// const arr = []
// for (let i = 0; i < 3; i++) {
//   arr.push([])
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(0)
//   }
// }

// console.log(arr)

// 2 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 0, 0],
// [1, 1, 1],
// [2, 2, 2]]

// const arr = []
// for (let i = 0; i < 3; i++) {
//   arr.push([])
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(i)
//   }
// }

// console.log(arr)

//3 - Create an array that mimics a grid like the following using nested for loops:
// [[0, 1, 2],
// [0, 1, 2],
// [0, 1, 2]]

// const arr = []
// for (let i = 0; i < 3; i++) {
//   arr.push([])
//   for (let j = 0; j < 3; j++) {
//     arr[i].push(j)
//   }
// }

// console.log(arr)

// 4 - Given a grid like the previous ones, write a nested for loop that would change every number to an x.
// [["x", ...],
// ["x", ...],
// ["x",...], ...]

const arr = [
  [0, 1, 2],
  [0, 1, 2],
  [0, 1, 2],
]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < 3; j++) {
    arr[i][j] = 'x'
  }
}

console.log(arr)
