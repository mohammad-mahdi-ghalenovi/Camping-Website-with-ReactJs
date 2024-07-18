import ServiceBox from "./ServiceBox";
import { servicesData } from "../../data";
import { useState } from "react";

function Services() {
  const [allServices, setAllServices] = useState(servicesData);

  return (
    <div className="container">
      <section className="services">
        {allServices.map((service) => (
          <ServiceBox key={service.id} {...service} />
        ))}
      </section>
    </div>
  );
}

export default Services;
