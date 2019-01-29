import React from 'react';
import './styles/Footer.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class FontAwesome extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <FontAwesomeIcon icon={faLinkedin} />
        </h1>
      </div>
    );
  }
}

export default FontAwesome;