# 브라우저 QA

검사일: 2026-07-31. 로컬 서버 `http://127.0.0.1:4173/`를 실제 브라우저에서 검사했다.

## 화면 폭

| 요청 폭 | 실제 콘텐츠 폭 | 수평 오버플로 | 결과 |
|---:|---:|---:|---|
| 1440 | 1425 | 0 | Pass |
| 1280 | 1265 | 0 | Pass |
| 1024 | 1009 | 0 | Pass |
| 768 | 753 | 0 | Pass |
| 390 | 375 | 0 | Pass |

브라우저의 스크롤바 15px를 제외한 실제 layout viewport와 `scrollWidth`가 일치하는지 확인했다. 800px 이하에서 작업 폼과 결과가 한 열로 쌓이고 모바일 메뉴가 열리며 `aria-expanded`가 갱신된다.

## 상호작용 시나리오

- Fret Buzz: 1–4 fret + raised/worn clue가 low-relief/local-fret 분기를 만들고, loose/moving fret 입력은 별도 중단 안내를 반환함.
- Action Converter: 2.000mm→0.0787in≈5/64in, 0.07874in→2.000mm, 음수 입력 오류 처리를 확인함.
- Measurement Sheet: 날짜·긴 악기명·긴 메모를 입력해 빈 Customer 행 숨김, 줄바꿈, Copy, Reset, Print 버튼을 확인함.
- Copy: 실제 클립보드 텍스트와 `Copied` 상태를 새 브라우저 탭에서 회귀 확인함.
- Console: 수정 후 새 탭 기준 error/warning 0건.

## 시각 확인 및 수정

- 1440px 홈에서 작업대/정밀 기록표 시각 체계, 헤더, 히어로, CTA를 확인함.
- 390px 홈에서 제목 줄바꿈, 버튼 쌓임, 티켓, 모바일 메뉴를 확인함.
- 390px 문서 결과에서 긴 악기명이 전역 수평 스크롤을 유발하는 문제를 발견해 결과 표에 고정 레이아웃과 강제 줄바꿈을 적용함. 수정 후 `scrollWidth === clientWidth` 확인.
- 비동기 Copy 처리 후 이벤트 객체의 `currentTarget`이 사라져 버튼 상태가 갱신되지 않는 문제를 발견해 버튼 참조를 사전 보존하도록 수정함.

Print는 브라우저의 인쇄 대화상자를 자동 승인하지 않고, 인쇄 전용 CSS와 Print 진입 버튼의 존재를 확인했다.
