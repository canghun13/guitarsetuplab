# Guitar Setup Lab — Project Handover

## 2026-07-31 두 번째 확장 현황 (최신)

- 저장소: `https://github.com/canghun13/guitarsetuplab`
- branch: `main`
- 세션 시작 commit: `78565560c4fb92a823cb1e33e103b8d410dcbea9`
- 확장 구현 commit: `15fbce160dee17f1e4a77d08d0fa472d65f63a33`
- 공개 산출물: HTML 54, 실제 작동 도구 30, 카테고리 허브 5, 가이드 8, 참조 4, 비교 2, 기본 페이지 5
- production: `https://guitarsetuplab.com/`
- GA4: `G-TGT88WMVDG`가 공개 HTML 54개에 각각 1회 초기화됨

### 이번 확장 구현

Repair-shop documents:

1. Guitar Repair Intake Form
2. Repair Quote Generator
3. Parts and Labor Job Sheet
4. Customer Approval Checklist
5. Guitar Maintenance Schedule Generator

Electronics and wiring:

1. Ground Hum Diagnostic Wizard
2. Pickup Phase Troubleshooter
3. Pickup Wiring Configuration Selector
4. Potentiometer Value Selector
5. Tone Capacitor Comparison Tool
6. Series / Parallel / Coil-Split Selector

Strings and tuning:

1. String Tension Matcher

Supporting content로 문서화·험 진단·수리 접수·pot/cap 선택·게이지 변경 가이드 5개, 장력 공식·배선 용어 참조 2개, pot 값·humbucker switching 비교 2개를 추가했다. 홈 Bench Library와 category hub를 통해 모두 실제 작업 흐름으로 연결하며, 자동 inbound-link graph가 고아 페이지를 검사한다.

### 계산·데이터

- Repair Quote는 품목별 `Description | quantity | unit cost`를 해석하고 labor/parts/discount/tax/deposit/balance를 cent 단위 정수 산술로 계산한다.
- String Tension은 D’Addario의 `T = UW × (2 × L × F)² ÷ 386.4` 공식을 사용한다.
- unit-weight는 D’Addario XL plain steel / nickel-plated round-wound의 명시적으로 수록한 gauge만 지원하며, 다른 brand/construction 또는 미지원 gauge를 직경만으로 추정하지 않는다.
- 데이터 출처·포함 범위·fixture·한계: `research/string-tension-sources.md`.

### 검증 결과

- 반복 실행: bundled Node로 `scripts/build.mjs`와 `scripts/test.mjs` 실행, PASS 0 failures.
- Static: HTML 54, tools 30, title/description/canonical/H1, GA4, email, JSON-LD, favicon/assets, broken links, orphan pages, sitemap, robots, llms, root/site mirror 검사 Pass.
- 계산 fixture: quote 합계/세금/할인/보증금/잔액, 잘못된 row, 기타·베이스 장력, scale 방향, Drop D, 미지원 gauge, RC 참조값 Pass.
- 실제 브라우저: 견적 계산·Copy·Reset, 험 진단 2개 분기, 기타/베이스/미지원 장력, 유지관리 일정 분기, conductor/switch 제약, 긴 repair intake와 optional row 숨김 확인.
- Responsive: home, Electronics hub, Quote, Job Sheet, Hum, Tension, 기존 Fret Buzz를 1440/1280/1024/768/390px에서 검사; 35/35 horizontal overflow 0.
- 모바일 메뉴 `aria-expanded`/open 상태 Pass. console error/warning 0.
- 모바일 결과표 heading의 부자연스러운 character break를 발견해 normal word wrapping으로 수정하고 재검증했다.
- Print: print CSS, 숨김 대상, 흑백 문서 구조, 긴 값 wrapping, Print 진입점 확인. in-app browser가 print-media/PDF API를 제공하지 않아 실제 PDF pagination/물리 scale 자동 시각검사는 미수행.
- Content audit: Sufficient 54, Needs reinforcement 0, Thin 0, HIGH 0, MEDIUM 0.
- 상세 기록: `research/browser-qa.md`, `research/content-audit.md`, `research/information-architecture.md`, `research/tool-validation.md`.

### 배포·외부 상태 (2026-07-31 20:55 KST 재확인)

