import React from 'react';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

// import '../../node_modules/font-awesome/css/font-awesome.min.css';

const SocialButtons = () => {
  return (
      <div className = "MDB">
              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
                </link>
            <MDBContainer>
            <a href="https://www.linkedin.com/in/shinan-liu-162172153/" target="_blank" className="li-ic mr-3">
            <MDBIcon icon="linkedin" />
            </a>
            <a href="https://www.instagram.com/landing_heart/" target="_blank" className="ins-ic mr-3">
            <MDBIcon icon="instagram" />
            </a>
            
            <a href="https://github.com/LandingHeart?tab=repositories" target="_blank" className="git-ic mr-3">
            <MDBIcon icon="github" />
            </a>
        
            <a href="#!" className="email-ic mr-3">
            <MDBIcon icon="envelope-o" />
            </a>

        </MDBContainer>
  </div>
);
}

export default SocialButtons;