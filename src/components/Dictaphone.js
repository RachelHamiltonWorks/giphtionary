import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import SearchForm from "./SearchForm.js"

const Dictaphone = (props) => {
  const { transcript, resetTranscript } = useSpeechRecognition()


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
{/* NEED TO clear out value of input */}
      <p>{transcript}</p>
      <SearchForm
      search={props.search}
      handleFormSubmit={props.handleFormSubmit}
      handleInputChange={props.handleInputChange}
      handleSpeechChange={props.handleSpeechChange}
     transcript = {transcript}
      />
    </div>
  )
}
export default Dictaphone