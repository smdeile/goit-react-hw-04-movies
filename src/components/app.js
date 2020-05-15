import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import MoviesPage from '../pages/MoviesPage';
// import HomePage from '../pages/HomePage';
// import MoviePage from '../pages/MovieDetailsPage';
import NotFoundPage from '../pages/NotFound';
import Nav from './Nav';

const AsyncHomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "home-page" */),
);
const AsyncMoviePage = lazy(() =>
  import('../pages/MovieDetailsPage' /*webpackChunkName: "movie-page"*/),
);
const AsyncMoviesPage = lazy(() =>
  import('../pages/MoviesPage' /*webpackChunkName : "movies-page"*/),
);
const App = () => (
  <div>
    <Suspense
      fallback={
        <div>
          <p>Loading...</p>
        </div>
      }
    >
      <Nav />
      <Switch>
        <Route path="/" exact component={AsyncHomePage} />
        <Route path="/movies/:id" component={AsyncMoviePage} />
        <Route path="/movies" component={AsyncMoviesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
  </div>
);
export default App;
