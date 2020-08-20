import React from "react";
import SpeechRecognition from 'react-speech-recognition'
// import { Container, Form } from "react-bootstrap";


function SearchForm(props) {
  return (
    <div>
        <form>
        {/* <Container> */}
        {/* <Form.Control size="sm" name="foo" placeholder="Smaller Input" /> */}
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder={props.transcript} n
            id="search"
          />
          <button onClick={props.handleFormSubmit}> Search</button>
          {/* </Container> */}
        </form>
        <button id="microphone" onClick={SpeechRecognition.startListening}> Speak </button>
      </div>
     
    
  );
}

export default SearchForm;

