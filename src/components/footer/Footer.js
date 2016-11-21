import React, { Component } from 'react';

class Footer extends Component {

  render(){
    return (
      <footer>
        <div className="footer-content">
          <img src="assets/footer/wen.png" width="30"></img>
          <img src="assets/footer/bert.png" width="30"></img>
          <div className="social-holder">
            <a href="#" className="icon-twitter" target="_blank"></a>
            <a href="#" className="icon-github-circled" target="_blank"></a>
            <a href="#" className="icon-instagram" target="_blank"></a>
            <p className="copyright"><span>lin.bert 2016©</span></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
