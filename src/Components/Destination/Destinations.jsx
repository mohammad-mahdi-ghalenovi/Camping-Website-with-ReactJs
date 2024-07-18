import { useState } from "react";
import {desitnationsData} from "../../data";
import "./Destinations.css";
import DestinationBox from "./DestinationBox";

function Destinations() {
  const [allDestinations, setAllDistanations ] = useState(desitnationsData);


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
        
        {allDestinations.map(distination => (
          <DestinationBox key={distination.id} {...distination} />
        ))}

        <a href="#" className="destinations__link btn">
          View all
        </a>
      </section>
      <div className="left-blub blub">
        <img src="./public/imgs/svgs/shape2.svg" alt="" />
      </div>
      <div className="right-blub blub">
        <img src="./public/imgs/svgs/shape1.svg" alt="" />
      </div>
    </div>
  );
}

export default Destinations;
