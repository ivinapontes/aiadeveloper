import React, { Component } from 'react';
import Allrequests from "./Allrequests";
import { Link } from 'react-router-dom';
import Nav from "./Nav";
import axios from "axios";

class AdminHomepage extends Component {
  constructor(props){
    super(props);
     this.state= {
         
         houses:[],  
     }
     }
  componentDidMount(){
         axios.get('/api/getAllHouses/')
    .then((response)=> {
        this.setState ({
            houses: response.data
         });
        
        console.log(response.data);
    })
    .catch( (error) =>{
      console.log(error);
    });
  }

  render() {
    return (
      <div >
      <Nav />
        <div  className="header_title" >
          <h1>Welcome Admin</h1>
        </div>
         <div class="card-group">
          <div class="card">
            <div class="card-body text-center">
              <h4 class="card-text"><Link to={`/adminListing`}> <b>Listings</b></Link></h4>
            </div>
          </div>
          <div class="card bg-warning">
            <div class="card-body text-center">
              <h4 class="card-text"><Link to={`/housesWalet`}><b> Houses Wallet</b></Link></h4>
            </div>
          </div>
          <div class="card bg-info">
            <div class="card-body text-center">
              <h4 class="card-text"><Link to={`/Allrequests`}> <b>Listing requests</b></Link></h4>
            </div>
          </div> 
        </div>
        {this.state.houses && this.state.houses.map((house) =>{
            return(

            <div key={house._id}>
            <h5> <b>  <td>Name of the House : {house.houseName}</td></b> </h5>
            <h5> <b> <td>Current Cosin : {house.coins}</td></b> </h5>
            <h5> <b> <td>Level : {house.level}</td></b> </h5>
            <h5> <b> <td>History : <br />{house.histories && house.histories.map((history)=>{
              return (
                <ul>
                  <li>{history} </li><hr />
                  </ul>
              )
            })}</td></b> </h5>
            
            <hr />
            </div>
            ) 
            
        })}
      </div>
    );
  }
}

export default AdminHomepage;
