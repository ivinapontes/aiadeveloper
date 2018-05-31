import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool
// }

class Dictaphone extends Component {
    constructor(props){
        super(props);
        this.state={
            voice:null,
            orderReq:"send 500 to house",
            coins:null,
            house:null,
            reason:null
           

        }
    }
    
saveVoice = ()=>{
    // send 500 coins to house of alan turing because of helping
    // 0    1   2      3   4    5  6    7      8      9   10
    const spilt = this.state.voice.split(" ");
    this.setState({
        coins : spilt[1],
        house:spilt[6]+ " " + spilt[7],
        reason:spilt[10] 
    })
}
  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

this.state.voice = transcript
    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
        <button onClick={this.saveVoice}>save</button>
        <h1>{this.state.coins}</h1>
        <h1>{this.state.house}</h1>
      </div>
    )
  }
}
// Dictaphone.propTypes = propTypes
export default SpeechRecognition(Dictaphone)