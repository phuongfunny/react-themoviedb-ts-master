import React from 'react';
import { Switch } from 'react-router-dom';
import NotFound from '../components/NotFound';
import HomePage from '../features/movie/HomePage';
import MovieDetail from '../features/movie/MovieDetail';
import Movies from '../features/movie/Movies';
import { LayoutType } from '../layouts';
import DefaultRouter from './DefaultRouter';

function Routes() {
  return (
    <Switch>
      <DefaultRouter layout={LayoutType.movie} exact path="/">
        <HomePage />
      </DefaultRouter>
      <DefaultRouter layout={LayoutType.movie} exact path="/movies">
        <Movies />
      </DefaultRouter>
      <DefaultRouter layout={LayoutType.movie} exact path="/movie/:id">
        <MovieDetail />
      </DefaultRouter>
      <DefaultRouter layout={LayoutType.movie} exact>
        <NotFound />
      </DefaultRouter>
    </Switch>
  );
}

export default Routes;
