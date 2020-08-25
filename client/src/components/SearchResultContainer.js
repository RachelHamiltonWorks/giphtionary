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

  searchData = (query) => {
    API.searchGiphy(query).then((giphyRes) => {
      API.searchDictionary(query).then((dictRes) => {
        console.log("gifs", giphyRes.data);
        console.log("words", dictRes.data);
        this.setState({
          resultsGiphy: giphyRes.data.data,
          resultsDictionary: dictRes.data[0]
        })
      })
    })
  };

  handleInputChange = (event) => {
    document.getElementById("search").placeholder = ""
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
    this.searchData(query);
    this.setState({ search: "" })

    document.getElementById("search").placeholder = ""

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

  renderResultList = () => {
    console.log(this.state.resultsDictionary);
    console.log(this.state.resultsGiphy);
    if (this.state.resultsDictionary && this.state.resultsGiphy.length) {
      console.log("rendering result list")
      return (<ResultList
        resultsGiphy={this.state.resultsGiphy}
        resultsDictionary={this.state.resultsDictionary}
      />)
    } else {
      return <div className="placeholder">
        
      </div>;
    }
  };

  render() {
    console.log("resultsDictionary")
    console.log(this.state.resultsDictionary)
    return (
      <div>
        <Dictaphone
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleSpeechChange={this.handleSpeechChange}
        />
        {this.renderResultList()}
      </div>
    );
  }
}

export default SearchResultContainer;