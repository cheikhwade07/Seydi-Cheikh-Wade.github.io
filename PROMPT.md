# Claude Code prompt — portfolio handoff

Copy everything inside the fenced block below and paste it into Claude Code (run `claude` inside your local clone of `cheikhwade07/Seydi-Cheikh-Wade.github.io`).

---

```
I'm replacing my GitHub Pages portfolio with a new single-file build. The new files are sitting in this repo's root: `index.html`, `portrait.png`, `HANDOFF.md`, `PROMPT.md`, and (added by me) `cv.pdf`.

Note: `portrait.png` is the source portrait. It's ALREADY inlined into `index.html` as base64, so the site will render without it — but keep `portrait.png` in the repo root anyway. It serves as the source asset (so future edits can swap it in cleanly) and as the OpenGraph preview image.

Please do the following, in order:

1. Read `HANDOFF.md` for full context.

2. Verify the new `index.html` exists at the repo root and is ~1.9 MB (it's a self-contained bundled build with inlined assets — do NOT try to "clean it up" or split it apart).

3. Delete the leftover HTML5 UP template files that are no longer used:
   - `assets/` (entire directory)
   - `images/` (entire directory)
   - `elements.html`
   - `generic.html`

   Do NOT delete: `LICENSE.txt`, `README.txt`, `index.html`, `cv.pdf`, `HANDOFF.md`, `PROMPT.md`, or anything under `.git/` or `.github/`.

4. Update `README.txt` (or replace it with a short `README.md`) so it briefly describes the site:
   > # seydi-cheikh-wade.github.io
   > Personal portfolio for Seydi Cheikh Wade — built as a single self-contained HTML file.
   > Edit `index.html` directly to update content. See HANDOFF.md for details.

5. Confirm `cv.pdf` AND `portrait.png` are both present at the repo root. If either is missing, stop and tell me so I can add it before we commit.

6. Stage everything, commit with the message:
   `redesign: heist portfolio (single-file build)`

7. Push to `origin main`.

8. After pushing, give me the GitHub Pages deploy URL (it's `https://seydi-cheikh-wade.github.io/`) and remind me to check in ~1 min in an incognito window.

Do NOT modify the contents of `index.html`. Do NOT install dependencies. Do NOT create a build pipeline. The file is intentionally a single bundled artifact.
```

---

## If Claude Code asks anything

- **"Should I keep the old assets folder as a backup?"** → No, delete it. Git history is the backup.
- **"Want me to set up a build step / framework?"** → No, the single-file build is intentional.
- **"`cv.pdf` is missing"** → Add your CV to the repo root, then re-run.
- **"Want me to format `index.html`?"** → No, leave it as-is.
