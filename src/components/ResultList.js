import React from "react";
import { Container } from "reactstrap";

function ResultList(props) {
  console.log(props.resultsDictionary);
  return (
    <Container>
      <h2>{props.resultsDictionary.shortdef}</h2>
      <div id="wrapper">
        {props.resultsGiphy.map((result) => (
          <img
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
