import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event.jsx'
import TodayCarousel from './listEvents.jsx';
import Home from './home.jsx';
import Search from './search.jsx';
import SearchResults from './searchResults.jsx';
import About from './about.jsx';
import ContactUs from './contactUs.jsx';
import CreateEvent from './createEvent.jsx';
import CreateLocation from './createLocation.jsx';
import Login from './login.jsx';
import Signup from './signUp.jsx';
import Account from './account.jsx';
import Footer from './footer.jsx';
import NukaCarousel from './nuka-carousel.jsx'
import {withRouter, Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import './style/home.css';
import $ from 'jquery';

// make sure Route paths do not duplicate those on the back end '/api/user' and '/api/event'

let App = React.createClass({
  getInitialState: function(){
    return ({
      email: '', currentUser: 
        {email: '', firstName: '', lastName: '', id: 0},
        isUserLoggedin:false
    })
  },
  componentDidMount: function(){
    $.ajax({
      method: 'GET',
      url: '/auth'
    })
    .done((email)=> {
      console.log('email', email)
      if(email){
        console.log(email + 'is logged in.')
        this.setState({email: email})
      } else {
        console.log("No one is logged in.")
      }
    })
  },
  onUserSignUp: function(userData){
    this.setState({currentUser: userData, isUserLoggedin:true})
  },
  getChildContext: function() {
    return {currentUser: this.state.currentUser, 
      onSignUp: this.onUserSignUp, isUserLoggedin: this.state.isUserLoggedin};
  },
  render: function () {
    return (
      <div>
        <div className="logo-class">
          <Link to='/'><img className="logo" src={require('./style/images/artgal-logo.png')} /></Link>
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to ='events'>Opening This Month</Link>
              <Link to='CreateEvent'>Create Event</Link>
              <Link to='CreateLocation'>Create Location</Link>

              {this.state.email ?
                <Link to='Account'>Account</Link> :
              <Link to='Login'>Login</Link>
              }

            </div>
          </div>
        </nav>

        <h2 className="homeTitle">Find your next art escape.</h2>

        <hr className="hr"/>
        <br /> <br />
 

        {this.props.children}


        <br />
        <Footer />
      </div>
    );
  }
});

App.childContextTypes = {
  currentUser: React.PropTypes.object,
  onSignUp: React.PropTypes.func,
  isUserLoggedin: React.PropTypes.boolean
}
App = withRouter(App)

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='results/:type' component={SearchResults}></Route>
      <Route path='login' component={Login}></Route>
      <Route path='signup' component={Signup}></Route>
      <Route path='account' component={Account}></Route>
      <Route path="contact" component={ContactUs}></Route>
      <Route path='createevent' component={CreateEvent}></Route>
      <Route path='createlocation' component={CreateLocation}></Route>
      <Route path='events/:id' component={Event}></Route>
      <Route path='events' component={TodayCarousel}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
