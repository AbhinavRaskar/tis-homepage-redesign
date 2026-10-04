import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

import { navigation, schoolData } from "../../data/schoolData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <a
          href="#top"
          className="logo"
          onClick={() => setOpen(false)}
        >
          <div className="logo-mark">T</div>

          <div className="logo-text">
            <strong>TULAS</strong>
            <span>INTERNATIONAL SCHOOL</span>
          </div>
        </a>

        <nav className="desktop-nav">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={schoolData.admissionWebsite}
          target="_blank"
          rel="noreferrer"
          className="nav-apply"
        >
          Apply Now

          <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            href={schoolData.admissionWebsite}
            target="_blank"
            rel="noreferrer"
            className="mobile-apply"
          >
            Apply Online
            <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;