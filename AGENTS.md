# Repository Guidelines

## Project Structure

This is a small, dependency-light static portfolio site.

- `index.html` contains the page structure and portfolio content.
- `styles.css` contains the visual system, responsive layout, and component styles.
- `script.js` contains small progressive-enhancement behaviors (navigation, copy-to-clipboard, and reveal effects).
- `favicon.svg` is the site mark.
- `FDE_CV_EN.pdf` is the source CV and is linked from the site as the downloadable CV.

Keep content changes close to the relevant section in `index.html`. Avoid adding a framework or build step unless the site’s needs materially change.

## Development Commands

Run the local server from the repository root:

```bash
npm run dev
```

Then open `http://localhost:4173`. For a quick syntax check, run:

```bash
npm test
```

The test command validates `script.js` with Node; visual changes should also be checked at mobile and desktop widths in a browser.

## Coding Style

Use two spaces in HTML, CSS, and JavaScript. Prefer semantic HTML, accessible labels, and existing CSS custom properties over one-off values. Use kebab-case for CSS classes (`project-card`) and descriptive camelCase for JavaScript variables and functions. Keep the palette, spacing scale, and type hierarchy centralized in `:root` in `styles.css`.

## Testing Guidelines

There is no test framework because this is a static site. Before submitting changes, run `npm test`, load the page locally, verify navigation anchors, test the email copy button, and confirm that the CV, mail, GitHub, and LinkedIn links work.

## Commits & Pull Requests

There is no existing commit history to infer a repository-specific convention from. Use short imperative messages such as `Add project timeline` or `Refine mobile navigation`. Pull requests should explain the visible change, include screenshots for layout work, and note any content or link updates.

The `staging` branch is the project staging environment. Integrate and verify website changes there before promoting them to `main`. Keep `staging` deployable and use it for final responsive, link, and metadata checks.

## Content & Privacy

Treat contact details and professional history as intentional public content. Do not add private addresses, credentials, API keys, or unverified claims. Keep external profile URLs current when editing the contact section.
