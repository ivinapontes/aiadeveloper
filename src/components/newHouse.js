import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default class NewHouse extends Component {
    constructor(props){
        super(props);
        this.state ={
            houseName:null,
            level:null,
            coins: null
        }
    }

    updateInputField = (event) =>{
        this.setState({[event.target.name] : event.target.value})
      }

      sendFrom = (event)=> {
        console.log("heheheh");
        event.preventDefault();
        axios.post('/api/createHouse/', {
            houseName:this.state.houseName,
            level:this.state.level,
            coins:this.state.coins,
        }).then((response) => {
            console.log(response);
            swal("Good job!", "The house has been Added!", "success");
        }).catch((error)=>{
            console.log(error);
            
        });
        
      }


  render() {
    return (
      <div>
        <h1>Add a New House</h1>
        <form style={{width: 600+ "px", marginLeft:25 + "%"}}>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">House Name:</label>
                  <input type="text" name="houseName" value={this.state.houseName} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="House Name"/>
            </div>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Level</label>
                  <input type="text" name="level" value={this.state.level} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Level"/>
            </div>
            
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Coins:</label>
                  <input type="number" name="coins"  onChange={this.updateInputField} value={this.state.coins} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Coins"/>
                  <button type="submit" onClick={this.sendFrom}  className="btn btn-primary">Submit</button>

            </div>
        </form>
        <button type="button" className="btn btn-warning btn-circle" ><i class="glyphicon glyphicon-remove"></i><Link to={`/housesWalet`}>Go Back</Link></button>

      </div>
    )
  }
}
