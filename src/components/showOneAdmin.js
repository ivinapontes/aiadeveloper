import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';


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
             <h3 className='card-text'><b>Product:{this.state.name}</b></h3>
             <h3 className='card-text'><b>Description:{this.state.description}</b></h3>
             <h3 className='card-text'><b>Price:{this.state.price}</b></h3>
            
             <Link to={`/adminListing`}>Back to the Homepage</Link>
            </div>
            </div>
            </div>
        );
    }
}

export default ShowOneAdmin;
