import React from 'react';

const {
  ME,
  FEATURED_PROJECTS,
  EXPERIENCE,
  VOLUNTEERING,
  SKILLS,
  OTHER_PROJECTS,
  CONTRIB,
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

function Reveal({ as: Tag = "div", className = "", delay = 0, style, children, ...props }) {
  const ref = useRefH(null);
  const visible = useScrollReveal(ref);
  return (
    <Tag
      ref={ref}
      className={`${className} reveal ${visible ? "visible" : ""}`.trim()}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}

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
              <stop offset="100%" stopColor="rgba(34,211,238,0)" />
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

  const isDark = mode === 'dark';
  const cyan = accent;
  const ultra = isDark ? "#1E40AF" : "#1D4ED8";
  const cyanSoft = `${cyan}33`;
  const cyanMid = `${cyan}AA`;
  const ultraSoft = `${ultra}33`;
  const bgTop = isDark ? "#0A1A33" : "#020617";
  const bgBot = "#020617";
  const ink = isDark ? "#EAF6FF" : "#F1F8FF";
  const inkSoft = isDark ? "rgba(234,246,255,.22)" : "rgba(241,248,255,.18)";
  const dim = isDark ? "rgba(234,246,255,.58)" : "rgba(241,248,255,.66)";
  const rule = isDark ? "rgba(234,246,255,.11)" : "rgba(255,255,255,.16)";
  const surface = isDark ? "rgba(8,18,38,.72)" : "rgba(255,255,255,.07)";
  const surface2 = isDark ? "rgba(14,28,56,.86)" : "rgba(255,255,255,.12)";
  const cardBg = isDark
    ? `linear-gradient(180deg,${surface2},${surface})`
    : "linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,.045))";
  const cardShadow = isDark
    ? `0 1px 0 ${rule} inset,0 30px 70px -40px rgba(0,0,0,.8)`
    : "0 1px 0 rgba(255,255,255,.22) inset,0 24px 54px -24px rgba(0,8,28,.55)";
  const featuredGrad = isDark
    ? `linear-gradient(160deg,${cyan}24,${ultra}33 52%,${surface2})`
    : `linear-gradient(180deg,rgba(255,255,255,.16),rgba(127,211,244,.14) 52%,rgba(255,255,255,.05))`;
  const oceanDeep = "#0B2A5B";
  const oceanMid = "#1E3A8A";
  const abyss = "#020617";
  const heroGrad = `linear-gradient(180deg,#0E2A52 0%,${oceanDeep} 18%,#082046 45%,#04122E 75%,${abyss} 100%)`;
  const ctaGrad = isDark
    ? `linear-gradient(180deg,${ultra}33,${surface2})`
    : `linear-gradient(180deg,${oceanMid},${oceanDeep})`;

  const particles = useMemoH(() => {
    if (isDark) {
      return Array.from({ length: 60 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.8 + Math.random() * 2.2,
        delay: -Math.random() * 6,
        dur: 3 + Math.random() * 5,
        op: 0.35 + Math.random() * 0.55,
      }));
    }
    return Array.from({ length: 55 }, () => ({
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

  const css = `
    html{scroll-behavior:smooth}
    @keyframes hpulse{0%,100%{opacity:1}50%{opacity:.35}}
    @keyframes hsweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
    @keyframes hshimmer{0%{background-position:0% 0%,0% 0%,0% 0%}100%{background-position:120% 60%,-100% 40%,80% -80%}}
    @keyframes hcaustic{0%,100%{opacity:.35;transform:translate3d(0,0,0) scale(1)}50%{opacity:.7;transform:translate3d(-2%,1%,0) scale(1.04)}}
    @keyframes hrise{0%{transform:translate3d(0,0,0) scale(.85);opacity:0}10%{opacity:var(--op)}90%{opacity:var(--op)}100%{transform:translate3d(var(--drift),-105vh,0) scale(1.15);opacity:0}}
    @keyframes hgodray{0%,100%{opacity:.45;transform:translate3d(0,0,0) rotate(18deg)}50%{opacity:.75;transform:translate3d(24px,12px,0) rotate(20deg)}}
    @keyframes htwinkle{0%,100%{opacity:var(--op);transform:scale(1)}50%{opacity:.15;transform:scale(.6)}}
    @keyframes hscan{0%{transform:translateX(-35%)}100%{transform:translateX(35%)}}

    .h-root{background:${isDark ? `linear-gradient(180deg,${bgTop} 0%,${bgBot} 100%)` : abyss};color:${ink};font-family:'Archivo',ui-sans-serif,system-ui,sans-serif;min-height:100vh;position:relative;overflow:hidden;transition:color .35s ease}
    .h-root a{text-decoration:none;color:inherit}
    .h-root button{font:inherit}
    ${isDark ? `
    .h-root::before{content:"";position:fixed;inset:-20%;pointer-events:none;z-index:0;background:radial-gradient(60% 50% at 70% 10%,${cyan}55,transparent 60%),radial-gradient(40% 40% at 20% 80%,${ultra}44,transparent 70%),radial-gradient(50% 40% at 50% 50%,${cyan}22,transparent 70%);background-size:180% 180%,160% 160%,200% 200%;animation:hshimmer 28s ease-in-out infinite alternate;mix-blend-mode:screen;opacity:.9}
    ` : `
    .h-hero-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:${heroGrad};z-index:0;pointer-events:none}
    .h-godray{position:absolute;top:-15%;left:-20%;width:120%;height:160vh;pointer-events:none;z-index:1;background:linear-gradient(106deg,transparent 0%,transparent 18%,rgba(255,255,255,.10) 24%,rgba(190,235,255,.22) 30%,rgba(255,255,255,.32) 34%,rgba(190,235,255,.22) 38%,rgba(255,255,255,.08) 44%,transparent 52%,transparent 60%,rgba(180,230,255,.08) 66%,rgba(220,245,255,.20) 72%,rgba(180,230,255,.10) 78%,transparent 88%);mix-blend-mode:screen;filter:blur(14px);animation:hgodray 16s ease-in-out infinite;transform-origin:0 0}
    .h-caustic{position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(70% 50% at 30% 5%,rgba(255,255,255,.28),transparent 60%),radial-gradient(60% 50% at 80% 15%,rgba(150,220,255,.22),transparent 70%),radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,.10),transparent 75%);background-size:140% 140%,120% 120%,160% 160%;mix-blend-mode:screen;animation:hcaustic 18s ease-in-out infinite;opacity:.85}
    `}
    .h-root::after{content:"";position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(${inkSoft} 1px,transparent 1px),radial-gradient(120% 80% at 50% 20%,transparent 40%,${isDark ? ultra : cyan}22 70%,transparent 100%);background-size:22px 22px,100% 100%;mask-image:radial-gradient(80% 70% at 50% 30%,#000 30%,transparent 80%);animation:hcaustic 14s ease-in-out infinite}
    .h-grain{position:fixed;inset:0;pointer-events:none;z-index:2;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");mix-blend-mode:overlay;opacity:${isDark ? .4 : 0}}
    .h-particles{position:fixed;inset:0;pointer-events:none;z-index:3;overflow:hidden}
    .h-particles span{position:absolute;border-radius:50%;${isDark ? `background:#EAF6FF;box-shadow:0 0 6px #FFFFFF99;` : `background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.9),rgba(180,230,255,.5) 60%,rgba(127,211,244,0));box-shadow:inset 0 0 4px rgba(255,255,255,.6),0 0 8px rgba(255,255,255,.25);bottom:-40px;`}animation:${isDark ? 'htwinkle' : 'hrise'} var(--dur) ${isDark ? 'ease-in-out' : 'linear'} infinite;animation-delay:var(--delay)}

    .h-wrap{position:relative;z-index:3;max-width:1440px;margin:0 auto;padding:0 56px}
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .6s ease,transform .6s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}

    .h-top{display:flex;justify-content:space-between;align-items:center;padding:28px 0 0;font-family:'Archivo Black',sans-serif;letter-spacing:.04em;text-transform:uppercase;font-size:11px;color:${dim};gap:16px;flex-wrap:wrap}
    .h-top .dot{display:inline-block;width:8px;height:8px;background:${cyan};border-radius:50%;margin-right:10px;vertical-align:1px;animation:hpulse 1.6s infinite;box-shadow:0 0 12px ${cyan}}
    .h-top-right{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
    .h-top a{color:${ink};position:relative;transition:color .2s;display:inline-flex;align-items:center;gap:7px}
    .h-top a svg{width:13px;height:13px;flex-shrink:0;opacity:.85;transition:opacity .2s}
    .h-top a:hover,.h-top a:focus-visible{color:${cyan};outline:none}
    .h-mode-btn{display:inline-flex;align-items:center;gap:8px;background:${surface};backdrop-filter:blur(8px);border:1px solid ${rule};color:${ink};font-family:'Archivo Black',sans-serif;font-size:10px;letter-spacing:.18em;text-transform:uppercase;padding:8px 14px;border-radius:99px;cursor:pointer;transition:all .25s;line-height:1}
    .h-mode-btn:hover,.h-mode-btn:focus-visible{border-color:${cyan};color:${cyan};box-shadow:0 0 24px -6px ${cyanMid};outline:none}
    .h-mode-btn svg{width:14px;height:14px;display:block}

    .h-hamburger{position:fixed;top:20px;right:20px;z-index:9999;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer;background:rgba(10,18,28,.6);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:${ink};box-shadow:0 18px 44px -24px rgba(0,0,0,.85);transition:border-color .2s,color .2s,background .2s}
    .h-hamburger:hover,.h-hamburger:focus-visible{border-color:${cyan};color:${cyan};outline:none}
    .h-hamburger-lines{width:20px;display:flex;flex-direction:column;gap:5px}
    .h-hamburger-lines span{height:2px;width:100%;background:currentColor;border-radius:99px;box-shadow:0 0 10px ${cyanSoft}}
    .h-drawer-overlay{position:fixed;inset:0;z-index:9997;background:rgba(0,4,12,.58);opacity:0;pointer-events:none;transition:opacity .24s ease}
    .h-drawer-overlay.open{opacity:1;pointer-events:auto}
    .h-drawer{position:fixed;top:0;right:0;z-index:9998;width:min(380px,calc(100vw - 24px));height:100vh;padding:30px 26px;background:${isDark ? 'rgba(8,18,38,.86)' : 'rgba(5,20,45,.82)'};border-left:1px solid ${rule};backdrop-filter:blur(22px);box-shadow:-28px 0 70px -32px rgba(0,0,0,.85);transform:translateX(110%);transition:transform .28s ease;display:flex;flex-direction:column;color:${ink};pointer-events:none}
    .h-drawer.open{transform:translateX(0);pointer-events:auto}
    .h-drawer-close{position:absolute;top:18px;right:74px;width:36px;height:36px;border:1px solid ${rule};border-radius:8px;background:rgba(255,255,255,.04);color:${ink};cursor:pointer}
    .h-drawer-close:hover,.h-drawer-close:focus-visible{border-color:${cyan};color:${cyan};outline:none}
    .h-drawer-name{font-family:'Archivo Black',sans-serif;font-size:25px;line-height:.98;text-transform:uppercase;font-style:italic;max-width:11ch;margin:18px 0 10px}
    .h-drawer-stars{font-family:'JetBrains Mono',monospace;font-size:16px;letter-spacing:.1em;color:${cyan};text-shadow:0 0 16px ${cyanSoft};margin-bottom:38px}
    .h-drawer-links{display:flex;flex-direction:column;gap:8px;margin-bottom:30px}
    .h-drawer-links button,.h-drawer-links a{appearance:none;border:0;background:transparent;color:${ink};padding:10px 0;text-align:left;font-family:'Archivo Black',sans-serif;font-size:18px;font-style:italic;text-transform:uppercase;letter-spacing:.02em;cursor:pointer;transition:color .2s,transform .2s}
    .h-drawer-links button:hover,.h-drawer-links button:focus-visible,.h-drawer-links a:hover,.h-drawer-links a:focus-visible{color:${cyan};transform:translateX(4px);outline:none}
    .h-drawer-social a{font-family:'JetBrains Mono',monospace;font-size:12px;font-style:normal;letter-spacing:.14em}
    .h-drawer-mode{margin-top:auto;display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:44px;border:1px solid ${rule};border-radius:8px;background:${surface};color:${ink};font-family:'Archivo Black',sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer}
    .h-drawer-mode:hover,.h-drawer-mode:focus-visible{border-color:${cyan};color:${cyan};outline:none}

    .h-hero{padding:80px 0 140px;position:relative;min-height:calc(100vh - 60px)}
    .h-orb{position:absolute;top:clamp(20px,4vw,60px);right:clamp(20px,5vw,80px);width:clamp(120px,15vw,220px);height:clamp(120px,15vw,220px);z-index:1;pointer-events:none;mix-blend-mode:screen;opacity:.92;transition:opacity .35s ease,filter .35s ease}
    .h-eyebrow{font-family:'Archivo Black',sans-serif;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:${cyan};display:inline-flex;align-items:center;gap:14px;margin-bottom:32px;flex-wrap:wrap;position:relative;z-index:2}
    .h-eyebrow::before{content:"";display:block;width:36px;height:1px;background:${cyan}}
    .h-arcana{font-family:'Instrument Serif',serif;font-style:italic;font-size:13px;letter-spacing:.04em;text-transform:none;color:${dim}}
    .h-arcana b{color:${cyan};font-style:normal;font-weight:400;font-family:'Archivo Black',sans-serif;letter-spacing:.18em;text-transform:uppercase;font-size:11px;margin-right:6px}
    .h-hero-grid{display:grid;grid-template-columns:minmax(0,.62fr) minmax(240px,.38fr);grid-template-areas:"name portrait" "blurb status";gap:20px clamp(34px,6vw,92px);align-items:end;position:relative;z-index:2}
    .h-hero-copy{grid-area:name;min-width:0}
    .h-name-wrap{position:relative;display:block;margin:24px 0 0}
    .h-name,.h-name-echo,.h-name-echo2{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(64px,14vw,224px);line-height:.84;letter-spacing:-.028em;text-transform:uppercase}
    .h-name{margin:0;color:${ink};position:relative;z-index:2}
    .h-name span.c{color:${cyan};text-shadow:0 0 40px ${cyanSoft},0 0 80px ${cyanSoft}}
    .h-name em{font-style:italic;font-family:'Instrument Serif',serif;text-transform:none;font-weight:400;letter-spacing:-.01em;color:${ink}}
    .h-name-echo,.h-name-echo2{position:absolute;inset:0;color:transparent;pointer-events:none;user-select:none}
    .h-name-echo{-webkit-text-stroke:1px ${cyan}55;transform:translate(10px,10px);z-index:1}
    .h-name-echo2{-webkit-text-stroke:1px ${ultra}44;transform:translate(-8px,-8px);z-index:0}
    .h-sub{grid-area:blurb;margin-top:42px;display:block;position:relative;max-width:760px}
    .h-blurb{font-size:21px;line-height:1.58;max-width:50ch;font-weight:500;color:${ink};text-shadow:${isDark ? 'none' : '0 1px 16px rgba(0,8,28,.6),0 1px 2px rgba(0,8,28,.45)'};margin:0}
    .h-status{grid-area:status;margin:0;padding:0 0 4px;display:flex;flex-direction:column;gap:8px;list-style:none;font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.45;letter-spacing:.04em;color:${dim};width:min(100%,360px);justify-self:end}
    .h-status li{display:flex;align-items:baseline;gap:0;flex-wrap:wrap}
    .h-status-bullet{color:${cyan};padding-right:10px;text-shadow:0 0 10px ${cyanSoft}}
    .h-status-at,.h-status-org{color:${cyan}}
    .h-portrait-wrap{grid-area:portrait;justify-self:end;position:relative;z-index:2;margin-top:clamp(160px,18vw,280px)}
    .h-portrait{width:clamp(200px,25vw,320px);aspect-ratio:4/5;background:${cardBg};border:1px solid ${rule};border-radius:6px;${isDark ? 'backdrop-filter:blur(8px);' : 'backdrop-filter:blur(14px);'}box-shadow:${cardShadow};overflow:hidden;padding:10px;transition:transform .35s ease,box-shadow .35s ease}
    .h-portrait:hover{transform:translateY(-3px);box-shadow:0 30px 70px -20px rgba(0,8,28,.7),0 0 32px ${cyanSoft}}
    .h-portrait-img{width:100%;height:100%;background:#E6F2FA;border-radius:3px;overflow:hidden;position:relative}
    .h-portrait img{width:100%;height:100%;object-fit:cover;object-position:center 22%;display:block;mix-blend-mode:multiply;filter:${isDark ? 'brightness(1.45) contrast(1.02) saturate(.95)' : 'brightness(1.12) contrast(.98)'}}
    .h-vlabel{position:absolute;right:-20px;top:60px;writing-mode:vertical-rl;transform:rotate(180deg);font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:${dim}}
    .h-vlabel::before{content:"";display:inline-block;width:1px;height:60px;background:${cyan};margin-bottom:14px;vertical-align:middle}

    .h-section{position:relative;scroll-margin-top:110px}
    .h-sec{position:relative;padding:100px 0 28px;display:flex;align-items:end;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .h-sec-num{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(120px,18vw,260px);line-height:.78;color:transparent;-webkit-text-stroke:1.5px ${inkSoft};letter-spacing:-.04em;position:absolute;left:-16px;top:30px;pointer-events:none;z-index:0;user-select:none}
    .h-sec-title{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(36px,5vw,56px);text-transform:uppercase;letter-spacing:-.01em;margin:0;position:relative;z-index:1;color:${ink}}
    .h-sec-title::before{content:"";display:inline-block;width:14px;height:14px;background:${cyan};margin-right:16px;transform:translateY(-6px) rotate(45deg);box-shadow:0 0 18px ${cyan}}
    .h-sec-meta{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:${dim};position:relative;z-index:1}
    .h-card{background:${cardBg};border:1px solid ${rule};border-radius:6px;${isDark ? 'backdrop-filter:blur(8px);' : 'backdrop-filter:blur(14px);'}box-shadow:${cardShadow};transition:transform .25s,border-color .25s,box-shadow .25s;position:relative;overflow:hidden;color:${ink}}
    .h-card:hover{border-color:${cyanMid};box-shadow:0 20px 52px -24px ${cyan}66,${cardShadow}}
    .h-card::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 60% at 50% -10%,rgba(255,255,255,.14),transparent 60%);pointer-events:none;mix-blend-mode:screen;opacity:.65}
    .h-featured-list,.h-experience-list,.h-volunteer-list,.h-resume-layout{display:grid;gap:22px;margin-top:28px}
    .h-featured-card{padding:26px;background:${featuredGrad};border-color:${cyan}66}
    .h-card-sheen{position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,${cyan}1f 50%,transparent 70%);transform:translateX(-100%);pointer-events:none}
    .h-card:hover .h-card-sheen{animation:hsweep 1.1s ease-out}
    .h-card-top{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px;position:relative;z-index:2}
    .h-award{color:${cyan};padding:7px 14px;border:1px solid ${cyan};border-left:3px solid ${cyan};font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;line-height:1;display:inline-flex;align-items:center;gap:8px;transform:skewX(-10deg);box-shadow:0 0 18px ${cyanSoft},inset 0 0 12px ${cyan}1a;background:linear-gradient(180deg,${cyan}1a,transparent)}
    .h-award span{display:inline-block;transform:skewX(10deg)}
    .h-hackathon{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${dim}}
    .h-featured-body,.h-work-body,.h-volunteer-body{display:grid;grid-template-columns:minmax(280px,.42fr) minmax(0,.58fr);gap:30px;align-items:center;position:relative;z-index:2}
    .h-shot-frame{border:1px solid ${rule};background:rgba(0,0,0,.18);border-radius:5px;padding:10px;min-height:250px;display:flex;align-items:center;justify-content:center;overflow:hidden}
    .h-shot-frame img{width:100%;height:100%;object-fit:cover;border-radius:3px;box-shadow:0 18px 42px -24px rgba(0,0,0,.7)}
    .h-card h3{font-family:'Archivo Black',sans-serif;font-style:italic;text-transform:uppercase;letter-spacing:-.01em;color:${ink};margin:0}
    .h-featured-copy h3{font-size:clamp(34px,5vw,62px);line-height:.9}
    .h-tagline{font-size:18px;line-height:1.35;color:${cyan};font-weight:700;margin:12px 0 18px}
    .h-narrative{font-size:15.5px;line-height:1.7;color:${ink};opacity:.88;margin:0}
    .h-stack{display:flex;flex-wrap:wrap;gap:7px;position:relative;z-index:2}
    .h-narrative + .h-stack{margin-top:18px}
    .h-stack span{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.04em;font-weight:500;border:1px solid ${rule};padding:4px 10px;border-radius:99px;color:${dim};transition:border-color .2s,color .2s}
    .h-card:hover .h-stack span{border-color:${cyan}66;color:${ink}}
    .h-card-links{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px;position:relative;z-index:2}
    .h-link-btn{font-family:'Archivo Black',sans-serif;font-size:12px;letter-spacing:.14em;text-transform:uppercase;padding:13px 18px;border:1px solid ${rule};color:${ink};transform:skewX(-8deg);display:inline-flex;transition:transform .2s,box-shadow .2s,border-color .2s,background .2s}
    .h-link-btn.primary{background:${cyan};color:#001230;border-color:${cyan};box-shadow:0 12px 36px -16px ${cyan}}
    .h-link-btn:hover,.h-link-btn:focus-visible{transform:skewX(-8deg) translateY(-2px);border-color:${cyan};box-shadow:0 18px 48px -18px ${cyan};outline:none}
    .h-link-btn span{display:inline-block;transform:skewX(8deg)}
    .h-work-card{padding:30px}
    .h-work-card.statcan{padding:28px;background:${isDark ? `linear-gradient(180deg,${surface2},${surface})` : 'linear-gradient(180deg,rgba(255,255,255,.11),rgba(255,255,255,.04))'}}
    .h-work-card.jasmine{background:${featuredGrad};border-color:${cyan}55}
    .h-work-card.jasmine .h-work-body{grid-template-columns:minmax(460px,.56fr) minmax(0,.44fr)}
    .h-work-head{position:relative;z-index:2;margin-bottom:24px}
    .h-work-title-row{display:flex;align-items:center;gap:18px}
    .h-exp-logo{flex-shrink:0;background:none;border:none;padding:0;border-radius:8px;overflow:hidden}
    .h-exp-logo img{width:100%;height:100%;object-fit:contain;background:white;border-radius:8px;display:block}
    .h-exp-logo.large{width:clamp(132px,15vw,210px);height:clamp(82px,9vw,116px);border-radius:10px}
    .h-exp-logo.large img{border-radius:10px}
    .h-exp-logo.small{width:44px;height:44px}
    .h-work-role{font-size:27px;line-height:1.02;max-width:940px}
    .h-work-org{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:${cyan};margin-top:8px}
    .h-work-meta{display:flex;gap:16px;flex-wrap:wrap;margin-top:10px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${dim}}
    .h-current-badge{display:flex;align-items:center;gap:9px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:${cyan};margin-bottom:18px}
    .h-current-badge i{width:9px;height:9px;border-radius:50%;background:${cyan};box-shadow:0 0 12px ${cyan};animation:hpulse 1.6s infinite}
    .h-work-card.statcan .h-narrative{max-width:880px}
    .h-volunteer-card{padding:30px;background:${featuredGrad}}
    .h-volunteer-copy h3{font-size:clamp(30px,4vw,52px);line-height:.95}
    .h-img-caption{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:${cyan};margin-top:10px}

    .h-jasmine-frame{min-height:260px;background:linear-gradient(180deg,rgba(34,211,238,.08),rgba(30,64,175,.10));border:1px solid ${rule};border-radius:5px;padding:10px;overflow:hidden}
    .h-jasmine-svg{width:100%;height:auto;min-height:250px;display:block}
    .j-node rect{fill:${isDark ? 'rgba(10,18,28,.82)' : 'rgba(255,255,255,.08)'};stroke:${cyan}88;stroke-width:1.4;filter:drop-shadow(0 0 12px ${cyanSoft})}
    .j-node.primary rect{stroke:${cyan};fill:${cyan}18}
    .j-node.model rect{stroke:${ultra};fill:${ultra}28}
    .j-node-label{font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.02em;fill:${ink}}
    .j-data{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.02em;fill:${dim}}
    .j-flow{fill:none;stroke:${cyan};stroke-width:2;stroke-linecap:round;marker-end:url(#j-arrow);filter:drop-shadow(0 0 5px ${cyanSoft})}
    .h-jasmine-svg marker path{fill:${cyan}}
    .j-scan{fill:none;stroke:${cyan}33;stroke-width:1;stroke-dasharray:8 10;animation:hscan 6s ease-in-out infinite alternate}
    .j-scan.dim{stroke:${ultra}44;animation-duration:8s}

    .h-other-grid,.h-skills{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
    .h-mini-card{padding:22px;min-height:215px;display:flex;flex-direction:column;align-items:flex-start;position:relative;z-index:1}
    .h-mini-card h3{font-size:22px;line-height:1.06;margin-bottom:10px}
    .h-mini-card p{font-size:14px;line-height:1.55;color:${ink};opacity:.84;margin:0 0 16px}
    .h-mini-link{margin-top:auto;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${cyan};position:relative;z-index:2}
    .h-repo-meta{display:flex;gap:10px;align-items:center;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:${dim};margin-top:auto;margin-bottom:14px}
    .h-row-label{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:${cyan};margin-top:28px}
    .h-skills{grid-template-columns:repeat(4,1fr)}
    .h-skill-card{padding:24px}
    .h-skill-grp{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:${cyan};margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid ${rule}}
    .h-skill-chip{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.02em;border:1px solid ${rule};padding:4px 10px;margin:0 4px 6px 0;border-radius:99px;color:${ink};transition:border-color .2s;position:relative;z-index:2}
    .h-skill-card:hover .h-skill-chip{border-color:${cyan}55}

    .h-gh{margin-top:28px;padding:32px;overflow:hidden}
    .h-gh::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${cyan},transparent)}
    .h-gh-head{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${dim};position:relative;z-index:2}
    .h-gh-head strong{color:${cyan};font-weight:600}
    .h-gh-grid{display:grid;grid-template-columns:repeat(52,1fr);gap:3px;margin-top:18px;position:relative;z-index:2}
    .h-gh-col{display:grid;grid-template-rows:repeat(7,1fr);gap:3px}
    .h-gh-cell{width:100%;aspect-ratio:1;border-radius:1px;background:${isDark ? 'rgba(234,246,255,.05)' : 'rgba(255,255,255,.08)'}}
    .h-gh-cell.l1{background:${cyan}40}.h-gh-cell.l2{background:${cyan}80}.h-gh-cell.l3{background:${cyan}c0}
    .h-gh-cell.l4{background:${cyan};box-shadow:0 0 8px ${cyanSoft}}
    .h-gh-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${dim};position:relative;z-index:2}

    .h-resume-card{padding:34px;display:flex;flex-direction:column;align-items:center;gap:24px}
    .h-resume-preview{width:100%;border:1px solid ${rule};border-radius:6px;background:${cardBg};padding:12px;box-shadow:0 36px 90px -40px rgba(0,0,0,.8);transform:translateY(28px)}
    .h-resume-preview.reveal.visible{transform:translateY(0)}
    .h-resume-img{width:100%;height:auto;display:block;border-radius:8px;box-shadow:0 18px 48px -28px rgba(0,0,0,.8)}
    .h-resume-card .h-card-links{justify-content:center;margin-top:0}
    .h-contact-card{margin:140px 0 80px;background:${ctaGrad};color:${ink};padding:74px 56px;text-align:center;border:1px solid ${rule};border-radius:6px;backdrop-filter:blur(18px);box-shadow:${cardShadow}}
    .h-contact-card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,${cyan},${ultra},${cyan},transparent);box-shadow:0 0 24px ${cyan}}
    .h-contact-card h2{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(48px,8vw,112px);line-height:.92;text-transform:uppercase;margin:0;letter-spacing:-.02em}
    .h-contact-row{display:flex;justify-content:center;gap:18px;margin-top:38px;flex-wrap:wrap;position:relative;z-index:2}
    .h-foot{padding:40px 0 60px;display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${dim};border-top:1px solid ${rule};margin-top:60px;flex-wrap:wrap;gap:12px}
    .h-foot .h-np{color:${cyan}}

    @media(max-width:1100px){
      .h-wrap{padding:0 36px}
      .h-hero{padding:48px 0 96px;min-height:auto}
      .h-hero-grid{grid-template-columns:minmax(0,.6fr) minmax(220px,.4fr);gap:18px 34px}
      .h-portrait-wrap{margin-top:clamp(140px,16vw,220px)}
      .h-portrait{width:clamp(200px,28vw,280px)}
      .h-eyebrow{max-width:calc(100% - 180px);margin-bottom:24px}
      .h-name-wrap{margin-top:10px}
      .h-name,.h-name-echo,.h-name-echo2{font-size:clamp(72px,10vw,122px);line-height:.88}
      .h-sub{margin-top:22px;max-width:50ch}
      .h-blurb{font-size:19px}
      .h-sec{padding-top:74px}
      .h-sec-num{font-size:clamp(92px,15vw,160px)}
      .h-featured-body,.h-work-body,.h-volunteer-body,.h-work-card.jasmine .h-work-body{grid-template-columns:1fr}
      .h-jasmine-frame{min-height:280px}
    }
    @media(max-width:880px){
      .h-eyebrow,.h-name-wrap,.h-sub{max-width:none}
      .h-name,.h-name-echo,.h-name-echo2{font-size:clamp(60px,15vw,102px)}
      .h-other-grid{grid-template-columns:1fr 1fr}
      .h-skills{grid-template-columns:repeat(2,1fr)}
    }
    @media(max-width:760px){
      .h-root{overflow-x:hidden}
      .h-wrap{padding:0 18px}
      .h-top{flex-direction:column;align-items:flex-start;gap:14px;padding-top:18px}
      .h-top-right{gap:10px 14px}
      .h-top a,.h-mode-btn{font-size:10px;letter-spacing:.12em}
      .h-mode-btn{min-height:40px;padding:0 12px}
      .h-hamburger{top:14px;right:14px}
      .h-drawer{width:min(360px,calc(100vw - 16px));padding:26px 22px}
      .h-hero{padding-top:36px}
      .h-orb{top:18px;right:12px;width:clamp(96px,22vw,140px);height:clamp(96px,22vw,140px);opacity:.5}
      .h-vlabel{display:none}
      .h-hero-grid{grid-template-columns:1fr;grid-template-areas:"name" "portrait" "blurb" "status";gap:22px;align-items:start}
      .h-portrait-wrap{justify-self:center;margin-top:0}
      .h-portrait{width:clamp(190px,62vw,260px)}
      .h-status{justify-self:start;width:100%;padding-bottom:0}
      .h-name{font-size:clamp(52px,18vw,98px);line-height:.9;letter-spacing:-.01em}
      .h-name-echo,.h-name-echo2{display:none}
      .h-sub{margin-top:0}
      .h-blurb{font-size:16.5px}
      .h-status{font-size:11.5px}
      .h-sec{gap:8px 12px;margin-top:76px}
      .h-sec-title{font-size:clamp(34px,12vw,58px)}
      .h-featured-card,.h-work-card,.h-volunteer-card,.h-resume-card,.h-gh{padding:20px}
      .h-card-top{align-items:flex-start;flex-direction:column}
      .h-shot-frame{min-height:210px}
      .h-featured-copy h3,.h-volunteer-copy h3{font-size:clamp(30px,10vw,48px)}
      .h-work-role{font-size:23px}
      .h-work-title-row{align-items:flex-start}
      .h-exp-logo.large{width:min(58vw,190px);height:96px}
      .h-exp-logo.small{width:40px;height:40px}
      .h-card-links,.h-contact-row{flex-direction:column;gap:12px}
      .h-link-btn{justify-content:center;text-align:center}
      .h-other-grid,.h-skills{grid-template-columns:1fr}
      .h-gh{overflow-x:auto}
      .h-gh-grid,.h-gh-foot{min-width:560px}
      .h-contact-card{margin:84px 0 52px;padding:44px 22px}
      .h-foot{font-size:10px;letter-spacing:.1em}
    }
    @media(max-width:420px){
      .h-wrap{padding:0 14px}
      .h-top-right{width:100%;justify-content:space-between}
      .h-name{font-size:clamp(46px,17vw,72px);line-height:.94}
      .h-portrait{width:min(74vw,230px)}
      .h-orb{display:none}
      .h-drawer{width:calc(100vw - 8px);padding:24px 20px}
      .h-arcana{font-size:12px}
      .h-card{border-radius:8px}
      .h-sec-title{font-size:clamp(30px,11vw,48px)}
      .h-jasmine-frame{min-height:230px;padding:0}
      .j-node-label{font-size:12px}
      .j-data{font-size:10px}
    }
  `;

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
    <div className="h-root">
      <style>{css}</style>
      {!isDark && <div className="h-hero-bg" aria-hidden="true" />}
      {!isDark && <div className="h-godray" aria-hidden="true" />}
      {!isDark && <div className="h-caustic" aria-hidden="true" />}
      {isDark && <div className="h-grain" aria-hidden="true" />}
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
            <a href={ME.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span></a>
            <a href={`mailto:${ME.email}`}><span>Email</span></a>
            <a href={ME.resumeUrl}><span>Résumé</span><span style={{ opacity: .6 }}>↗</span></a>
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
          <CelestialOrb mode={isDark ? "dark" : "light"} accent={cyan} />

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
                  {statcan.logo && <ExperienceLogo src={statcan.logo} alt={statcan.org} variant="large" />}
                  <div>
                    <h3 className="h-work-role">{statcan.role}</h3>
                    <div className="h-work-org">{statcan.org} · {statcan.context}</div>
                    <div className="h-work-meta"><span>{statcan.period}</span><span>{statcan.where}</span></div>
                  </div>
                </div>
              </div>
              <p className="h-narrative">{statcan.description}</p>
              <StackTags items={statcan.stack} />
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
          <Reveal as="section" className="h-section">
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
