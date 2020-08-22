  
import React from "react";
import { Container } from "reactstrap";
import DisplayWord from "./DisplayWord.js";

function ResultList(props) {
  // console.log(props.resultsDictionary);
  return (
    <Container>
      <br></br>
      <br></br>
      <DisplayWord word={props.resultsDictionary} />
      {props.resultsDictionary.shortdef && <h2>{props.resultsDictionary.shortdef.map((def) => 
      <p>{def}</p>)}</h2>}
      <div id="wrapper">
        {props.resultsGiphy.map((result) => (
          <img
            key={result.id}
            className="img-fluid"
            alt={result.id}
            src={result.images.original.url}
          />
        ))}
      </div>
    </Container>
  );
}

export default ResultList;