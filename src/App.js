import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import SlideShow from './components/SlideShow';

class App extends Component {

  render() {    
    return (
  
    <div>     
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
            <p>Posted by: Shinan Liu</p>
            <p>Contact information: <a href="shinan.liu@yahoo.com">
            shinan.liu@yahoo.com</a>.</p>
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
