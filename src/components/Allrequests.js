import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


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
            //console.log(response.data.list.name);
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
                 

                <h1>helloooooo</h1>
            
               
               {this.state.showingRequests && this.state.showingRequests.map((request)=>{
                    return (
                        <div className="requests">
                      
                        
                      <table className="requestTable">
                        
                     
                        
                 
                        
                        <th className="requestTableth">Name
                        <td><b> {request.userName}</b></td>
                        </th>
                      
                        <th className="requestTableth">House
                        <td><b> {request.userHouse}</b></td>
                        </th>
                     
                        <th className="requestTableth">Level</th>
                        <tr>
                      
                     
                        <td><b> {request.userLevel}</b></td>
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
