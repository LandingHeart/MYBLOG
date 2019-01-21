import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SlideShow from './components/SlideShow';
import SocialButtons from './components/SocialButtons';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Section1 from './components/section1';

class App extends Component {

  render() {    
    return (
  
    <div>    
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
        </link>       
        <div >
        <Navigation/>
        </div>
        <div className = "headerEle">
        Welcome to my Blog, here there are the projects I have done and information about me. 
        <br/> Like Alber Einstein had said "Imagination is more important than knowledge."
        <br/> 
        <div className = "container">
       <div className = "divEle">
       <section className = "sect1">
          <h1>Heading title</h1>
          <p><Section1/></p>
        </section>
        <section className = "sect1">
          <h1>Heading title</h1>
          <p>content2, section component</p>
        </section>
          </div>
          <div>
          <footer>
          <span>
            <SocialButtons/>
            </span>
          </footer>
          </div>
       </div>

  
      <div>
      
     
      </div>
       </div>
      </div>
    );
  }
}

export default App;
