import { CONTRIB } from '../../data/contrib';

export function GithubCard() {
  return (
    <section className="content-section" aria-labelledby="github-title">
      <div className="section-heading">
        <span className="section-number">06</span>
        <h2 id="github-title">Commit pulse</h2>
        <span className="section-meta">/ last 52 weeks</span>
      </div>
      <div className="github-card surface-card">
        <div className="github-topline">
          <span>@cheikhwade07</span>
          <strong>847 contributions</strong>
        </div>
        <div className="github-grid" aria-label="Contribution intensity grid">
          {CONTRIB.map((week, weekIndex) => (
            <div className="github-week" key={weekIndex}>
              {week.map((day, dayIndex) => (
                <span key={dayIndex} className={`github-cell level-${day}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="github-foot">
          <span>Jan 2025</span>
          <span>Less · More</span>
          <span>Dec 2025</span>
        </div>
      </div>
    </section>
  );
}
