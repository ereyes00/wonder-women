import $ from 'jquery';

const React = require('react');

const MapDisplay = React.createClass({
  componentDidMount: function () {
  	 const {streetAddress, city, state, zipCode, location } = this.props
  	 this.initMap(streetAddress, city, state, zipCode, location)
  }, 
  componentDidUpdate: function(){
  	const {streetAddress, city, state, zipCode, location } = this.props
  	this.initMap(streetAddress, city, state, zipCode, location)
  },
  initMap: function(streetAddress, city, state, zipCode, location) {	 
  	if(streetAddress === ''  || !this.mapDiv) {
    	 	// console.log('returning null')
    	 	// console.log('street: ', streetAddress)
    	 	// console.log('mapDiv: ', this.mapDiv)
    	 	return
  	} 
  	console.log('drawing map')
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + streetAddress +','+ city +','+ state + '&' + 'key=AIzaSyDcWNv7pwJQQuPEeMdAXALbn-xbRVd8yIo'
    })
    .done((data) => {
      var lat = data.results[0].geometry.location.lat;
      var lng= data.results[0].geometry.location.lng;
      
      var mapOptions = {
        center:{lat: lat, lng: lng},
        zoom: 17
      };

      var contentString =streetAddress+', '+city+', '+state+', '+zipCode;

      var infowindow = new google.maps.InfoWindow({
        content: contentString,
      });

      var map = new google.maps.Map(this.mapDiv, mapOptions);

      var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: location
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    })
  },
  render: function () {
    var mapStyle= {
      height: "350px",
      width: '100%'
    };
    return(
         <div onScroll={(e)=>{e.stopPropagation()
          e.preventDefault()
         }} className={'mapImg'} style={mapStyle} ref={(el)=>{if(el)
          this.mapDiv = el}}></div>
    )
  }
});

// MapDisplay.defaultProps = {
// 	height: '500px'
// }

export default MapDisplay;



