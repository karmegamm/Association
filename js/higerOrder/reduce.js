const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // Output: 15


const items = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];
const tally = items.reduce((accumulator, fruit) => {
  accumulator[fruit] = (accumulator[fruit] || 0) + 1;
  return accumulator;
}, {}); // Initial accumulator is an empty object

console.log(tally); // Output: { apple: 3, banana: 2, orange: 2 }
