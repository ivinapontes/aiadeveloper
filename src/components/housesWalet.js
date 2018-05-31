import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import Nav from "./Nav";
export default class HousesWalet extends Component {
    constructor(props){
        super(props);
         this.state= {
           houses:[]
         }
         }
    
    componentDidMount(){
        axios.get('/api/getAllHouses/')
        .then((response)=> {
            this.setState ({
                houses: response.data
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
            const url = `/api/deleteHouse/${id}`;
        axios.delete(url)
        .then((response)=> {
          console.log(response);
         window.location.href = "/housesWalet";
        })
        .catch(function (error) {
          console.log(error);
        });
          } else {
            swal("Your imaginary file is safe!");
          }
        }); 
    }

  render() {
    return (
      <div>
        <Nav />
          <h1 className="col-md-12 welcome_txt text-center"> Welcome to the wallet page </h1>
          <br/>
          
            <br />
           <table class="table" >
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Coins</th>
                        <th scope="col">Level</th>
                        <th scope="col">Information</th>
                        <th scope="col">Edit Information</th>
                        <th scope="col">Edit Coins</th>
                        <th scope="col">Handle</th>
                      </tr>
                    </thead>
        
        {this.state.houses && this.state.houses.map((house) =>{
            return(
            <tbody key={house._id}>
            <tr>
            <td>{house.houseName}</td>
            <td>{house.coins}</td>
            <td>{house.level}</td>
            <td><Link to={`/showOneHouse/${house._id}`}><button type="button" className="glyphicon glyphicon-eye-open" ><i ></i></button></Link></td>
            <td><Link to={`/updateHouse/${house._id}`}><button className="glyphicon glyphicon-cog"></button></Link></td>
            <td><Link to={`/addCoinsHouse/${house._id}`}><button className="glyphicon glyphicon-usd"></button></Link></td>
            <td><button type="button" className="btn btn-warning btn-circle" onClick={(event) => { this.deleteHandler(event, house._id) }} ><i class="glyphicon glyphicon-remove"></i></button></td>
            <hr />
            
            
            { house.level === "bootcamp" ?<td>{house.level}</td>: null }
            </tr>
            </tbody>
            
            )
        })}
        </table>
        <Link className="btn btn-warning btn-circle" to={`/newHouse`}>Add New House</Link>
        <Link className ="btn btn-info btn-circle" to={`/adminHomepage`}>Go Back</Link>
      </div>
    )
  }
}
