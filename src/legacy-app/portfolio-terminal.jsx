import React from 'react';
const { ME, PROJECTS, SKILLS, CONTRIB } = window;
// portfolio-terminal.jsx — dev-tool / terminal direction.
// Monospace, command-palette aesthetic, dark.

const { useState: useStateT, useEffect: useEffectT, useRef: useRefT } = React;

function TerminalTheme({ accent, showGithub, showNow }) {
  const bg = "#0B0E10";
  const bg2 = "#13171B";
  const fg = "#E6EAEE";
  const dim = "#7C8896";
  const border = "rgba(230,234,238,.10)";

  const css = `
    .t-root{background:${bg};color:${fg};font-family:'JetBrains Mono',ui-monospace,monospace;min-height:100vh;font-size:14px;line-height:1.55}
    .t-root a{text-decoration:none;color:inherit}
    .t-root::before{content:"";position:fixed;inset:0;background:radial-gradient(1200px 600px at 30% -10%,${accent}10,transparent 60%),radial-gradient(800px 400px at 90% 20%,${accent}08,transparent 60%);pointer-events:none;z-index:0}
    .t-wrap{position:relative;z-index:1;max-width:1180px;margin:0 auto;padding:0 32px}
    @media(max-width:760px){.t-wrap{padding:0 18px}}

    .t-bar{display:flex;align-items:center;gap:10px;padding:14px 18px;border-bottom:1px solid ${border};background:${bg2};margin:0 -32px 0 -32px;font-size:12px}
    .t-bar .ll{display:flex;gap:6px;align-items:center}
    .t-bar .ll i{width:11px;height:11px;border-radius:50%;background:#FF5F57}
    .t-bar .ll i:nth-child(2){background:#FEBC2E}
    .t-bar .ll i:nth-child(3){background:#28C840}
    .t-bar .ti{flex:1;text-align:center;color:${dim}}
    .t-bar .rr{display:flex;gap:14px;color:${dim};font-size:11px}
    .t-bar .rr a{color:${dim};text-decoration:none}
    .t-bar .rr a:hover{color:${accent}}

    .t-prompt{color:${dim};margin-top:38px}
    .t-prompt b{color:${accent}}
    .t-prompt em{color:${fg};font-style:normal}
    .t-caret{display:inline-block;width:8px;height:14px;background:${accent};margin-left:4px;vertical-align:-2px;animation:tblink 1s steps(2) infinite}
    @keyframes tblink{50%{opacity:0}}

    .t-hero{padding:14px 0 60px}
    .t-ascii{color:${accent};white-space:pre;line-height:1.05;font-size:12px;margin:10px 0 22px;opacity:.95}
    @media(max-width:760px){.t-ascii{font-size:8px}}
    .t-title{font-size:42px;font-weight:700;letter-spacing:-.02em;margin:8px 0 6px;color:${fg}}
    .t-title .at{color:${accent}}
    .t-sub{color:${dim};max-width:62ch;margin-bottom:18px}
    .t-sub .hl{color:${accent}}
    .t-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}
    .t-tag{font-size:12px;padding:3px 10px;border:1px solid ${border};border-radius:99px;color:${fg};background:${bg2}}
    .t-tag.on{border-color:${accent};color:${accent}}

    .t-statline{margin-top:22px;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:${border};border:1px solid ${border};border-radius:6px;overflow:hidden}
    @media(max-width:760px){.t-statline{grid-template-columns:repeat(2,1fr)}}
    .t-stat{padding:14px 16px;background:${bg2}}
    .t-stat .k{font-size:11px;color:${dim};text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px}
    .t-stat .v{font-size:18px;font-weight:600}
    .t-stat .v b{color:${accent};font-weight:600}

    .t-sec{margin-top:72px}
    .t-sec h2{font-size:13px;font-weight:600;color:${dim};margin:0 0 18px;text-transform:lowercase;letter-spacing:.02em}
    .t-sec h2 b{color:${accent}}
    .t-sec h2 .meta{color:${dim};font-weight:400;margin-left:8px}

    /* Now block */
    .t-now{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
    @media(max-width:760px){.t-now{grid-template-columns:1fr}}
    .t-now-c{border:1px solid ${border};border-radius:8px;padding:18px;background:${bg2};position:relative}
    .t-now-c::before{content:"⏵";position:absolute;left:14px;top:14px;color:${accent}}
    .t-now-c p{margin:0 0 0 22px;color:${fg}}

    /* Projects table-list */
    .t-proj-list{display:flex;flex-direction:column;border:1px solid ${border};border-radius:8px;overflow:hidden;background:${bg2}}
    .t-prow{display:grid;grid-template-columns:36px 1.6fr 2.2fr 1.3fr 80px;gap:18px;padding:18px 20px;border-bottom:1px solid ${border};cursor:pointer;text-decoration:none;color:${fg};transition:background .15s;align-items:center}
    .t-prow:last-child{border-bottom:0}
    .t-prow:hover{background:rgba(255,255,255,.025)}
    .t-prow:hover .t-pn{color:${accent}}
    .t-pi{color:${dim};font-size:12px}
    .t-pn{font-weight:600;font-size:16px}
    .t-pdesc{color:${dim};font-size:13px}
    .t-pstk{display:flex;flex-wrap:wrap;gap:6px}
    .t-pstk span{font-size:11px;color:${dim}}
    .t-pgo{text-align:right;color:${dim};font-size:12px}
    .t-prow:hover .t-pgo{color:${accent}}
    @media(max-width:880px){
      .t-prow{grid-template-columns:1fr;gap:6px}
      .t-pgo{text-align:left}
    }

    /* Experience timeline */
    .t-tl{position:relative;padding-left:22px}
    .t-tl::before{content:"";position:absolute;left:6px;top:8px;bottom:8px;width:1px;background:${border}}
    .t-tle{position:relative;margin-bottom:28px}
    .t-tle::before{content:"";position:absolute;left:-22px;top:8px;width:11px;height:11px;border-radius:50%;background:${accent};box-shadow:0 0 0 4px ${bg}}
    .t-tle h3{margin:0;font-size:16px;font-weight:600}
    .t-tle h3 .o{color:${accent}}
    .t-tle .when{font-size:12px;color:${dim};margin:2px 0 10px}
    .t-tle ul{margin:0;padding-left:18px;color:${fg}}
    .t-tle li{margin-bottom:4px;color:${fg}}

    /* Skills */
    .t-skills{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
    @media(max-width:760px){.t-skills{grid-template-columns:1fr}}
    .t-sk{border:1px solid ${border};border-radius:8px;padding:18px;background:${bg2}}
    .t-sk h4{margin:0 0 10px;font-size:12px;color:${dim};font-weight:500;text-transform:lowercase;letter-spacing:.04em}
    .t-sk h4::before{content:"$ ";color:${accent}}
    .t-sk .chips{display:flex;flex-wrap:wrap;gap:6px}
    .t-sk .chips span{font-size:12px;padding:3px 9px;border:1px solid ${border};border-radius:99px;color:${fg}}

    /* GitHub */
    .t-gh{border:1px solid ${border};border-radius:8px;padding:22px;background:${bg2}}
    .t-gh-top{display:flex;justify-content:space-between;font-size:12px;color:${dim};margin-bottom:14px}
    .t-gh-top b{color:${accent}}
    .t-gh-grid{display:grid;grid-template-columns:repeat(52,1fr);gap:3px}
    .t-gh-col{display:grid;grid-template-rows:repeat(7,1fr);gap:3px}
    .t-gh-cell{width:100%;aspect-ratio:1;border-radius:2px;background:rgba(255,255,255,.04)}
    .t-gh-cell.l1{background:${accent}40}
    .t-gh-cell.l2{background:${accent}77}
    .t-gh-cell.l3{background:${accent}bb}
    .t-gh-cell.l4{background:${accent}}

    /* Contact */
    .t-cta{margin:80px 0 40px;border:1px solid ${border};border-radius:10px;padding:36px;background:${bg2};text-align:center}
    .t-cta h2{margin:0 0 8px;font-size:28px;color:${fg}}
    .t-cta h2 b{color:${accent}}
    .t-cta p{color:${dim};margin:0 0 22px}
    .t-cta a{display:inline-block;margin:0 6px;padding:11px 22px;border-radius:7px;text-decoration:none;font-weight:500;font-size:14px}
    .t-cta a.pri{background:${accent};color:${bg}}
    .t-cta a.sec{color:${fg};border:1px solid ${border}}
    .t-cta a.pri:hover{transform:translateY(-1px)}

    .t-foot{padding:24px 0 48px;color:${dim};display:flex;justify-content:space-between;font-size:12px}
  `;

  const [time, setTime] = useStateT(() => new Date());
  useEffectT(() => {
    const id = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(id);
  }, []);
  const ts = time.toLocaleTimeString('en-CA',{hour:'2-digit',minute:'2-digit',hour12:false});

  const ascii = `  ┌─────────────────────────────────────────┐
  │   /\\\\__/\\\\   cheikh.wade :: portfolio    │
  │  ( o.o  )   carleton soft eng · '28      │
  │   > ^ <    open to summer '26 interns    │
  └─────────────────────────────────────────┘`;

  return (
    <div className="t-root">
      <style>{css}</style>
      <div className="t-wrap">
        <div className="t-bar">
          <div className="ll"><i></i><i></i><i></i></div>
          <div className="ti">~/cheikh-wade — zsh — 142×38</div>
          <div className="rr">
            <span style={{color:accent}}>● online</span>
            <a href={ME.github} target="_blank" rel="noreferrer">github</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer">linkedin</a>
            <a href={`mailto:${ME.email}`}>mail</a>
            <a href={ME.resumeUrl}>résumé</a>
          </div>
        </div>

        <section className="t-hero">
          <div className="t-prompt"><b>cheikh@portfolio</b> <em>~</em> $ <em>whoami</em></div>
          <pre className="t-ascii">{ascii}</pre>
          <div className="t-prompt"><b>cheikh@portfolio</b> <em>~</em> $ <em>cat about.md</em></div>
          <h1 className="t-title"><span className="at">#</span> Seydi Cheikh Wade</h1>
          <p className="t-sub">
            Third-year software engineering student at Carleton, currently obsessed with
            <span className="hl"> applied AI</span> and <span className="hl">developer tools</span>.
            I like building things end-to-end — the kind of project that wouldn't exist if I didn't
            write both the inference code and the button it sits behind.
          </p>
          <div className="t-tags">
            <span className="t-tag on">AI / ML</span>
            <span className="t-tag on">full-stack</span>
            <span className="t-tag">FastAPI</span>
            <span className="t-tag">Next.js</span>
            <span className="t-tag">Python</span>
            <span className="t-tag">TypeScript</span>
          </div>

          <div className="t-statline">
            <div className="t-stat"><div className="k">uptime</div><div className="v">2.5 <b>yrs</b></div></div>
            <div className="t-stat"><div className="k">repos</div><div className="v">12 <b>public</b></div></div>
            <div className="t-stat"><div className="k">stack</div><div className="v">py · ts · java</div></div>
            <div className="t-stat"><div className="k">status</div><div className="v"><b>● shipping</b></div></div>
          </div>
        </section>

        {showNow && (
          <section className="t-sec">
            <h2><b>$</b> tail -f ~/.now <span className="meta"># {ts} EST</span></h2>
            <div className="t-now">
              {ME.now.map((n, i) => <div key={i} className="t-now-c"><p>{n}</p></div>)}
            </div>
          </section>
        )}

        <section className="t-sec">
          <h2><b>$</b> ls ~/projects <span className="meta"># {PROJECTS.length} entries</span></h2>
          <div className="t-proj-list">
            {PROJECTS.map((p, i) => (
              <a key={p.id} href={p.repo} target="_blank" rel="noreferrer" className="t-prow">
                <div className="t-pi">0{i+1}</div>
                <div>
                  <div className="t-pn">{p.name}</div>
                  <div style={{color:dim,fontSize:11,marginTop:2}}>{p.role} · {p.year}</div>
                </div>
                <div className="t-pdesc">{p.tagline}</div>
                <div className="t-pstk">{p.stack.slice(0,4).map(s => <span key={s}>{s}</span>)}</div>
                <div className="t-pgo">view →</div>
              </a>
            ))}
          </div>
        </section>

        <section className="t-sec">
          <h2><b>$</b> git log --experience</h2>
          <div className="t-tl">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="t-tle">
                <h3>{e.role} <span className="o">@ {e.org}</span></h3>
                <div className="when">{e.period} · {e.where}</div>
                <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="t-sec">
          <h2><b>$</b> cat skills.json</h2>
          <div className="t-skills">
            {SKILLS.map(s => (
              <div key={s.group} className="t-sk">
                <h4>{s.group.toLowerCase()}</h4>
                <div className="chips">
                  {s.items.map(i => <span key={i}>{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {showGithub && (
          <section className="t-sec">
            <h2><b>$</b> gh contrib --user cheikhwade07 --weeks 52</h2>
            <div className="t-gh">
              <div className="t-gh-top">
                <span>@cheikhwade07</span>
                <span><b>847</b> contributions in the last year</span>
              </div>
              <div className="t-gh-grid">
                {CONTRIB.map((week, wi) => (
                  <div key={wi} className="t-gh-col">
                    {week.map((d, di) => (
                      <div key={di} className={`t-gh-cell ${d ? 'l'+d : ''}`}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="t-cta">
          <h2>Want to <b>collaborate</b>?</h2>
          <p>I read every cold email. Drop me a line — usually back within the day.</p>
          <a className="pri" href={`mailto:${ME.email}`}>{ME.email}</a>
          <a className="sec" href={ME.linkedin}>LinkedIn ↗</a>
        </section>

        <div className="t-foot">
          <span>© 2026 cheikh.wade — built from scratch</span>
          <span>v3.0.1 · {ts}</span>
        </div>
      </div>
    </div>
  );
}

window.TerminalTheme = TerminalTheme;
