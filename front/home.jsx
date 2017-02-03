import React from 'react';

import CarouselHome from './carousel.jsx'
//var Slider = require('react-slick');

// import Slider from '../src/slider'
// import {baseUrl} from './config'

var Home = React.createClass({
  render: function() {
    return (
    	<center><div >
    		<img className="homeImg" src='https://www.brooklynmuseum.org/assets/system-images/made/assets/system-images/remote/https_d1lfxha3ugu3d4.cloudfront.net/exhibitions/images/2016_Pretty_Dirty_Marilyn_Minter_Blue_Poles_2000w_600_494.jpg' />

    		<img className="homeImg1" src="https://www.pratt.edu/tiny_mce/plugins/imagemanager/files/Heaton--Spent_Flower%2C_2015.jpg" />
      </div></center>
    )
  }
})

export default Home;
