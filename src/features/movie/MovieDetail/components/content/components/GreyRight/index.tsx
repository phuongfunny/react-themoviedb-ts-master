import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faCommentDots,
  faKeyboard,
  faLink,
  faLock,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { useAppSelector } from '../../../../../../../app/hooks';
import movieAPI from '../../../../../../../service/movieAPI';
import './style.scss';

function GreyRight() {
  const [keywords, setKeywwords] = useState([]);
  const [detail, loading] = useAppSelector(({ movies: { detail, loading } }) => [detail, loading]);
  const { id } = useParams<any>();

  useEffect(() => {
    const getKeyWords = async () => {
      try {
        const reponse: any = await movieAPI.getKeyWordMovie(id);
        setKeywwords(reponse.keywords);
      } catch (error) {
        console.log(error);
      }
    };
    getKeyWords();
  }, [id]);

  if (loading === true) {
    return <div>Loading...</div>;
  }
  return (
    <section className="grey-right">
      <div className="social-network">
        <div>
          <a href="/">
            <FontAwesomeIcon color="#000" icon={faFacebookSquare} size="2x" fixedWidth />
          </a>
        </div>
        <div>
          <a href="/">
            <FontAwesomeIcon color="#000" icon={faTwitter} size="2x" fixedWidth />
          </a>
        </div>
        <div>
          <a href="/">
            <FontAwesomeIcon color="#000" icon={faInstagram} size="2x" fixedWidth />
          </a>
        </div>
        <div>
          <a href="/">
            <FontAwesomeIcon color="#000" icon={faPaperPlane} size="2x" fixedWidth />
          </a>
        </div>
        <div>
          <a href="/">
            <FontAwesomeIcon color="#000" icon={faLink} size="2x" fixedWidth />
          </a>
        </div>
      </div>
      <div className="infor-movie">
        <p>
          <strong>Status</strong>
          <br />
          {detail.status}
        </p>
        <p>
          <strong>Original Language</strong>
          <br />
          {detail.original_language === 'en' && 'English'}
        </p>
        <p>
          <strong>Budget</strong>
          <br />${detail.budget}
        </p>
        <p>
          <strong>Revenue</strong>
          <br />${detail.revenue}
        </p>
      </div>
      <div className="keywords-movie">
        <h4>Keywords</h4>
        <ul className="list-keywords">
          {keywords.length > 0 &&
            keywords.map((word: any, index: number) => (
              <li key={index}>
                <a href="/">{word.name}</a>
              </li>
            ))}
        </ul>
      </div>
      <div className="content-score">
        <h4>Content Score</h4>
        <div className="content">
          <div className="score">100</div>
          <p>Yes! Looking good!</p>
        </div>
      </div>
      <div className="top-contributor">
        <h4>Top Contributors</h4>
        <div className="leader">
          <div className="avatar">
            <img
              src="https://www.themoviedb.org/t/p/w45_and_h45_face/lWHpCKSQR8W2ZDf9tRrjibEboxf.jpg"
              alt="avatar"
              width="40px"
              height="40px"
            ></img>
          </div>
          <div className="info">
            <p>
              144 <br />
              <a href="/">Name</a>
            </p>
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>
          <a href="/">View Edit History</a>
        </p>
      </div>
      <div className="pop-trend">
        <h4>Popularity Trend</h4>
      </div>
      <div className="button_login">
        <Button className="btn-login">
          <FontAwesomeIcon icon={faLock} size="sm" fixedWidth />
          <span style={{ marginLeft: '5px' }}>LOGIN TO EDIT</span>
        </Button>
      </div>
      <div className="popup_keybord ">
        <FontAwesomeIcon icon={faKeyboard} size="sm" fixedWidth />
        <span style={{ marginLeft: '5px' }}>Keyboard Shortcuts</span>
      </div>
      <p style={{ marginTop: '30px' }}>
        <FontAwesomeIcon icon={faCommentDots} size="sm" fixedWidth />
        <span style={{ marginLeft: '5px' }}>Login to report an issue</span>
      </p>
    </section>
  );
}

export default GreyRight;
