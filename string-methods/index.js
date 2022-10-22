var inputString = "daughter";
var upperCase = inputString.toUpperCase();
var lowerCase = inputString.toLowerCase();

console.log(upperCase+lowerCase)



var testString = "daughter"
var stringLength = testString.length
var resultString = Math.floor(stringLength/2)
console.log(resultString)

var slicedString = testString.slice(resultString)
console.log(slicedString)

var slicedStringfst = testString.slice(0, resultString)
var slicedStringUC = slicedStringfst.toUpperCase()

console.log(slicedStringUC+slicedString)

// program to convert first letter of a string to uppercase

//function capitalizeFirstLetter(string) {

    // converting first letter to uppercase
    const mySentence = "hey friends! practice practice practice!";
    const words = mySentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
var resultsJoined = words.join(" ")

console.log(resultsJoined)
    //return capitalized;
//}

// take input


//const result = capitalizeFirstLetter(string);

//console.log(result);