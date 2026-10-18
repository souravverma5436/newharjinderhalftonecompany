# Deployment Guide

## Run Locally

Double-click:

```text
run-localhost.bat
```

Or run:

```bash
npm install
npm run dev
```

Local website:

```text
http://localhost:5173/
```

## Deploy Code To GitHub

1. Create a new empty GitHub repository.
2. Double-click:

```text
deploy-to-github.bat
```

3. Paste your GitHub repository URL when asked.

Example:

```text
https://github.com/your-username/new-harjinder-halftone-company.git
```

The BAT file will install dependencies if needed, run the production build, initialize Git if needed, commit the project, add the GitHub remote, and push to the `main` branch.

## Deploy To Vercel

1. Go to Vercel and import the GitHub repository.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add these environment variables in Vercel Project Settings:

```text
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_CANONICAL_URL
```

Use the values from your local `.env` file. Do not commit `.env`; it is intentionally ignored by Git.

## Current EmailJS Field Names

```text
full_name
company_name
phone_number
email
message
```
