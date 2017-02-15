import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
//import './style/createLocation.css';

const CreateLocation = React.createClass({
  getInitialState: function () {
    return {
            location:'',
            phoneNumber:'',
            streetAddress:'',
            city:'',
            state:'',
            zipCode:'',
            type:'',
            hours: {
              Sunday:{
                dayOfWeek:'',
                openTime: "",
                closeTime: "",
                closed:''
              },
              Monday: { 
                dayOfWeek:'',
                openTime: "",
                closeTime: "",
                closed:'' 
              },
              Tuesday: { 
                openTime: "",
                closeTime: "",
                closed:'' 
              },
              Wednesday: { 
                openTime: "",
                closeTime: "",
                closed:'' 
              },
              Thursday: { 
                openTime: "",
                closeTime: "",
                closed:'' 
              },
              Friday: { 
                openTime: "",
                closeTime: "",
                closed:'' 
              },
              Saturday: { 
                openTime: "",
                closeTime: "",
                closed:'' 
              }
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
  handleChange: function (input, event) {
    //will be a drop down after the create location form is done
    if (input === 'location') {
      this.setState({ location: event.target.value });
    } 
    else if (input === 'phoneNumber') {
      this.setState({ phoneNumber: event.target.value });
    }
    else if (input === 'streetAddress') {
      this.setState({ streetAddress: event.target.value });
    } 
    else if (input === 'city') {
      this.setState({ city: event.target.value });
    } 
    else if (input === 'state') {
      this.setState({ state: event.target.value });
    }
    else if (input === 'zipCode') {
      this.setState({ zipCode: event.target.value });
    }    
  },
  updateType: function (event) {
    this.setState({ type: event.target.value });
  }, 
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

  },
  // handleHourChange: function(event){
  //   this.setState({
  //         hours:{ 
  //           Monday: {
  //             //dayOfWeek:event.value,
  //             openTime:event.target.value, 
  //             closeTime:event.target.value,
  //             closed:event.target.value
  //           } 
  //         } 
  //   })
  // },
  // handleMinuteChange: function(event){
  //   this.setState({
  //         hours:{ 
  //           Monday: {
  //             //dayOfWeek:event.value,
  //             openTime:event.target.value, 
  //             closeTime:event.target.value,
  //             closed:event.target.value
  //           } 
  //         } 
  //   })
  // },
  // handletTimeChange: function(event){
  //   this.setState({
  //         hours:{ 
  //           Monday: {
  //             //dayOfWeek:event.value,
  //             openTime:event.target.value, 
  //             closeTime:event.target.value,
  //             closed:event.target.value
  //           } 
  //         } 
  //   })
  // },
  render: function () {
    return (
      <center>
        <div className="createLocationForm">
          
          <h2>Create A Location</h2>
          
          <form onSubmit={this.addLocation} className='createLocation'>
              
            Location:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'location')} 
            />
            <br /><br />
            <select value={this.state.type} onChange={this.updateType}>
              <option value="Museum">Museum</option>
              <option value="Gallery">Gallery</option>
              <option value="School">School</option>
            </select>
            <br /><br />
              
            Phone Number:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'phoneNumber')} 
            />
            <br /><br />
            
            Address:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'streetAddress')} 
            />
            <br /><br />
            
            City:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'city')} 
            />
            <br /><br />
            
            State:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'state')} 
            />
            <br /><br />

            Zip Code:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'zipCode')} 
            />
            <br /><br />
              
            <div>    
              Hours:
              <br />
              <br />
              <div className="dayBox">

                <input type="checkbox"
                 value="Monday"
                 onClick={this.handleClick.bind(this, "Monday")} 
                />
                <label>Monday</label>
                <br /><br />

                <input type="checkbox"
                 value="Monday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input type="checkbox"
                 value="Tuesday"
                 onClick={this.handleClick.bind(this, "Tuesday")} 
                />
                <label>Tuesday</label>
                <br /><br />

                <input type="checkbox"
                 value="Tuesday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input type="checkbox"
                 value="Wednesday"
                 onClick={this.handleClick.bind(this, "Wednesday")} 
                />
                <label>Wednesday</label>
                <br /><br />

                <input type="checkbox"
                 value="Wednesday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
                            
              <div className="dayBox">

                <input type="checkbox"
                 value="Thursday"
                 onClick={this.handleClick.bind(this, "Thursday")} 
                />
                <label>Thursday</label>
                <br /><br />

                <input type="checkbox"
                 value="Thursday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input type="checkbox"
                 value="Friday"
                 onClick={this.handleClick.bind(this, "Friday")} 
                />
                <label>Friday</label>
                <br /><br />

                <input type="checkbox"
                 value="Friday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
                            
              <div className="dayBox">

                <input type="checkbox"
                 value="Saturday"
                 onClick={this.handleClick.bind(this, "Saturday")} 
                />
                <label>Saturday</label>
                <br /><br />

                <input type="checkbox"
                 value="Saturday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />
              
              <div className="dayBox">

                <input type="checkbox"
                 value="Sunday"
                 onClick={this.handleClick.bind(this, "Sunday")} 
                />
                <label>Sunday</label>
                <br /><br />

                <input type="checkbox"
                 value="Sunday"
                 onClick={this.handleClick.bind(this, "closed")} 
                />
                <label>Closed</label>
                <br /><br />

                <label>From</label>
                <input type="time" name="time"></input>

                <label>To</label>
                <input type="time" name="time"></input>
                <br /><br />
 
              </div>
              <br /><br />

              <input type="submit"
                className="button"
                id="submit"
                value="Submit" 
              />

            </div>
          </form>
        </div>
      </center>
    );
  }
});

export default CreateLocation;

