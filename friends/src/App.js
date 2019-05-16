import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import FriendsList from './components/FriendsList/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav className="App__Navigation">
          <Link to="/login">Login</Link>
        </nav> */}
        <PrivateRoute exact path="/" component={FriendsList} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
