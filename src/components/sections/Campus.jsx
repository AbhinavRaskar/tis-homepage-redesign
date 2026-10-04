import { ArrowUpRight } from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

import { gallery } from "../../data/schoolData";

function Campus() {
  return (
    <section className="section campus" id="campus">
      <div className="container">
        <div className="campus-heading">
          <Reveal>
            <SectionLabel number="04">
              CAMPUS LIFE
            </SectionLabel>
          </Reveal>

          <Reveal>
            <h2>
              Spaces designed
              <br />
              <em>to inspire.</em>
            </h2>
          </Reveal>

          <Reveal>
            <p>
              TIS provides a nurturing campus environment where
              students can learn, explore interests, build
              friendships and develop confidence.
            </p>
          </Reveal>
        </div>

        <div className="gallery">
          {gallery.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 0.1}
            >
              <div
                className={`gallery-card ${
                  index === 0 ? "gallery-large" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay" />

                <div className="gallery-content">
                  <span>TIS</span>

                  <h3>{item.title}</h3>

                  <ArrowUpRight size={19} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Campus;