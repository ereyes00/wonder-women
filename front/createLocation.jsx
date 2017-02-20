import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateLocation = React.createClass({
  getInitialState: function () {
    return {
            location:'', phoneNumber:'', streetAddress:'',city:'', state:'', zipCode:'', type:'',
            hours: {
              Sunday: {dayOfWeek:'', openTime: "", closeTime: "", closed:''},
              Monday: {dayOfWeek:'', openTime: "",closeTime: "", closed:''},
              Tuesday: {openTime: "", closeTime: "", closed:''},
              Wednesday: {openTime: "", closeTime: "",closed:''},
              Thursday: {openTime: "", closeTime: "",closed:''},
              Friday: {openTime: "", closeTime: "", closed:''},
              Saturday: {openTime: "", closeTime: "",closed:''}
            }           
    }
  },
  componentWillMount: function(){
    //debugger;
    if(!this.context.isUserLoggedin){
      browserHistory.push('/login')
    }
  },
  addLocation: function (e) {
    e.preventDefault();
    var toSend = Object.assign({}, this.state, {userId:this.context.currentUser.id})
    $.ajax({
      url: '/api/location',
      method: 'POST',
      data: toSend,
    })
    .done((data) => {
      console.log('Location has been created.');
      browserHistory.push('/account');
      // after submitting new location, user will be brought back to their acct page.
    });
  },
  handleChange(e) {
    //console.log('event from handleChange', event)
    this.setState({[e.target.name]: e.target.value})
  }, 
  handleHour(day, open, e){
    var currentDay = this.state.hours[day]
    var currentHours = this.state.hours
    if(open){
      currentDay.openTime = e.target.value
    } 
    else {
      currentDay.closeTime = e.target.value
    }
    
    currentHours[day] = currentDay
    this.setState({hours: currentHours})
  },
  render: function () {
    //console.log('state', this.state)
    return (
        <div className="createLocationForm">
          
          <h2 className="directory">Add Location to Directory</h2>
          
          <h4>Location</h4><br />
          <form onSubmit={this.addLocation} className='createLocation'>
            <div>
              <div className="regularInput">
            <input 
              type="text"
              name='location'
              className="inputEvent"
              placeholder="Location"
              onChange={this.handleChange}
            />
            <br /><br />

            
            <select value={this.state.type} name="type"onChange={this.handleChange}>
              <option value="Museum">Museum</option>
              <option value="Gallery">Gallery</option>
              <option value="School">School</option>
            </select>
            <br /><br />
             
            <input 
              type="text"
              name='phoneNumber'
              className="inputEvent"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
            <br /><br />
            
            <input 
              type="text"
              name='streetAddress'
              className="inputEvent"
              placeholder="Address"
              onChange={this.handleChange}
            />
            <br /><br />

            <input 
              type="text"
              name='city'
              className="inputEvent"
              placeholder="City"
              onChange={this.handleChange} 
            />
            <br /><br />

            <input 
              type="text"
              name='state'
              className="inputEvent"
              placeholder="State"
              onChange={this.handleChange} 
            />
            <br /><br />

            <input 
              type="text"
              name='zipCode'
              className="inputEvent"
              placeholder="Zip Code"
              onChange={this.handleChange} 
            />
            <br /><br />

            <input 
                type="submit"
                className="button"
                id="submit"
                value="Submit" 
            />

            </div>

            <div className="hours">
            <div onClick={this.handleClick}>  

              <h4 className="hoursHead">Hours</h4>
              <p className="closed">Leave time blank if location will be closed.</p>
              
              <div className="dayBox">

                <b>Sunday</b><br />
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Sunday', true)}
                />

                 &nbsp; - &nbsp; 
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Sunday', false)}
                />
 
              </div>

              <div className="dayBox">
                
                <b>Monday</b><br />                 
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Monday', true)}
                />
                
                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Monday', false)}
                />
 
              </div>
              
              <div className="dayBox">

                <b>Tuesday</b><br />                 
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Tuesday', true)}
                />

                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Tuesday', false)}
                />
              
 
              </div>
              
              <div className="dayBox">

                <b>Wednesday</b> <br />                
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Wednesday', true)}
                />

                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Wednesday', false)}
                />
                
 
              </div>
             

              <div className="dayBox">

                <b>Thursday</b> <br />
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Thursday', true)}
                />

                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Thursday', false)}
                />
 
              </div>            
              
              <div className="dayBox">

                <b>Friday</b> <br />
                <input 
                  type="time" 
                  className="timeFromInput"
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Friday', true)}
                />

                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Friday', false)}
                />
 
              </div>

              <div className="dayBox">

                <b>Saturday</b> <br />
                <input 
                  type="time"
                  className="timeFromInput" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Saturday', true)}
                />

                &nbsp; - &nbsp;
                <input 
                  type="time" 
                  className="timeToInput"
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Saturday', false)}/>
 
              </div>
              </div>

              <br /></div>
              

            </div>
          </form>
        </div>
    );
  }
});

CreateLocation.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.func
}

export default CreateLocation;
