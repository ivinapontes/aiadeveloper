import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";
import Footer from "./footer";

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
               {this.state.showingListings && this.state.showingListings.slice(0).reverse().map((listing)=>{
                    return (
                       <div key={listing._id}>
                             <div className="card-group-listing" >
                                    
                                        <div className="shadow-lg p-3 mb-5 bg-white rounded">
                                       
                                           <h4 className='card-text'><b><img width={200} src={'http://localhost:3001/uploads/'+listing.picture} /></b></h4>
                                            <h4 className='card-text'><b>Product: {listing.name}</b></h4>
                                            <h4 className='card-text'><b>Description: {listing.description}</b></h4>
                                            <h4 className='card-text'><b>Price : {listing.price}</b> </h4>
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
