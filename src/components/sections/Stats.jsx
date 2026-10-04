import {
  Building2,
  HeartPulse,
  Trophy,
  Users,
} from "lucide-react";

import Reveal from "../animation/Reveal";
import { stats } from "../../data/schoolData";

const icons = [
  Building2,
  Trophy,
  HeartPulse,
  Users,
];

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => {
          const Icon = icons[index];

          return (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="stat-card">
                <Icon size={25} />

                <strong>{stat.value}</strong>

                <span>{stat.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;