//Login.js
import React, { Component } from 'react'
import axios from 'axios';
import Nav from './Nav';
import ShowOne from './showOne';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';


class Request extends Component {

constructor(props) {
    super(props);
    this.state={
      data:{
        userName:'',
        userHouse:'',
        userLevel:'Bootcampers',
        screenshot: null,
      },
      err:null
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }
  
  

  handlePhotoChange(event) {
    var formData = this.state.data;
    formData[event.target.name] = event.target.files[0]
    this.setState({ data: formData })

}
handleSubmit(event) {
  event.preventDefault();
  let _this = this;

  let formData = new FormData();
  formData.append('userName', this.state.data.userName);
  formData.append('userHouse', this.state.data.userHouse);
  formData.append('userLevel', this.state.data.userLevel);
  formData.append('screenshot', this.state.data.screenshot);
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
 

  
  changeHandler(e){
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
      <div className='loginform'>
      <h1 className="requestText">Send a request for this item</h1><br/><br/><br/>
        {this.state.err && <h3>{this.state.err}</h3> }
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                        <label htmlFor="userName" >Enter Your Name</label>
                        <input type="text" value={this.state.data.userName} name="userName" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="userName"/>
                        <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.userName && <p>{this.state.errors.userName.errMsg} </p> }</h3>
            </div>
            <div className="form-group">
                        <label htmlFor="userHouse" >Enter Your House</label>
                        <input onChange={changeHandler} value={this.state.data.userHouse} name="userHouse" type="userHouse" className="form-control" id="userHouse" placeholder="userHouse"/>  
            </div>
            <div className="form-group">
                                <label htmlFor="exampleInputPhoto">Upload Screenshot</label>
                                <input type="file" name="screenshot"  onChange={this.handlePhotoChange}  className="form-control" id="exampleInputPhoto" placeholder="screenshot" />
                            </div>

            <div className="requestOption">
            <select onChange={changeHandler} value={this.state.data.userLevel}  name="userLevel"  >
                    <option value='Bootcampers' >Bootcampers</option>
                    <option value='Guides'>Guides</option>
                    <option  value='Developers'>Developers</option>
                   </select><br/><br/><br/>
          
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
            <Link className="btn btn-success btn-lg" to="/homepage">Go back</Link>
         
      </form>
      </div>
      </div>
    )
  }
}

export default Request;