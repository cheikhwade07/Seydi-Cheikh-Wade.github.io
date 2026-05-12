import { ME } from '../../data/me';

const rows = [
  ['Role', ME.role],
  ['Location', ME.location],
  ['Email', ME.email],
];

export function Meta() {
  return (
    <div className="meta-grid" aria-label="Profile details">
      {rows.map(([label, value]) => (
        <div className="meta-card" key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
      <div className="meta-card meta-links">
        <span>Links</span>
        <strong>
          <a href={ME.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </strong>
      </div>
    </div>
  );
}
