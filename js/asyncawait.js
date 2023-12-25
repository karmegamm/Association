// Function to simulate fetching data from an API
function fetchData() {
     return new Promise((resolve, reject) => {
          setTimeout(() => {
          const data = { message: 'Data fetched successfully!' };
          resolve(data);
          }, 3000);
     });
}
   
// Async function to use await with the fetchData function
async function fetchDataExample() {
     try {
          console.log('Fetching data...');
          console.log('waiting for Promise to resolve ')
          const result = await fetchData(); // Pauses here until fetchData Promise resolves
          console.log('Data:', result);
     } catch (error) {
          console.error('Error:', error.message);
     }
}
   
// Call the async function
console.log('1st');
fetchDataExample();
console.log('2nd');
