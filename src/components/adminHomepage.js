import React, { Component } from 'react';
import Allrequests from "./Allrequests";
import { Link } from 'react-router-dom';

class componentName extends Component {
  render() {
    return (
      <div>
      <h1>Welcome Admin</h1>
      <Link className="btn nav-link btn-success" to="/Allrequests">Listing requests</Link>
      </div>
    );
  }
}

export default componentName;
