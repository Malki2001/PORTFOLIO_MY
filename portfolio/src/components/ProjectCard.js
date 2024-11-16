import React from 'react';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ topic, title, description, imgUrl, technologies, link }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <h2>{topic}</h2>
                <img src={imgUrl} alt={title} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <p>{technologies}</p>
                   
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="code-icon">
                        <i className="fas fa-code"></i>
                </a>
            </div>
        </Col>
    );
};
