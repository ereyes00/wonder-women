import React from 'react';
import './style/home.css';

var Home = React.createClass({
	render: function(){
		return(
			<div class="container">
				<div class="carousel">
					<input type="radio" id="carousel-1" name="carousel[]" checked />
					<input type="radio" id="carousel-2" name="carousel[]" />
			     	<input type="radio" id="carousel-3" name="carousel[]" />
					<input type="radio" id="carousel-4" name="carousel[]" />
					<input type="radio" id="carousel-5" name="carousel[]" />
						<ul class="carousel__items">
							<li class="carousel__item"><img src="//lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG" alt="" /></li>
							<li class="carousel__item"><img src="//lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg" alt="" /></li>
							<li class="carousel__item"><img src="//lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg" alt="" /></li>
							<li class="carousel__item"><img src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg" alt="" /></li>
							<li class="carousel__item"><img src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg" alt="" /></li>
						</ul>
						     <div class="carousel__prev">
						     	<label for="carousel-1"></label>
						     	<label for="carousel-2"></label>
						     	<label for="carousel-3"></label>
						     	<label for="carousel-4"></label>
						     	<label for="carousel-5"></label>
						     </div>
						     <div class="carousel__next">
						       <label for="carousel-1"></label>
						       <label for="carousel-2"></label>
						       <label for="carousel-3"></label>
						       <label for="carousel-4"></label>
						       <label for="carousel-5"></label>
						     </div>
						     <div class="carousel__nav">
						       <label for="carousel-1"></label>
						       <label for="carousel-2"></label>
						       <label for="carousel-3"></label>
						       <label for="carousel-4"></label>
						       <label for="carousel-5"></label>
						     </div>
			   	</div>
	 		</div>
		)
	}
})

export default Home;