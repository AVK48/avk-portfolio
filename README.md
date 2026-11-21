# AVK Portfolio

Personal portfolio for AVK — AI Engineer | LLMs | RAG | Machine Learning.

## Run locally
1. Install Node.js (LTS): https://nodejs.org/
2. Run `npm install`
3. Run `npm run dev`
4. Open the local URL printed by Vite.

## Build
`npm run build` creates the production site in `dist/`.

## Personalize
Edit the `profile` object in `src/main.jsx`:
- Add verified LinkedIn URL and public contact email.
- Add resume PDF at `public/resume.pdf`, then set `resume: "/resume.pdf"`.
- Verify project repository URLs, project status and descriptions.
- Add screenshots and demos only for work you can demonstrate.

## Deployment
The GitHub Actions workflow deploys from the `main` branch to GitHub Pages.
Expected project URL: https://avk48.github.io/avk-portfolio/

No paid API or backend is required.