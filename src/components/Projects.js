import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import covid from "../assets/img/covid.jpeg";
import face from "../assets/img/face.png";
import website from "../assets/img/website.png";
import london from "../assets/img/london.png";
import qarm from "../assets/img/Qarm.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

export const Projects = () => {

  const projects = [
    {
      title: "Ethereum Fraud Detection",
      description: "Machine Learning",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Nicholas-SR/Ethereum-Fraud-Detection"
    },
    {
      title: "Covid Screening Device",
      description: "Raspberry PI, Python",
      imgUrl: covid,
      githubUrl: "https://github.com/harshc22/Covid-Screening-Device"
    },
    {
      title: "London Subway Network",
      description: "Python, Algorithms, OOP",
      imgUrl: london,
      githubUrl: "https://github.com/harshc22/London-Subway-Network"
    },
    {
      title: "Face Detection",
      description: "Java, OpenCV API",
      imgUrl: face,
      githubUrl: "https://github.com/harshc22/FaceDetection"
    },
    {
      title: "Get a Grip",
      description: "Python, RaspberryPI",
      imgUrl: qarm,
      githubUrl: "https://github.com/harshc22/Get-a-grip"
    },
    {
      title: "Web Portfolio",
      description: "Javascript, HTML, CSS",
      imgUrl: website,
      githubUrl: "https://github.com/harshc22/personal-portfolio"
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, "_blank");
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of the projects that I have worked on :)
            </p>
            <Tab.Container
              id="projects-tabs"
              defaultActiveKey="first"
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard 
                                key={index} 
                                {...project} 
                                onClick={() => handleProjectClick(project.githubUrl)} 
                              />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  );
};
