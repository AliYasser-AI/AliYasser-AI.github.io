import { ArrowUpRight, Linkedin, Mail, Youtube } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-name" href="#top">
          Ali Yasser<span> / Penetration Testing</span>
        </a>
        <p>Find what matters. Report how to fix it.</p>
        <a className="footer-email" href={`mailto:${profile.email}`}>
          {profile.email} <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ali Yasser. Built with intent.</span>
        <div className="footer-socials" aria-label="Social links">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href={profile.socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
            <Youtube size={17} />
          </a>
          <a href={profile.socials.medium} target="_blank" rel="noreferrer" aria-label="Medium">
            <span className="medium-icon" aria-hidden="true">M</span>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Ali Yasser">
            <Mail size={16} />
          </a>
        </div>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
