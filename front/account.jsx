 import React from 'react';
 import $ from 'jquery';
 import CreateEvent from './createEvent.jsx';

 var Account = React.createClass({
 	getInitialState: function(){
 		return {createdEvents: [], firstName: '', lastName: '', email: '', bookmarks: []}
 	},
 	componentDidMount: function(){
 		$.ajax({
 			url: '/api/users/id',
 			type: 'GET',
 			data: this.state
 		})
 		.then((user)=> {
 			this.setState({firstName: user.firstName, lastName: user.lastName, email: user.email})
	 		$.ajax({
	 			url: '/api/events',
	 			type: 'GET',
	 			data: this.state
	 		}) 
	 		.then((events)=> {
	 			console.log(events)
	 			this.setState({createdEvents: events})
	 		})
	 		.then((bookmarks) => {
	 			console.log(bookmarks)
	 			this.setState({bookmarks: bookmarks})
	 		})
	 	})
 	},
 	render: function(){
 		return(
 			<div>
 				<h2 className="title">Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>


 				<h3>Your Account Info:</h3>
 				<br /> <br />

 				<p>Name: {this.state.firstName}{this.state.lastName}</p>
 				<p>Email: {this.state.email}</p>

 				<br /> <br />

 				<a href='createevent'><button
 				className="button" 
 				>Create An Event
 				</button></a>

 				<br /> <br />

 				<h3>Your Created Events:</h3>


 			</div>
 		)
 	}
 })

 export default Account;