# 정보 구조

## 현재 릴리스

- 공개 HTML 32개: 도구 18, 허브 4, 가이드 3, 참조 2, 홈/기본 5.
- 진단: Setup Wizard, Fret Buzz, High Action, Tuning Stability, Intonation, Electric/Acoustic/Bass Checklists.
- 측정·계획: Gauge Change, Alternate Tuning Gauge, Neck Relief, Action Converter, Scale Identifier, Pickup Height.
- 검사·문서: Used Guitar Inspection, Measurement Sheet, Before/After Card, Condition Report.
- 병합: Fret Slot Print Template→Fret Position Template; Series/Parallel/Coil Split→Pickup Wiring Selector.
- 보류: 정확한 현 unit-weight, 인쇄 배율, 회로 도식, 전문 구조 작업 검증이 필요한 24개. 기각 0.

## URL과 검색 의도

| 클러스터 | URL | 의도 |
|---|---|---|
| 진단 허브 | `/categories/diagnostics.html` | 증상에서 안전한 점검 순서 찾기 |
| 측정 허브 | `/categories/measurement.html` | 측정·단위·변화 계획 |
| 문서 허브 | `/categories/documents.html` | 인쇄 가능한 셋업 기록 |
| 검사 허브 | `/categories/inspection.html` | 중고·상태 검사 |
| 도구 | `/tools/{descriptive-slug}.html` | 각 증상, 계산, 기록 작업 수행 |
| 가이드 | `/guides/setup-order.html` 등 | 절차를 이해하고 도구 진입 |
| 참조 | `/reference/unit-conversion.html` 등 | 측정 기준 빠른 확인 |

각 도구의 정확한 slug는 `site/tools/` 및 sitemap에서 관리한다. 도구 페이지에는 기능과 일치하는 고유 title, description, H1, canonical, Open Graph, WebApplication JSON-LD가 있다.

## 내부 링크 흐름

1. 증상 → Setup Wizard/Fret Buzz/High Action/Tuning/Intonation.
2. 진단 → Relief/Action/Scale/Pickup/Gauge 측정.
3. 측정 → 안전한 순서 가이드와 후속 도구.
4. 작업 → Measurement Sheet/Before-After Card.
5. 중고 검사 → Condition Report → 향후 Quote Generator.
6. 제작 계획은 정확한 기하·출력 검증 후 Fret Position→Spacing→Cost 순으로 확장.

## 우선 구현 순서

1. 현재 18개 도구의 브라우저 시나리오와 접근성 보강.
2. Ground Hum Diagnostic(고전압 작업 제외), Repair Intake, Repair Quote.
3. 정확한 데이터 출처를 포함한 String Tension Matcher.
4. Wiring Selector/Phase/Pot/Cap cluster.
5. 인쇄 교정자를 갖춘 fret·spacing 제작 cluster.

장기 목표 65–75페이지는 현재 달성 수치가 아니다. 검색 의도가 검증되고 고유 기능과 충분한 본문을 제공할 수 있을 때만 확장한다.
