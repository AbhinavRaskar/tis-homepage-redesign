import {
  ArrowUpRight,
  Building2,
  Mail,
  Phone,
} from "lucide-react";

import Reveal from "../animation/Reveal";
import SectionLabel from "../common/SectionLabel";

import { schoolData } from "../../data/schoolData";

function ContactItem({
  icon: Icon,
  title,
  children,
  href,
}) {
  const content = (
    <>
      <div className="contact-icon">
        <Icon size={19} />
      </div>

      <div>
        <span>{title}</span>

        <strong>{children}</strong>
      </div>

      {href && <ArrowUpRight size={17} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className="contact-item">
        {content}
      </a>
    );
  }

  return (
    <div className="contact-item">
      {content}
    </div>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <Reveal direction="left">
          <div>
            <SectionLabel number="07">
              CONTACT US
            </SectionLabel>

            <h2>
              Let's start a
              <br />
              <em>conversation.</em>
            </h2>

            <p>
              Have questions about admissions, academics,
              boarding or campus life? The TIS team is here to
              help.
            </p>
          </div>
        </Reveal>

        <Reveal direction="right">
          <div className="contact-details">
            <ContactItem
              icon={Building2}
              title="Visit Us"
            >
              {schoolData.address}
            </ContactItem>

            <ContactItem
              icon={Phone}
              title="Admission Helpline"
              href={`tel:${schoolData.phone}`}
            >
              {schoolData.phone}
            </ContactItem>

            <ContactItem
              icon={Phone}
              title="Landline"
            >
              {schoolData.landline}
            </ContactItem>

            <ContactItem
              icon={Mail}
              title="Email"
              href={`mailto:${schoolData.email}`}
            >
              {schoolData.email}
            </ContactItem>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tulas+International+School+Dehradun"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Open Location in Google Maps

              <ArrowUpRight size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;