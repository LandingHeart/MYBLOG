import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SlideShow from './components/SlideShow';
import SocialButtons from './components/SocialButtons';
import '../node_modules/font-awesome/css/font-awesome.min.css';


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
       <div className = "divEle">
       <section className = "sect1">
          <h1>WWF</h1>
          <p>The World Wide Fund for Nature (WWF) is....</p>
        </section>
          </div>
          <div>
          <footer>
          <span>
          Soial Media Platforms 
            <SocialButtons/>
            </span>
          </footer>
          </div>
       </div>

  
      <div>
      
      {/* <SlideShow/> */}
      </div>
       
      </div>
    );
  }
}

export default App;
