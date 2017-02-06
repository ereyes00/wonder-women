import $ from 'jquery';
import './style/event.css';

const React = require('react');

const Event = React.createClass({
  getInitialState: function () {
    return ({
      title: '', location: '', opening: "", closing: "", hours: "" , price: "", feauredArtist: "", description: "", streetAddress: '', city: "", zipcode: 0, type:'', images:[]
    });
  },
  componentDidMount: function () {
      $.ajax({
      url: '/api/events/' + this.props.params.id,
      type: 'GET'
    })
    .done((data) => {
      console.log('image', data.Images[0].url)
      //console.log('this is the response from the get call on single',data)
      this.setState({ images: data.Images[0].url,title: data.title, location: data.location, opening: data.opening, closing: data.closing, hours: data.hours , price: data.price, featuredArtist: data.featuredArtist, description: data.description, streetAddress: data.streetAddress, city: data.city, zipCode:data.zipCode, type:data.type});
    })
  },  
  render: function () {
      return(
        <div>
          <div>
            <h1 className="event">{this.state.title}</h1>
          </div>

           <p><img src={this.state.images}/></p>

           <p><strong>Location:</strong> {this.state.location}</p>
           
           <p><strong>Address:</strong> {this.state.streetAddress}, {this.state.city}, {this.state.zipCode}</p>

           <p><strong>Opening:</strong> {this.state.opening}</p>

           <p><strong>Closing:</strong> {this.state.closing}</p>

           <p><strong>Hours:</strong> {this.state.hours}</p>

           <p><strong>Price: </strong>{this.state.price}</p>

           <p><strong>Artist:</strong> {this.state.featuredArtist}</p>

           <p><strong>Description: </strong></p>
           <p>{this.state.description}</p>

           <button>Bookmark</button>
        </div>
      )
  }
});

export default Event;
