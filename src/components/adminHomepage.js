import React, { Component } from 'react';
import Allrequests from "./Allrequests";
import { Link } from 'react-router-dom';

class AdminHomepage extends Component {
  render() {
    return (
      <div>
      <h1>Welcome Admin</h1>
      <Link className="btn nav-link btn-success" to="/Allrequests">Listing requests</Link>
        <div  className="header_title" >
          <h1>Welcome Admin</h1>
        </div>
        <Link to={`/adminListing`}> Listings</Link><br />
        <div>Listings</div>
        <div>Houses</div>




        <div>Listing requests</div>
        
      </div>
    );
  }
}

export default AdminHomepage;
