import { Download, Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [soundOn, setSoundOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fadeFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio("/audio/cyber-pulse-score.mp3");
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "none";
    audioRef.current = audio;
    return () => {
      if (fadeFrameRef.current !== null) cancelAnimationFrame(fadeFrameRef.current);
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
    };
  }, []);

  const fadeAudio = (audio: HTMLAudioElement, targetVolume: number, pauseAfterFade = false) => {
    if (fadeFrameRef.current !== null) cancelAnimationFrame(fadeFrameRef.current);
    const startVolume = audio.volume;
    const startTime = performance.now();
    const duration = 850;
    const fade = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = progress * progress * (3 - 2 * progress);
      audio.volume = startVolume + (targetVolume - startVolume) * eased;
      if (progress < 1) {
        fadeFrameRef.current = requestAnimationFrame(fade);
      } else {
        fadeFrameRef.current = null;
        if (pauseAfterFade) audio.pause();
      }
    };
    fadeFrameRef.current = requestAnimationFrame(fade);
  };

  const toggleSound = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (soundOn) {
      setSoundOn(false);
      fadeAudio(audio, 0, true);
      return;
    }
    try {
      audio.volume = 0;
      await audio.play();
      setSoundOn(true);
      fadeAudio(audio, 0.26);
    } catch {
      audio.pause();
      audio.volume = 0;
      setSoundOn(false);
    }
  };

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
          className="sound-toggle"
          type="button"
          aria-pressed={soundOn}
          aria-label={soundOn ? "Turn cinematic cyber soundtrack off" : "Turn cinematic cyber soundtrack on"}
          title={soundOn ? "Cinematic cyber soundtrack on — click to mute" : "Cinematic cyber soundtrack off — click to enable"}
          onClick={toggleSound}
        >
          {soundOn ? <Volume2 size={15} aria-hidden="true" /> : <VolumeX size={15} aria-hidden="true" />}
          <span>{soundOn ? "SOUND ON" : "SOUND OFF"}</span>
          <i className="sound-wave" aria-hidden="true"><b /><b /><b /></i>
        </button>

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
