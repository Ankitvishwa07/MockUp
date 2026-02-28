import { NavLink } from "react-router-dom";
import "../index.css";

export default function Section() {
  return (
    <div className="container">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.h9mhSIDeDAWd0z4AFPQXIQHaEK?pid=Api&P=0&h=180"
            alt="Marvel Logo"
          />
        </div>
      </div>

      {/* Posters Section */}
      <div className="poster-section">
        <div className="outer-poster">
          <div className="posters">
            <img
              src="https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg"
              alt="Poster 1"
            />
            <img
              src="http://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-the-avengers-infinity-war-movie-poster.jpg"
              alt="Infinity War"
            />
            <img
              src="http://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-the-avengers-endgame-movie-poster-830x1230.jpg"
              alt="Endgame"
            />
            <img
              src="https://i.pinimg.com/originals/d9/d7/a4/d9d7a49c44b2a5dde693e12c8ea48142.jpg"
              alt="Poster 4"
            />
            <img
              src="https://posterspy.com/wp-content/uploads/2024/10/Doomsday-by-VISCOM.jpg"
              alt="Doomsday"
            />
            <img
              src="https://m.media-amazon.com/images/I/812jc7w+emL.jpg"
              alt="Poster 6"
            />
            <img
              src="http://cdn.collider.com/wp-content/uploads/thor-the-dark-world-poster-final.jpg"
              alt="Thor"
            />
            <img
              src="https://comic-cons.xyz/wp-content/uploads/marvel-cinematic-universe-black-widow-movie-poster.jpg"
              alt="Black Widow"
            />
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="button-section">
        <div className="text-content">
          <h2 className="main-heading">Welcome to the Marvel Timeline</h2>

          <p className="text">
            Explore the complete Marvel Cinematic Universe in chronological
            order.
            <br />
            Discover every movie, every hero, and every epic moment in one
            place.
          </p>
        </div>

        <NavLink to={"/timeline"}>
          <button className="marvel-btn">ENTER TIMELINE</button>
        </NavLink>
      </div>
    </div>
  );
}
