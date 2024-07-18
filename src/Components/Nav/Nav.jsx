import { useState } from "react";
import "../Header/header.css";

function Nav() {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  let [menuNavs, setMenuNavs] = useState([
    { id: 1, title: "Home", isActive: true },
    { id: 2, title: "Destination", isActive: false },
    { id: 3, title: "Near me", isActive: false },
    { id: 4, title: "Events ", isActive: false },
    { id: 5, title: "Blog", isActive: false },
    { id: 6, title: "Gallery", isActive: false },
    { id: 7, title: "About", isActive: false },
  ]);

  const toggleActiveNav = (navID) => {
    let navs = [...menuNavs];

    navs.forEach((nav) => {
      nav.isActive = false;
    });

    navs.some((nav) => {
      if (nav.id === navID) {
        nav.isActive = true;
      }
    });

    setMenuNavs(navs);
  };

  return (
    <nav className="nav">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <div className="nav__wrapper">
        <a href="#" className="nav-logo">
          <img
            src="imgs/svgs/logo.svg"
            alt="camping website"
            className="nav-logo__img"
          />
        </a>
        <ul className="menu">
          {/*  */}
          {menuNavs.map((nav) => (
            <li
              className="menu__item"
              key={nav.id}
              onClick={(e) => toggleActiveNav(nav.id)}
            >
              <a
                href="#"
                className={
                  nav.isActive ? `menu__link menu__link--active` : `menu__link `
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
          {/*  */}
        </ul>
      </div>
      <div className={isMenuVisible ? `nav-menu nav-menu--open` : `nav-menu`}>
        <ul className="mobile-menu">
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              {" "}
              <i className="fa fa-home"></i> Home
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-plane"></i> Destination
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-location"></i>Near Me
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-calendar"></i>Events
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-th-large"></i>Blog
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-camera"></i>Gallery
            </a>
          </li>
          <li className="mobile-menu__item">
            <a href="#" className="mobile-menu__link">
              <i className="fa fa-info"></i>About
            </a>
          </li>
        </ul>
        <div className="nav-menu__links">
          <a href="#" className="nav-menu__link mobile-menu__item">
            Sign up
          </a>
          <a href="#" className="nav-menu__link mobile-menu__item">
            Sign in
          </a>
        </div>
      </div>
      <div className="nav__links">
        <a href="#" className="nav__link">
          Sign up
        </a>
        <a href="#" className="nav__link nav__link--active">
          Sign in
        </a>
      </div>
      <div
        className={isMenuVisible ? `nav-btn  nav-btn--open` : `nav-btn`}
        onClick={(e) => setIsMenuVisible((prev) => !prev)}
      >
        <span className="nav-btn__line"></span>
      </div>
    </nav>
  );
}

export default Nav;
