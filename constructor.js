const a = 23;
const b = 43;

const add = new Function("x","y", "return x+y");

console.log(add(a,b));