import React from 'react';
import $ from 'jquery';
import './style/loginSignUp.css';
import {Link, browserHistory} from 'react-router';

var Login = React.createClass({
	getInitialState: function(){
		return {email: '', password: null, msg: ""}
	},
	handleChange: function(input, event){
		if(input === "email"){
			this.setState({email: event.target.value})
		} else if (input === "password"){
			this.setState({password: event.target.value})
		}
	},
	userLogin: function(event){
		event.preventDefault()
		$.ajax({
			method: 'POST',
			url: '/api/user/login',
			data: this.state,
			error: ((data) => {
				console.log(typeof data.responseText)
				this.setState({msg: data.responseText})
			}).bind(this)
		})
		.done((data) => {
			console.log("Received User Data", data);
			browserHistory.push('/account')
		})
	},
	render: function(){
		return(
			<center>
				<div className="loginForm">
					<h2 >Log In to Art Gal</h2>
          <p>New to Art Gal? <Link to={'/signup'}>Sign Up!</Link></p>
		      <div >
	      		<br />
	        	<form onSubmit={this.userLogin}>
		          <input
		            className="inputLogin"
		            type="text"
		            placeholder="email"
		            onChange={this.handleChange.bind(this, "email")}
		          />
		          <br /><br />
			        <input
				        className="inputLogin"
				        type="password"
				        placeholder="password"
				        onChange={this.handleChange.bind(this, "password")}
			        />
		          <br /><br />
		          <button
		           className="button"
		           type="submit">Sign In
		          </button>
	          </form>
          </div>
          <p className="error">{this.state.msg}</p>
        </div>
      </center>
    )
  }
})

export default Login;