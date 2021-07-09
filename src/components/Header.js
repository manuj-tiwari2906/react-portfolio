import React from 'react';
import Typed from 'react-typed';

const Header = () => {
   return <div className="header-wrapper">
      <div className="main-info">
          <h1>Web development infos</h1>
          <Typed className="typed-text" strings={['web-design','web-dev','Facebook','Google ads']}
          typeSpeed={40} backSpeed={60} loop/>
          <a href="" className="btn-main-offer">Contact me</a>
      </div>
   </div>
}

export default Header; 