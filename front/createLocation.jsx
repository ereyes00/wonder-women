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
    console.log("event",event);
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
  handleFromChange: function(event){
    this.setState({
          hours:{ 
            Monday: {
              //dayOfWeek:event.value,
              openTime:event.target.value, 
              closeTime:event.target.value,
              closed:event.target.value
            } 
          } 
    })
  },
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
              
              {
              // Hours:
              // <br />
              // <input type="text"
              //  className="input"
              //  placeholder="hours"
              //  onChange={this.updateHours} 
              // />
              }

              {
                //value={this.state.hours} this was the value for following div
              }

              <div > 
                
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

                  <label>Closed</label>
                  <input type="checkbox"
                   value="Monday"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />

                  <div>
                    <label>From </label>
                      <select onChange={this.handleFromChange}>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select onChange={this.handleFromChange}>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select onChange={this.handleFromChange}>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>

                    <label> To </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>
                  </div>
                </div>
                <br /><br />

                <div className="dayBox">

                  <input type="checkbox"
                   value="Tuesday"
                   onClick={this.handleClick.bind(this, "Tuesday")} 
                  />

                  <label>Tuesday</label>

                  <input type="checkbox"
                   value="closed"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />

                  <div>
                    <label>From </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>

                    <label> To </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">:</option>
                        <option value="03">:</option>
                        <option value="04">:</option>
                        <option value="05">:</option>
                        <option value="06">:</option>
                        <option value="07">:</option>
                        <option value="08">:</option>
                        <option value="09">:</option>
                        <option value="10">1:</option>
                        <option value="11">1:</option>
                        <option value="12">1:</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>
                  </div>
                </div>
                <br /><br />

                <div className="dayBox">

                 <input type="checkbox"
                    value="Wednesday"
                    onClick={this.handleClick.bind(this, "Wednesday")} 
                  />

                 <label>Wednesday</label>
                  
                  <input type="checkbox"
                   value="closed"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />                 

                  <div>

                    <label>From </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>

                    <label> To </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>
                  </div>
                </div>
                <br /><br />

                <div className="dayBox">

                  <input type="checkbox"
                   value="Thursday"
                   onClick={this.handleClick.bind(this, "Thursday")} 
                  />
                  
                  <label>Thursday</label>
                  
                  <input type="checkbox"
                   value="closed"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />

                  <div>
                    <label>From </label> 
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>

                    <label> To </label>
                      <select>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                      </select>

                      <select>
                        <option value=":00">00</option>
                        <option value=":15">15</option>
                        <option value=":30">30</option>
                        <option value=":45">45</option>
                      </select>

                      <select>
                        <option value=" AM">AM</option>
                        <option value=" PM">PM</option>
                      </select>
                  </div>
                </div>
                <br /><br />

                <div className="dayBox">

                  <input type="checkbox"
                   value="Friday"
                   onClick={this.handleClick.bind(this, "Friday")} 
                  />
                   
                  <label>Friday</label>
                  
                  <input type="checkbox"
                   value="closed"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />

                  <div>
             
                  <label>From </label>

                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>

                  <label> To </label>
                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>
              </div>
            </div>
            <br /><br />

            <div className="dayBox">

             <input type="checkbox"
               value="Saturday"
               onClick={this.handleClick.bind(this, "Saturday")} 
             />

              <label>Saturday</label>

              <input type="checkbox"
               value="closed"
               onClick={this.handleClick.bind(this, "closed")} 
              />

              <div>
                <label>From </label> 
                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>

                 <label> To </label>

                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>
              </div>
            </div>
            <br /><br />

            <div className="dayBox">

               <input type="checkbox"
                 value="Sunday"
                 onClick={this.handleClick.bind(this, "Sunday")} 
               />
             
                <label>Sunday</label>
                  
                  <input type="checkbox"
                   value="closed"
                   onClick={this.handleClick.bind(this, "closed")} 
                  />

                <div>
                  <label>From </label>
                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>

                  <label> To </label>
                  <select>
                    <option value="01">1</option>
                    <option value="02">2</option>
                    <option value="03">3</option>
                    <option value="04">4</option>
                    <option value="05">5</option>
                    <option value="06">6</option>
                    <option value="07">7</option>
                    <option value="08">8</option>
                    <option value="09">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>

                  <select>
                    <option value=":00">00</option>
                    <option value=":15">15</option>
                    <option value=":30">30</option>
                    <option value=":45">45</option>
                  </select>

                  <select>
                    <option value=" AM">AM</option>
                    <option value=" PM">PM</option>
                  </select>
                </div>
              </div>
              <br /><br />
            </div>
            <br /> <br />

            <input type="submit"
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

