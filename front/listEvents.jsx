import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';
import Event from './event.jsx';
import Carousel from 'nuka-carousel';
import './style/listEvents.css';

const WeekCarousel = React.createClass({
  getInitialState: function(){
    return{today: []}
    // , tomorrow: [], dayAfterTomorrow: [], weekend: []
  },
  componentDidMount: function(){
    $.ajax({
      url: '/api/events',
      type: 'GET'
    })
    .done((data) => {
      console.log(data)
      var today = new Date(Date());
      if(data.opening === today.toISOString().split('T')[0]){
        this.setState({today: today})
      }
    })
  },
  render: function(){
    if (this.state.events){
      return(
        <div className="week">
          <div className = "today">
            <h2>Opening Today:</h2>
            <Carousel slideWidth={0.20} cellSpacing={10}>
              {this.state.events.map(function(event){
                return(
                  <Link to = {'/events/' + event.id}>
                    <img key= {event.id} src={this.state.image} />
                  </Link>
                )
              })}
            </Carousel>
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default WeekCarousel;

// var ListEvents = React.createClass({
//   getInitialState: function() {
//     return ({events: []})
//   },
//   componentDidMount: function() {
//     $.ajax({
//       url: '/api/events',
//       type: 'GET'
//     })
//     .done((data) => {
//       this.setState({events: data});
//     })
//   },
//   ///onClick event for button ajax call to save to user's bookmarks here
//   render: function() {
//   if(this.state.events) {
//       return(
//         <center><div>
//         <h1>Opening Nights</h1>
//         <ul >
//           {this.state.events.map(function(event){
//             return (
//               <p key={event.id} className="event">
//               <Link to={'/events/' + event.id}>{event.title}</Link>
//               <br />
//               <br />
              
//               </p>

//               )})}
//           </ul>
//         </div></center>
//       )
//     } else {
//       return (<div>Loading...</div>)
//     }
//   }
// })

// module.exports = ListEvents;