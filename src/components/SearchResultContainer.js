import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    resultsGiphy: [],
    resultsDictionary: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("basset hound");
    this.searchDictionary("basset hound");
  }

  searchGiphy = (query) => {
    API.searchGiphy(query)
      .then((res) => {
       console.log("gifs", res.data);
       this.setState({ resultsGiphy: res.data.data });
       })
      .catch((err) => console.log(err));
  };

  searchDictionary = (query) => {
    API.searchDictionary(query)
      .then((res) => {
        console.log("dictionary", res.data);
        this.setState({ resultsDictionary: res.data[0] });
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // When the form iss ubmitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
    this.searchDictionary(this.state.search);
  };

  render() {
    return (
      <div>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          resultsGiphy={this.state.resultsGiphy}
          resultsDictionary={this.state.resultsDictionary}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
