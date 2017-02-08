import $ from 'jquery';

const React = require('react');

const MapDisplay = React.createClass({
  componentDidMount: function () {
  	 const {streetAddress, city, state } = this.props

  	 this.initMap(streetAddress, city, state)
  }, 
  componentDidUpdate: function(){
  	const {streetAddress, city, state } = this.props
  	this.initMap(streetAddress, city, state)
  },
  initMap: function(streetAddress, city, state) {
  	 
  	 if(streetAddress === ''  || !this.mapDiv) {
  	 	console.log('returning null')
  	 	console.log('street: ', streetAddress)
  	 	  	 	console.log('mapDiv: ', this.mapDiv)

  	 	return
  	 } 
  	 	// this.didDraw = true
  	 console.log('drawing map')
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + streetAddress +','+ city +','+ state + '&' + 'key=AIzaSyDcWNv7pwJQQuPEeMdAXALbn-xbRVd8yIo'
      })
      .done((data) => {
        var lat = data.results[0].geometry.location.lat;
        var lng= data.results[0].geometry.location.lng;
      
    var mapOptions = {
      center:{lat: lat, lng: lng},
      zoom: 11
    };
    //console.log('mapOptions',mapOptions)

    var map = new google.maps.Map(this.mapDiv, mapOptions);

    //console.log('map',map)

    var marker = new google.maps.Marker({
      position: mapOptions.center,
      map: map
    });

    //console.log('marker',marker)
    })
    // return Object.assign({}, state, {map, marker});
  },
  render: function () {
    //this.initMap();
    var mapStyle= {
      height: "400px",
      width: '400px'
    };
      return(
           <div style={mapStyle} ref={(el)=>{if(el)
            this.mapDiv = el}}></div>
      )
  }
});

MapDisplay.defaultProps = {
	height: '500px'
}

export default MapDisplay;



