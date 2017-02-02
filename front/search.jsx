import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

///not finished!!!!! needs ajax call etc...

const Search = React.createClass({
	getInitialState(){
		return{zipcode: "", price:''}
	},

	handleChange(event){
		let name = event.target.name;
		let value = event.target.value;
		this.setState({[name]: value});
	},

	makeQuery(){
		if(this.state.zipcode){
			// browserHistory.push(`/search?zipcode=${this.state.zipcode}&price=${this.state.price}`)
			this.props.refresh ? this.props.refresh() : null;
		} else {
			alert("No zipcode entered, please enter a zip")
		}
	},

	render(){
		let imgStyle={width: 50, height: 50}
		return(
			<div>
				<div id="search">
					<h1>Search for events: </h1>
					<input onChange={this.handleChange} type="text" name="zipcode" placeholder="Zip Code"></input> 
					
					<img onClick={this.makeQuery} src={require('./style/images/search-icon.png')} alt="search-icon" style={imgStyle} />
				</div>
				<div >
					<select onChange={this.handleChange} value={this.state.price}>
						<option value='1'>Free</option>
					</select>
			    </div>
	      </div>
		)
	}
});


export default Search;