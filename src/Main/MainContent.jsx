import "../styles/reset.css"
import "../styles/fonts.css" 
import "./MainContent.css"
import "../styles/container.css"
import Service from "../Service/Service"
import "../styles/reset.css"
import "../styles/fonts.css" 
import "../styles/container.css"
import "../styles/responsive.css"

function Main () {
    return (
        <div className="container">
            <section className="services">
                <Service name="Camping & Day Use" img="../../public/imgs/svgs/fire.svg" caption="Return to your favorite spot or discover a new one that’s right for you."/>
                <Service name="Tours & Tickets" img="../../public/imgs/svgs/tickets.svg" caption="Reserve tours and tickets to participate in events."/>
                <Service name="Permits" img="../../public/imgs/svgs/paper.svg" caption="Obtain permits for access to high-demand locations."/>
                <Service name="Recreation Activities" img="../../public/imgs/svgs/fish.svg" caption="Find the best spots for hunting, fishing & recreational shooting."/>
            </section>
        </div>
    )
}

export default Main; 