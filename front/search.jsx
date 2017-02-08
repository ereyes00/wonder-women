import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

import './style/searchBar.css';

const SearchBar = React.createClass({
	getInitialState: function(){
		return {zipCode: 0, dateStart: '', dateEnd: '', type: "SearchAll"}
	},
	updateType: function(event){
		this.setState({type: event.target.value})
	},
	handleChange: function(input, event){
		if(input === 'zipCode'){
			this.setState({zipCode: event.target.value})
		} else if (input === 'dateStart'){
			this.setState({dateStart: event.target.value})
		} else if (input === 'dateEnd'){
			this.setState({dateEnd: event.target.value})
		}
	},
	searchEvents: function(e){
		e.preventDefault()
		$.ajax({
			url: '/api/events',
			method: 'GET',
			data: this.state
		})
		.done((results)=>{
			console.log("Search is successful.")
		})
	},
	render: function(){
		return(
			<div className="Search">
				<form className="SearchForm" onSubmit={this.searchEvents}>
					<div className="Zip_Locate">
						<label className="SearchForm_Label">
								<span>Where</span>
						</label>
						<div>
							<input type="text" className="Zip_Input" placeholder= "Zip Code" onChange={this.handleChange.bind(this, "zipCode")} />
						</div>
					</div>

					<div className="DateStartPicker">
						<label className="SearchForm_Label">
							<span>Start Date</span>
						</label>
						<div>
							<input type="date" className="Date_Input" onChange={this.handleChange.bind(this, "dateStart")} />
						</div>
					</div>

					<div className="DateEndPicker">
						<label className="SearchForm_Label">
							<span>End Date</span>
						</label>
						<div>
							<input type="date" className="Date_Input" onChange={this.handleChange.bind(this, "dateEnd")} />
						</div>
					</div>

					<div className="LocationType">
						<label className="SearchForm_Label">
							<span>Type</span>
						</label>
						<div className="TypeSelection">
							<select value={this.state.type} onChange={this.updateType} className='selectType'>
								<option value="SearchAll">All</option>
								<option value="Museum">Museum</option>
								<option value="Gallery">Gallery</option>
								<option value="School">School</option>
							</select>
						</div>
					</div>

					<button className="button">Search</button>
				</form>
			</div>
		)
	}
})

export default SearchBar;

///not finished!!!!! needs ajax call etc...

// const Search = React.createClass({
// 	getInitialState(){
// 		return{zipcode: "", price:''}
// 	},

// 	handleChange(event){
// 		let name = event.target.name;
// 		let value = event.target.value;
// 		this.setState({[name]: value});
// 	},

// 	makeQuery(){
// 		if(this.state.zipcode){
// 			// browserHistory.push(`/search?zipcode=${this.state.zipcode}&price=${this.state.price}`)
// 			this.props.refresh ? this.props.refresh() : null;
// 		} else {
// 			alert("No zipcode entered, please enter a zip")
// 		}
// 	},

// 	render(){
// 		let imgStyle={width: 50, height: 50}
// 		return(
// 			<div>
// 				<div id="search">
// 					<h1>Search for events: </h1>
// 					<input onChange={this.handleChange} type="text" name="zipcode" placeholder="Zip Code"></input> 
					
// 					<img onClick={this.makeQuery} src={require('./style/images/search-icon.png')} alt="search-icon" style={imgStyle} />
// 				</div>
// 				<div >
// 					<select onChange={this.handleChange} value={this.state.price}>
// 						<option value='1'>Free</option>
// 					</select>
// 			    </div>
// 	      </div>
// 		)
// 	}
// });


// export default Search;