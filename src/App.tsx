import { useEffect, useMemo, useRef, useState, type FormEvent, type PointerEvent } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Braces,
  Check,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Cloud,
  Code2,
  Command,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  Hexagon,
  Instagram,
  Linkedin,
  LockKeyhole,
  Mail,
  Menu,
  Network,
  Radar,
  ScanSearch,
  Send,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react'
import {
  achievements,
  architecture,
  architectureEdges,
  articles,
  caseStudies,
  certifications,
  experience,
  expertise,
  profile,
  type CaseStudy,
} from './data/profile'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'archive', label: 'Archive' },
  { id: 'experience', label: 'Trajectory' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

const categoryOptions = ['All', 'Web / API', 'Mobile', 'Network / AD', 'Bug Bounty', 'Secure ML']

const iconForExpertise = [Globe2, ScanSearch, Network, Radar, ClipboardCheck, Cloud]

function NetworkField() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })
  const fieldRef = useRef<HTMLDivElement>(null)
  const points = [
    { x: 8, y: 58, label: 'OSINT', r: 3 },
    { x: 22, y: 28, label: 'RECON', r: 4 },
    { x: 29, y: 76, label: 'API', r: 3 },
    { x: 45, y: 43, label: 'AUTH', r: 5 },
    { x: 58, y: 17, label: 'MOBILE', r: 3 },
    { x: 68, y: 60, label: 'IMPACT', r: 5 },
    { x: 83, y: 33, label: 'REPORT', r: 3 },
    { x: 92, y: 73, label: 'VERIFY', r: 4 },
  ]
  const links = [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [5, 7], [6, 7]]

  const handleMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!fieldRef.current) return
    const rect = fieldRef.current.getBoundingClientRect()
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
    })
  }

  return (
    <div
      className="network-field"
      ref={fieldRef}
      onPointerMove={handleMove}
      onPointerLeave={() => setPointer({ x: 0, y: 0 })}
      aria-hidden="true"
    >
      <div className="network-orbit orbit-one" />
      <div className="network-orbit orbit-two" />
      <div className="network-glow" style={{ transform: `translate3d(${pointer.x * 24}px, ${pointer.y * 18}px, 0)` }} />
      <svg className="network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edgeGradient" x1="0" x2="1">
            <stop offset="0" stopColor="#79f2b0" stopOpacity="0.08" />
            <stop offset="0.48" stopColor="#79f2b0" stopOpacity="0.72" />
            <stop offset="1" stopColor="#52c7d9" stopOpacity="0.15" />
          </linearGradient>
          <filter id="nodeGlow"><feGaussianBlur stdDeviation="0.8" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        {links.map(([from, to], index) => (
          <line key={`${from}-${to}`} className="network-link" x1={points[from].x} y1={points[from].y} x2={points[to].x} y2={points[to].y} style={{ animationDelay: `${index * 0.17}s` }} />
        ))}
        {points.map((point, index) => (
          <g key={point.label} className={`network-node node-${index}`} filter="url(#nodeGlow)">
            <circle cx={point.x} cy={point.y} r={point.r * 0.72} />
            <circle className="node-ring" cx={point.x} cy={point.y} r={point.r * 1.8} />
            <text x={point.x + 2.6} y={point.y - 2.8}>{point.label}</text>
          </g>
        ))}
      </svg>
      <div className="network-readout readout-top"><span>field.status</span><strong>ACTIVE / 07</strong></div>
      <div className="network-readout readout-bottom"><span>signal integrity</span><strong>98.4%</strong></div>
    </div>
  )
}

