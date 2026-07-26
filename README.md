# Bijoy Vellanickal — Realtor Website

Personal website for Bijoy Vellanickal, Sales Representative at RE/MAX Centre
City Realty Inc., London, Ontario.

**Stack:** one static `index.html` — no build step. Open the file in a browser
to preview.

## Quick start with Claude Code

1. Install Claude Code (see https://claude.com/claude-code) and the GitHub CLI.
2. Open a terminal in this folder and run `claude`.
3. Paste the contents of `PROMPT.md` as your first message.

Claude Code will handle git setup, GitHub repo creation, and deployment.

## Manual deploy (no Claude Code)

1. Create a repo on github.com and push this folder.
2. Repo Settings → Pages → Deploy from branch → main → root. Site goes live at
   `https://<your-username>.github.io/bijoy-vellanickal-website/`.
3. Optional custom domain: buy one (Namecheap/Cloudflare, ~$15/yr for .ca),
   add it under Settings → Pages, and set the DNS records they show you.

## Before going live

- [ ] Replace `AGENT_EMAIL` in index.html with Bijoy's email
- [ ] Add key-handover photos to `images/` and wire into the gallery
- [ ] Replace sample reviews with real client quotes
- [ ] Replace hotlinked headshot with a local image
