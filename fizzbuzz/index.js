// import { versions } from 'node:process';

// console.log(versions);
// import { stdin, stdout } from 'node:process';
// stdin.pipe(stdout);
// for (let i = 0; i < 10; i++) {
//     //const element = array[i];
//     process.stdout.write(i);
    
// }


//Build a string then log it after the loop.

var s = "";
var fizz = "fizz"
var buzz = "buzz"
var fizzbuzz = "fizzbuzz"
var fizzbuzzCount = 0
var fizzCount = 0
var buzzCount = 0
for(var i = 1; i < 101; i += 1) {
    if (i%3===0 && (i%5===0)){
    s += fizzbuzz;
    fizzbuzzCount++    
    }else if (i%3===0) {
    s += fizz;
    fizzCount++;
    }else if (i%5===0){
    s += buzz; 
    buzzCount++
    }else{
    s += i + "";
    
}
}
console.log(s);
console.log(fizzbuzzCount);
console.log(fizzCount);
console.log(buzzCount);

