import { Check, Phone } from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";
import Button from "../common/Button";

import { schoolData } from "../../data/schoolData";
import { images } from "../../assets/images";

function Admissions() {
  return (
    <section
      className="admissions"
      id="admissions"
    >
      <div
        className="admissions-background"
        style={{
          backgroundImage: `url(${images.hero})`,
        }}
      />

      <div className="admissions-overlay" />

      <div className="container admissions-content">
        <Reveal>
          <SectionLabel number="06" light>
            ADMISSIONS
          </SectionLabel>
        </Reveal>

        <Reveal>
          <h2>
            Give your child
            <br />
            <em>a world of possibilities.</em>
          </h2>
        </Reveal>

        <Reveal>
          <p>
            TIS offers admission opportunities across Grades
            IV–XII. Start your child's journey with a school that
            combines academic learning with holistic development.
          </p>
        </Reveal>

        <Reveal>
          <div className="admission-actions">
            <Button
              href={schoolData.admissionWebsite}
              target="_blank"
            >
              Apply Online
            </Button>

            <a
              href={`tel:${schoolData.phone}`}
              className="outline-button"
            >
              <Phone size={17} />
              Call Admissions
            </a>
          </div>
        </Reveal>

        <div className="admission-points">
          <span>
            <Check size={14} />
            Grades IV–XII
          </span>

          <span>
            <Check size={14} />
            Boarding & Day School
          </span>

          <span>
            <Check size={14} />
            CBSE Curriculum
          </span>
        </div>
      </div>
    </section>
  );
}

export default Admissions;