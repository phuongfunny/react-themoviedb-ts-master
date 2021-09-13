import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from '../../../../../../../service/movieAPI';
import './style.scss';

function Recommendations() {
  const [data, setData] = useState([]);
  const { id } = useParams<any>();
  useEffect(() => {
    const fetchRecommen = async () => {
      try {
        const reponse: any = await movieAPI.getRecommendations(id);
        setData(reponse.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecommen();
  }, [id]);

  return (
    <section id="panel-recommen">
      <h3>Recommendations</h3>
      <div className="recommen-scroll">
        <ul className="recommen-scroll_list">
          {data.length > 0 &&
            data.map((item: any, index: number) => (
              <li key={index} className="recommen-scroll__movie">
                <div className="image_content">
                  <a href="/">
                    <img
                      src={`https://www.themoviedb.org/t/p/w250_and_h141_face${item.backdrop_path}`}
                      alt={item.title}
                      width="250px"
                      height="141px"
                    ></img>
                    <div className="movie_date">
                      <FontAwesomeIcon icon={faCalendarWeek} />
                      <span style={{ marginLeft: '5px' }}>{item.release_date}</span>
                    </div>
                  </a>
                </div>
                <p className="movie_title">
                  <a href="/">
                    {item.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
                  </a>
                  <span>{Math.round(item.vote_average * 10)}%</span>
                </p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Recommendations;
