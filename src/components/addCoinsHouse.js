import React, { Component } from 'react'
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Nav from "./Nav";

export default class AddCoinsHouse extends Component {
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
                errors: null
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
            histories:`on ${this.state.date} You have send ${this.state.changedCoins} Because of ${this.state.reason}`
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

    


  render() {
console.log(this.state.changedCoins);
    return (
      <div>
          <Nav />
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
