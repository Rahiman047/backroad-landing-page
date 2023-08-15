import React from "react";
import Title from "./Title";
import { servicesOffered } from "./ToursData";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {servicesOffered.map((eachService) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className="fas fa-wallet fa-fw"></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{eachService.serviceName}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
