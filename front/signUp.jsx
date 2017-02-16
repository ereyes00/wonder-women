import React from 'react';
import $ from 'jquery';
import './style/loginSignUp.css';
import {browserHistory} from 'react-router';

var Signup = React.createClass({
	getInitialState: function(){
		return {email: '', firstName: '', lastName: '', password: '', zipCode: 0, role: ''}
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
	updateRole: function(e){
		// this.setState({type: event.target.value})
		this.setState({[e.target.name]: e.target.value})
	},
	acctSignUp: function(event){
		event.preventDefault()
		//this.props.onSignUp(this.state)
		$.ajax({
			method: 'POST',
			url: '/api/user',
			data: this.state
		})
		.done((data) => {
			console.log("Received User Data", data);
			this.context.onSignUp(data)
			browserHistory.push('/account')
		})
	},
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
							<select value={this.state.role} name="role" onChange={this.updateRole}//{this.updateType.bind(this, 'type')}
							>
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

Signup.contextTypes = {
	currentUser: React.PropTypes.object,
	onSignUp: React.PropTypes.func
}

export default Signup;