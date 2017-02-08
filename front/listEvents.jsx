import React from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import Event from './event.jsx';
import Carousel from 'nuka-carousel';
import './style/listEvents.css';

const TodayCarousel = React.createClass({
  getInitialState: function(){
    return({today: null})
    // , tomorrow: [], dayAfterTomorrow: [], weekend: []
  },
  componentDidMount: function(){
    var that = this
    $.ajax({
      url: '/api/events/date/opening',
      type: 'GET',
      success: function(data) {
        console.log('data', data)
        that.setState({today: data})
      }
    })  
  },
  handleClick: function(){
    browserHistory.push('/events/' + this.state.today.id)
  },
  render: function(){
    console.log(this.state)
    if (this.state.today){
      var images = []
      this.state.today.forEach((val) => {                
        images.push( 
          <img key={val.id} src={val.Images[0].url} onClick={this.handleClick}/>
        )
      })
      return(
        <div className="week">
          <div className = "today">
            <h2>Opening Today:</h2>
            <Carousel slideWidth={0.20} cellSpacing={10}>
             {images}
            </Carousel>
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default TodayCarousel;

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