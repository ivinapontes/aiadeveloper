import React from 'react';
import ReactDOM from 'react-dom';
//import Logout from './components/logout';
//import App from './App';

// browserRouter is a redirct and we need to install it besides the windowns.location 
import { BrowserRouter, Route } from 'react-router-dom';
import Listings from './components/homepage';
import Start from './components/start';
import Alllisting from './components/Alllisting';
import Request from './components/Request';
import adminHomepage from './components/adminHomepage';
import adminLogin from './components/adminLogin';
import App from './App';
import ShowOne from './components/showOne';
// import DeleteOne from './components/deleteOne';
// import CreateListing from './components/createListing';
// import UpdateListing from './components/updateListing';
// import Login from './components/login';
// import Register from './components/registration';

ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route  path='/homepage' component={Listings} />

      <Route  path='/Request' component={Request} />
      <Route  path='/adminHomepage' component={adminHomepage} />
      <Route  path='/adminLogin' component={adminLogin} />

      <Route path='/showOne/:id' component={ShowOne} />

      {/* <Route path='/homepage' component={Craigslist} />
      <Route path='/logout' component={Logout} />
      
      <Route path='/deleteOne/:id' component={DeleteOne} />
      <Route path='/createArticle/new' component={CreateListing} />
      <Route path='/updateListing/:id' component={UpdateListing} />
      <Route path = '/registration' component={Login} />
      <Route path = '/registration' component={Register}/>
      */}
    </div>
</BrowserRouter>, document.getElementById('root'));

