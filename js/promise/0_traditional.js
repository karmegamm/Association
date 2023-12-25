console.log('This is traditional example : \n')

function fetchData(callback) {
     console.log('before an DatabaseOperation')
     setTimeout(() => {
          const data = 'This is some data';
          callback(null, data); 
     }, 5000); 
     console.log('after an DatabaseOperation')
}

fetchData((error, result) => {
     if (error) {
          console.error('Error fetching data:', error);
     } else {
          console.log('Data:', result);
     }}
);  