import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
//import './style/createLocation.css';

const CreateLocation = React.createClass({
  getInitialState: function () {
    return {
            location:'',
            streetAddress:'',
            city:'',
            state:'',
            zipCode:'',
             hours: { 
              Sunday:{
                openTime: "",
                closeTime: "",
                closed:'' },
              Monday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
              Tuesday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
              Wednesday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
              Thursday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
              Friday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
              Saturday: { 
                openTime: "",
                closeTime: "",
                closed:'' },
             }
  },
  addLocation: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/events',
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
    else if (input === 'location') {
      this.setState({ location: event.target.value });
    }   
  },
  updateType: function (event) {
    this.setState({ type: event.target.value });
  }, 
  updateHours: function (event) {
    this.setState({ hours: event.target.value });
  },
  handleClick: function (event) {
    console.log(event.target);
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
        Hours:
        <br />
         <input type="text"
           className="input"
           placeholder="hours"
           onChange={this.updateHours} />
      }
        <div value={this.state.hours}>
        Hours:
        <br />
         <div className="dayBox">

          <input type="checkbox"
             value="Monday"
             onClick={this.handleClick.bind(this, "monday")} />
             <label>Monday</label>

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
             value="Tuesday"
             onClick={this.handleClick.bind(this, "tuesday")} />
             <label>Tuesday</label>

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
             onClick={this.handleClick.bind(this, "wednesday")} />
             <label>Wednesday</label>

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
             onClick={this.handleClick.bind(this, "thursday")} />
             <label>Thursday</label>

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
             onClick={this.handleClick.bind(this, "friday")} />
             <label>Friday</label>

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
             onClick={this.handleClick.bind(this, "saturday")} />
             <label>Saturday</label>

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
             onClick={this.handleClick.bind(this, "sunday")} />
             <label>Sunday</label>

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
            value="Submit" />

        </form>
      </div></center>
    );
  }
});

export default CreateEvent;

