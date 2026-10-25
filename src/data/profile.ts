export type Article = {
  title: string
  summary: string
  url: string
  tags: string[]
  featured?: boolean
  date: string
  readTime: string
}

export type CaseStudy = {
  id: string
  title: string
  category: string
  eyebrow: string
  summary: string
  overview: string
  scope: string
  methodology: string[]
  observations: string[]
  impact: string
  remediation: string
  stack: string[]
  status: 'Public write-up' | 'CV-supported' | 'Editable template'
}

export const profile = {
  name: 'Ali Yasser Ali',
  monogram: 'AYA//',
  roles: ['Penetration Tester', 'Security Researcher', 'Security Analyst'],
  location: 'Cairo, Egypt',
  availability: 'Open to security opportunities',
  contactEmail: '',
  statement: 'Finding the weak signal. Validating the impact. Building more secure systems.',
  about:
    'Ali is a penetration tester, security researcher, and instructor focused on turning uncertain signals into clear, defensible security findings. His work spans web and API security, mobile analysis, network testing, vulnerability research, security monitoring, and secure ML deployment. He pairs hands-on testing with responsible disclosure, technical reporting, and mentorship.',
  profileLinks: [
    { label: 'Medium', url: 'https://medium.com/@aliyasser0115139', icon: 'book-open' },
    { label: 'YouTube', url: 'https://www.youtube.com/@Pwn_Sec', icon: 'youtube' },
    { label: 'LinkedIn', url: '', icon: 'linkedin' },
    { label: 'GitHub', url: '', icon: 'github' },
  ],
  metrics: [
    { value: '25+', label: 'validated vulnerabilities', detail: 'reported across enterprise programs' },
    { value: '5+', label: 'financial systems assessed', detail: 'during the FRA internship' },
    { value: '#01', label: 'CyShield CTF Luxor', detail: '1st place · March 2026' },
  ],
}

export const expertise = [
  { title: 'Web & API Security', detail: 'Application review, abuse paths, access control, and responsible disclosure.', tools: ['Burp Suite', 'Nuclei', 'SQLMap'] },
  { title: 'Mobile Security', detail: 'Android APK analysis, reverse engineering, and SSL pinning bypass.', tools: ['Frida', 'APK analysis', 'Java'] },
  { title: 'Network & Active Directory', detail: 'Network penetration testing, identity paths, and lateral movement analysis.', tools: ['Nmap', 'BloodHound', 'Impacket'] },
  { title: 'Vulnerability Research', detail: 'Reconnaissance, OSINT, proof validation, and clear technical reporting.', tools: ['Bash', 'Python', 'Metasploit'] },
  { title: 'Security Monitoring', detail: 'Traffic analysis, log review, incident documentation, and security analysis.', tools: ['Wireshark', 'Log review', 'Reporting'] },
  { title: 'Cloud & Secure ML', detail: 'Secure deployment patterns for inference services and infrastructure.', tools: ['Azure', 'Terraform', 'Kubernetes'] },
]

