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
  console.log(data, id);

  return (
    <div>
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
          <div key={id} className="detials data">
            <h1>{name}</h1>
            <div>
              {" "}
              <img src={image} alt="image" />
            </div>

            <div>
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
        );
      })}
    </div>
  );
};

// id,name,loaction,price,rating,review,Description,openHour
