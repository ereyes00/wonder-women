const basicLightbox = require('basiclightbox');
//import React from 'react';
import React from 'react';



// const Popup = basicLightbox.create({
//   render: function () {
//     return (
//       <div>
//         <h1>Dynamic Content</h1>
//         <p>You can set the content of the lightbox with JS.</p>
//       </div>
//     )
//   }
// })

const Popup = basicLightbox.create(`
    <div>
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
    </div>
`)

export default Popup;
