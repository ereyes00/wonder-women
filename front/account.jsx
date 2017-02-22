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
      <div className="acctDiv">
        <div className="welcomeBack">
          <div className="title">
            <h2>Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>
          </div>

          <div className="">
            <h3 className="text">Your Account Info:</h3>
            <p className="text"> <b>Name: </b> 
              {this.state.firstName}{' '}{this.state.lastName}
            </p>
            <p className="text"><b>Email: </b> 
              {this.state.email}
            </p>
          </div>
          <hr />
          {
          //<UserBookmarks />
          }
          <div className="">
            <h3 className="text">Your Bookmarked Events:</h3>
            <ul>
              {!this.state.bookmarks ? "You have not Bookmarked any events." : this.state.bookmarks.map((val, idx) => {
                return(
                  <Link to={'/events/' + val.id}><li key={idx}>{val.title}</li>
                  </Link>)
              })}
            </ul>
          </div>
          
          {
          // <div className="">
          //   <h3>Your Created Events:</h3>
          //   <ul className="listStyle">
          //     {!this.state.createdEvents ? "You have not created any events." : this.state.createdEvents.map((val, idx) => {
          //       return(
          //         <Link to={'/events/' + val.id}><li key={idx} className="listStyle"><img src={val.Images[0].url} width="205" height="auto"></img><div className="imageTitle">{val.title}</div></li>
          //         </Link>)
          //     })}
          //   </ul>
          // </div>
          }

          <h3>Your Created Events:</h3>
          <div className="exhibitions-list">
              {!this.state.createdEvents ? "You have not created any events." : this.state.createdEvents.map((val, idx) => {
                return(
                  <Link to={'/events/' + val.id} className="box"><span key={idx} className="box-inside"><img src={val.Images[0].url} width="205" height="auto" className="images"></img><span className="box-text"><p className="box-title">{val.title}</p></span></span>
                  </Link>)
              })}
          </div>

        </div>
            <br /><br />
        <div className="acctButtons">
          <Link to={'/createlocation/'}><button className='button'>Create A Location</button>
          </Link>
          <br />
          <Link to={'/createevent/'}><button className='button'>Create An Event</button>
          </Link>
          <br />
          <br />
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

