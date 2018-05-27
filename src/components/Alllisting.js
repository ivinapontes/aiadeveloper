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

                     

                         <div className="eachProduct"> 
                          <h4><b>Product: {listing.name}</b></h4>
                          <h4><b>Description: {listing.description}</b></h4>
                          <h4><b>Coins: {listing.price}</b></h4>
                          <Link to={`/showOne/${listing._id}`}>View Listing</Link><br />
                          <Link className="btn nav-link btn-success" to="/Request">Buy</Link>}
                        </div>
                          <br/>  
                        </div>

                    )
                })}
            </div>
        );
    }
}

export default AllListing;
