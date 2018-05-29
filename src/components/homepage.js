import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import AllListing from "./Alllisting";



class Listings extends Component {
    // constructor(props){
    //     super(props);
    //      this.state= {
    //          showingListings: [],
    //          errors: "",
    //          userLoggedIn: false
    //      }

    //      }

    
    render() {
        return (
        <div>
            
            
                 <div className= "listing">
                     <AllListing />
            
                 </div>
                 
                 <Link to={`/adminLogin`}>Admin login</Link><br />
        </div>
        );
    }
}

export default Listings;