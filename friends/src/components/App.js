import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
// import FriendsList from './FriendsList/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App__Navigation">
          <Link to="/login">Login</Link>
        </nav>
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;

// {/* <div className="App">

// {/* <FriendsList /> */}
// </div>; */}
