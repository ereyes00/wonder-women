import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
//import './style/createLocation.css';

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
      <center>
        <div className="createLocationForm">
          
          <h2>Create A Location</h2>
          
          <form onSubmit={this.addLocation} className='createLocation'>
              
            Location:
            <br />
            <input 
              type="text"
              name='location'
              className="inputEvent"
              onChange={this.handleChange}
            />
            <br /><br />

            
            <select value={this.state.type} name="type"onChange={this.handleChange}>
              <option value="Museum">Museum</option>
              <option value="Gallery">Gallery</option>
              <option value="School">School</option>
            </select>
            <br /><br />
             
            Phone Number:
            <br />
            <input 
              type="text"
              name='phoneNumber'
              className="inputEvent"
              onChange={this.handleChange}
            />
            <br /><br />
            
            Address:
            <br />
            <input 
              type="text"
              name='streetAddress'
              className="inputEvent"
              onChange={this.handleChange}
            />
            <br /><br />
            
            City:
            <br />
            <input 
              type="text"
              name='city'
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />
            
            State:
            <br />
            <input 
              type="text"
              name='state'
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />

            Zip Code:
            <br />
            <input 
              type="text"
              name='zipCode'
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />
            
            <div onClick={this.handleClick}>  

              Hours:
              <br />
              <br />
              
              <div className="dayBox">

                <label>Sunday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Sunday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Sunday', false)}
                /><br /><br />
 
              </div>

              <div className="dayBox">

                <label>Monday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Monday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Monday', false)}
                /><br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">


                <label>Tuesday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Tuesday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Tuesday', false)}
                />
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <label>Wednesday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Wednesday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Wednesday', false)}
                />
                <br /><br />
 
              </div>
              <br /><br />

              <div className="dayBox">

                <label>Thursday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Thursday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Thursday', false)}
                /><br /><br />
 
              </div>
              <br /><br />              
              
              <div className="dayBox">

                <label>Friday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Friday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Friday', false)}
                /><br /><br />
 
              </div>
              <br /><br />
                            
              <div className="dayBox">

                <label>Saturday</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleHour.bind(this, 'Saturday', true)}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleHour.bind(this, 'Saturday', false)}
                /><br /><br />
 
              </div>
              <br /><br />
              

              <br /></div>
            
              <input 
                type="submit"
                className="button"
                id="submit"
                value="Submit" 
              />
          </form>
        </div>
      </center>
    );
  }
});

CreateLocation.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.func
}

export default CreateLocation;

