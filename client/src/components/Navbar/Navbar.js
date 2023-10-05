import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
// import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
        <h1>
            Book <span>Haven</span>
          </h1>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          {/* <Link to = "/" className='navbar-brand flex'>
            <img src = {logoImg} alt = "site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link> */}
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            <li>
            <Link to = "categories" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Categories</Link>

            </li>
            <li>
            <Link to = "favourite" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>favourite</Link>

            </li>
            {/* <li>
            <Link to = "reading" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>reading</Link>

            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar