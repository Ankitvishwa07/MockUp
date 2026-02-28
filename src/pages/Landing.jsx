import "../index.css";
import { useNavigate } from "react-router-dom";

export default function Landing() {

  const navigate = useNavigate();

  const goToScroll = () => {
    navigate("/scroll");
  };

  return (
    <div
      onClick={goToScroll}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <div className="video-container">
        <iframe
          id="youtube-video"
          className="youtube-bg"
          src="https://www.youtube.com/embed/Ok5PXdmQV-s?autoplay=1&mute=1&controls=0&loop=1&playlist=Ok5PXdmQV-s&modestbranding=1&showinfo=0&rel=0"
          title="Marvel Intro"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
