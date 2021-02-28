import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.css';


const Header = () => {
    return (
        <div>
       <header id="home">
    <div className="container-fluid header-content" style={{backgroundImage: `url('/images/bg.jpg')`, height: '100vh'}}>
      <div className="row">
        <div className="col text-center">
          <div className="content-box">
            <h4 className="welcome">Welcome</h4>
            <h3>My name is Sumaya Hassan</h3>
            
            <a href="https://drive.google.com/file/d/15l-ClmZAiKDov1Expi6BbpBCx2tWmiZm/view"
              className="btn download">Download CV</a>
          </div>
          <ul className="list-inline">
              <li className="list-inline-item"><a href="https://github.com/Sumaya198"><i className="fab fa-github"></i></a></li>
              <li className="list-inline-item"><a href="https://www.linkedin.com/feed/"><i
                    className="fab fa-linkedin-in"></i></a></li>
            </ul>
        </div>
      </div>
    </div>
  </header>

        </div>
    )
}

export default Header
