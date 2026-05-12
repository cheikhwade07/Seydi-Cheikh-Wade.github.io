import React from 'react';
const { ME, PROJECTS, SKILLS, CONTRIB } = window;
// portfolio-editorial.jsx — minimal Swiss-grid editorial direction.
// Cream paper, large serif name, restrained type, recruiter-safe.

const { useState: useStateE } = React;

function EditorialTheme({ accent, showGithub, showNow }) {
  const paper = "#F5F1EA";
  const ink = "#1A1A1A";
  const mute = "#6B6356";
  const rule = "rgba(26,26,26,.12)";

  const css = `
    .e-root{background:${paper};color:${ink};font-family:'Inter',ui-sans-serif,system-ui,sans-serif;min-height:100vh;font-size:15px;line-height:1.55}
    .e-root a{text-decoration:none;color:inherit}
    .e-wrap{max-width:1180px;margin:0 auto;padding:0 56px}
    @media(max-width:760px){.e-wrap{padding:0 22px}}

    .e-top{padding:28px 0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid ${rule}}
    .e-mark{font-family:'Instrument Serif',serif;font-style:italic;font-size:22px}
    .e-nav{display:flex;gap:24px;font-size:13px;color:${mute}}
    .e-nav a{color:${mute};text-decoration:none;transition:color .15s}
    .e-nav a:hover{color:${ink}}
    .e-nav .pill{padding:5px 12px;border:1px solid ${ink};border-radius:99px;color:${ink}}
    .e-nav .pill::before{content:"";display:inline-block;width:6px;height:6px;background:${accent};border-radius:50%;margin-right:8px;vertical-align:1px;animation:epulse 2s infinite}
    @keyframes epulse{0%,100%{opacity:1}50%{opacity:.3}}

    .e-hero{padding:120px 0 100px;display:grid;grid-template-columns:7fr 5fr;gap:80px;align-items:end;border-bottom:1px solid ${rule}}
    @media(max-width:880px){.e-hero{grid-template-columns:1fr;gap:40px;padding:60px 0}}
    .e-label{font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${mute};margin-bottom:28px;display:flex;align-items:center;gap:14px}
    .e-label::before{content:"";width:24px;height:1px;background:${ink}}
    .e-name{font-family:'Instrument Serif',serif;font-size:clamp(56px,9vw,128px);line-height:1.02;letter-spacing:-.02em;margin:0;font-weight:400}
    .e-name em{font-style:italic;color:${accent}}
    .e-blurb{font-family:'Instrument Serif',serif;font-style:italic;font-size:24px;line-height:1.45;color:${ink};margin:0 0 24px}
    .e-blurb b{font-style:normal;font-family:'Inter',sans-serif;font-weight:500;background:${accent};color:${paper};padding:0 6px}
    .e-info{font-size:13px;color:${mute};display:grid;gap:8px}
    .e-info .row{display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid ${rule}}
    .e-info .row b{color:${ink};font-weight:500}

    .e-sec{padding:80px 0;border-bottom:1px solid ${rule}}
    .e-sec-h{display:grid;grid-template-columns:120px 1fr 200px;gap:40px;align-items:baseline;margin-bottom:40px}
    @media(max-width:760px){.e-sec-h{grid-template-columns:1fr;gap:8px}}
    .e-sec-h .n{font-family:'Instrument Serif',serif;font-style:italic;font-size:40px;color:${accent};line-height:1}
    .e-sec-h .t{font-family:'Instrument Serif',serif;font-size:40px;letter-spacing:-.01em;margin:0;font-weight:400}
    .e-sec-h .m{font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:${mute};text-align:right}
    @media(max-width:760px){.e-sec-h .m{text-align:left}}

    /* Now */
    .e-now{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:${rule};border:1px solid ${rule}}
    @media(max-width:760px){.e-now{grid-template-columns:1fr}}
    .e-now-c{background:${paper};padding:22px 24px}
    .e-now-c .k{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${accent};margin-bottom:12px}
    .e-now-c .v{font-family:'Instrument Serif',serif;font-style:italic;font-size:18px;line-height:1.4}

    /* Projects */
    .e-proj{display:grid;grid-template-columns:120px 1fr 240px;gap:40px;padding:36px 0;border-top:1px solid ${rule};text-decoration:none;color:${ink};transition:padding .2s,background .2s;cursor:pointer}
    .e-proj:hover{background:rgba(26,26,26,.02);padding-left:12px}
    .e-proj:first-child{border-top:0}
    @media(max-width:760px){.e-proj{grid-template-columns:1fr;gap:12px}}
    .e-proj .y{font-family:'Instrument Serif',serif;font-style:italic;font-size:22px;color:${mute}}
    .e-proj h3{margin:0 0 6px;font-family:'Instrument Serif',serif;font-size:32px;font-weight:400;letter-spacing:-.01em;display:flex;align-items:baseline;gap:14px}
    .e-proj h3 .arrow{font-size:20px;color:${accent};transition:transform .2s;font-family:'Inter',sans-serif}
    .e-proj:hover h3 .arrow{transform:translate(4px,-4px)}
    .e-proj .desc{color:${mute};font-size:14px;max-width:48ch;line-height:1.55;margin:0 0 10px}
    .e-proj .stk{display:flex;flex-wrap:wrap;gap:6px;font-family:'JetBrains Mono',monospace;font-size:11px;color:${mute}}
    .e-proj .stk span::after{content:"·";margin:0 6px;color:${rule}}
    .e-proj .stk span:last-child::after{content:""}
    .e-proj .ti{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${mute};text-align:right}
    .e-proj .ti b{color:${ink};font-weight:500;display:block;margin-bottom:4px}
    @media(max-width:760px){.e-proj .ti{text-align:left}}

    /* Experience */
    .e-exp{display:grid;grid-template-columns:repeat(2,1fr);gap:48px}
    @media(max-width:760px){.e-exp{grid-template-columns:1fr}}
    .e-exp-c h3{margin:0;font-family:'Instrument Serif',serif;font-size:26px;font-weight:400}
    .e-exp-c .o{color:${accent};font-style:italic;font-family:'Instrument Serif',serif;font-size:18px;margin:2px 0 4px}
    .e-exp-c .w{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${mute};margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid ${rule}}
    .e-exp-c ul{margin:0;padding-left:18px;font-size:14px;line-height:1.6;color:${ink}}
    .e-exp-c li{margin-bottom:6px}

    /* Skills */
    .e-skills{display:grid;grid-template-columns:repeat(4,1fr);gap:32px}
    @media(max-width:760px){.e-skills{grid-template-columns:repeat(2,1fr);gap:24px}}
    .e-sk h4{margin:0 0 12px;font-family:'Instrument Serif',serif;font-style:italic;font-size:18px;font-weight:400;color:${accent}}
    .e-sk ul{margin:0;padding:0;list-style:none}
    .e-sk li{padding:6px 0;border-bottom:1px solid ${rule};font-size:13px;color:${ink}}

    /* GitHub */
    .e-gh{}
    .e-gh-top{display:flex;justify-content:space-between;font-size:12px;color:${mute};margin-bottom:14px}
    .e-gh-grid{display:grid;grid-template-columns:repeat(52,1fr);gap:3px}
    .e-gh-col{display:grid;grid-template-rows:repeat(7,1fr);gap:3px}
    .e-gh-cell{width:100%;aspect-ratio:1;border-radius:2px;background:${rule}}
    .e-gh-cell.l1{background:${accent}40}
    .e-gh-cell.l2{background:${accent}80}
    .e-gh-cell.l3{background:${accent}c0}
    .e-gh-cell.l4{background:${accent}}

    /* CTA */
    .e-cta{padding:120px 0;text-align:center;border-bottom:1px solid ${rule}}
    .e-cta h2{margin:0 0 20px;font-family:'Instrument Serif',serif;font-size:clamp(48px,7vw,96px);line-height:1.05;font-weight:400;letter-spacing:-.02em}
    .e-cta h2 em{font-style:italic;color:${accent}}
    .e-cta p{color:${mute};margin:0 0 36px;font-size:17px}
    .e-cta a{display:inline-block;margin:0 6px;padding:14px 26px;border-radius:99px;text-decoration:none;font-size:14px;font-weight:500;transition:transform .15s}
    .e-cta a.pri{background:${ink};color:${paper}}
    .e-cta a.sec{color:${ink};border:1px solid ${ink}}
    .e-cta a:hover{transform:translateY(-2px)}

    .e-foot{padding:32px 0 60px;display:flex;justify-content:space-between;font-size:12px;color:${mute}}
  `;

  return (
    <div className="e-root">
      <style>{css}</style>
      <div className="e-wrap">
        <div className="e-top">
          <div className="e-mark">cheikh wade <span style={{color:mute,fontStyle:'normal',fontFamily:'Inter',fontSize:13,marginLeft:10}}>— portfolio</span></div>
          <div className="e-nav">
            <span className="pill">Currently building</span>
            <a href={ME.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${ME.email}`}>Email</a>
          </div>
        </div>

        <section className="e-hero">
          <div>
            <div className="e-label">Portfolio &nbsp;·&nbsp; 2026</div>
            <h1 className="e-name">Seydi <em>Cheikh</em> Wade<span style={{color:accent}}>.</span></h1>
          </div>
          <div>
            <image-slot id="cheikh-portrait" shape="rounded" radius="14"
              style={{width:'100%',aspectRatio:'4/5',marginBottom:24,display:'block',background:rule,border:`1px solid ${rule}`}}
              placeholder="Drop your headshot here"></image-slot>
            <p className="e-blurb">
              Hey — I'm Cheikh. Third-year software engineering at Carleton, building
              <b>&nbsp;applied AI&nbsp;</b> and the full-stack scaffolding around it.
            </p>
            <div className="e-info">
              <div className="e-row row"><span>Location</span><b>Ottawa, ON</b></div>
              <div className="e-row row"><span>Program</span><b>B.Eng. SE · Year 3 / 5</b></div>
              <div className="e-row row"><span>Focus</span><b>AI · Full-stack</b></div>
              <div className="e-row row"><span>Co-op</span><b>StatCan · Summer 26</b></div>
            </div>
          </div>
        </section>

        {showNow && (
          <section className="e-sec">
            <div className="e-sec-h">
              <span className="n">01.</span>
              <h2 className="t">Currently</h2>
              <span className="m">Updated this week</span>
            </div>
            <div className="e-now">
              {ME.now.map((n, i) => (
                <div key={i} className="e-now-c">
                  <div className="k">Now / 0{i+1}</div>
                  <div className="v">"{n}"</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="e-sec">
          <div className="e-sec-h">
            <span className="n">02.</span>
            <h2 className="t">Selected projects</h2>
            <span className="m">{PROJECTS.length} · 2024 – 2026</span>
          </div>
          <div>
            {PROJECTS.map((p, i) => (
              <a key={p.id} href={p.repo} target="_blank" rel="noreferrer" className="e-proj">
                <span className="y">{`0${i+1} —`}</span>
                <div>
                  <h3>{p.name}<span className="arrow">↗</span></h3>
                  <p className="desc">{p.long}</p>
                  <div className="stk">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                </div>
                <div className="ti">
                  <b>{p.year}</b>
                  {p.role}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="e-sec">
          <div className="e-sec-h">
            <span className="n">03.</span>
            <h2 className="t">Experience</h2>
            <span className="m">Work + studies</span>
          </div>
          <div className="e-exp">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="e-exp-c">
                <h3>{e.role}</h3>
                <div className="o">{e.org}</div>
                <div className="w">{e.period} · {e.where}</div>
                <ul>{e.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section className="e-sec">
          <div className="e-sec-h">
            <span className="n">04.</span>
            <h2 className="t">Toolkit</h2>
            <span className="m">Things I reach for</span>
          </div>
          <div className="e-skills">
            {SKILLS.map(s => (
              <div key={s.group} className="e-sk">
                <h4>— {s.group}</h4>
                <ul>{s.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        {showGithub && (
          <section className="e-sec">
            <div className="e-sec-h">
              <span className="n">05.</span>
              <h2 className="t">Commit pulse</h2>
              <span className="m">Last 52 weeks</span>
            </div>
            <div className="e-gh">
              <div className="e-gh-top">
                <span>@cheikhwade07</span>
                <span>847 contributions</span>
              </div>
              <div className="e-gh-grid">
                {CONTRIB.map((week, wi) => (
                  <div key={wi} className="e-gh-col">
                    {week.map((d, di) => (
                      <div key={di} className={`e-gh-cell ${d ? 'l'+d : ''}`}></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="e-cta">
          <h2>Let's make <em>something</em><br/>worth shipping.</h2>
          <p>Reach out for collaborations, coffee chats, or to talk about AI &amp; full-stack work.</p>
          <a className="pri" href={`mailto:${ME.email}`}>Get in touch →</a>
          <a className="sec" href={ME.resumeUrl}>Download résumé</a>
        </section>

        <div className="e-foot">
          <span>© 2026 Seydi Cheikh Wade</span>
          <span>Designed in Ottawa · v3.0</span>
        </div>
      </div>
    </div>
  );
}

window.EditorialTheme = EditorialTheme;
