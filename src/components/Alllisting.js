//Alllisting.js
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Alllisting extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:null,
        
        }
        axios.get(`api/getAllListings/`)
        .then((data)=>{this.setState({data:data.data})});
        
      
    }
    
    render() {
        var listing = this.state.data;
        return (
      
            (this.state.data &&
            <div className="card text-center">
                <div className="card-body">
                
                    <p className="card-text"><b>Description:</b> {listing}</p>
                    <p className="card-text btn-sm"> <b>Location:</b> {listing}</p>
                </div>
            </div>)
        );
    }
}

export default Alllisting;