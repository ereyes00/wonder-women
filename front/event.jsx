import $ from 'jquery';

import './style/event.css';

const React = require('react');

const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', location: '', opening: "", closing: "", hours: "" , price: "", feauredArtist: "", description: "", streetAddress: '', city: "", state:'', zipcode: 0, type:'', images:[], lat: '', lng:'' 
    });
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/events/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      this.setState({ images: data.Images[0].url,title: data.title, location: data.location, opening: data.opening, closing: data.closing, hours: data.hours , price: data.price, featuredArtist: data.featuredArtist, description: data.description, streetAddress: data.streetAddress, city: data.city, state: data.state, zipCode:data.zipCode, type:data.type});
    })
    .then(()=>{
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.streetAddress +','+ this.state.city +','+ this.state.state + '&' + 'key=AIzaSyDcWNv7pwJQQuPEeMdAXALbn-xbRVd8yIo'
      })
      .done((data) => {
        console.log('info from map call', data)
        //console.log('lat', data.results[0].geometry.location.lat )
        this.setState({lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng})
      })
    }) 
  }, 
  initMap: function() {
    console.log('lat', this.state.lat )
    var location = {lat: this.state.lat, lng: this.state.long};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: location
    });
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  },
  render: function () {
    var mapStyle= {
      height: "400px",
      width: '100%'
    };
      return(
        <div>
           <div><h1 className="event">{this.state.title}</h1></div>
           <p><img src={this.state.images}/></p>
           <p>Location: {this.state.location}</p>
           
           <p>Address: {this.state.streetAddress}, {this.state.city},{this.state.state},{this.state.zipCode}</p>
           <p>Opening: {this.state.opening}</p>
           <p>Closing: {this.state.closing}</p>
           <p>Hours: {this.state.hours}</p>
           <p>Price: {this.state.price}</p>
           <p>Artist: {this.state.featuredArtist}</p>
           <p>Description: </p>
           <p>{this.state.description}</p>

           <div style={mapStyle} id="map">{this.initMap}</div>

           <button>Bookmark</button>
        </div>
      )
  }
});

module.exports = Event;