- 검증 배포 commit: `ae97c3b5724e4989c524d827e7891df7f583feba`; GitHub Actions Quality checks와 Pages build/deployment 모두 success.
- Production의 home, Electronics hub, Repair Quote, String Tension Matcher, `assets/calculations.js`, sitemap은 모두 200. sitemap URL은 53개(공개 HTML 54개 중 404 제외).
- Production String Tension Matcher에서 실제 입력 후 비교표/total 출력과 console error/warning 0을 재확인했다.
- Apex DNS: GitHub Pages A 4개 (`185.199.108.153`–`185.199.111.153`).
- Apex HTTPS: 일반 인증서 검증으로 `200 OK`, GitHub.com server.
- www DNS: `www.guitarsetuplab.com CNAME canghun13.github.io`.
- www HTTPS: 일반 검증 실패 `SEC_E_WRONG_PRINCIPAL`; 현재 인증서 subject `CN=*.github.io` (Let's Encrypt, 2026-06-05–2026-09-03). 검증을 무시하면 apex로 `301`을 반환한다. 따라서 redirect 설정은 존재하지만 www TLS는 완료가 아니다.
- Cloudflare: DNS 응답만 확인; zone/proxy/account 설정은 Not verified.
- GSC: Search Console property URL 접근 시 로그인 전 소개 페이지로 이동. 현재 브라우저에 로그인 session이 없어 domain property verification, sitemap submission, indexing 상태는 Not verified.

### 미완료와 다음 우선순위

1. GitHub Pages custom-domain에서 `www.guitarsetuplab.com`이 포함된 인증서가 발급되도록 domain/DNS 상태를 재처리한 뒤 일반 TLS 검증을 다시 수행한다.
2. 사용자 Google 계정으로 GSC domain property를 확인하고 `https://guitarsetuplab.com/sitemap.xml` 제출 상태를 기록한다.
3. Print-to-PDF 또는 실제 printer로 Quote, Job Sheet, Intake, Maintenance의 pagination/scale을 수동 검수한다.
4. 다음 코드 확장은 실제 크기 교정자와 geometry fixture를 먼저 만든 뒤 Fret Position/Slot Template, Nut/Bridge Spacing, Multiscale cluster를 진행한다.

## 2026-07-31 통합 구현 현황 (이전 18도구 기준 기록)

- 저장소 URL: `https://github.com/canghun13/guitarsetuplab`
- 현재 branch: `main`
- 세션 시작 원격 commit: `d99d727dae66df01bed9c5915e44ec5e08af35b3`
- 최신 구현·배포 commit: `ba4d7d510f8169fdce0aaaf9c4349a357f7ad9fb` (이 handover 갱신 커밋은 그 다음 커밋이며, 최종 hash는 `git rev-parse HEAD`로 확인)
- 배포 URL: `https://guitarsetuplab.com/`
- GitHub Pages: branch/root 배포 성공 (`ba4d7d5`), production의 홈·asset·도구·sitemap 실제 200 응답 확인
- GA4: `G-TGT88WMVDG`를 공개 HTML 32개 전체에 1회 초기화로 적용, 정적 검사 Pass
- GSC: Not verified
- Cloudflare: DNS 레코드 응답은 apex A 4개와 `www → canghun13.github.io` CNAME으로 확인. Cloudflare zone/proxy 설정 자체는 Not verified
- HTTPS: apex `https://guitarsetuplab.com/` 200 확인. `www`는 올바른 apex redirect를 반환하지만 현재 TLS 인증서 신뢰 오류가 있어 미완료
- 실제 공개 HTML: 32 (홈/기본 5, 허브 4, 도구 18, 가이드 3, 참조 2)
- 실제 작동 도구: 18
- 카테고리별 도구: 진단·셋업 8, 측정·조정 6, 검사 1, 문서 3

### 완료한 작업

- 기존 원격 `handover.md`, 루트 `CNAME`, commit history를 보존하고 신규 구현 history와 병합.
- 44개 후보 전체를 Accepted/Revised/Merged/Deferred 기준으로 검증하고 출처·판정·연결 흐름 기록.
- 작업대·정밀 측정표·수리 티켓 인상의 독립 반응형 디자인 시스템 구현.
- 공통 header/footer/mobile nav, 결과·경고·Reset·Copy·Print 패턴 구현.
- About, Contact, Privacy, 404, robots.txt, sitemap.xml, llms.txt, favicon, canonical, Open Graph, JSON-LD, GA4 구현.
- 18개 도구의 고유 입력과 전용 계산·진단·문서 생성 로직 구현.
- 현재 GitHub Pages 설정에 맞춰 root와 `site/` 산출물을 동일하게 생성하고 `.nojekyll`/CNAME을 적용. Quality checks와 Pages workflow 성공.
- 정적 테스트와 실제 브라우저 QA 수행; 모바일 표 overflow와 Copy 비동기 오류를 발견·수정 후 회귀 확인.

### 구현된 도구

1. Guitar Setup Wizard
2. Fret Buzz Diagnostic Tool
3. High Action Diagnostic Tool
4. Tuning Stability Troubleshooter
5. Intonation Problem Diagnostic
6. String Gauge Change Planner
7. Alternate Tuning String Selector
8. Electric Guitar Setup Checklist
9. Acoustic Guitar Setup Checklist
10. Bass Setup Checklist
11. Used Guitar Inspection Generator
12. Neck Relief Measurement Helper
13. String Action Converter
14. Scale Length Identifier
15. Pickup Height Setup Planner
16. Setup Measurement Sheet
17. Before-and-After Setup Card
18. Guitar Condition Report

### 검증 결과

- 반복 실행: `npm run build && npm test`
- Static checks: 공개 HTML 32개, 도구 18개, 메타데이터, 내부 링크·asset, GA4, 이메일, JSON-LD, sitemap, robots, llms, JavaScript syntax 검사 Pass, failures 0.
- Broken links: 0
- JavaScript syntax errors: 0
- 계산 시나리오: Action Converter의 mm/in/반올림/음수 오류 처리 브라우저 확인; Gauge/Relief/Scale 등은 전용 로직과 유효 범위 처리 구현.
- 진단 시나리오: Fret Buzz의 위치·fret 상태별 결과 차이와 loose-fret 중단 분기 확인.
- 문서 생성기: optional row 숨김, 날짜, 긴 text wrapping, Copy, Reset, Print 진입 확인.
- Browser QA: 1440/1280/1024/768/390px Pass; 최종 새 탭 console error/warning 0.
- Content audit: Sufficient 32, Needs reinforcement 0, Thin 0.
- HIGH: 0
- MEDIUM: 0
- 상세 기록: `research/tool-validation.md`, `research/information-architecture.md`, `research/browser-qa.md`, `research/content-audit.md`.

### 남은 작업

- `www.guitarsetuplab.com`의 TLS 인증서 발급/전파를 재확인하고 HTTPS redirect를 일반 인증서 검증으로 통과시킬 것.
- Cloudflare zone 설정과 GSC domain property 및 sitemap 제출 상태는 계정 권한이 필요한 사용자 관리 영역이므로 검증 필요.
- 초기 목표 45–50개 도구/65–75개 페이지 중 현재 18개/32개. 페이지 수를 위한 filler 없이 검증된 후속 도구를 구현할 것.
- 모든 계산 도구의 독립 수치 회귀 fixture와 print-to-PDF 시각 회귀 자동화를 후속 강화.

### 다음 작업 우선순위

1. `www` TLS 인증서 상태를 재확인하고 GSC domain property에 sitemap을 제출.
2. Ground Hum Diagnostic(고전압·앰프 내부 작업 제외), Repair Intake Form, Repair Quote Generator, Parts & Labor Job Sheet 구현.
3. 제조사 unit-weight 출처를 확정한 뒤 String Tension Matcher 구현.
4. Pickup Wiring Selector→Phase→Hum 및 Pot/Cap 비교 cluster 구현.
5. 실제 인쇄 교정자를 포함한 Fret Position/Spacing 제작 cluster 구현.

### 알려진 위험과 사용자 관리 영역

- apex production과 DNS 응답은 검증했지만 `www` TLS, Cloudflare 계정 설정, GSC는 완료로 간주하지 않는다.
- 진단 결과는 물리 검사나 수리 보장이 아니며 비가역 작업을 확정하지 않는다.
- Cloudflare DNS, GitHub repository Pages environment 설정, GSC verification/sitemap 제출은 사용자의 외부 계정 관리 영역이다.
- `ba4d7d5` push 성공 및 당시 `HEAD == origin/main`. 이 handover 커밋 push 후 최종 작업 보고에서 다시 확인한다.

Last updated: 2026-07-31
Project status: Initial build deployed / expansion backlog remains
Primary language: English  
Target market: Global

---

## 1. Project Identity

- Site name: **Guitar Setup Lab**
- Domain: **guitarsetuplab.com**
- Tagline / English description: **Setup, Repair & Luthier Tools**
- Topic: Online tools for guitar and bass setup, diagnosis, repair intake, measurement, component selection, and luthier work
- Google Analytics industry: **Arts & Entertainment**
- Contact email: **canghun13@naver.com**
- Google Analytics measurement ID: **G-TGT88WMVDG**
- GitHub repository URL: **https://github.com/canghun13/guitarsetuplab**
- Production URL: **https://guitarsetuplab.com/**
- GitHub Pages custom domain: **guitarsetuplab.com**

The contact email must remain exactly `canghun13@naver.com` everywhere it is required, including:

- Contact page
- Privacy page
- Footer
- Structured data
- Any repair-form or document-generator contact field supplied by the site
- Any other project metadata requiring a site contact address

Do not invent, substitute, obfuscate, or migrate the contact email without an explicit user instruction.

---

## 2. Core Audience

The site is intended for:

- General guitar and bass players
- Players performing their own setups
- Guitar repair shops and music stores
- Professional and hobbyist luthiers
- Hobby guitar builders
- Buyers inspecting used guitars
- Players changing string gauges or alternate tunings

The site must remain useful to both non-experts and experienced users. Technical language should be explained clearly without removing the precision needed by repair and building workflows.

---

## 3. Product Direction

Guitar Setup Lab is not a collection of generic calculators.

It should combine practical tools used during real guitar work:

- Symptom-based diagnostic tools
- Guided setup workflows
- Measurement comparison and adjustment planners
- String and component selectors
- Pickup wiring configuration tools
- Luthier templates and layout tools
- Repair intake, estimate, and job-sheet generators
- Before-and-after setup records
- Calculators only where calculation is genuinely useful

The primary workflow is:

> Symptom check → measurement → likely-cause diagnosis → safe work order → component or setting selection → result recording and printing

Tools should connect to the next relevant step rather than operating as isolated pages.

Example:

> Fret Buzz Diagnostic Tool → Neck Relief Measurement Helper → String Action Converter → Saddle Radius Planner → Before-and-After Setup Card

---

## 4. Initial Scope and Page Target

Initial target:

- Approximately **45–50 genuinely functional tools**
- Approximately **65–75 total public pages**
- Supporting guide, reference, comparison, hub, and required legal/about pages

The current handover contains **44 named tool concepts**. Before finalizing the initial information architecture, validate search demand and competition, then add only 1–6 additional tools that fill real workflow gaps. Do not add filler tools merely to reach a page count.

Final page counts must be based on actual deployed files and sitemap entries, not estimates.

---

## 5. Named Tool Backlog

### 5.1 Diagnosis and Setup

1. Guitar Setup Wizard
2. Fret Buzz Diagnostic Tool
3. High Action Diagnostic Tool
4. Tuning Stability Troubleshooter
5. Intonation Problem Diagnostic
6. String Gauge Change Planner
7. Alternate Tuning String Selector
8. Electric Guitar Setup Checklist
9. Acoustic Guitar Setup Checklist
10. Bass Setup Checklist
11. Used Guitar Inspection Generator

### 5.2 Measurement and Adjustment

12. String Tension Matcher
13. Neck Relief Measurement Helper
14. Nut Slot Target Height Tool
15. String Action Converter
16. Fretboard Radius Matcher
17. Saddle Radius Planner
18. Tremolo Spring Balance Planner
19. Pickup Height Setup Planner
20. Shim Thickness Planner
21. Scale Length Identifier

### 5.3 Luthier and Guitar-Building Tools

22. Fret Position Template Generator
23. Multiscale Fretboard Planner
24. Nut String Spacing Generator
25. Bridge String Spacing Generator
26. Fret Slot Print Template
27. Neck Angle Planner
28. Headstock String Break-Angle Tool
29. Body Blank and Neck Blank Planner
30. Guitar Build Cost Planner

### 5.4 Electronics and Wiring

31. Pickup Wiring Configuration Selector
32. Potentiometer Value Selector
33. Tone Capacitor Comparison Tool
34. Series / Parallel / Coil-Split Selector
35. Pickup Phase Troubleshooter
36. Ground Hum Diagnostic Wizard

### 5.5 Repair Shop Documents and Records

37. Guitar Repair Intake Form
38. Setup Measurement Sheet
39. Before-and-After Setup Card
40. Repair Quote Generator
41. Guitar Condition Report
42. Parts and Labor Job Sheet
43. Customer Approval Checklist
44. Maintenance Schedule Generator

> Counting note: The supplied source list currently contains 44 named tools. Confirm the final count from the implemented information architecture before development begins.

---

## 6. Search and Competition Validation

Do not begin mass implementation solely because a tool idea sounds useful.

Before locking the information architecture, validate each cluster using the same standards applied to the other niche-tool projects:

- Search demand exists
- The query has clear user intent
- Users have a reason to use an independent tool site instead of only a manufacturer page, YouTube video, forum, or retailer
- The tool can help the user make a real decision or complete a task
- Competition from dominant domains is manageable
- A viable long-tail cluster exists when the main term is too competitive
- The topic has plausible advertising or affiliate value
- The tool can be implemented as a real interactive workflow
- The page will not be a duplicated static checklist with only wording changes

Evaluation framework:

- Monetization potential: **40 points**
- Traffic potential: **35 points**
- Competition gap: **25 points**

If a main keyword is too competitive, continue into clear long-tail combinations using:

- Guitar type
- Bass vs guitar
- Electric vs acoustic
- Bridge type
- Tremolo type
- String gauge
- Alternate tuning
- Scale length
- Symptom location
- Used-guitar inspection context
- Repair-shop workflow
- Builder or luthier context
- Unit system
- Measurement problem
- Comparison or troubleshooting intent

Do not force weak topics into the launch scope.

---

## 7. Safety and Scope Restrictions

The following are excluded:

- Vacuum-tube amplifier internal repair
- High-voltage electrical work
- Automatic instructions specifying an exact number of truss-rod turns
- Guarantees for structural repairs such as neck resets or crack repair
- Automatically concluding that fret leveling or nut cutting is required from limited measurements
- Definitive recommendations for irreversible work without inspecting the instrument
- Any claim that a repair outcome is guaranteed

For irreversible cutting, filing, routing, drilling, fret work, nut work, neck-angle correction, or structural repair:

- Explain assumptions and uncertainty
- Provide measurement checks
- State stop conditions
- Recommend professional inspection where appropriate
- Avoid presenting one measurement as a definitive diagnosis
- Separate low-risk checks from irreversible work
- Never instruct the user to continue when binding, cracking, abnormal resistance, structural movement, or an uncertain truss-rod condition is present

Diagnostic outputs should use language such as:

- Likely cause
- Possible cause
- Check this first
- Confirm with measurement
- Stop and consult a technician if…
- Do not cut or remove material until…

---

## 8. Functional Tool Requirements

Every tool page must include, where applicable:

- Clear tool purpose
- Defined inputs
- Units and unit-system handling
- Input validation
- Empty, invalid, contradictory, and extreme-value handling
- Result values or decision output
- Result interpretation
- Usage instructions
- Calculation or decision logic
- Assumptions
- Limitations
- A realistic example
- Related tools and guides
- Reset function
- Copy function where useful
- Print function where useful
- Mobile-safe layout
- Accessible labels and keyboard-usable controls

Diagnostic tools, selectors, and wizards must react meaningfully to user input.

Do not create fake tools where:

- The result is nearly identical for every input
- Only a paragraph heading changes
- A static checklist is copied into multiple pages
- A form accepts inputs but does not use them
- The result is generic advice unrelated to the selected symptoms
- A document generator only displays a blank printable page without processing input

For diagnostic tools, include:

- Input-dependent branching
- Prioritized likely causes
- Safe first checks
- Measurement recommendations
- Suggested work order
- Stop conditions
- Links to the next appropriate measurement or record tool

---

## 9. Suggested Implementation Phases

The exact page set must be validated before development. The following is the default working sequence.

### Phase 0 — Validation and Information Architecture

- Validate demand and competition
- Confirm launch clusters
- Confirm the final tool list
- Define hubs, guides, references, and comparisons
- Define URL slugs
- Define internal-link workflows
- Record accepted and rejected ideas
- Establish final target counts

### Phase 1 — Foundation and Core Setup Workflow

- Create repository and initial `handover.md`
- Build independent design system
- Add shared header and footer
- Add About, Contact, and Privacy
- Add robots.txt, sitemap.xml, and llms.txt
- Add GA4
- Add base structured data
- Add core setup wizard and first diagnostic tools
- Add common form, result, reset, copy, and print patterns
- Deploy the first usable version

### Phase 2 — Measurement and Adjustment

- Relief
- Action
- Radius
- Saddle
- Nut targets
- Pickup height
- Tremolo balance
- Shims
- Scale identification

### Phase 3 — Strings, Tuning, and Tension

- Gauge changes
- Alternate tunings
- Tension matching
- Intonation workflow
- Tuning stability workflow

### Phase 4 — Electronics and Wiring

- Wiring configuration
- Potentiometer selection
- Capacitor comparison
- Series / parallel / coil split
- Phase troubleshooting
- Ground hum diagnosis

### Phase 5 — Luthier and Building Tools

- Fret position and templates
- Multiscale planning
- Nut and bridge spacing
- Neck angle
- Break angle
- Blank planning
- Build cost

### Phase 6 — Repair-Shop Documents

- Intake forms
- Measurement sheets
- Before-and-after cards
- Quotes
- Condition reports
- Job sheets
- Approval forms
- Maintenance schedules

### Phase 7 — Guides, References, Comparisons, and Internal Linking

- Support real workflows
- Avoid generic filler content
- Connect symptom pages to measurement pages
- Connect measurement pages to adjustment and record pages
- Add relevant parts and purchasing comparisons only when justified

### Phase 8 — Full Audit and Launch Completion

- Calculation verification
- Decision-tree scenario testing
- Content-depth audit
- SEO audit
- Cross-page link audit
- Responsive browser QA
- Sitemap and public-page reconciliation
- Deployment verification
- GSC verification
- Final handover update

A phase is not complete until its implementation, automated checks, browser QA, handover update, commit, push, and remote-state verification are complete.

---

## 10. Design Direction

Do not copy the visual system of the existing niche-tool sites.

The design should evoke:

- Guitar repair workbench
- Precision measuring gauge
- Setup record card
- Repair ticket
- Adjustment panel
- Shop measurement sheet
- Technical but approachable luthier workspace

Use minimal imagery. Build the identity primarily with:

- Typography
- Layout
- Rules and dividers
- Measurement markings
- Input and result panels
- Status indicators
- Work-card patterns
- Printable report layouts

The design must remain readable and professional on:

- Desktop
- Laptop
- Tablet
- Mobile

Avoid decorative elements that imitate real measurement precision without representing actual values.

---

## 11. Technical Architecture

Required stack:

- GitHub Pages
- Cloudflare
- Static HTML
- Static CSS
- Vanilla JavaScript
- Minimal server and database dependency
- SEO-friendly individual HTML pages
- Responsive layout
- Shared header and footer in a maintainable structure

Required project assets and pages include:

- `/assets/css/`
- `/assets/js/`
- Shared header/footer mechanism
- Individual HTML pages with unique metadata
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `about.html` or equivalent route
- `contact.html` or equivalent route
- `privacy.html` or equivalent route
- Favicon assets
- Custom 404 page where appropriate

Each public page must manage its own:

- `<title>`
- Meta description
- Canonical URL
- H1
- Open Graph metadata where used
- Structured data appropriate to the page type

Do not depend on local-only files, machine-specific paths, editor settings, or unpublished environment configuration.

---

## 12. Google Analytics

Measurement ID:

```text
G-TGT88WMVDG
```

Required tag:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TGT88WMVDG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-TGT88WMVDG');
</script>
```

GA4 implementation rules:

- Use only the Guitar Setup Lab measurement ID
- Remove IDs copied from other projects
- Verify the tag on all public HTML pages
- Avoid duplicate GA initialization
- Record implementation and verification status in this file
- Add consent handling only when the chosen implementation requires it and document the decision

GA4 status: **Measurement ID issued; site implementation pending**

---

## 13. Google Search Console

- Property type: Prefer domain property
- Domain: `guitarsetuplab.com`
- Verification status: **TBD**
- Sitemap submission status: **TBD**
- Initial indexing status: **TBD**

Record the verification method and date after completion.

---

## 14. Cloudflare and DNS

Cloudflare DNS baseline:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    canghun13.github.io
```

Initial settings:

- DNS records: DNS only
- TTL: Auto
- GitHub Pages custom domain: `guitarsetuplab.com`

Status:

- Domain purchased: **TBD**
- Cloudflare zone active: **TBD**
- DNS configured: **TBD**
- GitHub Pages custom domain configured: **TBD**
- HTTPS active: **TBD**
- Apex domain verified: **TBD**
- `www` redirect behavior verified: **TBD**

After connection, record:

- DNS completion date
- GitHub Pages verification status
- HTTPS enforcement status
- Canonical host decision
- Redirect test results

---

## 15. Repository and Work Continuity Rules

The GitHub remote repository is the single source of truth.

The project must be operable from any working environment without relying on one computer or one local setup.

At the start of every work session:

1. Confirm the current path
2. Confirm the Git remote URL
3. Confirm the active branch
4. Run and review `git status`
5. Review recent commits
6. Read this `handover.md`
7. Preserve all existing uncommitted work
8. Compare local state with the remote
9. Use `git fetch` and `git pull --ff-only` only when safe

Do not:

- Delete uncommitted changes without explicit permission
- Overwrite user-managed areas
- Assume the local checkout is current
- Assume a task is unfinished without checking the repository and handover
- Depend on an external IDE
- Introduce machine-specific configuration as a requirement
- Leave important completed work only on the local machine

Allowed work method:

- Repository files
- Terminal commands
- Automated tests
- Browser QA
- Safe local tooling contained within the project

At the end of every completed work session:

1. Run automated checks
2. Run browser QA appropriate to the changes
3. Update this `handover.md`
4. Record completed work and remaining work
5. Record validation results
6. Commit with a clear message
7. Push to the correct remote branch
8. Confirm local HEAD matches `origin/main`
9. Confirm the production deployment where applicable

---

## 16. Agent / Codex Task Prompt Requirements

Every implementation prompt must begin with:

- GitHub repository URL
- Recommended model / effort level

Use the minimum suitable model level to control token cost.

Suggested labels:

- `Terra 낮음`
- `Terra 중간`
- `Terra 높음`
- `Sol`

The task prompt should include a compressed repository-check instruction covering:

- Current path
- Remote
- Branch
- Git status
- Recent commit
- `handover.md`
- Preservation of uncommitted work
- Safe fetch and `pull --ff-only`
- No external IDE
- Work only through repository files, terminal, tests, and browser QA

Do not include unnecessary location-specific wording such as “home,” “office,” or “first task of the day” in agent prompts.

Judgment-heavy architecture, audit, and planning work should use a stronger reasoning model. Straight implementation and routine fixes should use the lowest model level that can safely complete the task.

---

## 17. Quality Assurance Requirements

### 17.1 Automated and Static Checks

Check all public pages for:

- Missing files
- Broken internal links
- Orphan pages
- Duplicate or missing titles
- Missing descriptions
- Incorrect canonical URLs
- Missing or duplicate H1
- Incorrect brand or copied project names
- Wrong contact email
- Wrong GA4 ID
- Missing favicon references
- Sitemap mismatch
- robots.txt issues
- llms.txt issues
- Invalid JSON-LD
- JavaScript console errors
- Missing assets

### 17.2 Tool Logic Tests

For numerical tools:

- Expected-value cases
- Unit-conversion cases
- Minimum and maximum reasonable values
- Zero and negative input handling
- Empty input handling
- Decimal handling
- NaN and Infinity prevention
- Rounding behavior
- Cross-check against reliable formulas or reference data

For diagnostics and selectors:

- Multiple realistic input scenarios
- Contradictory input scenarios
- Boundary-condition scenarios
- Priority-order validation
- Safe-stop behavior
- Different outputs for meaningfully different inputs
- No irreversible recommendation based on insufficient evidence

For document generators:

- Required-field behavior
- Optional-field behavior
- Long text wrapping
- Print layout
- Empty-section suppression
- Copy output
- Reset behavior
- Mobile input usability
- Customer-facing language quality

### 17.3 Browser QA

Minimum representative viewport widths:

- 1440 px
- 1280 px
- 1024 px
- 768 px
- 390 px

Check:

- Header and navigation
- Long page titles
- Forms and field labels
- Unit selectors
- Result panels
- Tables
- Warning boxes
- Copy and print controls
- Printable documents
- Footer
- Keyboard focus
- Horizontal overflow
- Long numerical results
- Mobile stacking order

### 17.4 Content Depth Audit

Classify every public page as:

- Sufficient
- Needs reinforcement
- Thin

Launch completion target:

- Thin pages: **0**
- Broken tools: **0**
- High-severity issues: **0**
- Unresolved medium-severity issues: explicitly documented and accepted only when they cannot reasonably block launch

Do not mark the project complete based only on page count.

---

## 18. Internal Linking Principles

Internal links should follow actual work sequences.

Examples:

- Symptom diagnostic → measurement helper
- Measurement helper → adjustment planner
- Adjustment planner → setup record card
- String gauge planner → tension matcher → intonation diagnostic
- Pickup selection → wiring selector → phase or hum troubleshooting
- Used guitar inspection → condition report → repair quote
- Build planner → fret template → spacing generator → cost planner

Each tool page should include relevant links, but avoid inserting unrelated sitewide link lists merely to increase link count.

---

## 19. Printing and Record Features

Add Copy and Print only where they improve real use.

High-priority printable outputs:

- Setup checklist
- Used guitar inspection report
- Measurement sheet
- Before-and-after setup card
- Repair intake form
- Repair quote
- Guitar condition report
- Parts and labor job sheet
- Customer approval checklist
- Maintenance schedule
- Fret slot template
- Fret position template

Print output must:

- Remove unnecessary navigation and controls
- Preserve labels and measurements
- Include units
- Wrap long notes
- Avoid clipped tables
- Remain legible in black and white
- Avoid claiming shop or legal approval status that the site does not provide

---

## 20. SEO and Content Rules

- English content for global users
- Individual indexable HTML pages
- Unique title, description, canonical, and H1
- Search intent must match the actual tool
- Avoid mass-produced generic introductions
- Avoid copying manufacturer wording
- Avoid pretending diagnostic output replaces physical inspection
- Use clear terminology for electric guitar, acoustic guitar, and bass contexts
- Explain imperial and metric units where relevant
- Add FAQ only when it answers real user questions
- Use structured data that accurately reflects page content
- Do not create misleading review ratings or fabricated user data

Supporting guides should solve tasks that tools alone cannot explain. Reference pages should provide stable data, terminology, measurement conventions, or safe process context.

---

## 21. Monetization Constraints

Primary monetization direction:

- AdSense
- Relevant component, tool, string, hardware, measurement-tool, and repair-supply affiliate opportunities where appropriate

Monetization must not compromise safety or usefulness.

Do not:

- Recommend unnecessary irreversible work to create purchase intent
- Disguise affiliate links
- Present sponsored products as objective diagnostic results
- Add excessive ads around measurement inputs or critical warnings
- Let affiliate availability determine the diagnosis

Any affiliate implementation must be documented.

---

## 22. Current Known Status

### Confirmed

- Site name confirmed
- Domain selected
- Topic and audience confirmed
- English/global direction confirmed
- GA4 industry confirmed
- Contact email confirmed
- GA4 measurement ID issued
- Initial tool scope supplied
- Safety exclusions supplied
- DNS baseline supplied
- Technical stack supplied
- Work continuity rules supplied
- Target page range supplied

### Pending

- Search-demand validation
- Competition analysis
- Final cluster selection
- Final information architecture
- Final tool count
- Supporting guide/reference/comparison plan
- GitHub repository creation
- Repository URL
- Initial file structure
- First commit
- GitHub Pages deployment
- Cloudflare DNS connection
- HTTPS verification
- GA4 implementation verification
- Google Search Console verification
- Sitemap submission
- Initial browser QA
- Initial production audit

---

## 23. Project Status Log

### 2026-07-31 — Initial Handover Created

- Created the initial project handover
- Recorded domain, brand, audience, technical stack, safety boundaries, and initial tool concepts
- Recorded fixed contact email: `canghun13@naver.com`
- Recorded GA4 ID: `G-TGT88WMVDG`
- Recorded GitHub Pages and Cloudflare DNS baseline
- Established repository continuity and QA rules
- Project remains in planning status
- Repository has not yet been recorded
- No deployment has been verified
- No tool implementation has been verified

---

## 24. Next Required Action

Before implementation:

1. Research search demand and competition across the proposed clusters
2. Mark each proposed tool as accepted, revised, merged, deferred, or rejected
3. Identify 1–6 additional tools only if genuine workflow gaps remain
4. Finalize the initial sitemap and page counts
5. Create the GitHub repository
6. Replace `TBD` repository fields in this handover
7. Commit this file as the project’s initial operating record

Do not begin bulk page generation until the validated launch scope is recorded here.

---

## 25. Completion Definition

Guitar Setup Lab may be marked “initial build complete” only when all of the following are true:

- The validated initial scope is implemented
- The deployed tool count is confirmed
- The deployed public-page count is confirmed
- All tools genuinely function
- Diagnostic branches have scenario tests
- Numerical tools have expected-value tests
- Safety limits are visible and correct
- Thin pages are reduced to zero
- High-severity issues are zero
- Responsive QA is complete
- GA4 uses `G-TGT88WMVDG`
- Contact email is consistently `canghun13@naver.com`
- Sitemap matches the deployed public pages
- GitHub Pages and HTTPS work
- GSC status is recorded
- `handover.md` is current
- All completed work is committed and pushed
- Local HEAD matches `origin/main`
- Production deployment is verified

Until those conditions are met, do not describe the project as fully completed.
# 2026-07-31 — Third expansion: luthier geometry, calibrated templates, and PDF QA

## Repository and release scope

- Repository: `https://github.com/canghun13/guitarsetuplab`
- Branch: `main`
- Start commit: `9f355198f3f5bf725885740eb715f3b2a2a62d78`
- Production: `https://guitarsetuplab.com/`
- Public HTML: 71
- Functional tools: 41
- Hubs: 6
- Guides: 10
- References: 6
- Comparisons: 3
- Basic pages: 5
- Sitemap URLs: 70 (404 excluded)

## Implemented tools

1. Fret Position Template Generator
2. Fret Slot Print Template
3. Nut String Spacing Generator
4. Bridge String Spacing Generator
5. Fretboard Radius Matcher
6. Saddle Radius Planner
7. Multiscale Fretboard Planner
8. Neck Angle Planner
9. Headstock String Break-Angle Tool
10. Tremolo Spring Balance Planner
11. Shim Thickness Planner

The home page and shared navigation now expose a Luthier Geometry & Build hub. Two guides, two references, and one comparison support actual-size printing, string-spacing measurement, fret formulas, geometry datums, and equal-center/equal-edge-gap decisions. Targeted internal links connect scale → fret → slot; nut → bridge/gauge; radius → saddle; multiscale → fret reference; neck angle → shim; headstock angle → tuning stability; and tremolo balance → string tension.

## Shared geometry engine

Pure modules live in `scripts/assets/geometry/` and are mirrored to deployed `assets/geometry/`: core unit/validation/calibration/tiling, fret coordinates, string spacing, radius/saddle geometry, multiscale coordinates, and angle/shim projections. Internal distances use millimetres; unit conversion occurs at the boundaries; output rounding is display-only. Formula definitions, primary sources, limitations, and deliberately deferred areas are documented in `research/luthier-geometry-sources.md`.

## Calculation and static validation

- `scripts/geometry-test.mjs`: 65 assertions passed.
- Fret fixtures: 25.5 in, 24.75 in, 34 in, 628 mm, 650 mm; 12th = half scale; 24th = three-quarter scale; monotonic cumulative positions; decreasing adjacent spacing; invalid counts/scales rejected.
- Spacing fixtures: equal-center/equal-gap equivalence for equal gauges, divergence for mixed gauges, 4/5/6 strings, margins/spreads preserved, invalid geometry rejected.
- Radius fixtures: known chord/sagitta inverses, sensitivity, invalid sagitta, compound interpolation, saddle offsets.
- Multiscale fixtures: ordinary equal-scale collapse, 6/7/8 strings, exact perpendicular fret, ordered coordinates, invalid scale/string/fret relationships.
- Angle fixtures: known triangles, zero angle, neck projection, shim thickness, extreme/invalid input handling.
- Print fixtures: 50 mm and 2 in lengths, tolerance/correction factor, tiled page count/order/overlap/registration data.
- Static build/test: 71 HTML, 41 tool pages, metadata, Open Graph, canonical, H1, JSON-LD, GA4, email, sitemap, robots, llms, ES-module syntax/imports, assets, and production-root/site mirror passed with 0 failures.
- Broken links: 0; orphan pages: 0; JavaScript syntax errors: 0.
- Content audit: Sufficient 71, Needs reinforcement 0, Thin 0, HIGH 0, MEDIUM 0.

## Browser QA

The Codex in-app browser tested 15 priority pages at 1440, 1280, 1024, 768, and 390 px: 75 combinations, document overflow 0, missing H1 0. All 11 new forms produced input-dependent results. Invalid string-count/gauge and multiscale-fret states produced visible validation; a 49 mm reading of the 50 mm bar produced `OUTSIDE TOLERANCE — DO NOT USE TEMPLATE`. Copy/reset/print presence, native labelled controls, mobile menu state, wide-table containment, warning/calibration text, and existing Repair Quote/String Tension/Setup Wizard regressions passed. Console errors/warnings: 0. Detailed record: `research/browser-qa.md`.

## PDF and print QA

The common print stylesheet removes navigation, forms, actions, footer, and workflow cards; keeps result borders/type legible in black and white; repeats table headings; preserves money columns; and avoids isolated workflow/last-template pages.

Real Chromium generated 16 final PDFs for A4 and US Letter: Guitar Repair Intake (3/3 pages), Repair Quote (3/3), Parts and Labor Job Sheet (4/4), Maintenance Schedule (2/2), Fret Position (3/3), Fret Slot (4/4), Nut Spacing (2/2), and Bridge Spacing (2/2). All page boxes and page content streams passed. Poppler rendered 46 pages; visual inspection found no blank page, clipping, table overflow, or unreadable amount column. Browser calibration geometry was 188.96875 px for 50 mm and 192 px for 2 in. Detailed record: `research/pdf-qa.md`.

Physical printer limitation: a correct browser/PDF cannot guarantee that a viewer, driver, or printer avoids scaling. Users must select Actual size / 100%, disable Fit to page, and measure both printed bars. Outside-tolerance templates must not be used for cutting.

## Release verification

- Implementation commit: `8a7bab274e5fa7795597abb0455ea251112bd581`
- Push: successful to `origin/main`
- GitHub Actions `Quality checks`: success
- GitHub Actions `pages build and deployment`: success
- Production verification: home, Build hub, Fret Position, Fret Slot, Nut Spacing, Multiscale, geometry module, print stylesheet, and sitemap all returned 200.
- Production home contains `Five connected benches`; production sitemap contains 70 URLs and the new fret-template route.
- The final handover-only commit follows this implementation commit; the final report records its exact SHA and verifies `HEAD == origin/main`.

### Closeout verification — 2026-07-31

- Starting closeout commit: `ee94093916b934d3cbe4964701f9986f09bdae40`.
- Working tree was clean before this handover-only update; no unfinished implementation change was found or removed.
- Rebuilt static output and ran `scripts/test.mjs` plus `scripts/geometry-test.mjs`: PASS, 71 HTML pages, 41 tools, 0 failures, 65 geometry assertions.
- Latest GitHub Actions Quality checks and Pages deployment for `ee94093`: completed successfully.
- Production recheck: `/`, `/categories/luthier.html`, `/tools/fret-position-template.html`, and `/sitemap.xml` returned 200.
- Exact next session task: resolve the `www.guitarsetuplab.com` certificate mismatch, then verify the normal HTTPS redirect and record the resulting certificate/SAN and redirect status. Do not change site features as part of that operational task.
- This closeout entry is committed and pushed separately; final SHA and `HEAD == origin/main` are verified after the push.

## Operations snapshot

- Apex DNS: GitHub Pages A records `185.199.108.153` through `185.199.111.153`.
- Apex HTTPS: 200 OK, GitHub Pages.
- `www` DNS: CNAME `canghun13.github.io`.
- `www` HTTPS: still fails ordinary validation with `SEC_E_WRONG_PRINCIPAL`. Returned certificate subject is `CN=*.github.io`; SANs cover GitHub domains, not `www.guitarsetuplab.com`.
- Cloudflare account/zone/proxy settings: Not verified; DNS responses only.
- Google Search Console domain property, sitemap submission, and indexing: Not verified; no authenticated account state was available.

## Existing pages changed

All generated pages receive the Build navigation link plus shared geometry/print styles. Existing document outputs receive the corrected print rules. Repair Quote money tables receive a dedicated print column layout. No existing tool was removed, no domain/email/GA4 identifier changed, and root deployment files remain generated mirrors of `site/`.

## Deferred work

- Reissue/attach a certificate that covers `www.guitarsetuplab.com`, then recheck the ordinary HTTPS redirect.
- Verify the Cloudflare zone/proxy state and GSC domain property/sitemap from authenticated user accounts.
- Measure at least one physical inkjet/laser print of both calibration bars; browser automation cannot close this hardware boundary.
- Body/Neck Blank Planner and Guitar Build Cost Planner were intentionally deferred until their kerf/nesting/inventory and currency/costing models can be implemented and tested without filler behavior.

## Next priorities

1. Resolve `www` TLS and document the final apex redirect/canonical behavior.
2. Verify GSC domain ownership and submit `https://guitarsetuplab.com/sitemap.xml`.
3. Run a physical A4 and Letter ruler check on one fret template and record printer/viewer settings.
4. If extending the Build cluster, implement the blank planner or build-cost planner only with dedicated fixtures and printable records.

---

# 2026-08-01 — Full content-depth audit and reinforcement

## Repository and deployed inventory

- Repository: `https://github.com/canghun13/guitarsetuplab`
- Branch: `main`
- Starting commit: `98df55e84e775566e0b7d5caaf8b6472ddfe18df`
- Content implementation commit: `8406b844779ebfc3b9199f0b99920cafae9f0179`
- Production: `https://guitarsetuplab.com/`
- Public HTML: 71
- Functional tools: 41
- Category hubs: 6
- Guides: 10
- References: 6
- Comparisons: 3
- Basic pages: 5
- Sitemap URLs: 70; `404.html` remains excluded

## Audit method and measured change

`scripts/content-audit.mjs` now audits every generated page. It isolates `<main>` and excludes navigation, footer, scripts, styles, interactive workbench UI, input labels, placeholders, select options, buttons, and the initial result panel from explanatory word counts. It records headings and hierarchy, required content components, examples, limitations, method, related workflow, inbound/outbound links, exact normalized sentence repetition within and across pages, common site protocol, and interactive tool scaffolding. `npm test` runs the audit in read-only `--check` mode; `npm run audit` regenerates `research/content-depth-audit.md`.

At the starting commit, the same word extraction measured: tools 156/170/184 min/average/max, hubs 28/124/200, guides 94/108/132, references 49/95/129, comparisons 85/96/109, and basic pages 30/104/268. Under the final scope floors and required-component rules this was Sufficient 4, Needs reinforcement 1, Thin 66.

Final substantive word metrics are: tools 564/676/892 min/average/max, hubs 185/288/365, guides 336/357/384, references 287/338/379, comparisons 327/339/362, basic pages 30/154/519, and all pages 30/519/892. Word bands are guidance rather than the sole classifier; Contact, Privacy, About, and 404 remain intentionally concise. Common safety and measurement protocol is reported separately and does not masquerade as unique editorial content.

Final classification: Strong 0, Sufficient 71, Needs reinforcement 0, Thin 0, Duplicate-risk 0, Functionally incomplete 0, HIGH 0, MEDIUM 0.

## Content reinforcement completed

- All 41 tools now include static HTML for purpose, preparation, field-specific input meaning, result interpretation, method/logic, a concrete worked example, assumptions/limitations, stop conditions, and 2–3 targeted next-workflow links.
- Diagnostic/setup, measurement/adjustment, strings/tuning, electronics/wiring, repair-document, and luthier/geometry groups received tool-specific evidence and examples rather than a single duplicated generic block.
- All six hubs now explain page selection, evidence standards, order of work, and stop boundaries.
- All ten guides, six references, and three comparisons now include scope, a task-specific example, recording method, verification checklist, limitations, and relevant outbound workflow links.
- Home now explains the five-bench dependency model, evidence standard, and operational limits.
- Duplicate legacy quick summaries and duplicate related-card sections were removed from tool pages.
- About, Contact, Privacy, and 404 were reviewed and intentionally not padded; their bounded purpose was already clear.
- Internal-link audit: broken links 0, orphan pages 0, every tool has inbound and targeted outbound workflow links.

## New tools and scope decision

No new tool or page was added. The 41-tool content and all 30 supporting/basic pages were reinforced and re-audited first, as required. Nut Slot Target Height, Body/Neck Blank Planner, Guitar Build Cost Planner, and Fretwire Size/Crown Height Selector remain Phase 2 candidates and were not started because each needs its own source/model review and regression fixtures; bundling them into this content closeout would reduce verification quality. Tool-count target complete: **No — 41/45**. Public-page cap remains 71/75.

## Automated and browser QA

- Build: PASS, 71 public HTML and 41 tools.
- Static/SEO: PASS, 0 failures for metadata, unique title, description, canonical, one H1, Open Graph, JSON-LD, GA4 `G-TGT88WMVDG`, fixed email `canghun13@naver.com`, sitemap, robots, llms, assets, ES-module syntax/imports, root/site mirror, broken links, and orphans.
- Geometry fixtures: PASS, 65 assertions.
- Content audit: PASS, 71 Sufficient, all completion gates zero.
- Browser responsive matrix: PASS, 15 pages × 5 widths (1440/1280/1024/768/390) = 75 combinations; horizontal overflow 0, missing H1 0, missing supporting heading 0, mobile menu visible at 390.
- Fret Buzz Diagnostic: input-dependent result, Copy state, Reset state, and overflow passed.
- Fret Position Template: 25.5 in / 24 frets returned 24 rows, fret 12 = 12.7500 in, calibration output, Print action, and overflow passed.
- Console errors/warnings on the production representative tool: 0.

## Workflow and production verification

- GitHub Actions `Quality checks` run `30683225666` for `8406b84`: completed successfully.
- GitHub Pages `pages-build-deployment` run `30683225267`: completed successfully immediately after the implementation push.
- Production `/`, Build hub, Fret Buzz, Fret Position, Setup Order guide, String Tension Formula reference, Pot Values comparison, and `sitemap.xml`: HTTP 200.
- Production DOM contains the new depth sections, omits the obsolete legacy summary, has one H1, has no horizontal overflow on checked pages, and serves the final content from the custom domain.

## Completion and external boundaries

- Current 41-tool initial scope: **Initial build complete — Yes**. All content, functional, static, responsive, deployment, and repository gates for the current scope are zero/passing.
- 45-tool expansion target: **No — 41/45**, explicitly Phase 2.
- `www.guitarsetuplab.com` certificate correction, authenticated Cloudflare/GSC verification, sitemap submission/index coverage, and a physical A4/Letter printer calibration remain external operational tasks; this session did not claim them complete.

## Exact next task

Resolve the `www.guitarsetuplab.com` certificate mismatch and verify its normal HTTPS redirect to the apex. Record certificate SAN, redirect status, Cloudflare proxy state if authenticated access is available, and update this handover without changing site features. After that operational closeout, begin Phase 2 only with a sourced specification and fixtures for the Nut Slot Target Height Tool.

The final handover-only commit follows the implementation commit. After its push, verify a clean working tree and exact equality of local `HEAD` and `origin/main`.

---
