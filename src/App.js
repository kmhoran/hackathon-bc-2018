import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect} from 'react-router';
import './App.css';
import Feed from './Components/Feed/Feed';
import Shop from './Components/Shop/Shop';
import Upcoming from './Components/Upcoming/Upcoming';

class App extends Component {
  provider = null;
  state = { spacing: '16', app:{isOnboarded: false} };

  componentDidMount = () => {
    this.setState({
    })
  }


  render() {
    return (
      <Router>
        <div className="App">

          <div>
            <Route exact path="/" component={Feed}/>
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/upcoming" component={Upcoming} />
          </div>
          {/* /.routes */}
        </div>
        {/* /.App */}
      </Router>
    );
  }
}

export default App;
