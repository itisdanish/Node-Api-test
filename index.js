// SIMPLE WAY

const axios = require('axios');

const apiUrl = 'https://www.fruityvice.com/api/fruit/all';

axios.get(apiUrl)
  .then(response => {
    // Extracting only the names from the array of objects
    const names = response.data.map(fruit => fruit.name);

    // Logging the names
    console.log(names);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error.message);
  });

// const axios = require('axios');
// const readline = require('readline');

// const apiUrl = 'https://www.fruityvice.com/api/fruit/all';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask the user how many names they want
// rl.question('How many fruit names do you want? ', (numberOfNames) => {
//   // Close the readline interface
//   rl.close();

//   // Make the API request
//   axios.get(apiUrl)
//     .then(response => {
//       // Extracting only the specified number of names from the array of objects
//       const names = response.data.slice(0, numberOfNames).map(fruit => fruit.name);

//       // Logging the names
//       console.log(names);
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error.message);
//     });
// });
