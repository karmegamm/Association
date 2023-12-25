const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter( number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]


const products = [
     { id: 1, name: 'Phone', price: 699 },
     { id: 2, name: 'Laptop', price: 1200 },
     { id: 3, name: 'Headphones', price: 150 }
];
const expensiveProducts = products.filter(product => product.price > 500);
console.log(expensiveProducts);
