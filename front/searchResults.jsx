import React from 'react';
import SearchBar from './search.jsx';
import $ from 'jquery';

const SearchResults = React.createClass({
  getInitialState: function(){
    return({results: null, zipCode: this.props.params.zipCode, type: this.props.params.type, dateStart: this.props.params.dateStart || '', dateEnd: this.props.params.dateEnd || ''})
  },
  searchData: function(){
    $.ajax({
      url: '/api/events/search' ,
      method: 'GET',
      data: this.state
    })
    .done((results)=>{
      console.log("Search is successful.")
      console.log('results', results)
      this.setState({results: results})
    }) 
  },
  componentDidMount: function(e){
    this.searchData()
  },
  render: function(){
    if(this.state.results){
    return(
      <div className="results">
        <div className="imgResult">
          <ul>
            {this.state.results.map((val)=> {
              return(
                <div key={val.id} >
                <img className="imgGrid" src={val.Images[0].url} />
                <h3>{val.title}</h3>
                <h3>{val.location}</h3>
                </div>
              )
            })}
          </ul>

        </div>
      </div>
    )
  } else {
    return(<div>Loading...</div>)

  }
  }
})

export default SearchResults;