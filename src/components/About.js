import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css';
import Footer from './Footer';


const About = () => {
    return (
        <div>
            <section className="about r-p" id="about" style={{ marginTop: '100px', height: '100vh'}}>
    <div className="container">
      <div className="row">
      <div className="col-lg-6 animated way-fade-up">
          <img src="/images/colorIMG.png" className="img-fluid img-thumbnail profile-img" alt="profile"/>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" style={{padding: '50px'}}>
          <h2>About Me</h2>
          <h4> Hello! I'M Sumaya Hassan</h4>
          <p style={{fontSize: '18px', lineHeight: '32px'}}>I'm a health care assistant turned freelance graphic designer and currently working towards becoming a
            fullstack web developer. I truly believe in pursuing a career in something you're passionate about, that way
            work doesn't feel like work. What lead me to pursue a career in web development is my passion for design. Not only can I hone my technical skills but also bring out my creativity.</p>
          <div>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://github.com/Sumaya198"><i className="fab fa-github"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/feed/"><i
                    className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
   
  </section>
  <Footer/>

        </div>
        
    )
}

export default About
