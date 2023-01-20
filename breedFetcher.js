const request = require('request');
const search = process.argv[2];
const site = "https://api.thecatapi.com/v1/breeds/search?q="+search;

request(site, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(typeof body);
  
});