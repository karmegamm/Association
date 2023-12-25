const numbers = [1, 3, 5, 4, 2];
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // Output: 4


const products = [
     { id: 1, name: 'Phone', price: 699 },
     { id: 2, name: 'Laptop', price: 1200 },
     { id: 3, name: 'Headphones', price: 150 }
];
// Use find to get the product with id 2

const product = products.find(p => p.id === 2);
console.log(product); // Output: { id: 2, name: 'Laptop', price: 1200 }
