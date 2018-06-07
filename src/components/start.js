import React, { Component } from 'react';
import axios from "axios";
import Footer from "./footer";


class Start extends Component {
    constructor(props){
        super(props);
        this.state = {
          couponErrors: "",
          coupon: "",
          
        }
        this.updateInputField = this.updateInputField.bind(this);
        this.sendFrom = this.sendFrom.bind(this);
      }
      sendFrom(event){
          console.log("hahahha");
        event.preventDefault();
        axios.post('/api/loginCoupon', {
            coupon_student : this.state.coupon,
            
        }).then((response) => {
            console.log(response);
            window.location.href="/homepage";
        }).catch((error)=>{
            
            this.setState({couponErrors :  error.response.data.errors});
            console.log(error.response.data.errors);
        
        });
        
      }
    
      updateInputField(event){
        this.setState({[event.target.name] : event.target.value})
      }
    render() {
        return (
            <div>
              {/* <Nav /> */}
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <div className= 'container1'>
                    <div className= 'main_title'>
                    
                    <img src="https://restart.network/assets/partials/particles_partial/assets/images/restart.png" alt="Restart Logo" height="100px" width="300px"/>
                        <h1 className="display-3">Welcome to OneMarket</h1>
                        <div className="lead">
                        <h2>Please enter your coupon code :</h2>
                    </div>
                    <div className= 'textBox'>
                        <input type="text" name="coupon" className="form-control" placeholder="Enter Your Coupon Code" aria-describedby="basic-addon1" value={this.state.coupon} onChange={this.updateInputField}/>
                        <h1><button type="submit" className='btn btn-danger btn-lg' style={{marginBottom: 40+'px'}} onClick={this.sendFrom}>Enter</button></h1>
                        <h3 style={{color:"red"}}>{this.state.couponErrors && this.state.couponErrors.coupon_student && <p>{this.state.couponErrors.coupon_student.msg} </p> }</h3>

                         </div>
                        </div>
                    
                    </div>
                </div>
                    <Footer />
            </div>
        );
    }
}

export default Start;
