import React from 'react';
import { NavItem, NavLink, Col, Row, Nav, Container, Tab } from 'react-bootstrap';


import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/finagle.png';
import projImg2 from '../assets/img/luxeloom.png';
import projImg3 from '../assets/img/empowerpro.png';
import projImg4 from '../assets/img/collage.jpg';
import projImg5 from '../assets/img/todo_5.jpg';
import projImg6 from '../assets/img/SMS.png';
import careerwave from "../assets/img/careerwave.png"
import 'animate.css';


function Projects() {
    const projects = [
        { topic:"Finagle" ,title: "Online Commerce & Workforce Management System", description: "An innovative and accessible software solution that  revolutionize the way to handle online orders, deliveries, employee management, and generate insightful reports.", imgUrl: projImg1 ,technologies  : "HTML, CSS, Javascript, PHP, MySQL, PayHere, Google Maps API" , link :"https://github.com/Pahasarajayasuriya/Finagle_Project"},
        { topic:"EmpowerPro" ,title: "Employee Management System ", description: "A web-based solution that integrates key HR and management functions into a unified platform to streamline operations in the IT industry.", imgUrl: projImg3 ,technologies  :" React, Springboot, PostgresSQL, Figma, Trello, Docker", link:"https://github.com/Samaralagan/EmPowerPro"},
        { topic:"TrendTutor" ,title: "Skincare Mobile App", description: "Frond End of a mobile application that enables users to enroll in beauty cultural courses, view tutorials, make online payments, and track the status of their course progress.", imgUrl: projImg4, technologies  :"Flutter , Git , Figma" , link :"https://github.com/Malki2001/Skincare_App"},
        { topic:"CareerWave" ,title: "Career Help Mobile App", description: "Frond End of a mobile application that enables users to search careers they prefer", imgUrl: careerwave, technologies  :"Flutter , Git , Figma" , link :"https://github.com/Malki2001/Scienter_app.git"},
        { topic:"PetCare App" ,title: "PetCare Mobile App", description: "Frond End of a pet care mobile app that connects users with nearby veterinarians, enabling appointment booking and pet management. Also created a web admin dashboard and an e-commerce pet shop.", imgUrl: projImg5 , technologies  :"Flutter, Firebase, React.js" , link:"https://github.com/Malki2001/petCare_app" },
        { topic:"LuxeLoom" ,title: "Online Clothing Shopping Website", description: "Frontend for an online clothing shopping website, focusing on intuitive navigation, responsive design, and visually appealing product displays", imgUrl: projImg2 ,technologies  :"React, Figma, Git" , link:"https://github.com/Malki2001/Ecommerce_website"},
        { topic:"School Management System" ,title: "Student Management System", description: "This project is a MERN (MongoDB, Express.js, React.js, Node.js) application designed to manage students, teachers, system employees, and parents within an educational institution.", imgUrl: projImg6 ,technologies  :" MongoDB, Express.js, React.js, Node.js, Git" , link :"https://github.com/Dilum-IR/School-Management-System_Rad_Project" },
       // { topic:"Book Store Management System" ,title: "Book Store Management System", description: "MERN application designed to streamline the management of a bookstore.It offers a seamless experience that allows users to efficiently handle book records within the system.", imgUrl: projImg6 ,technologies  :"MongoDB, Express.js, React.js, Node.js, Git" , link:"https://github.com/Malki2001/Bookstore_MERN.git"}
    ];


    const getProjectSlice = (startIndex, endIndex) => {
        return projects.slice(startIndex, endIndex);
    };
   


    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                       
                           
                               
                                    <h2>Projects</h2>
                                    <p>Each of these projects showcases my skills in creating visually appealing, user-friendly interfaces and developing responsive, functional web and mobile applications.</p>
                               

                        <Tab.Container id='projects-tab' defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/first">
                                <NavItem>
                                    <NavLink eventKey="first">Tab One</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="second">Tab Two</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey="third">Tab Three</NavLink>
                                </NavItem>
                            </Nav>

                            <Tab.Content className='tab-content'>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {getProjectSlice(0, 3).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {getProjectSlice(3, 6).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {getProjectSlice(6, 9).map((project, index) => (
                                            <ProjectCard key={index} {...project} />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2} alt="Background" />
        </section>
    );
}

export default Projects;
