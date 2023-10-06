import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
        <h1>
            Book <div className="spam">.Haven</div>
          </h1>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
            </li>
            <li>
            <Link to = "categories" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>CategoryList</Link>

            </li>
            <li>
            <Link to = "favourites" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Favourites</Link>

            </li>
            <li>
            <Link to = "login" className='nav-link1 text-uppercase text-white fs-22 fw-6 ls-1'>login</Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar