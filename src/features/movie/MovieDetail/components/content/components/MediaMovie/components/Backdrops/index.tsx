import React from 'react';

function Backdrops(props: any) {
  const data = props.data;
  return (
    <div className="video-detail">
      <img
        src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2${data.file_path}`}
        alt="Backdrops"
      ></img>
    </div>
  );
}

export default Backdrops;
