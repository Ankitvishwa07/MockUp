import React, { useState } from "react";
import "./HulkPage.css";
import hulkImage from "./assets/hulk1.png";

const HulkPage = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="hulk-container">
      <h1 className="hulk-title">HULK SMASH!</h1>

      <div className="hulk-banner">
        <img
          src={hulkImage}
          alt="The Incredible Hulk Roaring"
          className="banner-img"
        />
        <span className="banner-text">
          THE INCREDIBLE HULK ROARING
        </span>
      </div>

      <div className="hulk-card">
        <h2>THE INCREDIBLE HULK</h2>

        <p className="quote">
          BRUCE BANNER: "DON'T MAKE ME ANGRY. YOU WOULDN'T LIKE ME WHEN I'M ANGRY."
        </p>

        <p>
          THE HULK IS A RAGING GREEN POWERHOUSE – GAMMA RADIATION TURNED
          MILD-MANNERED SCIENTIST BRUCE BANNER INTO ONE OF THE STRONGEST
          BEINGS IN THE MARVEL UNIVERSE.
        </p>

        <p className="smash-text">HULK SMASH PUNY WEBSITES!</p>

        <p className="stats">
          STRENGTH: LIMITLESS • RAGE LEVEL: ALWAYS RISING • CATCHPHRASE:
          "HULK IS THE STRONGEST ONE THERE IS!"
        </p>
        <p className="hulk-info">
          The story of Hulk in the Marvel Cinematic Universe begins with the tragic transformation of Bruce Banner, a brilliant scientist whose life changes forever after a gamma radiation experiment goes horribly wrong. While attempting to recreate a version of the Super Soldier program, Bruce is exposed to intense gamma radiation. Instead of dying, he develops a condition where extreme anger or stress transforms him into a massive green being of unstoppable strength. This origin is explored in The Incredible Hulk, where Bruce struggles to control his condition while being pursued by the military. His attempt to cure himself fails, and after defeating the Abomination in Harlem, he chooses isolation to protect others from his destructive alter ego.

Hulk’s place in the larger universe truly begins in The Avengers. Recruited by S.H.I.E.L.D., Bruce joins a team of heroes assembled to stop Loki’s invasion of Earth. During the Battle of New York, he embraces his dual nature and famously reveals that his secret is that he is “always angry.” From that moment, Hulk becomes one of the founding members of the Avengers, no longer just a hunted fugitive but a defender of the planet.

However, control remains fragile. In Avengers: Age of Ultron, Hulk is manipulated by Wanda Maximoff’s powers and causes massive destruction in Johannesburg. The guilt of hurting innocent people weighs heavily on Bruce, and fearing the damage he might cause again, he leaves Earth voluntarily in a Quinjet. This self-imposed exile leads him far across the universe.

His journey brings him to Sakaar in Thor: Ragnarok, where Hulk becomes a celebrated gladiator champion. For nearly two years, Bruce disappears entirely, with Hulk remaining in control. On Sakaar, Hulk develops more personality and independence, speaking more clearly and showing emotion beyond rage. When he reunites with Thor, he helps save Asgard from destruction, marking a turning point in his evolution from mindless force to a more layered character.

The next major chapter unfolds in Avengers: Infinity War, where Hulk faces Thanos at the very beginning and is decisively defeated. This loss deeply affects him. For the rest of the film, Hulk refuses to emerge, leaving Bruce vulnerable and symbolizing an internal conflict between the two identities. It is the first time Hulk retreats rather than fights.

By the time of Avengers: Endgame, Bruce has resolved this inner struggle in an unexpected way. Through experimentation, he merges his intelligence with Hulk’s strength, creating what fans call “Professor Hulk.” This version combines Banner’s mind and Hulk’s body into a balanced being. It is this form that wields the Infinity Stones to reverse Thanos’s Snap, sacrificing the full use of his arm in the process. This act represents Hulk’s most heroic and selfless moment in the MCU timeline.

Later, in She-Hulk: Attorney at Law, Hulk appears more stable and at peace. He mentors his cousin Jennifer Walters after she gains similar gamma-powered abilities. By this stage, he is no longer driven by rage or fear but by acceptance of who he is. The revelation that he has a son, Skaar, suggests that his story continues beyond the Avengers era.

Across the Marvel timeline, Hulk evolves from a hunted monster to a founding Avenger, from a guilt-ridden exile to a gladiator champion, from a broken warrior to a balanced hero. His journey is not just about strength, but about identity, control, and learning to live with the parts of himself he once feared.

        </p>
        
        
      </div>

      <div className="gamma-section">
        <p>
          CLICK BELOW TO VIEW HULK →
          <span
            className="gamma-link"
            onClick={() => setShowModel(true)}
          >
            ENTER THE GAMMA ZONE
          </span>
        </p>
      </div>

      {/* 👇 3D MODEL SECTION */}
      {showModel && (
        <div className="model-container">
          <iframe
            title="Hulk 3D Model"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src="https://sketchfab.com/models/96274605878d4a4e9c2b964fd5bd9ee1/embed"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default HulkPage;