import "./Destinations.css"
import DestinationBox from "./DestinationBox";

function Destinations() {
  const allDestinations = [
    {
      id: 1,
      name: "Trickle Creek Ranch",
      img: "public/imgs/images/image1.jpg",
    },
    {
      id: 2,
      name: "Dragonfly Tiny Cabin",
      img: "public/imgs/images/image2.jpg",
    },
    {
      id: 3,
      name: "Tiny Cabin in the mountains",
      img: "public/imgs/images/image3.jpg",
    },
    { id: 4, name: "The Stuga", img: "public/imgs/images/image4.jpg" },
    {
      id: 5,
      name: "Luxury Tiny Beach Cabin",
      img: "public/imgs/images/image5.jpg",
    },
    { id: 6, name: "The Summit Cabin", img: "public/imgs/images/image6.jpg" },
    {
      id: 7,
      name: "Kindred Spirits Cabin",
      img: "public/imgs/images/image7.jpg",
    },
    {
      id: 8,
      name: "The Hermitage Cabin",
      img: "public/imgs/images/image8.jpg",
    },
    { id: 9, name: "The Tree House", img: "public/imgs/images/image9.jpg" },
    {
      id: 10,
      name: "Barrier island elevated tent",
      img: "public/imgs/images/image10.jpg",
    },
    {
      id: 11,
      name: "Red Lifeguard Stand",
      img: "public/imgs/images/image11.jpg",
    },
    {
      id: 12,
      name: "Ninovan on the Shore",
      img: "public/imgs/images/image12.jpg",
    },
  ];

  return (
    <div className="container">
      <section className="destinations">
        <div className="destination-title-container">
          <img
            src="../../public/imgs/svgs/destination.svg"
            className="destination-title-container__icon"
            alt=""
          />
          <h2 className="destination-title-container__title">
            Explore Destinations & Activities
          </h2>
        </div>
        <DestinationBox {...allDestinations[0]} />
        <DestinationBox {...allDestinations[1]} />
        <DestinationBox {...allDestinations[2]} />
        <DestinationBox {...allDestinations[3]} />
        <DestinationBox {...allDestinations[4]} />
        <DestinationBox {...allDestinations[5]} />
        <DestinationBox {...allDestinations[6]} />
        <DestinationBox {...allDestinations[7]} />
        <DestinationBox {...allDestinations[8]} />
        <DestinationBox {...allDestinations[9]} />
        <DestinationBox {...allDestinations[10]} />
        <DestinationBox {...allDestinations[11]} />
        <a href="#" className="destinations__link btn">
          View all
        </a>
      </section>
      <div className="left-blub blub"><img src="./public/imgs/svgs/shape2.svg" alt="" /></div>
      <div className="right-blub blub"><img src="./public/imgs/svgs/shape1.svg" alt="" /></div>
    </div>
  );
}


export default Destinations;