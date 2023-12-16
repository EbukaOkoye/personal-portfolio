import React from "react";
import { Col } from "react-bootstrap";


function ProjectCards({ title, description, imgUrl, liveLink }) {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <div className="proj-imgtxtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <a className="live_link" href={`${liveLink}`} target="_blank">Visit Live Project here</a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCards;
