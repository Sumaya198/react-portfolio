import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Skill.css'
import Footer from './Footer';
import HTML from './images/ImHTML-01.png';
import CSS from './images/ImCSS-01.png';
import Javascript from './images/javascript-01.png';
import Bootstrap from './images/Imbootstrap-01.png';
import SemanticUI from './images/semanticUI-01.png';
import NodeJS from './images/nodeJS-01.png';
import ExpressJS from './images/express-1-01.png';
import JQuery from './images/jquery-01.png';
import MySQL from './images/mysql-01.png';
import ReactImg from './images/react-1-01.png';
import Photoshop from './images/photoshop-01.png';
import Illustrator from './images/illustrator-01.png';


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
            <img className="img-thumbnail skill-img" src={HTML} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>HTML</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={CSS} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>CSS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={Bootstrap} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Bootstrap</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={Javascript} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Javascript</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={NodeJS} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Node JS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={JQuery} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>JQuery</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={SemanticUI} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Semantic UI</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={ExpressJS} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Express JS</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={MySQL} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>MySQL</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={ReactImg} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>React</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={Photoshop} alt="HTML logo"/></div>
          <div class="text-center">
            <h5>Adobe Photoshop</h5>
          </div>
          </div>
          <div className="col-md-4 col-sm-6 item">
          <div>
            <img className="img-thumbnail skill-img" src={Illustrator} alt="HTML logo"/></div>
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
