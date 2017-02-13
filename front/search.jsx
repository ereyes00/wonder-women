import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';
import SearchResults from './searchResults.jsx';
import './style/searchBar.css';

const SearchBar = React.createClass({
  getInitialState: function(){
    return ({zipCode: '', dateStart: '', dateEnd: '', type: "SearchAll"})
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
  render: function(){
    return(
      <div className="Search">
        <form className="SearchForm" >
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

          <Link to={`/results/${this.state.type}/${this.state.zipCode}/${this.state.dateStart}/${this.state.dateEnd}`}>
            <button className="button">Search</button>
          </Link>
        </form>
      </div>
    )
  }
})

export default SearchBar;
