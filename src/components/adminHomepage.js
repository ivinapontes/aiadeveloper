import React, { Component } from 'react';
import Allrequests from "./Allrequests";
import { Link } from 'react-router-dom';
import Nav from "./Nav";

class AdminHomepage extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default AdminHomepage;
