import React from 'react';
import { Col, Row } from 'reactstrap';
import GreyRight from './components/GreyRight';
import MediaMovie from './components/MediaMovie';
import Recommendations from './components/Recommendations';
import Social from './components/Social';
import TopCast from './components/TopCast';
import ViewCollection from './components/ViewCollection';
import './style.scss';

function Content() {
  return (
    <div className="content">
      <div className="content_wrapper">
        <Row>
          <Col xs="10" className="col_content">
            <TopCast />
            <Social />
            <MediaMovie />
            <ViewCollection />
            <Recommendations />
          </Col>
          <Col xs="2" className="col_content">
            <GreyRight />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Content;
