import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import logo1 from "../../assets/smiley-removebg-preview.png";
import blackWhite from "../../assets/black_white-removebg-preview.png";
import colored from "../../assets/colored.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Reactjs Developer", "Code Lover"];
  const [text, setText] = useState("");
  const [letterSpeed, setLetterSpeed] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, letterSpeed);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setLetterSpeed((prevLetterSpeed) => prevLetterSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setLetterSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setLetterSpeed(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={12} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>

            <h1 className="txt-rotate">
              {"Hi!!!! I'm Ifenna, a "} <span className="wrap">{text}</span>
            </h1>

            <p>
              Not thought of any Corporate or serious thing to write here yet. <br />
              I only come back here to look at my code to refactor it. I've done 
              that twice now, and by the time more people look at this portfolio,
              I'd have refactored the code more and probably change the framework
              from Bootstrap to TailwindCSS just for the fun of it.
            </p>

            <button className="connect_btn mx-auto">
              <a className="text-black" href="https://www.linkedin.com/in/chukwuebuka-okoye-967867229" target="_blank">Let's connect on LinkedIn</a> <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>

          <Col xs={12} sm={12} md={12} xl={5}>
            <img src={colored} alt="Header img" className="face-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
