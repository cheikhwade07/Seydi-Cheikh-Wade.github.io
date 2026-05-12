# Portfolio Handoff — Seydi Cheikh Wade

This package replaces the current `index.html` on `cheikhwade07/Seydi-Cheikh-Wade.github.io` with a new self-contained portfolio. Existing repo URL stays the same; the site updates within ~1 min of pushing to `main`.

---

## What's in this folder

| File | Purpose |
|---|---|
| `index.html` | **The entire site.** Single self-contained file — all CSS, JS, fonts, and the portrait image are inlined. No dependencies, no build step. |
| `HANDOFF.md` | This file — human-readable instructions. |
| `PROMPT.md` | Copy-paste prompt for Claude Code (or any AI assistant) to execute the file ops + commit + push. |

That's it. No `/assets`, no `/dist`, no `package.json`. One file does everything.

---

## What this replaces

In your repo (`cheikhwade07/Seydi-Cheikh-Wade.github.io`), the current state is:

```
LICENSE.txt          ← keep
README.txt           ← keep (or update)
assets/              ← old HTML5 UP template CSS/JS — delete (no longer used)
images/              ← old template demo images — delete
elements.html        ← old template demo page — delete
generic.html         ← old template demo page — delete
index.html           ← REPLACE with the new one in this folder
```

After the swap, your repo should look like:

```
LICENSE.txt
README.txt
index.html           ← new portfolio (~1.9 MB, single file)
cv.pdf               ← add this yourself (see "Résumé" below)
```

---

## How to do the swap

### Option A — Claude Code (recommended)
1. `cd` into your local clone of the repo.
2. Drop `index.html`, `HANDOFF.md`, and `PROMPT.md` into the repo root.
3. Add `cv.pdf` to the repo root (your CV file).
4. Run `claude` and paste the contents of `PROMPT.md`. Claude Code will do the file ops, commit, and push.

### Option B — GitHub web UI (no Claude Code needed)
1. Go to https://github.com/cheikhwade07/Seydi-Cheikh-Wade.github.io
2. Delete `assets/`, `images/`, `elements.html`, `generic.html` (open each → Delete file → Commit).
3. Click `index.html` → pencil icon (Edit) → **delete all contents** → paste the contents of the new `index.html` from this folder → Commit.
4. Click `Add file → Upload files` → drop `cv.pdf` → Commit.
5. Wait ~1 min, refresh `https://seydi-cheikh-wade.github.io/`.

### Option C — Local git (terminal)
```bash
cd /path/to/Seydi-Cheikh-Wade.github.io
rm -rf assets images elements.html generic.html
cp /path/to/handoff/index.html ./index.html
cp /path/to/your/cv.pdf ./cv.pdf       # add your CV
git add -A
git commit -m "Redesign portfolio — heist edition (single-file build)"
git push origin main
```

---

## About the Résumé link

The new `index.html` links to `cv.pdf` at the site root (i.e. `https://seydi-cheikh-wade.github.io/cv.pdf`). Put a file named exactly `cv.pdf` in the repo root and the link works.

If you'd rather name it differently (e.g. `Seydi-Wade-Resume.pdf`), open `index.html` in any text editor, find `cv.pdf`, and replace both occurrences with your filename.

---

## Verifying it deploys

After pushing:
1. Go to https://github.com/cheikhwade07/Seydi-Cheikh-Wade.github.io/actions — the `pages-build-deployment` workflow should run and turn green within a minute.
2. Visit https://seydi-cheikh-wade.github.io/ in a private window (to bypass cache).
3. You should see: dark "Midnight" hero by default, your portrait top-right, "Seydi Cheikh wade." in giant italic type, project cards below, mode toggle in top-right that flips to "Daylight" (sun + lighter blue).

If it shows the old HTML5 UP template instead, the push didn't replace `index.html` — try again.

---

## Editing later

The site is one HTML file — you can edit it directly in GitHub's web UI for small text changes (project descriptions, contact links, etc). Look for:

- `const ME = {` near the top of the inline scripts — name, email, github, linkedin, resume URL
- `const PROJECTS = [` — the project cards (title, blurb, stack, repo/live URLs)
- `const SKILLS = [` — the skills grid

For larger redesigns, come back to this workspace.
