import React from 'react';
import axios from 'axios'

export default class Popup extends React.Component {
	/*constructor(props) {
    super(props);
    this.state = {fname: '', lname: '', email: '', ferror: '', lerror: '', Eerror: ''};

    this.handleChange = this.handleChange.bind(this);
	this.handleLastname = this.handleLastname.bind(this);
	this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({fname: event.target.value});
       if (this.state.fname != ''){
        this.setState({ferror: ''});
	}
  }

  handleLastname(event) {
    this.setState({lname: event.target.value});
       if (this.state.lname != ''){
        this.setState({lerror: ''});
	}
  }

  handleEmail(event) {
    this.setState({email: event.target.value});
       if (this.state.email != ''){
        this.setState({Eerror: ''});
	}
  }

  handleSubmit(event) {
	  if (this.state.fname === ''){
       this.setState({ferror: 'Please enter first name'});
	}
	else if (this.state.lname === ''){
       this.setState({lerror: 'Please enter last name'});
	}
	else if (this.state.email === ''){
       this.setState({Eerror: 'Please enter email address'});
	}
    else{
       alert('Hello: ' + this.state.fname + ' ' + this.state.lname);
	}
  }
	
	<div className="form-group">
		<input placeholder="Enter Last Name" type="text" name="lname" value={this.state.value} onChange={this.handleLastname} />
		<span className="error">{this.state.lerror}</span>
	</div>
	<div className="form-group">
		<input placeholder="Enter Email" type="text" name="email" value={this.state.value} onChange={this.handleEmail} />
		<span className="error">{this.state.Eerror}</span>
	</div>
*/

	constructor () {
  	super()
		this.state = {
			username: '',
			avatar_url: '',
		}
  	this.handleClick = this.handleClick.bind(this);
		this.handleLoginKeyUp = this.keyUpHandler.bind(this, 'LoginInput');
	}

	handleClick () {
  	axios.get('https://api.github.com/users/chandanucreate')
    .then(response => this.setState({username: response.data.name}))
	}
	keyUpHandler(refName, e) {
        console.log(refName);
				console.log(e.target.value);
				axios.get(`https://api.github.com/users/${e.target.value}`)
    		.then((response) => {
					this.setState({
						username: response.data.name,
						avatar_url: response.data.avatar_url,
					});

				})
  }
    render() {
    	return(
      <div>
				<form>
					<div className="form-group">
						<input placeholder="Enter First Name" type="text" name="fname" onKeyUp={this.handleLoginKeyUp} ref="LoginInput" />
						<span className="error">{this.state.ferror}</span>
					</div>
					<span className="form-submit text-left">
						<p>{this.state.username}</p>
						<span className="git_avtar">
							<img src={this.state.avatar_url} />
						</span>
						<input className="submit-btn" type="button" onClick={this.handleClick} value="Submit" />
					</span>
				</form>
    	</div>
    	)
    }
}
