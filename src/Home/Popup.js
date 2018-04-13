import React from 'react';

export default class Popup extends React.Component {
    render() {
    	return(
    		<div>
    			<div className="popup_box">
    				<div className="popup_row">
    					<div className="popup_col">
    						<span className="popup-remove">
    							
    						</span>
    						<input type="text" placeholder="Enter Name" />
    						<input type="text" placeholder="Enter Email" />
    						<textarea type="text" placeholder="Enter Message" />
    						<span className="form-submit">
    							<input className="submit-btn" type="submit" value="Submit" />
    						</span>
    					</div>
    				</div>
    			</div>
    		</div>
    	)
    }
}
