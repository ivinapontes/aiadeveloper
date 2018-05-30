import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import AllListing from "./Alllisting";



class Listings extends Component {
    // constructor(props){
    //     super(props);
    //      this.state= {
    //          showingListings: [],
    //          errors: "",
    //          userLoggedIn: false
    //      }

    //      }

    
    render() {
        return (
        <div>
            <div className= "listing">
                <AllListing />
            </div>
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
                 <Link to={`/adminLogin`}>Admin login</Link><br />
        </div>
        );
    }
}

export default Listings;