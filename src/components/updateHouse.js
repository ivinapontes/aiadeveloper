import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from 'sweetalert';
import Nav from './Nav';

export default class UpdateHouse extends Component {
    constructor(props){
        super(props);
        this.state ={
            houseName:null,
            coins: null,
            formdata:{
                level:"Bootcamp"
                },
                errors:null,
        }
    }
    sendFrom = (event)=>{
        console.log(this.props);
        // console.log('haha');
        event.preventDefault();
        axios.put(`/api/updatingHouse/${this.props.match.params.id}`, {
            houseName:this.state.houseName,
            level:this.state.formdata.level,
            coins:this.state.coins,
        }).then((response) => {
            console.log(response);
            swal("Good job!", "The house has been updated!", "success");
        }).catch((error)=>{
            console.log(error);
            console.log(error.response.data.errors);
            this.setState({errors: error.response.data.errors });
        });
        
      }

    updateInputField = (event) =>{
        this.setState({[event.target.name] : event.target.value})
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
       <div>
        <h1 className='col-md-12 welcome_txt text-center'>Update House</h1>
        <br/>
        <form  className='loginform'>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">House Name:</label>
                  <input type="text" name="houseName" value={this.state.houseName} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="House Name"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.houseName && <p>{this.state.errors.houseName.msg} </p> }</h3>

            </div>
            <label htmlFor="exampleInputEmail1">House Level:</label>
            <select className="form-control" style={{width:150 + "px", height:33+"px"}}
                            value={this.state.formdata.level}
                            onChange={(event)=> this.handleInput(event, 'level')}
                        >
                        <option val="1">Bootcamp</option>
                        <option val="2">Guide</option>
                        <option val="3">Developer</option>
                        </select>
            <br/>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Coins:</label>
                  <input type="number" name="coins"  onChange={this.updateInputField} value={this.state.coins} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Coins"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.coins && <p>{this.state.errors.coins.msg} </p> }</h3>

                  <button type="submit" onClick={this.sendFrom}  className="btn btn-primary btn-circle">Submit</button>
                  <button type="button" className="btn btn-warning btn-circle" ><Link to={`/housesWalet`}>Go Back</Link></button>

            </div>
        </form>
       

      </div>
      </div>
    )
  }
}
