import React, { Component } from "react";
import Dictaphone from "./Dictaphone";
import ResultList from "./ResultList";
import API from "../utils/API";
//import { text } from "express";

class SearchResultContainer extends Component {
  state = {
    search: "",
    resultsGiphy: [],
    resultsDictionary: [],
    speech: ""

  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchGiphy("servo");
    this.searchDictionary("servo");
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

//typed input
  handleInputChange = (event) => {
    document.getElementById("search").placeholder=""
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
      speech: event.target.placeholder
    });
  };


  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = (event) => {
    event.preventDefault();
    let speech = document.getElementById("search").getAttribute("placeholder")

    let query = this.state.search === "" ? speech : this.state.search
    this.searchGiphy(query)
    this.searchDictionary(query)
    this.setState({search: ""})
    
    document.getElementById("search").placeholder=""
 
    // console.log(speech)
    // this.setState ({
    //  speech: speech   
    // }, () => {
    //   console.log (this.state.speech)
    //   if (this.state.search === ""){
    //     this.searchGiphy(this.state.speech);
    //     this.searchDictionary(this.state.speech);
    //   }
    //  else {
    //    console.log (this.state.search)
    //   this.searchGiphy(this.state.search);
    //   this.searchDictionary(this.state.search)
    //  }
    //  this.setState({search: "", speech: ""})
    // })
    
  };

  render() {
    return (
      <div>
        <Dictaphone
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleSpeechChange={this.handleSpeechChange}
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
