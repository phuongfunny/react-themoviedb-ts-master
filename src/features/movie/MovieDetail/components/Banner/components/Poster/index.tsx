import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../../../../app/hooks';
import movieAPI from '../../../../../../../service/movieAPI';
import './style.scss';

interface Provider {
  provider_name: string;
  logo_path: string;
}
export const initProvider: Provider = {
  provider_name: '',
  logo_path: '',
};

function Poster() {
  const [detail] = useAppSelector(({ movies: { detail, loading } }) => [detail, loading]);
  const [provider, setProvider] = useState(initProvider);
  const { id } = useParams<{ id: any }>();

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const data: any = await movieAPI.getProvider(id);
        if (Object.keys(data.results).length !== 0) {
          console.log(data.results);
          if (data.results.US) {
            if (data.results.US.rent) setProvider(data.results.US.rent[0]);
            else setProvider(data.results.US.flatrate[0]);
          } else if (data.results.AU) {
            if (data.results.AU.rent) setProvider(data.results.AU.rent[0]);
            else setProvider(data.results.AU.flatrate[0]);
          } else {
            setProvider(initProvider);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProvider();
    return () => {
      setProvider(initProvider); // set default state unmount when Can't perform a React state update on an unmounted component.
    };
  }, [id]);
  return (
    <div className="poster">
      <div className="poster_image" style={provider.logo_path === '' ? { height: '100%' } : {}}>
        <div className="image" style={provider.logo_path === '' ? { height: '100%' } : {}}>
          {detail.poster_path !== '' && (
            <img
              src={`https://www.themoviedb.org/t/p//w300_and_h450_bestv2${detail.poster_path}`}
              alt={`banner-movie_${detail.id}`}
            ></img>
          )}
        </div>
        <div className="expand">
          <span style={{ marginRight: '8px' }}>
            <FontAwesomeIcon icon={faArrowsAlt} size="sm" fixedWidth id={`popover-${detail.id}`} />
          </span>
          Expand
        </div>
      </div>
      {provider.logo_path !== '' && (
        <div className="poster_offer">
          <div className="provider">
            <img
              src={`https://www.themoviedb.org/t/p//original${provider.logo_path}`}
              alt={`banner-movie_${provider.provider_name}`}
              width={38}
              height={38}
            ></img>
          </div>
          <div className="text">
            <h4 style={{ margin: '0' }}>Now Streaming</h4>
            <h3 style={{ margin: '0' }}>
              <a href="/">Watch Now</a>
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Poster;
