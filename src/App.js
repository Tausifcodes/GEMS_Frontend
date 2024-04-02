// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import VideoDetails from './VideoDetails';
import Category from './Category';
import NotFound from './NotFound';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:category" component={Category} />
          <Route path="/videos/:id" component={VideoDetails} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
