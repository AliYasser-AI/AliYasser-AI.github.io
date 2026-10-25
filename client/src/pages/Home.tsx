import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Crosshair,
  Download,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Radar,
  ScanLine,
  ShieldCheck,
  Trophy,
  Youtube,
} from "lucide-react";
import { useEffect } from "react";
import SiteFooter from "@/components/portfolio/SiteFooter";
import SiteHeader from "@/components/portfolio/SiteHeader";
import SectionHeading from "@/components/portfolio/SectionHeading";
import {
  certifications,
  community,
  competitions,
  experience,
  findings,
  profile,
  skillGroups,
} from "@/data/portfolio";
import { blogPosts } from "@/data/blogPosts";

const heroImage = "/manus-storage/async-images/jIU3JDn2AujWNgJiBHKwnE/image-1.webp";

export default function Home() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner shell">
            <div className="hero-copy">
              <div className="status-line"><span className="status-dot" /> CAIRO, EGYPT <i /> PENETRATION TESTER</div>
              <p className="hero-kicker"><span>PENETRATION TESTER</span><b>·</b> BUG BOUNTY HUNTER</p>
              <h1 id="hero-title">Find the weakness.<br /><em>Prove the risk.</em></h1>
              <p className="hero-lead">
                I’m Ali Yasser Ali — a penetration tester and active bug bounty hunter. I lead full-scope web, network, and Active Directory assessments, then turn verified findings into clear remediation guidance.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">Explore pentest work <ArrowRight size={16} /></a>
                <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
              </div>
              <div className="hero-proofline">
                <span><ShieldCheck size={16} /> 25+ validated findings</span>
                <span><MapPin size={15} /> Cairo, Egypt</span>
              </div>
            </div>

            <div className="hero-visual" data-reveal>
              <div className="visual-frame">
                <img src={heroImage} alt="Abstract glowing network paths forming a shield against a dark field" />
                <div className="visual-vignette" />
                <div className="visual-topline"><span><i /> AUTHORIZED SECURITY TESTING</span><span>WEB · NET · AD</span></div>
                <div className="visual-caption">
                  <span className="caption-icon"><ScanLine size={17} /></span>
                  <div><b>TEST THE ASSUMPTION.</b><small>REPORT THE REMEDIATION.</small></div>
                </div>
                <div className="visual-code" aria-hidden="true">RECON / VALIDATE / REPORT</div>
              </div>
              <div className="visual-side-note"><span>01</span><span>PENETRATION<br />TESTER</span></div>
              <div className="hero-orbit orbit-one" aria-hidden="true" />
              <div className="hero-orbit orbit-two" aria-hidden="true" />
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        </section>

        <section className="metrics-strip" aria-label="Career highlights">
          <div className="shell metrics-inner">
            <div className="metric-intro"><span className="eyebrow-dot" /> FIELD NOTES / AT A GLANCE</div>
            <div className="metric"><strong>25<span>+</span></strong><small>validated vulnerabilities</small></div>
            <div className="metric"><strong>5<span>+</span></strong><small>financial systems assessed</small></div>
            <div className="metric"><strong>100<span>+</span></strong><small>students reached through workshops</small></div>
            <div className="metric-location"><span>BASED IN</span><b>CAIRO, EGYPT</b></div>
          </div>
        </section>

        <section className="section hiring-section" id="hiring">
          <div className="shell">
            <div className="hiring-head" data-reveal>
              <div>
                <p className="hiring-overline"><span className="eyebrow-dot" /> FOR HIRING TEAMS / QUICK SNAPSHOT</p>
                <h2 className="hiring-title">Ready to test the boundary.<br /><em>Ready to explain what matters.</em></h2>
                <p className="hiring-intro">A concise view of the work, validated research, and communication skills I can bring to a security team.</p>
              </div>
              <a className="hiring-download" href="/Ali-Yasser-Ali-CV.pdf" download="Ali-Yasser-Ali-CV.pdf" aria-label="Download Ali Yasser Ali's CV as a PDF">Download CV <Download size={16} /></a>
            </div>
            <div className="hiring-grid">
              <article className="hiring-card" data-reveal>
                <span className="hiring-card-kicker">01 / ASSESSMENT DELIVERY</span>
                <h3>Full-scope testing</h3>
                <p>Lead web, network, and Active Directory assessments at ADA Egypt; mentor security interns through structured report reviews.</p>
              </article>
              <article className="hiring-card" data-reveal>
                <span className="hiring-card-kicker">02 / VALIDATED RESEARCH</span>
                <h3>25+ valid findings</h3>
                <p>Responsible disclosures across HackerOne, YesWeHack, and Intigriti, including enterprise and financial-sector programs.</p>
              </article>
              <article className="hiring-card" data-reveal>
                <span className="hiring-card-kicker">03 / TECHNICAL COMMUNICATION</span>
                <h3>Make risk understandable</h3>
                <p>Delivered 5+ hands-on workshops to 100+ students and translated assessment findings for FRA compliance stakeholders.</p>
              </article>
            </div>
            <div className="hiring-facts" data-reveal>
              <div><span>ROLE FOCUS</span><b>Penetration testing · Application security · Bug bounty</b></div>
              <div><span>TESTING SCOPE</span><b>Web / API · Network · Active Directory · Android</b></div>
              <div><span>CORE CREDENTIALS</span><b>eJPTv2 · CAP · CNSP · CCNA</b></div>
              <div><span>LANGUAGES</span><b>Arabic (native) · English (professional)</b></div>
            </div>
            <div className="hiring-bottom"><span>PROOF OF WORK</span><p>Selected findings, a security-focused capstone, and CTF results are detailed below.</p><a href="#work">Explore the evidence <ArrowRight size={15} /></a></div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="shell about-layout">
            <div className="about-main">
              <SectionHeading index="01" eyebrow="THE APPROACH" title="Find the flaw. Show what it means. Help teams fix it." />
              <div className="about-copy" data-reveal>
                <p className="about-lead">Full-scope testing, responsible research, and reports built to support remediation.</p>
                <p>My work covers web and API security, network testing, Active Directory assessments, and Android application analysis. At ADA Egypt, I lead enterprise assessments and mentor security interns. At the FRA, I assessed 5+ internal financial systems and documented risk for technical and compliance stakeholders.</p>
                <p>Across penetration tests and bug-bounty programs, I focus on authorized scope, evidence-backed impact, and practical guidance teams can act on.</p>
              </div>
              <div className="about-tags" data-reveal>
                <span>Manual &amp; automated testing</span><span>Full-scope assessments</span><span>Evidence-led reporting</span><span>Remediation-focused</span>
              </div>
            </div>
            <aside className="focus-card" data-reveal aria-label="Current professional focus">
              <div className="focus-card-top"><Crosshair size={17} /><span>ASSESSMENT FOCUS</span><span className="focus-number">/ 2026</span></div>
              <p className="focus-title">One discipline.<br /><em>Every surface.</em></p>
              <div className="focus-track">
                <span className="focus-icon"><Radar size={18} /></span>
                <div><b>Web &amp; API security</b><small>Manual and automated application testing</small></div>
              </div>
              <div className="focus-divider"><i /><span>FULL-SCOPE CHECKS</span><i /></div>
              <div className="focus-track">
                <span className="focus-icon focus-icon-warm"><Network size={18} /></span>
                <div><b>Network &amp; Active Directory</b><small>Validate exposure and privilege boundaries</small></div>
              </div>
              <div className="focus-footer"><span className="pulse-dot" /> AUTHORIZED SCOPE · EVIDENCE · REMEDIATION</div>
            </aside>
          </div>
        </section>

        <section className="section findings-section" id="work">
          <div className="shell">
            <div className="section-row">
              <SectionHeading index="02" eyebrow="SELECTED PENTEST FINDINGS" title="The proof is in the follow-through." description="A selection of validated findings from authorized enterprise programs. Outcomes are shown at a high level; private reproduction details stay private." />
              <a className="text-link" href={profile.socials.medium} target="_blank" rel="noreferrer">Read my notes <ExternalLink size={15} /></a>
            </div>
            <div className="findings-grid">
              {findings.map((item, index) => (
                <details className="finding-card" key={item.organization} data-reveal>
                  <summary>
                    <span className="finding-index">0{index + 1}</span>
                    <span className="finding-platform">{item.platform}</span>
                    <h3>{item.organization}</h3>
                    <span className="finding-type">{item.finding}</span>
                    <span className="finding-score">{item.score}</span>
                    <span className="finding-expand"><ChevronDown size={17} /></span>
                  </summary>
                  <div className="finding-detail"><p>{item.outcome}</p><span><Check size={14} /> Validated & responsibly reported</span></div>
                </details>
              ))}
            </div>
            <div className="findings-note"><BadgeCheck size={16} /><span>25+ validated vulnerabilities across HackerOne, YesWeHack & Intigriti</span><span className="note-rule" /><span>Technical details omitted by design</span></div>
            <div className="signal-lens" data-reveal>
              <div className="signal-lens-head">
                <div className="signal-lens-overline"><span className="eyebrow-dot" /> PENTEST METHODOLOGY / FULL-SCOPE</div>
                <h3>Find the weakness. Validate the impact. Deliver the fix.</h3>
                <p>My assessment process moves from authorized scope and attack-surface discovery to evidence-backed validation and clear, prioritized remediation guidance.</p>
              </div>
              <div className="signal-flow" aria-label="Penetration testing workflow: scope, recon, validate, report">
                <span>SCOPE</span><i /><span>RECON</span><i /><span>VALIDATE</span><i /><span>REPORT</span>
              </div>
              <div className="signal-lens-grid">
                <article className="signal-lens-card">
                  <div className="signal-card-top"><span className="signal-card-icon"><ShieldCheck size={17} /></span><span>01 / WEB &amp; API</span></div>
                  <h4>Access control &amp; input handling</h4>
                  <p>Assess trust boundaries and common OWASP risks across application and API behavior.</p>
                </article>
                <article className="signal-lens-card">
                  <div className="signal-card-top"><span className="signal-card-icon"><ScanLine size={17} /></span><span>02 / NETWORK</span></div>
                  <h4>Exposure &amp; service controls</h4>
                  <p>Review in-scope attack surface and validate configuration and reachable-service risks safely.</p>
                </article>
                <article className="signal-lens-card">
                  <div className="signal-card-top"><span className="signal-card-icon"><Network size={17} /></span><span>03 / ACTIVE DIRECTORY</span></div>
                  <h4>Identity &amp; privilege paths</h4>
                  <p>Assess relationships and privilege controls in authorized environments using a scoped methodology.</p>
                </article>
                <article className="signal-lens-card">
                  <div className="signal-card-top"><span className="signal-card-icon"><Radar size={17} /></span><span>04 / ANDROID</span></div>
                  <h4>APK &amp; transport protections</h4>
                  <p>Analyze Android application behavior and SSL-pinning controls within the agreed test scope.</p>
                </article>
              </div>
              <div className="signal-lens-foot"><span>ASSESSMENT PRINCIPLE</span><p>Proof over assumptions. Remediation over noise.</p></div>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="shell experience-layout">
            <div className="experience-intro">
              <SectionHeading index="03" eyebrow="WHERE I’VE BEEN" title="Work built on curiosity. Grounded in impact." description="From full-scope assessments to responsible vulnerability disclosures." />
              <div className="experience-side-note" data-reveal><BriefcaseBusiness size={17} /><p>Across each engagement, I work within scope, validate carefully, document impact, and give teams a practical route to remediation.</p></div>
            </div>
            <div className="timeline" data-reveal>
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.organization}>
                  <div className="timeline-rail"><span className={index === 0 ? "rail-dot rail-dot-active" : "rail-dot"} />{index < experience.length - 1 && <i />}</div>
                  <div className="timeline-content">
                    <div className="timeline-meta"><span>{item.period}</span><span>{item.kind}</span></div>
                    <h3>{item.role}</h3>
                    <h4>{item.organization}</h4>
                    <p>{item.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section project-section">
          <div className="shell">
            <div className="project-heading-row">
              <SectionHeading index="04" eyebrow="ENGINEERED WITH CARE" title="Security is also a deployment decision." description="A graduation project that brought secure application design and infrastructure controls into the same pipeline." />
              <div className="project-badge"><GraduationCap size={17} /><span>GRADUATION PROJECT<br /><b>SECURE DEPLOYMENT LEAD</b></span></div>
            </div>
            <article className="project-card" data-reveal>
              <div className="project-card-top"><span>CAPSTONE / 2026</span><span>APPLICATION · CLOUD · POLICY</span></div>
              <div className="project-card-main">
                <div className="project-title-block"><span className="project-icon"><ShieldCheck size={21} /></span><h3>Secure &amp; Compliant<br /><em>ML Security Pipeline</em></h3><p>Security controls designed into an ML inference service and its cloud deployment path.</p></div>
                <div className="project-details">
                  <div className="project-detail"><span>01</span><div><b>Application security</b><p>FastAPI inference service with OAuth2/JWT authentication and Azure Key Vault secrets management.</p></div></div>
                  <div className="project-detail"><span>02</span><div><b>Infrastructure as code</b><p>Terraform modules for AKS, WAF, Key Vault, networking, and monitoring.</p></div></div>
                  <div className="project-detail"><span>03</span><div><b>Policy &amp; deployment</b><p>Kubernetes manifests enforcing Zero Trust network policies.</p></div></div>
                  <div className="project-detail"><span>04</span><div><b>Penetration testing &amp; reporting</b><p>Locally tested the deployed service against the OWASP API Security Top 10 and produced a formal test report and security architecture document.</p></div></div>
                  <div className="project-stack"><span>FASTAPI</span><span>OAUTH2 / JWT</span><span>AZURE KEY VAULT</span><span>TERRAFORM</span><span>AKS</span></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="shell">
            <div className="section-row skills-heading-row">
              <SectionHeading index="05" eyebrow="CAPABILITIES" title="A toolkit for full-scope testing." description="Web, API, network, Active Directory, and mobile security—supported by structured methodology and clear reporting." />
              <span className="skill-heading-mark" aria-hidden="true"><ScanLine size={30} /></span>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.title} data-reveal>
                  <div className="skill-card-head"><span>0{index + 1}</span><i>{index === 0 ? <Radar size={18} /> : index === 1 ? <ShieldCheck size={18} /> : index === 2 ? <Crosshair size={18} /> : <Network size={18} />}</i></div>
                  <h3>{group.title}</h3><p>{group.intro}</p>
                  <div className="skill-pills">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section blog-section" id="blog">
          <div className="shell">
            <div className="section-row blog-heading-row">
              <SectionHeading index="06" eyebrow="BLOG / FIELD NOTES" title="Ideas from the security field." description="Practical notes on penetration testing, responsible disclosure, and writing evidence-led findings." />
              <a className="text-link" href={profile.socials.medium} target="_blank" rel="noreferrer">More on Medium <ExternalLink size={15} /></a>
            </div>
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <details className="blog-card" key={post.slug} data-reveal>
                  <summary>
                    <div className="blog-card-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                    <span className="blog-card-number">0{index + 1}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <span className="blog-read-link">Read field note <ArrowRight size={15} /></span>
                    <span className="blog-expand-icon"><ArrowDown size={15} /></span>
                  </summary>
                  <div className="blog-article-body">
                    <p className="blog-article-lede">{post.lede}</p>
                    {post.sections.map((section) => (
                      <section className="blog-article-section" key={section.heading}>
                        <h4>{section.heading}</h4>
                        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      </section>
                    ))}
                    {post.takeaways?.length ? (
                      <div className="blog-takeaways">
                        <h4>In practice</h4>
                        <ul>{post.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ul>
                      </div>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
            <div className="blog-bottom-row"><span>FIELD NOTES / 01—02</span><p>More writing on penetration testing and responsible research will live here.</p><a href={profile.socials.medium} target="_blank" rel="noreferrer">Visit Medium <ArrowUpRight size={14} /></a></div>
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <div className="shell learning-layout">
            <div className="learning-main">
              <SectionHeading index="07" eyebrow="EDUCATION & CREDENTIALS" title="Strong fundamentals. Continuous practice." />
              <article className="education-card" data-reveal>
                <span className="education-icon"><GraduationCap size={19} /></span>
                <div><span className="education-period">2026 · CAIRO, EGYPT</span><h3>B.Sc. Information Systems</h3><p>Modern Academy · GPA 3.3 / 4.0</p><small>Specialization: Web Security, Networking &amp; Applied Cryptography</small></div>
              </article>
            </div>
            <div className="certification-panels" data-reveal>
              <div className="cert-panel cert-earned"><div className="cert-heading"><span><BadgeCheck size={16} /> EARNED</span><small>04 CREDENTIALS</small></div><ul>{certifications.earned.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul></div>
              <div className="cert-panel cert-progress"><div className="cert-heading"><span><ScanLine size={16} /> IN PROGRESS</span><small>ACTIVE LEARNING</small></div><div className="cert-tags">{certifications.inProgress.map((item) => <span key={item}>{item}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section className="section community-section">
          <div className="shell community-layout">
            <div className="community-intro"><SectionHeading index="08" eyebrow="COMMUNITY & COMPETITION" title="Knowledge is better when it moves." description="Teaching, building community, and testing skills under pressure." /></div>
            <div className="community-cards">
              {community.map((item, index) => (
                <article className="community-card" key={item.title} data-reveal>
                  <div className="community-card-top"><span>0{index + 1} / COMMUNITY</span>{index === 0 ? <GraduationCap size={18} /> : <Youtube size={18} />}</div>
                  <span className="community-label">{item.label}</span><h3>{item.title}</h3><p>{item.detail}</p>
                  {index === 1 && <a href={profile.socials.youtube} target="_blank" rel="noreferrer">Visit the channel <ArrowUpRight size={14} /></a>}
                </article>
              ))}
            </div>
            <div className="competition-list" data-reveal>
              <div className="competition-heading"><Trophy size={17} /><span>CTF HIGHLIGHTS</span><i /></div>
              {competitions.map((item) => <div className="competition-item" key={item}><span className="competition-mark">↗</span><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-lines" aria-hidden="true" />
          <div className="shell contact-inner" data-reveal>
            <div className="contact-overline"><span className="status-dot" /> OPEN TO PENTESTING &amp; RESEARCH OPPORTUNITIES</div>
            <h2>Let’s make systems<br /><em>harder to break.</em></h2>
            <p>For penetration-testing opportunities, responsible research, training, or a technical conversation, I’d be glad to connect.</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a>
            <div className="contact-links">
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} /></a>
              <a href={profile.socials.youtube} target="_blank" rel="noreferrer"><Youtube size={17} /> YouTube <ArrowUpRight size={13} /></a>
              <a href={profile.socials.medium} target="_blank" rel="noreferrer"><span className="medium-icon" aria-hidden="true">M</span> Medium <ArrowUpRight size={13} /></a>
              <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={13} /></a>
            </div>
            <div className="contact-location"><MapPin size={14} /> CAIRO, EGYPT <span>·</span> ARABIC (NATIVE) <span>·</span> ENGLISH (PROFESSIONAL)</div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
