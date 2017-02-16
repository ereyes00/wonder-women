import React from 'react';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import './style/createEvent.css';

const CreateEvent = React.createClass({
  getInitialState: function () {
    return {  title: '', featuredArtist: '', price: '', description: '', opening: '', closing: '', image: '', imageTitle:'',location:[], chosenLocationId:0,//,userId: this.context.currentUser.id,
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
    //e.preventDefault();
    var userId = this.context.currentUser.id
    //console.log('userid from createEventForm', userId)
    // var toSend = Object.assign({}, this.state, {userId:this.context.currentUser.id})
    $.ajax({
      url: '/api/location/locationsby/'+ userId,
      type: 'GET'
    })
    .done((data)=> {
      //console.log('data from create event', data)
      //if(data){}
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
    this.setState({chosenLocationId: e.target.value})
  },
  handleChange(e) {
    //console.log('event from handleChange', e)
    this.setState({[e.target.name]: e.target.value})
  }, 

// add a dropdown with the user's list of locations based on userId

  render: function () {
    // if(this.state.location.length !== 0){
    //   var rawLocation = this.state.location;
    //   var locationName = [];
    //   rawLocation.forEach(function(val, index) {
    //     locationName.push(<option>{val.location}</option>);
    //     console.log("================>",locationName);
    //   });        
    // } 
    // else {
    //   let locationName = [<option></option>];
    // }
    return (
      <center>
        <div className="createEventForm">
          
          <h2 className='headerCreate'>Create An Event</h2>
          
          <form onSubmit={this.addEvent} className='createEvent'>
            <br /><br />
            
            Event Title:
            <br />
            <input 
              type="text"
              name="title"
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />
            

            Location:
            <br />

            <select  name="location" onChange={this.handleLocation}
            >    {
              this.state.location ?
              this.state.location.map((ele, idx)=> (<option value={ele.id}>{ele.location}</option>)) : <option></option>
              }
              {
              // if(this.state.location.length !== 0){
              //     var rawLocation = this.state.location;
              //     var locationName = [];
              //     rawLocation.forEach(function(val, index) {
              //       locationName.push(<option>{val.location}</option>);
              //       console.log("================>",locationName);
              //     });        
              //   } 
              //   else {
              //     let locationName = [<option></option>];
              //   }
              //{locationName}
              }
              
            </select>
            <br /><br />


            Featured Artist:
            <br />
            <input 
              type="text"
              name='featuredArtist'
              className="inputEvent"
              onChange={this.handleChange}
            />
            <br /><br />

            Event Image Link:
            <br />
            <input 
              type="text"
              name="image"
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />

            Image Title:
            <br />
            <input 
              type="text"
              name="imageTitle"
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />            

            Price:
            <br />
            <input 
              type="text"
              name="price"
              className="inputEvent"
              onChange={this.handleChange} 
            />
            <br /><br />

            Description:
            <br />
            <input 
              type="text"
              name="description"
              className="inputEvent"
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
            <br /><br />

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
            <br /><br />

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
