import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import './style.scss';

const ModalVideo = (props: any) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="play-video" onClick={toggle}>
      <FontAwesomeIcon icon={faPlay} size="lg" fixedWidth />
      <Modal isOpen={modal} toggle={toggle} id="modal-play-video">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <iframe
            src={`https://www.youtube.com/embed/${props.key_id}`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
          />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalVideo;
