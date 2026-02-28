import "../index.css";

export default function Landing() {
  return (
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
  );
}
