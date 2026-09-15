# AGENTS.md

> **TL;DR** Complete an interactive frontend preview. Mock HTTP with MSW,
> reproduce Socket.IO behavior with smocket, and verify every change with the
> repository quality commands.

This file defines working rules for agents and developers in the Pollycasso
repository. Start with [README.md](README.md) for the project overview and setup
instructions.

## Project goal

- Complete a frontend preview of Pollycasso's core experience using controlled
  mock scenarios.
- Prioritize the main user journey in this order: login, main lobby, room entry,
  theme selection, drawing, evaluation, and results.
- Mock HTTP requests with MSW.
- Reproduce Socket.IO behavior with smocket. The custom implementation in
  `src/shared/api/socket/mockSocket.ts` is temporary code from the earlier demo.
  Before extending it, check whether the behavior should move to smocket.
- Preserve the separation between the `/waiting`, `/game`, `/friends`, and
  `/chat` namespaces.
- Do not place temporary responses or simulated server behavior inside UI
  components. Keep HTTP scenarios in `src/mocks/` and the socket connection
  boundary in `src/shared/api/socket/`.

## Language

- Write issue titles and bodies, Pull Request titles and bodies, commit
  messages, and user-facing project documentation in Korean.
- Keep this `AGENTS.md` file in English.
- Write code identifiers and branch descriptions in English.

## Issues, branches, commits, and Pull Requests

- Create an issue with the goal and completion criteria before starting a
  feature or other meaningful change.
- Title issues as `[Type] <Korean description>`. Use `[Feat]`, `[Bug]`,
  `[Publish]`, `[Refactor]`, `[Docs]`, or `[Chore]` to match the issue template
  and label. Example: `[Feat] 모킹 환경의 로그인 흐름 구현`.
- Keep one primary purpose in each branch and Pull Request.
- Epic issues group related sub-issues and do not have their own Pull Request.
- Each non-Epic issue must map to exactly one Pull Request, and each Pull
  Request must close exactly one non-Epic issue.
- An issue may have multiple commits. Include that issue's number in every
  commit message.
- If work grows beyond the issue's completion criteria, create another issue
  instead of adding the extra scope to the same Pull Request.
- Name branches as `<type>/<short-kebab-description>/#<issue-number>`. Example:
  `feat/mock-login-flow/#12`.
- Start branches from `main` unless the user explicitly requests a stacked Pull
  Request. A stacked Pull Request must target its parent branch.
- Write commit messages and Pull Request titles as
  `<type>: (#<issue-number>) <Korean description>`. Example:
  `feat: (#12) 모킹 환경의 로그인 흐름 구현`.
- Use the type that describes the work: `feat`, `fix`, `publish`, `refactor`,
  `docs`, or `chore`.
- CI applies the matching work label from the Pull Request title prefix:
  `feat:` to `✨ feature`, `fix:` to `🐞 bug`, `publish:` to `🎨 publish`,
  `refactor:` to `🔨 refactor`, `docs:` to `📘 docs`, and `chore:` to
  `🏠 chore`.
- In the Pull Request body, explain why the change is needed, summarize the
  changes, describe how they were verified, and link the issue with
  `Closes #N`.
- Attach a screenshot or recording when the visible UI changes.
- Assign every issue and Pull Request to `electrohyun`.
- Commit and push only when the user explicitly asks for them.

## Tracking

- Maintain one milestone for each Epic, using the same title without the
  `[Epic]` prefix.
- Do not assign a milestone to the Epic issue itself.
- Assign every non-Epic issue and its Pull Request to the matching milestone.
- Add issues to the `Pollycasso` Project. Do not add Pull Requests to the
  Project.

## Implementation rules

- Preserve the existing Feature-Sliced Design structure and the `@/` path
  alias.
- Keep preview scenarios within the existing mocking boundaries.
- Select between the real Socket.IO client and the mock implementation through
  the connection boundary in `src/shared/api/socket/io.ts`.
- Make changes to smocket itself in the smocket repository. Keep only product
  scenarios and integration code in this repository.
- Preserve the README link to the original repository, where earlier issues,
  Pull Requests, and code reviews remain available.

## Verification

- Run `pnpm lint`, `pnpm format:check`, `pnpm test`, and `pnpm build` before
  considering work complete.
- When the UI changes, verify it in the relevant preview flow.
- When mock behavior changes, run the affected user journey from the beginning
  in mock mode.
- Update the README when setup commands or environment variables change.
