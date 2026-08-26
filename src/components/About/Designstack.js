import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";

import Figma from "../../Assets/TechIcons/figma.svg";

function Designstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Figma} alt=".Net" />
        <div className="tech-icons-text">Figma</div>
      </Col>
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col> */}

    </Row>
  );
}

export default Designstack;
