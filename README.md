# B2B Frontend

A React + Vite based frontend project using TypeScript and TailwindCSS. The project is optimized for fast development with Vite and supports modern React features.

## Tech Stack

* React 19
* TypeScript
* Vite
* TailwindCSS
* React Router
* React Hook Form + Zod
* Framer Motion
* Three.js + Vanta
* Swiper

## Requirements

Install the following before running the project:

* Node.js **>= 18**
* npm **or** yarn

Check versions:

```
node -v
npm -v
```

## Project Setup

Clone the repository and install dependencies.

```
git clone <repo-url>
cd design
npm install
```

or if using yarn:

```
yarn
```

## Running Development Server

Start the local development server:

```
npm run dev
```

or

```
yarn dev
```

Vite will start a local server.
Default URL:

```
http://localhost:5173
```

Hot reload is enabled, so changes update instantly.

## Linting

Run ESLint:

```
npm run lint
```

## Building for Production

Create an optimized production build:

```
npm run build
```

This will:

1. Compile TypeScript using `tsc`
2. Generate the production build using `vite build`

The output files will be generated in:

```
/dist
```

## Preview Production Build Locally

To run the production build locally:

```
npm run preview
```

Default preview URL:

```
http://localhost:4173
```

## Deployment

The project generates static files inside the **dist** folder.
These can be deployed to any static hosting provider.

### Deploy on Vercel

Since `vercel.json` already exists in the project:

1. Install Vercel CLI

```
npm install -g vercel
```

2. Deploy

```
vercel
```

Vercel will detect the Vite project automatically.

Build command:

```
npm run build
```

Output directory:

```
dist
```

### Deploy on Netlify

Build settings:

```
Build command: npm run build
Publish directory: dist
```

### Deploy on any server (Nginx / Apache)

1. Run build

```
npm run build
```

2. Upload contents of the **dist** folder to the server.

Example structure after deploy:

```
/var/www/site
  ├── assets
  ├── index.html
```

Configure the server to serve `index.html` for SPA routing.

## Folder Structure

```
design
├── dist
├── node_modules
├── public
├── src
├── venv
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── vercel.json
├── update_json.py
└── README.md
```

## Scripts

```
npm run dev       → start development server
npm run build     → build production bundle
npm run preview   → preview production build
npm run lint      → run eslint
```

## Notes

* `dist/` is generated after build.
* `public/` contains static assets.
* `src/` contains application source code.
* TailwindCSS is configured via the Vite plugin.
* `vercel.json` handles deployment configuration for Vercel.

## License

Private project.


## guide for blogs 

please refer to the blog_guide.md file in the root directory