export const caseStudies: CaseStudy[] = [
  {
    id: 'contakt-stored-xss',
    title: 'Contakt · Stored XSS in the Contact Form',
    category: 'Web / API',
    eyebrow: 'PUBLIC RESEARCH LOG',
    summary: 'A public write-up tracing how weak output encoding and a privileged admin bot combine into a stored-XSS chain.',
    overview: 'The write-up documents a CTF application where contact data was stored and rendered in an administrative response view. The core lesson is about validating the entire render path, not only the input field.',
    scope: 'Public CTF challenge application with an Express/EJS contact workflow, as described in the linked write-up.',
    methodology: ['Trace the form validation path', 'Inspect server-side storage and template rendering', 'Model the privileged bot context', 'Document the remediation boundary'],
    observations: ['The email parser accepted display-name syntax that preserved HTML content.', 'The response template used an unescaped rendering path for stored input.', 'The bot context made the stored content security-sensitive.'],
    impact: 'The article describes a stored cross-site scripting path in a challenge environment. No private client or production system is claimed.',
    remediation: 'Escape untrusted values by default, validate and canonicalize structured input, and avoid exposing sensitive challenge data to script-accessible browser contexts.',
    stack: ['Express', 'EJS', 'SQLite', 'XSS'],
    status: 'Public write-up',
  },
  {
    id: 'cyctf-luxor-race',
    title: 'CyCTF Luxor · TOCTOU Race Condition',
    category: 'Network / AD',
    eyebrow: 'PUBLIC RESEARCH LOG',
    summary: 'A race-condition analysis of a permission check followed by a file open, using a controlled symlink swap in a CTF terminal.',
    overview: 'The article focuses on a classic time-of-check to time-of-use gap: a binary verifies a readable path and opens it later, leaving a narrow opportunity for the path target to change.',
    scope: 'CyCTF Luxor web terminal challenge, limited to the behavior described in the public write-up.',
    methodology: ['Identify the check/use separation', 'Create a benign readable target', 'Continuously change the path target', 'Observe the output for a successful race'],
    observations: ['The security decision was made on a path that could change before use.', 'A world-writable directory made the swap practical in the challenge environment.', 'The exploit depended on timing rather than a new privilege grant.'],
    impact: 'The public article describes a challenge-only read of a protected flag file and does not establish a real-world engagement.',
    remediation: 'Use file-descriptor-based validation and access, avoid trusting mutable paths between check and use, and minimize privileged file operations.',
    stack: ['Linux', 'Symlinks', 'Race conditions', 'Shell'],
    status: 'Public write-up',
  },
  {
    id: 'red-mirage-ssrf',
    title: 'Red Mirage · SSRF into an Internal Service',
    category: 'Web / API',
    eyebrow: 'PUBLIC RESEARCH LOG',
    summary: 'A public challenge write-up showing how an unrestricted preview endpoint reached an internal Redis service.',
    overview: 'The analysis follows a server-side request feature into an internal network boundary and documents why protocol handling and allowlisting matter for preview endpoints.',
    scope: 'Red Mirage CTF challenge environment, based on the linked public article.',
    methodology: ['Map the preview endpoint behavior', 'Test URL parser and protocol boundaries', 'Identify internal service reachability', 'Separate secret retrieval from endpoint authorization'],
    observations: ['The preview feature accepted a protocol that was not intended for public browsing.', 'The internal Redis service was reachable from the server context.', 'The admin endpoint relied on a token held by the internal service.'],
    impact: 'The article reports SSRF and downstream token exposure within a challenge environment only.',
    remediation: 'Use strict protocol and destination allowlists, block private network ranges, authenticate internal services, and keep authorization independent from network location.',
    stack: ['SSRF', 'Redis', 'URL validation', 'Web exploitation'],
    status: 'Public write-up',
  },
  {
    id: 'phantoms-labyrinth',
    title: 'Phantom’s Labyrinth · Source Disclosure to Object Injection',
    category: 'Web / API',
    eyebrow: 'PUBLIC RESEARCH LOG',
    summary: 'An EGCTF web challenge write-up connecting wrapper-based source disclosure, weak comparisons, and unsafe deserialization.',
    overview: 'The article documents a multi-step challenge path: use a file wrapper to inspect server code, then reason about a serialized object and a loose hash comparison.',
    scope: 'EGCTF 2025 Qualifications web challenge, as described in the public write-up.',
    methodology: ['Enumerate the input-driven file-loading behavior', 'Identify the WAF constraint', 'Read the server-side logic through a filter variant', 'Trace the deserialization and destructor path'],
    observations: ['A blacklist created a bypass surface instead of enforcing an allowlist.', 'Unsafe deserialization reached a magic method with command execution behavior.', 'A loose comparison made the guard weaker than intended.'],
    impact: 'The public article describes remote code execution in a CTF environment and is presented here as research, not a client finding.',
    remediation: 'Use allowlists and canonical paths, never deserialize untrusted objects, avoid command execution from request data, and use strict comparisons or constant-time helpers for secrets.',
    stack: ['PHP', 'WAF analysis', 'Deserialization', 'Source disclosure'],
    status: 'Public write-up',
  },
  {
    id: 'bug-bounty-evidence',
    title: 'Enterprise Bug Bounty Research',
    category: 'Bug Bounty',
    eyebrow: 'CV-SUPPORTED EVIDENCE',
    summary: 'A high-level, disclosure-safe snapshot of validated vulnerability research across enterprise programs.',
    overview: 'Ali’s CV records 25+ validated vulnerabilities reported across HackerOne, YesWeHack, and Intigriti, with program-specific details kept intentionally limited to what is documented for public use.',
    scope: 'Enterprise bug bounty programs; individual reports remain private unless a disclosure URL is added later.',
    methodology: ['Reconnaissance and OSINT', 'Manual application and API testing', 'Impact validation', 'Responsible disclosure and technical reporting'],
    observations: ['The CV documents a DBS Bank security misconfiguration rated CVSS 5.9 with a bounty awarded.', 'The CV documents a Notion broken access control finding rated CVSS 6.9.', 'Program names and severity details are shown only where the CV explicitly supports them.'],
    impact: 'The portfolio intentionally avoids private report content, exploit payloads, bounty totals, and unverified acceptance metrics.',
    remediation: 'Add only permitted public disclosures or sanitized summaries, and keep client identifiers and report evidence out of the public archive.',
    stack: ['HackerOne', 'YesWeHack', 'Intigriti', 'CVSS'],
    status: 'CV-supported',
  },
  {
    id: 'secure-ml-pipeline',
    title: 'Secure & Compliant ML Security Pipeline',
    category: 'Secure ML',
    eyebrow: 'GRADUATION PROJECT',
    summary: 'A documented architecture for protecting an inference service from identity to infrastructure and observability.',
    overview: 'The graduation project combines a FastAPI inference service with OAuth2/JWT authentication, Azure Key Vault, Terraform modules, AKS, WAF, networking, monitoring, and Kubernetes security configuration.',
    scope: 'Academic graduation project documented in the CV; claims are limited to the listed components and do not imply a compliance certification.',
    methodology: ['Authenticate clients at the service boundary', 'Keep secrets in a managed vault', 'Provision infrastructure through Terraform', 'Deploy the inference service to AKS', 'Layer WAF, networking, monitoring, and Kubernetes controls'],
    observations: ['The architecture separates identity, secret management, infrastructure, runtime, and monitoring responsibilities.', 'The security boundary is visible as a system design rather than a single control.', 'The project is presented as a documented academic build, not as a production guarantee.'],
    impact: 'The section communicates architecture and security considerations without claiming deployment status, compliance certification, or absolute security.',
    remediation: 'Use threat modeling, least privilege, secret rotation, environment separation, and continuous runtime monitoring as the deployment evolves.',
    stack: ['FastAPI', 'OAuth2 / JWT', 'Azure Key Vault', 'Terraform', 'AKS', 'WAF'],
    status: 'CV-supported',
  },
]

