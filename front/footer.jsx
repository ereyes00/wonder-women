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
                <a href="https://github.com/ereyes00/wonder-women" target="_blank">
                  <img className="github" src="https://cdn0.iconfinder.com/data/icons/octicons/1024/mark-github-256.png" />
                </a> 
               </li>

               <li>
                <h5><a href="https://www.linkedin.com/in/esmeralda-reyes" target="_blank">Esmeralda</a></h5>
               </li>

               <li>
                <h5><a href="https://www.linkedin.com/in/salinafu" target="_blank">Salina</a></h5>
               </li>

               <li>
                <h5><a href="https://www.linkedin.com/in/shazia-anjum" target="_blank">Shazia</a></h5>
               </li>

               <li>
                 <h5><a href="https://www.linkedin.com/in/vanessa-montoya-webdev" target="_blank">Vanessa</a></h5>
               </li>
              </ul>
            </div>

            <div className="extra">
              <ul>
                <li>
                  <a href="/"><h4><b>Art Gal</b></h4></a>
                </li>

                <li>
                  <h5><a href="www.c4q.nyc">C4Q</a></h5>
                </li>

                <li>
                  <h5><a href="/contact">Contact</a></h5>
                </li>

                <li>
                  <h5><a href="#">About</a></h5>
                </li>

              </ul>
            </div>
          </footer>
      </div>
    )
  }
})

export default Footer;


