import { Scrollchor, swing } from 'react-scrollchor';
// import Home from './Home';


const LandingPage = () => (
  <div>

    <nav  className="navbar-fixed-top">
      <ul>
        <li><Scrollchor to="" animate={{ duration: 1000, easing: swing }} className="nav-link">Home</Scrollchor></li>
        <li><Scrollchor to="#sample-code" animate={{ duration: 1000, easing: swing }} className="nav-link">Sample</Scrollchor></li>
        <li><Scrollchor to="#features" animate={{ duration: 1000, easing: swing }} className="nav-link">Features</Scrollchor></li>
        <li><Scrollchor to="#footer" animate={{ duration: 1000, easing: swing }} className="nav-link">SignUp</Scrollchor></li>
      </ul>
    </nav>

    <div id="features">OI
      <div style={{ height: '100vh' }} />
    </div>

    <footer id="footer">
      <div style={{ height: '100vh' }} />
    </footer>

  </div>
);

export default LandingPage;