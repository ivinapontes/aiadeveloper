import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



class ShowOne extends Component {
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
             <h3>{this.state.name}</h3>
             <h3>{this.state.description}</h3>
             <h3>{this.state.price}</h3>
            
             <Link to={`/homepage`}>Back to the Homepage</Link>

            </div>
        );
    }
}

export default ShowOne;
