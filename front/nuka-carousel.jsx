'use strict';

var React = require('react');
var Carousel = require('nuka-carousel');
import $ from 'jquery';
import './style/carousel.css';
//import {Link} from 'react-router';

const NukaCarousel = React.createClass({
  // mixins: [Carousel.ControllerMixin],
  getInitialState: function() {
    return ({image1: '', image2:'', image3:'', image4:'', image5:'', image6: ''})
  },
  componentDidMount: function() {
    $.ajax({
      url: '/api/events',
      type: 'GET'
    })
    .done((data) => {
      //console.log('data', data[0].Images[0].url)
      this.setState({image1: data[0].Images[0].url, image2: data[1].Images[0].url, image3: data[2].Images[0].url, image4: data[3].Images[0].url, image5: data[4].Images[0].url, image6: data[5].Images[0].url});
    })
  },
  
  render() {
    return (
        <Carousel slideWidth={0.35} cellSpacing={20}>
          <img className="carouselImg" src={this.state.image1}/>
          <img className="carouselImg"  src={this.state.image2}/>
          <img className="carouselImg"  src={this.state.image3}/>
          <img className="carouselImg"  src={this.state.image4}/>
          <img className="carouselImg"  src={this.state.image5}/>
          <img className="carouselImg"  src={this.state.image6}/>
        </Carousel>
    )
  }
});

export default NukaCarousel;