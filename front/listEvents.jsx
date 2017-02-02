var React = require('react');
import $ from 'jquery';
import {Link} from 'react-router';
var Event = require('./event.jsx');
import './style/listEvents.css';

var ListEvents = React.createClass({
  getInitialState: function() {
    return ({events: []})
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/events',
      type: 'GET'
    })
    .done((data) => {
      this.setState({events: data});
    })
  },
  ///onClick event for button ajax call to save to user's bookmarks here
  render: function() {
  if(this.state.events) {
      return(
        <center><div>
        <h1>Events</h1>
        <ul >
          {this.state.events.map(function(event){
            return (
              <p key={event.id} className="event">
              <Link to={'/events/' + event.id}>{event.title}</Link>
              <br />
              <button>Save</button>
              </p>

              )})}
          </ul>
        </div></center>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

module.exports = ListEvents;