import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class AllListing extends Component {
    constructor(props){
        super(props);
         this.state= {
             showingListings: [],
             errors: ""
         }
         }



    componentDidMount(){
        axios.get('/api/getAllListings/')
        .then((response)=> {
            //console.log(response.data.list.name);
          this.setState({
              showingListings: response.data.list,
            });
          
        //   window.location.href = "/";
      
        })
        .catch( (error) =>{
          console.log(error);
          this.setState({errors : "Server Error"});
        });
    }

    
    render() {

        return (
            <div>
                 

                
                <br/>
               
               {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (
                       <div key={listing._id}>
                          <h3><b> {listing.name}</b></h3>
                          <h3><b> {listing.price}</b></h3>
                          <h3><b> {listing.description}</b></h3>
                          <Link className="btn nav-link btn-success" to="/Request">Buy</Link>}
                           </div>
                    )
                })}
            </div>
        );
    }
}

export default AllListing;
