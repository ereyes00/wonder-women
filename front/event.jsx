import $ from 'jquery';
import './style/event.css';
import MapDisplay from './map'
const React = require('react');
import { browserHistory } from 'react-router';
import Popup from './lightBox'
const basicLightbox = require('basiclightbox');

 
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
      lng:'',
      userId: 0,
    });
  },
  // componentWillMount: function(){
  //   //debugger;
  //   if(!this.context.isUserLoggedin){
  //     browserHistory.push('/login')
  //   }
  // },
  componentDidMount: function () {
    $.ajax({
      url: '/api/event/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
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
  bookmark: function(){
    if(!this.context.isUserLoggedin){
      browserHistory.push('/login')
    } else {
      $.ajax({
        url: '/api/event/add/bookmark',
        method: 'POST',
        data: { userId: this.context.currentUser.id, eventId: this.props.params.id }
      })
      .done((data) => {
        //console.log('Event bookmarked');
        alert("Bookmark has been added!");
      })
    }
  }, 
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
              <h2>{this.state.opening} - {this.state.closing}</h2>

              <button 
                className="bookmark" 
                 onClick={this.bookmark}
               >Bookmark
              </button>

              <ul >
                <li><h2>{this.state.location}</h2></li>
                <li>{this.state.streetAddress}</li>
                <li>{this.state.city}, {this.state.state} {this.state.zipCode}</li>
              </ul> 

              <ul className="hours"><strong>Location Hours:</strong> </ul>
                  {this.state.hours.map((el,idx)=> {
                    if(el.closed){
                      return <li key={idx}> 
                        <b>{el.dayOfWeek}:</b> {el.closed}
                      </li>
                    } 
                     return <li key={idx}> 
                      <b>{el.dayOfWeek}:</b> {el.openTime} - {el.closeTime}
                     </li>
                  })}
   
              <p><strong>Price: </strong>{this.state.price}</p>

              <p><strong>Featured Artist(s):</strong> {this.state.featuredArtist}</p>

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

Event.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.boolean
}

export default Event;