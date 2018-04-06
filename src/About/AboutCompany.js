import React from 'react';
import { withRouter, Link} from 'react-router-dom';

export default class AboutCompany extends React.Component {
    render() {
        return(
            <div className="col-xs-12 col-sm-6">
              {this.props.data.map(item=>
                <div className="w-100 ">
                      <div className="col-pre-launch-col new-approach-col flex">
                          <p>{item.paragraph}</p>
                        </div>
                    </div>
              )}
            </div>
        )
    }
}