export const experience = [
  { date: 'Mar 2026 — Present', role: 'Penetration Tester, Instructor & Mentor', organization: 'ADA Egypt', detail: 'Hands-on offensive security work paired with instruction and mentorship.' },
  { date: '2026', role: 'Cybersecurity Intern — Financial Systems Security Assessment', organization: 'Egyptian Financial Regulatory Authority (FRA)', detail: 'Assessed security controls across 5+ internal financial systems.' },
  { date: '2025 — Present', role: 'Bug Bounty Hunter', organization: 'HackerOne · YesWeHack · Intigriti', detail: 'Validated vulnerability research and responsible disclosure across enterprise programs.' },
  { date: 'Ongoing', role: 'Head Instructor', organization: 'IEEE Cybersecurity Branch, Egypt', detail: 'Security instruction and technical mentorship.' },
  { date: 'Ongoing', role: 'Founder', organization: 'pwnSec', detail: 'Cybersecurity YouTube channel focused on practical learning.' },
]

export const certifications = [
  { name: 'eJPTv2', issuer: 'INE', status: 'Earned' },
  { name: 'AppSec Practitioner (CAP)', issuer: 'Cybersecurity certification', status: 'Earned' },
  { name: 'Network Security Practitioner (CNSP)', issuer: 'Cybersecurity certification', status: 'Earned' },
  { name: 'CCNA', issuer: 'NTI', status: 'Earned' },
]

