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
            },
            errors: null
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
            console.log(error.response.data.errors);
            this.setState({errors: error.response.data.errors });

            
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
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.houseName && <p>{this.state.errors.houseName.msg} </p> }</h3>

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
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.coins && <p>{this.state.errors.coins.msg} </p> }</h3>
                  

            </div>
        </form>
        <button type="button" className="btn btn-warning btn-circle" ><i class="glyphicon glyphicon-remove"></i><Link to={`/housesWalet`}>Go Back</Link></button>

      </div>
    )
  }
}
