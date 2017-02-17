import React from 'react';
import SearchBar from './search.jsx';
import $ from 'jquery';
import {Link} from 'react-router';
import './style/openingMonth.css';

const SearchResults = React.createClass({
  getInitialState: function(){ 
    return({ 
      results: null,   
      type: this.props.params.type || "SearchAll"
     })
  },
  searchData: function(){
    if(this.props.location){
      var query = this.props.location.query
      var params = {
        zipCode: query.zipCode,
        type: this.state.type,
        dateStart: query.dateStart,
        dateEnd: query.dateEnd
      }
    } else {
      params = {type: this.props.type}
  }
    
    $.ajax({
      url: '/api/event/search',
      method: 'GET',
      data: params
    })
    .done((results)=>{
      console.log("Search is successful.")
      console.log('results', results)
      this.setState({results: results})
    }) 
  },
  componentDidMount: function(){
    this.searchData()
  },
  render: function(){
    if(this.state.results){
      var query = this.props.location.query
    
    return(
 
      <div>

      <SearchBar 
      zipCode={query.zipCode}
      type={this.state.type}
      dateStart={query.dateStart}
      dateEnd={query.dateEnd}
      />

      <center><div className="results">
        <br />
        <h2 className="resultsTitle"><i>Search Results</i></h2>
        <br />
          {this.state.results.map((val)=> {
            return(
              <div key={val.id} className="imgDiv">
                {val.Images.length ? 
                  <Link to={'/events/' + val.id}><img className="image" src={val.Images[0].url} /> </Link>
                  : null} 
                <h2>{val.Location.location}</h2>
                <Link to={'/events/' + val.id}><h3>{val.title}</h3></Link>

              </div>
            )
          })}
        
      </div></center>

      </div>) 

    } else {
      return(
        <div>
        There are no events that fit your search criteria at this time.
        </div>)
    }
  }
})

export default SearchResults;
