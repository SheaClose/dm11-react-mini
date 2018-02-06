import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>

          <NavLink exact activeClassName="active" to="/">
            Route1
          </NavLink>
          <NavLink activeClassName="active" to="/Route2">
            Route2
          </NavLink>
          <NavLink activeClassName="active" to="/Route3">
            Route3
          </NavLink>
        </header>
        {/* <Route path="/" exact component={Route1} />; */}
        {routes}
      </div>
    );
  }
}

export default App;
