import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

import { images } from "../../assets/images";

function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal direction="left">
          <SectionLabel number="01">
            ABOUT TIS
          </SectionLabel>
        </Reveal>

        <Reveal>
          <div className="about-content">
            <h2>
              The <em>Modern Gurukul.</em>
              <br />
              A place to belong.
            </h2>

            <p className="about-lead">
              Tulas International School was established in 2012
              under the aegis of Rishabh Educational Trust to
              impart education through seamless opportunities.
            </p>

            <p>
              TIS is a premier co-educational residential school
              in Dehradun offering education from Grade IV to XII.
              The school combines academic excellence with
              holistic development and a nurturing environment.
            </p>

            <p>
              At Tulas, school is not simply about lessons. It is
              about endless opportunities waiting to be explored —
              from academics and technology to music, art, drama,
              leadership and sports.
            </p>

            <a href="#academics" className="text-link">
              Discover our learning philosophy
              <span>↗</span>
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <div className="about-image">
          <img src={images.campus} alt="Tulas International School campus" />

          <div className="about-image-caption">
            <span>OUR PHILOSOPHY</span>

            <strong>
              Curiosity leads.
              <br />
              Creativity thrives.
            </strong>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default About;