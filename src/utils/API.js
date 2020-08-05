import axios from "axios";

const GIPHYURL = "https://api.giphy.com/v1/gifs/search?q=";
const GIPHYAPIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

const MWURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const MWAPIKEY = "?key=edeb60ac-21d3-4109-93d4-16ae042e92ec";

// Export an object with a "search" method that searches the Giphy API for the passed query
const API = {
  search: Promise.all([getGiphy(), getDictionary()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  })
};

function getGiphy(query) {
  return axios.get(GIPHYURL + query + GIPHYAPIKEY);
}

function getDictionary(query) {
  console.log("dictionary", query)
return axios.get(MWURL + query + MWAPIKEY);
//.then(function (response) {
  // handle success
  //console.log(response);
  //return response
}

export default API;


