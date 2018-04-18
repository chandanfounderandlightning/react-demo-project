import React from 'react';
import { withRouter, Link} from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return(
      <div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-3">
                <h3>Locations</h3>
                <ul>
                  <li>Kreativ House</li>
                  <li>280 Mare Street</li>
                  <li>Hackney, London</li>
                  <li>E8 1HE</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h3>Useful links</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/faq">Faq</Link></li>
                  <li><Link to="#">Contact us</Link></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h3>Follow us</h3>
                <ul>
                  <li><Link to="#">Facebook</Link></li>
                  <li><Link to="#about">Twitter</Link></li>
                  <li><Link to="#">Linkedin</Link></li>
                  <li><Link to="#">Instagram</Link></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h3>About us</h3>
                <p>Proin posuere, dui vel porttitor blandit, tortor ipsum hendrerit ante, nec condimentum ligula massa vehicula orci.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
     )
  }
}

export default withRouter(Footer);