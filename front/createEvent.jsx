import React from 'react';
import $ from 'jquery';

var CreateEvent = React.createClass({
	getInitialState: function(){
		return {title: '', location: '', type: 'Museum', streetAddress: '', city: '', zipCode: 0, price: '', description: '', opening: '', closing: '', hours: []}
	},
	addEvent: function(e){
		e.preventDefault()
		$.ajax({
			url: '/api/events',
			method: 'POST',
			data: this.state
		})
		.done((data) => {
			console.log('Received the data')
		})
	},
	handleChange: function(input, event){
		if(input === 'title'){
			this.setState({title: event.target.value})
		} else if (input === 'location'){
			this.setState({location: event.target.value})
		} else if (input === 'streetAddress'){
			this.setState({streetAddress: event.target.value})
		} else if (input === 'city'){
			this.setState({city: event.target.value})
		} else if (input === 'zipCode'){
			this.setState({zipCode: event.target.value})
		} else if (input === 'price'){
			this.setState({price: event.target.value})
		} else if (input === 'description'){
			this.setState({description: event.target.value})
		} else if (input === 'opening'){
			this.setState({opening: event.target.value})
		} else if (input === 'closing'){
			this.setState({closing: event.target.value})
		}
	},
	updateType: function(event){
		this.setState({type: event.target.value})
	},
	updateHours: function(event){
		this.setState({hours: event.target.value})
		console.log('HOURS', this.state.hours)
	},
	render: function(){
		return(
			<div>
				<h2>Create An Event</h2>

				<form onSubmit={this.addEvent}>
					Event Title:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "title")}/>

					<br /><br />

					Event Location:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "location")}/>

					<br /><br />

					<select value={this.state.type} onChange={this.updateType}>
						<option value="Museum">Museum</option>
						<option value="Gallery">Gallery</option>
						<option value="School">School</option>
					</select>

					<br /><br />

					Address:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "streetAddress")}/>

					<br /><br />

					City:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "city")}/>

					<br /><br />

					Zip Code:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "zipCode")} />

					<br /><br />

					Price:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "price")}/>

					<br /><br />

					Description:
					<br />
					<input type="text"
					onChange={this.handleChange.bind(this, "description")} />

					<br /><br />

					Opening Day:
					<br />
					<input type="date"
					onChange={this.handleChange.bind(this, "opening")} />

					<br /><br />

					Closing Day:
					<br />
					<input type="date"
					onChange={this.handleChange.bind(this, "closing")} />

					<br /><br />


					<strong>Please check off the days you'll be open: </strong>

					<br /> <br />

					<div value={this.state.hours}>

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Monday" />Monday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>	

						<br /><br />
						
						
						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Tuesday" />Tuesday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>

						<br /><br />

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Wednesday" />Wednesday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>

						<br /><br />

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Thursday" />Thursday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>

						<br /><br />

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Friday" />Friday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>

						<br /><br />

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Saturday" />Saturday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>

						<br /><br />

						<div onChange={this.updateHours}>
							<input type="checkbox"
							value="Sunday" />Sunday
							<br />
							Hours:
							<input type="text" /> to <input type="text"/>
						</div>
						<br /><br />

					</div>

						<input type="submit" value="Submit" />

				</form>
			</div>
		)
	}
})

export default CreateEvent;