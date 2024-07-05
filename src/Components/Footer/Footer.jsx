import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../assets/react.svg";
import {
  Facebook,
  Twitter,
  Whatsapp,
  Github,
  Linkedin,
  Google,
} from "react-bootstrap-icons";

function Footer() {
  const htmlCode = "<IamIfenna/>";
  return (
    <footer className="footer p-4">
      <Container>
        <Row className="align-items-center">
          <Col sm={6} md={6}>
            <h2 className="title">{htmlCode}</h2>
          </Col>

          <Col sm={6} md={6} className="text-center text-sm-end text-md-center">
            <div className="social-icon">
              <a
                href="https://www.facebook.com/ifenna.okoye.167"
                target="_blank"
              >
                <i className="mx-2">
                  <Facebook className="text-white" />
                </i>
              </a>
              <a href="https://twitter.com/NawtiNerd_19" target="_blank">
                <i className="mx-2">
                  <Twitter className="text-white" />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/chukwuebuka-okoye-967867229"
                target="_blank"
              >
                <i className="mx-2">
                  <Linkedin className="text-white" />
                </i>
              </a>
              <a href="https://wa.me/qr/CBW3HAWG3XQGO1" target="_blank">
                <i className="mx-2">
                  <Whatsapp className="text-white" />
                </i>
              </a>
              <a href="https://github.com/EbukaOkoye" target="_blank">
                <i className="mx-2">
                  <Github className="text-white" />
                </i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
