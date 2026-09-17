# 아키텍처 검사

폴리카소는 Feature-Sliced Design(FSD)을 점진적으로 적용한다. 기존 구조를 한 번에
옮기지 않고, smocket 기반 게임 흐름을 확장할 때 먼저 영향을 받는 Socket.IO, 게임,
대기실 영역의 경계를 우선 보호한다.

## 사용 도구

- 프로젝트 전용 FSD 가이드는 `.agents/skills/feature-sliced-design/`에 둔다.
- [Steiger](https://github.com/feature-sliced/steiger)와 공식 FSD 플러그인으로 계층 간
  import와 slice Public API 사용을 검사한다.
- `pnpm architecture`를 실행하면 `src` 전체를 검사하며, CI에서도 같은 명령을 실행한다.

## 규칙 수준

- Public API 우회, Public API 누락 등 모듈 경계를 깨뜨리는 진단은 오류로 처리한다.
- `shared/api/socket`, 게임, 대기실, 방 생성·설정 영역의 계층 역참조는 오류로 처리한다.
- 기존 코드의 나머지 계층 역참조는 후속 리팩터링 대상을 드러내도록 경고로 유지한다.
- `insignificant-slice`와 `segments-by-purpose`는 구조의 맥락을 함께 판단해야 하고
  현재 구조 전체를 옮기게 만들 수 있어 자동 검사에서는 끈다.

경고를 숨기기 위한 예외는 추가하지 않는다. 새 코드는 오류로 보호되는 영역의 경계를
지키고, 기존 경고는 관련 기능을 수정할 때 함께 해소한다. 현재 `widgets` 계층은 기존
구조를 유지하며 필요성이 확인된 단위부터 페이지 또는 기능으로 옮긴다.
