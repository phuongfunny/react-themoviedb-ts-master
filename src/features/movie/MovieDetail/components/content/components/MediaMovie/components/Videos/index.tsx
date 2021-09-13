import React from 'react';
import ModalVideo from '../../../../../../../../../custom-fields/modal-movie/ModalVideo';
import './style.scss';

function Videos(props: any) {
  const data = props.data;
  return (
    <div
      className="video-detail"
      style={{
        background: `
        url('https://i.ytimg.com/vi/${data.key}/hqdefault.jpg')
         no-repeat
      `,
      }}
    >
      <ModalVideo key_id={data.key} />
    </div>
  );
}

export default Videos;
