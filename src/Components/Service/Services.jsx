import ServiceBox from "./ServiceBox"

function Services () {
    const AllServices = [
        {id: 1, name : "Camping & Day Use" , img : "public/imgs/svgs/fire.svg" , caption: "Return to your favorite spot or discover a new one that’s right for you."},
        {id: 2, name : "Tours & Tickets" , img : "public/imgs/svgs/tickets.svg" ,  caption: "Reserve tours and tickets to participate in events."},
        {id: 3, name : "Permits" , img : "public/imgs/svgs/paper.svg" , caption: "Obtain permits for access to high-demand locations."},
        {id: 4, name : "Recreation Activities" , img: "public/imgs/svgs/fish.svg" , caption: "Find the best spots for hunting, fishing & recreational shooting."},
    ]
    
    return (
        <div className="container">
             <section className="services">
                <ServiceBox {...AllServices[0]} />
                <ServiceBox {...AllServices[1]} />
                <ServiceBox {...AllServices[2]} />
                <ServiceBox {...AllServices[3]} />
            </section>
        </div>

    )
}

export default Services;