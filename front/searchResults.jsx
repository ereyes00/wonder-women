import React from 'react';
import SearchBar from './search.jsx';
import $ from 'jquery';
import {Link} from 'react-router';
import './style/searchResults.css';

const range = num => {
  var retVal = []
  for (var i = 0; i < num; i++) {
    retVal.push(i)
  }
  return retVal
}

const partition = (num, arr) => {
  const size = Math.floor(arr.length / num)
  const buckets = range(num).map(i => {
    const offset = i * size
    return arr.slice(offset, offset + size)
  })
  const numRemaining = arr.length - (size * num)
  if (numRemaining) {
    let lastBucket = buckets[buckets.length-1]
    buckets[buckets.length-1] = lastBucket.concat(arr.slice(-numRemaining))
  }
  return buckets
}

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

  renderEvent: function(val) {
    return (
      <div key={val.id} className="imgDiv">              
        <Link to={'/events/' + val.id}>
          <img className="image" src={val.Images[0].url} />
        </Link>   

        <Link to={'/events/' + val.id}>
          <h2 className="extitle">{val.title}</h2>
        </Link>

        <h3 className="exLocate">{val.Location.location}</h3>
      </div>
    )
  },

  render: function(){
    if(this.state.results){
      var query = this.props.location.query;
    // if (this.state.eventMonth){
    //   console.log('eventmonths: ', this.state.eventMonth)
    //   console.log('partition: eventmonths: ', partition(3, this.state.eventMonth))
    
    return(
 
      <div>

      <SearchBar 
      zipCode={query.zipCode}
      type={this.state.type}
      dateStart={query.dateStart}
      dateEnd={query.dateEnd}
      />

      <center><div className="pageContent">
        <br />
        <h2 className="resultsTitle">
          <i>Search Results</i>
        </h2>

            <div className="columnContainer">
                {partition(3, this.state.results).map((bucket, i) => {
                  return (
                    <div className="column" key={'bucket' + i}>
                     {bucket.map(this.renderEvent)}
                    </div>                  
                  )
                })
               }
            </div>

          {
          // {this.state.results.map((val)=>{
          //   return(
          //     <div key={val.id} className="imgDiv">
          //       {
          //         val.Images.length ? 
          //         <Link to={'/events/' + val.id}>
          //           <img className="image" src={val.Images[0].url} /> 
          //         </Link>
          //         : null
          //       } 
          //       <Link to={'/events/' + val.id}><h2 className="extitle">{val.title}</h2></Link>
          //       <h3 className="exLocate">{val.Location.location}</h3>
          //     </div>
          //   )
          // })}
        }
        
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
