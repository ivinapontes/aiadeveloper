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
      <Route path='/showOneHouse/:id' component={ShowOneHouse} />
      <Route path ='/showAllRequests/' component={Allrequests}/>
      <Route path='/updateHouse/:id' component={UpdateHouse} />
      <Route path='/addCoinsHouse/:id' component={AddCoinsHouse} />
      <Route path ='/housesWalet/' component={HousesWalet}/>
      <Route path ='/newHouse/' component={NewHouse}/>


      {/* <Route path='/homepage' component={Craigslist} />
      <Route path='/logout' component={Logout} />
      
      <Route path='/deleteOne/:id' component={DeleteOne} />
      <Route path='/createArticle/new' component={CreateListing} />
      
      <Route path = '/registration' component={Login} />
      <Route path = '/registration' component={Register}/>
      */}
    </div>
</BrowserRouter>, document.getElementById('root'));

