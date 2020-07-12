// Assignment - Loop Olympics - Silver Medal

const peopleArray = [
  {
    name: 'Harrison Ford',
    occupation: 'Actor',
  },
  {
    name: 'Justin Bieber',
    occupation: 'Singer',
  },
  {
    name: 'Vladimir Putin',
    occupation: 'Politician',
  },
  {
    name: 'Oprah',
    occupation: 'Entertainer',
  },
]

// Write a loop that will print out all the names of the people of the people array

// for (let i = 0; i < peopleArray.length; i++) {
//   console.log(peopleArray[i].name)
// }

// Write a loop that pushes the names into a names array, and the occupations into an occupations array.

// const namesArr = []
// const occuArr = []

// for (let i = 0; i < peopleArray.length; i++) {
//   namesArr.push(peopleArray[i].name)
//   occuArr.push(peopleArray[i].occupation)
// }

// console.log(namesArr)
// console.log(occuArr)

// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

let otherPersonArr = []
let otherOccuArr = []

for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0) {
    otherPersonArr.push(peopleArray[i].name)
  } else {
    otherOccuArr.push(peopleArray[i].occupation)
  }
}

console.log(otherPersonArr)
console.log(otherOccuArr)
