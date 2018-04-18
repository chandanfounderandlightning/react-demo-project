import React from 'react';
import { withRouter, Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
   return(
   <div>
    <header>
        <nav className="navbar navbar-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/"><img src="images/logo-text.svg" /></a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/faq">Faq</Link></li>
                    <li><Link to="#">Contact us</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    </div>
   )
  }
}

export default withRouter(Header);