


 function largest(nums){
   //  let arr = nums[0]
     let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
     if (nums[i] > max){
         max = nums[i];
     }   
  }
 return max;
 }






// test data
//console.log(largest([6, 13, 250, 3])) // => 250
//console.log(largest([3, 5, 2, 8, 1])) // => 8
//console.log(largest([-13, 40, 3, 0, 19, 22])) // => 40




function lettersWithStrings(...string){
    let word = string[0] 
    let symbol = string[1] 
    let testWord = word[0] 
    let symWord = []
  
  for (let j = 0; j < word.length; j++) {
    testWord = word[j]
    
  for (let i = 0; i < testWord.length; i++) {
     if (testWord[i] == symbol){
        symWord.push(testWord)
       
     }   
  }
} 
  return symWord;
 }


// test data
//console.log("Results: " + lettersWithStrings(["$hello!", "%%^%%", "test!"], "!")) // => ["$hello!"]
//console.log("Results: " + lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))  // => ["C%4!", "Hey!"]
//console.log("Results: " + lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "h"))  // => []



function isDivisible(num1, num2){
   if (num1%num2 === 0){
      return true
   }else{
      return false    
   }
}

// test data
console.log(isDivisible(4, 2)) // => true
console.log(isDivisible(9, 3)) // => true
console.log(isDivisible(15, 4)) // => false