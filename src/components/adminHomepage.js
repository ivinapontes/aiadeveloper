import React, { Component } from 'react';
import Footer from "./footer";
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
          <h1><strong><em>Welcome Admin:</em></strong></h1>
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
        <br />
        <br />
        {this.state.houses && this.state.houses.map((house) =>{
            return(

            <div key={house._id} className="card-group-listing">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <h5 className='card-text'>   <td ><b>Name of the House</b> :<em> {house.houseName}</em></td> </h5>
            <h5 className='card-text'>  <td><b>Current Cosin </b>: <em>{house.coins}</em></td> </h5>
            <h5 className='card-text'>  <td><b>Level</b> : <em>{house.level}</em></td> </h5>
            <h5 className='card-text'>  <td><b>History </b>: <br /><em>{house.histories && house.histories.map((history)=>{
              return (
                <ul >
                  <br />
                  <li>{history} </li>
                  </ul>
              )
            })}</em></td></h5>
            
            <hr />
            </div>
            </div>
            ) 
            
        })}
        <Footer />
      </div>
    );
  }
}

export default AdminHomepage;
