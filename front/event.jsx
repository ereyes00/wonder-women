var React = require('react');
import $ from 'jquery';

var Event = React.createClass({
  getInitialState: function() {
    return ({
      title: '', location:'', opening:"", closing:"", hours:"" , price: "", feauredArtist:"", description: "", streetAddress: '', city:"", zipcode:0, type:''
    });
  },
  componentDidMount: function() {
      $.ajax({
      url: '/api/events/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      //console.log('this is the response from the get call on single',data)
      this.setState({ title: data.title, location: data.location, opening: data.opening, closing: data.closing, hours: data.hours , price: data.price, featuredArtist: data.featuredArtist, description: data.description, streetAddress: data.streetAddress, city: data.city, zipCode:data.zipcode, type:data.type});
    })
  },  
  render: function() {
      return(
        <div>
           <div><h1>{this.state.title}</h1></div>
           <p>Description: {this.state.description}</p>

        </div>
      )
  }
})

module.exports = Event