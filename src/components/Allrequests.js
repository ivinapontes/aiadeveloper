import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";
import Img from 'react-image';
import swal from 'sweetalert';
import Footer from "./footer";
// import "../../server/config/uploads";

class AllRequests extends Component {
    constructor(props){
        super(props);
         this.state= {
             showingRequests: [],
             showingListings:[],
             itemId:{},
             id:{},
             errors: ""
         }
         }



    componentDidMount(){
        axios.get('/api/getAlluserRequest/')
        .then((response)=> {
            console.log(response.data);
          this.setState({
            showingRequests: response.data,
            });
          
        //   window.location.href = "/";
      
        })
        .catch( (error) =>{
          console.log(error);
          this.setState({errors : "Server Error"});
        });
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

    sendFromYes = (event) => {
        swal({
            title: "Are you sure?",
            text: "Once you accept it, you will not be able to recover this Request agin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your Request file has been deleted!", {
                icon: "success",
              });
        console.log(this.state.showingRequests);
     this.state.showingRequests.map((request, key) => {
         if( request.itemId != undefined){
            this.state.itemId =request.itemId;
         }
         this.state.id=request._id
            return request
          });
        //   console.log( this.state.itemId);
          console.log( this.state.id);
          
        axios.post(`/api/likePost/${this.state.itemId}`)
        .then((response)=> {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
        axios.delete(`/api/deleteRequest/${this.state.id}`)
        .then((response)=> {
            
          console.log(response);
          
          window.location.href = "/Allrequests";
      
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
        swal("Your imaginary file is safe!");
      }
    });
    }

    sendFromNo = (event) =>{
        swal({
            title: "Are you sure?",
            text: "Once you dont accept it, you will not be able to recover this Reguest Agin!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your Request file has been deleted!", {
                icon: "success",
              });
        this.state.showingRequests.map((request, key) => {
            this.state.id=request._id
               return request
             });
             axios.delete(`/api/deleteRequest/${this.state.id}`)
             .then((response)=> {
                 
               console.log(response);
               
               window.location.href = "/Allrequests";
           
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

                <h1 className="title"><strong><em>Here you can see all requests:</em></strong></h1>
                <br/>
                <div className="requests">
                      <table className= 'table'>
                        <thead className ="table-head">
                        <tr className="eachProduct1"> 
                          <th scope="col">Name</th>
                          <th scope="col">House</th>
                          <th scope="col">Level </th>
                          <th scope="col">Item </th>
                          <th scope="col">Proof </th>
                          <th scope="col">Request </th>
                          
                        </tr> 
                      </thead>
               
               {this.state.showingRequests && this.state.showingRequests.map((request)=>{
                    return (
                       <tbody key={request._id}>
                      <tr className="eachProduct">          
                    <td> {request.userName} </td>
                    <td> {request.userHouse} </td>
                    <td> {request.userLevel} </td> 

                    {this.state.showingListings && this.state.showingListings.map((listing)=>{
                    return (
                        <div key ={listing._id}>
                         {request.itemId === listing._id ? <td>{listing.name}</td> :null}
                       </div>
                )
                    
            })}
                   
               
                    <td><img width={200} src={'http://localhost:3001/uploads/'+request.screenshot} />   </td>
                        <td>
                             <input type="radio" name="negative" value="yes" onClick={this.sendFromYes}/>Y/
                            <input type="radio" name="negative" value="no" onClick={this.sendFromNo} />N</td> 
                    </tr>  
                    
                    </tbody>
                   
            
                    )
                    
                })}
               <Link className="btn nav-link btn-success" to="/adminHomepage" style={{marginLeft: 400 + 'px'}}>Back</Link>   
                            </table>

                        </div>
                    
                  <Footer />
            </div>
        );
    }
}



export default AllRequests;
