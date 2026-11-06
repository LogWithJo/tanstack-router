# TanStack Router Learning Project

## Purpose

This project is a hands-on learning space for exploring the fundamentals of TanStack Router and its features while building a small full-stack application. The frontend uses TanStack Start and file-based routing, and the backend provides sample API data with JSON Server.

The goal is to understand how routes, navigation, layouts, and data loading work together, then apply those ideas in a practical application.

## Project structure

- **Frontend/** — TanStack Start and React application. Routes live in `Frontend/src/routes`.
- **Backend/** — JSON Server API backed by `Backend/db.json`.

## What I’m learning

- **File-based routing** — organizing pages as route files and understanding how routes are generated.
- **Nested routes and layouts** — sharing UI across related pages.
- **Navigation** — linking between pages and handling route parameters.
- **Search parameters** — reading and validating URL query state.
- **Route data loading** — loading data before a route renders and using loader results.
- **Loading and error states** — giving users feedback while data is loading or when requests fail.
- **Server functions and API routes** — exploring server-side capabilities provided by TanStack Start.
- **Frontend and backend integration** — requesting sample data from the JSON Server API.

## Getting started

Install dependencies in each application folder:

```bash
cd Frontend && pnpm install
cd ../Backend && pnpm install
```

Start the backend API in one terminal:

```bash
cd Backend
pnpm start
```

The API serves data from `Backend/db.json` on port `3002` by default. Set `PORT` to choose another port.

Start the frontend development server in another terminal:

```bash
cd Frontend
pnpm dev
```

The frontend development server runs on port `3000` by default.

## Useful commands

Run these from the relevant folder:

| Folder | Command | Purpose |
| --- | --- | --- |
| `Frontend/` | `pnpm dev` | Start the frontend development server |
| `Frontend/` | `pnpm build` | Build the frontend for production |
| `Frontend/` | `pnpm lint` | Check frontend code with ESLint |
| `Frontend/` | `pnpm check` | Check formatting with Prettier |
| `Backend/` | `pnpm start` | Start the JSON Server API |

## Learning goal

By experimenting with the frontend and backend together, I want to build a solid foundation in TanStack Router, understand its core features in practice, and learn how a routed application can work with server-provided data.
