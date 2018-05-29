import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
class Request extends Component {
    constructor(props){
        super(props);
        this.state = {
            formdata:{
            rating:"bootcamp"
            }
        }
    }
    handleInput = (event,name) => {
        
        const newFormdata = {
            ...this.state.formdata
        }
        newFormdata[name] = event.target.value

        this.setState({
            formdata:newFormdata
        })
    }
    

    render() {
        return (
            <div>
                <Nav />
                 <h1> Send a rquest for this item</h1> <Link className="btn nav-link btn-success" to="/homepage">Back</Link>
                 <h5> your name :</h5>
                   <input type="text" name="name"/>
                   <h5> your house</h5>
                   <div>
                   <select className="form-control" style={{width:150 + "px", height:33+"px"}}
                            value={this.state.formdata.rating}
                            onChange={(event)=> this.handleInput(event, 'rating')}
                        >
                        <option val="1">Bootcamp</option>
                        <option val="2">Guide</option>
                        <option val="3">Developer</option>
                        

                        </select>
                   <h5> Proof agrement</h5>
                   </div>
                   <div>
                   <input type="file" name="fileToUpload" id="fileToUpload"/>
                   <input type="submit" value="submit" name="submit"/>
                   
                   </div>
                  
            </div>
            
        );
    }
}

export default Request;
