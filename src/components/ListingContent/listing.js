import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class Listing extends React.Component {
    render() {
    	console.log(this.props.data);
        return(
            <div className="service_row">
	            {this.props.data.map(item=>
	            	<div className="col-xs-12 col-sm-4">
	            		<Link to="/about">
		                	<div className="col_services">
		                    	<span className="icon"></span>
		                        <h3>{item.heading}</h3>
		                        <p>{item.paragraph}</p>
		                    </div>
		                </Link>
                	</div>
	            )}
            </div>
        )
    }
}




