export const CONTRIB = (() => {
  let seed = 1337;
  const rnd = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  return Array.from({ length: 52 }, (_, week) =>
    Array.from({ length: 7 }, (_, day) => {
      const base = 0.25 + 0.4 * Math.sin((week + day * 0.3) / 4);
      const r = rnd();
      if (r < 0.18) return 0;
      return Math.min(4, Math.floor(r * base * 4));
    }),
  );
})();
