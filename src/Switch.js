import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/videos/:id" component={VideoDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
