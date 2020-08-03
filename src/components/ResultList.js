import React from "react";

function ResultList(props) {
  return (
    <div class="wrapper">
      {props.results.map((result) => (
        <div key={result.id}>
          <img
            alt={result.title}
            className="img-fluid "
            src={result.images.original.url}
          />
        </div>
      ))}
    </div>
  );
}

export default ResultList;
