import React, { Component } from 'react';
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import Nav from './Nav';
class CreateListing extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            price:"",
            description:"",
            picture:"",
            errors: ''
        }
        this.handlePhotoChange = this.handlePhotoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    sendFrom(event){
        event.preventDefault();
        console.log("hahahhah");
        axios.post('/api/createListing/', {
            name:this.state.name,
            price:this.state.price,
            description:this.state.description,
            picture:this.state.picture
        }).then((response) => {
            console.log(response);
            swal( "Item has been listed!", "success");
           // window.location.href="/adminS";
        }).catch((error)=>{
            console.log('error');
            this.setState({errors: error.response.data.errors });
        });
        
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
        axios.post("/api/createListing/", formData)
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
                        success: 'Your Listing Inserted successfully'
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
        return (
            <div>
                <Nav />
                <div>
                <h3>Insert here the product details</h3>
                <h3 style={{color:"red"}}> {this.state.errors}</h3>
                <form>
                 <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name of the product"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.name && <p>{this.state.errors.name.msg} </p> }</h3>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Price</label>
                  <input type="number" name="price" value={this.state.price} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter the price"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.price && <p>{this.state.errors.price.msg} </p> }</h3>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Description</label>
                  <input type="text" name="description" value={this.state.description} onChange={this.updateInputField} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description"/>
                  <h3 style={{color:"red"}}>{this.state.errors && this.state.errors.description && <p>{this.state.errors.description.msg} </p> }</h3>
                  
                </div>
                <div className="form-group">
                                <label htmlFor="exampleInputPhoto">Upload Picture for Item</label>
                                <input type="file" name="picture"  onChange={this.handlePhotoChange}  className="form-control" id="exampleInputPhoto" placeholder="picture" />
                            </div>
                <button type="submit" onClick={this.sendFrom} className="btn btn-primary">Submit</button>
              </form>
            </div>
            <br />
            <Link className ="btn btn-info btn-lg" to={`/adminListing`}>Go Back</Link>
            </div>
        );
    }
}

export default CreateListing;
