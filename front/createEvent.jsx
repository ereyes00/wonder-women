import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateEvent = React.createClass({
  getInitialState: function () {
    return { title: 'Despair',
             userId: 1,
             featuredArtist: 'Ursula',
             location: 'Hell',
             type: 'Museum',
             streetAddress: '24 Vwio Av',
             city: 'Bremuda',
             state: 'Triangle',
             zipCode: 16661,
             price: 'Your soul',
             description: 'The best exhibit you will never see',
             opening: '2017-02-30',
             closing: '2017-02-31',
             hours: { 
              Sunday:{
                openTime: "12:00 AM",
                closeTime: "05:00 PM" },
              Monday: { 
                openTime: "12:00 AM",
                closeTime: "05:00 PM" },
              Tuesday: { 
                openTime: "12:00 AM",
                closeTime: "05:00 PM" },
             },
            image: 'http://randommization.com/wp-content/uploads/2011/11/Couture-Art-by-Iris-van-Herpen_2.jpg' };
  },
  addEvent: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/event',
      method: 'POST',
      data: this.state,
    })
    .done((data) => {
      console.log('Event has been created.');
      browserHistory.push('/account');
      // after submitting new event, user will be brought back to their acct page.
    });
  },
  handleChange: function (input, event) {
    if (input === 'title') {
      this.setState({ title: event.target.value });
    } else if (input === 'location') {
      this.setState({ location: event.target.value });
    } else if (input === 'featuredArtist') {
      this.setState({ featuredArtist: event.target.value });
    } else if (input === 'streetAddress') {
      this.setState({ streetAddress: event.target.value });
    } else if (input === 'city') {
      this.setState({ city: event.target.value });
    } else if (input === 'state'){
      this.setState({ state: event.target.value });
    } else if (input === 'zipCode') {
      this.setState({ zipCode: event.target.value });
    } else if (input === 'price') {
      this.setState({ price: event.target.value });
    } else if (input === 'description') {
      this.setState({ description: event.target.value });
    } else if (input === 'opening') {
      this.setState({ opening: event.target.value });
    } else if (input === 'closing') {
      this.setState({ closing: event.target.value });
    } else if (input === 'image') {
      this.setState({ image: event.target.value });
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
        <div className="createEventForm">
          
           <h2 className='headerCreate'>Create An Event</h2>
          
          <form onSubmit={this.addEvent} className='createEvent'>
            <br /><br />
            Event Title:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'title')} 
            />
            <br /><br />
            Featured Artist:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'featuredArtist')} 
            />
            <br /><br />
            Event Location:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'location')} 
            />
            <br /><br />
            Event Image Link:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'image')} 
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
            Price:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'price')} 
            />
            <br /><br />
            Description:
            <br />
            <input type="text"
              className="inputEvent"
              onChange={this.handleChange.bind(this, 'description')} 
            />
            <br /><br />
            <div>
              Opening Day:
              <br />
              <input type="date"
                className="cal"
                onChange={this.handleChange.bind(this, 'opening')} 
              />
            </div>
            <br /><br />
            <div>
              Closing Day:
              <br />
              <input type="date"
                className="cal"
                onChange={this.handleChange.bind(this, 'closing')} 
              />
            </div>
            <br /><br />

        {
        //Hours:
        //<br />
        //  <input type="text"
        //    className="input"
        //    placeholder="Monday-Friday 9:45AM - 5:45PM | Saturday-Sunday 11:45AM - 5:45PM"
        //    onChange={this.updateHours} />
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

