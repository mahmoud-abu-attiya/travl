// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "./Button/Button";
// import "./Navbar.css"
// export default function Navbar() {
//   const [click, setclick] = useState(false);
//   const [button, setButton] = useState(true)
//   const handelClick = () => setclick(!click);
//   const closeMobileMenu = () => setclick(false);
//   const showButton = ()=>{
//     if(window.innerWidth <= 960){
//       setButton(false);
//     } else {
//       setButton(true)
//     }
//   }
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton)
//   return (
//     <div className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
          
//         </Link>
//         <div className="menu-icon" onClick={handelClick}>
//           <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
//         </div>
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//           <li className="nav-items">
//             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//               home
//             </Link>
//           </li>
//           <li className="nav-items">
//             <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
//               services
//             </Link>
//           </li>
//           <li className="nav-items">
//             <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
//               products
//             </Link>
//           </li>
//           <li className="nav-items">
//             <Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
//               sign up
//             </Link>
//           </li>
//         </ul>
//         {button && <Button buttonStyle="btn--outline">sign up</Button>}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Travel <i className="fa-solid fa-earth-africa"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;