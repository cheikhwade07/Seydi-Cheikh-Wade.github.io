import { useState } from 'react';
import { useTheme } from '../theme/useTheme';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export function TopBar() {
  const { mode, isDark, toggleMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="status-pill">
        <span className="status-dot" aria-hidden="true" />
        Available for summer 2026
      </div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="top-actions">
        <button
          className="mode-toggle"
          type="button"
          aria-pressed={!isDark}
          aria-label={`Switch to ${isDark ? 'daylight' : 'midnight'} mode`}
          onClick={toggleMode}
        >
          <span aria-hidden="true">{isDark ? '☾' : '☼'}</span>
          {mode === 'dark' ? 'Midnight' : 'Daylight'}
        </button>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} tabIndex={open ? undefined : -1} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