export const achievements = [
  { place: '1st place', event: 'CyShield CTF Luxor', date: 'March 2026', note: 'Competition achievement recorded in the CV.' },
  { place: '7th nationwide', event: 'Zinad × ITI CyberChampions CTF', date: 'February 2026', note: 'Competition achievement recorded in the CV.' },
  { place: '5th place', event: 'Connectors CTF', date: '—', note: 'With team Sp3c0ps.' },
  { place: 'Finalist / participant', event: 'ICMTC 2025 and CyCTF 2025', date: '2025', note: 'Participation and finalist details remain editable from the CV.' },
]

export const architecture = [
  { id: 'client', label: 'Client', x: 6, y: 42, tone: 'cyan' },
  { id: 'auth', label: 'OAuth2 / JWT', x: 25, y: 20, tone: 'emerald' },
  { id: 'fastapi', label: 'FastAPI\ninference', x: 25, y: 64, tone: 'emerald' },
  { id: 'waf', label: 'WAF +\nnetworking', x: 48, y: 42, tone: 'cyan' },
  { id: 'aks', label: 'AKS\ncluster', x: 70, y: 42, tone: 'emerald' },
  { id: 'vault', label: 'Azure Key\nVault', x: 88, y: 18, tone: 'amber' },
  { id: 'monitoring', label: 'Monitoring', x: 88, y: 66, tone: 'cyan' },
]

export const architectureEdges = [
  ['client', 'auth'],
  ['client', 'fastapi'],
  ['auth', 'waf'],
  ['fastapi', 'waf'],
  ['waf', 'aks'],
  ['aks', 'vault'],
  ['aks', 'monitoring'],
]

export const articles: Article[] = [
  {
    title: 'CyCTF qualification 2025: Inception',
    summary: 'A multi-challenge research log spanning Android reverse engineering, cryptography, native instrumentation, and a TOCTOU race condition.',
    url: 'https://medium.com/@aliyasser0115139/cyctf-qualification-2025-inception-0db7af2464bc?source=user_profile_page---------0-------------b5711cd50079------------------------',
    tags: ['Android', 'Reverse engineering', 'Race conditions'],
    featured: true,
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
  {
    title: 'Contakt — Stored XSS in the Contact Form',
    summary: 'A public CTF analysis of stored XSS, email parser behavior, unescaped EJS output, and a privileged admin bot.',
    url: 'https://medium.com/@aliyasser0115139/contakt-stored-xss-in-the-contact-form-30a3f7098cab',
    tags: ['Web security', 'XSS', 'EJS'],
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
  {
    title: 'CyCTF Luxor writeup',
    summary: 'A focused walk-through of exploiting a time-of-check to time-of-use gap in a web terminal challenge.',
    url: 'https://medium.com/@aliyasser0115139/cyctf-luxor-writeup-71d6db36b11a',
    tags: ['CTF', 'TOCTOU', 'Linux'],
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
  {
    title: 'ICMTC CTF 2025',
    summary: 'An application-security write-up covering path traversal, source review, session handling, and challenge reasoning.',
    url: 'https://medium.com/@aliyasser0115139/icmtc-ctf-2025-44ac900d7119',
    tags: ['CTF', 'Path traversal', 'Source review'],
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
  {
    title: 'Red Mirage Challenge Writeup — The Mirage That Shattered',
    summary: 'A web exploitation write-up about SSRF, internal Redis reachability, token exposure, and authorization boundaries.',
    url: 'https://medium.com/@aliyasser0115139/red-mirage-challenge-writeup-the-mirage-that-shattered-6ca0de7d9fe8',
    tags: ['SSRF', 'Redis', 'Web exploitation'],
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
  {
    title: 'Phantom’s Labyrinth — Web Challenge',
    summary: 'An EGCTF qualifications write-up connecting wrapper-based source disclosure, weak comparisons, and unsafe deserialization.',
    url: 'https://medium.com/@aliyasser0115139/%EF%B8%8F-phantoms-labyrinth-web-challenge-egctf-2025-qualifications-write-up-2a5142c5c3bf',
    tags: ['PHP', 'Deserialization', 'WAF analysis'],
    date: 'Publication date not provided',
    readTime: 'Research log',
  },
]
