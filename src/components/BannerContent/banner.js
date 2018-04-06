import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class Banner extends React.Component {
    render() {
        return(
            <div className="col-xs-12 col-sm-6">
	            {this.props.data.map(item=>
	            	<div className="w-100 ">
                    	<div className="col-pre-launch-col new-approach-col flex">
                        	<h1>{item.heading}</h1>
                            <p>{item.paragraph}</p>
                            <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">{item.button}</a>
                            <div className="header-invite full-width">
                            	<small>{item.bottom_content}</small>
                            </div>
                        </div>
                    </div>
	            )}
            </div>
        )
    }
}
