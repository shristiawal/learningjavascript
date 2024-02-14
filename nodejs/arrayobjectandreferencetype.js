const person ={
    name: 'shristi',
    age:20,
    greet(){
        console.log('Hi, i am ' + this .name);

    }

  };
  person.greet();
  const hobbies =['Sports','çooking'];
  hobbies.push('programming');
  console.log(...hobbies);//... is spread operator

  const copiedArray =[hobbies];
  console.log(copiedArray);

  const toArray =(...args)=>{//rest operator
    return args
  };

  console.log(toArray(1,2,3,4));