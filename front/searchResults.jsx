import React from 'react';
import SearchBar from './search.jsx';
import $ from 'jquery';
import './style/listEvents.css';

const SearchResults = React.createClass({
  getInitialState: function(){
    return({ 
      results: null,   
      type: "SearchAll" || this.props.params.type
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

      <div className="results">
        <ul>
          {this.state.results.map((val)=> {
            return(
              <div key={val.id} className="imgResult" >
                {val.Images.length ? 
                  <img className="imgGrid" src={val.Images[0].url} /> 
                  : null} 
                <h3>{val.title}</h3>
                <h3>{val.location}</h3>
              </div>
            )
          })}
        </ul>
      </div>

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
