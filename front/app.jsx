import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event.jsx'
import ListEvents from './listEvents.jsx';
import Home from './home.jsx';
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
//import './style/home.css';

var App = withRouter(React.createClass({
  render: function() {
    return(
      <div>
      <h1>Art Gal</h1>
        <Home />
        {this.props.children}
      </div>
    )
  }
}))

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='event' component={Event}></Route>
    <Route path='events' component={ListEvents}></Route>
  </Router>,
  document.getElementById('root')
)