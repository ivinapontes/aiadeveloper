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

    
    render() {

        return (
            <div>
                 <Nav />

                <h1>helloooooo</h1>
            
               
               {this.state.showingRequests && this.state.showingRequests.map((request)=>{
                    return (
                        <div className="requests">
                      <table className ="table">
                      <tr className="eachProduct1"> 
                        <th scope="col">Name</th>
                        <th scope="col">House</th>
                        <th scope="col">Level </th>
                        <th scope="col">Proof </th>
                      </tr>  <br/>
                      <tr className="eachProduct">          
                    <td> {request.userName} </td>
                    <td> {request.userHouse} </td>
                    <td> {request.userLevel} </td>  
                   
               
                    <td> <img width={200} src={'http://localhost:3001/uploads/'+request.screenshot} />  </td>
                    </tr>     
                        </table>

                           </div>
                    )
                })}
                  <Link className="btn nav-link btn-success" to="/adminHomepage">Back</Link>
            </div>
        );
    }
}


export default AllRequests;
