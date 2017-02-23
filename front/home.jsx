import React from 'react';
import SearchBar from './search.jsx';
import NukaCarousel from './nuka-carousel.jsx'
import './style/home.css';

var Home = React.createClass({
  render: function() {
    return (
	    <div >
	    	<SearchBar />		
	    	
	    	<div className="pageContent">
	    		<NukaCarousel />
	    	</div>
	    </div>
    )
  }
})

export default Home;
