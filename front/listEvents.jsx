import React from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import Event from './event.jsx';
import './style/listEvents.css';
var moment = require('moment');

const TodayCarousel = React.createClass({
  getInitialState: function(){
    return({eventMonth: null})
    // , tomorrow: [], dayAfterTomorrow: [], weekend: []
  },
  componentDidMount: function(){
    var that = this
    $.ajax({
      url: '/api/event/date/opening',
      type: 'GET',
      success: function(data) {
        that.setState({eventMonth: data})
      }
    })  
  },
  render: function(){
    if (this.state.eventMonth){
      console.log(this.state.eventMonth)
      return(
        <div className="week">
          <div className = "eventMonth">
            <h2 className="openingMonth">
            {moment().format('MMMM YYYY')} Openings
            </h2>

            <br /><br />
                {this.state.eventMonth.map((val) => {
                  return (
                    <div className="eventResult">               
                      <div key={val.id} className="imgResult">  
                        <ul>           
                          <Link to={'/events/' + val.id}><img className="imgGrid" src={val.Images[0].url} /></Link>   
                          <h2 className="extitle">{val.title}</h2>
                          <h3 className="exLocate">{val.Location.location}</h3>
                        </ul>
                      </div>
                    </div>
                  )
                })}
                    
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default TodayCarousel;