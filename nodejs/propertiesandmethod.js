const person = {
    name : 'Max',
    age: 29,
    greet() {
        console.log('hi, i am'+ this.name);
    }
};
person.greet();