import { Check } from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

import { sports } from "../../data/schoolData";
import { images } from "../../assets/images";

function Sports() {
  return (
    <section className="section sports" id="sports">
      <div className="container sports-grid">
        <Reveal direction="left">
          <div className="sports-image">
            <img
              src={images.sports}
              alt="Sports and activities at Tulas International School"
            />

            <div className="sports-badge">
              <strong>16+</strong>
              <span>SPORTS</span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="sports-content">
            <SectionLabel number="03" light>
              BEYOND ACADEMICS
            </SectionLabel>

            <h2>
              Discover.
              <br />
              <em>Challenge.</em>
              <br />
              Grow.
            </h2>

            <p>
              At Tulas, sports are more than facilities. They
              encourage discipline, teamwork, confidence,
              perseverance and well-being.
            </p>

            <div className="sports-list">
              {sports.map((sport) => (
                <div key={sport}>
                  <Check size={14} />
                  {sport}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Sports;