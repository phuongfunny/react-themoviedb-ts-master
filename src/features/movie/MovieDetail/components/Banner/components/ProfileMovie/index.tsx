import { faBookmark, faHeart, faListUl, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircularProgress } from '@material-ui/core';
import { default as dayjs } from 'dayjs';
import _ from 'lodash';
import React from 'react';
import { useAppSelector } from '../../../../../../../app/hooks';
import './style.scss';

function ProfileMovie() {
  const [detail, loading] = useAppSelector(({ movies: { detail, loading } }) => [detail, loading]);
  const [list, loadingPeople] = useAppSelector(({ people: { list, loading } }) => [list, loading]);
  if (loading) return <div>Loading....</div>;
  if (loadingPeople) return <div>Loading....</div>;
  //get list crew for movie
  // use Object.keys(list).reduce to get list selective
  // if not use this then need declare type reduce
  const list_crew = list.crew.reduce((ids: any, value: any) => {
    if (
      value.job === 'Director' ||
      value.job === 'Writer' ||
      value.job === 'Screenplay' ||
      value.job === 'Characters'
    ) {
      ids.push(value);
    }
    return ids;
  }, []);
  //group list crew by name
  const list_people = _(list_crew)
    .groupBy('name')
    .map(function (items, name) {
      return {
        name: name,
        jobs: _.map(items, 'job'),
      };
    })
    .value();
  return (
    <div className="banner-profile">
      <div className="profile">
        <div className="profile_content title">
          <h2 style={{ color: '#fff' }}>
            {detail.original_title}
            <span className="release_year" style={{ marginLeft: '5px', color: '#d5d4d7' }}>
              ({dayjs(detail.release_date).year()})
            </span>
          </h2>
        </div>
        <div className="profile_content facts">
          <span className="certification">R</span>
          <span className="release-date">{dayjs(detail.release_date).format('DD/MM/YYYY')}</span>
          <span className="dot"></span>
          <span className="genres">
            {detail.genres.map((item: any, index: number) => (
              <a href="/" key={index}>
                {item.name}
                {index < detail.genres.length - 1 ? ',' : ''}
              </a>
            ))}
          </span>
          <span className="dot"></span>
          <span>
            {Math.floor(detail.runtime / 60)}h {detail.runtime % 60}m
          </span>
        </div>
        <ul className="profile_content auto actions">
          <li className="vote">
            <div className="chart">
              <CircularProgress
                variant="determinate"
                value={detail.vote_average * 10}
                className={detail.vote_average * 10 < 70 ? 'low' : ''}
              />
              <p className="tt-vote">{detail.vote_average * 10}%</p>
            </div>
            <div className="text">User Score</div>
          </li>
          <li className="item custom_list">
            <a href="/">
              <FontAwesomeIcon icon={faListUl} size="sm" fixedWidth />
            </a>
            <div className="popover_item custom_list__popover">
              Login to create and edit custom lists
            </div>
          </li>
          <li className="item favorite">
            <a href="/">
              <FontAwesomeIcon icon={faHeart} size="sm" fixedWidth />
            </a>
            <div className="popover_item custom_list__popover">
              Login to add this movie to your favorite list
            </div>
          </li>
          <li className="item watch_list">
            <a href="/">
              <FontAwesomeIcon icon={faBookmark} size="sm" fixedWidth />
            </a>
            <div className="popover_item custom_list__popover">
              Login to add this movie to your watchlist
            </div>
          </li>
          <li className="item star">
            <a href="/">
              <FontAwesomeIcon icon={faStar} size="sm" fixedWidth />
            </a>
            <div className="popover_item custom_list__popover">Login to rate this movie</div>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faPlay} size="sm" fixedWidth />
              <span style={{ marginLeft: '5px' }}>Play videos</span>
            </a>
          </li>
        </ul>
        <div className="profile_content infor_movie">
          <h3 className="tagline">
            <i>{detail.tagline}</i>
          </h3>
          <h3>Overview</h3>
          <p className="overview">{detail.overview}</p>
          <ol className="people">
            {list_people.length > 0 &&
              list_people.map((item, index) => (
                <li key={index}>
                  <p className="name">{item.name}</p>
                  <p> {item.jobs.toString()}</p>
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ProfileMovie;
