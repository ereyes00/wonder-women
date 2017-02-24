import React from 'react';
import { Link } from 'react-router';
import './style/contactUs.css';


const ContactUs = React.createClass({
  getInitialState: function () {
    return {  fullName: '', email: '', message: '', msg: '',
    }
  },
  addMessage: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/user/send/message',
      method: 'POST',
      data: this.state,
    })
    .done((data) => {
      this.setState({msg: data.responseText})
    });
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  },
  render: function () {
    return (
      <div>
        <center className="pageContent">
          <h2>Contact Us</h2>
          <p>Please feel free to contact us with any comments or concerns.</p>
          <form>
            <input
              type="text"
              name="fullName"
              className="inputContact" 
              placeholder="Full Name" 
              onChange={this.handleChange} />
            <br /><br />

            <input
              type="text"
              name="email"
              className="inputContact"
              placeholder="Email" 
              onChange={this.handleChange}  />
            <br /><br />

            <input
              type="text"
              name="message"
              className="inputContact"
              placeholder="Message"
              onChange={this.handleChange}  />

            <br /><br />

            <input 
                type="submit"
                className="button"
                id="submit"
                value="Submit" 
            />

          </form>

          <p className="error">{this.state.msg}</p>

        </center>
      </div>
    );
  }
});

export default ContactUs;
