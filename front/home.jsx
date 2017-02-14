import React from 'react';
import SearchBar from './search.jsx';
import NukaCarousel from './nuka-carousel.jsx'
import './style/home.css';

var Home = React.createClass({
  render: function() {
    return (
	    <div >
	    <h2 className="homeTitle">Find your next art escape.</h2>
	    	<SearchBar />				
	    	<NukaCarousel />
	    </div>
    )
  }
})

export default Home;
