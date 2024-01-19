const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];

if (!breedName) {
  console.log('Please provide breed name in command line.');
} else {
  fetchBreedDescription(breedName, (error, description) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`${breedName} Description: ${description}`);
    }
  });
}