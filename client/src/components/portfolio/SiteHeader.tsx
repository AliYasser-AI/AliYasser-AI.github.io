import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Selected work" },
  { href: "#hiring", label: "For teams" },
  { href: "#skills", label: "Capabilities" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Ali Yasser, back to top">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 42" fill="none">
              <path d="M21 3.5 36 12v18L21 38.5 6 30V12L21 3.5Z" />
              <path d="m12.5 28 8.8-17 8.2 17M16.1 21h10.2M25.4 28l5.2-5.5-5.2-5" />
            </svg>
          </span>
          <span className="brand-copy">
            <strong>ALI YASSER</strong>
                    <small>PENTESTING · RESEARCH · REPORTING</small>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="/Ali-Yasser-Ali-CV.pdf"
            download="Ali-Yasser-Ali-CV.pdf"
            aria-label="Download Ali Yasser Ali's CV as a PDF"
            onClick={() => setMenuOpen(false)}
          >
            Download CV <Download size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
