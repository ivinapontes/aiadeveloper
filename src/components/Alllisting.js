import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";

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
            console.log(response.data.list);
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
                <Nav />
                 <br/>  
               {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (
                       <div key={listing._id}>
                             <div className="card-group-listing">
                                    
                                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                           <img className="card-img-top" src=".../100px180/?text=Image cap" alt="Card image cap"/>
                                            <h4 className='card-header'><b>Product: {listing.name}</b></h4>
                                            <h4 className='card-text'><b>Description: {listing.description}</b></h4>
                                            <h4 className='card-text'><b>Coins: {listing.price}</b></h4>
                                            <Link className="btn btn-info btn-lg" to={`/showOne/${listing._id}`}>Buy Me!</Link>
                                    <hr/>  
                                    <br/>
                                    </div>
                                
                                
                                </div>

                                
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default AllListing;
