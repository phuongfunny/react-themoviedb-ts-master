import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailMovieRequest } from '../../../store/movies/movieSlice';
import { getPeopleMovieRequest } from '../../../store/people/peopleSlice';
import Banner from './components/Banner';
import Content from './components/content';
import MenuTop from './components/Menutop';

function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: any }>();
  useEffect(() => {
    dispatch(getDetailMovieRequest({ id: id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getPeopleMovieRequest({ id: id }));
  }, [dispatch, id]);
  return (
    <React.Fragment>
      <section className="movie-detail">
        <MenuTop />
        <Banner />
        <Content />
      </section>
    </React.Fragment>
  );
}

export default MovieDetail;
