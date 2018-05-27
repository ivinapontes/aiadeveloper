import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AdminHomepage extends Component {
  render() {
    return (
      <div>
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
