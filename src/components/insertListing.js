//Login.js
import React, { Component } from 'react'
import axios from 'axios';
import Nav from './Nav';
import ShowOne from './showOne';
import { Link } from 'react-router-dom';


class Request extends Component {

constructor(props) {
    super(props);
    this.state={
      data:{
        name:'',
        price:'',
        description:'',
        picture: null,
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
  formData.append('name', this.state.data.name);
  formData.append('price', this.state.data.price);
  formData.append('description', this.state.data.description);
  formData.append('picture', this.state.data.picture);
  axios.post("/api/createListing", formData)
      .then(res => {
          console.log(res.data);
          if (res.data.errors) {
              let mainErr = res.data.errors;
              let errMsg = {
                name: mainErr.name ? mainErr.name.msg : '',
                price: mainErr.price ? mainErr.price.msg : '',
                description: mainErr.description ? mainErr.description.msg : '',
                picture: mainErr.picture ? mainErr.picture.msg : ''
              };
              _this.setState({
                  error: errMsg
              });
          } else {
              _this.setState({
                  data: {
                    name: '',
                    price: '',
                    description: '',
                    picture: '',
                  },
                  error: {
                    name: '',
                    price: '',
                    description: '',
                    picture: '',
                  },
                  success: 'Your Item Inserted successfully'
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
      <div className='loginform'>
      <h1 className="requestText">Insert a new item</h1><br/><br/><br/>
        {this.state.err && <h3>{this.state.err}</h3> }
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                        <label htmlFor="userName" >Insert item name</label>
                        <input type="text" value={this.state.data.name} name="name" onChange={changeHandler} className="form-control" id="name" aria-describedby="nameHelp" placeholder="name"/>
                        <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.name && <p>{this.state.errors.name.errMsg} </p> }</h3>
            </div>
            <div className="form-group">
                        <label htmlFor="userHouse" >Insert the price</label>
                        <input onChange={changeHandler} value={this.state.data.price} name="price" type="price" className="form-control" id="price" placeholder="price"/>  
            </div>
            <div className="form-group">
                        <label htmlFor="userHouse" >Write a discription</label>
                        <input onChange={changeHandler} value={this.state.data.description} name="description" type="description" className="form-control" id="description" placeholder="description"/>  
            </div>
            <div className="form-group">
                                <label htmlFor="exampleInputPhoto">Upload Picture</label>
                                <input type="file" name="picture"  onChange={this.handlePhotoChange}  className="form-control" id="exampleInputPhoto" placeholder="picture" />
                            </div>

            <div className="requestOption">
           
          
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
            <Link className="btn btn-success btn-lg" to="/adminListing">Go back</Link>
         
      </form>
      </div>
      </div>
    )
  }
}

export default Request;