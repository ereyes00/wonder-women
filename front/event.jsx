import $ from 'jquery';
import './style/event.css';
import MapDisplay from './map'
const React = require('react');

const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', location: '', opening: "", closing: "", hours: "" , price: "", feauredArtist: "", description: "", streetAddress: '', city: "", state:'', zipcode: 0, type:'', images:[], lat: '', lng:'' 
    });
  },
  componentDidMount: function () {
    // this.initMap()
    $.ajax({
      url: '/api/events/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      this.setState({ images: data.Images[0].url,title: data.title, location: data.location, opening: data.opening, closing: data.closing, hours: data.hours , price: data.price, featuredArtist: data.featuredArtist, description: data.description, streetAddress: data.streetAddress, city: data.city, state: data.state, zipCode:data.zipCode, type:data.type});
    })
  },
  //   .then(()=>{
  //     $.ajax({
  //       url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.state.streetAddress +','+ this.state.city +','+ this.state.state + '&' + 'key=AIzaSyDcWNv7pwJQQuPEeMdAXALbn-xbRVd8yIo'
  //     })
  //     .done((data) => {
  //       console.log('info from map call all data', data)
        
  //       console.log('lat from ajax call', data.results[0].geometry.location.lat )
  //       this.initMap(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng)
  //       this.setState({lat: data.results[0].geometry.location.lat, lng: data.results[0].geometry.location.lng})
  //     })
  //   }) 
  // }, 
  // initMap: function(lat,lng) {
  //   console.log('lat from init func', this.state.lat )
  //   //var mapDOMNode = this.refs.map;
  //   var mapOptions = {
  //     center:{lat: lat, lng: lng},
  //     zoom: 4
  //   };
  //   console.log('mapOptions',mapOptions)

  //   var map = new google.maps.Map(document.getElementById('mapDisplay'), mapOptions);

  //   console.log('map',map)

  //   var marker = new google.maps.Marker({
  //     position: mapOptions.center,
  //     map: map
  //   });
  //   console.log('marker',marker)
  //   // return Object.assign({}, state, {map, marker});
  // },
  render: function () {
    //this.initMap();
    // var mapStyle= {
    //   height: "400px",
    //   width: '400px'
    // };
      return(
        <div>
          <div className="title">
            <h1 className="event">{this.state.title}</h1>
          </div>

          <button className="bookmark">Bookmark</button>

           <div className="EventInfo">
             <h3>{this.state.location}</h3> 
             
             <p>{this.state.streetAddress}, {this.state.city}, {this.state.state}, {this.state.zipCode}</p>

             <p><b>Opening:</b> {this.state.opening} | <b>  Closing:</b>{this.state.closing}</p>

             <p><strong>Hours:</strong> {this.state.hours}</p>

             <p><strong>Price: </strong>{this.state.price}</p>

             <p><strong>Artist:</strong> {this.state.featuredArtist}</p>

             <p><strong>Description: </strong></p>

             <p>{this.state.description}</p>
           </div>
         {/*<div style={mapStyle} id="mapDisplay"></div>*/}

           <MapDisplay
            streetAddress={this.state.streetAddress} 
            city={this.state.city}  
            state={this.state.state}/>


          <div className="hero">
           <img className="heroImg" src={this.state.images}/>
          </div>

        
        </div>
      )
  }
});

export default Event;

