'use strict';

var React = require('react');
var Carousel = require('nuka-carousel');
import $ from 'jquery';
import './style/carousel.css';
import {Link} from 'react-router';

const NukaCarousel = React.createClass({
  // mixins: [Carousel.ControllerMixin],
  getInitialState: function() {
    return ({image1: '', image2:'', image3:'', image4:'', image5:'', image6: '', image7: ''})
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/event',
      type: 'GET'
    })
    .done((data) => {
      this.setState({image1: data[0].Images[0].url, image2: data[23].Images[0].url, image3: data[2].Images[0].url, image4: data[3].Images[0].url, image5: data[14].Images[0].url, image6: data[5].Images[0].url, image7: data[21].Images[0].url});
    })
  },
 
  render() {
    return (
      <center>
        <div>
        <hr className="carouselHr" />
          <div className="Carousel">
            <h2><i>Featured Events</i></h2>
              <Carousel 
              width={"95%"} 
              wrapAround={true}
              slideWidth={0.35} 
              cellSpacing={20} 
              autoplay={true} 
              autoplayInterval={2000}>

              <div className="eventItem">
                <p><i>"Blue Poles"</i></p>
                <Link to={'/events/1'}><img className="caroImg" src={this.state.image1}/> </Link>
              </div>

              <div className="eventItem">
              <p><i>"Jones Street"</i></p>
                <Link to={'/events/24'}><img className="caroImg" src={this.state.image2}/> </Link>              
              </div>

              <div className="eventItem">
              <p><i>"Body Meets Dress - Dress Meets Body"</i></p>
                <Link to={'/events/3'}><img className="caroImg" src={this.state.image3}/></Link>   
              </div>

              <div className="eventItem">
               <p><i>"Dyslexia"</i></p>
                <Link to={'/events/4'}><img className="caroImg" src={this.state.image4}/></Link>
              </div>

              <div className="eventItem">
              <p><i>"Steppenwolf"</i></p>
                <Link to={'/events/15'}><img className="caroImg" src={this.state.image5}/></Link>
              </div>

              <div className="eventItem">
                <p><i>"Hattie_McDaniel"</i></p>
                <Link to={'/events/6'}><img className="caroImg" src={this.state.image6}/></Link>
              </div>

              <div className="eventItem">
              <p><i>"Cotton Candy"</i></p>
                <Link to={'/events/22'}><img className="caroImg" src={this.state.image7}/></Link>
              </div>

              </Carousel>
          </div>
        </div>
      </center>
    )
  }
});

export default NukaCarousel;