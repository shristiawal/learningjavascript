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
 
