import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import './legacy-app/tweaks-panel.jsx';
import './legacy-app/portfolio-data.js';
import './legacy-app/portfolio-heist.jsx';
import './legacy-app/portfolio-terminal.jsx';
import './legacy-app/portfolio-editorial.jsx';

const TWEAK_DEFAULTS = {
  theme: 'heist',
  heistAccent: '#22D3EE',
  terminalAccent: '#7FFFA8',
  editorialAccent: '#B2542A',
  showGithub: true,
  showNow: true,
};

const {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakSelect,
  TweakColor,
  TweakToggle,
} = window;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const themeMeta = {
    heist: { label: 'Midnight', accentKey: 'heistAccent', accentOpts: ['#22D3EE', '#67E8F9', '#4FB3FF', '#3DBCEB', '#06B6D4'] },
    terminal: { label: 'Terminal', accentKey: 'terminalAccent', accentOpts: ['#7FFFA8', '#79C0FF', '#FFB627', '#FF7AB6'] },
    editorial: { label: 'Editorial', accentKey: 'editorialAccent', accentOpts: ['#B2542A', '#1F4E5F', '#7A5AE0', '#1B998B'] },
  };
  const cur = themeMeta[t.theme] || themeMeta.heist;
  const accent = t[cur.accentKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [t.theme]);

  let Theme;
  if (t.theme === 'terminal') Theme = window.TerminalTheme;
  else if (t.theme === 'editorial') Theme = window.EditorialTheme;
  else Theme = window.HeistTheme;

  return (
    <>
      <Theme accent={accent} showGithub={t.showGithub} showNow={t.showNow} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Direction" />
        <TweakSelect
          label="Style"
          value={t.theme}
          options={[
            { value: 'heist', label: 'Midnight · cinematic blue' },
            { value: 'terminal', label: 'Terminal · dev console' },
            { value: 'editorial', label: 'Editorial · minimal serif' },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />

        <TweakSection label={`${cur.label} accent`} />
        <TweakColor
          label="Accent"
          value={accent}
          options={cur.accentOpts}
          onChange={(v) => setTweak(cur.accentKey, v)}
        />

        <TweakSection label="Sections" />
        <TweakToggle label="Show 'Currently'" value={t.showNow} onChange={(v) => setTweak('showNow', v)} />
        <TweakToggle label="Show GitHub grid" value={t.showGithub} onChange={(v) => setTweak('showGithub', v)} />
      </TweaksPanel>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
