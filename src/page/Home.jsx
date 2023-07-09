import { useNavigate } from "react-router-dom";
import { usedata } from "../Content/CardContext";
import "./home.css";

export const Home = () => {
  const { trip } = usedata();
  const navigate = useNavigate();

  return (
    <div className="home-display">
      <h1>Welcome to trip Advisor</h1>
      <h2 className="second-title">top continents for your next holiday</h2>
      {trip.map((items) => {
        const { id, image, loaction } = items;
        return (
          <div
            className="display-container"
            onClick={() => navigate(`/details/${id}`)}
            key={id}
          >
            <img className="image-trip" src={image} />
            <div className="loaction">
              <span class="material-symbols-outlined">location_on</span>{" "}
              <p>{loaction}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
