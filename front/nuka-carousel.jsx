'use strict';

var React = require('react');
var Carousel = require('nuka-carousel');
import $ from 'jquery';
import './style/carousel.css';
//import {Link} from 'react-router';

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
              autoplayInterval={2500}>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image1}/>
                <p><i>Blue Poles</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image2}/>
                  <p><i>Jones Street</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image3}/>
                  <p><i>Body Meets Dress - Dress Meets Body</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image4}/>
                  <p><i>Dyslexia</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image5}/>
                  <p><i>Steppenwolf</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image6}/>
                  <p><i>Hattie_McDaniel</i></p>
              </div>
              <div className="eventItem">
                <img className="caroImg" src={this.state.image7}/>
                  <p><i>Cotton Candy</i></p>
              </div>
              </Carousel>
          </div>
        </div>
      </center>
    )
  }
});

export default NukaCarousel;