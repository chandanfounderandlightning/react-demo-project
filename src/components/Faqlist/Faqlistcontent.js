import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class Faqlistcontent extends React.Component {
    render() {
        const faqQues = this.props.data.map((item) =>
            <div className="col-xs-12 col-sm-6">
                        <div className="col_services">
                            <h3>{item}</h3>
                        </div>
                    </div>
          );
        return(
            <div className="faq_row">
	             {faqQues}
            </div>
        )
    }
}
