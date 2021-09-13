import { faArrowRight, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppSelector } from '../../../../../../../app/hooks';
import './style.scss';
function TopCast() {
  const [list, loading] = useAppSelector(({ people: { list, loading } }) => [list, loading]);
  const people = list.cast;

  if (loading) return <div>Loading....</div>;

  return (
    <section className="panel top_cast">
      <h3>Top Billed Cast</h3>
      <div className="cast_scroller">
        <ul className="list-cast">
          {people &&
            people.map(
              (item: any, index: number) =>
                index < 9 && (
                  <li key={index} className="profile-cast">
                    {item.profile_path === null ? (
                      <a href="/" className="image-null">
                        <FontAwesomeIcon icon={faUserAlt} size="2x" fixedWidth />
                      </a>
                    ) : (
                      <a href="/">
                        <img
                          src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.profile_path}`}
                          alt={item.name}
                        ></img>
                      </a>
                    )}
                    <a href="/">{item.name}</a>
                    <p>{item.character}</p>
                  </li>
                )
            )}
          <li className="view-more">
            <a href="/">
              View More{' '}
              <span>
                <FontAwesomeIcon icon={faArrowRight} size="sm" fixedWidth />
              </span>
            </a>
          </li>
        </ul>
      </div>
      <a href="/" className="view-full">
        Full Cast & Crew
      </a>
    </section>
  );
}

export default TopCast;
