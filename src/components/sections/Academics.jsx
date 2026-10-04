import {
  BookOpen,
  Brain,
  Lightbulb,
  Monitor,
} from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

import { academicPrograms } from "../../data/schoolData";

const icons = [
  BookOpen,
  Lightbulb,
  Monitor,
  Brain,
];

function Academics() {
  return (
    <section className="section academics" id="academics">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <SectionLabel number="02">
              ACADEMICS
            </SectionLabel>

            <h2>
              Learning that goes
              <br />
              <em>beyond the textbook.</em>
            </h2>

            <p>
              TIS follows the CBSE course structure while
              prioritising reasoning, analytical thinking,
              skill-based education and experiential learning.
            </p>
          </div>
        </Reveal>

        <div className="academic-grid">
          {academicPrograms.map((program, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={program.title}
                delay={index * 0.08}
              >
                <article className="academic-card interactive">
                  <span className="academic-number">
                    {program.number}
                  </span>

                  <Icon size={28} />

                  <h3>{program.title}</h3>

                  <p>{program.description}</p>

                  <a href="#admissions">
                    Explore
                    <span>→</span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Academics;