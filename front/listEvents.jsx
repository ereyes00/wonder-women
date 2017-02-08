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