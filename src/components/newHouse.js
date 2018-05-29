import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Nav from './Nav';
export default class NewHouse extends Component {
    constructor(props){
        super(props);
        this.state ={
            houseName:null,
            coins:null,
            formdata:{
                level:"Bootcamp"
            }
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
            level:this.state.formdata.level,
            coins:this.state.coins,
        }).then((response) => {
            console.log(response);
            swal("Good job!", "The house has been Added!", "success");
        }).catch((error)=>{
            console.log(error);
            
        });
        
      }
      handleInput = (event,name) => {
        
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }


  render() {
    return (
      <div>
          <Nav />
        <h1>Add a New House</h1>
        <form style={{width: 600+ "px", marginLeft:25 + "%"}}>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">House Name:</label>
                  <input type="text" name="houseName" value={this.state.houseName} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="House Name"/>
            </div>
            
            
            <div className="form-group">
            <select
                            value={this.state.formdata.level}
                            onChange={(event)=> this.handleInput(event, 'level')}
                        >
                        <option val="1">Bootcamp</option>
                        <option val="2">Guide</option>
                        <option val="3">Developer</option>
                        

                        </select>
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
