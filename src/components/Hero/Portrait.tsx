import { ME } from '../../data/me';
import { useTheme } from '../../theme/useTheme';
import { Moon } from './Moon';
import { Sun } from './Sun';

export function Portrait() {
  const { isDark } = useTheme();

  return (
    <aside className="portrait-card" aria-label="Portrait and quick profile">
      <div className="portrait-orbit" aria-hidden="true">
        {isDark ? <Moon /> : <Sun />}
      </div>
      <picture className="portrait-frame">
        <img src="/portrait.png" alt={ME.name} width="640" height="640" loading="eager" fetchPriority="high" />
      </picture>
      <div className="portrait-meta">
        <span>{ME.location}</span>
        <span>{ME.role}</span>
      </div>
    </aside>
  );
}
