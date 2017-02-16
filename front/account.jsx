import React from 'react';
import $ from 'jquery';
import CreateEvent from './createEvent';
import {Link, browserHistory} from 'react-router';

const Account = React.createClass({
  getInitialState: function () {
    return { createdEvents: null, firstName: '', lastName: '', email: '', bookmarks: null, id: 0 };
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/user/id',
      type: 'GET',
      data: this.state,
    })
    .then((user) => {
      this.setState({ firstName: user.firstName, lastName: user.lastName, email: user.email, id: user.id })

      $.ajax({
        url: '/api/user/' + user.id + '/createdEvents',
        type: 'GET'
      })
      .then((events) => {
        console.log("before setState")
        console.log(events);
        this.setState({ createdEvents: events });
        console.log("after setState")
      })
      // .then((bookmarks) => {
      //   console.log(bookmarks);
      //   this.setState({ bookmarks: bookmarks });
      // })
    })
  },
  userLogout: function(event){
    event.preventDefault()
    $.ajax({
        url: '/logout',
        type: 'GET'
    })
    .done(() => {
      console.log("You have logged out.");
      browserHistory.push('/')
    })
  },
  userCreatesEvent: function(event){
    event.preventDefault()
    $.ajax({
      url: '/api/user/createEvent',
      type: 'POST'
    })
    .done(() => {
      console.log("Event created.")
      browserHistory.push('/account')
    })
  },
  render: function () {
    return (
      <div>
        <h2 className="title">Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>


        <h3>Your Account Info:</h3>
        <br /><br />

        <p>Name: {this.state.firstName}{this.state.lastName}</p>
        <p>Email: {this.state.email}</p>

        <button onClick={this.userLogout}>Logout</button>

        <br /><br />

        <h3>Your Bookmarks:</h3>
        <ul>
          {!this.state.bookmarks ? "You do not have any bookmarks." : this.state.bookmarks.map((val, idx) => {

            let eventTitle = val.title

            return (
              <li key={idx}>{eventTitle}</li>
            )
          })}
        </ul>

        <h3>Your Created Events:</h3>
        <ul>
          {!this.state.createdEvents ? "You have not created any events." : this.state.createdEvents.map((val, idx) => {
            return(<Link to={'/events/' + val.id}><li key={idx}>{val.title}</li></Link>)

          })}
        </ul>

        <br /><br />

        <a href={"user/" + this.state.id + "/createevent" }><button className="button">
         Create An Event</button>
        </a>

      </div>
    );
  }
});

 export default Account;
