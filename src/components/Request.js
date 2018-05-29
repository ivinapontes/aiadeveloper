//Login.js
import React, { Component } from 'react'
import axios from 'axios';
import Nav from './Nav';


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
    this.submitHandler = this.submitHandler.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
  }
  

  handlePhotoChange(event) {
    var formData = this.state.data;
    formData[event.target.name] = event.target.files[0]
    this.setState({ data: formData })

}
  
  submitHandler(e){
    e.preventDefault();
    axios.post("/api/userRequest", this.state.data).then((res)=>{
     console.log(res);
     if (res.data.err) {
      return  this.setState({err:res.data.message})
     } 
      return this.props.history.push("/Request");
    });
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
      <div className='loginform'>
      <h1 className="requestText">Send a request for this item</h1><br/><br/><br/>
        {this.state.err && <h3>{this.state.err}</h3> }
      <form onSubmit={this.submitHandler}>
            <div className="form-group">
                        <label htmlFor="userName" >Enter Your Name</label>
                        <input type="text" value={this.state.data.userName} name="userName" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="userName"/>
            </div>
            <div className="form-group">
                        <label htmlFor="userHouse" >Enter Your House</label>
                        <input onChange={changeHandler} value={this.state.data.userHouse} name="userHouse" type="userHouse" className="form-control" id="userHouse" placeholder="userHouse"/>  
            </div>
            <div className="form-group">
                                <label htmlFor="exampleInputPhoto">Profile Photo</label>
                                <input type="file" name="screenshot"  onChange={this.handlePhotoChange} className="form-control" id="exampleInputPhoto" placeholder="screenshot" />
                            </div>

            <div className="requestOption">
            <select onChange={changeHandler} value={this.state.data.userLevel}  name="userLevel"  >
                    <option value='Bootcampers' >Bootcampers</option>
                    <option value='Guides'>Guides</option>
                    <option  value='Developers'>Developers</option>
                   </select><br/><br/><br/><br/><br/><br/><br/><br/>
          
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
      </form>
      </div>
    )
  }
}

export default Request;