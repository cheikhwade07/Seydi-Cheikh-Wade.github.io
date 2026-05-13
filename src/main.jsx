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
  showGithub: true,
  showNow: false,
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

  const accent = t.heistAccent;

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

        <TweakSection label="Heist accent" />
        <TweakColor
          label="Accent"
          value={accent}
          options={['#22D3EE', '#67E8F9', '#4FB3FF', '#3DBCEB', '#06B6D4']}
          onChange={(v) => setTweak('heistAccent', v)}
        />

        <TweakSection label="Sections" />
        <TweakToggle label="Show GitHub grid" value={t.showGithub} onChange={(v) => setTweak('showGithub', v)} />
      </TweaksPanel>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
