  const person ={
    name: 'shristi',
    age:20,
    greet(){
        console.log('Hi, i am ' + this .name);

    }

  };
  person.greet();
  const hobbies =['Sports','çooking'];
  for(let hobby of hobbies){
    console.log(hobby);
  }

  console.log(...hobbies.map(hobby=>'Hobby:'+hobby));
  console.log(...hobbies);
