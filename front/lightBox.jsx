const basicLightbox = require('basiclightbox');
//import React from 'react';
import React from 'react';



const Popup = React.createClass({
  render: function () {
    return (
      <div style={alert}>
        <span style={closebtn}>&times;</span> 
        This is an alert box.
      </div>
    )
  }
})

 const alert = {
    padding: '20px',
    backgroundColor: '#f44336', /* Red */
    color: 'white',
    marginBottom: '15px',
}

/* The close button */
 const closebtn = {
    marginLeft: '15px',
    color: 'white',
    fontWeight: 'bold',
    float: 'right',
    fontSize: '22px',
    lineHeight: '20px',
    cursor: 'pointer',
    transition: '0.3s',
}

//  When moving the mouse over the close button 
// .closebtn:hover {
//     color: black;
// }

// const Popup = basicLightbox.create(`
//     <div id="popup">
//     <h1>Dynamic Content</h1>
//     <p>You can set the content of the lightbox with JS.</p>
//     </div>
// `)

export default Popup;
