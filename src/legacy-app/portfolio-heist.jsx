import React from 'react';
import './portfolio-heist.css';

const {
  ME,
  FEATURED_PROJECTS,
  EXPERIENCE,
  VOLUNTEERING,
  SKILLS,
  OTHER_PROJECTS,
  CONTRIB,
  fetchGitHubContributions,
} = window;

// portfolio-heist.jsx - "Midnight / Daylight" direction.
// The heist theme is the maintained portfolio experience; terminal/editorial
// stay in the bundle as legacy alternates.

const {
  useEffect: useEffectH,
  useMemo: useMemoH,
  useRef: useRefH,
  useState: useStateH,
} = React;

function useScrollReveal(ref, options = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -60px 0px" } = options;
  const [isVisible, setIsVisible] = useStateH(false);

  useEffectH(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);

  return isVisible;
}

const Reveal = React.forwardRef(function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...props }, forwardedRef) {
  const ref = useRefH(null);
  const visible = useScrollReveal(ref);
  const setRef = (node) => {
    ref.current = node;
    if (typeof forwardedRef === "function") {
      forwardedRef(node);
    } else if (forwardedRef) {
      forwardedRef.current = node;
    }
  };
  return (
    <Tag
      ref={setRef}
      className={`${className} reveal ${visible ? "visible" : ""}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
});

function SectionHeader({ num, title, meta }) {
  return (
    <Reveal className="h-sec">
      <span className="h-sec-num">{num}</span>
      <h2 className="h-sec-title">{title}</h2>
      <span className="h-sec-meta">{meta}</span>
    </Reveal>
  );
}

function StackTags({ items }) {
  return (
    <div className="h-stack">
      {items.map((item) => <span key={item}>{item}</span>)}
    </div>
  );
}

function LinkButton({ href, children, primary = false, download = false }) {
  return (
    <a
      className={`h-link-btn ${primary ? "primary" : ""}`}
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download || undefined}
    >
      <span>{children}</span>
    </a>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function CelestialOrb({ mode, accent }) {
  const isDark = mode === "dark";
  const id = isDark ? "moon-orb" : "sun-orb";
  return (
    <svg
      className="h-orb"
      viewBox="0 0 220 220"
      role="img"
      aria-label={isDark ? "Moon" : "Sun"}
      style={{ color: accent }}
    >
      <defs>
        <radialGradient id={`${id}-fill`} cx={isDark ? "36%" : "42%"} cy={isDark ? "34%" : "38%"} r="68%">
          {isDark ? (
            <>
              <stop offset="0%" stopColor="#F4FBFF" />
              <stop offset="42%" stopColor="#D7EBFF" />
              <stop offset="72%" stopColor={accent} />
              <stop offset="100%" stopColor={`${accent}00`} />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="36%" stopColor="#FFFDF4" />
              <stop offset="62%" stopColor="#FFEDB6" />
              <stop offset="100%" stopColor="rgba(255,237,182,0)" />
            </>
          )}
        </radialGradient>
        <filter id={`${id}-glow`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation={isDark ? "12" : "15"} result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values={isDark
              ? "0 0 0 0 0.13 0 0 0 0 0.83 0 0 0 0 0.93 0 0 0 .62 0"
              : "0 0 0 0 1 0 0 0 0 .95 0 0 0 0 .70 0 0 0 .62 0"}
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="110" cy="110" r="78" fill={`url(#${id}-fill)`} filter={`url(#${id}-glow)`} />
      {isDark && (
        <>
          <circle cx="84" cy="78" r="8" fill="rgba(10,26,51,.18)" />
          <circle cx="129" cy="112" r="12" fill="rgba(10,26,51,.14)" />
          <circle cx="102" cy="142" r="6" fill="rgba(10,26,51,.15)" />
        </>
      )}
    </svg>
  );
}

function PortraitFrame({ src }) {
  return (
    <div className="h-portrait-wrap">
      <div className="h-portrait">
        <div className="h-portrait-img">
          <img src={src} alt="Seydi Cheikh Wade" />
        </div>
      </div>
    </div>
  );
}

function StatusLine({ line }) {
  const role = typeof line === "string" ? line.split(" @ ")[0] : line.text;
  const org = typeof line === "string" ? line.split(" @ ")[1] : line.org;
  return (
    <li>
      <span className="h-status-bullet">•</span>
      <span>{role}</span>
      {org && (
        <>
          <span className="h-status-at"> @ </span>
          <span className="h-status-org">{org}</span>
        </>
      )}
    </li>
  );
}

function JasmineDiagram({ labels }) {
  const text = (value, x, y, className = "j-label", anchor = "middle") => (
    <text x={x} y={y} className={className} textAnchor={anchor}>
      {String(value).split("\n").map((line, index) => (
        <tspan key={line + index} x={x} dy={index ? 14 : 0}>{line}</tspan>
      ))}
    </text>
  );
  const node = (x, y, w, h, label, className = "") => (
    <g className={`j-node ${className}`}>
      <rect x={x} y={y} width={w} height={h} rx="8" />
      {text(label, x + w / 2, y + h / 2 - 7, "j-node-label")}
    </g>
  );

  return (
    <svg className="h-jasmine-svg" viewBox="0 0 900 320" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Jasmine Conseil customs risk prediction system diagram">
      <defs>
        <marker id="j-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" />
        </marker>
      </defs>
      <path className="j-flow" d="M164 121H300" />
      <path className="j-flow" d="M440 121H560" />
      <path className="j-flow" d="M705 121H760" />
      <path className="j-flow" d="M632 158V218" />
      {node(24, 84, 140, 74, labels.source)}
      {node(300, 84, 140, 74, labels.proxy)}
      {node(560, 84, 145, 74, labels.api, "primary")}
      {node(760, 84, 118, 74, labels.output)}
      {node(520, 218, 205, 74, labels.model, "model")}
      {text(labels.sourceData, 232, 48, "j-data")}
      {text(labels.receivedData || labels.sourceData, 500, 48, "j-data")}
      <path className="j-scan" d="M26 184H874" />
      <path className="j-scan dim" d="M420 302H745" />
    </svg>
  );
}

function OtherProjectCard({ project, delay = 0 }) {
  return (
    <Reveal className="h-card h-mini-card" delay={delay}>
      <h3>{project.name}</h3>
      <p>{project.tagline}</p>
      {project.stack ? (
        <StackTags items={project.stack} />
      ) : (
        <div className="h-repo-meta">
          <span>{project.language || "Public repo"}</span>
          <span>★ {project.stars || 0}</span>
        </div>
      )}
      <a className="h-mini-link" href={project.repoUrl} target="_blank" rel="noreferrer">View ↗</a>
    </Reveal>
  );
}

function ExperienceLogo({ src, alt, variant = "small" }) {
  return (
    <div className={`h-exp-logo ${variant}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

function HeistTheme({ accent, showGithub }) {
  const [mode, setMode] = useStateH(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('midnight-mode');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  useEffectH(() => { window.localStorage.setItem('midnight-mode', mode); }, [mode]);

  const [contribData, setContribData] = useStateH(() => window.CONTRIB || CONTRIB || []);
  const [contribTotal, setContribTotal] = useStateH(() => window._contribTotal ?? null);
  const [contribRange, setContribRange] = useStateH(() => window._contribRange || null);
  const [contribLoaded, setContribLoaded] = useStateH(() => !!window._contribLoaded);
  const [drawerOpen, setDrawerOpen] = useStateH(false);
  const rootRef = useRefH(null);
  const ghSectionRef = useRefH(null);
  const ghFetchedRef = useRefH(!!window._contribLoaded);

  useEffectH(() => {
    const handler = () => {
      setContribData([...(window.CONTRIB || CONTRIB || [])]);
      setContribTotal(window._contribTotal ?? null);
      setContribRange(window._contribRange || null);
      setContribLoaded(!!window._contribLoaded);
    };
    if (window._contribLoaded || window._contribTotal !== undefined) handler();
    window.addEventListener("contrib-loaded", handler);
    return () => window.removeEventListener("contrib-loaded", handler);
  }, []);

  useEffectH(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffectH(() => {
    const root = rootRef.current || document.querySelector(".h-root");
    if (!root) return;
    const normalized = accent.startsWith("#") ? accent : `#${accent}`;
    const match = normalized.match(/^#([0-9a-f]{6})$/i);
    root.style.setProperty("--accent", normalized);
    if (!match) return;
    const value = match[1];
    const r = parseInt(value.slice(0, 2), 16);
    const g = parseInt(value.slice(2, 4), 16);
    const b = parseInt(value.slice(4, 6), 16);
    const rgba = (a) => `rgba(${r},${g},${b},${a})`;
    root.style.setProperty("--accent-soft", rgba(0.2));
    root.style.setProperty("--accent-mid", rgba(0.667));
    root.style.setProperty("--accent-08", rgba(0.08));
    root.style.setProperty("--accent-10", rgba(0.06));
    root.style.setProperty("--accent-15", rgba(0.09));
    root.style.setProperty("--accent-18", rgba(0.094));
    root.style.setProperty("--accent-1a", rgba(0.102));
    root.style.setProperty("--accent-1f", rgba(0.122));
    root.style.setProperty("--accent-22", rgba(0.133));
    root.style.setProperty("--accent-24", rgba(0.141));
    root.style.setProperty("--accent-20", rgba(0.14));
    root.style.setProperty("--accent-33", rgba(0.2));
    root.style.setProperty("--accent-40", rgba(0.251));
    root.style.setProperty("--accent-55", rgba(0.333));
    root.style.setProperty("--accent-66", rgba(0.4));
    root.style.setProperty("--accent-80", rgba(0.502));
    root.style.setProperty("--accent-88", rgba(0.533));
    root.style.setProperty("--accent-aa", rgba(0.667));
    root.style.setProperty("--accent-c0", rgba(0.753));
  }, [accent]);

  useEffectH(() => {
    const el = ghSectionRef.current;
    if (!el || ghFetchedRef.current || !showGithub) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ghFetchedRef.current) {
          ghFetchedRef.current = true;
          fetchGitHubContributions?.();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [showGithub]);

  const isDark = mode === 'dark';

  const particles = useMemoH(() => {
    if (isDark) {
      return Array.from({ length: 30 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.8 + Math.random() * 2.2,
        delay: -Math.random() * 6,
        dur: 3 + Math.random() * 5,
        op: 0.35 + Math.random() * 0.55,
      }));
    }
    return Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      size: 2 + Math.random() * 8,
      delay: -Math.random() * 26,
      dur: 18 + Math.random() * 22,
      drift: (Math.random() - 0.5) * 80,
      op: 0.15 + Math.random() * 0.35,
    }));
  }, [isDark]);

  const navLinks = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "volunteering", label: "Volunteering" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const jasmine = EXPERIENCE.find((item) => item.id === "jasmine") || EXPERIENCE[0];
  const statcan = EXPERIENCE.find((item) => item.id === "statcan") || EXPERIENCE[1];
  const volunteering = VOLUNTEERING[0];
  const formatContribDate = (date) => {
    if (!date) return contribLoaded ? "UNAVAILABLE" : "LOADING";
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }).toUpperCase();
  };
  const navTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setDrawerOpen(false);
  };

  return (
    <div ref={rootRef} className={`h-root ${mode}`} style={{ "--accent": accent }}>
      {!isDark && <div className="h-hero-bg" aria-hidden="true" />}
      {!isDark && <div className="h-godray" aria-hidden="true" />}
      {!isDark && <div className="h-caustic" aria-hidden="true" />}
      <div className="h-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              left: `${p.x}%`,
              ...(isDark ? { top: `${p.y}%` } : {}),
              width: `${p.size}px`,
              height: `${p.size}px`,
              "--delay": `${p.delay}s`,
              "--dur": `${p.dur}s`,
              "--drift": `${p.drift || 0}px`,
              "--op": p.op,
            }}
          />
        ))}
      </div>

      <button
        className="h-hamburger"
        type="button"
        aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={drawerOpen}
        aria-controls="h-side-drawer"
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <span className="h-hamburger-lines" aria-hidden="true"><span /><span /><span /></span>
      </button>

      <button
        className={`h-drawer-overlay ${drawerOpen ? "open" : ""}`}
        type="button"
        aria-label="Close navigation"
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        id="h-side-drawer"
        className={`h-drawer ${drawerOpen ? "open" : ""}`}
        aria-hidden={!drawerOpen}
      >
        <button
          className="h-drawer-close"
          type="button"
          aria-label="Close navigation"
          onClick={() => setDrawerOpen(false)}
        >
          ×
        </button>
        <div className="h-drawer-name">Seydi Cheikh Wade</div>
        <div className="h-drawer-stars" aria-label="Five stars">★★★★★</div>
        <div className="h-drawer-links">
          {navLinks.map((link) => (
            <button key={link.id} type="button" onClick={() => navTo(link.id)}>
              {link.label}
            </button>
          ))}
        </div>
        <div className="h-drawer-links h-drawer-social">
          <a href={ME.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${ME.email}`}>Email →</a>
        </div>
        <button
          className="h-drawer-mode"
          type="button"
          onClick={() => setMode(isDark ? "light" : "dark")}
        >
          {isDark ? "Daylight" : "Midnight"}
        </button>
      </aside>

      <div className="h-wrap">
        <div className="h-top">
          <div><span className="dot" />ACTIVE · BUILDING IN OTTAWA · 2026</div>
          <div className="h-top-right">
            <a href={ME.github} target="_blank" rel="noreferrer"><GitHubIcon /><span>GitHub</span></a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg><span>LinkedIn</span></a>
            <a href={`mailto:${ME.email}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" /></svg><span>Email</span></a>
            <a href={ME.resumeUrl}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg><span>Résumé</span></a>
            <button
              className="h-mode-btn"
              type="button"
              onClick={() => setMode(isDark ? 'light' : 'dark')}
              aria-label={isDark ? 'Switch to daylight' : 'Switch to midnight'}
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
              <span>{isDark ? 'Daylight' : 'Midnight'}</span>
            </button>
          </div>
        </div>

        <section className="h-hero">
          <CelestialOrb mode={isDark ? "dark" : "light"} accent={accent} />

          <div className="h-vlabel">PORTFOLIO · {isDark ? "MIDNIGHT" : "DAYLIGHT"} EDITION</div>
          <div className="h-eyebrow">
            FILE 0 · INTRODUCTION
            <span className="h-arcana"><b>Arcana 0</b> a software journey</span>
          </div>
          <div className="h-hero-grid">
            <div className="h-hero-copy">
              <div className="h-name-wrap">
                <div className="h-name-echo2" aria-hidden="true">Seydi<br />Cheikh WADE.</div>
                <div className="h-name-echo" aria-hidden="true">Seydi<br />Cheikh WADE.</div>
                <h1 className="h-name">Seydi<br /><span className="c">Cheikh</span> <em>WADE.</em></h1>
              </div>
            </div>
            <PortraitFrame src="portrait.png" />
            <div className="h-sub">
              <p className="h-blurb">{ME.blurb}</p>
            </div>
            <ul className="h-status">
              {ME.statusLines.map((line, index) => <StatusLine key={`${line.text || line}-${index}`} line={line} />)}
            </ul>
          </div>
        </section>

        <Reveal as="section" id="projects" data-nav-section="projects" className="h-section">
          <SectionHeader num="01" title="Featured Projects" meta="/ 2 ENTRIES · 2025–2026" />
          <div className="h-featured-list">
            {FEATURED_PROJECTS.map((project, index) => (
              <Reveal key={project.id} className="h-card h-featured-card" delay={index * 80}>
                <div className="h-card-sheen" />
                <div className="h-card-top">
                  <div className="h-award"><span>{project.award}</span></div>
                  <div className="h-hackathon">{project.hackathon} · {project.role}</div>
                </div>
                <div className="h-featured-body">
                  <div>
                    <div className="h-shot-frame">
                      <img src={project.image} alt={`${project.name} product screenshot`} />
                    </div>
                  </div>
                  <div className="h-featured-copy">
                    <h3>{project.name}</h3>
                    <p className="h-tagline">{project.tagline}</p>
                    <p className="h-narrative">{project.description}</p>
                    <StackTags items={project.stack} />
                    <div className="h-card-links">
                      <LinkButton href={project.liveUrl} primary>Live Site ↗</LinkButton>
                      <LinkButton href={project.devpostUrl}>Devpost ↗</LinkButton>
                      <LinkButton href={project.repoUrl}>GitHub ↗</LinkButton>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="experience" data-nav-section="experience" className="h-section">
          <SectionHeader num="02" title="Experience" meta="/ CO-OPS" />
          <div className="h-experience-list">
            <Reveal className="h-card h-work-card statcan">
              <div className="h-current-badge"><i />Current</div>
              <div className="h-work-head">
                <div className="h-work-title-row">
                  <div>
                    <h3 className="h-work-role">{statcan.role}</h3>
                    <div className="h-work-org">{statcan.org} · {statcan.context}</div>
                    <div className="h-work-meta"><span>{statcan.period}</span><span>{statcan.where}</span></div>
                  </div>
                </div>
              </div>
              <div className="h-statcan-body">
                {statcan.logo && <ExperienceLogo src={statcan.logo} alt={statcan.org} variant="large" />}
                <div>
                  <p className="h-narrative">{statcan.description}</p>
                  <StackTags items={statcan.stack} />
                </div>
              </div>
            </Reveal>

            <Reveal className="h-card h-work-card jasmine" delay={80}>
              <div className="h-card-sheen" />
              <div className="h-work-head">
                <div className="h-work-title-row">
                  {jasmine.logo && <ExperienceLogo src={jasmine.logo} alt={jasmine.org} variant="small" />}
                  <div>
                    <h3 className="h-work-role">{jasmine.role}</h3>
                    <div className="h-work-org">{jasmine.org} · {jasmine.context}</div>
                    <div className="h-work-meta"><span>{jasmine.period}</span><span>{jasmine.where}</span></div>
                  </div>
                </div>
              </div>
              <div className="h-work-body">
                <div className="h-jasmine-frame">
                  <JasmineDiagram labels={jasmine.diagramLabels} />
                </div>
                <div>
                  <p className="h-narrative">{jasmine.description}</p>
                  <StackTags items={jasmine.stack} />
                  <div className="h-card-links">
                    <LinkButton href={jasmine.repoUrl}>View Source ↗</LinkButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal as="section" id="volunteering" data-nav-section="volunteering" className="h-section">
          <SectionHeader num="03" title="Volunteering" meta="/ COMMUNITY" />
          <div className="h-volunteer-list">
            <Reveal className="h-card h-volunteer-card">
              <div className="h-card-sheen" />
              <div className="h-current-badge"><i />Current</div>
              <div className="h-work-head">
                <h3 className="h-work-role">{volunteering.role}</h3>
                <div className="h-work-org">{volunteering.org} · {volunteering.client}</div>
                <div className="h-work-meta"><span>{volunteering.period}</span><span>{volunteering.where}</span></div>
              </div>
              <div className="h-volunteer-body">
                <div>
                  <div className="h-shot-frame">
                    <img src={volunteering.image} alt="Current Crisis Center homepage screenshot" />
                  </div>
                  <div className="h-img-caption">The site we're redesigning</div>
                </div>
                <div className="h-volunteer-copy">
                  <h3>{volunteering.client}</h3>
                  <p className="h-narrative">{volunteering.description}</p>
                  <div className="h-card-links">
                    <LinkButton href={volunteering.siteUrl} primary>Crisis Center ↗</LinkButton>
                    <LinkButton href={volunteering.orgUrl}>Develop for Good ↗</LinkButton>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        <Reveal as="section" data-nav-section="projects" className="h-section">
          <SectionHeader num="04" title="Other Projects" meta="/ FROM GITHUB" />
          <div className="h-other-grid">
            {OTHER_PROJECTS.map((project, index) => (
              <OtherProjectCard key={project.id} project={project} delay={index * 80} />
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="skills" data-nav-section="skills" className="h-section">
          <SectionHeader num="05" title="Toolkit" meta="/ THINGS I REACH FOR" />
          <div className="h-skills">
            {SKILLS.map((skill, index) => (
              <Reveal key={skill.group} className="h-card h-skill-card" delay={index * 80}>
                <div className="h-skill-grp">// {skill.group}</div>
                {skill.items.map((item) => <span key={item} className="h-skill-chip">{item}</span>)}
              </Reveal>
            ))}
          </div>
        </Reveal>

        {showGithub && (
          <Reveal as="section" className="h-section" ref={ghSectionRef}>
            <SectionHeader num="06" title="Commit Pulse" meta="/ LAST 52 WEEKS" />
            <Reveal className="h-card h-gh">
              <div className="h-gh-head">
                <span>@cheikhwade07</span>
                <strong>
                  {contribTotal !== null
                    ? `${contribTotal.toLocaleString()} CONTRIBUTIONS`
                    : contribLoaded ? "PUBLIC API UNAVAILABLE" : "LOADING..."}
                </strong>
              </div>
              <div className="h-gh-grid">
                {contribData.map((week, wi) => (
                  <div key={wi} className="h-gh-col">
                    {week.map((level, di) => (
                      <div key={di} className={`h-gh-cell ${level ? `l${level}` : ""}`} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="h-gh-foot">
                <span>{formatContribDate(contribRange?.start)}</span>
                <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  LESS
                  <span className="h-gh-cell" style={{ width: 10 }} />
                  <span className="h-gh-cell l1" style={{ width: 10 }} />
                  <span className="h-gh-cell l2" style={{ width: 10 }} />
                  <span className="h-gh-cell l3" style={{ width: 10 }} />
                  <span className="h-gh-cell l4" style={{ width: 10 }} />
                  MORE
                </span>
                <span>{formatContribDate(contribRange?.end)}</span>
              </div>
            </Reveal>
          </Reveal>
        )}

        <Reveal as="section" id="resume" data-nav-section="resume" className="h-section">
          <SectionHeader num="07" title="Resume" meta="/ DOWNLOADABLE" />
          <div className="h-resume-layout">
            <div className="h-card h-resume-card">
              <div className="h-card-links">
                <LinkButton href={ME.resumeUrl} primary download>Download Resume ↓</LinkButton>
              </div>
              <Reveal className="h-resume-preview">
                <img className="h-resume-img" src={ME.resumePreview} alt="Resume first page preview" />
              </Reveal>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" id="contact" data-nav-section="contact" className="h-section">
          <div className="h-card h-contact-card">
            <h2>Let's build something.</h2>
            <div className="h-contact-row">
              <LinkButton href={`mailto:${ME.email}`} primary>Send a message →</LinkButton>
              <LinkButton href={ME.linkedin}>LinkedIn ↗</LinkButton>
            </div>
          </div>
        </Reveal>

        <div className="h-foot">
          <span>© 2026 · CHEIKH WADE</span>
          <span className="h-np">♪ Last Surprise</span>
          <span>V3.6 · MIDNIGHT/DAYLIGHT</span>
        </div>
      </div>
    </div>
  );
}

window.HeistTheme = HeistTheme;
