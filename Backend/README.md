# TanStack Query

## Purpose

This project is a hands-on learning space for exploring the fundamentals of TanStack Router and understanding how its features help build modern, type-safe React applications. I am using small examples and experiments to learn how routes are organized, how users move between pages, and how route-specific data and behavior fit together.

The repository currently includes a lightweight JSON Server setup that can provide sample API data while I practice connecting application routes to backend responses.

## What I’m learning

- **Route definitions and organization** — creating routes and structuring an application around its pages.
- **Nested layouts** — sharing UI between related routes and rendering child pages in the right place.
- **Navigation** — linking between pages and handling route parameters.
- **Search parameters** — reading and updating URL query state in a type-safe way.
- **Data loading** — loading route data and understanding how it relates to navigation.
- **Pending and error states** — showing useful feedback while a route loads or when something goes wrong.
- **Route validation** — keeping route parameters and search state predictable.
- **Not-found handling** — responding when a requested route or resource does not exist.

## Development setup

Install dependencies, then start the sample JSON Server API:

```bash
pnpm install
pnpm start
```

The API serves data from `db.json` on port `3002` by default. Set the `PORT` environment variable to use a different port.

## Learning goal

By working through these concepts, I want to build a clear foundation in TanStack Router, understand its core features through practice, and be able to apply them when building a complete application.
