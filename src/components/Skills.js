import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skill.css'
import Footer from './Footer';

const Skills = () => {
  return (
   <div>
    <section className="services-className r-p" style={{marginTop: '80px', marginBottom: '20px'}}>
    <div className="container text-center">
      <div className="row">
        <div className="col mb-5">
          <div className="col">
            <h2>Skills</h2>
          </div>
        </div>
      </div>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/ImHTML-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>HTML</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/ImCSS-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>CSS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/Imbootstrap-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Bootstrap</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/javascript-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Javascript</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/nodeJS-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Node JS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/jquery-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>JQuery</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/semanticUI-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Semantic UI</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/express-1-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Express JS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/mysql-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>MySQL</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/react-1-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>React</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/photoshop-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Adobe Photoshop</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src="/images/illustrator-01.png" alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Adobe Illustrator</h5>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <Footer/>
  </div>

  )
}

export default Skills
