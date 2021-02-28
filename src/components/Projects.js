import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Project.css'
import SanayaIMG from './images/sanaya.jpg'
import ExchangeIMG from './images/Desktop-ExchangeAway.png'
import QuizIMG from './images/code-quiz.png'


const Projects = () => {
    return (
<div>
        <section className="services-className r-p">
        <div className="container text-center" style={{marginTop: '80px'}}>
          <div className="row">
            <div className="col mb-5">
              <div className="col">
                <h2>Projects</h2>
              </div>
            </div>
          </div>
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-4 col-sm-6 item">
                <div className="card item-card card-block">
                  <h4 className="card-title text-center">Quiz</h4>
                  <a href="https://sumaya198.github.io/AwesomeQuiz/"><img className="card-img-top cOne-img"
                      src={QuizIMG} alt="quiz"/></a>
                  <h5 className="item-card-title mt-3 mb-3">Code Quiz</h5>
                  <div className="service-border"></div>
                  <a href="https://github.com/Sumaya198/AwesomeQuiz"><button type="button" className="btn btn-info mx-auto"
                      style={{width:'100px', fontSize: '10px'}}>Repository</button></a>
                  <p className="des-text">HTML, CSS, Javascript</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 item">
                <div className="card item-card card-block">
                  <h4 className="card-title text-center">Exchange Away</h4>
                  <a href="https://nikstar-1.github.io/exchange-away/"><img className="card-img-top cOne-img"
                      src={ExchangeIMG} alt="exchange away"/></a>
                  <h5 className="item-card-title mt-3 mb-3">Exchange Away</h5>
                  <div className="service-border"></div>
                  <a href="https://github.com/Sumaya198/exchange-away"><button type="button" className="btn btn-info mx-auto"
                      style={{width:'100px', fontSize: '10px'}}>Repository</button></a>
                  <p className="des-text">HTML, CSS, Javascript</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 item">
                <div className="card item-card card-block">
                  <h4 className="card-title text-center">Sanaya</h4>
                  <a href="https://mysanaya.herokuapp.com"><img className="card-img-top cOne-img"
                      src={SanayaIMG} alt="sanaya"/></a>
                  <h5 className="item-card-title mt-3 mb-3">Sanaya</h5>
                  <div className="service-border"></div>
                  <a href="https://github.com/Sumaya198/sanaya"><button type="button" className="btn btn-info mx-auto"
                      style={{width:'100px', fontSize: '10px'}}>Repository</button></a>
                  <p className="des-text">HTML, CSS, Javascript</p>
                </div>
              </div>              
            </div>
          </div>
        </div>
        
      </section>
     

      </div>
       
       
    )
}

export default Projects
