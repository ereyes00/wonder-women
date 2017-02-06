import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateEvent = React.createClass({
  getInitialState: function () {
    return { title: '', featuredArtist: '', location: '', type: 'Museum', streetAddress: '', city: '', state: '', zipCode: 0, price: '', description: '', opening: '', closing: '', hours: '', image: '' };
  },
  addEvent: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/events',
      method: 'POST',
      data: this.state,
    })
    .done((data) => {
      console.log('Event has been created.');
      browserHistory.push('/account');
      // after submitting new event, user will be brought back to their acct page.
    });
  },
  handleChange: function (input, event) {
    if (input === 'title') {
      this.setState({ title: event.target.value });
    } else if (input === 'location') {
      this.setState({ location: event.target.value });
    } else if (input === 'featuredArtist') {
      this.setState({ featuredArtist: event.target.value });
    } else if (input === 'streetAddress') {
      this.setState({ streetAddress: event.target.value });
    } else if (input === 'city') {
      this.setState({ city: event.target.value });
    } else if (input === 'state'){
      this.setState({ state: event.target.value });
    } else if (input === 'zipCode') {
      this.setState({ zipCode: event.target.value });
    } else if (input === 'price') {
      this.setState({ price: event.target.value });
    } else if (input === 'description') {
      this.setState({ description: event.target.value });
    } else if (input === 'opening') {
      this.setState({ opening: event.target.value });
    } else if (input === 'closing') {
      this.setState({ closing: event.target.value });
    } else if (input === 'image') {
      this.setState({ image: event.target.value });
    }
  },
  updateType: function (event) {
    this.setState({ type: event.target.value });
  },
  updateHours: function (event) {
    this.setState({ hours: event.target.value });
  },
  render: function () {
    return (
      <center><div>
        <h2>Create An Event</h2>

        <form onSubmit={this.addEvent}>
        Event Title:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'title')} />

          <br /><br />

        Featured Artist:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'featuredArtist')} />

          <br /><br />

        Event Location:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'location')} />

          <br /><br />

        Event Image Link:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'image')} />

          <br /><br />

          <select value={this.state.type} onChange={this.updateType}>
            <option value="Museum">Museum</option>
            <option value="Gallery">Gallery</option>
            <option value="School">School</option>
          </select>

          <br /><br />

        Address:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'streetAddress')} />

          <br /><br />

        City:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'city')} />

          <br /><br />

          State:
          <br />
            <input type="text"
              className="input"
              onChange={this.handleChange.bind(this, 'state')} />

          <br /><br />

        Zip Code:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'zipCode')} />

          <br /><br />

        Price:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'price')} />

          <br /><br />

        Description:
        <br />
          <input type="text"
            className="input"
            onChange={this.handleChange.bind(this, 'description')} />

          <br /><br />

          <div>
        Opening Day:
        <br />
            <input type="date"
              className="cal"
              onChange={this.handleChange.bind(this, 'opening')} />
          </div>

          <br /><br />

          <div>
        Closing Day:
        <br />
            <input type="date"
              className="cal"
              onChange={this.handleChange.bind(this, 'closing')} />
          </div>

          <br /><br />

        Hours:
        <br />
          <input type="text"
            className="input"
            placeholder="Monday-Friday 9:45AM - 5:45PM | Saturday-Sunday 11:45AM - 5:45PM"
            onChange={this.updateHours} />

          <br /> <br />

          <input type="submit"
            className="button"
            id="submit"
            value="Submit" />

        </form>
      </div></center>
    );
  }
});

export default CreateEvent;

// <div value={this.state.hours}>

//          // <div >
//          //  <input type="checkbox"
          //    value="Monday"
          //    onClick={this.handleClick.bind(this, "monday")} />Monday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Tuesday"
          //    onClick={this.handleClick.bind(this, "tuesday")} />Tuesday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Wednesday"
          //    onClick={this.handleClick.bind(this, "wednesday")} />Wednesday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Thursday"
          //    onClick={this.handleClick.bind(this, "thursday")} />Thursday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Friday"
          //    onClick={this.handleClick.bind(this, "friday")} />Friday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Saturday"
          //    onClick={this.handleClick.bind(this, "saturday")} />Saturday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>

          //  <br /><br />

          //  <div>
          //    <input type="checkbox"
          //    value="Sunday"
          //    onClick={this.handleClick.bind(this, "sunday")} />Sunday
          //    <br />
          //    Hours:
          //    <input type="text" /> to <input type="text"/>
          //  </div>
          //  <br /><br />

          // </div>
