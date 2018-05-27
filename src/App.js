import React, { Component } from 'react';
import './App.css';
// import Login from './components/login';
// import Register from './components/registration';
import Listings from './components/homepage';
import Start from './components/start';

class App extends Component {
 render() {
   return (
     <div className="App">
       <Start />
     </div>
   );
 }
}

export default App;