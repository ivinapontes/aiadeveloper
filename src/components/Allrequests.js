import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "./Nav";
import Img from 'react-image';
// import "../../server/config/uploads";

class AllRequests extends Component {
    constructor(props){
        super(props);
         this.state= {
             showingRequests: [],
             errors: ""
         }
         }



    componentDidMount(){
        axios.get('/api/getAlluserRequest/')
        .then((response)=> {
            console.log(response);
          this.setState({
            showingRequests: response.data,
            });
          
        //   window.location.href = "/";
      
        })
        .catch( (error) =>{
          console.log(error);
          this.setState({errors : "Server Error"});
        });
    }

    sendFrom = (event) => {
        console.log("Clicked");
    }

    
    render() {

        return (
            <div>
                 <Nav />

                <h1>helloooooo</h1>
                <div className="requests">
                      <table className ="table">
                      <thead>
                      <tr className="eachProduct1"> 
                        <th scope="col">Name</th>
                        <th scope="col">House</th>
                        <th scope="col">Level </th>
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
                    
                   
               
                    <td>   <div className="StudentProfile-leftContainer">
                          {/* <img src={`http://localhost:3000/uploads/${this.state.studentInfo.profilePic}`} */}
                          {/* className="img-rounded img-responsive" alt="Profile Picture" /> */}
                        </div></td>
                        <td>
<input type="radio" name="negative" value="yes" onClick={this.sendFrom}/>Y/
<input type="radio" name="negative" value="no"/>N</td> 
                    </tr>    
                    </tbody> 
            
                    )
                    
                })}
                            </table>

                        </div>
                    
                  <Link className="btn nav-link btn-success" to="/adminHomepage">Back</Link>
            </div>
        );
    }
}


export default AllRequests;
