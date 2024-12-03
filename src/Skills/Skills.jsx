import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BiLogoTypescript } from "react-icons/bi";
import { TiHtml5 } from "react-icons/ti";
import { LiaReact } from "react-icons/lia";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiJirasoftware } from "react-icons/si";
import colorSharp from "../assets/color-sharp.png";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>

              <p>Some Skills I've Acquired on this Journey</p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <span>
                    <TiHtml5 size={100} color="orangered" />
                  </span>

                  <h5>HTML/CSS</h5>
                </div>
                <div className="item">
                  <span>
                    <LiaReact size={100} color="#00d8ff" />
                  </span>

                  <h5>React</h5>
                </div>
                <div className="item">
                  <span>
                    <RiNextjsFill size={100} color="#ffffff" />
                  </span>

                  <h5>Next</h5>
                </div>
                <div className="item">
                  <span>
                    <BiLogoTypescript size={100} color="#007acc" />
                  </span>

                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <span>
                    <RiTailwindCssFill size={100} color="#00d8ff" />
                  </span>

                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <span>
                    <BsFillBootstrapFill size={100} color="#aa00ff" />
                  </span>

                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <span>
                    <SiJirasoftware size={100} color="#aa00ff" />
                  </span>

                  <h5>QA Software Testing</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
}

export default Skills;
