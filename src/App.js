import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Faq from './Faq/Faq';

class App extends React.Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/faq" component={Faq} />
              </Switch>
            </Router>
        );
    }
}

export default App;