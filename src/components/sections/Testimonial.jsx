import { Quote } from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

function Testimonial() {
  return (
    <section className="section testimonial">
      <div className="container testimonial-grid">
        <Reveal direction="left">
          <div>
            <SectionLabel number="05">
              FROM THE PARENTS
            </SectionLabel>

            <h2>
              A school where
              <br />
              students <em>thrive.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="testimonial-card">
            <Quote size={35} />

            <p>
              “Tula's International School has truly exceeded our
              expectations. The focus on holistic development and
              the encouragement provided by the teachers have
              played a significant role in our child's growth.”
            </p>

            <div className="testimonial-author">
              <strong>Parent Community</strong>

              <span>
                Tulas International School
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonial;