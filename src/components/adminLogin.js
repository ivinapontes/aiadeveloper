//Login.js
import React, { Component } from 'react'
import axios from 'axios';
import Footer from './footer';


class Login extends Component {

constructor(props) {
    super(props);
    this.state={
      data:{
        email:'',
        password:''
      },
      loginErrors: null,
      matchingPassword: null
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  submitHandler(e){
    e.preventDefault();
    axios.post('/api/login', 
       this.state.data
    ).then((response) => {
        console.log(response);
        window.location.href="/adminHomepage";
    })
    .catch((error)=>{
        console.log(error.response.data.errors);
        this.setState({loginErrors: error.response.data.errors, matchingPassword :error.response.data.message });
    });
    
  }
  // submitHandler(e){
  //   e.preventDefault();
  //   axios.post("/api/login", this.state.data).then((res)=>{
  //    console.log(res);
  //    if (res.data.err) {
  //     return  this.setState({err:res.data.message})
  //     console.log(res.data.err);
  //    } 
  //     return this.props.history.push("/adminHomepage");
  //   });
  // }


  
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
      <div className="adminLogin">
      <div className='loginform' style={{paddingTop:120 +"px"}}>
      
      <div className="shadow-lg p-3 mb-5 bg-white rounded" style={{ height:400 +"px"}} >
      
                
      <h1 className='title'>Welcome Admin</h1>
        <h3 className='title'>Login</h3>
        {this.state.err && <h3>{this.state.err}</h3> }
      <form onSubmit={this.submitHandler}>
        <div className='form-signin'>
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={this.state.data.email} name="email" onChange={changeHandler} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <h3 style={{color:"red"}}>{this.state.loginErrors && this.state.loginErrors.email && <p>{this.state.loginErrors.email.msg} </p> }</h3>

        </div>

            <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={changeHandler} value={this.state.data.password} name="password" type="password" className="form-control" id="password" placeholder="Password"/>
                        <h3 style={{color:"red"}}>{this.state.loginErrors && this.state.loginErrors.password && <p>{this.state.loginErrors.password.msg} </p> }</h3>
                        <h3 style={{color:"red"}}>{this.state.matchingPassword}  </h3>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        
      </form>
      </div>
      </div>
      <Footer />
      </div>
      
    )
  }
}

export default Login;