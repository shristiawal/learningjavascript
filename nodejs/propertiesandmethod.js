const person = {
    name : 'Max',
    age: 29,
    greet() {
        console.log('hi, i am'+ this.name);
    }
};
person.greet();


//this  refers to global scope globel node cruntime scope.
