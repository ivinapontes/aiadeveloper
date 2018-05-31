import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Request from "./Request";

class ShowOne extends Component {
    constructor(props){
        super(props);
        this.state= {
            name: "",
            description: "",
            price:"",  
            screenshot: "",
            data:{
                userName:'',
                userHouse:'',
                userLevel:'Bootcampers',
                screenshot: null,
                // itemId: this.props.match.params.id,
              },
              err:null         
        }
    }

    componentDidMount(){
        axios.get(`/api/showOneListing/${this.props.match.params.id}`)
        .then((response)=> {
          this.setState({
            showingListing: response.data._id,
            description: response.data.description,
            price: response.data.price,
            name: response.data.name,
            screenshot: response.data.screenshot,

        });
        //   console.log(response.data);
        // console.log(this.state)
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    handlePhotoChange =(event) => {
        var formData = this.state.data;
        formData[event.target.name] = event.target.files[0]
        this.setState({ data: formData })
    
    }
    handleSubmit =(event) => {
      event.preventDefault();
      let _this = this;
    
      let formData = new FormData();
      formData.append('userName', this.state.data.userName);
      formData.append('userHouse', this.state.data.userHouse);
      formData.append('userLevel', this.state.data.userLevel);
      formData.append('screenshot', this.state.data.screenshot);
      formData.append('itemId', this.props.match.params.id);
      axios.post("/api/userRequest", formData)
          .then(res => {
              console.log(res.data);
              if (res.data.errors) {
                  let mainErr = res.data.errors;
                  let errMsg = {
                    userName: mainErr.userName ? mainErr.userName.msg : '',
                    userHouse: mainErr.userHouse ? mainErr.userHouse.msg : '',
                    userLevel: mainErr.userLevel ? mainErr.userLevel.msg : '',
                      screenshot: mainErr.screenshot ? mainErr.screenshot.msg : ''
                  };
                  _this.setState({
                      error: errMsg
                  });
              } else {
                  _this.setState({
                      data: {
                        userName: '',
                        userHouse: '',
                        userLevel: '',
                        screenshot: '',
                      },
                      error: {
                        userName: '',
                        userHouse: '',
                        userLevel: '',
                          screenshot: '',
                      },
                      success: 'Your Request Inserted successfully'
                  })
              }
          })
          .catch(error => console.log(error))
    }
     
    
      
      changeHandler =(e) =>{
        var formData = this.state.data;
        formData[e.target.name] = e.target.value;
        this.setState({
            data : formData
        })
    
      }
    render() {
        var changeHandler= this.changeHandler;
        return (
            <div>
                <Nav />
                <div className="card-group-listing">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                 
                      
                        <h3><b>Product name:</b>{this.state.name}</h3>
                        <h3><b>Price:</b>{this.state.price}</h3>
                        <h3><b>Description:</b> {this.state.description}</h3>
                        <h3><b>screen</b> {this.state.screenshot}</h3>
                    </div>
                   </div>
            
             
             
        <div className='loginform'>
         <h1 className="requestText">Send a request for this item</h1>
                                    <h4>Please fill in your details</h4>
                                    <hr/>
                {this.state.err && <h3>{this.state.err}</h3> }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="userName" >Enter Your Name</label>
                            <input type="text" value={this.state.data.userName} name="userName" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="userName"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userHouse" >Enter Your House</label>
                            <input onChange={changeHandler} value={this.state.data.userHouse} name="userHouse" type="userHouse" className="form-control" id="userHouse" placeholder="userHouse"/>  
                         </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPhoto">Upload Screenshot</label>
                            <input type="file" name="screenshot"  onChange={this.handlePhotoChange}  className="form-control" id="exampleInputPhoto" placeholder="screenshot" />
                        </div>
                        <label htmlFor="userHouse" >Enter Your Level</label>
                <select onChange={changeHandler} value={this.state.data.userLevel}  name="userLevel" className="form-control" style={{height:33+"px"}}  >
                        <option value='Bootcampers' >Bootcampers</option>
                        <option value='Guides'>Guides</option>
                        <option  value='Developers'>Developers</option>
                    </select><br/>
            
                <button type="submit" className="btn btn-success">Submit</button> <br/>                
                <Link className="btn btn-primary" to={`/homepage`}>Back to the Homepage</Link>
            
         </form>
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
                                        
                                        {/* <button type="button" class="btn btn-fb"><i class="fa fa-facebook pr-1"></i> Facebook</button>
                                        <br/> */}
                                        
                                        <button type="button" class="btn btn-fb"><i class="fa fa-facebook"></i></button>
                                        
                                        <button type="button" class="btn btn-tw"><i class="fa fa-twitter"></i></button>  
                                      
                                        <button type="button" class="btn btn-li"><i class="fa fa-linkedin"></i></button>
                                   
                                        <button type="button" class="btn btn-ins"><i class="fa fa-instagram"></i></button>
                                        {/* <a href="https://www.facebook.com/restartnetwork"  className="fa fa-facebook"></a> Facebook
                                        <br/>
                                        <a href="https://instagram.com/restartnetwork/"  className="fa fa-instagram"></a>Instagram */}

                                      </div>
                                    

                            </div>  
                           
                        </div>        
                    </footer>
            </div>
        );
    }
}

export default ShowOne;
