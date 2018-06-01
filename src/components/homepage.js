import React, { Component } from 'react';
import Footer from "./footer";
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
           <Footer />
        </div>
        );
    }
}

export default Listings;