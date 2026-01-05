import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png';

import { BsCrop} from 'react-icons/bs';
import { BsCode } from 'react-icons/bs';
import { BsApple } from 'react-icons/bs';



function MyServices() {
  return (
    <section className='skill' id='services'>
    <Container>
      <Row>
        <Col>
          <div className="service-bx">
            <h2>My Services</h2>
           
           <div className="services-list">
              <div>
                <BsApple size={50} fontWeight={300} color="rgba(227, 19, 242, 0.742)"/>
                <h3>Mobile App Design</h3>
                <p>Develop and deliver robust cross-platform mobile apps, covering the entire development lifecycle—from design and coding to testing, deployment, and publishing on both Google Play Store and Apple App Store.</p>
             </div>
             <div>
                <BsCode size={50} fontWeight={500} color="rgba(227, 19, 242, 0.742)"  />
                <h3>Full Stack Development</h3>
                <p>Design and implement full-stack web applications, creating responsive and dynamic interfaces while ensuring seamless backend integration, efficient performance, and intuitive user experiences across all devices.</p>
             </div>
             <div>
               <BsCrop size={50} fontWeight={500} color="rgba(227, 19, 242, 0.742)"  />
                <h3>AI & Chatbot Development</h3>
                <p>Leverage the latest AI and NLP technologies to design and develop intelligent chatbots and virtual assistants, delivering seamless, interactive, and personalized user experiences across web and mobile platforms.</p>
             </div>
           
           </div>
          </div>
        </Col>
      </Row>
    </Container>

    <img className='background-image-left' src={colorSharp} alt="Background Decoration" />
  </section>
  )
}

export default MyServices
