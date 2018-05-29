import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';

class UpdateListing extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            description:""

        }
        this.updateInputField = this.updateInputField.bind(this);
        this.sendFrom = this.sendFrom.bind(this);
    }
    sendFrom(event){
        event.preventDefault();
        axios.put(`/api/updatingListing/${this.props.match.params.id}`, {
            name:this.state.name,
            price:this.state.price,
            description:this.state.description
        }).then((response) => {
            console.log(response);
            alert("The List has been updated");
             window.location.href="/adminListing";
        }).catch((error)=>{
            console.log(error);
            this.setState({errors : "Server Error"});
        });
        
    }
    updateInputField(event){
        this.setState({[event.target.name] : event.target.value})
    }
    render() {
        return (
            <div>
                <Nav />
                <div>
                <h1>Update a List</h1>
                <h3 style={{color:"red"}}> {this.state.errors}</h3>
                <form>
                 <div className="form-group">
                  <label htmlFor="exampleInputEmail1">name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Price</label>
                  <input type="number" name="price" value={this.state.price} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Description</label>
                  <input type="text" name="description" value={this.state.description} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                </div>
                <button type="submit" onClick={this.sendFrom} className="btn btn-primary">Submit</button>
              </form>
            </div>
            
            <Link to={`/adminListing`}>Go Back</Link>
            </div>
        );
    }
}

export default UpdateListing;
