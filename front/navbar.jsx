import React from 'react';
import ContactUs from './contactUs.jsx';
import About from './about.jsx';


var NavBar = React.createClass({
	render: function() {
		return (
			<h1>Hello from NavBar</h1>
			  <Link to='About'>About</Link>
	          <Link to='SignUp'>Sign Up</Link>
	          <Link to='Login'>Login</Link>
	          <Link to='ContactUs'>Contact Us</Link>
		)
	}
})

export default NavBar;