import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Button from "../common/Button";
import { schoolData } from "../../data/schoolData";
import { images } from "../../assets/images";

function Hero() {
  return (
    <section className="hero" id="top">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${images.hero})`,
        }}
      />

      <div className="hero-overlay" />

      <div className="container hero-content">
        <motion.div
          className="hero-kicker"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span />

          {schoolData.name.toUpperCase()} · DEHRADUN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where education
          <br />
          <em>meets possibility.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          A premier boarding and day school in Dehradun,
          combining CBSE education with holistic development,
          world-class sports and opportunities for every student
          to discover their potential.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Button
            href={schoolData.admissionWebsite}
            target="_blank"
          >
            Apply Now
          </Button>

          <a href="#about" className="hero-discover">
            <span>
              <ArrowDown size={14} />
            </span>

            Discover TIS
          </a>
        </motion.div>
      </div>

      <div className="container hero-bottom">
        <div className="scroll-text">
          <ArrowDown size={15} />
          SCROLL TO EXPLORE
        </div>

        <div className="hero-mini-stats">
          <div>
            <strong>{schoolData.established}</strong>
            <span>Established</span>
          </div>

          <div>
            <strong>{schoolData.sports}</strong>
            <span>Sports</span>
          </div>

          <div>
            <strong>{schoolData.campus.replace(" Campus", "")}</strong>
            <span>Acre Campus</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;