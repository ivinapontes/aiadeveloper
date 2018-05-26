import React, { Component } from 'react';
import axios from "axios";

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
//////testeeeee
      sendFrom(event){
          console.log("hahahha");
        event.preventDefault();
        axios.post('/api/loginCoupon', {
            coupon_student : this.state.coupon,
            
        }).then((response) => {
            console.log(response);
            window.location.href="/homePage";
        }).catch((error)=>{
            console.log(error);
            this.setState({couponErrors : "Server Error"});
        });
        
      }
    
      updateInputField(event){
        this.setState({[event.target.name] : event.target.value})
      }
    render() {
        return (
            <div>
                <h1>Welcome to the market Plaats from Restart</h1>
                <h2>Please enter your coupon code :</h2>
                <input type="text" name="coupon" value={this.state.coupon} onChange={this.updateInputField}/>
                <button type="submit" onClick={this.sendFrom}>Enter</button>
            </div>
        );
    }
}

export default Start;
