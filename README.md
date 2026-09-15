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

- Node.js
- pnpm

### 로컬 실행

```bash
pnpm install
pnpm dev
```

### 명령어

| 명령어 | 설명 |
| --- | --- |
| `pnpm dev` | Vite 개발 서버 실행 |
| `pnpm build` | 타입 검사 후 애플리케이션 빌드 |
| `pnpm lint` | ESLint 실행 |
| `pnpm storybook` | Storybook 개발 서버 실행 |
| `pnpm build-storybook` | Storybook 빌드 |
