var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0
for (var i = 0; i < officeItems.length; i++) {
     
   // console.log(officeItems[i]);
     if (officeItems[i].includes("computer")) {
         count ++;
        
     } 

     
 }

console.log("There are "+count+" computers in the office items.");



var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  var genderPronoun1 = null
  var genderPronoun2 = null

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender.includes("female")){
        genderPronoun1 = "her"
        genderPronoun2 = "She"
    }else {
        genderPronoun1 = "him"
        genderPronoun2 = "He"
    }
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let "+genderPronoun1+ " in.")
    }else{
  console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max."+ genderPronoun2+ "'s good to see Mad Max Fury Road.")
    }
}

var light  = "off"
var arry1 = [2, 5, 435, 4, 3] // "The light is on"
var arry2 = [1, 1, 1, 1, 3]   // "The light is on"
var arry3 = [9, 3, 4, 2]      // "The light is off"
var sumArry1 = 0
var sumArry2 = 0
var sumArry3 = 0
//if num = odd then light is on and if even light is off.
for (var i = 0; i < arry1.length; i++){
    sumArry1 = arry1[i] + sumArry1
 
}
for (var i = 0; i < arry2.length; i++){
    sumArry2 = arry2[i] + sumArry2
    
}
for (var i = 0; i < arry3.length; i++){
    sumArry3 = arry3[i] + sumArry3
    
}
var sumArryF = sumArry1 + sumArry2 + sumArry3
if(sumArryF %2 == 0){
light = "off"
}else{
    light = "on"
}

console.log("The light is " + light)
