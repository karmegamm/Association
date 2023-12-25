function doFirstTask() {
     return new Promise((resolve, reject) => {
          // Some asynchronous operation...
          const success = true;
          if (success) {
               resolve("First task completed");
          } else {
               reject("Failed in first task");
          }
     });
}

function doSecondTask(data) {
     return new Promise((resolve, reject) => {
          // Another asynchronous operation...
          console.log(data); // Data from the first task
          const success = true;
          if (success) {
               resolve("Second task completed");
          } else {
               reject("Failed in second task");
          }
     });
}

function doThirdTask(data) {
     return new Promise((resolve, reject) => {
          // Yet another asynchronous operation...
          console.log(data); // Data from the second task
          const success = true;
          if (success) {
               resolve("Third task completed");
          } else {
               reject("Failed in third task");
          }
     });
}

// Using the functions and chaining them
doFirstTask()
     .then(result => doSecondTask(result))
     .then(result => doThirdTask(result))
     .then(result => console.log(result)) // Final result from the third task
     .catch(error => console.error(error)); // Catches any error from any of the above tasks
