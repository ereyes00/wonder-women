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
  render: function(){
    if (this.state.today){
      console.log(this.state.today)
      return(
        <div className="week">
          <div className = "today">
            <h2>Opening Today, {Date()}:</h2>

            <br /><br />
             <ul>
                {this.state.today.map((val) => {
                  return (
                    <div>
                    
                      <div className="todayImg">                
                        <img className="dayEvent" key={val.id}src={val.Images[0].url} />         
                      </div>

                      <br />

                      <div className="details">
                        <h3 key={val.id}>{val.title}</h3>
                        <p><b>{val.location}</b></p>
                        <p>{val.featuredArtist}</p> 
                        <p>{val.description.split('.')[0]}.</p>
                        <Link to={"/events/" + val.id}><p>MORE...</p></Link>
                      </div>

                    </div>
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