# Afrihost Front End Assessment

A Vue 3 recipe discovery app with dynamic routing, state management, and a clean UI built with Tailwind CSS v4.

## Features

- **Home** — Greeting with time-based messaging, featured recipe card, and recipe list
- **Recipes** — Browse all recipes with detailed views including ingredients, instructions, and nutritional info
- **Search** — Search through available recipes
- **Notifications** — Notification panel
- **Profile** — User profile page
- **Responsive Design** — Mobile-first layout with a persistent bottom navigation bar

## Tech Stack

- **Vue 3** — UI framework with Options API
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **Pinia** — Global state management for recipes
- **Vue Router** — Client-side routing
- **Axios** — HTTP client for API requests
- **Lucide Vue** — Icon library

## API

The dev server proxies `/api` requests to `https://www.afrihost.com/assessments/2603-fe-mid`, so all recipe data is fetched from:

```
GET /api/recipes.json       → list of all recipes
GET /api/recipes/{id}.json  → single recipe details
```

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (default: http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images, fonts, icons
├── components/      # Reusable Vue components
│   ├── BottomBar.vue
│   ├── FeaturedCard.vue
│   ├── RecipesCard.vue
│   └── RecipesOverview.vue
├── pages/           # Route-level page components
│   ├── home.vue
│   ├── recipes.vue
│   ├── search.vue
│   ├── notifications.vue
│   └── profile.vue
├── router/          # Vue Router configuration
├── stores/          # Pinia stores
├── App.vue          # Root component
├── main.js          # App entry point
└── style.css        # Global styles
