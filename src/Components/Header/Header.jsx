import "./header.css"
import Nav from "../Nav/Nav"


function Header () {
    return(
        <header>
        <div className="container" > 
                <Nav />
                <div className="header-content">
                        <h1 className="header-content__title">Find Yourself <br /> Outside</h1>
                        <p className="header-content__caption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum delectus quaerat sint maxime laudantium reiciendis possimus quo, </p>
                        <a href="#" className="btn header-content__link">Discover</a>
                </div>
        </div>
    </header>
    )
}

export default Header;