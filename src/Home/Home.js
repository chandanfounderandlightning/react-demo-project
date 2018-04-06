import React from 'react';
import Header from '../../src/Header';
import Footer from '../../src/footer';
import { withRouter } from 'react-router-dom';
import content from './content.json';
import banner from './banner.json';
import review from './review.json';
import Listing from '../components/ListingContent/listing'
import Review from '../components/ReviewContent/Review'
import Banner from '../components/BannerContent/banner'

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <div className="container">
                        <div className="row">
                            <Banner data={banner}/>
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