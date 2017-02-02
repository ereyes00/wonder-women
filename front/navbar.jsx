import React from 'react';
import ContactUs from './contactUs.jsx';
import About from './about.jsx';
import {Link} from 'react-router';


var NavBar = React.createClass({
	render: function() {
		return (
			<div>
			  <Link to={'/about'}>About</Link>
			  <br />
	          <Link to={'/contactus'}>Contact Us</Link>
	        </div>
		)
	}
})

export default NavBar;

//<Link to='SignUp'>Sign Up</Link>
//<Link to='Login'>Login</Link>