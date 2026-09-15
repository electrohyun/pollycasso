# AGENTS.md

> **TL;DR** Complete a frontend preview that runs without a backend. Mock HTTP
> with MSW, reproduce Socket.IO behavior with Smocket, and verify every change
> with the build and lint commands.

This file defines working rules for agents and developers in the Pollycasso
repository. Start with [README.md](README.md) for the project overview and setup
instructions.

## Project goal

- Complete a frontend preview of Pollycasso's core experience that can be used
  without a backend.
- Prioritize the main user journey in this order: login, main lobby, room entry,
  theme selection, drawing, evaluation, and results.
- Mock HTTP requests with MSW.
- Reproduce Socket.IO behavior with Smocket. The custom implementation in
  `src/shared/api/socket/mockSocket.ts` is temporary code from the earlier demo.
  Before extending it, check whether the behavior should move to Smocket.
- Preserve the separation between the `/waiting`, `/game`, `/friends`, and
  `/chat` namespaces.
- Do not place temporary responses or simulated server behavior inside UI
  components. Keep HTTP scenarios in `src/mocks/` and the socket connection
  boundary in `src/shared/api/socket/`.

## Language

- Write issue titles and bodies, Pull Request titles and bodies, commit
  messages, and project documentation in Korean.
- Write code identifiers and branch descriptions in English.

## Issues, branches, commits, and Pull Requests

- Create an issue with the goal and completion criteria before starting a
  feature or other meaningful change.
- Keep one primary purpose in each branch and Pull Request.
- Name branches as `<type>/<short-kebab-description>/#<issue-number>`. Example:
  `feat/mock-login-flow/#12`.
- Write commit messages and Pull Request titles as
  `<type>: (#<issue-number>) <Korean description>`. Example:
  `feat: (#12) 모킹 환경의 로그인 흐름 구현`.
- Use the type that describes the work: `feat`, `fix`, `publish`, `refactor`,
  `docs`, or `chore`.
- In the Pull Request body, explain why the change is needed, summarize the
  changes, describe how they were verified, and link the issue with
  `Closes #N`.
- Attach a screenshot or recording when the visible UI changes.
- Commit and push only when the user explicitly asks for them.

## Implementation rules

- Preserve the existing Feature-Sliced Design structure and the `@/` path
  alias.
- Treat the absence of a real backend as the normal preview environment. Do not
  solve preview requirements by adding a separate Node server.
- Select between the real Socket.IO client and the mock implementation through
  the connection boundary in `src/shared/api/socket/io.ts`.
- Make changes to Smocket itself in the Smocket repository. Keep only product
  scenarios and integration code in this repository.
- Preserve the README link to the original repository, where earlier issues,
  Pull Requests, and code reviews remain available.

## Verification

- Run `pnpm lint` and `pnpm build` before considering work complete.
- When the UI changes, verify it in the relevant preview flow.
- When mock behavior changes, run the affected user journey from the beginning
  in mock mode.
- Update the README when setup commands or environment variables change.
