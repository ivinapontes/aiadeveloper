import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';

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
                <Nav />
             <h3>{this.state.name}</h3>
             <h3>{this.state.description}</h3>
             <h3>{this.state.price}</h3>
            
             <Link to={`/homepage`}>Back to the Homepage</Link>
             <footer className="footer">
                        <div className="container text-center text-md-left">
                            <div className="row">
                                 <div className="col-md-4 mx-auto">
                                    <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Restart Network</h5>
                                      <p>Stichting Restart Network is a non-profit organization.</p>
                                 </div> 
                                      <div className="col-md-2 mx-auto">
                                        Restart Network
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="https://restart.network/about/"> About</a>
                                            </li>
                                            <li>
                                                <a href="#!">Press</a>
                                            </li>
                                            <li>
                                                <a href="https://restart.network/#">Contact</a>
                                            </li>
                                        
                                        </ul>
                                      </div>
                                      <div className="col-md-2 mx-auto">
                                        
                                        <div className="social-networks">
                                          <a href="https://twitter.com/Restart_Network"  className="fa fa-twitter"></a> Twitter
                                        <br/>
                                        <a href="https://www.facebook.com/restartnetwork"  className="fa fa-facebook"></a> Facebook
                                        <br/>
                                        <a href="https://instagram.com/restartnetwork/"  className="fa fa-instagram"></a>Instagram

                                        </div>
                                      </div>
                                    

                            </div>  
                           
                        </div>        
                    </footer>
            </div>
        );
    }
}

export default ShowOne;
