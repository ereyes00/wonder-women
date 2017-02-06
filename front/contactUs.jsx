import React from 'react';
import { Link } from 'react-router';

const ContactUs = React.createClass({
  render: function () {
    return (
      <div>
        <center>
          <h2>Contact Us</h2>
          <p>Please feel free to contact us with any comments or concerns.</p>
          <form>
            <input
              type="text"
              placeholder="Full Name" />
            <br />

            <input
              type="text"
              placeholder="Email" />
            <br />

            <input
              type="text"
              placeholder="Message" />

            <br /><br />

            <button
              className="button"
              type="submit">Submit
              </button>
          </form>

        </center>
      </div>
    );
  }
});

export default ContactUs;
