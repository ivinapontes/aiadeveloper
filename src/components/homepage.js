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
            <div className= "header_title">
                <h1> Welcome to the OneMarket</h1>
            </div>
            
                 <div className= "listing">
                     <AllListing />
            
                 </div>
                 Login admin
                 <Link to={`/adminLogin`}>Admin login</Link><br />
        </div>
        );
    }
}

export default Listings;