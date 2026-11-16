# Riyaj Utensils Shop (Riyaj Bhada Pasal)

The website for my family's kitchenware and utensils business in Hetauda, Nepal. It has a product catalog, Google sign-in, and an AI chatbot that answers customer questions from the shop's catalog.

**Live site:** [riyaj-utensils-shop.vercel.app](https://riyaj-utensils-shop.vercel.app) · [riyajbhadapasal.com.np](https://riyajbhadapasal.com.np)

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisyUI-5-5A0EF8?logo=daisyui&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth.js-Google%20OAuth-4285F4?logo=google&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=nodedotjs&logoColor=white)
![Vertex AI](https://img.shields.io/badge/Vertex%20AI-Gemini%202.0%20Flash-4285F4?logo=googlecloud&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

## Overview

Riyaj Bhada Pasal is a family-run shop that sells copper, brass, bronze, steel and other kitchenware, as well as religious brass statues. This project gives the shop an online presence: customers can browse product categories, read about the business, sign in with Google, and ask an AI assistant about the products.

The project has two parts:

- **Frontend:** a Next.js (App Router) site deployed on Vercel.
- **Backend:** a small Express server that gives the chatbot its answers. On startup it reads the shop's product catalog PDF, and it uses that text as context for Google's Gemini model on Vertex AI.

## Key features

- **AI shopping assistant.** A floating chat widget on every page sends questions to `/api/chat`. The backend combines the question with up to 30,000 characters of text from `riyaj_catalog.pdf` and asks Gemini 2.0 Flash to answer as the shop's assistant.
- **Google sign-in.** NextAuth.js with the Google provider. Signed-in users see an avatar menu with a sign-out option.
- **Product catalog layout.** A Products page with ten categories: Steel, Copper, Brass, Bronze, Aluminium, Plastic, Iron, Ceramic & Wood, Home Utensils and Silver-Plated Items. Each category has its own route.
- **Landing page.** A hero banner, a product search bar, a featured Brass Shiva Statue, and a "Best Selling Items" section.
- **About Us and Contact pages.** The family story with a photo carousel, and a contact form layout.
- **Responsive navigation.** A pill-style desktop nav with a Products dropdown, and a full-screen mobile menu.

## How it works

```
Browser (Next.js on Vercel)
   │  Chatbot widget: POST { message }
   ▼
Express backend (backend/server.js)
   │  On startup: pdf-parse reads riyaj_catalog.pdf into memory
   │  Per request: prompt = catalog text + user question
   ▼
Vertex AI: gemini-2.0-flash-001 (us-central1)
   │  streamed response is collected into one reply
   ▼
{ reply } back to the widget
```

The backend's CORS settings only allow `POST` requests from the production frontend origin. The chatbot's API URL is set in `frontend/app/utils/chatbot.js`.

## Tech stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js 15 (App Router), React 19, Tailwind CSS 4, daisyUI 5, Headless UI, Heroicons |
| Auth | NextAuth.js (Google OAuth) |
| Backend | Node.js, Express, `pdf-parse`, `dotenv`, `cors` |
| AI | Google Cloud Vertex AI SDK, Gemini 2.0 Flash |
| Hosting | Vercel (frontend) |

## Project structure

```
RiyajUtensilsShop/
├── frontend/                      Next.js app
│   ├── app/                       App Router pages (home, products, categories, aboutus, contacts, offers)
│   │   ├── layout.js              Header + Chatbot + Footer, wrapped in SessionProvider
│   │   └── utils/chatbot.js       chatbot API client
│   ├── components/Home/           Header, Landing, Chatbot, Footer
│   ├── pages/api/auth/            NextAuth route ([...nextauth].js)
│   └── public/Images/             product and shop photos
└── backend/
    ├── server.js                  Express + Vertex AI chatbot API
    └── riyaj_catalog.pdf          product catalog used as chatbot context
```

## Getting started

### Prerequisites

- Node.js 18 or later and npm
- A Google OAuth client (for sign-in)
- A Google Cloud project with Vertex AI enabled (for the chatbot)

### Frontend

Create `frontend/.env.local`:

```bash
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
```

```bash
cd frontend
npm install
npm run dev          # http://localhost:3000
```

> `frontend/package.json` lists a local Firebase Data Connect package (`@firebasegen/default-connector`) whose folder is not in the repo. If `npm install` fails on it, remove that line. The app code does not import it.

### Backend (chatbot)

The backend signs in to Vertex AI with Google Cloud Application Default Credentials. Either run `gcloud auth application-default login`, or set `GOOGLE_APPLICATION_CREDENTIALS` to the path of a service account key. The project ID, region and model are set in `server.js`.

```bash
cd backend
npm install
npm start            # listens on PORT (default 5000)
```

For local testing, point `frontend/app/utils/chatbot.js` at `http://localhost:5000/api/chat`, and add `http://localhost:3000` to the CORS origin in `server.js`.

## Roadmap

- Replace the placeholder product cards on the category pages with real products and photos.
- Connect the landing page search and the contact form.
- Build out the Offers page.

## Author

**Riyaj Chaulagain**, Computer Science student at Southeastern Louisiana University, from Hetauda, Nepal

- GitHub: [riyajclgn123](https://github.com/riyajclgn123)
- Portfolio: [riyajchaulagain.com.np](https://riyajchaulagain.com.np)
