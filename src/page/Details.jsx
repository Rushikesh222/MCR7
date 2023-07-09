import { useParams } from "react-router-dom";
import { usedata } from "../Content/CardContext";

import "./detials.css";
import { useState } from "react";

export const Details = () => {
  const { trip } = usedata();

  const { id } = useParams();
  const [data, setData] = useState(
    trip.filter((items) => parseInt(items.id) === parseInt(id))
  );

  return (
    <div className="details-container">
      {data.map((list) => {
        const {
          id,
          name,
          loaction,
          price,
          rating,
          review,
          Description,
          openHour,
          image,
        } = list;
        return (
          <div key={id} className="detials-data">
            <h1 className="name">{name}</h1>
            <div className="info">
              <img className="detials-image" src={image} alt="image" />

              <div className="content">
                <p>
                  <strong>Description:</strong>
                  {Description}
                </p>
                <p>
                  <strong>Rating:</strong>
                  {rating}
                </p>
                <p>
                  <strong>Review:</strong>
                  {review}
                </p>
                <p>
                  <strong>Loaction:</strong>
                  {loaction}
                </p>
                <p>
                  <strong>Openning Hours:</strong>
                  {openHour}
                </p>
                <p>
                  <strong>Ticket price:</strong>
                  {price}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// id,name,loaction,price,rating,review,Description,openHour
