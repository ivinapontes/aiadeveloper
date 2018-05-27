import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Listings from './components/homepage';
import Start from './components/start';
import Alllisting from './components/Alllisting';
import Request from './components/Request';
import adminHomepage from './components/adminHomepage';
<<<<<<< HEAD
import adminLogin from './components/adminLogin';
import Allrequests from './components/Allrequests';
=======
import Login from './components/adminLogin';
>>>>>>> 3a774b157d9e907391e6b1e799a4bafd3d9ec294
import App from './App';
import ShowOne from './components/showOne';
import AdminHomepage from './components/adminHomepage';
import ShowAllListing from './components/adminShowAllListing';
import UpdateListing from './components/updateListing';


ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
<<<<<<< HEAD
      <Route  path='/homepage' component={Listings} />
      <Route  path='/Request' component={Request} />
      <Route  path='/adminHomepage' component={adminHomepage} />
      <Route  path='/adminLogin' component={adminLogin} />
      <Route  path='/Allrequests' component={Allrequests} />
      <Route  path='/Alllisting' component={Alllisting} />
=======
      <Route exact path='/homepage' component={Listings} />

      <Route exact path='/Request' component={Request} />
      <Route exact path='/adminHomepage' component={adminHomepage} />
      <Route exact path='/adminListing' component={ShowAllListing} />
      <Route exact path='/login' component={Login} />
      <Route path='/editListing/:id' component={UpdateListing} />
      <Route path='/showOne/:id' component={ShowOne} />

>>>>>>> 3a774b157d9e907391e6b1e799a4bafd3d9ec294
      {/* <Route path='/homepage' component={Craigslist} />
      <Route path='/logout' component={Logout} />
      
      <Route path='/deleteOne/:id' component={DeleteOne} />
      <Route path='/createArticle/new' component={CreateListing} />
      
      <Route path = '/registration' component={Login} />
      <Route path = '/registration' component={Register}/>
      */}
    </div>
</BrowserRouter>, document.getElementById('root'));

