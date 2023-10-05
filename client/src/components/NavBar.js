// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Import the CSS file

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         {/* <Link className="navbar-brand" to="/">Home</Link> */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
//             <Link className="nav-link" to="/home">Home</Link>
//             <Link className="nav-link" to="/readings">Readings</Link>
//             <Link className="nav-link" to="/favourites">Favourites</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.css"; 

function Navbar() {
  return (
    <div className="nav-bar">
      <header>
        <nav>
          <h1>
            Book <span>Haven</span>
          </h1>
          {/* <NavLink to="/">Home</NavLink> */}
          <NavLink to="home">Home</NavLink>
          <NavLink to="readings">Readings</NavLink>
          <NavLink to="favourites">Favourites</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;