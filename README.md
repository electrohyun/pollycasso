# Pollycasso

> 🚧 This project is currently under construction.

Pollycasso is a real-time drawing battle game for 3–6 players in a shared room.
Each player joins a room, draws an outfit on a canvas based on the selected
theme, and then rates other entries while receiving ratings on their own. The
player or team with the highest score wins.

Originally developed as the 10th project by
[Modern Agile](https://github.com/modern-agile-team), Pollycasso is being adapted
into a frontend-only preview demo with
[Smocket](https://github.com/electrohyun/smocket), a Socket.IO mocking library,
as of September 2026.

## Development goals

- Reproduce the required HTTP and Socket.IO scenarios with mocks
- Complete the main drawing-game flow
- Provide a straightforward local development and deployment setup
- Document integration decisions and supported scenarios

## Tech stack

- React 19 and TypeScript
- Vite
- Socket.IO Client
- MSW
- TanStack Query and Zustand
- React Konva
- Tailwind CSS and Framer Motion
- Storybook and Vitest

## Getting started

### Requirements

- Node.js
- pnpm

### Run locally

```bash
pnpm install
pnpm dev
```

### Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Type-check and build the application |
| `pnpm lint` | Run ESLint |
| `pnpm storybook` | Start Storybook |
| `pnpm build-storybook` | Build Storybook |

## Previous development records

- [Issues](https://github.com/modern-agile-team/10term-pollycasso-front/issues)
- [Pull requests and code reviews](https://github.com/modern-agile-team/10term-pollycasso-front/pulls)
