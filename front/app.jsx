var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var OneListing = require('./OneListing.jsx');
var Home = require('./home.jsx');
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';

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
    <Route path='OneListing' component={OneListing}></Route>
  </Router>,
  document.getElementById('root')
)