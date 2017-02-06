import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

import './style/searchBar.css';

const SearchBar = React.createClass({
	getInitialState: function(){
		return {zipCode: 0, dateStart: '', dateEnd: '', type: "SearchAll"}
	},
	render: function(){
		return(
			<div>

			<h2>Find your next art escape.</h2>
			<br />			
				<form className="SearchForm">
					<div className="Zip_Locate">
						<label className="SearchForm_Label">
								<span>Zip Code</span>
						</label>
						<div>
							<input type="text" className="Zip_Input" placeholder= "Zip Code" />
						</div>
					</div>

					<div className="DateRangePicker">
						<label className="SearchForm_Label">
							<span>Start Date</span>
						</label>
						<div>
							<input type="date" className="Date_Input" />
						</div>
						<label className="SearchForm_Label">
							<span>End Date</span>
						</label>
						<div>
							<input type="date" className="Date_Input" />
						</div>
					</div>

					<div className="LocationType">
						<label className="SearchForm_Label">
							<span>Type</span>
						</label>
						<div className="TypeSelection">
							<select value={this.state.type}>
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