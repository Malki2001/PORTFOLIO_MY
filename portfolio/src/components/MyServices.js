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
                <BsCode size={50} fontWeight={500} color="rgba(227, 19, 242, 0.742)"  />
                <h3>Frontend Development</h3>
                <p>Craft responsive and dynamic web interfaces that not only captivate users visually but also ensure smooth, intuitive, and efficient interactions across all devices.</p>
             </div>
             <div>
               <BsCrop size={50} fontWeight={500} color="rgba(227, 19, 242, 0.742)"  />
                <h3>Web Design</h3>
                <p>Utilizing the latest design trends & technologies,ensure the site is responsive, fast-loading, and optimized for an exceptional user experience across all devices</p>
             </div>
             <div>
                <BsApple size={50} fontWeight={300} color="rgba(227, 19, 242, 0.742)"/>
                <h3>Mobile App Design</h3>
                <p>Prioritize intuitive navigation, aesthetic appeal, and seamless performance to ensure the app stands out in a crowded market.</p>
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
