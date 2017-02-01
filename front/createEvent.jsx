import React from 'react';
import $ from 'jquery';

var CreateEvent = React.createClass({
	getInitialState: function(){
		return {title: '', location: '', address: '', city: '', zipCode: 0, price: '', description: '', opening: '', closing: ''}
	},
	
	render: function(){
		return(
			<div>
				<h2>Create An Event</h2>

				<form>
					Event Title:
					<input type="text"/>
					<br /><br />

					Event Location:
					<input type="text"/>
					<br /><br />

					<select>
						<option value="Museum">Museum</option>
						<option value="Gallery">Gallery</option>
						<option value="School">School</option>
					</select>
					<br /><br />

					Address:
					<input type="text"/>
					<br /><br />

					City:
					<input type="text"/>
					<br /><br />

					Zip Code:
					<input type="text" />
					<br /><br />

					Price:
					<input type="text"/>
					<br /><br />

					Description:
					<input type="text" />
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
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />
						
						<input type="checkbox"
						value="Tuesday" />Tuesday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="checkbox"
						value="Wednesday" />Wednesday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="checkbox"
						value="Thursday" />Thursday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="checkbox"
						value="Friday" />Friday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="checkbox"
						value="Saturday" />Saturday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="checkbox"
						value="Sunday" />Sunday
						<br />
						Hours:
						<input type="text" /> to <input type="text"/>
						<br /><br />

						<input type="submit" value="Submit" />

				</form>
			</div>
		)
	}
})

export default CreateEvent;