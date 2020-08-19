import axios from "axios";

const GIPHYBASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const GIPHYAPIKEY = "&api_key=7F8vZIS0dNkMM9wNsAzzHa16DuDs8JC4";
const DICBASEURL = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/";
const DICAPIKEY = "?key=edeb60ac-21d3-4109-93d4-16ae042e92ec"

// Export an object with a "search" method that searches the Giphy API for the passed query
export default  {
  searchGiphy: function(query) {
    return axios.get(GIPHYBASEURL + query + GIPHYAPIKEY);
    
  },
  searchDictionary: function(query) {
    return axios.get(DICBASEURL + query + DICAPIKEY);
}
};



