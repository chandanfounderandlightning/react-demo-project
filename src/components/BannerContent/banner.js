import React from 'react';
import { withRouter, Link} from 'react-router-dom';
import Popup from '../../Home/Popup'

export default class Banner extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          isModalOpen: false,
       };
       this.onView = this.onView.bind(this);
       this.onClose = this.onClose.bind(this);
    }  
    onView(){
        this.setState({
        isModalOpen: true
    });
    }
     onClose(){
        this.setState({
        isModalOpen: false
    });
  }
    render() {
    	const {data} = this.props;
        return(
            <div className="col-xs-12 col-sm-6">
	            	<div className="w-100 ">
                    	<div className="col-pre-launch-col new-approach-col flex">
                        	<h1>{data.heading}</h1>
                            <p>{data.paragraph}</p>
                            <a onClick={this.onView} className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">{data.button}</a>
                            <div className="header-invite full-width">
                            	<small>{data.bottom_content}</small>
                            </div>
                        </div>
                        {(this.state.isModalOpen===true) ? <div><Popup /><button onClick={this.onClose} type="button" class="close">
                                    <img src="./images/ic_close_16.svg"/>
                                </button></div> : ''}
                    </div>
            </div>
        )
    }
}
