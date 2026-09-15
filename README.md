# Pollycasso

<div align="center">
  <img width="1920" height="640" alt="Pollycasso" src="https://github.com/user-attachments/assets/36710129-6608-4cec-b96f-754ae3292e7d" />
</div>

> 🚧 현재 공사 중인 프로젝트입니다.

Pollycasso는 3~6명의 플레이어가 한 방에서 진행하는 실시간 드로잉 배틀
게임입니다. 각 플레이어는 방에 접속해 선택된 주제에 따라 캔버스에 옷을 그리고,
다른 사람의 그림을 평가하는 동시에 자신의 그림도 평가받습니다. 가장 높은 점수를
얻은 플레이어 또는 팀이 승리합니다.

Pollycasso는 [Modern Agile](https://github.com/modern-agile-team)의 10번째
프로젝트로 진행되었습니다. 이 저장소는 Socket.IO 모킹 라이브러리인
[smocket](https://github.com/electrohyun/smocket)을 활용한 프론트엔드 프리뷰를
제공합니다.

이전 이슈와 Pull Request, 코드 리뷰는
[기존 저장소](https://github.com/modern-agile-team/10term-pollycasso-front)에서
확인할 수 있습니다.

## 개발 목표

- 필요한 HTTP 및 Socket.IO 시나리오를 모킹으로 재현
- 드로잉 게임의 주요 흐름 완성
- 간편한 로컬 개발 및 배포 환경 제공
- 연동 과정의 결정 사항과 지원 시나리오 문서화

## 기술 스택

- React 19 and TypeScript
- Vite
- Socket.IO Client
- MSW
- TanStack Query and Zustand
- React Konva
- Tailwind CSS and Framer Motion
- Storybook and Vitest

## 시작하기

### 요구 사항

- Node.js 20.19 이상 또는 22.12 이상
- pnpm 9

### 로컬 실행

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

일반 개발 환경은 `.env.example`을 `.env`로 복사한 뒤 각 연결 주소를 실행 환경에
맞게 설정합니다.

### 프리뷰 모킹 환경

```bash
pnpm dev:mock
```

이 명령은 `.env.mock`을 불러옵니다. HTTP 요청에는 MSW를 적용하고, 루트 소켓과
`/waiting`, `/game`, `/friends`, `/chat` 네임스페이스에는 저장소 내부의 Socket.IO
mock을 적용합니다. 현재 HTTP mock은 인증, 방 목록과 생성, 채팅용 친구와 채널
요청을 다룹니다. 실제 게임 흐름에 필요한 시나리오는 이후 작업에서 확장합니다.

### 환경 변수

| 변수                    | 역할                                       |
| ----------------------- | ------------------------------------------ |
| `VITE_USE_MSW`          | 개발 환경에서 MSW HTTP mock 활성화         |
| `VITE_USE_SOCKET_MOCK`  | Socket.IO 연결을 저장소 내부 mock으로 전환 |
| `VITE_API_BASE_URL`     | HTTP API 기본 주소                         |
| `VITE_SOCKET_URL`       | Socket.IO 연결 주소                        |
| `VITE_SOCIAL_LOGIN_URL` | 소셜 로그인 진입 주소                      |
| `VITE_ASSET_CDN_URL`    | 사운드와 의상 이미지 CDN 주소              |
| `VITE_SECRET_PAGE`      | 관리자 화면 진입 경로                      |

### 명령어

| 명령어                 | 설명                                       |
| ---------------------- | ------------------------------------------ |
| `pnpm dev`             | Vite 개발 서버 실행                        |
| `pnpm dev:mock`        | HTTP와 Socket.IO mock을 적용한 프리뷰 실행 |
| `pnpm build`           | 타입 검사 후 애플리케이션 빌드             |
| `pnpm lint`            | ESLint 실행                                |
| `pnpm storybook`       | Storybook 개발 서버 실행                   |
| `pnpm build-storybook` | Storybook 빌드                             |
