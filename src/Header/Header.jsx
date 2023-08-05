import "../styles/reset.css"
import "../styles/fonts.css" 
import "../styles/container.css"
import "./header.css"


function Header () {
    return(
        <header>
        <div className="container" onLoad={setLinkClass}> 
                <nav className="nav">
                    <div className="nav__wrapper">
                            <a href="#" className="nav-logo">
                            <img src="imgs/svgs/logo.svg" alt="camping website" className="nav-logo__img" />
                        </a>
                        <ul className="menu">
                            <li className="menu__item">
                                <a href="#" className="menu__link">Home</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Destination</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Near Me</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Events</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Blog</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">Gallery</a>
                            </li>
                            <li className="menu__item">
                                <a href="#" className="menu__link">About</a>
                            </li>
                        </ul>
                    </div>
                        <div className="nav-menu">
                        <ul className="mobile-menu">
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Home</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Destination</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Near Me</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Events</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Blog</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">Gallery</a>
                            </li>
                            <li className="mobile-menu__item">
                                <a href="#" className="mobile-menu__link">About</a>
                            </li>
                        </ul>
                        <div className="nav-menu__links">
                                <a href="#" className="nav-menu__link">Sign up</a>
                                <a href="#" className="nav-menu__link">Sign in</a>
                        </div>
                        </div>
                        <div className="nav__links">
                            <a href="#" className="nav__link">Sign up</a>
                            <a href="#" className="nav__link nav__link--active">Sign in</a>
                        </div>
                        <div className="nav-btn" onClick={mobileMenuHandler}>
                            <span className="nav-btn__line"></span>
                        </div>
                </nav>
                <div className="header-content">
                        <h1 className="header-content__title">Find Yourself <br /> Outside</h1>
                        <p className="header-content__caption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum delectus quaerat sint maxime laudantium reiciendis possimus quo, </p>
                        <a href="#" className="btn header-content__link">Discover</a>
                </div>
        </div>
    </header>
    )

    function mobileMenuHandler () {
        const navBtnElem  = document.querySelector(".nav-btn");;
        const navMenuElem = document.querySelector(".nav-menu");

        navBtnElem.classList.toggle("nav-btn--open");
        navMenuElem.classList.toggle("nav-menu--open")
    }

    function setLinkClass () {
        let allLiElems = document.querySelectorAll(".menu__link");
        allLiElems[0].classList.add("menu__link--active")

        allLiElems.forEach(item => {
            item.addEventListener("click" , () => {

                allLiElems.forEach(item => {
                    if (item.classList.contains("menu__link--active"))
                    item.classList.remove("menu__link--active")
                });

                item.classList.toggle("menu__link--active")
            });
        });

    }
    
}

export default Header;