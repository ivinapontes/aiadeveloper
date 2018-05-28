import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


class DeleteListing extends Component {
    componentDidMount(){
        console.log(this.props);
        axios.post(`/api/deleteListing/${this.props.match.params.id}`)
        .then((response)=> {
          console.log(response);
          
        window.location.reload("/");
      
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>The Listing has been deleted</h1>
                <Link to={`/adminListing`}>Go Back</Link>
            </div>
        );
    }
}

export default DeleteListing;
