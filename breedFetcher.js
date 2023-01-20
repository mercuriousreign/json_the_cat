const request = require('request');
//const search = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  const site = "https://api.thecatapi.com/v1/breeds/search?q=";
  request(site + breedName, (error, response, body) => {
    try {
      const data = JSON.parse(body)[0];
      const keysNames = Object.keys(data);
      callback(null, data["description"]);
    } catch (error) {
      callback(error, null);
    }



    // if (error === null) { //if no error is found
    //   callback(null,data["description"]); 
    // } else { // if error is found
    //   callback(error,null);
    // }

  });
}

module.exports = { fetchBreedDescription }



