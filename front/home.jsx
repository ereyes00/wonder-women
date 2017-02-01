import React from 'react';

import CarouselHome from './carousel.jsx'
//var Slider = require('react-slick');

// import Slider from '../src/slider'
// import {baseUrl} from './config'

var Home = React.createClass({
  render: function() {
    return (
    	<div >
    		<CarouselHome />
        </div>
    )
  }
})

export default Home;

	  //  //  var style = {
	  //  //    margin: "0 auto",
		 //  // padding: 40,
		 //  // width: "80%",
		 //  // background: "#419be0"
	  //  //  };
	  //   return (
	  //   	<div>
		 //      <Slider {...settings}>
		 //        <div><img src="http://cbsnews3.cbsistatic.com/hub/i/2016/03/26/ef629548-5dd6-4d6e-a62a-c6cdf3e60142/5040fbb95099ffe8ab12e0e12ab36e34/jelly-bean-art-starry-night-620.jpg" alt="" /></div>
		 //        <div><img src="http://rawvision.com/sites/default/files/whatisoa/artbrut.jpg" alt="" /></div>
		 //        <div><img src="http://www.artres.com/Doc/ART/Media/TR3/S/K/C/L/ART138918.jpg" alt="" /></div>
		 //      </Slider>
	  //      </div> 
	  //   );
	  // }	

// <div className="container">
// 				<div className="carousel">
// 					<input type="radio" id="carousel-1" name="carousel[]" checked />
// 					<input type="radio" id="carousel-2" name="carousel[]" />
// 			     	<input type="radio" id="carousel-3" name="carousel[]" />
// 					<input type="radio" id="carousel-4" name="carousel[]" />
// 					<input type="radio" id="carousel-5" name="carousel[]" />
// 						<ul className="carousel__items">
// 							<li className="carousel__item"><img src="//lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG" alt="" /></li>
// 							<li className="carousel__item"><img src="//lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg" alt="" /></li>
// 							<li className="carousel__item"><img src="//lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg" alt="" /></li>
// 							<li className="carousel__item"><img src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg" alt="" /></li>
// 							<li className="carousel__item"><img src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg" alt="" /></li>
// 						</ul>
// 						     <div className="carousel__prev">
// 						     	<label for="carousel-1"></label>
// 						     	<label for="carousel-2"></label>
// 						     	<label for="carousel-3"></label>
// 						     	<label for="carousel-4"></label>
// 						     	<label for="carousel-5"></label>
// 						     </div>
// 						     <div className="carousel__next">
// 						       <label for="carousel-1"></label>
// 						       <label for="carousel-2"></label>
// 						       <label for="carousel-3"></label>
// 						       <label for="carousel-4"></label>
// 						       <label for="carousel-5"></label>
// 						     </div>
// 						     <div className="carousel__nav">
// 						       <label for="carousel-1"></label>
// 						       <label for="carousel-2"></label>
// 						       <label for="carousel-3"></label>
// 						       <label for="carousel-4"></label>
// 						       <label for="carousel-5"></label>
// 						     </div>
// 			   	</div>
// 	 		</div>
// 		)
// 	}