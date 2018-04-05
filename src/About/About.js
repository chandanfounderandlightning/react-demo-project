import React from 'react';
import Header from '../../src/Header';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import { withRouter } from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <section className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-7">
                                  <HeaderContent />
                                    <div className="col-pre-launch-col new-approach-col flex">
                                        <p>newbricks offers a pioneering approach to search for and buy new homes entirely online offering investors and owner occupiers unrivalled access to London’s most sought after developments.</p>
                                        <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">Please register for updates</a>
                                        <div className="header-invite full-width">
                                            <small>The simplest way to keep up-to-date with new releases and offers</small>
                                        </div>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default withRouter(About);