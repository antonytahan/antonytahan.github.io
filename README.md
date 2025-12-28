# Antony Tahan - Personal Website

Terminal-style personal website built with LiveTerm and Next.js.

## Local Development

```bash
yarn install
yarn dev
```

Visit http://localhost:3000

## Available Commands

Type these commands in the terminal interface:

- `help` - Show all available commands
- `about` - Learn about me
- `cv` or `resume` - View my CV
- `projects` - View my interactive media projects
- `sumfetch` - Display summary information
- `github` - Open my GitHub profile
- `linkedin` - Open my LinkedIn profile
- `email` - Send me an email
- `clear` - Clear the terminal

## Deployment to GitHub Pages

### Build the site

```bash
yarn build
```

### Deploy

The site is configured for static export. To deploy to GitHub Pages:

1. The build creates static files in `.next/server/pages/`
2. For GitHub Pages, you can either:
   - Use the `.next` output directly
   - Or configure GitHub Actions for automatic deployment

### Manual Deployment Option

```bash
# Build the site
yarn build

# Commit and push
git add .
git commit -m "Update site"
git push origin main
```

Then configure GitHub Pages to deploy from the `main` branch.

## Project Structure

- `/src/components` - React components
- `/src/pages` - Next.js pages
- `/src/utils/bin` - Terminal commands
- `/public` - Static assets (including CV)
- `/config.json` - Site configuration

## Customization

Edit `config.json` to update:
- Personal information
- Social links
- Color themes
- Resume URL

## Links

- **Main Site**: https://antonytahan.github.io
- **Interactive Media Projects**: https://antonytahan.github.io/interactive-media-project/
