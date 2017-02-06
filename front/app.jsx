import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import Event from './event';
import ListEvents from './listEvents';
import Home from './home';
import NavBar from './navbar';
import Search from './search';
import About from './about';
import ContactUs from './contactUs';
import CreateEvent from './createEvent';
import Login from './login';
import Signup from './signUp';
import Account from './account';
import NukaCarousel from './nuka-carousel';
import './style/home.css';

const App = withRouter(React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/"><img className='logo' src={require('./style/images/ArtGalLogo.png')} alt="Logo" /></Link>
        <br />
        <NavBar />
        <Home />
        {this.props.children}
      </div>
    );
  }
}));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="login" component={Login}></Route>
      <Route path="signup" component={Signup}></Route>
      <Route path="account" component={Account}></Route>
      <Route path="createevent" component={CreateEvent}></Route>
      <Route path="events/:id" component={Event}></Route>
      <Route path="events" component={ListEvents}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
