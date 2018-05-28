import React, { Component } from 'react';
import Allrequests from "./Allrequests";
import { Link } from 'react-router-dom';

class AdminHomepage extends Component {
  render() {
    return (
      <div>
      
        <div  className="header_title" >
          <h1>Welcome Admin</h1>
        </div>
        <Link to={`/adminListing`}> Listings</Link><br />
        <Link to={`/housesWalet`}> Houses Walet</Link><br />
        



        <Link className="btn nav-link btn-success" to="/Allrequests">Listing requests</Link>
        <div>Listing requests</div>
        
      </div>
    );
  }
}

export default AdminHomepage;
