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
import instagram from "../../assets/instagram-react.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import resumePdf from "../../resume/Chukwuebuka_Ifenna_Okoye_Software_developer_Resume_202412030920211.pdf";
import credenceLanding from "../../assets/credence54.png";
// import credenceApp from "../../assets/credence_dashboard_marketplace.png";
import i2iLanding from "../../assets/i2i_landing.png";
import cityfixApp from "../../assets/cityfix_dashboard.png";
import cityfix from "../../assets/cityfix_landing_page.png";

function Projects() {
  const projects = [
    {
      title: "Innovate to Impact",
      description:
        "A tech community aimed at providing the younger generation with knowledge and help in getting into tech",
      imgUrl: i2iLanding,
      liveLink: "https://innovatetoimpact.org",
    },

    {
      title: "Credence Website",
      description:
        "An Agro business that connects buyers and farmers and facilitates trade between them",
      // "Credence web application, the interface where buyers and farmers can interact by creating escrow, transactions and also a market place",
      imgUrl: credenceLanding,
      liveLink: "https://credence54.com",
    },

    {
      title: "Flighty Booking App",
      description:
        "A mini flight booking app using NextJs, tailwindcss, axios for integrating API from Rapid API",
      imgUrl: flighty,
      liveLink: "http://flight-advisor-app-6phr.vercel.app/",
    },

    // {
    //   title: "Instagram React 1",
    //   description: "Trying to clone Instagram's landing page with Reactjs",
    //   imgUrl: instagram,
    //   liveLink: "https://new-insta-react.netlify.app",
    // },

    // {
    //   title: "Cityfix Website",
    //   description:
    //     "The website for Cityfix, a platform where users can find and engage the services of artisans nearby",
    //   imgUrl: cityfix,
    //   liveLink: "https://cityfix.ng",
    // },

    // {
    //   title: "Cityfix Web App",
    //   description:
    //     "The application for cityfix where artisans and users who need their services can connect and enage theirservices",
    //   imgUrl: cityfixApp,
    //   liveLink: "https://cityfix.ng/user/login",
    // },
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
