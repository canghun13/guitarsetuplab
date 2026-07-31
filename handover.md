# Guitar Setup Lab — Project Handover

## 2026-07-31 통합 구현 현황 (최신)

- 저장소 URL: `https://github.com/canghun13/guitarsetuplab`
- 현재 branch: `main`
- 세션 시작 원격 commit: `d99d727dae66df01bed9c5915e44ec5e08af35b3`
- 최신 구현·검증 commit: `aaafa90f7254f18212d5c17ed88bb2f5779ea46d` (이 handover 갱신 커밋은 그 다음 커밋이며, 최종 hash는 `git rev-parse HEAD`로 확인)
- 배포 URL: `https://guitarsetuplab.com/`
- GitHub Pages: 배포 workflow 구현, push 후 실행 상태 확인 필요
- GA4: `G-TGT88WMVDG`를 공개 HTML 32개 전체에 1회 초기화로 적용, 정적 검사 Pass
- GSC: Not verified
- Cloudflare: Not verified. 사용자 관리 영역의 DNS baseline은 기존 문서 14절 참조
- HTTPS: Not verified
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
- GitHub Pages Actions 배포 workflow 및 `site/CNAME` 구현.
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

- push 후 GitHub Actions Pages workflow 성공 여부와 production artifact 확인.
- `https://guitarsetuplab.com/`, apex/www/HTTPS 및 canonical host 실제 응답 확인.
- Cloudflare DNS/zone와 GSC domain property 및 sitemap 제출 상태는 계정 권한이 필요한 사용자 관리 영역이므로 검증 필요.
- 초기 목표 45–50개 도구/65–75개 페이지 중 현재 18개/32개. 페이지 수를 위한 filler 없이 검증된 후속 도구를 구현할 것.
- 모든 계산 도구의 독립 수치 회귀 fixture와 print-to-PDF 시각 회귀 자동화를 후속 강화.

### 다음 작업 우선순위

1. 배포 workflow, custom domain, HTTPS, apex/www를 확인하고 실패 시 Pages 설정을 수정.
2. Ground Hum Diagnostic(고전압·앰프 내부 작업 제외), Repair Intake Form, Repair Quote Generator, Parts & Labor Job Sheet 구현.
3. 제조사 unit-weight 출처를 확정한 뒤 String Tension Matcher 구현.
4. Pickup Wiring Selector→Phase→Hum 및 Pot/Cap 비교 cluster 구현.
5. 실제 인쇄 교정자를 포함한 Fret Position/Spacing 제작 cluster 구현.

### 알려진 위험과 사용자 관리 영역

- 배포·DNS·GSC·HTTPS는 아직 실제 검증 전이며 완료로 간주하지 않는다.
- 진단 결과는 물리 검사나 수리 보장이 아니며 비가역 작업을 확정하지 않는다.
- Cloudflare DNS, GitHub repository Pages environment 설정, GSC verification/sitemap 제출은 사용자의 외부 계정 관리 영역이다.
- 마지막 push 상태와 `HEAD == origin/main`은 아래 최종 push 후 이 문서의 상단 및 최종 작업 보고에서 확인한다.

Last updated: 2026-07-31  
Project status: Planning / repository not yet created  
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
- GitHub repository URL: **TBD**
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
