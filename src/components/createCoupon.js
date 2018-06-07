import React, { Component } from 'react'
import Nav from "./Nav";
import Footer from "./footer";
import axios from "axios";
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
export default class CreateCoupon extends Component {

    constructor(props){
        super(props);
         this.state= {
           coupons:[],
           newCoupon:"",
           couponErrors:null
         }
         }


    componentDidMount(){
        axios.get('/api/getAllCoupons')
        .then((response)=> {
            this.setState ({
                coupons: response.data
             });
            
            console.log(response.data);
        })
        .catch( (error) =>{
          console.log(error);
        });
        
    }

    deleteHandler = (event, id) => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this imaginary file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            const url = `/api/deleteCoupon/${id}`;
        axios.delete(url)
        .then((response)=> {
          console.log(response);
         window.location.href = "/createCoupon";
        })
        .catch(function (error) {
          console.log(error);
        });
          } else {
            swal("Your imaginary file is safe!");
          }
        }); 
    }

    updateInputField = (event) =>{
        this.setState({[event.target.name] : event.target.value})
      }

      sendFrom = (event)=> {
        event.preventDefault();
        axios.post('/api/createCoupon/', {
            coupon_student:this.state.newCoupon,
        }).then((response) => {
            console.log(response);
            swal("Good job!", "The house has been Added!", "success");
            window.location.href = "/createCoupon";
        }).catch((error)=>{
            console.log(error.response.data.errors);
            this.setState({couponErrors :  error.response.data.errors});
        });
        
      }

  render() {
    return (
      <div>
          <Nav />
        <table className="table" >
                    <thead>
                      <tr>
                        <th scope="col">Name of Coupon</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
                    {this.state.coupons && this.state.coupons.map((coupon) =>{
                        return (
                          <tbody key={coupon._id}>
                          <tr>
                          <td>{coupon.coupon_student}</td>
                          <td><button type="button" className="btn btn-warning btn-circle" onClick={(event) => { this.deleteHandler(event, coupon._id) }} ><i className="glyphicon glyphicon-remove"></i></button></td>

                          </tr>
            </tbody>
                          )
                    })
                }
                  
     
            
        </table>
        <form style={{width: 600+ "px", marginLeft:25 + "%"}}>
            <div className="form-group">
                  <label htmlFor="exampleInputEmail1">New Coupon:</label>
                  <input type="text" name="newCoupon"  onChange={this.updateInputField} value={this.state.newCoupon} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Coins"/>
                  <h3 style={{color:"red"}}>{this.state.couponErrors && this.state.couponErrors.coupon_student && <p>{this.state.couponErrors.coupon_student.msg} </p> }</h3>

                 <br />
                   <button type="submit" onClick={this.sendFrom}  className="btn btn-primary">Submit</button> <br /> <br />
                 <button type="button" className="btn btn-warning btn-circle" ><Link to={`/housesWalet`}>Go Back</Link></button>

            </div>
        </form>
      
        <Footer />
      </div>
    )
  }
}
