import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateEvent = React.createClass({
  getInitialState: function () {
    return { title: '',
             featuredArtist: '',
             price: '',
             description: '',
             opening: '',
             closing: '',
             image: '' 
    }
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
    } 
    else if (input === 'featuredArtist') {
      this.setState({ featuredArtist: event.target.value });
    }  
    else if (input === 'price') {
      this.setState({ price: event.target.value });
    } 
    else if (input === 'description') {
      this.setState({ description: event.target.value });
    } 
    else if (input === 'opening') {
      this.setState({ opening: event.target.value });
    } 
    else if (input === 'closing') {
      this.setState({ closing: event.target.value });
    } 
    else if (input === 'image') {
      this.setState({ image: event.target.value });
    }
  },
  handleClick: function (event) {
    console.log(event.target);
  },
  render: function () {
    return (
      <center>
        <div className="createEventForm">
          
          <h2 className='headerCreate'>Create An Event</h2>
          
          <form onSubmit={this.addEvent} className='createEvent'>
            <br /><br />
            Event Title:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'title')} 
            />
            <br /><br />

            Featured Artist:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'featuredArtist')} 
            />
            <br /><br />

            Event Image Link:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'image')} 
            />
            <br /><br />

            Price:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'price')} 
            />
            <br /><br />

            Description:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'description')} 
            />
            <br /><br />
            
            <div>
              Opening Day:
              <br />
              <input type="date"
                className="cal"
                onChange={this.handleChange.bind(this, 'opening')} 
              />
            </div>
            <br /><br />
            <div>
              Closing Day:
              <br />
              <input type="date"
                className="cal"
                onChange={this.handleChange.bind(this, 'closing')} 
              />
            </div>
            <br /><br />

            <input type="submit"
            className="button"
            id="submit"
            value="Submit" />

          </form>
        </div>
      </center>
    );
  }
});

export default CreateEvent;
