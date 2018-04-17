import React from 'react';

export default class Popup extends React.Component {
    render() {
    	return(
            <div>
    		    <input type="text" placeholder="Enter Name" />
    			<input type="text" placeholder="Enter Email" />
    			<textarea type="text" placeholder="Enter Message" />
    			<span className="form-submit">
    			    <input className="submit-btn" type="submit" value="Submit" />
    			</span>
    		</div>
    	)
    }
}
