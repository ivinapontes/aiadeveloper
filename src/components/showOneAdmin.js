import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './footer';


class ShowOneAdmin extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            description: "",
            price:""           
        }
    }

    componentDidMount(){
        axios.get(`/api/showOneListing/${this.props.match.params.id}`)
        .then((response)=> {
          this.setState({
            showingListing: response.data._id,
            description: response.data.description,
            price: response.data.price,
            name: response.data.name
        });
        //   console.log(response.data);
        // console.log(this.state)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    render() {
        return (
            <div>
                <Nav/>
            <div className=" card-group-listing">
            <div className="shadow-lg p-3 mb-5 bg-white rounded">  
             <h3 className='card-text'><b>Product:</b> <em>{this.state.name}</em></h3>
             <h3 className='card-text'><b>Description:</b><em>{this.state.description}</em></h3>
             <h3 className='card-text'><b>Price:</b><em>{this.state.price}</em></h3>
            
             <Link to={`/adminListing`} className="btn btn-warning btn-circle">Back to the Homepage</Link>
            </div>
            </div>
            <Footer />
            </div>
        );
    }
}

export default ShowOneAdmin;
