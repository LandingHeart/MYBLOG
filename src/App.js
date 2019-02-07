import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SocialButtons from './components/SocialButtons';
import 'bootstrap/dist/css/bootstrap.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import Section1 from './components/section1';

class App extends Component {

  render() {    
        return (
    
    <div>    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
        </link>       
        <div>
        <Navigation/>
        </div>
        <div className = "headerEle">
        Welcome to my Blog, here there are the projects I have done and information about me. 
        <br/> Like Alber Einstein had said "Imagination is more important than knowledge."
        <br/> 
        <div className = "container">
       <div className = "divEle">
       <section className = "sect1">
          <h1>Section 1</h1>
          <p><Section1/></p>
        </section>
        <section className = "sect1">
          <h1>section 2</h1>
          <p><Section2/></p>
        </section>
          </div>
          <div>
          <footer>

            <SocialButtons/>
    
          </footer>

          </div>
       </div>
       </div>
      </div>
    );
  }
}

export default App;
