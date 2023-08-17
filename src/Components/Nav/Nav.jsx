import "../Header/header.css"

function Nav () {
    return (
        <nav className="nav" onLoad={setLinkClass}>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
                    <a href="#" className="mobile-menu__link"> <i className="fa fa-home"></i> Home</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-plane"></i> Destination</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-location"></i>Near Me</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-calendar"></i>Events</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-th-large"></i>Blog</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-camera"></i>Gallery</a>
                </li>
                <li className="mobile-menu__item">
                    <a href="#" className="mobile-menu__link"><i className="fa fa-info"></i>About</a>
                </li>
            </ul>
            <div className="nav-menu__links">
                    <a href="#" className="nav-menu__link mobile-menu__item">Sign up</a>
                    <a href="#" className="nav-menu__link mobile-menu__item">Sign in</a>
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

export default Nav;