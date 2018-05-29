import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    constructor(props){
        super(props);
         this.state= {
             session:null,
         }
         }

    componentDidMount(){
        axios.get('/api/session')
            .then( (response)=> {
              console.log(response);
                this.setState({session:response.data.session});
            
             })
            .catch(function (error) {
              console.log(error);
             });
            }


  render() {
    return (
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: 10 +"px"}}>
      <img src="https://restart.network/assets/partials/particles_partial/assets/images/restart.png" alt="Restart Logo" height="100px" width="300px"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginLeft: 120 +"px"}} >
    <div class="navbar-nav" >
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
      {this.state.session ?<h4 className="nav-link"  style={{marginLeft:90 +"%"}}>Welcome: {this.state.session.firstName.toUpperCase()}</h4>: null}
      { this.state.session ?<Link className="nav-link" to='/logout'><h2 className="btn btn-default navbar-btn">LogOut</h2></Link>: null}
    </div>
  </div>
</nav>


      </div>
    )
  }
}
