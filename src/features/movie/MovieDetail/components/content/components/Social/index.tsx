import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { default as dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { discussion } from '../../../../../../../constant/movie/index';
import movieAPI from '../../../../../../../service/movieAPI';
import './style.scss';

interface Data {
  author: string;
  author_details: { avatar_path: string; rating: string };
  release_date: string;
  content: string;
}
export const initData: Array<Data> = [
  {
    author: '',
    author_details: { avatar_path: '', rating: '' },
    release_date: '',
    content: '',
  },
];

function Social() {
  const [value, setValue] = useState(0);
  const [openReview, setOpenReview] = useState(true);
  const [openDisc, setOpenDisc] = useState(false);
  const [data, setData] = useState(initData);

  const { id } = useParams<any>();

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };
  const handleOpenReview = () => {
    setOpenReview(true);
    setOpenDisc(false);
  };
  const handleOpenDicussions = () => {
    setOpenReview(false);
    setOpenDisc(true);
  };

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const reponse: any = await movieAPI.getReviewMovie(id);
        setData(reponse.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReview();
  }, [id]);

  if (data.length > 0) {
    if (data[0].author === '') return <div>Loading...</div>;
  }
  return (
    <section id="special_pannel">
      <div className="menu">
        <h3>Social</h3>
        <Paper square className="tab-option">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label={`Review ${data.length}`} onClick={handleOpenReview} />
            <Tab label={`Discussions ${discussion.length}`} onClick={handleOpenDicussions} />
          </Tabs>
        </Paper>
      </div>
      <div className="content">
        {openReview && data.length > 0 && (
          <div className="content-review">
            <div className="content-review_inner">
              <div className="card">
                <div className="profile">
                  <div className="avatar">
                    <a href="/">
                      <img
                        src={`https://www.themoviedb.org/t/p/w64_and_h64_face${data[1].author_details.avatar_path}`}
                        alt={data[0].author}
                        height="64px"
                        width="64px"
                      ></img>
                    </a>
                  </div>
                  <div className="infor">
                    <div className="rating">
                      <h3>
                        <a href="/">A review by {data[0].author}</a>
                      </h3>
                      {data[1].author_details.rating !== null && (
                        <div className="rate">
                          <FontAwesomeIcon color="white" icon={faStar} size="sm" fixedWidth />
                          <span>{data[1].author_details.rating}.0</span>
                        </div>
                      )}
                    </div>
                    <h5>
                      Written by <span style={{ color: '#727272' }}>{data[0].author}</span> on{' '}
                      {dayjs(data[0].release_date).format('MMM DD, YYYY')}
                    </h5>
                  </div>
                </div>
                <div className="teaser">
                  {data[0].content.length > 300 ? (
                    <p>
                      {data[0].content.substring(0, 300)}...{' '}
                      <span>
                        <a href="/">read more</a>
                      </span>
                    </p>
                  ) : (
                    <p>{data[0].content}</p>
                  )}
                </div>
              </div>
            </div>
            <a href="/" style={{ marginTop: '20px' }}>
              Read All Reviews
            </a>
          </div>
        )}
        {openDisc && (
          <div className="content-discussions">
            <table className="list_discuss">
              <tbody>
                {discussion.map((item, index) => (
                  <tr key={index}>
                    <td className="discuss__infor">
                      <div className="post__infor">
                        <div className="avatar">
                          <img src={item.avatar} alt={item.name}></img>
                        </div>
                        <div className="desc">{item.description}</div>
                      </div>
                    </td>
                    <td>{item.status}</td>
                    <td>{item.vote}</td>
                    <td className="discuss_date">
                      {item.date}
                      <br />
                      by <b>{item.name}</b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export default Social;
