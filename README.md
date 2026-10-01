# simplifyco.com.au

Multi-page rebuild of the Simplify Co. website (previously a single `index.html`), built with [Eleventy](https://www.11ty.dev/). The output is plain static HTML, so Netlify Forms and hosting work as before.

## Pages

| URL | Source |
|-----|--------|
| `/` | `src/index.njk` — hero, client logos, community sign-up |
| `/services` | `src/services.njk` — the four offerings (`#organisation-design-training`, `#role-declutter`, `#ai-human-work-redesign`, `#organisation-design-consulting`) |
| `/about` | `src/about.njk` — our story, community sign-up |
| `/our-team` | `src/our-team.njk` — founders |
| `/contact` | `src/contact.njk` — contact form (Netlify form `contact`) |
| `/assessment` | `src/assessment.html` — copied through unchanged |

Shared pieces live in `src/_includes/`: `layouts/base.njk` (head, SEO/Open Graph tags), `partials/header.njk`, `partials/footer.njk`, `partials/community.njk`, `partials/cta.njk`. Navigation items are in `src/_data/site.json`; client logos in `src/_data/clients.json`.

## Commands

```bash
npm install
npm start        # dev server with live reload
npm run build    # outputs to _site/
netlify dev --dir _site   # emulates Netlify redirects locally
```

## Deploying

- **Git-connected:** build command `npm run build`, publish directory `_site` (set in `netlify.toml`). Leave the Netlify *Base directory* empty.
- **Manual (drag and drop):** run `npm run build` and upload the `_site` folder. It contains `_redirects`, `assessment.html`, `sitemap.xml` and `robots.txt`, so nothing is lost.

## Redirects

`src/_redirects` holds 301s for common aliases (`/team`, `/about-us`, `/contact-us`…). Old single-page anchors (`/#services`, `/#about`, `/#founders`, `/#contact`) can't be redirected server-side because browsers never send the `#` part, so a small script at the top of the home page forwards them to the new pages.

## Forms

Both forms keep their original Netlify names (`contact`, `community-signup`) and honeypot fields, so submission history and notifications carry over. After deploying, send a test submission through each one and check it appears under **Forms** in the Netlify dashboard.
