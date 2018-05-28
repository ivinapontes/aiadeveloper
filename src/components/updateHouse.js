import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';

export default class UpdateHouse extends Component {
    constructor(props){
        super(props);
        this.state ={
            houseName:null,
            level:null,
            coins: null
        }
    }
    sendFrom = (event)=>{
        console.log(this.props);
        // console.log('haha');
        event.preventDefault();
        axios.put(`/api/updatingHouse/${this.props.match.params.id}`, {
            houseName:this.state.houseName,
            level:this.state.level,
            coins:this.state.coins,
        }).then((response) => {
            console.log(response);
            swal("Good job!", "The house has been updated!", "success");
        }).catch((error)=>{
            console.log(error);
        });
        
      }

    updateInputField = (event) =>{
        this.setState({[event.target.name] : event.target.value})
      }

  render() {
    return (
      <div>
       <div>
        <h1>Update House</h1>
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
        <button type="button" className="btn btn-warning btn-circle" ><Link to={`/housesWalet`}>Go Back</Link></button>

      </div>
      </div>
    )
  }
}
