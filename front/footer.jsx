import React from 'react';
import {Link} from 'react-router';
import './style/footer.css';

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr className="footerHr" />

        <center>
          <footer className="footer">
            <p><b>Art Gal</b></p>

            <p>
              <a href="https://github.com/ereyes00/wonder-women" target="_blank"><img className="github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png" /></a> 
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
