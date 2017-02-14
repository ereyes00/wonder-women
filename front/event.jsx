import $ from 'jquery';
import './style/event.css';
import MapDisplay from './map'
const React = require('react');
 
const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', 
      opening: "", 
      closing: "", 
      location:'',
      hours:'',
      price: "", 
      featuredArtist: "", 
      description: "",  
      streetAddress: '', 
      city: "", 
      state:'', 
      zipCode: 0, 
      type:'', 
      images:[], 
      lat: '', 
      lng:'' 
    });
  },
  componentDidMount: function () {
    $.ajax({
      url: '/api/event/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      console.log('data: ', data)
      this.setState({ 
        title: data.title, 
        opening: data.opening, 
        closing: data.closing, 
        location: data.Location.location,
        hours: data.Location.LocationHours, 
        price: data.price, 
        featuredArtist: data.featuredArtist, 
        description: data.description, 
        streetAddress: data.Location.streetAddress, 
        city: data.Location.city, 
        state: data.Location.state, 
        zipCode:data.Location.zipCode, 
        type:data.Location.type,
        images: data.Images[0].url
      });
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
    if(!this.state.hours)
      return null
      return(
        <div>
          <div className="EventInfo">

              <div className="hero">
                 <img className="heroImg" src={this.state.images}/>
              </div>
              
              <h1 className="event">{this.state.title}</h1>

              <button 
                className="bookmark" 
                // onClick={this.bookmark}
               >Bookmark
              </button>

              <h3>Location: {this.state.location}</h3> 
               
              <p>Address: {this.state.streetAddress}, {this.state.city}, {this.state.state}, {this.state.zipCode}</p>

              <p><b>Opening:</b> {this.state.opening} | <b>  Closing:</b>{this.state.closing}</p>

              <p><strong>Location Hours:</strong> </p>
                  {this.state.hours.map((el,idx)=> {
                    if(el.closed){
                      return <div key={idx}> 
                        <p>{el.dayOfWeek}: {el.closed}</p>
                      </div>
                    } 
                     return <div key={idx}> 
                      <p>{el.dayOfWeek}: {el.openTime}-{el.closeTime}</p>
                     </div>
                  })}
   
              <p><strong>Price: </strong>{this.state.price}</p>

              <p><strong>Artist:</strong> {this.state.featuredArtist}</p>

              <p><strong>Description: </strong></p>

              <p>{this.state.description}</p>
          </div>

          <div>
             <MapDisplay
                eventId ={this.state.id}
                locationId={this.state.locationId}
                streetAddress={this.state.streetAddress} 
                city={this.state.city}  
                state={this.state.state}
                zipCode={this.state.zipCode}
                location={this.state.location}
              />
          </div>
        </div>
      )
  }
});

export default Event;