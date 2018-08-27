import React, { Component} from 'react';
import ViewContainer from './ViewContainer';
import RecordContainer from './RecordContainer';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink className="nav__btn" activeClassName="active" exact to="/">Game</NavLink>
            <NavLink className="nav__btn" activeClassName="active" to="/record">Record</NavLink>
          </nav>
          <section>
            <Switch>
              <Route exact path='/' component={ViewContainer}/>
              <Route path='/record' component={RecordContainer}/>
            </Switch>
          </section>
          </div>
      </Router>
    );
  }
}

export default App;
