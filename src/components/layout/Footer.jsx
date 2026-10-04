import {
  ArrowUpRight,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

import { navigation, schoolData } from "../../data/schoolData";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-mark">T</div>

              <div className="logo-text">
                <strong>TULAS</strong>
                <span>INTERNATIONAL SCHOOL</span>
              </div>
            </div>

            <p>
              A premier co-educational boarding and day school in
              Dehradun focused on academic excellence, holistic
              development and global leadership.
            </p>
          </div>

          <div className="footer-links">
            <h4>Explore</h4>

            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="footer-links">
            <h4>Contact</h4>

            <a href={`tel:${schoolData.phone}`}>
              <Phone size={14} />
              {schoolData.phone}
            </a>

            <a href={`mailto:${schoolData.email}`}>
              <Mail size={14} />
              {schoolData.email}
            </a>

            <span>
              <Building2 size={14} />

              {schoolData.location}
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Tulas International
            School. All Rights Reserved.
          </span>

          <a
            href={schoolData.website}
            target="_blank"
            rel="noreferrer"
          >
            Official Website
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;