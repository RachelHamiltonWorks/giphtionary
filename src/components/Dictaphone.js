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
      <SearchForm
      search={props.search}
      handleFormSubmit={props.handleFormSubmit}
      handleInputChange={props.handleInputChange}
      handleSpeechChange={props.handleSpeechChange}
      transcript = {transcript}
      />
      <button id="microphone" onClick={SpeechRecognition.startListening}> Speak </button>
    </div>
  )
}
export default Dictaphone