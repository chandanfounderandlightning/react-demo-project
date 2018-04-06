import React from 'react';
import Header from '../../src/Header';
import Footer from '../../src/footer';
import HeaderContent from '../components/HeaderContent/HeaderContent';
import { withRouter } from 'react-router-dom';
import headercontent from './headercontent.json';
import Banner from '../components/BannerContent/banner'

class About extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className="App">
                    <section className="banner">
                        <div className="container">
                            <div className="row">
                               <Banner data={headercontent}/>
                               <div className="col-xs-12 col-sm-6">
                                    <div className="banner_col flex">
                                    <img className="img-responsive" src="images/banner2.png" />
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </section>
                    <section className="about_section">
                        <div className="container">
                            <div className="row">
                                <div className="about_content">
                                    <div className="col-xs-12 col-sm-12">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
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

export default withRouter(About);