function SectionLabel({ index, kicker, title, copy }: { index: string; kicker: string; title: string; copy?: string }) {
  return (
    <div className="section-heading">
      <div className="section-index"><span>{index}</span><i /></div>
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('about')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [formState, setFormState] = useState<'idle' | 'success' | 'missing'>('idle')

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.1, 0.35, 0.65] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedCase ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedCase])

  const filteredCases = useMemo(() => {
    if (selectedCategory === 'All') return caseStudies
    return caseStudies.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!profile.contactEmail) {
      setFormState('missing')
      return
    }
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry for ${profile.name}`)
    const body = encodeURIComponent(`Name: ${form.get('name')}\nEmail: ${form.get('email')}\n\n${form.get('message')}`)
    window.location.href = `mailto:${profile.contactEmail}?subject=${subject}&body=${body}`
    setFormState('success')
  }

  return (
    <div className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ali Yasser Ali home"><span>{profile.monogram}</span><em>SECURITY RESEARCH</em></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen((open) => !open)}><Menu size={18} /><span>Menu</span></button>
        <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'is-active' : ''} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="status-line"><span className="pulse-dot" /> {profile.availability} <span className="status-location">/ {profile.location}</span></div>
            <p className="hero-kicker"><span>00</span> / OFFENSIVE SECURITY PORTFOLIO</p>
            <h1>Ali Yasser<br /><span className="accent-text">Ali</span><span className="cursor-mark">_</span></h1>
            <p className="hero-subtitle">Penetration Tester <span>·</span> Security Researcher <span>·</span> Security Analyst</p>
            <p className="hero-statement">{profile.statement}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#archive">Explore my work <ArrowDownRight size={16} /></a>
              <a className="button button-ghost" href="#research">Read my research <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-proof"><div><strong>25+</strong><span>validated vulnerabilities</span></div><div><strong>01</strong><span>CyShield CTF Luxor</span></div><div><strong>05+</strong><span>financial systems assessed</span></div></div>
          </div>
          <div className="hero-visual"><NetworkField /><div className="terminal-card"><div className="terminal-top"><span><i /> <i /> <i /></span><small>session://aya-portfolio</small><Command size={14} /></div><div className="terminal-body"><p><span className="terminal-prompt">$</span> whoami</p><p className="terminal-response">ali.yasser / security-researcher</p><p><span className="terminal-prompt">$</span> focus --list</p><p className="terminal-response muted">web · mobile · network · secure-ml</p><p><span className="terminal-prompt">$</span> <span className="blink">_</span></p></div></div></div>
          <div className="hero-scroll"><span>Scroll to inspect</span><div className="scroll-line" /></div>
        </section>

        <section id="about" className="content-section about-section">
          <SectionLabel index="01" kicker="PROFILE // METHOD" title="Security work with a clear chain of evidence." copy="A compact view of the person behind the findings — what he tests, how he works, and where the details are documented." />
          <div className="about-grid"><div className="about-lead"><p className="large-copy">{profile.about}</p><div className="signature-line"><span>AYA//</span><span>CAIRO, EG / 2026</span></div></div><div className="about-notes"><div className="note-card"><LockKeyhole size={18} /><div><span className="eyebrow">DISCLOSURE STANDARD</span><p>Public evidence is separated from private program data. The archive only claims what the CV or linked write-up supports.</p></div></div><div className="note-card"><Sparkles size={18} /><div><span className="eyebrow">WORKING STYLE</span><p>Methodical testing, impact validation, technical reporting, and mentorship that makes complex systems easier to reason about.</p></div></div></div></div>
        </section>

        <section className="content-section expertise-section">
          <div className="section-heading split-heading"><div><p className="eyebrow">02 // CAPABILITY MAP</p><h2>What I investigate.</h2></div><p className="section-copy">A working set of security domains grounded in the CV. No invented proficiency scores — just the systems, methods, and tools behind the work.</p></div>
          <div className="expertise-grid">{expertise.map((item, index) => { const Icon = iconForExpertise[index]; return <article className="expertise-card" key={item.title}><div className="card-topline"><span>0{index + 1}</span><Icon size={18} /></div><h3>{item.title}</h3><p>{item.detail}</p><div className="tool-list">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div></article> })}</div>
        </section>

        <section id="archive" className="content-section archive-section">
          <SectionLabel index="03" kicker="THE EXPLOIT ARCHIVE" title="Selected work, sanitized for the public record." copy="Filter the archive by domain. Open an entry to see the scope, method, observation, and remediation boundary without exposing confidential material." />
          <div className="filter-row" role="group" aria-label="Filter case studies">{categoryOptions.map((category) => <button key={category} type="button" className={selectedCategory === category ? 'filter-button is-active' : 'filter-button'} onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category}>{category}<span>{category === 'All' ? caseStudies.length : caseStudies.filter((item) => item.category === category).length}</span></button>)}</div>
          <div className="archive-grid">{filteredCases.map((item, index) => <button type="button" className="case-card" key={item.id} onClick={() => setSelectedCase(item)}><div className="case-card-top"><span>{String(index + 1).padStart(2, '0')}</span><span className="case-status"><i /> {item.status}</span></div><p className="eyebrow">{item.eyebrow}</p><h3>{item.title}</h3><p>{item.summary}</p><div className="case-card-bottom"><span>{item.category}</span><ArrowUpRight size={16} /></div></button>)}</div>
        </section>

        <section id="experience" className="content-section trajectory-section">
          <SectionLabel index="04" kicker="TRAJECTORY // EVIDENCE" title="A practice built in public, one system at a time." copy="Experience, education, certifications, and competition results are kept separate so the signal stays clear." />
          <div className="trajectory-grid"><div className="timeline-block"><div className="subsection-title"><span>EXPERIENCE</span><i /></div>{experience.map((item) => <div className="timeline-item" key={`${item.role}-${item.organization}`}><div className="timeline-date">{item.date}</div><div className="timeline-marker" /><div><h3>{item.role}</h3><p className="timeline-org">{item.organization}</p><p>{item.detail}</p></div></div>)}<div className="education-item"><GraduationCap size={18} /><div><span className="eyebrow">EDUCATION</span><h3>B.Sc. in Information Systems</h3><p>Modern Academy, Cairo · 2026 · GPA 3.3 / 4.0</p></div></div></div><div className="credentials-block"><div className="subsection-title"><span>VERIFIED CREDENTIALS</span><i /></div><div className="credential-list">{certifications.map((item) => <div className="credential-card" key={item.name}><div className="credential-icon"><ShieldCheck size={17} /></div><div><h3>{item.name}</h3><p>{item.issuer}</p></div><span className="earned-tag"><Check size={13} /> {item.status}</span></div>)}</div><div className="subsection-title achievements-title"><span>CTF ACHIEVEMENTS</span><i /></div><div className="achievement-list">{achievements.map((item) => <div className="achievement-row" key={item.event}><Award size={17} /><div><strong>{item.place} · {item.event}</strong><span>{item.date} — {item.note}</span></div></div>)}</div></div></div>
        </section>

        <section className="content-section pipeline-section">
          <div className="pipeline-header"><SectionLabel index="05" kicker="GRADUATION PROJECT // ARCHITECTURE" title="Secure & Compliant ML Security Pipeline" copy="A documented architecture that treats identity, secrets, infrastructure, runtime, and monitoring as connected security boundaries." /><div className="pipeline-stamp"><Hexagon size={22} /><span>ACADEMIC PROJECT<br /><strong>ARCHITECTURE VIEW</strong></span></div></div>
          <div className="architecture-panel"><div className="architecture-canvas"><svg viewBox="0 0 100 84" preserveAspectRatio="none" aria-label="Secure ML pipeline architecture diagram">{architectureEdges.map(([from, to]) => { const a = architecture.find((node) => node.id === from)!; const b = architecture.find((node) => node.id === to)!; return <line key={`${from}-${to}`} x1={`${a.x + 3}%`} y1={`${a.y + 5}%`} x2={`${b.x + 3}%`} y2={`${b.y + 5}%`} /> })}{architecture.map((node) => <g key={node.id} className={`architecture-node ${node.tone}`} transform={`translate(${node.x}, ${node.y})`}><rect width="6" height="10" rx="1" /><text x="3" y="4.2" textAnchor="middle">{node.label.split('\n').map((line, idx) => <tspan key={line} x="3" dy={idx === 0 ? 0 : 2.6}>{line}</tspan>)}</text></g>)}</svg><div className="architecture-legend"><span><i className="dot-emerald" /> runtime / identity</span><span><i className="dot-cyan" /> boundary / observability</span><span><i className="dot-amber" /> secrets</span></div></div><div className="pipeline-notes"><div><span className="eyebrow">SYSTEM NOTE 01</span><h3>Trust boundaries stay visible.</h3><p>Clients reach the inference service through identity and edge controls. Secrets are separated from the runtime and observability is a first-class path.</p></div><div><span className="eyebrow">SYSTEM NOTE 02</span><h3>Security is a pipeline, not a claim.</h3><p>This section documents the components listed in the CV. It does not claim a compliance certification, production deployment, or absolute security guarantee.</p></div><div className="pipeline-stack">{['FastAPI', 'OAuth2 / JWT', 'Azure Key Vault', 'Terraform', 'AKS', 'WAF', 'Monitoring'].map((item) => <span key={item}>{item}</span>)}</div></div></div>
        </section>

        <section id="research" className="content-section research-section">
          <SectionLabel index="06" kicker="RESEARCH LOG // EXTERNAL PUBLICATIONS" title="The details that survive scrutiny." copy="Six externally hosted write-ups, kept data-driven so the archive can grow without a redesign." />
          <div className="research-feature">{articles.filter((article) => article.featured).map((article) => <article className="featured-article" key={article.url}><div className="article-visual"><div className="article-orbit" /><span className="article-code">R-001</span><Terminal size={48} strokeWidth={1} /></div><div className="featured-copy"><div className="article-meta"><span>FEATURED LOG</span><span>{article.date}</span></div><h3>{article.title}</h3><p>{article.summary}</p><div className="tag-row">{article.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="text-link" href={article.url} target="_blank" rel="noreferrer">Read on Medium <ExternalLink size={14} /></a></div></article>)}</div>
          <div className="article-grid">{articles.filter((article) => !article.featured).map((article, index) => <article className="article-card" key={article.url}><div className="article-card-top"><span>R-{String(index + 2).padStart(3, '0')}</span><ArrowUpRight size={16} /></div><div><p className="article-date">{article.date}</p><h3>{article.title}</h3><p>{article.summary}</p></div><div className="article-card-bottom"><div className="tag-row">{article.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div><a href={article.url} target="_blank" rel="noreferrer" aria-label={`Read ${article.title} on Medium`}><ChevronRight size={16} /></a></div></article>)}</div>
        </section>

        <section id="contact" className="content-section contact-section">
          <div className="contact-grid"><div><p className="eyebrow">07 // OPEN CHANNEL</p><h2>Let’s talk about the weak signal.</h2><p className="section-copy">For security work, research, training, or a technical conversation, use the channel below. The form is prepared for a mail client and will not pretend to send a message without a configured address.</p><div className="contact-links">{profile.profileLinks.map((link) => link.url ? <a key={link.label} href={link.url} target="_blank" rel="noreferrer"><span>{link.label}</span><ArrowUpRight size={15} /></a> : <span className="disabled-link" key={link.label}><span>{link.label} / add URL</span><CircleHelp size={15} /></span>)}</div><a className="cv-link" href="/cv.pdf" download="Ali-Yasser-Ali-CV.pdf"><Download size={16} /> Download CV <span>add public/cv.pdf</span></a></div><form className="contact-form" onSubmit={submitContact}><div className="form-heading"><Mail size={18} /><span>CONTACT FORM / MAILTO FALLBACK</span></div><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Message<textarea name="message" rows={5} placeholder="What would you like to discuss?" required /></label><button className="button button-primary" type="submit">Prepare message <Send size={15} /></button>{formState === 'missing' && <p className="form-feedback is-warning" role="alert">Add a verified email address in <code>src/data/profile.ts</code> before enabling the mailto flow.</p>}{formState === 'success' && <p className="form-feedback is-success" role="status">Your mail client should be ready with the message details.</p>}</form></div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 Ali Yasser Ali</span><span className="footer-center">Built for evidence, not noise.</span><span>AYA// <a href="#top">Back to top <ArrowUpRight size={13} /></a></span></footer>

      {selectedCase && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedCase(null)}><article className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-modal-title" onClick={(event) => event.stopPropagation()}><div className="modal-top"><span className="case-status"><i /> {selectedCase.status}</span><button type="button" className="icon-button" onClick={() => setSelectedCase(null)} aria-label="Close case study"><X size={18} /></button></div><p className="eyebrow">{selectedCase.eyebrow} / {selectedCase.category}</p><h2 id="case-modal-title">{selectedCase.title}</h2><p className="modal-summary">{selectedCase.summary}</p><div className="modal-grid"><div><span className="eyebrow">OVERVIEW</span><p>{selectedCase.overview}</p></div><div><span className="eyebrow">SCOPE</span><p>{selectedCase.scope}</p></div><div><span className="eyebrow">METHODOLOGY</span><ul>{selectedCase.methodology.map((step) => <li key={step}>{step}</li>)}</ul></div><div><span className="eyebrow">OBSERVATIONS</span><ul>{selectedCase.observations.map((observation) => <li key={observation}>{observation}</li>)}</ul></div><div><span className="eyebrow">IMPACT / REMEDIATION</span><p>{selectedCase.impact}</p><p>{selectedCase.remediation}</p></div></div><div className="modal-footer"><div className="tag-row">{selectedCase.stack.map((item) => <span key={item}>{item}</span>)}</div><button className="button button-ghost" type="button" onClick={() => setSelectedCase(null)}>Close entry <X size={14} /></button></div></article></div>}
    </div>
  )
}

export default App
