import React from 'react';
import SearchBar from './search.jsx';
import NukaCarousel from './nuka-carousel.jsx'
import './style/home.css';

var Home = React.createClass({
  render: function() {
    return (
	    <div >
	    	<SearchBar />
				<h2 className="title">Find your next art escape.</h2>
	    	<NukaCarousel />
	    </div>
    )
  }
})

export default Home;
