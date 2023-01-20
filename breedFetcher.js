const request = require('request');
//const search = process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  const site = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(site + breedName, (error, response, body) => {
    try {
      const foundData = JSON.parse(body);
      if (Object.keys(foundData).length === 0) {
        callback(error, null);
      }
      const data = foundData[0];
      callback(null, data["description"]);
    } catch (error) {
      callback(error, null);
    }




  });
};

module.exports = { fetchBreedDescription };



