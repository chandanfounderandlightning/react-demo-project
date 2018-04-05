import React from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import content from './content.json';
import Listing from '../components/ListingContent/listing'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-7">
                                <div className="col-pre-launch-col new-approach-col flex">
                                    <div className="rectangle"></div>
                                    <h1>Buying new homes entirely online</h1>
                                    <p>newbricks offers a pioneering approach to search for and buy new homes entirely online offering investors and owner occupiers unrivalled access to London’s most sought after developments.</p>
                                    <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">Please register for updates</a>
                                    <div className="header-invite full-width">
                                    <small>The simplest way to keep up-to-date with new releases and offers</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="service_section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4">
                                    <div className="col_services">
                                        <span className="icon"></span>
                                        <h3>{this.props.heading}</h3>
                                        <p>We utilise lean and agile techniques to ensure we get your startup to market as fast as possible. We do this because we want to truly understand the value that users are seeking. Despite using a fast approach, we never compromise on quality.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="col_services">
                                        <span className="icon"></span>
                                        <h3>Heading Demo Two</h3>
                                        <p>We utilise lean and agile techniques to ensure we get your startup to market as fast as possible. We do this because we want to truly understand the value that users are seeking. Despite using a fast approach, we never compromise on quality.</p>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-sm-4">
                                    <div className="col_services">
                                        <span className="icon"></span>
                                        <h3>Heading Demo Three</h3>
                                        <p>We utilise lean and agile techniques to ensure we get your startup to market as fast as possible. We do this because we want to truly understand the value that users are seeking. Despite using a fast approach, we never compromise on quality.</p>
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

export default withRouter(Home);