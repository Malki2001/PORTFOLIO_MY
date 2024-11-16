import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



import colorSharp from '../assets/img/color-sharp.png';
import profile from '../assets/img/profile.jpg';



function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Software Engineer','FrontEnd Developer','Mobile App Developer', 'Web Designer', 'UI/UX Designer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150 - Math.random() * 100);
  const period = 3000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div>
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={10} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                    {/* <span className='tagline'>Welcome to My Portfolio</span> */}
                    <h2>
                      {"Hi I'm Malki Yasodhara"} 
                    </h2>
                    <h3>
                       <span className='wrap'>{text}</span>
                    </h3>
                    <p>
                    Success is not the result of luck, but the outcome of consistent effort, unwavering focus, and the resolve to give your best, regardless of the outcome.
                    </p>
                  
                  </div>
                }
              </TrackVisibility>
            </Col>
            <Col xs={10} md={6} xl={5}>
            
              <div className="about-img">
                <img src={profile} alt="Profile" />
                <span className='circle-spin'></span>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
