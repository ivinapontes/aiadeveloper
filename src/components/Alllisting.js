//Allposts.js
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Result(props) {
    return (
        props.posts.map((post)=>{
            return(
                <ul className='users' key={post._id}>
                <div className="card-body">
          
                    <h2 className="card-title">Name: {post.name}</h2>
            

              
                    <hr />
                </div>
                </ul>
            )
        })
    )
}

class Alllisting extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:null
        }
        
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/getAllListings/')
        .then((res)=>this.setState({posts:res.data})) 
        
    }
  

 

    render() {
        return (
            <div>
            {this.state.posts && <Result posts ={this.state.posts} />}
    
             </div>
        );
    }
}

export default Alllisting;