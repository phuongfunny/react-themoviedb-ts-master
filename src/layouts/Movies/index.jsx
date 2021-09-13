import React from 'react';
import FooterMovie from '../../components/movies/Footer';
import HeaderMovie from '../../components/movies/Header';

function LayoutMovie({ children }) {
  return (
    <div id="moviedb">
      <HeaderMovie />
      {children}
      <FooterMovie />
    </div>
  );
}

export default LayoutMovie;
