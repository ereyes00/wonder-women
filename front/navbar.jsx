import React from 'react';
import {Link} from 'react-router';
import './style/home.css';

var NavBar = React.createClass({
	render: function() {
		return (
			<div className="Nav">
				<Link to ='events'>The Week Ahead</Link>
				<br />
			    <Link to='CreateEvent'>Create Event</Link>
			    <br />
			    <Link to='Login'>Login</Link>
			    <br />
			    <Link to='Signup'>Sign Up</Link>
      		</div>
		)
	}
})

export default NavBar;

//<Link to='SignUp'>Sign Up</Link>
//<Link to='Login'>Login</Link>