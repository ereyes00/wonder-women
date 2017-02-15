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
  addLocation: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/location',
      method: 'POST',
      data: this.state,
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
<<<<<<< HEAD
  // updateHours: function (event) {
  //   this.setState({ hours: event.target.value });
  // }, 
  handleClick: function (event) {
    console.log("this ====>",this);
      if (event === 'Monday'){
        this.setState({
          hours:{ 
            Monday: {
              dayOfWeek:event.value,
              // openTime:event.value, 
              // closeTime:event.value,
              // closed:event.value
            } 
          }  
        });
      } 
      // else if (event === 'Tuesday'){
      //   this.setState({ 
      //     hours:{ 
      //       Tuesday: {
      //         dayOfWeek:event.value,
      //         openTime:event.value, 
      //         closeTime:event.value,
      //         closed:event.value
      //       } 
      //     } 
      //   });
      // }

=======
  handleClick(e) {
    //console.log("event",e);
    this.setState({[e.target.name]: e.target.value})
>>>>>>> 2066863674adc73de6e17aa448c89044a45ca1b4
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
            
            <div>  

              Hours:
              <br />
              <br />

              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Monday"
                  onClick={this.handleClick} 
                /><label>Monday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleClick}
                />


                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleClick}
                /><br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Tuesday"
                  onClick={this.handleClick}
                /><label>Tuesday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"

                  onChange={this.handleClick}
                />


                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleClick}
                />
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Wednesday"
                  onClick={this.handleClick}
                /><label>Wednesday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onChange={this.handleClick}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onChange={this.handleClick}
                />
                <br /><br />
 
              </div>
              <br /><br />

              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Thursday"
                  onClick={this.handleClick}
                /><label>Thursday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onClick={this.handleClick}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onClick={this.handleClick}
                /><br /><br />
 
              </div>
              <br /><br />              
              
              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Friday"
                  onClick={this.handleClick} 
                /><label>Friday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onClick={this.handleClick}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onClick={this.handleClick}
                /><br /><br />
 
              </div>
              <br /><br />
                            
              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Saturday"
                  onClick={this.handleClick}
                /><label>Saturday</label><br /><br />

                <input 
                  type="checkbox"
                  name="Saturday"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onClick={this.handleClick}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onClick={this.handleClick}
                /><br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input 
                  type="checkbox"
                  name="Sunday"
                  onClick={this.handleClick} 
                /><label>Sunday</label><br /><br />

                <input 
                  type="checkbox"
                  name="closed"
                  onClick={this.handleClick} 
                /><label>Closed</label><br /><br />

                <label>From</label>
                <input 
                  type="time" 
                  name="openTime"
                  onClick={this.handleClick}
                />

                <label>To</label>
                <input 
                  type="time" 
                  name="closeTime"
                  onClick={this.handleClick}
                /><br /><br />
 
              </div>
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

export default CreateLocation;

