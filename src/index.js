import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Listings from './components/homepage';
import Start from './components/start';
import Alllisting from './components/Alllisting';
import Request from './components/Request';
import adminHomepage from './components/adminHomepage';
import adminLogin from './components/adminLogin';
import Allrequests from './components/Allrequests';
import Login from './components/adminLogin';
import App from './App';
import ShowOne from './components/showOne';
import AdminHomepage from './components/adminHomepage';
import ShowAllListing from './components/adminShowAllListing';
import UpdateListing from './components/updateListing';
import CreateListing from './components/insertListing';
import ShowOneAdmin from './components/showOneAdmin';
import DeleteListing from './components/deleteListing';


ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route exact path='/homepage' component={Listings} />

      <Route exact path='/Request' component={Request} />
      <Route exact path='/adminHomepage' component={adminHomepage} />
      <Route exact path='/adminListing' component={ShowAllListing} />
      <Route exact path='/login' component={Login} />
      <Route path='/editListing/:id' component={UpdateListing} />
      <Route path='/showOne/:id' component={ShowOne} />
      <Route exact path = '/showOneAdmin/:id'component={ShowOneAdmin}/>
      <Route path ='/showAllRequests/' component={Allrequests}/>
      <Route path='/createListing' component={CreateListing} />
      <Route exact path='/deleteListing/:id' component={DeleteListing} />

      {/* <Route path='/homepage' component={Craigslist} />
      <Route path='/logout' component={Logout} />
      
      
      <Route path='/createArticle/new' component={CreateListing} />
      
      <Route path = '/registration' component={Login} />
      <Route path = '/registration' component={Register}/>
      */}
    </div>
</BrowserRouter>, document.getElementById('root'));

