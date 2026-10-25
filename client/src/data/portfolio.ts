export const profile = {
  name: "Ali Yasser",
  fullName: "Ali Yasser Ali",
  email: "aliyasser0115139@gmail.com",
  location: "Cairo, Egypt",
  roles: ["Penetration Tester", "Bug Bounty Hunter", "Instructor & Mentor"],
  summary:
    "Penetration tester and active bug bounty hunter with 25+ validated vulnerabilities, full-scope web, network, and Active Directory assessment experience, and a focus on clear remediation-oriented reporting.",
  socials: {
    youtube: "https://www.youtube.com/@Pwn_Sec",
    medium: "https://medium.com/@aliyasser0115139",
    linkedin: "https://www.linkedin.com/in/ali-yasser-penetration-testing/?isSelfProfile=true",
  },
};

export const experience = [
  {
    organization: "ADA Egypt · Academy of Digital Arts",
    role: "Penetration Tester, Instructor & Mentor",
    period: "Mar 2026 — Present",
    kind: "Full-scope security testing",
    summary:
      "Lead web, network, and Active Directory assessments for enterprise clients, identify vulnerabilities, and help guide remediation. Design and deliver training on web application security and professional pentesting methodology, and mentor security interns through structured report reviews.",
  },
  {
    organization: "HackerOne · YesWeHack · Intigriti",
    role: "Bug Bounty Hunter",
    period: "2025 — Present",
    kind: "Independent · Remote",
    summary:
      "Reported 25+ valid vulnerabilities across enterprise programs including Twilio, Notion, Allegro, Wells Fargo, and DBS Bank. Focus areas include advanced reconnaissance, WAF bypass, parameter pollution, CORS misconfiguration, and BOLA/IDOR attack chains.",
  },
  {
    organization: "Egyptian Financial Regulatory Authority · FRA",
    role: "Cybersecurity Intern — Financial Systems Security Assessment",
    period: "2026",
    kind: "Cairo, Egypt",
    summary:
      "Assessed 5+ internal financial systems, documented vulnerabilities, and delivered remediation recommendations. Supported security-governance and compliance reviews and prepared risk reports for technical and non-technical stakeholders.",
  },
];

export const findings = [
  {
    organization: "DBS Bank",
    platform: "YesWeHack",
    finding: "Security misconfiguration",
    score: "CVSS 5.9",
    outcome: "Reported on a live banking platform; monetary bounty awarded. Technical details are intentionally omitted.",
  },
  {
    organization: "Notion",
    platform: "HackerOne",
    finding: "Broken access control",
    score: "CVSS 6.9",
    outcome: "Validated and reported with an impact-focused write-up; technical reproduction details are not published here.",
  },
  {
    organization: "Wells Fargo",
    platform: "HackerOne",
    finding: "Validated security finding",
    score: "Financial program",
    outcome: "Validated finding within a major financial-program scope; technical details are not included here.",
  },
  {
    organization: "Allegro",
    platform: "Intigriti",
    finding: "DOM-based XSS · WAF bypass",
    score: "Authorized program",
    outcome: "Reported through the Intigriti program. Target-specific testing and reproduction details remain private.",
  },
];

export const skillGroups = [
  {
    title: "Web & API Pentesting",
    intro: "Manual and automated testing across modern application attack surfaces.",
    skills: [
      "Manual testing",
      "Automation testing",
      "API testing",
      "OWASP Top 10",
      "OWASP API Security Top 10",
      "XSS · SQLi · SSRF",
      "CSRF · IDOR/BOLA",
      "LFI/RFI · file upload abuse",
      "CORS · WAF bypass",
      "Parameter pollution",
      "Threat modeling",
    ],
  },
  {
    title: "Network & Active Directory",
    intro: "Assess exposure, identity relationships, and privilege boundaries in authorized scope.",
    skills: [
      "Network pentesting",
      "Active Directory assessment",
      "Nmap · Wireshark",
      "BloodHound · Impacket",
      "CrackMapExec · Responder",
      "Kerberoasting",
      "Pass-the-Hash · DCSync",
      "PowerShell Empire",
      "TCP/IP · DNS · HTTP/S",
      "Windows Server",
    ],
  },
  {
    title: "Mobile, Recon & OSINT",
    intro: "Explore application and internet-facing attack surfaces methodically.",
    skills: [
      "Android APK analysis",
      "SSL-pinning bypass",
      "Advanced reconnaissance",
      "Subdomain enumeration",
      "Google Dorking · Shodan",
      "JavaScript analysis",
      "OSINT",
      "Nuclei",
    ],
  },
  {
    title: "Tools, Methodology & Reporting",
    intro: "Use established testing frameworks and deliver clear, useful outcomes.",
    skills: [
      "Burp Suite Pro",
      "Metasploit · SQLMap",
      "PTES · Agile",
      "Vulnerability assessment",
      "Python · Bash · JavaScript",
      "PHP · HTML/CSS · Java",
      "Kali Linux · Ubuntu",
      "Reporting & documentation",
      "Compliance reporting",
      "Mentoring & training",
    ],
  },
];

export const certifications = {
  earned: [
    "eJPTv2 · eLearnSecurity",
    "AppSec Practitioner · CAP",
    "Network Security Practitioner · CNSP",
    "CCNA · NTI",
  ],
  inProgress: [
    "CRTP",
    "CPTS",
    "eWAPTX",
    "eMAPT + eMAPT Black Belt",
    "Hextree",
    "CompTIA Security+",
    "ITI Pen Testing & DFIR",
    "CyberTalents Bootcamp",
  ],
};

export const community = [
  {
    title: "IEEE Cybersecurity Branch, Egypt",
    label: "Head Instructor",
    detail: "Delivered 5+ hands-on penetration-testing workshops to 100+ students.",
  },
  {
    title: "Pwn_Sec",
    label: "Founder · YouTube",
    detail: "Practical penetration-testing and CTF walkthrough content.",
  },
];

export const competitions = [
  "1st place · CyShield CTF Luxor · Web, Forensics & Reverse Engineering · Mar 2026",
  "7th place nationwide · Zinad × ITI CyberChampions CTF · Feb 2026",
  "Finalist / team member · Sp3c0ps · Connectors CTF (5th place), ICMTC 2025, CyCTF 2025",
];
