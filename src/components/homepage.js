import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import AllListing from "./Alllisting";


class Listings extends Component {
    constructor(props){
        super(props);
         this.state= {
             showingListings: [],
             errors: "",
             userLoggedIn: false
         }
        //  this.deleteListing = this.deleteListing.bind(this);
         }



    // componentDidMount(){
    //     axios.get('/api/getAllListings/')
    //     .then((response)=> {
    //         console.log(response.data.isUser.firstName);
    //       this.setState({
    //           showingListings: response.data.list,
    //           userLoggedIn: response.data.isUser
    //         });
          
    //     //   window.location.href = "/";
      
    //     })
    //     .catch( (error) =>{
    //       console.log(error);
    //       this.setState({errors : "Server Error"});
    //     });
    // }

    // deleteListing(){
    //     let listing;
    //     this.state.showingListings.map((listing)=>{
    //         console.log(listing._id);
    //     });
        
        
        // let arr_listing =this.state.showingListings;
        // let listing_ID;
        // for(var i=0; i<arr_listing.length; i++){
        //     listing_ID = arr_listing[i]._id
        // } 
        // axios.post(`/api/deleteListing/${listing_ID}`)
        //   .then(function (response) {
        //       alert("Are you sure You want to Delete it?")
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    // }ssss

    // deleteHandler = (event, id) => {
    //     const url = `/api/deleteListing/${id}`;
    //     axios.delete(url)
    //     .then((response)=> {
    //         alert("Are you sure You want to Delete it?");
    //       console.log(response);
          
    //       window.location.href = "/homepage";
      
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }
    
    // likeHandler = (event,id) => {
    //     axios.post(`api/likeListing/${id}`)
    //     .then((response)=> {
    //     //   this.setState({response});
    //       console.log(response.data);

    //       const newList = this.state.showingListings.map( (item, key) => {
    //         if(response.data._id === item._id) {
    //             item.like = response.data.like;
    //         }
    //         return item;
    //       });
        
    //       this.setState( {showingListings: newList} );
    //     //   console.log(this.state.showingListings);
    //     //   window.location.reload();
      
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }

   
    
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
                 <Link to={`/login`}>Admin login</Link><br />
        </div>
        );
    }
}

export default Listings;