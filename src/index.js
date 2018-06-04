import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
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
import Dictaphone from './components/Dictaphone';
import Footer from './components/footer';
import axios from "axios";
axios.defaults.withCredentials = true;

class ProtectedRouteForUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: true
    };
  }
  componentWillMount() {
    axios
      .get("/api/isLogin")
      .then(response => {
        this.setState({ authenticated: true });
      })
      .catch(err => {
        this.setState({ authenticated: false });
      });
  }
  render() {
    const { component: Component, ...props } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          this.state.authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    );
  }
}

ReactDOM.render(
<BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route  path='/Request' component={Request} />
      <Route  path='/adminLogin' component={adminLogin} />
      <ProtectedRouteForUser  path='/Allrequests' component={Allrequests} />
      <Route  path='/Alllisting' component={Alllisting} />
      <Route exact path='/homepage' component={Listings} />

      <ProtectedRouteForUser exact path='/adminHomepage' component={adminHomepage} />
      <ProtectedRouteForUser exact path='/adminListing' component={ShowAllListing} />
      {/* <Route exact path='/login' component={Login} /> */}
      <ProtectedRouteForUser path='/editListing/:id' component={UpdateListing} />
      <Route path='/showOne/:id' component={ShowOne} />
      <Route path='/showOneHouse/:id' component={ShowOneHouse} />
      <ProtectedRouteForUser path ='/showAllRequests/' component={Allrequests}/>
      <ProtectedRouteForUser path='/updateHouse/:id' component={UpdateHouse} />
      <ProtectedRouteForUser path='/addCoinsHouse/:id' component={AddCoinsHouse} />
      <ProtectedRouteForUser path ='/housesWalet/' component={HousesWalet}/>
      <ProtectedRouteForUser path ='/newHouse/' component={NewHouse}/>
      <Route path ='/Nav/' component={Nav}/>
      <Route path ='/logout' component={Logout}/>
      <Route path ='/dictaphone' component={Dictaphone}/>
      <Route path ='/footer' component={Footer}/>

      <ProtectedRouteForUser exact path = '/showOneAdmin/:id'component={ShowOneAdmin}/>
      <ProtectedRouteForUser path='/createListing' component={CreateListing} />
      <ProtectedRouteForUser exact path='/deleteListing/:id' component={DeleteListing} />


    </div>
</BrowserRouter>, document.getElementById('root'));

