import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';



import dartIcon from '../assets/img/dart-icon.svg';
import colorSharp from '../assets/img/color-sharp.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import js from '../assets/img/js.png';
import php from '../assets/img/php.png';
import python from '../assets/img/python.png';
import java from '../assets/img/java.png';
import cpp from '../assets/img/cpp.png';
import c from '../assets/img/c.png';
import scala from '../assets/img/scala.png';
import octave from '../assets/img/OCTAVE.jpg';
import react from '../assets/img/react.png';
import flutter from '../assets/img/flutter.jpg';
import spring from '../assets/img/spring.jpg';
import bootstrap from '../assets/img/bootsrtap.png';
import git from '../assets/img/git.png';
import figma from '../assets/img/figma.png';
import canva from '../assets/img/canva.png';
import trello from '../assets/img/trello.png';
import mysql from '../assets/img/mysql.png';
import PostgreSQL from '../assets/img/PostgreSQL.png';
import mongodb from '../assets/img/mongodb.gif';

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>In my journey as a developer and designer, I've honed a diverse set of skills that enable me to build robust, user-friendly applications and create compelling visual identities. Below are some of the key areas where I excel:</p>
                            <Carousel 
                                 responsive={responsive} 
                                 infinite={true} 
                                 className='skill-slider'
                                 autoplay={true} 
                                 autoplaySpeed={3000} // Adjust speed here (3 seconds)
                                 swipeable={true}
                                 draggable={false}
                                 centerMode={false}
                                 showDots={false}
                                 arrows={true}
                            >
                                <div className="item">
                                    <img src={html} alt='HTML' />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt='CSS' />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={js} alt='JavaScript' />
                                    <h5>JavaScript</h5>
                                </div>
                              
                                <div className="item">
                                    <img src={php} alt='PHP' />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt='Python' />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt='Java' />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={c} alt='C' />
                                    <h5>C</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt='C++' />
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={dartIcon} alt='Dart' />
                                    <h5>Dart</h5>
                                </div>
                                <div className="item">
                                    <img src={scala} alt='Scala' />
                                    <h5>Scala</h5>
                                </div>
                                <div className="item">
                                    <img src={octave} alt='Octave' />
                                    <h5>Octave</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt='React JS' />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={flutter} alt='Flutter' />
                                    <h5>Flutter</h5>
                                </div>
                                <div className="item">
                                    <img src={spring} alt='Springboot' />
                                    <h5>Springboot</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt='Bootstrap CSS' />
                                    <h5>Bootstrap CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt='Git' />
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={figma} alt='Figma' />
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={canva} alt='Canva' />
                                    <h5>Canva</h5>
                                </div>
                                <div className="item">
                                    <img src={trello} alt='Trello' />
                                    <h5>Trello</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt='Trello' />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={PostgreSQL} alt='Trello' />
                                    <h5>PostgreSQL</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodb} alt='Trello' />
                                    <h5>MongoDB</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='Background' />
        </section>
    );
}

export default Skills;
