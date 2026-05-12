import { ME } from '../../data/me';
import { Blurb } from './Blurb';
import { Meta } from './Meta';
import { Name } from './Name';
import { Portrait } from './Portrait';

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span>Portfolio</span>
            <span>Vol. 03</span>
            <span>Midnight / Daylight edition</span>
          </div>
          <Name />
          <Blurb />
        </div>
        <Portrait />
      </div>
      <Meta />
      <div className="hero-now" aria-label="Current focus">
        <span className="section-number">03</span>
        <div>
          <p className="mini-label">Now</p>
          <ul>
            {ME.now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
