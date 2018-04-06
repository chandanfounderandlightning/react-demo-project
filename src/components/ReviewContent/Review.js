import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class Review extends React.Component {
    render() {
        return(
            <div className="review_row">
	            {this.props.data.map(item=>
	            	<div className="col-xs-12 col-sm-4">
	            		<div className="col_services review_col text-center">
		                    <span className="client_pic"><img src={item.clientpic} /></span>
		                    <p>{item.paragraph}</p>
		                    <h3>{item.heading}</h3>
		                </div>
                	</div>
	            )}
            </div>
        )
    }
}
