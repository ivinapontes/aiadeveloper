import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Nav from './Nav';
class CreateListing extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            description:"",
            errors: ''
        }
        this.updateInputField = this.updateInputField.bind(this);
        this.sendFrom = this.sendFrom.bind(this);
    }
    sendFrom(event){
        event.preventDefault();
        console.log("hahahhah");
        axios.post('/api/createListing/', {
            name:this.state.name,
            price:this.state.price,
            description:this.state.description
        }).then((response) => {
            console.log(response);
            swal( "Item has been listed!", "success");
           // window.location.href="/adminS";
        }).catch((error)=>{
            console.log('error');
            this.setState({errors: error.response.data.errors });
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
                <h3>Insert here the product details</h3>
                <h3 style={{color:"red"}}> {this.state.errors}</h3>
                <form>
                 <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of the product"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.name && <p>{this.state.errors.name.msg} </p> }</h3>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Price</label>
                  <input type="number" name="price" value={this.state.price} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the price"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.price && <p>{this.state.errors.price.msg} </p> }</h3>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Description</label>
                  <input type="text" name="description" value={this.state.description} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.description && <p>{this.state.errors.description.msg} </p> }</h3>
                  
                </div>
                <button type="submit" onClick={this.sendFrom} className="btn btn-primary">Submit</button>
              </form>
            </div>
            <br />
            <Link className ="btn btn-info btn-lg" to={`/adminListing`}>Go Back</Link>
            </div>
        );
    }
}

export default CreateListing;
