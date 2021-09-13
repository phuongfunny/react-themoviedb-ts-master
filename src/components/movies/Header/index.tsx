import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

HeaderMovie.propTypes = {};

function HeaderMovie() {
  const [subMovie, setSubMovie] = useState<Boolean>(false);
  const [subShows, setSubShows] = useState<Boolean>(false);
  const [subPeople, setSubPeople] = useState<Boolean>(false);
  const [subMore, setSubMore] = useState<Boolean>(false);
  const [classHeader, setClassHeader] = useState<string>('normal nav-down');
  const listenScrollEvent = (event: any) => {
    if (window.scrollY >= 70) {
      return setClassHeader('normal nav-up');
    } else if (window.scrollY <= 73) {
      return setClassHeader('normal nav-down');
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <header className={classHeader} id="movie-header">
      <div className="content">
        <div className="nav">
          <div className="nav-menu">
            <a className="logo" href="/">
              <img src={Logo} alt="logo"></img>
            </a>
            <ul className="sub-menu">
              <li
                className="item-movie"
                onMouseEnter={() => setSubMovie(true)}
                onMouseLeave={() => setSubMovie(false)}
              >
                Movies
                {subMovie && (
                  <div className="pop-movie popup-sub">
                    <Link to="/movies">Popular</Link>
                    <a href="/">Now Playing</a>
                    <a href="/">Upcoming</a>
                    <a href="/">Top Rated</a>
                  </div>
                )}
              </li>
              <li
                className="item-shows"
                onMouseEnter={() => setSubShows(true)}
                onMouseLeave={() => setSubShows(false)}
              >
                TV Shows
                {subShows && (
                  <div className="pop-shows popup-sub">
                    <a href="/">Popular</a>
                    <a href="/"> Airing Today</a>
                    <a href="/">On TV</a>
                    <a href="/">Top Rated</a>
                  </div>
                )}
              </li>
              <li
                className="item-people"
                onMouseEnter={() => setSubPeople(true)}
                onMouseLeave={() => setSubPeople(false)}
              >
                People
                {subPeople && (
                  <div className="pop-people popup-sub">
                    <a href="/">Popular People</a>
                  </div>
                )}
              </li>
              <li
                className="item-more"
                onMouseEnter={() => setSubMore(true)}
                onMouseLeave={() => setSubMore(false)}
              >
                More
                {subMore && (
                  <div className="pop-more popup-sub">
                    <a href="/">Discussions</a>
                    <a href="/">Leaderboard</a>
                    <a href="/">Support</a>
                    <a href="/">API</a>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <div className="nav-action">
            <ul className="list-action">
              <li className="icon-plus">
                <FontAwesomeIcon icon={faPlus} size="lg" fixedWidth />
              </li>
              <li className="lang">
                <div className="lang-sign">EN</div>
              </li>
              <li>Login</li>
              <li>Join TMDB</li>
              <li className="item-search">
                <FontAwesomeIcon icon={faSearch} size="lg" fixedWidth />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderMovie;
