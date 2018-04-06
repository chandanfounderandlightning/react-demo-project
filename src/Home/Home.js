import React from 'react';
import Header from '../../src/Header';
import Footer from '../../src/footer';
import { withRouter } from 'react-router-dom';
import content from './content.json';
import review from './review.json';
import Listing from '../components/ListingContent/listing'
import Review from '../components/ReviewContent/Review'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6">
                                <div className="col-pre-launch-col new-approach-col flex">
                                    <h1>Buying new homes entirely online</h1>
                                    <p>newbricks offers a pioneering approach to search for and buy new homes entirely online offering investors and owner occupiers unrivalled access to London’s most sought after developments.</p>
                                    <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">Please register for updates</a>
                                    <div className="header-invite full-width">
                                    <small>The simplest way to keep up-to-date with new releases and offers</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <div className="banner_col flex">
                                    <img className="img-responsive" src="images/banner2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="service_section">
                        <div className="container">
                            <div className="row"> 
                               <Listing data={content}/>
                            </div>
                        </div>
                    </section>
                    <section className="review_section">
                        <div className="container">
                            <div className="row">
                                <div className="client_review w-100">
                                    <h2>Review From Our Clients</h2>
                                    <Review data={review}/>
                                    <span className="slider_icon">
                                        <ul className="text-center">
                                            <li></li>
                                            <li className="active"></li>
                                            <li></li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(Home);