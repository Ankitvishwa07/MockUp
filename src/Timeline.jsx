import { useEffect, useRef } from "react";
import "./App.css";

const movies = [
  { title: "Iron Man", year: "2008", poster: "https://m.media-amazon.com/images/I/81aA7hEEykL._AC_SY679_.jpg", icon: "https://cdn-icons-png.flaticon.com/512/1246/1246307.png", color: "#E62429", description: "Tony Stark builds the first Iron Man suit and begins the MCU." },
  { title: "Hulk", year: "2008", poster: "https://image.tmdb.org/t/p/original/2nBpExDoInX3VreBsIm9qOTqXs8.jpg", icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png", color: "#4CAF50", description: "Bruce Banner becomes the Hulk after a gamma radiation experiment goes wrong." },
  { title: "Thor", year: "2011", poster: "https://c8.alamy.com/comp/R2FK2G/thor-the-dark-world-year-2013-usa-director-alan-taylor-chris-hemsworth-movie-poster-usa-R2FK2G.jpg", color: "#2196F3", description: "Thor is banished to Earth and must prove himself worthy." },
  { title: "Captain America: The First Avenger", year: "2011", poster: "https://www.moriareviews.com/rongulator/wp-content/uploads/Captain-America-The-First-Avenger-2011-poster.jpg", icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png", color: "#FFC107", description: "Steve Rogers becomes Captain America during World War II." },
  { title: "The Avengers", year: "2012", poster: "https://m.media-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg", icon: "https://cdn-icons-png.flaticon.com/512/809/809957.png", color: "#0052CC", description: "Earth's mightiest heroes unite against Loki." },
  { title: "Guardians of the Galaxy", year: "2014", poster: "https://c8.alamy.com/comp/R2H9F9/guardians-of-the-galaxy-year-2014-usa-uk-director-james-gunn-zoe-saldana-chris-pratt-movie-poster-fr-R2H9F9.jpg", icon: "https://cdn-icons-png.flaticon.com/512/616/616408.png", color: "#9C27B0", description: "A group of intergalactic criminals must work together to save the galaxy." },
  { title: "Infinity War", year: "2018", poster: "https://i.pinimg.com/originals/38/eb/dc/38ebdcba7725e6953931be26040b1b35.jpg", color: "#6F2DA8", description: "Thanos begins his quest for the Infinity Stones." },
  { title: "Endgame", year: "2019", poster: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", icon: "https://cdn-icons-png.flaticon.com/512/4336/4336814.png", color: "#C6A23A", description: "The final battle to undo the snap." }
];

export default function Timeline() {
  const fillRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const fill = fillRef.current;
    const bg = bgRef.current;
    const sections = document.querySelectorAll(".section");

    // Intersection Observer for fade-in
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("fade-in");
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      fill.style.height = `${scrollPercent}%`;

      // Determine current section
      let currentSection = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) currentSection = index;
      });

      const color = movies[currentSection].color;
      fill.style.background = color;

      // Dynamic full-screen radial background glow
      bg.style.background = `radial-gradient(circle at center, ${color}55 0%, ${color}11 100%)`;
      bg.style.transition = "background 0.5s ease";
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container">
      {/* Glow Background */}
      <div className="glow-overlay" ref={bgRef}></div>

      {/* Timeline */}
      <div className="timeline">
        <div className="timeline-fill" ref={fillRef}></div>
      </div>

      {/* Sections */}
      {movies.map((movie, index) => (
        <section key={index} className={`section ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="icon-wrapper">
            <div className="icon" style={{ borderColor: movie.color }}>
              <img src={movie.icon} alt="icon" />
            </div>
          </div>

          <div className="content">
            <img
              src={movie.poster}
              alt={movie.title}
              style={{
                boxShadow: `0 0 150px ${movie.color}88, 0 0 300px ${movie.color}55, 0 0 450px ${movie.color}33, 0 40px 120px rgba(0,0,0,0.6)`,
                transition: "box-shadow 0.5s ease"
              }}
            />
            <div className="info">
              <h1>{movie.title}</h1>
              <h3>{movie.year}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}