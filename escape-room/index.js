// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

// # **Game start:**

// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door

// They can't open the door unless they find the key first.They die if they put their hand in the hole.

const readline = require("readline-sync");

//const name = readline.question("What is your name? ");
const options = [1, 2, 3]
const choicePhrase = ["put your hand in a hole", "found the key", "open the door" ]
let deaths = 0 

let choices = readline.question('You are locked in an room, what would you like to do?'
          +'\nOptions:'
          +'\n['+ options[0]+'] Put hand in hole'
          +'\n['+ options[1]+'] Find the key'
          +'\n['+ options[2]+'] Open the door\n'
          + "Enter Choice:  ", 
  
  );
  console.log(choices)
   function redoChoices(){let choices = readline.question('You are still locked in an room, what would you like to do?'
   +'\nOptions:'
   +'\n['+ options[0]+'] Put hand in hole'
   +'\n['+ options[1]+'] Find the key'
   +'\n['+ options[2]+'] Open the door\n'
   + "Enter Choice:  ", 
   
 )}
 console.log(choices)
 if (choices == 1) {
   console.log("You have "+choicePhrase[0]+ ", which has caused instant death.  Luckily you have been resureccted!");
    deaths++
   redoChoices()
 } else if (choices == 2) {
   console.log(choicePhrase[1]);
   gotKey()
 } else if (choices == 3) {
    console.log("You attempt to open the door but see that is it locked");
    redoChoices()
 } else {
   console.log("This is not an option.");
   redoChoices()
 }

 function gotKey(){let choices = readline.question('You are still locked in an room, what would you like to do?'
 +'\nOptions:'
 +'\n['+ options[0]+'] Put hand in hole'
  +'\n['+ options[2]+'] Open the door\n'
 + "Enter Choice:  ", 

)}

function gotKeyIf(){if (choices == 1) {
    console.log("You have "+choicePhrase[0]+ ", which has caused instant death.  Luckily you have been resureccted!");
    deaths++
    redoChoices()
  } else if (choices == 3) {
     console.log("As you have found the key you are now able to unlock the door and leave this room!  Congrats, you only died"+deaths+ "times.");
     
  } else {
    console.log("This is not an option.");
    redoChoices()
  }
}