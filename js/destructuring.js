
// Object to be destructured
const person = {
     firstName: 'John',
     lastName: 'Doe',
     age: 30,
     address: {
       city: 'New York',
       state: 'NY',
     },
   };
   
   // Object destructuring
   const { firstName, lastName, age, address: { city, state } } = person;
   
   // Using the extracted values
   console.log(firstName); // Output: John
   console.log(lastName);  // Output: Doe
   console.log(age);       // Output: 30
   console.log(city);      // Output: New York
   console.log(state);     // Output: NY
   
//    Array Destructuring:

// Array to be destructured
const colors = ['red', 'green', 'blue'];

// Array destructuring
const [firstColor, secondColor, thirdColor] = colors;

// Using the extracted values
console.log(`first :`,firstColor);  // Output: red
console.log(`second :`,secondColor); // Output: green
console.log(`thired :`,thirdColor);  // Output: blue
