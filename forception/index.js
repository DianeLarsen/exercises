var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var splitAlph = alphabet.split("")
var newArr = []
var newNewArr = []
for (let i = 0; i < splitAlph.length; i++) {
     var alphCap = splitAlph[i].toUpperCase()
    newArr.push(alphCap)
}

//console.log(newArr)


//function forception(people, newArr){
    //1 name and set of alphabet made into one array
    for (let i = 0; i < people.length; i++) {
       
        newNewArr.push(people[i]);
        
        for (let i = 0; i < newArr.length; i++) {
            newNewArr.push(newArr[i]);
            
        }
    }

//}
console.log(newNewArr)


// Output:
//["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
