# 도구 검증

검증일: 2026-07-31. 유료 키워드 도구의 검색량 수치는 사용하지 않았으며, 검색 결과의 도구/가이드 구성, 제조사 자료, 반복되는 문제 중심 검색 의도, 구매·수리 의사결정과의 연결성을 근거로 평가했다. 점수는 `수익화 가능성 /40 + 조회 가능성 /35 + 경쟁 빈틈 /25`의 방향성 평가이며 검색량을 뜻하지 않는다.

## 확인된 수요 신호와 안전 기준

- Fender는 넥 릴리프를 1프렛 카포, 마지막 프렛/넥 조인트 누름, 중간 지점 필러 게이지 방식으로 설명한다. 이는 단순 사양표보다 측정 과정을 안내할 독립 도구 수요를 뒷받침한다: [Fender neck relief guide](https://www.fender.com/articles/maintenance/how-to-measure-neck-relief-on-guitar-or-bass), [Fender setup specifications](https://support.fender.com/hc/en-gb/articles/42507226762651-What-are-factory-setup-specs).
- D’Addario는 장력이 게이지·스케일·피치에 의해 결정됨을 설명하고 자체 계산기를 운영한다. 따라서 독립 사이트는 브랜드별 장력표를 복제하지 않고 변화 계획과 후속 셋업 흐름에 집중해야 한다: [String Tension Pro](https://www.daddario.com/en-eu/pages/string-tension-pro-string-tension-calculator), [All About String Tension](https://www.daddario.com/blogs/guitar/all-about-string-tension).
- StewMac은 프렛 위치와 너트 간격에 강한 계산기/교육 자산을 보유한다. 제작 계산기는 정확한 공식과 출력 검증을 갖출 때만 후속 구현한다: [Fret calculator](https://www.stewmac.com/fret-calculator/), [String spacing instructions](https://www.stewmac.com/video-and-ideas/online-resources/learn-about-guitar-nut-and-saddle-setup-and-repair/string-spacing-rule-instructions/).
- Fender는 공장값이 절대 규칙이 아니며 연주 성향과 환경을 함께 보라고 명시한다. 사이트의 수치는 진단 확정값이 아니라 비교 기준으로 제시한다: [Stratocaster setup guide](https://support.fender.com/hc/en-gb/articles/42584764005019-How-do-I-set-up-my-Stratocaster-guitar-properly).

## 후보별 판정

| 제안 | 핵심 의도 / 예상 사용자 | 경쟁과 독립 방문 이유 | 구현 방식·위험 | 점수 | 판정 | 연결 |
|---|---|---|---|---:|---|---|
| Guitar Setup Wizard | 셋업 순서 / 입문자·샵 | 영상은 길고 증상별 순서가 약함 | 입력별 측정 순서; 확정 진단 금지 | 86 | Accepted | 모든 진단→측정→기록 |
| Fret Buzz Diagnostic Tool | 버즈 원인 / 전 사용자 | 반복 질문이 많고 원인이 다변수 | 위치·현·증폭·변경 이력 분기 | 91 | Accepted | Relief, Action, Record |
| High Action Diagnostic Tool | 높은 액션 / 사용자·구매자 | 사양표는 많으나 geometry 구분 약함 | 릴리프·너트·브리지 여유 분기 | 84 | Accepted | Relief, Condition Report |
| Tuning Stability Troubleshooter | 튜닝 불안 / 일렉 사용자 | 영상·포럼 답변이 분산 | 스트링·마찰·하드웨어·트레몰로 격리 | 87 | Accepted | Gauge Planner, Intonation |
| Intonation Problem Diagnostic | 12프렛 오차 / 사용자 | 단순 saddle 방향표와 차별화 필요 | 셋업 선행조건·패턴·반복 측정 | 83 | Accepted | Action, Setup Card |
| String Gauge Change Planner | 게이지 변경 영향 / 구매자 | 제조사 장력 도구 강함 | 브랜드 장력 복제 대신 셋업 체크 계획 | 80 | Revised | Tension Matcher, Intonation |
| Alternate Tuning String Selector | 다운튜닝 게이지 / 구매자 | 제품·포럼 의도 강함 | 근사 방향+제조사 데이터 확인 | 82 | Accepted | Gauge Planner |
| Electric Setup Checklist | 전체 셋업 / DIY | 일반 글 경쟁 강함 | 브리지 유형별 인쇄 작업순서 | 76 | Accepted | Wizard, Measurement Sheet |
| Acoustic Setup Checklist | 어쿠스틱 액션 / 사용자 | 넥각·습도 위험 구분에 빈틈 | 구조·습도 우선, 절삭 확정 금지 | 79 | Accepted | High Action, Condition |
| Bass Setup Checklist | 베이스 셋업 / 베이시스트 | 기타 중심 자료와 차별화 | 현수·스케일·픽업 분기 | 75 | Accepted | Relief, Pickup Height |
| Used Guitar Inspection Generator | 중고 검사 / 구매자·샵 | 거래 의도·경제 가치 높음 | 관찰 기반 인쇄 보고서, 보증 아님 | 89 | Accepted | Condition, Quote |
| String Tension Matcher | 장력 비교 / 다운튜닝 사용자 | D’Addario 등 강한 도구 존재 | 정확한 unit weight 데이터 필요 | 73 | Deferred | Gauge Planner |
| Neck Relief Measurement Helper | 릴리프 측정 / DIY | 제조사 가이드는 정적 | 단위 변환+방법+한계 | 85 | Accepted | Buzz, High Action |
| Nut Slot Target Height Tool | 너트 높이 / 제작자 | 절삭 위험, 모델별 차이 | 측정 비교만 허용 | 69 | Deferred | Buzz, Nut spacing |
| String Action Converter | mm/in 변환 / 글로벌 | 작은 도구지만 작업 흐름에 유용 | 정밀 변환+분수는 보조 표시 | 72 | Accepted | 모든 셋업 |
| Fretboard Radius Matcher | 반경 식별 / DIY | 템플릿 제품 경쟁 | 인쇄 정확도 검증 필요 | 65 | Deferred | Saddle Radius |
| Saddle Radius Planner | 새들 곡률 / 셋업 | 독립 측정 흐름 가능 | fretboard와 목표 곡률 비교 | 70 | Deferred | Action, Radius |
| Tremolo Spring Balance Planner | 플로팅 브리지 / 일렉 | 높은 문제·부품 의도 | 힘을 꾸며내지 않고 상태 비교 | 74 | Deferred | Gauge Planner |
| Pickup Height Setup Planner | 픽업 밸런스 / 일렉·베이스 | 제조사별 사양 분산 | 양쪽 간극+청취 비교 | 78 | Accepted | Measurement Sheet |
| Shim Thickness Planner | 넥 포켓 shim / 제작·수리 | 전문 의도, 위험 높음 | 기하 계산+구조 경고 필요 | 67 | Deferred | High Action |
| Scale Length Identifier | 스케일 식별 / 구매·제작 | 간단하지만 반복 의도 명확 | 12프렛 2배와 보상 구분 | 76 | Accepted | Gauge, Fret position |
| Fret Position Template Generator | 프렛 위치 / 제작자 | StewMac 강함 | 12-TET 공식+실척 PDF 검증 | 72 | Deferred | Multiscale, Cost |
| Multiscale Fretboard Planner | 팬프렛 / 제작자 | 전문 빈틈 있으나 복잡 | 두 스케일·수직프렛 geometry | 66 | Deferred | Fret template |
| Nut String Spacing Generator | 너트 간격 / 제작자 | 전용 자·계산기 경쟁 | equal center/edge 옵션 | 70 | Deferred | Bridge spacing |
| Bridge String Spacing Generator | 브리지 간격 / 제작자 | 부품 구매 연결 | 총 폭·현수·edge 입력 | 64 | Deferred | Nut spacing |
| Fret Slot Print Template | 인쇄 템플릿 / 제작자 | 정확도·프린터 배율 위험 | 교정자 포함 PDF 필수 | 61 | Merged | Fret Position Generator |
| Neck Angle Planner | 넥 각도 / 제작자 | 고가치 전문 의도 | 구조 작업, 다중 측정 필요 | 62 | Deferred | Shim Planner |
| Headstock String Break-Angle Tool | break angle / 제작자 | 작은 전문 수요 | geometry 계산, 최소값 단정 금지 | 58 | Deferred | Nut diagnostics |
| Body Blank and Neck Blank Planner | 목재 치수 / 제작자 | 설계 의존·검색 의도 분산 | 커스텀 계획표 | 52 | Deferred | Build Cost |
| Guitar Build Cost Planner | 제작 비용 / 취미 제작 | 구매 의도 높음 | 부품·공정·예비비 문서 | 71 | Deferred | Blank Planner |
| Pickup Wiring Configuration Selector | 배선 선택 / DIY | 도식 경쟁 강함 | 목표 사운드→구성, 모델별 도식 링크 | 78 | Deferred | Phase, Hum |
| Potentiometer Value Selector | 포트 값 / 부품 구매자 | 단순 250k/500k 글 경쟁 | 부하·픽업·선호 비교 | 70 | Deferred | Capacitor |
| Tone Capacitor Comparison Tool | 캡 값 / 부품 구매자 | 계산과 구매 연결 | RC 경향; 실제 회로 한계 명시 | 72 | Deferred | Pot selector |
| Series / Parallel / Coil-Split Selector | 배선 옵션 / DIY | 검색 의도 명확 | 필요 리드선·출력 경향 선택 | 72 | Merged | Wiring selector |
| Pickup Phase Troubleshooter | 얇은 혼합음 / DIY | 증상 특화 빈틈 | 단독/혼합·극성 분기 | 76 | Deferred | Wiring, Hum |
| Ground Hum Diagnostic Wizard | 험/버즈 / 사용자·샵 | 문제 의도 높음, 안전 중요 | 접촉·케이블·룸·앰프 격리 | 84 | Deferred | Wiring |
| Guitar Repair Intake Form | 접수 양식 / 샵 | 일반 양식보다 기타 특화 가치 | 입력→인쇄 티켓 | 78 | Deferred | Quote, Job Sheet |
| Setup Measurement Sheet | 셋업 기록 / 샵·DIY | 실무 반복 방문 가치 | 실제 입력·인쇄 | 82 | Accepted | Setup tools |
| Before-and-After Setup Card | 작업 증빙 / 샵·DIY | 검색량보다 제품 유지 가치 | 전후·작업·한계 기록 | 77 | Accepted | Setup tools |
| Repair Quote Generator | 견적 / 샵 | 경제 가치 높음 | 세금·법률 단정 금지 | 81 | Deferred | Intake, Job Sheet |
| Guitar Condition Report | 상태 보고 / 구매자·샵 | 중고 거래와 연결 강함 | 관찰 사실·미검사 항목 | 84 | Accepted | Inspection, Quote |
| Parts and Labor Job Sheet | 작업 지시 / 샵 | 실무 가치, 외부 검색은 중간 | 품목·시간·상태 | 72 | Deferred | Quote |
| Customer Approval Checklist | 변경 승인 / 샵 | 법적 표현 위험 | 작업 범위 확인서로 제한 | 60 | Deferred | Intake, Quote |
| Maintenance Schedule Generator | 유지관리 / 소유자 | 계절·사용량 반복 가치 | 환경·연주량 기반 일정 | 69 | Deferred | Measurement Sheet |

초기 구현은 Accepted 중 사용자 흐름을 가장 잘 연결하는 18개로 확정했다. Deferred는 기각이 아니라 데이터·정확도·브라우저 출력 검증이 더 필요한 후속 범위다.

## 두 번째 확장 판정 갱신

2026-07-31 두 번째 확장에서 아래 12개를 추가 검증 후 구현했다.

| 도구 | 이전 판정 | 현재 상태 | 구현 근거 |
|---|---|---|---|
| Guitar Repair Intake Form | Deferred | Implemented | 고객 진술·관찰·권한을 분리한 실제 인쇄 티켓 |
| Repair Quote Generator | Deferred | Implemented | cent-safe 품목/세금/할인/보증금/잔액 계산과 오류 처리 |
| Parts and Labor Job Sheet | Deferred | Implemented | 진단·작업·부품·시간·최종 테스트를 처리하는 기술자 기록 |
| Customer Approval Checklist | Deferred | Implemented | 법적 서명 대신 검토한 선택과 연락 범위를 기록 |
| Maintenance Schedule Generator | Deferred | Implemented | 사용량·이동·습도·트레몰로·active 전자장치별 일정 분기 |
| Ground Hum Diagnostic Wizard | Deferred | Implemented | 케이블·룸·pedalboard·amp/interface·guitar 대체시험, amp 내부 제외 |
| Pickup Phase Troubleshooter | Deferred | Implemented | 결합 위치의 얇은 소리/볼륨 저하와 높이·출력 차이 분리 |
| Pickup Wiring Configuration Selector | Deferred | Implemented | conductor·pot·switch 제약과 희망 기능을 함께 검사 |
| Potentiometer Value Selector | Deferred | Implemented | passive 부하 경향과 active 제조사 사양 경계 분리 |
| Tone Capacitor Comparison Tool | Deferred | Implemented | 단순 RC 참조값과 실제 pickup 회로 한계를 함께 표시 |
| Series / Parallel / Coil-Split Selector | Merged | Implemented separately | 네 conductor와 switch 조건이 명확해 독립 선택기로 복원 |
| String Tension Matcher | Deferred | Implemented | D’Addario 공식·제한 unit-weight 자료·fixture·미지원 반환 확보 |

String Tension 데이터 범위와 1차 출처는 `research/string-tension-sources.md`에 별도로 기록했다. Luthier 제작 cluster는 정확한 기하 fixture와 실제 크기 인쇄 교정이 선행되어야 하므로 계속 Deferred다.
# Third expansion — geometry/build validation (2026-07-31)

Eleven functional tools were accepted and implemented: Fret Position, Fret Slot Print Template, Nut String Spacing, Bridge String Spacing, Fretboard Radius Matcher, Saddle Radius Planner, Multiscale Fretboard Planner, Neck Angle Planner, Headstock Break Angle, Tremolo Spring Balance, and Shim Thickness Planner.

Acceptance required a distinct input model, a pure shared calculation, representative and invalid fixtures, visible assumptions/units, a safe interpretation, and a real next-workflow link. `scripts/geometry-test.mjs` passes 65 assertions. In-app browser interaction passed all 11 tools, invalid gauge-count and perpendicular-fret cases, calibration pass/fail states, reset, mobile navigation, and three existing-tool regressions. PDF geometry checks are recorded in `research/pdf-qa.md`; formulas and source boundaries are in `research/luthier-geometry-sources.md`.

Body/Neck Blank Planner and Guitar Build Cost Planner were deferred rather than created as superficial forms. Blank planning needs kerf, planing allowance, grain/orientation, nesting, and multiple-build stock logic. Build cost needs currency-safe money arithmetic, inventory/tool ownership policies, contingency semantics, and distinct printable records.

---
