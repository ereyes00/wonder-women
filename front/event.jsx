import $ from 'jquery';
import './style/event.css';
import MapDisplay from './map'
const React = require('react');

const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', location: '', opening: "", closing: "", hours: "" , price: "", feauredArtist: "", description: "", streetAddress: '', city: "", state:'', zipCode: 0, type:'', images:[], lat: '', lng:'' 
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
  },
  // bookmark: function(){
  //   $.ajax({
  //     url: '/api/' + this.props.userID + '/bookmarks',
  //     type: 'POST',
  //     data: this.state
  //   })
  // }, 
  render: function () {
      return(
        <div>
          <div className="title">
            <h1 className="event">{this.state.title}</h1>
          </div>

          <button 
          className="bookmark" 
          // onClick={this.bookmark}
          >Bookmark</button>

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

          <div className="hero">
           <img className="heroImg" src={this.state.images}/>
          </div>


           <div>
             <MapDisplay
              streetAddress={this.state.streetAddress} 
              city={this.state.city}  
              state={this.state.state}
              zipCode={this.state.zipCode}
              location={this.state.location}/>
           </div>

        </div>
      )
  }
});

export default Event;

