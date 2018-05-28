import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
export default class ShowOneHouse extends Component {
    constructor(props){
        super(props);
         this.state= {
             data:{
             houseName:null,
             coins:null,
             level:null
             }
         }
         }

         componentDidMount(){
            console.log(this.props);
            axios.get(`/api/showOneHouse/${this.props.match.params.id}`)
            .then((response)=> {
              this.setState({data:response.data});
              console.log(response.data);          
            })
            .catch(function (error) {
              console.log(error);
            });
        }
  render() {
    return (
      <div>
        <h1>hello one house </h1>
        <div className="card bg-light mb-3" style={{maxWidth: 50 +"rem"}}>
        <div className="card-header"><h3> {this.state.data.houseName}</h3></div>
        <div className="card-body"><h3> {this.state.data.coins}</h3></div>
        <div className="card-body">
        <h4 className="card-text">{this.state.data.level}</h4>
        </div>
        </div>
        <Link className ="btn btn-info btn-lg" to={`/housesWalet`}>Go Back</Link>
      </div>
    )
  }
}
