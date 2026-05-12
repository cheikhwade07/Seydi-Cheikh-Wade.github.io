import { ME } from '../../data/me';

export function Blurb() {
  return (
    <p className="hero-blurb">
      {ME.blurb.split('RAG pipelines')[0]}
      <strong>RAG pipelines</strong>
      {ME.blurb.split('RAG pipelines')[1]}
    </p>
  );
}
