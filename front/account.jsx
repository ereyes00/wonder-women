import React from 'react';
import $ from 'jquery';
import CreateEvent from './createEvent';
import CreateLocation from './createLocation';
import UserBookmarks from './userBookmarks';
import {Link, browserHistory} from 'react-router';
import './style/account.css';

const range = num => {
  var retVal = []
  for (var i = 0; i < num; i++) {
    retVal.push(i)
  }
  return retVal
}

const partition = (num, arr) => {
  const size = Math.floor(arr.length / num)
  const buckets = range(num).map(i => {
    const offset = i * size
    return arr.slice(offset, offset + size)
  })
  const numRemaining = arr.length - (size * num)
  if (numRemaining) {
    let lastBucket = buckets[buckets.length-1]
    buckets[buckets.length-1] = lastBucket.concat(arr.slice(-numRemaining))
  }
  return buckets
}



const Account = React.createClass({
  getInitialState: function () {
    return { createdEvents: null, firstName: '', lastName: '', email: '', bookmarks: null, image: null,//id: 0 
    };
  },
  componentWillMount: function(){
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
        this.setState({ bookmarks: bookmarks });
      })
    })
  },

  renderEvent: function(val) {
    return (
      <div key={val.id} className="picDiv">              
        <Link to={'/events/' + val.id}>
          <img className="pic" src={val.Images[0].url} />
        </Link>   

        <Link to={'/events/' + val.id}>
          <h4 className="extitle">{val.title}</h4><br/>
        </Link>
      </div>
    )
  },

  render: function () {
      if (this.state.bookmarks){
      //console.log('bookmarks: ', this.state.bookmarks)
      //console.log('partition: bookmarks: ', partition(3, this.state.bookmarks))
    return (
      <div className="pageContent">
        <div className = "UserDetails">
          <h2>Welcome back, {this.state.firstName ? this.state.firstName : null}</h2>
          Join Art Gal in creating a more inclusive and vibrant community <br />by creating and sharing events.
          <br /><br />
          <Link to = '/createEvent'><button className="button acctCreate">Create Event</button></Link>
        </div>

        <div className="paintDiv">
          <img className="paintImg" src="http://downloads.capta.org/images/ref/VisualArts.jpg" />
        </div>

          <br /><br />

          <h3 className="text">Your Bookmarked Events</h3>
          
          <div className="columnContainer"> {
            !this.state.bookmarks ? "You have not Bookmarked any events." : 
                partition(3, this.state.bookmarks).map((bucket, i) => {
                  return (
                    <div className="bucket" key={'bucket' + i}>
                     {bucket.map(this.renderEvent)}
                    </div>              
                  )
                })
             }
          </div>

          {
          // <div className="exhibitions-list">
          //   {!this.state.bookmarks ? "You have not Bookmarked any events." : this.state.bookmarks.map((val, idx) => {
          //       return(
          //         <Link to={'/events/' + val.id}>
          //           <span key={idx} className="box">
          //             <span className="box-text"><b>{val.title}</b> 
          //               <br />
          //               Closing: {val.closing}
          //             </span>
          //             <span className="image-container">
          //               <img src={val.Images[0].url} className="images"></img>
          //             </span>
          //           </span>
          //         </Link>)
          //     })}
          // </div>
          }

          <hr className="acctHr" />
          <br />

          <h3 className="text">Your Created Events</h3>

          <div className="columnContainer"> {
            !this.state.createdEvents ? "You have not created any events." :
                partition(3, this.state.createdEvents).map((bucket, i) => {
                  return (
                    <div className="column" key={'bucket' + i}>
                     {bucket.map(this.renderEvent)}
                    </div>              
                  )
                })
             }
          </div>
          
          {
          // <div className="exhibitions-list">
          //     {!this.state.createdEvents ? "You have not created any events." : this.state.createdEvents.map((val, idx) => {
          //       return(
          //         <Link to={'/events/' + val.id} >
          //           <span key={idx} className="box">
          //             <span className="box-text"><b>{val.title}</b></span>
          //               <span className="image-container">
          //                 <img src={val.Images[0].url} className="images"></img>
          //               </span>
          //           </span>
          //         </Link>)
          //     })}
          // </div>
          }
      </div>
    );
        } else {
      return (<div>Loading...</div>)
    }
  }
});

Account.contextTypes = {
  currentUser: React.PropTypes.object,
  isUserLoggedin: React.PropTypes.boolean
}

 export default Account;

