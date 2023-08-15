import React from "react";
import { toursData } from "./ToursData";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {toursData.map((eachTour) => {
          return (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={eachTour.toursImage} className="tour-img" alt="" />
                <p className="tour-date">{eachTour.topDate}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{eachTour.toursHeading}</h4>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque vitae tempore voluptatum maxime reprehenderit eum quod
                  exercitationem fugit, qui corporis.
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {eachTour.spanTitle}
                  </p>
                  <p>{eachTour.spanSecondPara}</p>
                  <p>{eachTour.spanThirdPara}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
