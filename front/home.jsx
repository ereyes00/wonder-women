import React from 'react';
//import './style/home.css';

var Home = React.createClass({
	// componentDidMount: function(){
	//     $(document).ready(function(){
	//       $('.multiple-items').slick({
	//           infinite: true,
	//  		  slidesToShow: 3,
	//   		  slidesToScroll: 3
	//       });
	//     });
	// },
	render: function(){
		return(
			<div className="single-item">
			
				<div><img src="//lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG" alt="" /></div>
				<div><img src="//lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg" alt="" /></div>
				<div><img src="//lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg" alt="" /></div>
				<div><img src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg" alt="" /></div>
				<div><img src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg" alt="" /></div>
			</div>

		)
	}
})

export default Home;