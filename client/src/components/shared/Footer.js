import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer class="page-footer grey darken-3">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5>Game of Life</h5>
            <p>Instructed and Inspired by DevPoint Labs</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Meet the Developers</h5>
            <ul>
              <li>
                <Link 
                to='/About'
                className="grey-text text-lighten-3"
                >
                  Chantel Cooke
                </Link>
                </li>
                <li>
                <Link 
                to='/About'
                className="grey-text text-lighten-3"
                >
                  Chris Bodin
                </Link>
                </li>
                <li>
                <Link 
                to='/About'
                className="grey-text text-lighten-3"
                >
                  Freddy Ramos
                </Link>
                </li>
                <li>
                <Link 
                to='/About'
                className="grey-text text-lighten-3"
                >
                  Stephanie Medlin
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright grey darken-4">
        <div class="container center-align">&copy; 2022 Game of Life</div>
      </div>
      </footer>
    </>
  )
}

export default Footer;