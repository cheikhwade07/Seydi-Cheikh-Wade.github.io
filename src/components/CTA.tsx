import { ME } from '../data/me';

export function CTA() {
  return (
    <section id="contact" className="cta-section">
      <h2>
        Let&apos;s <em>build</em> something.
      </h2>
      <p>
        I&apos;m always up for a coffee chat about AI, RAG pipelines, or what the right amount of state-machine is for a
        Java drone simulator.
      </p>
      <div className="cta-row">
        <a className="cta-primary" href={`mailto:${ME.email}`}>
          Send a message
        </a>
        <a className="cta-secondary" href={ME.resumeUrl} target="_blank" rel="noreferrer">
          Download résumé
        </a>
      </div>
    </section>
  );
}
