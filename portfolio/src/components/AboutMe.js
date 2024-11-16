import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';



function AboutMe() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section className='skill' id='about'>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>About Me</h2>
            


              <br/>
              <p style={{ fontSize: '20px' }}>
                I am Malki Yasodhara ,a Computer Science Undergraduate of University of Colombo School of Computing.
                <br/>
                As a dedicated Web and Mobile Developer, I have a solid background in creating dynamic, responsive applications. I embrace challenges and am always keen to explore and master new technologies, ensuring I remain up-to-date with the latest industry advancements. My continuous learning mindset and quick adaptability enable me to take on diverse development projects and make a valuable impact within innovative teams.


        
              </p>

            </div>
          </Col>
        </Row>
      </Container>

      <img className='background-image-left' src={colorSharp} alt="Background Decoration" />
    </section>
  );
}

export default AboutMe;
