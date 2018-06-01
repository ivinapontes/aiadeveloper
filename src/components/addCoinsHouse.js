// import React, { Component } from 'react'
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
// import responsiveVoice from 'responsivevoice'
// var voice = require('responsivevoice');

class AddCoinsHouse extends Component {
    constructor(props){
        super(props);
        this.state ={
            changedCoins: null,
            reason:null,
            data:{
                houseName:null,
                coins:null,
                level:null,
                histories:null
                },
                date: new Date(),
                errors: null,
                voice:null,
            orderReq:"send 500 to house",
            coinsVoice:null,
            houseVoice:null,
            reasonVoice:null
        }
    }

    componentDidMount(){
        console.log(this.props);
        axios.get(`/api/showOneHouse/${this.props.match.params.id}`)
        .then((response)=> {
          this.setState({data:response.data});
          console.log(response.data);          
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    sendFrom = (event)=>{
        console.log(this.props);
        event.preventDefault();
       
        axios.put(`/api/updatingCoins/${this.props.match.params.id}`, {
            reason:this.state.reason,
            coins:parseInt(this.state.changedCoins) + parseInt(this.state.data.coins),
            histories:`On ${this.state.date} You have sent ${this.state.changedCoins} Because of ${this.state.reason}`
        }).then((response) => {
            console.log(response);
            
            swal("Good job!", "Coins has been updated!", "success");
        }).catch((error)=>{
            console.log(error.response.data.errors);
            this.setState({errors: error.response.data.errors });
        });
        
      }

    updateInputField = (event) =>{
        this.setState({[event.target.name] : event.target.value})
      }

      saveVoice = (event)=>{
    //    console.log(responsiveVoice.speak("hello world"));
        event.preventDefault();
        // send 500 coins to the house of alan turing because of helping
        // 0    1   2      3   4    5  6    7      8      9   10   11
        const spilt = this.state.voice.split(" ");
        console.log(spilt);
        if(spilt.length === 12){
        this.setState({
            coinsVoice : spilt[1],
            houseVoice:spilt[5]+ " " + spilt[6]+ " " +spilt[7]+ " " + spilt[8],
            reasonVoice:spilt[11] 
        })
    }
     if (spilt.length === 13){
        this.setState({
            coinsVoice : spilt[1] +" "+ spilt[2],
            houseVoice:spilt[6]+ " " + spilt[7]+ " " +spilt[8]+ " " + spilt[9],
            reasonVoice:spilt[12] 
    })

     }
    }

    sendFromVoice = (event)=>{
        console.log(this.props);
        event.preventDefault();
       
        axios.put(`/api/updatingCoins/${this.props.match.params.id}`, {
            reason:this.state.reasonVoice,
            coins:parseInt(this.state.coinsVoice) + parseInt(this.state.data.coins),
            histories:`On ${this.state.date} You have sent ${this.state.changedCoins} Because of ${this.state.reason}`
        }).then((response) => {
            console.log(response);
            
            swal("Good job!", "Coins has been updated!", "success");
        }).catch((error)=>{
            console.log(error.response.data.errors);
            this.setState({errors: error.response.data.errors });
        });
        
      }


  render() {
    const { transcript, resetTranscript,autoStart, browserSupportsSpeechRecognition } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

this.state.voice = transcript
    return (
      <div>
          <Nav />
          <div>
              <h4><em>If you want to enjoy using the sound recognition please send as a follow:</em></h4>
          <h6>for Plus :Send 500 coins to the house of alan turing because of helping</h6>
          <h6>For minus :Send 500 - coins to the house of alan turing because of helping</h6>
          <textarea rows="4" cols="50" style={{width:500 +"px", marginLeft: 20 +"px"}} className="form-control" value={transcript}></textarea><br />
          <div style={{marginTop: 10 + "px", marginLeft: 20+ "px", padding: 10 +"px"}}>
          <button className="btn btn-primary" onClick={resetTranscript}>Reset</button>
          <button style={{marginLeft:10 +"px"}}className="btn btn-primary" onClick={this.saveVoice}>save</button>
        
         </div>

        
        </div>

        <form style={{width: 600+ "px", marginLeft:25 + "%"}}>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Reason :</label>
                  <input type="text" name="reasonVoice" value={this.state.reasonVoice} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Reason"/>

            </div> 
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Coins:</label>
                  <input type="text" name="coinsVoice"  onChange={this.updateInputField} value={this.state.coinsVoice} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.data.coins}/>

                  <button type="submit" onClick={this.sendFromVoice}  className="btn btn-primary">Submit</button>

            </div>
            
        </form>


       <div>
        <h1>Update House</h1>
        <div className="card bg-light mb-3" style={{maxWidth: 50 +"rem"}}>
        <div className="card-header"><h3>House Name: {this.state.data.houseName}</h3></div>
        <div className="card-body"><h3> Coins :{this.state.data.coins}</h3></div>
        <div className="card-body">
        <h4 className="card-text">Level :{this.state.data.level}</h4>
        <h4 className="card-text">histories :{this.state.data.histories && this.state.data.histories.map((history)=>{
            return(
                <div key={history._id}>
                <ul>
                    <li>{history}
                        </li>
                        </ul>
                </div>
            )
        })}</h4>
        </div>
        </div>
        <form style={{width: 600+ "px", marginLeft:25 + "%"}}>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Reason :</label>
                  <input type="text" name="reason" value={this.state.reason} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Level"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.reason && <p>{this.state.errors.reason.msg} </p> }</h3>

            </div> 
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Coins:</label>
                  <input type="number" name="changedCoins"  onChange={this.updateInputField} value={this.state.changedCoins} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={this.state.data.coins}/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.coins && <p>{this.state.errors.coins.msg} </p> }</h3>

                  <button type="submit" onClick={this.sendFrom}  className="btn btn-primary">Submit</button>

            </div>
            
        </form>
        <button type="button" className="btn btn-warning btn-circle" ><Link to={`/housesWalet`}>Go Back</Link></button>

      </div>
      </div>
    )
  }
}
export default SpeechRecognition(AddCoinsHouse)
