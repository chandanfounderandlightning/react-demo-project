import React from 'react';
import Header from '../../src/Header';
import Footer from '../../src/footer';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import { withRouter } from 'react-router-dom';
import Faqlistcontent from '../components/Faqlist/Faqlistcontent'
import Faqcontent from './Faqcontent.json';
import faq from './faq.css';

class Faq extends React.Component {

    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <section className="faq_section">
                        <div className="container">
                            <div className="row">
                                <div className="faq-heading text-center w-100">
                                    <h1>Faq's</h1>
                                </div>
                                <Faqlistcontent data={Faqcontent.questions}/>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default withRouter(Faq);