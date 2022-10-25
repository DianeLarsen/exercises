// Write a game that lets a user escape a room. The character finds him/herself locked in a room. In order to escape the room, your character needs to find the key in the room and then open the door. There's also a hole in the wall in the room. If your character puts his hand in the hole, he dies.

// # **Game start:**

// Tell the user their options:

// 1. Put hand in hole
// 2. Find the key, or
// 3. Open the door

// They can't open the door unless they find the key first.They die if they put their hand in the hole.

const readline = require("readline-sync");

//const name = readline.question("What is your name? ");
const options = [1, 2, 3];
const choicePhrase = ["put your hand in a hole", "found the key", "open the door" ];
let deaths = 0 ;
let leave = false;
let foundKey = false;
const name = readline.question("What is your name?");
console.log(name+ ", Welcome to the Escape Room Simulation!  You have 9 lives!");
isDead = null
while (leave == false){
let choices = readline.keyIn( 
  'You are locked in an room, what would you like to do?'
          +'\nOptions:'
          +'\n['+ options[0]+'] Put hand in hole'
          +'\n['+ options[1]+'] Find the key'
          +'\n['+ options[2]+'] Open the door\n'
          + "Enter Choice:  "  );
  if (choices == 1 && deaths <= 9) {
      console.log(name+", you have "+choicePhrase[0]+ ", which has caused instant death.  Luckily you have been resureccted!");
      deaths++
    } else if (choices == 1 && deaths == 9) {
      console.log(name+", you have died "+deaths+" times!  GAME OVER"); 
      leave = true;
    } else if (choices == 2 && foundKey == false) {
      console.log(name+ ", you have found the key, now you can open the door.");
      foundKey = true;
    } else if (choices == 2 && foundKey == true) {
      console.log(name+ ", you have already found a key, don't make this your summer home LEAVE! Head to the door!");
    } else if (choices == 3 && foundKey == false) {
      console.log(name+", you attempt to open the door but see that is it locked");
    } else if (choices == 3 && foundKey == true) {
      console.log(name+", you have unlocked the door and left the ESCAPE ROOM!  Congrats, you only died "+deaths+" times!"); 
      leave = true;
    } else {
      console.log(name+", you made the wrong choice and/or have died "+deaths+" times!  GAME OVER!!");
    break
  }
}
   


 




