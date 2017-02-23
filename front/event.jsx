import $ from 'jquery';
import './style/event.css';
import MapDisplay from './map'
const React = require('react');
import { browserHistory } from 'react-router';
var moment = require('moment');


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
      //console.log('opening',data.opening.split('', 10).join(''))
      this.setState({ 
        title: data.title, 
        opening: (moment(data.opening.split('', 10).join(''))._d).toString().split('', 15).join(''), 
        closing:(moment(data.closing.split('', 10).join(''))._d).toString().split('', 15).join('') , 
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
      //console.log('opening', (moment(this.state.opening)._d).toString().split('', 15).join(''))
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

        let bookmarkButton = document.getElementsByClassName("bookmark")[0];

        if(bookmarkButton.innerHTML === "Bookmark"){
          bookmarkButton.innerHTML = "Bookmarked!";
          bookmarkButton.className = "bookmarked"
        }
      })
    }
  },
  render: function () {
    var Style= {
      listStyle: 'none'
    };
    if(!this.state.hours)
      return null
      return(
        <div>
          {/*Hero Div is only holding the event image.*/}
          <div className="hero">
            <img className="heroImg" width="475" alt={this.state.title} src={this.state.images}/>
          </div>
               
          {/*EventDetails Div holds all details except map.*/}    
          <div className = "EventDetails">      
            <h1 className="event">{this.state.title}</h1>
            <h2>Opening: {this.state.opening} - Closing: {this.state.closing}</h2>

            <button 
              className="bookmark" 
              onClick={this.bookmark}>Bookmark
            </button>

              <h2>{this.state.location}</h2>
              {this.state.streetAddress}<br />
              {this.state.city}, {this.state.state} {this.state.zipCode}

              <br /><br /><br />
              <strong>Location Hours:</strong>
              <br /><br />
              <ul className="hours" style={Style}> </ul>
                {this.state.hours.map((el,idx)=> {
                  if(el.closed){
                    return <li key={idx} style={Style}> 
                            <b>{el.dayOfWeek}:</b> {el.closed}
                          </li>
                  } 
                    return <li key={idx} style={Style}> 
                            <b>{el.dayOfWeek}:</b> {el.openTime} - {el.closeTime}
                          </li>
                  })}
   
            <p><strong>Price: </strong>{this.state.price}</p>
            <p><strong>Featured Artist(s):</strong> {this.state.featuredArtist}</p>
            <p>{this.state.description}</p>
          </div>

 
          <div >

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