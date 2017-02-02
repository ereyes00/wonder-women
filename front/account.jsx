 import React from 'react';
 import $ from 'jquery';
 import CreateEvent from './createEvent.jsx';

 var Account = React.createClass({
 	getInitialState: function(){
 		return {createdEvents: [], firstName: '', lastName: '', email: '', bookmarks: []}
 	},
 	showCreate: function(){
 		var dialog=document.getElementById('window');
 		document.getElementById('show').onClick = function(){
 				dialog.show();
 		};
 		document.getElementById('submit').onClick = function(){
 				dialog.close();
 		};
 	}(),
 	render: function(){
 		<dialog id="window">
 			<CreateEvent />
 		</dialog>

 		return(
 			<div>
 				<h2 className="title">Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>


 				<h3>Your Account Info:</h3>
 				<br /> <br />

 				<p>Name: {this.state.firstName}{this.state.lastName}</p>
 				<p>Email: {this.state.email}</p>

 				<br /> <br />

 				<button
 				className="button" 
 				id="show"
 				onClick={this.showCreate}>Create An Event
 				</button>

 				<br /> <br />

 				<h3>Your Created Events:</h3>


 			</div>
 		)
 	}
 })

 export default Account;