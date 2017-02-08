import React from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import Event from './event.jsx';
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
        that.setState({today: data})
      }
    })  
  },
  // handleClick: function(){
  //   browserHistory.push('/events/' + this.state.today.id)
  // },
  render: function(){
    if (this.state.today){
      return(
        <div className="week">
          <div className = "today">
            <h2>Opening Today, {Date()}:</h2>
             <ul>
                {this.state.today.map((val) => {
                  return (
                    <p>
                      <img className="dayEvent" key={val.id} src={val.Images[0].url} />
                    </p>
                  )
                })}
             </ul>
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default TodayCarousel;