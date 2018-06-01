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
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{marginTop: 3 +"px",height: 80 + "px"}}>
                
                    <a href="/"><img   src="https://restart.network/assets/partials/particles_partial/assets/images/restart.png" alt="Restart Logo" height="100px" width="300px"/></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{marginLeft: 120 +"px"}} >
                            <div class="navbar-nav" >
                            <select className="form-control" style={{width:150 + "px",marginLeft: 300 +"px",marginTop: 10 +"px", height:33+"px"}}
                                                    value={this.state.formdata.level}
                                                    onChange={(event)=> this.handleInput(event, 'level')}
                                                >
                                                <option val=""> Wallets </option>
                                                <option val="1">Bootcamp</option>
                                                <option val="2">Guide</option>
                                                <option val="3">Developer</option>
                            </select>
                            <div className="Logo">
                            <img width={200} src={'http://localhost:3001/uploads/images (1).png-1527791672154.png'} /> 
                            </div>
  
                        {!this.state.session ?<Link className="nav-item nav-link"  style={{marginLeft:150 + "px"}} to={`/adminLogin`}>Are you an Admin?</Link>: null}

                        {this.state.session ?<h4 className="nav-link" style={{marginLeft:500 +"px"}} >Welcome: {this.state.session.firstName.toUpperCase()}</h4>: null}
                        {this.state.session ?
                        <Link to="/adminHomepage" className="nav-link" style={{marginTop: 15 +"px"}} ><h4>Homepage</h4></Link> :null}
        
                        { this.state.session ?<Link className="nav-link" to='/logout'><h2 className="btn btn-danger navbar-btn">LogOut</h2></Link>: null}
                         </div>
                        </div>
                         
            </nav>
        </div>
        {this.state.houses && this.state.houses.map((house) =>{
            return(

            <div key={house._id}>
              { house.level === this.state.formdata.level ?<td><h5 className='shadow-lg p-3 mb-5 bg-white rounded'>House: <b>{house.houseName}</b> </h5></td>: null } 
             { house.level === this.state.formdata.level ?<td><h5 className='shadow-lg p-3 mb-5 bg-white rounded'>Coins in your wallet: <b> {house.coins} </b> </h5></td>: null }
            

            </div>
            )
        })}
       

      </div>
    )
  }
}
