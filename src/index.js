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
import HousesWalet from './components/housesWalet';
import NewHouse from './components/newHouse';
import ShowOneHouse from './components/showOneHouse';
import UpdateHouse from './components/updateHouse';
import AddCoinsHouse from './components/addCoinsHouse';
import CreateListing from './components/insertListing';
import ShowOneAdmin from './components/showOneAdmin';
import DeleteListing from './components/deleteListing';
import Nav from './components/Nav';
import Logout from './components/logout';


ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route  path='/Request' component={Request} />
      <Route  path='/adminLogin' component={adminLogin} />
      <Route  path='/Allrequests' component={Allrequests} />
      <Route  path='/Alllisting' component={Alllisting} />
      <Route exact path='/homepage' component={Listings} />

      <Route exact path='/adminHomepage' component={adminHomepage} />
      <Route exact path='/adminListing' component={ShowAllListing} />
      {/* <Route exact path='/login' component={Login} /> */}
      <Route path='/editListing/:id' component={UpdateListing} />
      <Route path='/showOne/:id' component={ShowOne} />
      <Route path='/showOneHouse/:id' component={ShowOneHouse} />
      <Route path ='/showAllRequests/' component={Allrequests}/>
      <Route path='/updateHouse/:id' component={UpdateHouse} />
      <Route path='/addCoinsHouse/:id' component={AddCoinsHouse} />
      <Route path ='/housesWalet/' component={HousesWalet}/>
      <Route path ='/newHouse/' component={NewHouse}/>
      <Route path ='/Nav/' component={Nav}/>
      <Route path ='/logout' component={Logout}/>

      <Route exact path = '/showOneAdmin/:id'component={ShowOneAdmin}/>
      <Route path='/createListing' component={CreateListing} />
      <Route exact path='/deleteListing/:id' component={DeleteListing} />


    </div>
</BrowserRouter>, document.getElementById('root'));

