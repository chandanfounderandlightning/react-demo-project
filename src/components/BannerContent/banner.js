import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class Banner extends React.Component {
    render() {
    	const {data} = this.props;
        return(
            <div className="col-xs-12 col-sm-6">
	            	<div className="w-100 ">
                    	<div className="col-pre-launch-col new-approach-col flex">
                        	<h1>{data.heading}</h1>
                            <p>{data.paragraph}</p>
                            <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">{data.button}</a>
                            <div className="header-invite full-width">
                            	<small>{data.bottom_content}</small>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
