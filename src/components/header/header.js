import React from "react";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const Header = () => {

    const language=  useSelector(state=>state.language.lang)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  Articles
                </Link>
              </li>
            <p>{language}</p>
            </ul>
       
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
