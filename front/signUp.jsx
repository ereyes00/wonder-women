import React from 'react';
import $ from 'jquery';
import './style/loginSignUp.css';
import {browserHistory} from 'react-router';

var Signup = React.createClass({
	getInitialState: function(){
		return {email: '', firstName: '', lastName: '', password: null, zipCode: 0, type: 'Individual'}
	},
	handleChange: function(input, event){
		if(input === "email"){
			this.setState({email: event.target.value})
		} else if (input === "password"){
			this.setState({password: event.target.value})
		} else if (input === "firstName"){
			this.setState({firstName: event.target.value})
		} else if (input === "lastName"){
			this.setState({lastName: event.target.value})
		} else if (input === "zipCode"){
			this.setState({zipCode: event.target.value})
		}
	},
	updateType: function(event){
		this.setState({type: event.target.value})
	},
	// acctSignUp: function(event){
	// 	event.preventDefault()
	// 	$.ajax({
	// 		method: 'POST',
	// 		url: '/api/users',
	// 		data: this.state
	// 	})
	// 	.done((data) => {
	// 		console.log("Received User Data", data);
	// 		browserHistory.push('/account')
	// 	})
	// },
	render: function(){
		return(
			<center>
			  <div className="signUpForm">
				  <h2 >Sign Up for Art Gal</h2>
				  <p>Find amazing art events in New York City</p>
				  <div >
				    <br />
					  <form onSubmit={this.acctSignUp}>
							<input
							  className="inputSignup"
							  type="text"
							  placeholder="first name"
							  onChange={this.handleChange.bind(this, "firstName")}
							/>
						  <br /><br />
							<input
								className="inputSignup"
								type="text"
								placeholder="last name"
								onChange={this.handleChange.bind(this, "lastName")}
							/>
						  <br /><br />
							<input
								className="inputSignup"
								type="text"
								placeholder="email"
								onChange={this.handleChange.bind(this, "email")}
							/>
						  <br /><br />
							<input
								className="inputSignup"
								type="password"
								placeholder="password"
								onChange={this.handleChange.bind(this, "password")}
							/>
						  <br /><br />
							<input
								className="inputSignup"
								type="text"
								placeholder="zip code"
								onChange={this.handleChange.bind(this, "zipCode")}
							/>
						  <br /><br />
							<select value={this.state.type} onChange={this.updateType}>
								<option value="Individual">Individual</option>
								<option value="Museum">Museum</option>
								<option value="Gallery">Gallery</option>
								<option value="School">School</option>
								<option value="Artist">Artist</option>
							</select>
						  <br /><br />
							<button
								className="button"
								type="submit">Create Account
							</button>
					  </form>
				  </div>
			  </div>
			</center>
		)
	}
})

export default Signup;