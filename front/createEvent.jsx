import React from 'react';
import $ from 'jquery';

var CreateEvent = React.createClass({
	render: function(){
		return(
			<div>
				<h2>Create An Event</h2>

				<form>
					<input type="text"
					placeholder="Title of Event" />
					<br /><br />

					<input type="text"
					placeholder="Location" />
					<br /><br />

					<input type="text"
					placeholder="Address" />
					<br /><br />

					<input type="text"
					placeholder="City" />
					<br /><br />

					<input type="text"
					placeholder="Zip Code" />
					<br /><br />

					<input type="text"
					placeholder="Price" />
					<br /><br />

					Opening Day:
					<input type="date" />
					<br /><br />

					Closing Day:
					<input type="date"
					placeholder="Closing Day" />
					<br />
					<br />
					Please check off the days you'll be open: 
					<br />
						<input type="checkbox"
						value="Monday" />Monday
						<br />
						
						<input type="checkbox"
						value="Tuesday" />Tuesday
						<br />

						<input type="checkbox"
						value="Wednesday" />Wednesday
						<br />

						<input type="checkbox"
						value="Thursday" />Thursday
						<br />

						<input type="checkbox"
						value="Friday" />Friday
						<br />

						<input type="checkbox"
						value="Saturday" />Saturday
						<br />

						<input type="checkbox"
						value="Sunday" />Sunday

				</form>
			</div>
		)
	}
})

export default CreateEvent;