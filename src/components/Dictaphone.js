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
      <button className='btn btn-info' onClick={SpeechRecognition.startListening}>Speak</button>
      <SearchForm
        search={props.search}
        handleFormSubmit={props.handleFormSubmit}
        handleInputChange={props.handleInputChange}
        handleSpeechChange={props.handleSpeechChange}
        transcript={transcript}
      />
    </div>
  )
}
export default Dictaphone