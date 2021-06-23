import React from 'react';
import { Link } from 'react-router-dom';


function Footer(){

    return(
        <footer className="notification is-dark">
          <div className="content has-text-centered">
            <ul className='bullet-points'>
              <Link to='/contact'>
                <li>Contact Us</li>
              </Link>
              <Link to='/aboutus'>
                <li>About Us</li>
              </Link>
                <li>FAQ</li>
              <Link to='/payment'>
                <li>Subscribe</li>
              </Link>
            </ul>
            <p>
              <strong>Sell your Property</strong> by <a href="/">Vezzer</a>. The source code is licensed
              <a href="/">MIT</a>. The website content
              is licensed <a href="/">CC BY NC SA 4.0</a>.
            </p>
          </div>
        </footer>
    )
}



export default Footer;
