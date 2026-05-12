import React from 'react';
const { ME, PROJECTS, SKILLS, CONTRIB } = window;
// portfolio-heist.jsx — "Midnight ↔ Daylight" direction.
// Two-accent cool-blue system (luminous cyan + deep ultramarine) with
// atmospheric motion (caustic shimmer + drifting particles).
// Light/dark mode via toggle + prefers-color-scheme on first load.
// Channels the *mood* of cool-blue stylized JRPG menu design — no copied UI.

const { useState: useStateH, useEffect: useEffectH, useMemo: useMemoH } = React;

function HeistTheme({ accent, showGithub, showNow }) {
  const [mode, setMode] = useStateH(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem('midnight-mode');
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });
  useEffectH(() => { window.localStorage.setItem('midnight-mode', mode); }, [mode]);
  const isDark = mode === 'dark';

  // Two-accent system. `accent` (from tweaks) is the primary cyan/blue;
  // ultra is a deep ultramarine companion for emphasis blocks.
  const cyan  = accent;          // luminous highlight
  const ultra = isDark ? "#1E40AF" : "#1D4ED8"; // deep blue emphasis
  const cyanSoft = cyan + "33";
  const cyanMid  = cyan + "AA";
  const ultraSoft = ultra + "33";

  // Surface palette — DARK = moon (deep navy → near-black, starfield),
  // LIGHT = ocean (pure white with a slim water band at top of hero).
  const bgTop    = isDark ? "#0A1A33" : "#FFFFFF";
  const bgBot    = isDark ? "#020617" : "#FFFFFF";
  const ink      = isDark ? "#EAF6FF" : "#06122B";
  const inkSoft  = isDark ? "rgba(234,246,255,.22)" : "rgba(6,18,43,.14)";
  const dim      = isDark ? "rgba(234,246,255,.55)" : "rgba(6,18,43,.58)";
  const rule     = isDark ? "rgba(234,246,255,.10)" : "rgba(6,18,43,.10)";
  const surface  = isDark ? "rgba(8,18,38,.72)" : "#FFFFFF";
  const surface2 = isDark ? "rgba(14,28,56,.85)" : "#FFFFFF";
  // LIGHT mode: ocean gradient on the hero, deep ocean solid for the rest.
  // White becomes the accent (text, cards, dividers). Dark mode untouched.
  const oceanDeep  = "#0B2A5B";
  const oceanMid   = "#1E3A8A";
  const oceanSky   = "#7FD3F4";
  const onCardInk  = isDark ? ink : "#F1F8FF";
  const onCardDim  = isDark ? dim : "rgba(241,248,255,.66)";
  const onCardRule = isDark ? rule : "rgba(255,255,255,.18)";
  // Deep underwater — you're submerged, looking up at distant light filtering down.
  // Background stays in the deep range; light comes from rays + caustics, not the bg.
  const abyss = "#020617";
  const heroGrad = isDark
      ? `transparent`
      : `linear-gradient(180deg,#0E2A52 0%,${oceanDeep} 18%,#082046 45%,#04122E 75%,${abyss} 100%)`;
  // Cards become glassy translucent over the ocean.
  const cardBg   = isDark
      ? `linear-gradient(180deg,${surface2},${surface})`
      : `linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.04))`;
  const cardShadow = isDark
      ? `0 1px 0 ${rule} inset`
      : `0 1px 0 rgba(255,255,255,.18) inset, 0 18px 40px -16px rgba(0,8,28,.45)`;
  const featuredGrad = isDark
      ? `linear-gradient(160deg,${cyan}24,${ultra}33 50%,${surface2})`
      : `linear-gradient(180deg,rgba(255,255,255,.18),rgba(127,211,244,.16) 50%,rgba(255,255,255,.06))`;
  const ctaGrad  = isDark
      ? `linear-gradient(180deg,${ultra}33,${surface2})`
      : `linear-gradient(180deg,${oceanMid},${oceanDeep})`;
  const onAccent = "#FFFFFF";

  // Particle field:
  //   DARK  → twinkling stars across the page
  //   LIGHT → local bubble pops, which are much cheaper than viewport-spanning travel
  const particles = useMemoH(() => {
    if (isDark) {
      return Array.from({length: 60}, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: .8 + Math.random() * 2.2,
        delay: -Math.random() * 6,
        dur: 3 + Math.random() * 5,
        op: .35 + Math.random() * .55,
      }));
    }
    return Array.from({length: 28}, () => ({
      x: Math.random() * 100,
      y: 8 + Math.random() * 84,
      size: 2 + Math.random() * 8,
      delay: -Math.random() * 8,
      dur: 5 + Math.random() * 5,
      op: .18 + Math.random() * .32,
    }));
  }, [mode]);

  const css = `
    @keyframes hpulse{0%,100%{opacity:1}50%{opacity:.35}}
    @keyframes hdrift{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(0,-40px,0)}}
    @keyframes hsweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
    @keyframes hshimmer{0%{background-position:0% 0%, 0% 0%, 0% 0%}100%{background-position:120% 60%, -100% 40%, 80% -80%}}
    @keyframes hcaustic{0%,100%{opacity:.35;transform:translate3d(0,0,0) scale(1)}50%{opacity:.7;transform:translate3d(-2%,1%,0) scale(1.04)}}
    @keyframes hpop{0%,100%{transform:scale(.65);opacity:0}18%{opacity:var(--op)}55%{transform:scale(1.08);opacity:var(--op)}78%{opacity:.08}100%{transform:scale(1.35);opacity:0}}
    @keyframes hgodray{0%,100%{opacity:.45;transform:translate3d(0,0,0) rotate(18deg)}50%{opacity:.75;transform:translate3d(24px,12px,0) rotate(20deg)}}
    @keyframes htwinkle{0%,100%{opacity:var(--op);transform:scale(1)}50%{opacity:.15;transform:scale(.6)}}
    @keyframes hwave{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}

    .h-root{background:${isDark?`linear-gradient(180deg,${bgTop} 0%,${bgBot} 100%)`:abyss};color:${isDark?ink:'#F1F8FF'};font-family:'Archivo',ui-sans-serif,system-ui,sans-serif;min-height:100vh;position:relative;overflow:hidden;transition:color .35s ease}
    .h-root a{text-decoration:none;color:inherit}
    /* Light: full-page dive gradient — surface to abyss */
    ${isDark?'':`.h-hero-bg{position:absolute;top:0;left:0;right:0;bottom:0;background:${heroGrad};z-index:0;pointer-events:none}
    /* God-ray — bright diagonal shafts piercing from above (the light you see from below) */
    .h-godray{position:absolute;top:-15%;left:-20%;width:120%;height:160vh;pointer-events:none;z-index:1;background:linear-gradient(106deg,transparent 0%,transparent 18%,rgba(255,255,255,.10) 24%,rgba(190,235,255,.22) 30%,rgba(255,255,255,.32) 34%,rgba(190,235,255,.22) 38%,rgba(255,255,255,.08) 44%,transparent 52%,transparent 60%,rgba(180,230,255,.08) 66%,rgba(220,245,255,.20) 72%,rgba(180,230,255,.10) 78%,transparent 88%);mix-blend-mode:screen;filter:blur(14px);animation:hgodray 16s ease-in-out infinite;transform-origin:0 0}
    /* Caustic ripple — brighter, more visible from down here */
    .h-caustic{position:fixed;inset:0;pointer-events:none;z-index:1;background:radial-gradient(70% 50% at 30% 5%,rgba(255,255,255,.28),transparent 60%),radial-gradient(60% 50% at 80% 15%,rgba(150,220,255,.22),transparent 70%),radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,.10),transparent 75%);background-size:140% 140%,120% 120%,160% 160%;mix-blend-mode:screen;animation:hcaustic 18s ease-in-out infinite;opacity:.85}
    `}

    /* Ambient atmosphere — DARK only: nebula shimmer + moon glow. LIGHT stays clean white. */
    ${isDark ? `
    .h-root::before{
      content:"";position:fixed;inset:-20%;pointer-events:none;z-index:0;
      background:
        radial-gradient(60% 50% at 70% 10%, ${cyan}55, transparent 60%),
        radial-gradient(40% 40% at 20% 80%, ${ultra}44, transparent 70%),
        radial-gradient(50% 40% at 50% 50%, ${cyan}22, transparent 70%);
      background-size: 180% 180%, 160% 160%, 200% 200%;
      animation: hshimmer 28s ease-in-out infinite alternate;
      mix-blend-mode: screen;
      opacity: .9;
    }
    /* The Moon — a soft glowing disc, top-right of hero */
    .h-moon{position:absolute;top:80px;right:60px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle at 35% 35%,#F4FBFF 0%,#D7EBFF 40%,${cyan}AA 70%,transparent 75%);box-shadow:0 0 80px ${cyan}66,0 0 160px ${cyan}33;pointer-events:none;z-index:1;opacity:.85;mix-blend-mode:screen}
    @media(max-width:760px){.h-moon{width:100px;height:100px;top:40px;right:20px}}
    ` : `
    /* The Sun — luminous white disc with the faintest warm core, top-right of light-mode hero */
    .h-sun{position:absolute;top:80px;right:60px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle at 40% 40%,#FFFFFF 0%,#FFFDF4 28%,#FFF6D6 50%,#FFEDB6 64%,rgba(255,232,170,.35) 74%,transparent 80%);box-shadow:0 0 60px rgba(255,255,255,.7),0 0 140px rgba(255,250,220,.45),0 0 220px rgba(255,236,170,.25);pointer-events:none;z-index:1;opacity:1;mix-blend-mode:screen}
    @media(max-width:760px){.h-sun{width:100px;height:100px;top:40px;right:20px}}
    /* Ocean: slim cyan→ultramarine band at the very top of the hero (water surface) */
    .h-water{position:absolute;top:0;left:0;right:0;height:220px;pointer-events:none;z-index:0;background:linear-gradient(180deg,${cyan} 0%,${cyan}AA 12%,${ultra}55 38%,${ultra}1A 70%,transparent 100%);overflow:hidden;mask-image:linear-gradient(180deg,#000 60%,transparent 100%)}
    /* Animated wavy caustic line at the bottom edge of the band */
    .h-water::after{content:"";position:absolute;left:0;bottom:0;width:200%;height:60px;background:repeating-linear-gradient(90deg,transparent 0,transparent 40px,${cyan}66 40px,${cyan}66 44px,transparent 44px,transparent 80px);mask-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 60' preserveAspectRatio='none'><path d='M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30 L1200,60 L0,60 Z' fill='black'/></svg>");mask-size:600px 60px;mask-repeat:repeat-x;animation:hwave 16s linear infinite;opacity:.6}
    `}
    ${isDark ? `
    .h-root::after{
      content:"";position:fixed;inset:0;pointer-events:none;z-index:1;
      background:radial-gradient(${inkSoft} 1px,transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(80% 70% at 50% 30%,#000 30%,transparent 80%);
      opacity:.4;
    }` : ``}

    /* Dot grid + caustic ripple */
    .h-root::after{
      content:"";position:fixed;inset:0;pointer-events:none;z-index:1;
      background:
        radial-gradient(${inkSoft} 1px,transparent 1px),
        radial-gradient(120% 80% at 50% 20%, transparent 40%, ${isDark?ultra:cyan}22 70%, transparent 100%);
      background-size: 22px 22px, 100% 100%;
      mask-image: radial-gradient(80% 70% at 50% 30%,#000 30%,transparent 80%);
      animation: hcaustic 14s ease-in-out infinite;
    }

    .h-grain{position:fixed;inset:0;pointer-events:none;z-index:2;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 ${isDark?1:0}  0 0 0 0 ${isDark?1:0}  0 0 0 0 ${isDark?1:0}  0 0 0 .22 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");mix-blend-mode:${isDark?'overlay':'multiply'};opacity:${isDark?.4:.0}}

    /* Particles: stars (dark) or local bubble pops (light) */
    .h-particles{position:fixed;inset:0;pointer-events:none;z-index:3;overflow:hidden}
    .h-particles span{position:absolute;border-radius:50%;will-change:transform,opacity;${isDark?`background:#EAF6FF;box-shadow:0 0 6px #FFFFFF99;`:`background:radial-gradient(circle at 30% 30%,rgba(255,255,255,.9),rgba(180,230,255,.5) 60%,rgba(127,211,244,0));box-shadow:inset 0 0 4px rgba(255,255,255,.55),0 0 8px rgba(255,255,255,.18);`}animation:${isDark?'htwinkle':'hpop'} var(--dur) ${isDark?'ease-in-out':'ease-in-out'} infinite;animation-delay:var(--delay)}

    .h-wrap{position:relative;z-index:3;max-width:1440px;margin:0 auto;padding:0 56px}
    @media(max-width:760px){.h-wrap{padding:0 22px}}

    /* Top bar */
    .h-top{display:flex;justify-content:space-between;align-items:center;padding:28px 0 0;font-family:'Archivo Black',sans-serif;letter-spacing:.04em;text-transform:uppercase;font-size:11px;color:${isDark?dim:'rgba(241,248,255,.7)'};gap:16px;flex-wrap:wrap}
    .h-top .dot{display:inline-block;width:8px;height:8px;background:${cyan};border-radius:50%;margin-right:10px;vertical-align:1px;animation:hpulse 1.6s infinite;box-shadow:0 0 12px ${cyan}}
    .h-top-right{display:flex;align-items:center;gap:22px;flex-wrap:wrap}
    .h-top a{color:${isDark?ink:'#F1F8FF'};position:relative;transition:color .2s;display:inline-flex;align-items:center;gap:7px}
    .h-top a svg{width:13px;height:13px;flex-shrink:0;opacity:.85;transition:opacity .2s}
    .h-top a:hover svg{opacity:1}
    .h-top a:hover{color:${cyan}}
    .h-mode-btn{display:inline-flex;align-items:center;gap:8px;background:${isDark?surface:'rgba(255,255,255,.10)'};backdrop-filter:blur(8px);border:1px solid ${isDark?rule:'rgba(255,255,255,.28)'};color:${isDark?ink:'#F1F8FF'};font-family:'Archivo Black',sans-serif;font-size:10px;letter-spacing:.18em;text-transform:uppercase;padding:8px 14px;border-radius:99px;cursor:pointer;transition:all .25s;line-height:1}
    .h-mode-btn:hover{border-color:${cyan};color:${cyan};box-shadow:0 0 24px -6px ${cyanMid}}
    .h-mode-btn svg{width:14px;height:14px;display:block}

    /* Hero — stays white in light mode so the name reads cleanly */
    .h-hero{padding:80px 0 140px;position:relative}
    .h-eyebrow{font-family:'Archivo Black',sans-serif;font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:${cyan};display:inline-flex;align-items:center;gap:14px;margin-bottom:32px;flex-wrap:wrap}
    .h-eyebrow::before{content:"";display:block;width:36px;height:1px;background:${cyan}}
    .h-arcana{font-family:'Instrument Serif',serif;font-style:italic;font-size:13px;letter-spacing:.04em;text-transform:none;color:${isDark?dim:onCardDim}}
    .h-arcana b{color:${cyan};font-style:normal;font-weight:400;font-family:'Archivo Black',sans-serif;letter-spacing:.18em;text-transform:uppercase;font-size:11px;margin-right:6px}

    .h-name-wrap{position:relative;display:block;margin:24px 0 0}
    .h-name{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(64px,14vw,224px);line-height:.84;letter-spacing:-.028em;text-transform:uppercase;margin:0;color:${isDark?ink:'#FFFFFF'};position:relative;z-index:2}
    .h-name span.c{color:${cyan};text-shadow:0 0 40px ${cyanSoft},0 0 80px ${cyanSoft},${isDark?'none':'0 2px 24px rgba(0,8,28,.5)'}}
    .h-name span.u{color:${isDark?ultra:'#FFFFFF'};text-shadow:${isDark?`0 0 30px ${ultraSoft}`:'0 0 40px rgba(255,255,255,.45)'}}
    .h-name em{font-style:italic;font-family:'Instrument Serif',serif;text-transform:none;font-weight:400;letter-spacing:-.01em;color:${isDark?ink:'#FFFFFF'}}
    .h-name-echo{position:absolute;inset:0;font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(64px,14vw,224px);line-height:.84;letter-spacing:-.028em;text-transform:uppercase;color:transparent;-webkit-text-stroke:1px ${cyan}55;pointer-events:none;transform:translate(10px,10px);user-select:none;z-index:1}
    .h-name-echo2{position:absolute;inset:0;font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(64px,14vw,224px);line-height:.84;letter-spacing:-.028em;text-transform:uppercase;color:transparent;-webkit-text-stroke:1px ${ultra}44;pointer-events:none;transform:translate(-8px,-8px);user-select:none;z-index:0}

    .h-sub{margin-top:64px;display:grid;grid-template-columns:1.4fr 1fr;gap:64px;align-items:end;position:relative}
    @media(max-width:880px){.h-sub{grid-template-columns:1fr;gap:32px}}
    .h-blurb{font-size:22px;line-height:1.55;max-width:36ch;font-weight:500;color:${isDark?ink:'#FFFFFF'};text-shadow:${isDark?'none':'0 1px 16px rgba(0,8,28,.6),0 1px 2px rgba(0,8,28,.45)'}}
    .h-blurb b{background:${cyan};color:#001230;padding:2px 12px;font-weight:700;font-family:'Archivo Black',sans-serif;letter-spacing:.02em;display:inline-block;transform:skewX(-8deg);box-shadow:0 0 24px ${cyanSoft},0 6px 18px -10px rgba(0,8,28,.45)}:0 8px 28px -10px ${ultra}AA}
    .h-blurb em{font-family:'Instrument Serif',serif;font-style:italic;color:${cyan}}
    .h-meta{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.04em;display:flex;flex-direction:column;gap:10px;color:${isDark?dim:'rgba(241,248,255,.7)'};background:${isDark?surface:'rgba(255,255,255,.08)'};backdrop-filter:blur(10px);padding:20px 22px;border:1px solid ${isDark?rule:'rgba(255,255,255,.16)'};border-radius:4px}
    .h-meta div{display:flex;justify-content:space-between;border-bottom:1px solid ${isDark?rule:'rgba(255,255,255,.14)'};padding-bottom:8px;text-transform:uppercase;letter-spacing:.1em}
    .h-meta div:last-child{border-bottom:0;padding-bottom:0}
    .h-meta div b{font-family:'Archivo Black',sans-serif;color:${isDark?ink:'#FFFFFF'};letter-spacing:.04em}
    .h-meta div b::before{content:"› ";color:${cyan}}

    /* Portrait — straight, glass-card framed to match the rest of the page */
    .h-portrait{position:absolute;top:280px;right:40px;width:260px;height:340px;z-index:4;background:${cardBg};border:1px solid ${isDark?rule:'rgba(255,255,255,.18)'};border-radius:6px;${isDark?'backdrop-filter:blur(8px);':''}box-shadow:${cardShadow};overflow:hidden;padding:10px;transition:transform .35s ease,box-shadow .35s ease}
    .h-portrait:hover{transform:translateY(-3px);box-shadow:${isDark?`0 30px 70px -20px rgba(0,0,0,.7),0 0 32px ${cyanSoft}`:`0 30px 70px -20px rgba(0,8,28,.6),0 0 26px ${cyanSoft}`}}
    .h-portrait-img{width:100%;height:100%;background:#E6F2FA;border-radius:3px;overflow:hidden;position:relative}
    .h-portrait img{width:100%;height:100%;object-fit:cover;object-position:center 22%;display:block;mix-blend-mode:multiply;filter:${isDark?'brightness(1.45) contrast(1.02) saturate(.95)':'brightness(1.12) contrast(.98)'}}
    @media(max-width:980px){.h-portrait{position:relative;top:auto;right:auto;width:200px;height:260px;margin:0 0 24px auto}}

    .h-vlabel{position:absolute;right:-20px;top:60px;writing-mode:vertical-rl;transform:rotate(180deg);font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.36em;text-transform:uppercasese;color:${isDark?dim:onCardDim}}
    .h-vlabel::before{content:"";display:inline-block;width:1px;height:60px;background:${cyan};margin-bottom:14px;vertical-align:middle}
    @media(max-width:880px){.h-vlabel{display:none}}

    /* Section header */
    .h-sec{position:relative;padding:100px 0 28px;display:flex;align-items:end;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .h-sec-num{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(120px,18vw,260px);line-height:.78;color:transparent;-webkit-text-stroke:1.5px ${isDark?inkSoft:'rgba(255,255,255,.18)'};letter-spacing:-.04em;position:absolute;left:-16px;top:30px;pointer-events:none;z-index:0;user-select:none}
    .h-sec-title{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(36px,5vw,56px);text-transform:uppercase;letter-spacing:-.01em;margin:0;position:relative;z-index:1;color:${isDark?ink:'#FFFFFF'}}
    .h-sec-title::before{content:"";display:inline-block;width:14px;height:14px;background:${cyan};margin-right:16px;transform:translateY(-6px) rotate(45deg);box-shadow:0 0 18px ${cyan}}
    .h-sec-meta{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:${isDark?dim:'rgba(241,248,255,.7)'};position:relative;z-index:1}
    .h-sec-meta b{color:${cyan}}

    /* Cards: ocean gradient in light mode (sky→deep), glassy in dark.
       Light-mode cards carry their own ink color so text reads on the deep blue. */
    .h-card{background:${cardBg};border:1px solid ${isDark?rule:'rgba(255,255,255,.10)'};border-radius:6px;${isDark?'backdrop-filter:blur(8px);':''}box-shadow:${cardShadow};transition:transform .25s,border-color .25s,box-shadow .25s;${isDark?'':`color:${onCardInk};`}position:relative;overflow:hidden}
    ${isDark?'':`
    /* subtle caustic shimmer inside light cards */
    .h-card::after{content:"";position:absolute;inset:0;background:radial-gradient(120% 60% at 50% -10%,#FFFFFF55,transparent 60%);pointer-events:none;mix-blend-mode:screen;opacity:.7}
    .h-card:hover{transform:translateY(-3px);box-shadow:0 1px 2px rgba(6,18,43,.10),0 28px 56px -20px rgba(11,42,91,.55);border-color:${cyan}66}
    .h-card a{color:${onCardInk}}
    `}

    .h-now{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:24px;position:relative;z-index:1}
    @media(max-width:880px){.h-now{grid-template-columns:1fr}}
    .h-now-card{padding:28px;position:relative;overflow:hidden;transition:transform .25s,border-color .25s,box-shadow .25s;min-height:160px;color:${isDark?ink:onCardInk}}
    .h-now-card:hover{transform:translateY(-3px);border-color:${cyanMid};box-shadow:0 18px 48px -22px ${cyanMid}}
    .h-now-card::before{content:attr(data-i);position:absolute;top:-10px;right:8px;font-family:'Archivo Black',sans-serif;font-size:96px;font-style:italic;color:${cyan};opacity:${isDark?.6:.16};text-shadow:0 0 28px ${cyanSoft}}
    .h-now-card::after{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,${cyan},${ultra});box-shadow:0 0 20px ${cyan}}
    .h-now-lbl{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:${cyan};margin-bottom:14px}
    .h-now-txt{font-size:16px;line-height:1.5;font-weight:400;position:relative;z-index:1;max-width:30ch}

    /* Projects */
    .h-projects{display:grid;grid-template-columns:repeat(12,1fr);gap:14px;margin-top:28px}
    .h-proj{padding:26px 26px 56px;position:relative;cursor:pointer;transition:transform .25s ease,border-color .25s ease,box-shadow .25s ease;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:300px;color:${isDark?ink:onCardInk};z-index:1}
    .h-proj:hover{transform:translate(-3px,-3px);border-color:${cyanMid};box-shadow:0 16px 40px -16px ${cyan}66, 6px 6px 0 -2px ${ultra}55}
    .h-proj.featured{background:${featuredGrad};border-color:${cyan}66}
    .h-proj .h-proj-num{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:120px;line-height:.78;color:${cyan};position:absolute;right:14px;bottom:-18px;opacity:${isDark?.18:.12};pointer-events:none;text-shadow:0 0 30px ${cyan}}
    .h-proj.featured .h-proj-num{opacity:${isDark?.36:.26};color:${ultra}}
    .h-proj::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(110deg,transparent 30%,${cyan}22 50%,transparent 70%);transform:translateX(-100%);pointer-events:none;transition:none}
    .h-proj:hover::before{animation:hsweep 1.1s ease-out}

    .h-proj-tag{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:${isDark?dim:onCardDim};padding-right:200px;min-height:18px}
    .h-proj-name{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:34px;line-height:.98;text-transform:uppercase;margin:20px 0 10px;letter-spacing:-.01em;position:relative;z-index:2;color:${isDark?ink:onCardInk}}
    .h-proj-line{font-size:14.5px;line-height:1.5;font-weight:400;position:relative;z-index:2;margin-bottom:16px;color:${isDark?ink:onCardInk};opacity:.88;max-width:42ch}
    .h-proj-stack{display:flex;flex-wrap:wrap;gap:6px;position:relative;z-index:2}
    .h-proj-stack span{font-family:'JetBrains Mono',monospace;font-size:10.5px;letter-spacing:.04em;font-weight:500;border:1px solid ${isDark?rule:onCardRule};padding:3px 9px;border-radius:99px;color:${isDark?dim:onCardDim};transition:border-color .2s,color .2s}
    .h-proj:hover .h-proj-stack span{border-color:${cyan}66;color:${isDark?ink:onCardInk}}
    .h-proj-award{position:absolute;top:14px;right:14px;background:transparent;color:${cyan};padding:7px 14px;border:1px solid ${cyan};border-left:3px solid ${cyan};font-family:'JetBrains Mono',monospace;font-size:9.5px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;line-height:1;display:inline-flex;align-items:center;gap:8px;z-index:3;transform:skewX(-10deg);box-shadow:0 0 18px ${cyanSoft},inset 0 0 12px ${cyan}1a;backdrop-filter:blur(6px);background:linear-gradient(180deg,${cyan}1a,transparent)}
    .h-proj-award>*{transform:skewX(10deg);display:inline-flex;align-items:center;gap:7px}
    .h-proj-award svg{width:11px;height:11px;flex-shrink:0;filter:drop-shadow(0 0 4px ${cyan})}
    .h-proj-live{position:absolute;bottom:22px;left:24px;font-family:'JetBrains Mono',monospace;font-size:9.5px;letter-spacing:.22em;text-transform:uppercase;color:${cyan};display:inline-flex;align-items:center;gap:8px;z-index:3}
    .h-proj-live::before{content:'';width:7px;height:7px;border-radius:50%;background:${cyan};box-shadow:0 0 10px ${cyan};animation:hlivepulse 1.6s ease-in-out infinite}
    @keyframes hlivepulse{0%,100%{opacity:.55;transform:scale(1)}50%{opacity:1;transform:scale(1.35)}}
    .h-proj-gh{position:absolute;bottom:16px;right:16px;width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:${isDark?'rgba(234,246,255,.04)':'rgba(255,255,255,.10)'};border:1px solid ${isDark?rule:'rgba(255,255,255,.20)'};color:${isDark?ink:'#F1F8FF'};backdrop-filter:blur(8px);transition:all .2s;z-index:4;cursor:pointer;text-decoration:none}
    .h-proj-gh:hover{background:${cyan};color:#001230;border-color:${cyan};box-shadow:0 0 22px ${cyanSoft};transform:scale(1.08)}
    .h-proj-gh svg{width:17px;height:17px}
    .h-proj-arrow{position:absolute;bottom:18px;right:22px;font-family:'Archivo Black',sans-serif;font-size:22px;color:${cyan};transition:transform .2s;z-index:2}
    .h-proj:hover .h-proj-arrow{transform:translate(4px,-4px)}

    .span6{grid-column:span 6}.span4{grid-column:span 4}.span8{grid-column:span 8}.span12{grid-column:span 12}
    @media(max-width:980px){.h-projects>*{grid-column:span 12 !important}}

    /* Experience */
    .h-exp{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:28px}
    @media(max-width:880px){.h-exp{grid-template-columns:1fr}}
    .h-exp-card{padding:32px;position:relative;transition:border-color .25s,transform .25s;color:${isDark?ink:onCardInk}}
    .h-exp-card:hover{border-color:${cyanMid};transform:translateY(-2px)}
    .h-exp-card::after{content:"";position:absolute;top:0;right:0;width:0;height:0;border-top:36px solid ${cyan};border-left:36px solid transparent;filter:drop-shadow(0 0 12px ${cyanSoft})}
    .h-exp-role{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:22px;text-transform:uppercase;margin:0 0 4px;letter-spacing:-.01em;color:${isDark?ink:onCardInk};max-width:80%}
    .h-exp-org{font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:${cyan};margin-bottom:18px}
    .h-exp-meta{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${isDark?dim:onCardDim};display:flex;justify-content:space-between;border-bottom:1px solid ${isDark?rule:onCardRule};padding-bottom:10px;margin-bottom:16px;gap:12px;flex-wrap:wrap}
    .h-exp-card ul{margin:0;padding-left:18px;font-size:14px;line-height:1.6;color:${isDark?ink:onCardInk};position:relative;z-index:2}
    .h-exp-card li{margin-bottom:8px;opacity:.88}
    .h-exp-card li::marker{color:${cyan}}
    .h-exp-rank{position:absolute;bottom:18px;right:20px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:${isDark?dim:onCardDim};display:flex;align-items:center;gap:8px}
    .h-exp-rank b{color:${cyan};font-family:'Archivo Black',sans-serif;letter-spacing:.1em;font-size:13px}
    .h-exp-rank .stars{color:${cyan};letter-spacing:.1em;font-size:11px}

    /* Skills */
    .h-skills{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:28px}
    @media(max-width:880px){.h-skills{grid-template-columns:repeat(2,1fr)}}
    .h-skill-card{padding:24px;position:relative;overflow:hidden;transition:border-color .25s;color:${isDark?ink:onCardInk}}
    .h-skill-card:hover{border-color:${cyanMid}}
    .h-skill-grp{font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.28em;text-transform:uppercase;color:${cyan};margin-bottom:16px;padding-bottom:10px;border-bottom:1px solid ${rule}}
    .h-skill-chip{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.02em;border:1px solid ${isDark?rule:onCardRule};padding:4px 10px;margin:0 4px 6px 0;border-radius:99px;color:${isDark?ink:onCardInk};transition:border-color .2s,color .2s;position:relative;z-index:2}
    .h-skill-card:hover .h-skill-chip{border-color:${cyan}55}

    /* Github contrib */
    .h-gh{margin-top:28px;padding:32px;position:relative;overflow:hidden;color:${isDark?ink:onCardInk}}
    .h-gh::before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${cyan},transparent)}
    .h-gh-grid{display:grid;grid-template-columns:repeat(52,1fr);gap:3px;margin-top:18px}
    .h-gh-col{display:grid;grid-template-rows:repeat(7,1fr);gap:3px}
    .h-gh-cell{width:100%;aspect-ratio:1;border-radius:1px;background:${isDark?'rgba(234,246,255,.05)':'rgba(6,18,43,.07)'}}
    .h-gh-cell.l1{background:${cyan}40}.h-gh-cell.l2{background:${cyan}80}.h-gh-cell.l3{background:${cyan}c0}
    .h-gh-cell.l4{background:${cyan};box-shadow:0 0 8px ${cyanSoft}}
    .h-gh-foot{display:flex;justify-content:space-between;align-items:center;margin-top:18px;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${isDark?dim:onCardDim}}

    /* Contact */
    .h-cta-wrap{margin:140px 0 80px;${isDark?'':`padding:48px;background:linear-gradient(180deg,rgba(58,122,200,.32),rgba(11,42,91,.45));border-radius:10px;border:1px solid rgba(127,211,244,.18);box-shadow:0 30px 80px -30px rgba(0,8,28,.6)`}}
    .h-cta{${isDark?'margin:140px 0 80px;':''}background:${isDark?ctaGrad:`linear-gradient(180deg,rgba(255,255,255,.18),rgba(255,255,255,.06))`};color:${isDark?ink:'#FFFFFF'};padding:80px 56px;position:relative;overflow:hidden;border:1px solid ${isDark?rule:'rgba(255,255,255,.28)'};border-radius:6px;backdrop-filter:blur(18px);box-shadow:${isDark?'none':'0 1px 0 rgba(255,255,255,.35) inset,0 28px 60px -24px rgba(0,8,28,.5)'}}
    /* SVG wave shape at the bottom of the CTA — white waves bleeding into the page */
    ${isDark?'':`.h-cta>svg.h-cta-wave{position:absolute;left:0;right:0;bottom:-1px;width:100%;height:60px;display:block;z-index:1}
    .h-cta>*:not(svg){position:relative;z-index:2}`}
    .h-cta::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,${cyan},${ultra},${cyan},transparent);box-shadow:0 0 24px ${cyan}}
    .h-cta::after{content:"";position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${cyan},transparent)}
    .h-cta h2{font-family:'Archivo Black',sans-serif;font-style:italic;font-size:clamp(48px,9vw,128px);line-height:.92;text-transform:uppercase;margin:0;letter-spacing:-.02em}
    .h-cta h2 em{font-family:'Instrument Serif',serif;font-style:italic;text-transform:none;font-weight:400;color:${cyan};text-shadow:0 0 40px ${cyanSoft}}
    .h-cta p{color:${isDark?dim:'rgba(255,255,255,.85)'};max-width:48ch;margin:24px 0 0;font-size:16px;line-height:1.55;text-shadow:${isDark?'none':'0 1px 12px rgba(0,8,28,.65)'}}
    .h-cta-row{display:flex;gap:18px;margin-top:44px;flex-wrap:wrap}
    .h-cta-btn{font-family:'Archivo Black',sans-serif;font-size:14px;letter-spacing:.14em;text-transform:uppercase;padding:18px 32px;background:${cyan};color:${isDark?'#06122B':'#001230'};text-decoration:none;transform:skewX(-8deg);display:inline-block;transition:transform .2s,box-shadow .2s;box-shadow:${isDark?`0 12px 36px -16px ${cyan}`:`0 0 32px -4px ${cyan},0 12px 36px -10px rgba(0,8,28,.6)`}}
    .h-cta-btn:hover{transform:skewX(-8deg) translateY(-3px);box-shadow:0 18px 48px -16px ${cyan}}
    .h-cta-btn span{display:inline-block;transform:skewX(8deg)}
    .h-cta-btn.ghost{background:transparent;color:${isDark?ink:'#FFFFFF'};border:1px solid ${isDark?rule:'rgba(255,255,255,.55)'};box-shadow:none}
    .h-cta-btn.ghost:hover{border-color:${cyan};color:${cyan}}

    .h-foot{padding:40px 0 60px;display:flex;justify-content:space-between;font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${isDark?dim:onCardDim};border-top:1px solid ${rule};margin-top:60px;flex-wrap:wrap;gap:12px}
    .h-foot .h-np{color:${cyan}}

    /* Responsive polish: preserve the desktop art direction, but stop the hero
       layers, portrait card, and dense controls from fighting narrow screens. */
    @media(max-width:1100px){
      .h-wrap{padding:0 36px}
      .h-top{align-items:flex-start}
      .h-top-right{gap:14px 18px}
      .h-hero{padding:48px 0 96px;min-height:auto}
      .h-portrait{position:absolute;top:118px;right:18px;width:210px;height:274px;margin:0}
      .h-eyebrow{max-width:calc(100% - 250px);margin-bottom:24px}
      .h-name-wrap{max-width:calc(100% - 190px);margin-top:10px}
      .h-name,.h-name-echo,.h-name-echo2{font-size:clamp(72px,10vw,122px);line-height:.88}
      .h-sub{margin-top:42px;grid-template-columns:minmax(0,1fr);max-width:calc(100% - 250px);gap:24px}
      .h-blurb{font-size:19px}
      .h-meta{max-width:520px}
      .h-sec{padding-top:74px}
      .h-sec-num{font-size:clamp(92px,15vw,160px)}
    }

    @media(max-width:880px){
      .h-portrait{position:relative;top:auto;right:auto;width:190px;height:248px;margin:0 auto 28px}
      .h-eyebrow,.h-name-wrap,.h-sub{max-width:none}
      .h-name,.h-name-echo,.h-name-echo2{font-size:clamp(60px,15vw,102px)}
    }

    @media(max-width:760px){
      .h-root{overflow-x:hidden}
      .h-wrap{padding:0 18px}
      .h-top{flex-direction:column;align-items:flex-start;gap:14px;padding-top:18px}
      .h-top-right{gap:10px 14px}
      .h-top a,.h-mode-btn{font-size:10px;letter-spacing:.12em}
      .h-mode-btn{min-height:40px;padding:0 12px}
      .h-hero{padding-top:36px}
      .h-vlabel{display:none}
      .h-portrait{width:170px;height:220px;margin:0 auto 26px}
      .h-name-wrap{max-width:100%;margin-top:10px}
      .h-name{font-size:clamp(52px,18vw,98px);line-height:.9;letter-spacing:-.01em}
      .h-name-echo,.h-name-echo2{display:none}
      .h-sub{margin-top:22px}
      .h-sub p{font-size:16px}
      .h-meta{grid-template-columns:1fr;gap:10px}
      .h-sec{gap:8px 12px;margin-top:76px}
      .h-sec-title{font-size:clamp(34px,12vw,58px)}
      .h-projects{gap:12px}
      .h-proj{padding:22px}
      .h-proj h3{font-size:clamp(26px,9vw,42px)}
      .h-skills{grid-template-columns:1fr}
      .h-gh{padding:20px;overflow-x:auto}
      .h-gh-grid{min-width:560px}
      .h-gh-foot{min-width:560px}
      .h-cta-wrap{margin:84px 0 52px;padding:${isDark?'0':'18px'}}
      .h-cta{margin:${isDark?'84px 0 52px':'0'};padding:44px 22px}
      .h-cta h2{font-size:clamp(42px,13vw,70px);line-height:.98}
      .h-cta-row{flex-direction:column;gap:12px;margin-top:30px}
      .h-cta-btn{display:flex;justify-content:center;width:100%;padding:16px 20px;text-align:center}
      .h-foot{font-size:10px;letter-spacing:.1em}
    }

    @media(max-width:420px){
      .h-wrap{padding:0 14px}
      .h-top-right{width:100%;justify-content:space-between}
      .h-name{font-size:clamp(46px,17vw,72px);line-height:.94}
      .h-portrait{width:150px;height:196px}
      .h-arcana{font-size:12px}
      .h-card{border-radius:8px}
      .h-proj,.h-skill-card{padding:18px}
      .h-sec-title{font-size:clamp(30px,11vw,48px)}
    }
  `;

  const spans = ["span6", "span6", "span6", "span6", "span6", "span6"];
  const nowPlaying = "♪  Iwatodai Local — 23:59";

  return (
    <div className="h-root">
      <style>{css}</style>
      <svg width="0" height="0" style={{position:'absolute'}} aria-hidden="true">
        <filter id="h-duotone" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0.33 0.33 0.33 0 0  0 0 0 1 0"/>
          <feComponentTransfer>
            <feFuncR tableValues="0.02 0.50"/>
            <feFuncG tableValues="0.07 0.83"/>
            <feFuncB tableValues="0.18 0.96"/>
          </feComponentTransfer>
        </filter>
      </svg>
      {!isDark && <div className="h-hero-bg" aria-hidden="true"></div>}
      {!isDark && <div className="h-godray" aria-hidden="true"></div>}
      {!isDark && <div className="h-caustic" aria-hidden="true"></div>}
      {isDark && <div className="h-grain"></div>}
      <div className="h-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <span key={i} style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            ['--delay']: `${p.delay}s`,
            ['--dur']: `${p.dur}s`,
            ['--op']: p.op,
          }}></span>
        ))}
      </div>

      <div className="h-wrap">
        <div className="h-top">
          <div><span className="dot"></span>● ACTIVE · BUILDING IN OTTAWA · 2026</div>
          <div className="h-top-right">
            <a href={ME.github} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.17 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.62 1.57.23 2.73.11 3.02.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14 0 1.54-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg><span>GitHub</span></a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg><span>LinkedIn</span></a>
            <a href={`mailto:${ME.email}`}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg><span>Email</span></a>
            <a href={ME.resumeUrl}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg><span>Résumé</span><span style={{opacity:.6}}>↗</span></a>
            <button className="h-mode-btn" onClick={() => setMode(isDark?'light':'dark')}
                    aria-label={isDark ? 'Switch to daylight' : 'Switch to midnight'}>
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
              <span>{isDark ? 'Daylight' : 'Midnight'}</span>
            </button>
          </div>
        </div>

        <section className="h-hero">

          {isDark && <div className="h-moon" aria-hidden="true"></div>}
          {!isDark && <div className="h-sun" aria-hidden="true"></div>}

          <div className="h-portrait" aria-hidden="false">
            <div className="h-portrait-img">
              <img src="/portrait.png" alt="Seydi Cheikh Wade"/>
            </div>
          </div>

          <div className="h-vlabel">PORTFOLIO &nbsp;·&nbsp; VOL. 03 &nbsp;·&nbsp; {isDark?'MIDNIGHT':'DAYLIGHT'} EDITION</div>
          <div className="h-eyebrow" style={{position:'relative',zIndex:2}}>
            FILE 0 · INTRODUCTION
            <span className="h-arcana"><b>Arcana 0</b> the wanderer, who walks unbound</span>
          </div>
          <div className="h-name-wrap">
            <div className="h-name-echo2" aria-hidden="true">Seydi<br/>Cheikh WADE.</div>
            <div className="h-name-echo"  aria-hidden="true">Seydi<br/>Cheikh WADE.</div>
            <h1 className="h-name">Seydi<br/><span className="c">Cheikh</span> <em>WADE.</em></h1>
          </div>
          <div className="h-sub">
            <p className="h-blurb">
              Third-year <b>software engineering</b> at Carleton (Co-op).
              I work at the seam between <em>applied ML</em> and the full-stack scaffolding
              that ships it — RAG pipelines, FastAPI services, and interfaces that earn their keep.
            </p>
            <div className="h-meta">
              <div><span>Based</span><b>Ottawa · ON</b></div>
              <div><span>Program</span><b>SWE · Carleton</b></div>
              <div><span>Graduates</span><b>May 2028</b></div>
              <div><span>Focus</span><b>AI · Full-stack</b></div>
              <div><span>Next stop</span><b>StatCan · S26</b></div>
            </div>
          </div>
        </section>

        {showNow && (
          <section style={{position:'relative'}}>
            <div className="h-sec">
              <span className="h-sec-num">01</span>
              <h2 className="h-sec-title">Currently</h2>
              <span className="h-sec-meta">/ <b>LIVE</b> · UPDATED THIS WEEK</span>
            </div>
            <div className="h-now">
              {ME.now.map((n, i) => (
                <div key={i} className="h-card h-now-card" data-i={`0${i+1}`}>
                  <div className="h-now-lbl">// Now / 0{i+1}</div>
                  <div className="h-now-txt">{n}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section style={{position:'relative'}}>
          <div className="h-sec">
            <span className="h-sec-num">02</span>
            <h2 className="h-sec-title">Experience</h2>
            <span className="h-sec-meta">/ CO-OPS · RANK ↑</span>
          </div>
          <div className="h-exp">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="h-card h-exp-card">
                <h3 className="h-exp-role">{e.role}</h3>
                <div className="h-exp-org">{e.org}</div>
                <div className="h-exp-meta"><span>{e.period}</span><span>{e.where}</span></div>
                <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{position:'relative'}}>
          <div className="h-sec">
            <span className="h-sec-num">03</span>
            <h2 className="h-sec-title">Volunteering & education</h2>
            <span className="h-sec-meta">/ COMMUNITY · SCHOOL</span>
          </div>
          <div className="h-exp">
            {VOLUNTEERING.map((e, i) => (
              <div key={i} className="h-card h-exp-card">
                <h3 className="h-exp-role">{e.role}</h3>
                <div className="h-exp-org">{e.org}</div>
                <div className="h-exp-meta"><span>{e.period}</span><span>{e.where}</span></div>
                <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{position:'relative'}}>
          <div className="h-sec">
            <span className="h-sec-num">04</span>
            <h2 className="h-sec-title">Selected work</h2>
            <span className="h-sec-meta">/ <b>{PROJECTS.length}</b> ENTRIES · 2024 — 2026</span>
          </div>
          <div className="h-projects">
            {PROJECTS.map((p, i) => {
              const href = p.liveUrl || p.repo;
              const open = (url) => window.open(url, '_blank', 'noopener,noreferrer');
              return (
              <div key={p.id} role="link" tabIndex={0}
                 onClick={()=>open(href)}
                 onKeyDown={(e)=>{ if(e.key==='Enter'||e.key===' '){e.preventDefault();open(href);} }}
                 className={`h-card h-proj ${spans[i]} ${i===0||i===1 ? 'featured':''}`}>
                <div className="h-proj-tag">
                  <span>{p.tags.join(' · ')}</span>
                </div>
                {p.award && (
                  <div className="h-proj-award">
                    <span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4z"/>
                        <path d="M17 4h3v2a3 3 0 0 1-3 3M7 4H4v2a3 3 0 0 0 3 3"/>
                      </svg>
                      {p.award}
                    </span>
                  </div>
                )}
                {p.liveUrl && <div className="h-proj-live">Live — visit site</div>}
                {p.liveUrl ? (
                  <a className="h-proj-gh" href={p.repo} target="_blank" rel="noreferrer"
                     onClick={(e)=>e.stopPropagation()} aria-label="View source on GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.2-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.42-5.25 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg>
                  </a>
                ) : (
                  <div className="h-proj-arrow">↗</div>
                )}
                <div className="h-proj-num">0{i+1}</div>
                <div>
                  <h3 className="h-proj-name">{p.name}</h3>
                  <p className="h-proj-line">{p.tagline}</p>
                </div>
                <div className="h-proj-stack">
                  {p.stack.slice(0,5).map(s => <span key={s}>{s}</span>)}
                </div>
              </div>
            )})}
          </div>
        </section>

        <section style={{position:'relative'}}>
          <div className="h-sec">
            <span className="h-sec-num">05</span>
            <h2 className="h-sec-title">Toolkit</h2>
            <span className="h-sec-meta">/ THINGS I REACH FOR</span>
          </div>
          <div className="h-skills">
            {SKILLS.map(s => (
              <div key={s.group} className="h-card h-skill-card">
                <div className="h-skill-grp">// {s.group}</div>
                {s.items.map(i => <span key={i} className="h-skill-chip">{i}</span>)}
              </div>
            ))}
          </div>
        </section>

        {showGithub && (
          <section style={{position:'relative'}}>
            <div className="h-sec">
              <span className="h-sec-num">06</span>
              <h2 className="h-sec-title">Commit pulse</h2>
              <span className="h-sec-meta">/ LAST 52 WEEKS</span>
            </div>
            <div className="h-card h-gh">
              <div style={{display:'flex',justifyContent:'space-between',fontFamily:'JetBrains Mono,monospace',fontSize:11,letterSpacing:'.18em',textTransform:'uppercase',color:dim}}>
                <span>@cheikhwade07</span><span style={{color:cyan}}>847 CONTRIBUTIONS</span>
              </div>
              <div className="h-gh-grid">
                {CONTRIB.map((week, wi) => (
                  <div key={wi} className="h-gh-col">
                    {week.map((d, di) => (
                      <div key={di} className={`h-gh-cell ${d ? 'l'+d : ''}`}></div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="h-gh-foot">
                <span>JAN 2025</span>
                <span style={{display:'flex',gap:6,alignItems:'center'}}>LESS
                  <span className="h-gh-cell" style={{width:10}}></span>
                  <span className="h-gh-cell l1" style={{width:10}}></span>
                  <span className="h-gh-cell l2" style={{width:10}}></span>
                  <span className="h-gh-cell l3" style={{width:10}}></span>
                  <span className="h-gh-cell l4" style={{width:10}}></span>
                MORE</span>
                <span>DEC 2025</span>
              </div>
            </div>
          </section>
        )}

        <div className="h-cta-wrap">
        <section className="h-cta">
          <h2>Let's <em>build</em> something.</h2>
          <p>I'm always up for a coffee chat about AI, RAG pipelines, or what the right amount of state-machine is for a Java drone simulator.</p>
          <div className="h-cta-row">
            <a className="h-cta-btn" href={`mailto:${ME.email}`}><span>Send a message →</span></a>
            <a className="h-cta-btn ghost" href={ME.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn ↗</span></a>
          </div>
        </section>
        </div>

        <div className="h-foot">
          <span>© 2026 · CHEIKH WADE</span>
          <span className="h-np">{nowPlaying}</span>
          <span>V3.6 · {isDark ? 'MIDNIGHT' : 'DAYLIGHT'}</span>
        </div>
      </div>
    </div>
  );
}

window.HeistTheme = HeistTheme;
