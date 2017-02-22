import React from 'react';
import $ from 'jquery';
import CreateEvent from './createEvent';
import CreateLocation from './createLocation';
import UserBookmarks from './userBookmarks';
import {Link, browserHistory} from 'react-router';
import './style/account.css';

const Account = React.createClass({
  getInitialState: function () {
    return { createdEvents: null, firstName: '', lastName: '', email: '', bookmarks: null, image: null,//id: 0 
    };
  },
  componentWillMount: function(){
    //debugger;
    //console.log(currentUser)
    if(!this.context.isUserLoggedin){
      browserHistory.push('/login')
    }
  }, 
  componentDidMount: function () {
    var userId = this.context.currentUser.id
    $.ajax({
      url: '/api/user/'+ userId,
      type: 'GET',
    })
    .then((user) => {
      console.log('user', user)
      this.setState({ firstName: user.firstName, lastName: user.lastName, email: user.email, //id: user.id 
      })

      $.ajax({
        url: '/api/user/' + userId + '/createdEvents',
        type: 'GET'
      })
      .then((events) => {
        //console.log('image', events[0].Images[0].url);
        this.setState({ createdEvents: events, image: events[0].Images[0].url });
      })

      $.ajax({
        url: '/api/user/' + userId + '/bookmarks',
        type:'GET'
      })
      .then((bookmarks) => {
        //console.log("BOOKMARKS", bookmarks);
        this.setState({ bookmarks: bookmarks });
      })
    })
  },
  render: function () {
    return (
      <div className="welcomeBack">

            <h2>Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>

            <h3 className="text">Your Account Info:</h3>
            <p className="text"> <b>Name: </b> 
              {this.state.firstName}{' '}{this.state.lastName}
            </p>
            <p className="text"><b>Email: </b> 
              {this.state.email}
            </p>

            <hr />
          {
          //<UserBookmarks />
          }
            <h3 className="text">Your Bookmarked Events: </h3>
            <ul>
              {!this.state.bookmarks ? "You have not Bookmarked any events." : this.state.bookmarks.map((val, idx) => {
                return(
                  <Link to={'/events/' + val.id}><li key={idx}>{val.title}</li>
                  </Link>)
              })}
            </ul>

          <h3>Your Created Events: </h3>
          <div className="exhibitions-list">
              {!this.state.createdEvents ? "You have not created any events." : this.state.createdEvents.map((val, idx) => {
                return(
                  <Link to={'/events/' + val.id} ><span key={idx} className="box"><span className="box-text">{val.title}</span><span className="image-container"><img src={val.Images[0].url} className="images"></img></span></span>
                  </Link>)
              })}
          </div>
            <div className="acctButtons">
              <Link to={'/createlocation/'}><button className='button'>Create A Location</button>
              </Link>
              <br />
              <Link to={'/createevent/'}><button className='button'>Create An Event</button>
              </Link>
            </div>
      </div>
    );
  }
});

Account.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.boolean
}

 export default Account;

