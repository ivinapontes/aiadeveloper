import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from './Nav';
import swal from 'sweetalert';
import Footer from "./footer";

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
            console.log(response);
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
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
        const url = `/api/deleteListing/${id}`;
        axios.delete(url)
        .then((response)=> {
          console.log(response);
          
         window.location.href = "/adminListing";
      
        })
        .catch(function (error) {
          console.log(error);
          
        });
        
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    }

    
    render() {

        return (
            <div>
              <Nav />
                <div> <h3> <Link className ="btn btn-info btn-lg" to={`/createListing/`}>Create a new Listing</Link></h3></div>
                 <br/>  
                 <table class="table">
                    
                    <thead>
                      <tr>
                        <th scope="col">Product:</th>
                        <th scope="col">Description:</th>
                        <th scope="col">Coins: </th>
                        <th scope="col"> Information</th>
                        <th scope="col">Edit Information</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    
               {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (

                       <tbody key={listing._id}>
                          
                     

                         <tr className="eachProduct"> 
                          <td> {listing.name}</td>
                          <td> {listing.description}</td>
                          <td>{listing.price}</td>
                          <td><Link to={`/showOneAdmin/${listing._id}`}><button type="button" className="glyphicon glyphicon-eye-open" ><i ></i></button></Link><br /></td>
                          <td><Link to={`/editListing/${listing._id}`}><button className="glyphicon glyphicon-cog"></button></Link></td>
                          <td><button type="button" className="btn btn-warning btn-circle"onClick={(event) => { this.deleteHandler(event, listing._id) }}><i class="glyphicon glyphicon-remove"></i></button></td>

                        </tr>
                          <br/>  
                        </tbody>
                       

                    )
                    
                })}
                </table>
                <Link className ="btn btn-info btn-lg" to={`/adminHomepage`}>Go Back</Link>
                  <Footer />
            </div>
        );
    }
}

export default ShowAllListing;

