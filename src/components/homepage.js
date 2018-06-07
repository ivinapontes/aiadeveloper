import React, { Component } from 'react';
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
            <div className= "listing" >
                <AllListing />
            </div>
            <br />
        </div>
        );
    }
}

export default Listings;