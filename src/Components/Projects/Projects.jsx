import React from 'react'
import { Col, Container, Row, Tab, TabContainer, TabContent, Nav } from 'react-bootstrap'
import ProjectCards from '../ProjectCards/ProjectCards'
import medium1 from '../../assets/medium1.png'
import medium2 from '../../assets/medium2.png'
import instagram from '../../assets/instagram-react.png'
import oculus from '../../assets/vr-oculus.png'
import login from '../../assets/loginjs.png'
import colorSharp2 from '../../assets/color-sharp2.png'

function Projects() {
    const projects = [

        {
            title: 'Cloning Medium 1',
            description: 'Cloning Medium\'s Landing page, the header section',
            imgUrl: medium1,
        },

        {
            title: 'Cloning Medium 2',
            description: 'Cloning Medium\'s Landing page, the news section',
            imgUrl: medium2,
        },

        {
            title: 'Product Page',
            description: 'Working to design from a professional figma design layout and work-flow',
            imgUrl: oculus,
        },

        {
            title: 'Instagram React 1',
            description: 'Trying to clone Instagram\'s landing page with react',
            imgUrl: instagram,
        },

        {
            title: 'Instagram React 2',
            description: 'Trying to clone Instagram\'s landing page with react',
            imgUrl: instagram,
        },

        {
            title: 'Login form with local storage',
            description: 'designing a simple responsive login form with local storage implemented to store the password in it',
            imgUrl: login,
        },
    ]





  return (
    <section className="project" id="project">

        <Container>

            <Row>

                <Col>

                    <h2>Projects</h2>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate obcaecati similique temporibus explicabo necessitatibus aut rem earum, autem laborum!</p>

                    <Tab.Container id="project-tabs" defaultActiveKey="first">

                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills'>

                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>

                        </Nav>

                        <Tab.Content>

                            <Tab.Pane eventKey="first">

                                <Row>

                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCards 
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }

                                </Row>


                            </Tab.Pane>

                            <Tab.Pane eventKey='second'><a href="https://github.com/EbukaOkoye">Github Repositories</a></Tab.Pane>

                            <Tab.Pane eventKey='third'><a href="https://app.netlify.com/teams/ifennawisdom/sites">Projects hosted on Netlify</a></Tab.Pane>

                        </Tab.Content>

                    </Tab.Container>

                </Col>
            </Row>
        </Container>

        <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}

export default Projects