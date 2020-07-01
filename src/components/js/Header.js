import React from 'react';
import '../css/Header.css';
import Logo from '../../assets/logo.png';
import { Link, animateScroll as scroll } from 'react-scroll';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      hamburger: false,
      count: 0,
    };
  }

  displayNavbar = () => {
    if (!this.state.hamburger) {
      if (this.state.count === 1)
        document.querySelector('.hidden-menu-2').classList.toggle('slideout');
      document.querySelector('.hamburger').classList.toggle('change');
      document.querySelector('.hidden-menu-2').classList.toggle('slidein');
      document.querySelector('.hidden-menu-2').classList.toggle('unhide');
      document.querySelector('html').classList.toggle('prevent-scroll');
      this.setState({ hamburger: true });
    } else {
      document.querySelector('.hidden-menu-2').classList.toggle('slideout');
      document.querySelector('.hamburger').classList.toggle('change');
      document.querySelector('.hidden-menu-2').classList.toggle('slidein');
      document.querySelector('html').classList.toggle('prevent-scroll');
      setTimeout(function () {
        document.querySelector('.hidden-menu-2').classList.toggle('unhide');
      }, 1050);
      this.setState({
        hamburger: false,
        count: 1,
      });
    }
  };

  render() {
    return (
      <div className="header">
        <div className="desktop-navbar">
          <div className="general">
            <div className="flex">
              <span className="top-logo">Like</span>
              <a className="app-name" href="#top">
                <img src={Logo} className="logo-responsive" alt="app-logo" />
              </a>
            </div>
          </div>

          <div>
            <Link to="brand" smooth={true} duration={1500} delay={100}>
              Brand
            </Link>
            <Link to="unapredi" smooth={true} duration={1500} delay={100}>
              Unapredi
            </Link>

            <Link to="footer" smooth={true} duration={1500} delay={100}>
              Footer
            </Link>
          </div>
        </div>

        <div className="mobile-navbar">
          <div className="hidden-menu">
            <div className="top-menu">
            <div className="flex">
            <span className="top-logo">Like</span>
            <a className="app-name" href="#top">
              <img src={Logo} className="logo-responsive" alt="app-logo" />
            </a>
          </div>
              <div className="hamburger" onClick={this.displayNavbar}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </div>
          </div>

          <div className="hidden-menu-2">
            <div className="page-links">
              <Link to="brand" smooth={true} duration={1500} delay={100}>
                Brand
              </Link>
              <Link to="unapredi" smooth={true} duration={1500} delay={100}>
                Unapredi
              </Link>

              <Link to="footer" smooth={true} duration={1500} delay={100}>
                Footer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
