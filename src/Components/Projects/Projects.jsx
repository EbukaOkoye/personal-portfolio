import React from "react";
import {
  Col,
  Container,
  Row,
  Tab,
  TabContainer,
  TabContent,
  Nav,
} from "react-bootstrap";
import ProjectCards from "../ProjectCards/ProjectCards";
import flighty from "../../assets/flighty-preview.png";
import medium2 from "../../assets/medium2.png";
import instagram from "../../assets/instagram-react.png";
import oculus from "../../assets/vr-oculus.png";
import login from "../../assets/loginjs.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import resumePdf from "../../resume/Chukwuebuka Ifenna Okoye Tech CV.pdf";

function Projects() {
  const projects = [
    {
      title: "Cloning Medium 2",
      description:
        "Cloning Medium's Landing page, the news section, HTML, CSS only project",
      imgUrl: medium2,
      liveLink: "https://astonishing-lamington-31138d.netlify.app/",
    },

    {
      title: "Product Page",
      description:
        "Working to design from a professional figma design layout and work-flow, using HTML, CSS and Javascript",
      imgUrl: oculus,
      liveLink: "https://vr-oculus.netlify.app",
    },

    {
      title: "Flighty Booking App",
      description:
        "A mini flight booking app using NextJs, tailwindcss, axios for integrating API from Rapid API",
      imgUrl: flighty,
      liveLink: "http://flight-advisor-app-6phr.vercel.app/",
    },

    {
      title: "Instagram React 1",
      description: "Trying to clone Instagram's landing page with Reactjs",
      imgUrl: instagram,
      liveLink: "https://new-insta-react.netlify.app",
    },

    {
      title: "Instagram React 2",
      description: "Trying to clone Instagram's landing page with Reactjs",
      imgUrl: instagram,
      liveLink: "https://new-insta-react.netlify.app",
    },

    {
      title: "Login form with local storage",
      description:
        "designing a simple responsive login form with local storage implemented to store the password in it",
      imgUrl: login,
      liveLink: "https://login-form-ls.netlify.app",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>

            <p className="projext_text">
              These are some of the little projects I have done. Some are quite
              interesting, while some are just basic stuff. I have other
              projects I am working on and will update them as soon as I am done
              with them. You can click on the other tabs to visit my github and
              my netlify link to keep your eyes busy.
            </p>

            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5" id="pills">
                <Row className="mx-auto">
                  <Col xs={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project Snippet</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col xs={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="second">GitHub Profile Link</Nav.Link>
                    </Nav.Item>
                  </Col>
                  <Col xs={4}>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Resume Download</Nav.Link>
                    </Nav.Item>
                  </Col>
                </Row>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <p>
                    The repositories to the projects displayed here and other
                    nice projects can be found in my Github address in the link
                    below
                  </p>
                  <a
                    className="live_link"
                    href="https://github.com/EbukaOkoye"
                    target="_blank"
                  >
                    Github Repositories
                  </a>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <p>My resume is available for your perusal.</p>
                  <a
                    className="live_link"
                    href={resumePdf}
                    download={resumePdf}
                  >
                    click here to download my resume
                  </a>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
}

export default Projects;
