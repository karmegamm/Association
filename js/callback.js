function processData(data, callback) {
     const processedData = data.toUpperCase();
     callback(processedData);
}
   
const displayData = (processedData) => {
     console.log('Processed Data:', processedData);
}
   
processData('hello world', displayData);
