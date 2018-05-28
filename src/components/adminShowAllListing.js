import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


class ShowAllListing extends Component {
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
    
    deleteHandler = (event, id) => {
        const url = `/api/deleteListing/${id}`;
        axios.delete(url)
        .then((response)=> {
            alert("Are you sure You want to Delete it?");
          console.log(response);
          
          window.location.href = "/craigslist";
      
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    
    render() {

        return (
            <div>
                <div> <h3> <Link to={`/createListing/`}>Create a new Listing</Link></h3></div>
                 <br/>  
               {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (

                       <div key={listing._id}>
                          
                     

                         <div className="eachProduct"> 
                          <h4><b>Product: {listing.name}</b></h4>
                          <h4><b>Description: {listing.description}</b></h4>
                          <h4><b>Coins: {listing.price}</b></h4>
                          <Link to={`/showOneAdmin/${listing._id}`}>View Listing</Link><br />
                          <Link to={`/editListing/${listing._id}`}>Edit Listing</Link>
                          <Link to={`/deleteListing/${listing._id}`}>Delete Post</Link>
                        </div>
                          <br/>  
                        </div>
                       

                    )
                })}
            </div>
        );
    }
}

export default ShowAllListing;

