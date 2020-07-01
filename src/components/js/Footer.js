import React, { Component } from 'react';
import Logo from '../../assets/logo.png';
import Up from '../../assets/up.png';
import '../css/Footer.css';
import { Link, animateScroll as scroll } from "react-scroll";
class Footer extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
};


  render() { 
    return (
      <div id='footer' className="footer">
      <div className="footer-div">
        <div className="flex">
          <div className="top-logo right">Like</div>
          <a className="app-name" href="#top">
            <img src={Logo} className="logo-responsive" alt="app-logo" />
          </a>
        </div>
        Coded by{' '}
        <a
          className="attribution"
          href="https://github.com/marcojovanovic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marco Jovanovic
        </a>
      </div>

      <a onClick={this.scrollToTop} class="up-scroll">
        <img src={Up} alt="" />
      </a>
    </div>
    );
  }
}
 
export default Footer;