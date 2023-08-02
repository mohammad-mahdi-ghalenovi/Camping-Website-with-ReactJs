import "../styles/reset.css"
import "../styles/fonts.css" 
import "./MainContent.css"
import "../styles/container.css"
import Service from "../Service/Service"

function Main () {
    return (
        <div className="container">
            <section className="services">
                <Service />
                <Service />
                <Service />
                <Service />
            </section>
        </div>
    )
}

export default Main; 