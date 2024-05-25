// Internships.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import internshipImg1 from "../assets/img/internship1.png"; // Replace with your image path
import internshipImg2 from "../assets/img/internship2.png"; // Replace with your image path

export const Internships = () => {
  const internships = [
    {
      title: "Software Engineering Intern",
      company: "Ford Motor Company",
      responsibilities: [
        "Developed a config tool elevating teams accessibility to read and write EFS/NV values",
        "Engineered a DLT plugin that filtered logworthy events from log files",
        "Developed, tested, and maintained telematics software features to enhance functionality and performance",
      ],
      image: internshipImg1, // Replace with actual image path
    },
    {
      title: "System Engineer Intern",
      company: "PAL Aerospace",
      responsibilities: [
        "Utilized infrastructure as code to automate the configuration of mission system components",
        "Developed executable scripts by utilizing Ansible and Linux containers",
        "Collaborated with an Agile development team to plan and execute project tasks efficiently",
      ],
      image: internshipImg2, // Replace with actual image path
    },
  ];

  return (
    <section className="internship" id="internships">
      <Container>
        <Row>
          <Col>
            <h2>Internships</h2>
            <Row>
              {internships.map((internship, index) => (
                <Col key={index} md={6}>
                  <div className="internship-item">
                    <img src={internship.image} alt={`${internship.company} Internship`} />
                    <div className="internship-details">
                      <h3>{internship.title}</h3>
                      <h4>{internship.company}</h4>
                      <ul>
                        {internship.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};