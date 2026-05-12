export function SkillCard({ group, items }: { group: string; items: readonly string[] }) {
  return (
    <article className="skill-card surface-card">
      <h3>// {group}</h3>
      <div>
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </article>
  );
}
