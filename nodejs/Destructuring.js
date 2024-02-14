const person ={
    name: 'shristi',
    age:20,
    greet(){
        console.log('Hi, i am ' + this .name);

    }

  };
  const PrintName =({name})=>{
    console.log(name);
  }
  PrintName(person);

  const{name, age } = person;
  console.log(name, age);

  const hobbies =['sports' , 'Cooking'];
  const [hobby1, hobby2]=hobbies;
  console.log(hobby1, hobby2);