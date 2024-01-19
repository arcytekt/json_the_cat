// Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
// Let's use JSON.parse to convert the JSON string into an actual object.
// Access the first entry in the data array and print out the description for the user.
// Allow the user to specify the breed name using command-line arguments.
// Write code to output an appropriate message if the requested breed is not found.
// Handle request errors and print the error details to the screen.

const request = require('request');

const apiURL = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedData = function(breedName, callback) {
  request(`${apiURL}?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Request error: ${error}`);
    } else {
      try {
        const data = JSON.parse(body);
        if (data.length === 0) {
          callback(`${breedName} not found.`);
        } else {
          const description = data[0].description;
          callback(null, description);
        }
      } catch (parseError) {
        callback(`Parsing error: ${parseError}`);
      }
    }
  });
};

module.exports = { fetchBreedData };