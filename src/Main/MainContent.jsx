import Service from "../Service/Service"
import Destination from "../Destination/Destination"
import "../styles/reset.css"
import "../styles/fonts.css" 
import "../styles/container.css"
import "./MainContent.css"


function Main () {
    const allDestinations = [
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
    const AllServices = [
        {id: 1, name : "Camping & Day Use" , img : "../../public/imgs/svgs/fire.svg" , caption: "Return to your favorite spot or discover a new one that’s right for you."},
        {id: 2, name : "Tours & Tickets" , img : "../../public/imgs/svgs/tickets.svg" ,  caption: "Reserve tours and tickets to participate in events."},
        {id: 3, name : "Permits" , img : "../../public/imgs/svgs/paper.svg" , caption: "Obtain permits for access to high-demand locations."},
        {id: 4, name : "Recreation Activities" , img : "../../public/imgs/svgs/fish.svg" , caption: "Find the best spots for hunting, fishing & recreational shooting."},
    ]
    return (
        <main>
        <div className="container">
            <section className="services">
                <Service {...AllServices[0]} />
                <Service {...AllServices[1]} />
                <Service {...AllServices[2]} />
                <Service {...AllServices[3]} />
            </section>
            <section className="destinations">
                <div className="destination-title-container">
                        <img src="../../public/imgs/svgs/destination.svg"  className="destination-title-container__icon" alt="" />
                        <h2 className="destination-title-container__title">
                            Explore Destinations
                            & Activities
                        </h2>
                </div>
                <Destination {...allDestinations[0]} />
                <Destination {...allDestinations[1]} />
                <Destination {...allDestinations[2]} />
                <Destination {...allDestinations[3]} />
                <Destination {...allDestinations[4]}/>
                <Destination {...allDestinations[5]} />
                <Destination {...allDestinations[6]} />
                <Destination {...allDestinations[7]} />
                <Destination {...allDestinations[8]} />
                <Destination {...allDestinations[9]}/>
                <Destination {...allDestinations[10]} />
                <Destination {...allDestinations[11]} />
                <a href="#" className="destinations__link btn">View all</a>
            </section>
        </div>
        </main>

    )
}

export default Main; 