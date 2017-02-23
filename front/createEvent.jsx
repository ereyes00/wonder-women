import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateEvent = React.createClass({
  getInitialState: function () {
    return {  title: '', featuredArtist: '', price: '', description: '', opening: '', closing: '', image: '', imageTitle:'',location:[], chosenLocationId:0
    }
  },
  componentWillMount: function(){
    //debugger;
    //console.log(currentUser)
    if(!this.context.isUserLoggedin){
      browserHistory.push('/login')
    }
  },
  componentDidMount: function(){
    var userId = this.context.currentUser.id
    //console.log('userid from createEventForm', userId)
    $.ajax({
      url: '/api/location/locationsby/'+ userId,
      type: 'GET'
    })
    .done((data)=> {
      //console.log('data from create event', data)
      this.setState({location:data})
      console.log('location', this.state.location)
    })
  },
  addEvent: function (e) {
    e.preventDefault();
    var toSend = Object.assign({}, this.state, {userId:this.context.currentUser.id})
    $.ajax({
      url: '/api/event',
      method: 'POST',
      data: toSend,
    })
    .done((data) => {
      console.log('Event has been created.');
      browserHistory.push('/account');
      // after submitting new event, user will be brought back to their acct page.
    });
  },
  handleLocation: function(e){
    console.log('EVENT', e.target.value);
    if(e.target.value === "Create a new location"){
      browserHistory.push('/createlocation')
    } else {
    this.setState({chosenLocationId: e.target.value})
    }
  },
  handleChange(e) {
    //console.log('event from handleChange', e)
    this.setState({[e.target.name]: e.target.value})
  }, 
  render: function () {
    return (
      <center>
        <div className="createEventForm pageContent">
          
          <h2 className='headerCreate'>Create An Event</h2>
          
          <form onSubmit={this.addEvent} className='createEvent'>
            <br />
            
            <input 
              type="text"
              name="title"
              className="inputEvent"
              placeholder="Event Title"
              onChange={this.handleChange} 
            />
            <br /><br />
            
            <select  name="location" 
            placeholder=""
            onChange={this.handleLocation}>
              <option>Create a new location</option>
              {
              this.state.location ?
              this.state.location.map((ele, idx)=> (<option value={ele.id}>{ele.location}</option>)) : <option></option>
              }
              
            </select>
            <br /><br />

            <input 
              type="text"
              name='featuredArtist'
              className="inputEvent"
              placeholder="Featured Artist"
              onChange={this.handleChange}
            />
            <br /><br />

            <input 
              type="text"
              name="image"
              className="inputEvent"
              placeholder="Event Image Link"
              onChange={this.handleChange} 
            />
            <br /><br />

            <input 
              type="text"
              name="imageTitle"
              className="inputEvent"
              placeholder="Image Title"
              onChange={this.handleChange} 
            />
            <br /><br />            

            <input 
              type="text"
              name="price"
              className="inputEvent"
              placeholder="Entry Fee"
              onChange={this.handleChange} 
            />
            <br /><br />

            <input 
              type="text"
              name="description"
              className="inputEvent"
              placeholder="Description"
              onChange={this.handleChange}
            />
            <br /><br />
            
            <div>
              Opening Day:
              <br />
              <input 
                type="date"
                name="opening"
                className="cal"
                onChange={this.handleChange} 
              />
            </div>
            <br />

            <div>
              Closing Day:
              <br />
              <input 
                type="date"
                name="closing"
                className="cal"
                onChange={this.handleChange} 
              />
            </div>
            <br />

            <input type="submit"
            className="button"
            id="submit"
            value="Submit" />

          </form>
        </div>
      </center>
    );
  }
});

CreateEvent.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.boolean
}

export default CreateEvent;
