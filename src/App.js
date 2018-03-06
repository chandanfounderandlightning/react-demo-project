import React, { Component } from 'react';
import logo from './logo-text.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <a href="#"><img src={logo} className="App-logo" alt="logo" /></a>
          </div>
        </header>
        <div className="container">
          <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-7 pull-left">
                    <div className="col-pre-launch-col new-approach-col flex">
                        <div className="rectangle"></div>
                        <h1>Buying new homes entirely online</h1>
                        <p>newbricks offers a pioneering approach to search for and buy new homes entirely online offering investors and owner occupiers unrivalled access to London’s most sought after developments.</p>
                        <a className="btn btn-primary signup-form" href="javascript:void();" data-toggle="modal" data-target="#myModal">Please register for updates</a>
                        <div class="header-invite full-width">
                          <small>The simplest way to keep up-to-date with new releases and offers</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
