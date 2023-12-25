const myPromise = new Promise((resolve, reject) => {
     const success = true; 
     if (success) {
          resolve('Operation successful!'); // Resolve the promise
     } else {
          reject('Operation failed.'); // Reject the promise
     }
});

myPromise.then((result) => {
     console.log(result);  // Handle success
}).catch((error) => {
     console.error(error); // Handle error
});