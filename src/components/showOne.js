import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import swal from 'sweetalert';
import Footer from './footer';
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
                userLevel:'Bootcamper',
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
            picture: response.data.picture,

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
              swal("Good job!", "Your Request has been sent successfully ", "success");
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
            <div className="bgShowOne" style={{height : 1200+"px"}}>
                <Nav />
                <div className="card-group-listing">
                <div className="shadow-lg p-3 mb-5 bg-white rounded">
                  <h4 className='card-text'><b> <img width={200} src={'http://localhost:3001/uploads/'+this.state.picture} /></b></h4>
                        <h3><b>Product name:</b>{this.state.name}</h3>
                        <h3><b>Price:</b>{this.state.price} $</h3>
                        <h3><b>Description:</b> {this.state.description}</h3>
                       
                </div>
                </div>
            
             
             
        <div className='loginform' style={{marginBottom: 200 + "px"}}>
          <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{width: 700 + "px ", marginLeft: -150 + "px"}}>
            <h1 className="title"><strong>Send a request for this item</strong></h1>
                                    <h4 className="title"><em>Please fill in your details:</em></h4>
                                    <hr/>
                {this.state.err && <h3>{this.state.err}</h3> }
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="userName" >Enter Your Name</label>
                            <input type="text" value={this.state.data.userName} name="userName" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="User Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userHouse" >Enter Your House</label>
                            <input onChange={changeHandler} value={this.state.data.userHouse} name="userHouse" type="userHouse" className="form-control" id="userHouse" placeholder="User House"/>  
                         </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPhoto">Upload Screenshot</label>
                            <input type="file" name="screenshot"  onChange={this.handlePhotoChange}  className="form-control" id="exampleInputPhoto" placeholder="Screen shot" />
                        </div>
                        <label htmlFor="userHouse" >Enter Your Level</label>
                        <select onChange={changeHandler} value={this.state.data.userLevel}  name="userLevel" className="form-control" style={{height:33+"px"}}  >
                        <option value='Bootcampers' >Bootcamper</option>
                        <option value='Guides'>Guide</option>
                        <option  value='Developers'>Developer</option>
                    </select><br/>
            
                <button type="submit" className="btn btn-success">Submit</button> <br/>                
                <Link className="btn btn-primary" style={{marginTop:10+"px"}}to={`/homepage`}>Back to the Homepage</Link>
            
                    </form>
                    </div>
                </div>
                
    
            </div>
           <Footer />
        </div>
        );
    }
}

export default ShowOne;
