//for (let i = 0; i < 10; i++) {
//    console.log(i)
//}
// for (let i = 9; i >= 0; i--) {
//     console.log(i)
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]

// for (let i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }

// var numArry = []

// for (let i = 0; i < 10; i++) {

//     numArry.push(i)

// }
// console.log(numArry)

// for (let i = 0; i < 101; i++) {
//     if(i%2 == 0){
//     console.log(i)
//     }
// }
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var someFruit = []
// for (let i = 0; i < fruit.length; i++) {
//     if(i%2 == 0){
//         someFruit.push(fruit[i])
//     }
// }
// console.log(someFruit)

// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
//   var peopleNamesArray = []
//   var peopleNamesArrayEO = []
//   var peopleOccArrayEO = []

//   for (let i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name)
//     peopleNamesArray.push(peopleArray[i].name)

//   }
//   console.log(peopleNamesArray)

//   for (let i = 0; i < peopleArray.length; i++) {
//         if(i%2 == 0){
//             peopleNamesArrayEO.push(peopleArray[i].name)
//         }
//      }
//      console.log(peopleNamesArrayEO)
//      for (let i = 0; i < peopleArray.length; i++) {
//         if(i%2 != 0){
//             peopleOccArrayEO.push(peopleArray[i].occupation)
//         }
//      }
//      console.log(peopleOccArrayEO)

var arrayGrid = []

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        arrayGrid.push(i)
        
    }
    
}
//console.log(arrayGrid)

for (let i = 0; i < arrayGrid.length; i++) {
    for (let j = 0; j < arrayGrid[i].length; j++) {
        arrayGrid[i][j] = "x";
        
    }
    
}
console.log(arrayGrid)
var sampleArrayGrid = [    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
]
console.log(sampleArrayGrid)
