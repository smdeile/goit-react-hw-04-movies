import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import Nav from './Nav';
import Movie from '../pages/Movie';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies/:id" component={Movie} />
        <Route path="/movies" component={AboutPage} />
      </Switch>
    </div>
  );
};
export default App;
