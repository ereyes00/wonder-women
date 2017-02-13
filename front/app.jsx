import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event.jsx'
import TodayCarousel from './listEvents.jsx';
import Home from './home.jsx';
import Search from './search.jsx';
import About from './about.jsx';
import ContactUs from './contactUs.jsx';
import CreateEvent from './createEvent.jsx';
import Login from './login.jsx';
import Signup from './signUp.jsx';
import Account from './account.jsx';
import NukaCarousel from './nuka-carousel.jsx'
import {withRouter, Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import './style/home.css';

// make sure Route paths do not duplicate those on the back end '/api/user' and '/api/event'

const App = withRouter(React.createClass({
  render: function () {
    return (
      <div>
        <div className="logo-class">
          <Link to='/'><img className="logo" src={require('./style/images/artgal-logo.jpg')} /></Link>
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to ='events'>Opening This Week</Link>
              <Link to='CreateEvent'>Create Event</Link>
              <Link to='Login'>Login</Link>
              <Link to='Signup'>Sign Up</Link>
            </div>
          </div>
        </nav>

        <hr className="hr"/>

        <br />

        {this.props.children}
      </div>
    );
  }
}));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='login' component={Login}></Route>
      <Route path='signup' component={Signup}></Route>
      <Route path='account' component={Account}></Route>
      <Route path='createevent' component={CreateEvent}></Route>
      <Route path='events/:id' component={Event}></Route>
      <Route path='events' component={TodayCarousel}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
