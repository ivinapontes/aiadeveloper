import React, { Component } from 'react';
import './App.css';
// import Login from './components/login';
// import Register from './components/registration';
import Listings from './components/homepage';

class App extends Component {
 render() {
   return (
     <div className="App">
      <Listings />
       {/* <Login /> */}
       <hr/><br/>
       {/* <Register /> */}
     </div>
   );
 }
}

export default App;