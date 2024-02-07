const p =8;
const o =9;
const u =5;
const r=4;
 
const rest=(...intoArray)=> intoArray;// using rest function to store the value in an array.


console.log(rest(p,o,u,r));//output [8,9,5,4]
console.log(...rest(p,o,u,r))//output 8 9 5 4

