import React from 'react';
import ModalVideo from '../../../../../../../../../custom-fields/modal-movie/ModalVideo';
import './style.scss';

type ToDoProps = {
  video: any;
  poster_1: any;
  poster_2: any;
};

const Popular: React.FC<ToDoProps> = ({ video, poster_1, poster_2 }) => {
  return (
    <div className="popular_detail">
      <ul>
        <li>
          <div
            className="video-detail"
            style={{
              background: `
                url('https://i.ytimg.com/vi/${video.key}/hqdefault.jpg')
                no-repeat
              `,
            }}
          >
            <ModalVideo key_id={video.key} />
          </div>
        </li>
        <li>
          <div className="video-detail">
            <img
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_1.file_path}`}
              alt="Backdrops"
            ></img>
          </div>
        </li>
        <li>
          <div className="video-detail">
            <img
              src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${poster_2.file_path}`}
              alt="Backdrops"
            ></img>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Popular;
