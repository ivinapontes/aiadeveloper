import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Request extends Component {
    render() {
        return (
            <div>
                 <h1> Send a rquest for this item</h1> <Link className="btn nav-link btn-success" to="/homepage">Back</Link>}
                 <h5> your name :</h5>
                   <input type="text" name="name"/>
                   <h5> your house</h5>
                   <div>
                   <select name="cars">
                    <option value="volvo">Bootcampers</option>
                    <option value="saab">Guides</option>
                    <option value="fiat">Developers</option>
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
