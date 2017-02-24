import React from 'react';
import { Link } from 'react-router';
import './style/contactUs.css';


const ContactUs = React.createClass({
  getInitialState: function () {
    return {  fullName: '', email: '', message: '', msg: '',
    }
  },
  sendMessage: function (e) {
    e.preventDefault();
    $.ajax({
      url: '/api/message/send',
      method: 'POST',
      data: this.state,
    })
    .done((data) => {
      this.setState({msg: data});
    });
  },
  saveChange(e) {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value});
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
              onChange={this.saveChange} />
            <br /><br />

            <input
              type="text"
              name="email"
              className="inputContact"
              placeholder="Email" 
              onChange={this.saveChange}  />
            <br /><br />

            <input
              type="text"
              name="message"
              className="inputContact"
              placeholder="Message"
              onChange={this.saveChange}  />

            <br /><br />

            <input 
                type="submit"
                className="button"
                id="submit"
                value="Submit"
                onClick={this.sendMessage}
            />

          </form>

          <p className="error">{this.state.msg}</p>

        </center>
      </div>
    );
  }
});

export default ContactUs;
