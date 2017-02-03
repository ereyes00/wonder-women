import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter, Router, Route, Link, browserHistory } from 'react-router';
import Event from './event';
import ListEvents from './listEvents';
import Home from './home';
import CreateEvent from './createEvent';
// import './style/home.css';

const App = withRouter(React.createClass({
  render: function () {
    return (
      <div>
        <h1>Art Gal</h1>
        <Home />
        {this.props.children}
      </div>
    );
  }
}));

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="createevent" component={CreateEvent}></Route>
    <Route path="events/:id" component={Event}></Route>
    <Route path="events" component={ListEvents}></Route>
  </Router>,
  document.getElementById('root')
);
