var React = require('react');
var $ = require('jquery');
import {Link} from 'react-router';
var Event = require('./event.jsx');

var ListEvents = React.createClass({
  getInitialState: function() {
    return ({events: []})
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/events', //might be different?
      type: 'GET'
    })
    .done((data) => {
      this.setState({events: data});
    })
  },
  render: function() {
  if(this.state.events) {
      return(
        <div>
        <ul>
          {this.state.events.map(function(event){
            return (
              <li key={event.id}>
              <Link to={'/events/' + event.id}> {event.title}</Link>
              </li>
              )})}
          </ul>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

module.exports = ListEvents;