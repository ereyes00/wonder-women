import React from 'react';
import {Link} from 'react-router';
import './style/footer.css';

var Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr className="footerHr" />
          <footer className="footer">

            <div className="team">
              <ul>

               <li>
                <a href="https://www.linkedin.com/in/salinafu" target="_blank">Salina</a>
               </li>

               <li>
                <a href="https://www.linkedin.com/in/shazia-anjum" target="_blank">Shazia</a>
               </li>

               <li>
                 <a href="https://www.linkedin.com/in/vanessa-montoya-webdev" target="_blank">Vanessa</a>
               </li>

               <li>
                <a href="https://www.linkedin.com/in/esmeralda-reyes" target="_blank">Esmeralda</a>
               </li>

              </ul>
            </div>

            <div className="extra">
              <ul>
                <li>
                  <a href="/">Art Gal</a>
                </li>

                <li>
                  <a href="www.c4q.nyc">C4Q</a>
                </li>

                <li>
                  <a href="#">About</a>
                </li>

                <li>
                  <a href="/contact">Contact Us</a>
                </li>

                 <li>
                  <a href="https://github.com/ereyes00/wonder-women" target="_blank">
                    Github  
                    <img className="github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png" />

                  </a>
               </li>

              </ul>
            </div>
          </footer>
      </div>
    )
  }
})

export default Footer;


