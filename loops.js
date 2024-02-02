//if else statement
let a =1;
if( a==1){
    console.log("true");
}else{
    console.log("false");
}



//switch case

switch (n){
    case 1:
        console.log("its first case");

        break;
    case 2:
        console.log("its second case");
        break;
       
     default:
        console.log("its last case");
}
var n=1;//hoisting

//while loop
let x= 0;
let y=0;
labelCancelLoops: while (true) {
console.log("outer loops",x);
x+=1;
z=1;
while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      
        break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
}
}


let i = 0;
let r = 0;
while (i < 5) {
  i++;
  if (i === 3) {
    continue;
  }
  r += i;
  console.log(r);
}
// Logs:
// 1 3 7 12





