import $ from 'jquery';
import './style/event.css';

const React = require('react');

const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', location: '', opening: "", closing: "", hours: "" , price: "", feauredArtist: "", description: "", streetAddress: '', city: "", zipcode: 0, type:''
    });
  },
  componentDidMount: function () {
      $.ajax({
      url: '/api/events/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      //console.log('this is the response from the get call on single',data)
      this.setState({ title: data.title, location: data.location, opening: data.opening, closing: data.closing, hours: data.hours , price: data.price, featuredArtist: data.featuredArtist, description: data.description, streetAddress: data.streetAddress, city: data.city, zipCode:data.zipCode, type:data.type});
    })
  },  
  render: function () {
      return(
        <div>
           <div><h1 className="event">{this.state.title}</h1></div>
           <p>Location: {this.state.location}</p>
           
           <p>Adress: {this.state.streetAddress}, {this.state.city}, {this.state.zipCode}</p>
           <p>Opening: {this.state.opening}</p>
           <p>Closing: {this.state.closing}</p>
           <p>Hours: {this.state.hours}</p>
           <p>Price: {this.state.price}</p>
           <p>Artist: {this.state.featuredArtist}</p>
           <p>Description: </p>
           <p>{this.state.description}</p>
        </div>
      )
  }
});

module.exports = Event;
