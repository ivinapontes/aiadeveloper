import React from 'react';
import ReactDOM from 'react-dom';
//import Logout from './components/logout';
//import App from './App';

// browserRouter is a redirct and we need to install it besides the windowns.location 
import { BrowserRouter, Route } from 'react-router-dom';
import Listings from './components/homepage';
// import ShowOne from './components/showOne';
// import DeleteOne from './components/deleteOne';
// import CreateListing from './components/createListing';
// import UpdateListing from './components/updateListing';
// import Login from './components/login';
// import Register from './components/registration';

ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={Listings} />
      {/* <Route path='/homepage' component={Craigslist} />
      <Route path='/logout' component={Logout} />
      <Route path='/article/:id' component={ShowOne} />
      <Route path='/deleteOne/:id' component={DeleteOne} />
      <Route path='/createArticle/new' component={CreateListing} />
      <Route path='/updateListing/:id' component={UpdateListing} />
      <Route path = '/registration' component={Login} />
      <Route path = '/registration' component={Register}/>
      */}
    </div>
</BrowserRouter>, document.getElementById('root'));

