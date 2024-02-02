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
