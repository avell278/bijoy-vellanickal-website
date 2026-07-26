# Bijoy Vellanickal — Realtor Website

Personal website for Bijoy Vellanickal, Sales Representative at RE/MAX Centre
City Realty Inc., London, Ontario.

**Stack:** one static `index.html` — no build step. Open the file in a browser
to preview.

## Editing

Everything lives in `index.html` — HTML, CSS, and a small script at the bottom.
Colors are CSS variables in `:root`. Images go in `images/`.

## Deploy

1. Create a repo on github.com and push this folder.
2. Repo Settings → Pages → Deploy from branch → main → root. Site goes live at
   `https://<your-username>.github.io/bijoy-vellanickal-website/`.
3. Optional custom domain: buy one (Namecheap/Cloudflare, ~$15/yr for .ca),
   add it under Settings → Pages, and set the DNS records they show you.

## Before going live

- [ ] Replace `AGENT_EMAIL` in index.html with Bijoy's email (both forms use it)
- [ ] Add key-handover photos to `images/` and wire into the gallery
      (six placeholder slots are waiting)
- [ ] Replace sample reviews with real client quotes
- [ ] Replace hotlinked headshot with a local image
- [x] Recognition section with award graphics
