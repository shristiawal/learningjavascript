console.log("hello world for shristi");

//concatination
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
console.log(x);
console.log(y);
console.log(z);

//Array literals
const coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);
console.log(coffees[2]);


const fish = ["Lion", , "Angel"];
console.log(fish);

const myList = ["home", , "school", ,];
console.log(myList);

//object literals
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota


const vehicle = { manyCars: { a: "Saab", b: "Jeep" }, 9: "Mazda" };

console.log(vehicle.manyCars.b); // Jeep
console.log(vehicle[9]); 

//Template literals 
const cat = 'bella';
console.log (`hello ${cat}`)


//Escaping characters
const quote = "This plant\"is so beautiful\"planted by me 5 years ago.";
console.log (quote);
//broken across multiple lines
const Quote = "This plant \
is so beautiful \
planted by me 5 years ago.";
console.log(Quote);





  
