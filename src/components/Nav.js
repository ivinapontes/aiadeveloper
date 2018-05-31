import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


export default class Nav extends Component {
    constructor(props){
        super(props);
         this.state= {
             session:null,
             houses:[],
             formdata:{
                level:""
                }
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
             axios.get('/api/getAllHouses/')
        .then((response)=> {
            this.setState ({
                houses: response.data
             });
            
            console.log(response.data);
        })
        .catch( (error) =>{
          console.log(error);
        });
            }
            handleInput = (event,name) => {
        
                const newFormdata = {
                    ...this.state.formdata
                }
                newFormdata[name] = event.target.value
        
                this.setState({
                    formdata:newFormdata
                })
            }



  render() {
    return (
        <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: 10 +"px"}}>
      <a href="/"><img   src="https://restart.network/assets/partials/particles_partial/assets/images/restart.png" alt="Restart Logo" height="100px" width="300px"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginLeft: 120 +"px"}} >
    <div class="navbar-nav" >
      {/* <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a> */}
      
      
      <select className="form-control" style={{width:150 + "px", height:33+"px"}}
                            value={this.state.formdata.level}
                            onChange={(event)=> this.handleInput(event, 'level')}
                        >
                        <option val="1">Bootcamp</option>
                        <option val="2">Guide</option>
                        <option val="3">Developer</option>
    </select>

  
  {!this.state.session ?<Link className="nav-item nav-link"  style={{marginLeft:150 + "px"}} to={`/adminLogin`}>Are you an Admin?</Link>: null}

      {this.state.session ?<h4 className="nav-link"  style={{marginLeft:90 +"%"}}>Welcome: {this.state.session.firstName.toUpperCase()}</h4>: null}
      { this.state.session ?<Link className="nav-link" to='/logout'><h2 className="btn btn-default navbar-btn">LogOut</h2></Link>: null}
    </div>
  </div>
</nav>

        {this.state.houses && this.state.houses.map((house) =>{
            return(

            <div key={house._id}>
            <h5> <b>  { house.level === this.state.formdata.level ?<td>{house.houseName}</td>: null } </b> </h5>
            <h5> <b>  { house.level === this.state.formdata.level ?<td>{house.coins}</td>: null }</b> </h5>
            

            </div>
            )
        })}
       

      </div>
    )
  }
}
