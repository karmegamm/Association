//map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map( number => number * 2 );
console.log(doubled);               // Output: [2, 4, 6, 8, 10]

const products = [
     { id: 1, name: 'Phone', price: 699 },
     { id: 2, name: 'Laptop', price: 1200 },
     { id: 3, name: 'Headphones', price: 150 }
];
   
const formattedProducts = products.map(product => {
return {
     productId: product.id,
     description: `${product.name} is ₹${product.price} Rupee`,
     expensive: product.price > 500
};
});

console.log(`formatted :`,formattedProducts);
   

