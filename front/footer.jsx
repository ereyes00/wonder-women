import React from 'react';
import {Link} from 'react-router';

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr className="footerHr" />

        <center>
          <footer className="footer">
            <p><b>Art Gal</b></p>

            <p>
              <a href="https://github.com/ereyes00/wonder-women" target="_blank">Github</a> 
              <a href="https://www.linkedin.com/in/esmeralda-reyes" target="_blank">Esmeralda</a>
              <a href="https://www.linkedin.com/in/salinafu" target="_blank">Salina</a>
              <a href="https://www.linkedin.com/in/shazia-anjum" target="_blank">Shazia</a>
              <a href="https://www.linkedin.com/in/vanessa-montoya-webdev" target="_blank">Vanessa</a>
            </p>

            <Link to={'/contact'}>Contact Us</Link>

          <p>© 2017 Team Wonder Women</p>

          </footer>
        </center>
      </div>
    )
  }
})

export default Footer;
