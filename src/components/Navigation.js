import React from 'react';
import '../App.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-inverse navbar-fixed-top topnav">
      <div class="container-fluid">
      <div class="navbar-header">
        <a className="navbar-brand" href="/">MYBLOG</a>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
              <a className="nav-link" href="/">ABOUTME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">CONTACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">GAME</a>
            </li>
         </ul>
        </div>
        </div>
      </nav>
  
    )
  }
}

export default Navigation;