var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var Event = require('./event.jsx');
var ListEvents = require('./listEvents.jsx')
var Home = require('./home.jsx');
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';

var App = withRouter(React.createClass({
  render: function() {
    return(
      <div>
      <h1>ArtGal</h1>
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