# Angular 19 Premium Twitter-like Starter

This is a premium-looking Angular 19 starter that mimics Threads/Twitter UI using Angular Material + Tailwind.

- Angular 19 (standalone components)
- Angular Material for polished controls
- TailwindCSS for layout & theme
- Mock posts included in `src/assets/mock-posts.json`

## Quick start

1. Node 18+ recommended
2. unzip, then:

```bash
npm install
npm start
```

3. The app expects a backend at /api. For quick local demo you can run a simple static server to serve mock JSON:

```bash
# Example: serve posts from src/assets via a tiny express or json-server
npx json-server --watch src/assets/mock-posts.json --routes routes.json --port 3000
# then change ApiBaseUrlInterceptor base to 'http://localhost:3000'
```

## Notes

- No node_modules in this zip. Run `npm install`.
- If you face zone.js peer dependency issues run: `npm install zone.js@~0.15.0`
