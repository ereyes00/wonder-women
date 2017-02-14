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
import NukaCarousel from './nuka-carousel.jsx'
import {withRouter, Router, Route, Link, browserHistory, IndexRoute} from 'react-router';
import './style/home.css';

// make sure Route paths do not duplicate those on the back end '/api/user' and '/api/event'

const App = withRouter(React.createClass({
  render: function () {
    return (
      <div>
        <div className="logo-class">
          <Link to='/'><img className="logo" src={require('./style/images/artgal-logo.png')} /></Link>
        </div>

        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="nav navbar-nav">
              <Link to ='events'>Opening This Week</Link>
              <Link to='CreateEvent'>Create Event</Link>
              <Link to='CreateLocation'>Create Location</Link>
              <Link to='Login'>Login</Link>
              <Link to='Signup'>Sign Up</Link>
            </div>
          </div>
        </nav>

        <h2 className="homeTitle">Find your next art escape.</h2>

        <hr className="hr"/>
        <br /> <br />

        {this.props.children}

        <br />
        <hr className="footerHr" />

        <center><footer>
          <p><b>Art Gal</b></p>
            <p>
              <a href="https://github.com/ereyes00/wonder-women" target="_blank">Github</a> 
              <a href="https://www.linkedin.com/in/esmeralda-reyes" target="_blank">Esmeralda</a>
              <a href="https://www.linkedin.com/in/salinafu" target="_blank">Salina</a>
              <a href="https://www.linkedin.com/in/shazia-anjum" target="_blank">Shazia</a>
              <a href="https://www.linkedin.com/in/vanessa-montoya-webdev" target="_blank">Vanessa</a>
            </p>
          <p>© 2017 Team Wonder Women</p>
        </footer></center>
      </div>
    );
  }
}));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='results/:type' component={SearchResults}></Route>
      <Route path='login' component={Login}></Route>
      <Route path='signup' component={Signup}></Route>
      <Route path='account' component={Account}></Route>
      <Route path='createevent' component={CreateEvent}></Route>
      <Route path='createlocation' component={CreateLocation}></Route>
      <Route path='events/:id' component={Event}></Route>
      <Route path='events' component={TodayCarousel}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
