import Service from "../Service/Service"
import Destination from "../Destination/Destination"
import "../styles/reset.css"
import "../styles/fonts.css" 
import "../styles/container.css"
import "./MainContent.css"


function Main () {
    const allDestination = [
        {id: 1, name : "Trickle Creek Ranch" , img : "public/imgs/images/image1.jpg"},
        {id: 2, name : "Dragonfly Tiny Cabin" , img : "public/imgs/images/image2.jpg"},
        {id: 3, name : "Tiny Cabin in the mountains" , img : "public/imgs/images/image3.jpg"},
        {id: 4, name : "The Stuga" , img : "public/imgs/images/image4.jpg"},
        {id: 5, name : "Luxury Tiny Beach Cabin" , img : "public/imgs/images/image5.jpg"},
        {id: 6, name : "The Summit Cabin" , img : "public/imgs/images/image6.jpg"},
        {id: 7, name : "Kindred Spirits Cabin" , img : "public/imgs/images/image7.jpg"},
        {id: 8, name : "The Hermitage Cabin" , img : "public/imgs/images/image8.jpg"},
        {id: 9, name : "The Tree House" , img : "public/imgs/images/image9.jpg"},
        {id: 10, name : "Barrier island elevated tent" , img : "public/imgs/images/image10.jpg"},
        {id: 11, name : "Red Lifeguard Stand" , img : "public/imgs/images/image11.jpg"},
        {id: 12, name : "Ninovan on the Shore" , img : "public/imgs/images/image12.jpg"},
    ]
    return (
        <main>
        <div className="container">
            <section className="services">
                <Service name="Camping & Day Use" img="../../public/imgs/svgs/fire.svg" caption="Return to your favorite spot or discover a new one that’s right for you."/>
                <Service name="Tours & Tickets" img="../../public/imgs/svgs/tickets.svg" caption="Reserve tours and tickets to participate in events."/>
                <Service name="Permits" img="../../public/imgs/svgs/paper.svg" caption="Obtain permits for access to high-demand locations."/>
                <Service name="Recreation Activities" img="../../public/imgs/svgs/fish.svg" caption="Find the best spots for hunting, fishing & recreational shooting."/>
            </section>
            <section className="destinations">
                <div className="destination-title-container">
                        <img src="../../public/imgs/svgs/destination.svg"  className="destination-title-container__icon" alt="" />
                        <h2 className="destination-title-container__title">
                            Explore Destinations
                            & Activities
                        </h2>
                </div>
                <Destination {...allDestination[0]} />
                <Destination {...allDestination[1]} />
                <Destination {...allDestination[2]} />
                <Destination {...allDestination[3]} />
                <Destination {...allDestination[4]}/>
                <Destination {...allDestination[5]} />
                <Destination {...allDestination[6]} />
                <Destination {...allDestination[7]} />
                <Destination {...allDestination[8]} />
                <Destination {...allDestination[9]}/>
                <Destination {...allDestination[10]} />
                <Destination {...allDestination[11]} />
                <a href="#" className="destinations__link btn">View all</a>
            </section>
        </div>
        </main>

    )
}

export default Main; 