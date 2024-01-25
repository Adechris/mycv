import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from '../../Assets/image1.JPG'
const About = () => {
    
  return (
    <Container className="about">
      <h4>
        <b>About Me</b>
      </h4>
      <div>
        <div className='mt-3'>
      <img src={img1} 
       height={200}
       style={{borderRadius:'50%'}}
      />
        </div>
      </div>
      
          <div className="mt-5 text-dark">
            <p>As an experienced front-end web developer with expertise in React, I am passionate
                about creating responsive and user-friendly web-applications. I have a strong foundation in HTML, CSS ,
                Javascript and related web technologies, and I am constantly striving to improve my skills and 
                 stay up-to-date with the latest web development trends. 
            </p>
            
            <p>My Primary focus is on creating clean,maintainable and scalable code using best practices and design patterns.
                I am committed to optimizing application performance and user experience and I always ensure cross-browser
                compatibility and accessibility.
            </p>
            {/* <p>
                I'm a very ambitious front-end developer looking for a role in established IT company
                 with the opportunity to work with the latest Technologies on challenging and diverse projects.
            </p>

            <p>
                I am quietly confident , naturally curious and perpetually working on improving my chops one design problem at a time
            </p>
            <p>If i need to define myself in one sentence, that would be a young talent, a sports lover and tech-obsessed!!!</p> */}
          </div>
          <div> 
            <Link to="/contact">
              <button className="btn btn-dark ">Contact Me</button>
            </Link>
            <a
              href="MyResume.pdf"
              download="MyResume.pdf"
            >
              <button className="btn btn-success mx-2">Get Resume</button>
            </a>
          </div>
    
    </Container>
  );
};

export default About;
