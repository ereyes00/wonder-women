import React from 'react';
import {Link, browserHistory} from 'react-router';
import $ from 'jquery';
import Event from './event.jsx';
import './style/openingMonth.css';
var moment = require('moment');

const range = num => {
  var retVal = []
  for (var i = 0; i < num; i++) {
    retVal.push(i)
  }
  return retVal
}

const partition = (num, arr) => {
  const size = Math.floor(arr.length / num)
  const buckets = range(num).map(i => {
    const offset = i * size
    return arr.slice(offset, offset + size)
  })
  const numRemaining = arr.length - (size * num)
  if (numRemaining) {
    let lastBucket = buckets[buckets.length-1]
    buckets[buckets.length-1] = lastBucket.concat(arr.slice(-numRemaining))
  }
  return buckets
}

const openingMonth = React.createClass({
  getInitialState: function(){
    return({eventMonth: null})
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

  renderEvent: function(val) {
    return (
      <div key={val.id} className="imgDiv">              
        <Link to={'/events/' + val.id}>
          <img className="image" src={val.Images[0].url} />
        </Link>   

        <Link to={'/events/' + val.id}>
          <h2 className="extitle">{val.title}</h2>
        </Link>

        <h3 className="exLocate">{val.Location.location}</h3>
      </div>
    )
  },

  render: function(){
    if (this.state.eventMonth){
      console.log('eventmonths: ', this.state.eventMonth)
      console.log('partition: eventmonths: ', partition(3, this.state.eventMonth))

      return(
        <div >
          <div >
            <h2 className="openingMonth">
            {moment().format('MMMM YYYY')} Openings
            </h2>
          </div>

            <br /><br />
            <div className="columnContainer">
                {partition(3, this.state.eventMonth).map((bucket, i) => {
                  return (
                    <div className="column" key={'bucket' + i}>
                     {bucket.map(this.renderEvent)}
                    </div>              
                  )
                })
               }
          </div>
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }
  }
})

export default openingMonth;