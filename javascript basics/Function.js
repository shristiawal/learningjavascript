function ndog(obj){
    obj.dname = "bella";
    obj = null;
}
const dog ={
    dname:"tommy",
    breed :"japanese spitz",
    age :"1 month",

};

console.log(dog.dname);
ndog(dog);
console.log(dog.dname);
console.log(dog.breed);
console.log(dog.age);


//function array
 function myfunc (thearr){
    thearr[0]=30;
 }
 const arr =[45];
 console.log (arr[0]);
 myfunc(arr);
 console.log(arr[0]);
 
 //function square
 const square = function(n){
 return n*n;
};
console.log(square(9));
 
//function factorial
 const factorial = function fac(n){
    return n < 2?1:n*fac(n-1);
 };
 console.log(factorial(3));

 //function map
 function map(f,a){
    const result =new Array(a.length);
    for (let i=0; i<a.length; i++)
    {
        result[i]=f(a[i]);

    }
    return result;
}
const square1 =function (x)
{
    return x*x;

};
const numbers =[0,1,2,5,8];
console.log(map(square1 ,numbers));

//function factorial
 /*function factorial(n){
    if (n===0 || n===1){
    return 1;
 } else {
    return n * factorial(n-1);
 }
}*/
console.log (factorial(1));
console.log (factorial(2));
console.log (factorial(3));
console.log (factorial(4));
console.log (factorial(5));