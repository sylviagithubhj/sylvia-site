---
version: "1.0"
name: "오늘의집"
description: "화면 폭 집 사진 위 하늘색 상품 태그 점으로 콘텐츠와 쇼핑을 잇고, 하늘색은 행동에·진회색은 선택에·빨강은 할인과 알림에만 나눠 쓰는 사진 중심 화면"
source:
  - "관찰: 웹 ohou.se 홈·쇼핑 목록·상품 상세의 --ds- CSS 변수와 computed style (실측 2026-10-31)"
  - "관찰: iOS 앱 캡처 6화면(쇼핑 홈, 사진 피드 홈, 검색 결과 필터 바텀시트 4장), 1배율 픽셀 측정 (실측 2026-10-31, 촬영 시기 미상)"
updated: "2026-10-31"

colors:
  # ── Primitive(웹 --ds-core-color-*). 단계 팔레트 중 화면·변수에서 확인한 단계만 ──
  genuine-blue-50: "#f0f8fc"
  genuine-blue-100: "#ddf3ff"
  genuine-blue-350: "#00a1ff"   # 브랜드 하늘색
  genuine-blue-400: "#0497ef"
  genuine-blue-500: "#007bc5"
  genuine-blue-950: "#010d19"
  gray-0: "#ffffff"
  gray-50: "#f5f5f5"
  gray-100: "#ededed"
  gray-150: "#e0e0e0"
  gray-200: "#cecece"
  gray-250: "#c1c1c1"
  gray-300: "#acacac"
  gray-400: "#8c8c8c"
  gray-600: "#5c5c5c"
  gray-700: "#444444"
  gray-850: "#222222"
  gray-900: "#141414"
  legacy-gray-700: "#2f3438"        # 웹 legacy, 앱 글자색과 같다
  legacy-content-base2: "#828c94"
  legacy-content-base4: "#eaedef"
  red-sale: "#ff4650"
  red-critical: "#ff7777"
  # ── Semantic(웹) ──
  background: "{colors.gray-0}"
  background-weak: "{colors.gray-50}"
  background-disabled: "{colors.gray-100}"
  background-brand: "{colors.genuine-blue-350}"
  background-brand-weak: "{colors.genuine-blue-50}"
  background-dim: "#00000066"       # 검정 40%
  foreground: "{colors.gray-900}"
  foreground-weak: "{colors.gray-400}"
  foreground-disabled: "{colors.gray-250}"
  foreground-brand: "{colors.genuine-blue-350}"
  border: "{colors.gray-150}"
  border-strong: "{colors.gray-900}"   # 포커스 링도 이 색
  border-brand: "{colors.genuine-blue-350}"
  border-thumbnail: "#0000000d"     # 검정 5%, 사진 둘레 0.5px
  accent-red: "{colors.red-sale}"   # 할인율·할인가
  background-critical: "{colors.red-critical}"
  foreground-critical: "#f05656"
  background-critical-weak: "#ffeded"
  foreground-attention: "#b27800"
  background-attention: "#d19506"
  background-attention-weak: "#fcf4dd"
  accent-green: "#15b869"
  accent-green-weak: "#e3fcea"
  accent-blue: "#0079fa"
  accent-blue-weak: "#eff5fc"
  # ── 쇼핑 전용(--ds-ext-commerce-*) ──
  today-deals: "#ff4747"
  review-star: "#f7b401"
  review-star-off: "#e8e8e8"
  ohouse-pick: "#31a072"
  today-departure: "#6131d2"
  accent-purple: "#6f3dde"
  # ── 앱(캡처 실측, 이름은 SylviaLab) ──
  app-primary: "#0aa5ff"
  app-fab: "#0198ed"
  app-ink: "{colors.legacy-gray-700}"   # 글자·선택 표시
  app-ink-fill: "#303337"
  app-subtle: "{colors.legacy-content-base2}"
  app-weak-bg: "#f7f9fa"
  app-tile-bg: "{colors.gray-50}"
  app-handle: "{colors.legacy-content-base4}"
  app-divider: "#f2f4f5"
  app-tabbar-line: "#e2e2e2"
  app-checkbox-line: "#e3e6e8"
  app-dim: "#21262980"              # rgba(33,38,41,.5)
  app-badge: "{colors.red-critical}"
  # ── 다크용 legacy 변수(웹에만 있음) ──
  elevation-0-dark: "#0b0c0e"
  elevation-70-dark: "#2d2e30"

typography:
  # 웹: Pretendard Variable, 모든 글자 자간 -0.3px. 이름은 웹 변수 규칙 heading{크기}/body{크기}L{행간}/detail{크기}L{행간}
  heading32: { fontFamily: "Pretendard Variable", fontSize: "32px", fontWeight: 700, lineHeight: "42px", letterSpacing: "-0.3px" }
  heading26: { fontFamily: "Pretendard Variable", fontSize: "26px", fontWeight: 400, lineHeight: "34px", letterSpacing: "-0.3px" }
  heading24: { fontFamily: "Pretendard Variable", fontSize: "24px", fontWeight: 400, lineHeight: "32px", letterSpacing: "-0.3px" }
  heading20: { fontFamily: "Pretendard Variable", fontSize: "20px", fontWeight: 400, lineHeight: "28px", letterSpacing: "-0.3px" }
  heading18: { fontFamily: "Pretendard Variable", fontSize: "18px", fontWeight: 700, lineHeight: "24px", letterSpacing: "-0.3px" }
  heading17: { fontFamily: "Pretendard Variable", fontSize: "17px", fontWeight: 600, lineHeight: "22px", letterSpacing: "-0.3px" }
  body16L28: { fontFamily: "Pretendard Variable", fontSize: "16px", fontWeight: 400, lineHeight: "28px", letterSpacing: "-0.3px" }
  body16L24: { fontFamily: "Pretendard Variable", fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "-0.3px" }
  body16L20: { fontFamily: "Pretendard Variable", fontSize: "16px", fontWeight: 500, lineHeight: "20px", letterSpacing: "-0.3px" }   # 버튼
  body15L24: { fontFamily: "Pretendard Variable", fontSize: "15px", fontWeight: 700, lineHeight: "24px", letterSpacing: "-0.3px" }
  body14L20: { fontFamily: "Pretendard Variable", fontSize: "14px", fontWeight: 400, lineHeight: "20px", letterSpacing: "-0.3px" }
  body14L18: { fontFamily: "Pretendard Variable", fontSize: "14px", fontWeight: 500, lineHeight: "18px", letterSpacing: "-0.3px" }
  detail13L18: { fontFamily: "Pretendard Variable", fontSize: "13px", fontWeight: 400, lineHeight: "18px", letterSpacing: "-0.3px" }
  detail12L20: { fontFamily: "Pretendard Variable", fontSize: "12px", fontWeight: 400, lineHeight: "20px", letterSpacing: "-0.3px" }
  detail12L16: { fontFamily: "Pretendard Variable", fontSize: "12px", fontWeight: 600, lineHeight: "16px", letterSpacing: "-0.3px" }
  detail11L14: { fontFamily: "Pretendard Variable", fontSize: "11px", fontWeight: 400, lineHeight: "14px", letterSpacing: "-0.3px" }
  detail10L14: { fontFamily: "Pretendard Variable", fontSize: "10px", fontWeight: 500, lineHeight: "14px", letterSpacing: "-0.3px" }
  # 앱(1배율 캡처 추정 ±1pt, 행간 미확인)
  app-tab-top: { fontSize: "14px", fontWeight: 700 }
  app-sheet-title: { fontSize: "14px", fontWeight: 700 }
  app-chip: { fontSize: "14px", fontWeight: 500 }
  app-button: { fontSize: "14px", fontWeight: 700 }
  app-sheet-tab: { fontSize: "13px", fontWeight: 700 }
  app-option: { fontSize: "12px", fontWeight: 400 }
  app-tabbar: { fontSize: "10px", fontWeight: 400 }

rounded:
  xs: "2px"
  menu: "3px"        # 웹 데스크톱 1단 메뉴 글자 상자
  sm: "4px"          # 웹 꼬리표·시트 버튼, 앱 필터 버튼·말풍선·체크박스
  select-sm: "6px"
  md: "8px"          # 상품 사진, 구매 버튼, 셀렉트, 앱 검색창
  xl: "12px"         # 고객센터 카드, 앱 바텀시트 위
  xxl: "16px"        # 웹 필터 칩
  xxxl: "20px"
  full: "9999px"
  photo-feed: "0px"  # 앱 홈 피드 사진

spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  app-gutter: "14px"
  lg: "16px"
  xl: "20px"
  app-section-band: "8px"   # 앱 쇼핑 홈 구획 사이 #f7f9fa 띠

size:
  button-lg: "48px"
  button-md: "40px"
  button-xs: "28px"
  button-sheet-web: "44px"
  select: "40px"
  select-sm: "32px"
  option-row: "48px"
  option-row-sm: "40px"
  search-web: "38px"
  app-status-bar: "44px"
  app-chip: "32px"
  app-filter-chip: "28px"
  app-color-swatch: "24px"
  square-badge: ["16px", "20px", "24px"]

layout:
  web-card-width: "214px"       # 1024px 쇼핑 목록 카드
  web-detail-buy-column: "377px"
  app-screen: "375x812pt"

elevation:
  depth10: "0 2px 5px rgba(0,0,0,.05)"
  depth20: "0 2px 5px rgba(0,0,0,.1)"
  depth30: "0 4px 10px rgba(0,0,0,.12)"
  home-card: "0 2px 5px rgba(0,0,0,.15)"
  scrap-icon: "0 1px 3px rgba(0,0,0,.36)"

focus:
  ring-color: "{colors.border-strong}"

motion:
  press: "transform 0.111s cubic-bezier(0.2, 0, 0.2, 1.05)"
  press-scale: 0.97
  overlay: "background-color 0.1s ease-in-out"
  hover-icon-scale: 1.1   # 768px 이상 hover 기기

components:
  button-primary: { backgroundColor: "{colors.background-brand}", textColor: "{colors.gray-0}", typography: "{typography.body16L20}", rounded: "{rounded.md}", height: "{size.button-lg}" }
  button-primary-hover: { overlay: "#00a1ff 4%" }
  button-primary-pressed: { overlay: "#00a1ff 8%", transform: "scale(0.97)" }
  button-outline-brand: { backgroundColor: "{colors.gray-0}", textColor: "{colors.foreground-brand}", borderColor: "{colors.border-brand}", typography: "{typography.body16L20}", rounded: "{rounded.md}", height: "{size.button-lg}" }
  button-outline: { backgroundColor: "{colors.gray-0}", textColor: "{colors.foreground}", borderColor: "{colors.border}", typography: "{typography.body16L20}", rounded: "{rounded.md}", height: "{size.button-lg}" }
  button-outline-hover: { overlay: "rgba(20,20,20,.04)" }
  button-outline-pressed: { overlay: "rgba(20,20,20,.08)" }
  button-outline-small: { borderColor: "{colors.border}", typography: "{typography.body14L18}", rounded: "{rounded.md}", height: "{size.button-md}" }
  button-disabled: { backgroundColor: "{colors.background-disabled}", textColor: "{colors.foreground-disabled}" }
  button-filter-apply-app: { backgroundColor: "{colors.app-primary}", textColor: "{colors.gray-0}", typography: "{typography.app-button}", rounded: "{rounded.sm}", height: "38px" }
  button-filter-reset-app: { backgroundColor: "{colors.gray-0}", textColor: "{colors.app-ink}", borderColor: "{colors.gray-100}", typography: "{typography.app-button}", rounded: "{rounded.sm}", height: "38px" }
  search-web: { backgroundColor: "{colors.background-weak}", textColor: "{colors.foreground}", typography: "{typography.body14L20}", rounded: "{rounded.full}", height: "{size.search-web}" }
  search-app: { backgroundColor: "{colors.app-weak-bg}", rounded: "{rounded.md}", height: "36px" }
  select: { backgroundColor: "{colors.gray-0}", textColor: "{colors.foreground}", placeholderColor: "{colors.foreground-weak}", borderColor: "{colors.border}", typography: "{typography.body14L20}", rounded: "{rounded.md}", height: "{size.select}" }
  select-disabled: { backgroundColor: "{colors.background-weak}", textColor: "{colors.foreground-disabled}" }
  chip-category-app: { backgroundColor: "{colors.app-weak-bg}", textColor: "{colors.app-ink}", typography: "{typography.app-chip}", rounded: "{rounded.full}", height: "{size.app-chip}" }
  chip-category-app-selected: { backgroundColor: "{colors.app-ink-fill}", textColor: "{colors.gray-0}" }
  chip-filter-app: { backgroundColor: "{colors.gray-0}", textColor: "{colors.app-ink}", rounded: "{rounded.full}", height: "{size.app-filter-chip}" }
  tab-app-selected: { textColor: "{colors.app-ink}", indicator: "2px {colors.app-ink}" }
  tab-web-selected: { textColor: "{colors.foreground-brand}", indicator: "2px {colors.foreground-brand}" }
  bottom-sheet-app: { backgroundColor: "{colors.gray-0}", rounded: "{rounded.xl}", dim: "{colors.app-dim}", handleColor: "{colors.app-handle}" }
  badge-count-app: { backgroundColor: "{colors.app-badge}", textColor: "{colors.gray-0}", rounded: "{rounded.full}" }
  square-badge-gray: { backgroundColor: "#0000000d", textColor: "{colors.foreground-weak}", typography: "{typography.detail10L14}" }
---

# 오늘의집 디자인 시스템

> 근거: 관찰 기반 (웹: Claude 데스크톱 앱 내장 브라우저(Chromium) · 1024px 폭과 375×812 모바일 에뮬레이션, 페이지 루트의 CSS 변수와 computed style을 읽음, 실측일 2026-10-31) + (앱 캡처: 촬영 시기 확인 필요, iOS 앱 쇼핑 홈·사진 피드 홈·검색 결과 필터 바텀시트 4장 등 서로 다른 화면 6장, 374~375pt 폭 1배율 이미지에서 픽셀 측정. 실측일 2026-10-31)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다.

웹 값은 사이트에 걸린 `--ds-` CSS 변수와 화면 computed style에서 읽었다. 작업 컨테이너의 셸은 사이트에 접속하지 못하고 WebFetch는 robots 규칙으로 막혀 내장 브라우저를 썼다. 앱 값은 SylviaLab 벤치마킹 피그마 파일 속 iOS 캡처에서 쟀다. 캡처 시기를 알 수 없어서 웹과 앱이 다를 때 플랫폼 차이인지 시기 차이인지는 확인 필요다.

## 1. 개요와 원칙
- 서비스 성격: 집 꾸미기 콘텐츠(집들이·집사진·커뮤니티)와 가구·생활용품 쇼핑을 합친 서비스. 운영사는 버킷플레이스. 웹(ohou.se)과 iOS·Android 앱.
- 디자인 인상 한 줄: 흰 바탕과 진한 회색 글자 위에 하늘색 하나로 선택·행동을 표시하고, 할인만 빨강으로 띄우는 사진 중심 화면.
- 공식 시스템 이름: 공개된 이름 없음. 웹 페이지 루트에 `--ds-` 접두 CSS 변수 약 990개가 걸려 있다. `--ds-core-*`(기초 토큰), `--ds-legacy-core-*`(이전 세대 토큰), `--ds-ext-commerce-*`(쇼핑 전용), 그리고 boxButton·chip·select·snackbar·bottomSheet 같은 컴포넌트 토큰으로 나뉜다. 시스템 이름은 확인 필요.
- 디자인 원칙(공식 원칙은 공개되지 않았다)
  1. 사진이 주인공이다. 앱 홈은 화면 폭을 꽉 채운 세로형 집 사진을 모서리 없이 쓰고, 그 위에 하늘색 "+" 점으로 상품 위치를 찍는다. (관찰에서 정리)
  2. 하늘색은 행동과 선택에만 쓴다. 웹 #00a1ff, 앱 실측 #0aa5ff(하단 탭 선택, 상품 태그 점, 필터 결과 보기 버튼). (관찰에서 정리)
  3. 앱은 글자와 선택 표시를 진회색(#2f3438) 하나로 묶는다. 상단 탭 글자와 밑줄, 선택된 칩, 말풍선, 선택된 라디오가 모두 이 색이다. (관찰에서 정리)
  4. 빨강은 할인(#ff4650)과 알림(#ff7777)에만 쓴다. (관찰에서 정리)
  5. 면은 흰색과 아주 옅은 회색(앱 #f7f9fa, 웹 #f5f5f5)만으로 나눈다. 그림자는 옅다. (관찰에서 정리)
- 톤: 색은 적게, 사진을 크게. 차분한 회색 위에 하늘색 행동 하나.

### 이 문서를 읽는 AI 에이전트에게
- 색·크기는 YAML 토큰 이름으로만 쓴다. 웹 화면이면 `background-brand`·`foreground` 같은 웹 semantic을, 앱 화면이면 `app-` 토큰을 먼저 고른다.
- 하늘색(`background-brand` #00a1ff, 앱 `app-primary` #0aa5ff)은 주 행동 버튼·웹 선택 탭·하단 탭 선택·상품 태그 점에만 쓴다. 앱의 선택 표시(탭 밑줄, 칩, 라디오)는 `app-ink` #2f3438이다.
- 빨강은 두 가지를 나눠 쓴다. 할인은 `accent-red` #ff4650, 알림 점·숫자 배지는 `background-critical` #ff7777.
- 사진을 가장 크게 둔다. 판단이 어려우면 색을 빼고 사진과 회색 글자만 남기는 쪽을 고른다.
- 앱 값은 1배율 캡처 추정(±1pt)이다. 정밀한 구현이 필요하면 웹 변수 값을 우선한다.

### 특장점
- 사진에서 바로 상품으로 간다 — 앱 홈 피드는 374×487pt 세로 사진을 모서리 0으로 깔고, 그 위에 지름 약 18pt #0aa5ff "+" 점으로 상품 위치를 찍는다. 사진 아래 44pt 썸네일 줄과 "상품 더보기 >"가 이어진다.
- 행동색과 선택색을 나눈다 — 하늘색(#00a1ff/#0aa5ff)은 바로구매·결과 보기·하단 탭 선택에만, 앱의 탭 밑줄·선택 칩·라디오는 진회색 #2f3438로 표시한다.
- 빨강을 쓰임별로 둘로 나눈다 — 할인율·할인가는 #ff4650, 알림 점·숫자 배지·"OPEN" 알약은 #ff7777이다.
- 필터를 한 장의 탭 달린 바텀시트로 모은다 — 28pt 외곽선 칩을 누르면 정렬·주거정보·색상 등 탭이 있는 약 600pt 시트가 열리고, 탭을 누르면 그 구획으로 스크롤된다. 하단은 초기화 + "[n]개 콘텐츠 보기".
- 토큰이 층으로 나뉘어 있다 — 웹 `--ds-` 변수 약 990개가 core·legacy-core·ext-commerce(오늘의딜 #ff4747, 오늘출발 #6131d2 등 쇼핑 전용)·컴포넌트 토큰으로 갈린다.

### 배울 점
- 콘텐츠 안에서 상품을 팔 때 오늘의집처럼 사진 위에 작은 브랜드색 점을 찍고 사진 아래에 상품 썸네일 줄을 붙인다.
- 필터 항목이 많을 때 오늘의집처럼 칩 줄은 입구로만 두고, 탭으로 구획을 오가는 바텀시트 하나에 모은 뒤 결과 수를 버튼에 넣는다("[n]개 보기").
- 같은 화면에 행동과 선택이 함께 있을 때 오늘의집 앱처럼 행동은 브랜드색, 선택은 진한 중립색으로 나눠 브랜드색이 흐려지지 않게 한다.

## 2. 색상
웹 값은 `--ds-core-color-*` 변수에서 읽고 화면 computed style과 대조했다. 웹 화면 글자 중 상당수(#2f3438, #828c94)는 legacy 토큰에서 온다. 앱 값은 1배율 캡처 픽셀에서 읽었다. 넓은 면 색은 정확하고, 작은 글자 색은 글자 테두리 번짐 때문에 오차가 있다. 앱 쪽 토큰 이름(app-…)은 SylviaLab이 붙인 것이다. 투명도가 있는 색은 HEX 칸에 바탕색을 적고 불투명도를 쓰임에 적었다.

### 색 체계
웹은 `--ds-core-color-*` 단계 팔레트(primitive) 위에 역할 이름(semantic) 변수를 얹는 두 층이다. 앱은 공개 토큰이 없어 캡처에서 읽은 값에 SylviaLab이 역할 이름을 붙였다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| Primitive(웹 변수) | genuineBlue-350 #00a1ff, gray-900 #141414, gray-150 #e0e0e0 | 토큰 정의. genuineBlue는 50~950을 50 간격 19단계로 둔다 |
| Semantic(웹 변수) | backgroundBrand, foreground, foregroundWeak, border, accentRed | 실제 화면. 이 문서 YAML의 `background-*`, `foreground-*`, `border-*` |
| Legacy(웹 변수) | legacy gray-700 #2f3438, content-base2 #828c94, content-base4 #eaedef | 이전 세대 토큰. 웹 홈 글자 다수와 앱 값이 여기와 겹친다 |
| 쇼핑 전용(웹 변수) | foregroundTodayDeals #ff4747, foregroundReviewStar #f7b401 | 쇼핑 표시만 |
| 앱 관찰 값 | app-primary #0aa5ff, app-ink #2f3438, app-weak-bg #f7f9fa | 앱 화면. 이름은 SylviaLab |

### 브랜드·행동(웹)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| backgroundBrand / foregroundBrand / borderBrand | #00a1ff | 바로구매·글쓰기 버튼 배경, 선택된 탭 글자, 장바구니 버튼 테두리와 글자, 탭 밑줄 |
| backgroundBrandWeak | #f0f8fc | 연한 브랜드 면 |
| genuineBlue-100 | #ddf3ff | 가장 연한 하늘색 |
| genuineBlue-400 | #0497ef | 한 단계 진한 하늘색(legacy interactive-primary1-thick도 같은 값) |
| genuineBlue-500 | #007bc5 | 진한 하늘색 |
| genuineBlue-950 | #010d19 | genuineBlue 마지막 단계 |
| accentRed | #ff4650 | 할인율, 할인가, "특별인증가" 같은 강조 글자 |

genuineBlue 단계는 50(#f0f8fc)부터 950(#010d19)까지 50 간격으로 19단계가 있다. 350이 #00a1ff다.

### 브랜드·행동(앱)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| app-primary | #0aa5ff | 하단 탭 선택 아이콘·글자, 사진 속 상품 태그 점, 필터 시트 "n개 콘텐츠 보기" 버튼 바탕. 웹 #00a1ff와 조금 다르다. 같은 토큰인지(캡처 색 공간 차이인지)는 확인 필요 |
| app-fab | #0198ed | 홈 피드 오른쪽 아래 "+" 떠 있는 버튼 바탕. 웹 genuineBlue-400(#0497ef)에 가깝다 |
| app-badge-red | #ff7777 | 하단 탭 "OPEN" 알약 배지, 장바구니 숫자 배지, 메뉴 아이콘 새 소식 점. 웹 backgroundCritical과 같다 |

### 바탕·선(웹)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| background | #ffffff | 페이지 배경 |
| gray-50 / backgroundWeak | #f5f5f5 | 검색창 배경, 비활성 셀렉트 배경 |
| gray-100 / backgroundDisabled | #ededed | 비활성 배경 |
| legacy content-base4 | #eaedef | 고객센터 카드 테두리, 이미지 자리 배경 |
| gray-150 / border | #e0e0e0 | 기본 테두리(흰 버튼, 셀렉트, 쿠폰 꼬리표) |
| gray-200 | #cecece | 댓글 입력 테두리 |
| gray-300 | #acacac | 품절 띠 배경, 사진 위 비활성 글자 |
| borderThumbnail | #000000 | 5% 불투명. 상품 사진 둘레 0.5px 선 |
| backgroundDim | #000000 | 40% 불투명. 시트·모달 뒤 막 |

### 바탕·선(앱)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| app-weak-bg | #f7f9fa | 상단 검색창 바탕, 선택 안 된 칩 바탕, 쇼핑 홈 구획 사이 8pt 띠 |
| app-tile-bg | #f5f5f5 | 쇼핑 홈 바로가기 아이콘 칸 바탕(웹 gray-50과 같다) |
| app-handle | #eaedef | 바텀시트 손잡이(웹 legacy content-base4와 같다) |
| app-divider | #f2f4f5 | 필터 시트 구획 사이 1pt 선 |
| app-tabbar-line | #e2e2e2 | 하단 탭 바 위 1pt 선 |
| app-line | #e9eae9 | 검색 결과 필터 칩 1pt 테두리, 상단 탭 아래 선(시트 막 아래라 막을 걷어내 계산한 추정값) |
| app-outline | #ededed | 필터 시트 "초기화" 버튼 1pt 테두리(±오차) |
| app-checkbox-line | #e3e6e8 | 꺼진 체크박스·라디오 1pt 테두리(±오차) |
| app-dim | #212629 | 50% 불투명. 바텀시트 뒤 막. 막 위 흰 바탕이 #909394로 찍혀 역산했다. 웹 모바일 앱 유도 시트의 막과 같은 값이다 |
| app-photo-counter | #000000 | 약 40% 불투명(역산). 사진 오른쪽 위 "1/3" 알약 바탕, 글자 흰색 |
| app-scrollbar | #a6a6a6 | 필터 시트 오른쪽 끝 약 2pt 스크롤 막대 |

### 글자(웹)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-900 / foreground | #141414 | 기본 글자, 상품명, 가격. 진한 테두리(borderStrong), 반전 배경, 포커스 링 |
| legacy gray-700 | #2f3438 | 상단 메뉴·탭 글자, 고객센터 카드 글자. 홈 화면에서 가장 많은 글자색 |
| gray-850 | #222222 | 댓글 입력 글자 |
| gray-700 | #444444 | 진한 회색 |
| gray-600 | #5c5c5c | 중간 회색 |
| legacy content-base2 | #828c94 | 시트 보조 문구, "모바일 웹으로 볼래요" 같은 약한 버튼 |
| gray-400 / foregroundWeak | #8c8c8c | 평점·리뷰 수, 선택 안 된 카테고리 경로, 배송 꼬리표 글자 |
| gray-250 / foregroundDisabled | #c1c1c1 | 비활성 글자, 꺼진 스위치 트랙 |

### 글자(앱)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| app-ink | #2f3438 | 상단 탭 글자·밑줄, 시트 탭 선택 글자·밑줄, 시트 구획 제목, 선택된 라디오, 초기화 버튼 글자, 아이콘(하단 탭 꺼짐, 상단 바). 캡처에서는 #303337로도 읽힌다(1배율 오차) |
| app-ink-fill | #303337 | 쇼핑 홈 선택된 칩 바탕, "고감도 셀렉트샵" 말풍선 바탕. app-ink와 같은 색으로 본다 |
| app-subtle | #828c94 | 필터 시트의 선택 안 된 탭 글자, 검색 결과 상단의 선택 안 된 탭 글자 |
| app-placeholder | #9fa4ab | 검색창 안내 글자(작은 글자라 ±오차) |
| app-option-off | #89919a | 필터 시트의 선택 안 된 라디오·체크 항목 글자(작은 글자라 ±오차, #828c94일 수 있음) |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success(accentGreen) | #15b869 | 성공 |
| accentGreenWeak | #e3fcea | 성공 연한 배경 |
| warning(foregroundAttention) | #b27800 | 주의 글자 |
| attention 배경·테두리 | #d19506 | 주의 배경·테두리 |
| attention 연한 배경 | #fcf4dd | 주의 연한 배경 |
| error(foregroundCritical) | #f05656 | 오류 글자 |
| backgroundCritical | #ff7777 | 오류 배경·테두리(앱 배지 색과 같다) |
| critical 연한 배경 | #ffeded | 오류 연한 배경 |
| info(accentBlue) | #0079fa | 정보 |
| accentBlueWeak | #eff5fc | 정보 연한 배경 |

### 쇼핑 전용(ext-commerce)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| foregroundTodayDeals | #ff4747 | 오늘의딜 글자·배경·테두리 |
| foregroundReviewStar | #f7b401 | 별점 별 |
| 꺼진 별 | #e8e8e8 | 꺼진 별점 별 |
| accentOhousePick | #31a072 | 오늘의집 추천 표시 |
| foregroundTodayDeparture | #6131d2 | 오늘출발 표시 |
| accentPurple | #6f3dde | 보조 강조 |
| accentPurple 연한 배경 | #f9f1fb | 보조 강조 연한 배경 |

### 색상 필터 견본(앱)
검색 결과 필터 시트 "색상" 구획의 24pt 원형 견본 색이다. 사진을 색으로 거르는 데 쓰는 고정 견본이라 따로 적는다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| swatch-white | #ffffff | 화이트(연한 테두리 원) |
| swatch-gray | #bdbdbd | 그레이 |
| swatch-black | #000000 | 블랙 |
| swatch-beige | #f4e7c5 | 베이지 |
| swatch-brown | #644134 | 브라운 |
| swatch-red | #d46360 | 레드 |
| swatch-pink | #f9b3c3 | 핑크 |
| swatch-blue | #35c5f0 | 블루 |
| swatch-green | #96d783 | 그린 |
| swatch-mint | #9ae6d5 | 민트 |
| swatch-yellow | #fed144 | 옐로우 |

### 기획전 테마
| 토큰 | HEX | 쓰임 |
|---|---|---|
| promo-bg | #f1f0fd | 앱 쇼핑 홈 맨 위 큰 배너의 연보라 바탕(세일 기획전 기간 화면). 평소 색이 아니다 |
| promo-badge | #7b67f5 | 같은 배너 안 "UP TO 90%" 알약 바탕. 평소 색이 아니다 |

### 화면 모드
- 기본(라이트)만 관찰했다. 웹 변수에 다크용 legacy elevation 두 단계만 있고, `prefers-color-scheme` 규칙은 찾지 못했다. 다크 모드 전체 값은 확인 필요.

### 다크 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| legacy elevation-0 | #0b0c0e | 다크용 elevation 변수의 가장 어두운 단계(웹 변수에만 있음) |
| legacy elevation-70 | #2d2e30 | 다크용 elevation 변수의 가장 밝은 단계 |

- 그 밖의 다크 값은 확인 필요. 웹에서 다크 화면이나 `prefers-color-scheme` 규칙을 찾지 못했고, 앱 캡처는 모두 라이트 모드다.

### 역할별 색
- **하늘색(#00a1ff / 앱 #0aa5ff)**: 바로구매·글쓰기·결과 보기 버튼 바탕, 장바구니 외곽선, 웹 선택 탭 글자와 2px 밑줄, 앱 하단 탭 선택, 사진 속 상품 태그 점, 웹 배송 안내 글자(12px).
  - 짝: hover는 하늘색 4% 겹침, pressed는 8% 겹침 + scale(0.97). 연한 면은 #f0f8fc. 앱 떠 있는 + 버튼만 한 단계 진한 #0198ed.
- **진회색(#2f3438 / 채움 #303337)**: 앱 글자·아이콘·선택 표시 전부(상단 탭 글자와 밑줄, 선택 칩 바탕, 말풍선 바탕, 켜진 라디오). 웹은 상단 메뉴·탭의 선택 안 된 글자.
- **검정에 가까운 회색(#141414)**: 웹 기본 글자, 상품명, 가격, 진한 테두리, 포커스 링.
- **보조 회색(#828c94 / #8c8c8c)**: 선택 안 된 앱 탭, 평점·리뷰 수, 배송 꼬리표 글자, 약한 글자 버튼.
- **빨강 두 가지**: #ff4650은 할인율·할인가·강조 문구 글자, #ff7777은 알림 점·숫자 배지·"OPEN" 알약 바탕.
- **상태**: 웹 변수에 성공 #15b869(연한 #e3fcea), 주의 글자 #b27800(배경·테두리 #d19506, 연한 #fcf4dd), 오류 글자 #f05656(배경 #ff7777, 연한 #ffeded), 정보 #0079fa(연한 #eff5fc)가 있다. 실제 화면에서 배경·선·글자를 어떻게 묶는지는 확인 필요.
- **면 두 단계**: 흰색 + 옅은 회색(웹 #f5f5f5, 앱 #f7f9fa). 비활성 면은 #ededed.

### 색 사용 규칙
- 하늘색(#00a1ff, 앱 #0aa5ff)은 주 버튼(바로구매·글쓰기·결과 보기), 선택된 웹 탭, 하단 탭 선택, 상품 태그 점에만 쓴다.
- 앱의 선택 상태(상단 탭, 칩, 라디오, 시트 탭)는 하늘색이 아니라 #2f3438로 표시한다. 웹 탭 선택은 #00a1ff다.
- #ff4650은 할인율·할인가·강조 문구에만, #ff7777은 알림 점·숫자 배지·"OPEN" 배지에만 쓴다.
- 오늘의딜(#ff4747), 오늘출발(#6131d2), 추천(#31a072), 별점(#f7b401)은 쇼핑 표시 전용이다.
- 시트·모달 뒤 막은 rgba(33,38,41,.5)(웹 변수 backgroundDim은 검정 40%)를 쓴다.
- 기획전 색(#f1f0fd, #7b67f5)은 평소 화면 토큰으로 쓰지 않는다.

### Don't
- 하늘색을 할인·알림·장식 면에 쓰지 않는다.
- #ff4650과 #ff7777을 바꿔 쓰지 않는다(할인 ↔ 알림).
- 앱의 선택 칩·라디오·탭 밑줄을 하늘색으로 칠하지 않는다. #2f3438이다.
- 쇼핑 전용 색(#ff4747, #6131d2, #31a072, #f7b401)을 일반 버튼·제목에 쓰지 않는다.
- 기획전 색(#f1f0fd, #7b67f5)을 평소 화면 토큰으로 쓰지 않는다.

## 3. 타이포그래피
- 글꼴: Pretendard Variable(웹 실측). assets.ohou.se에서 v1.3.8 dynamic subset을 불러온다. SIL Open Font License 1.1 무료 글꼴. 회사 기술 블로그에 따르면 앱 국내판도 Pretendard를 쓰고 일본판은 Pretendard JP를 쓴다. 1배율 앱 캡처만으로는 글꼴을 구분하지 못했다.
- 대체 글꼴: Noto Sans KR, Apple SD Gothic Neo, 맑은 고딕, Malgun Gothic, sans-serif
- 자간: 웹 모든 글자 -0.3px(`--ds-core-letterSpacing-default`). 실측한 글자 272개가 모두 이 값이었다. 앱 자간은 확인 필요.
- 굵기: regular 400, medium 500, semibold 600, bold 700 네 단계. 웹 변수에는 모든 크기에 네 굵기가 다 정의되어 있다. 아래 표의 굵기는 실제 화면에서 본 대표 굵기다(쓰임을 못 본 단계는 400).
- 웹 단계는 변수 값(px)이다. 1pt = CSS 1px로 본다. 앱 단계(app-…)는 1배율 캡처의 글자 높이로 계산한 추정값(±1pt)이고 행간은 확인 필요다.
- 웹 이름 규칙: `heading{크기}`, `body{크기}L{행간}`, `detail{크기}L{행간}`. 같은 크기에 행간이 다른 변형을 따로 둔다.

### 위계와 사용처
| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| heading32 | 32 | 700 | 42px | 웹: 상세 화면 판매가 숫자 |
| heading26 | 26 | 400 | 34px | 웹: 큰 제목 |
| heading24 | 24 | 400 | 32px | 웹: 가격 뒤 "원" |
| heading20 | 20 | 400 | 28px | 웹: 상세 화면 상품명 |
| heading18 | 18 | 700 | 24px | 웹: 섹션 제목 H2, 시트 제목 |
| heading17 | 17 | 600 | 22px | 웹: 상품 카드 할인율·가격 |
| body16L28 | 16 | 400 | 28px | 웹: 긴 본문 |
| body16L24 | 16 | 400 | 24px | 웹: 본문 |
| body16L20 | 16 | 500 | 20px | 웹: 구매 버튼 글자(500), 상단 탭(700) |
| body15L24 | 15 | 700 | 24px | 웹: 상세 탭 글자 |
| app-tab-top | 14 | 700 | 확인 필요 | 앱: 홈·쇼핑 상단 탭(홈, 쇼핑, 오늘의취향), 검색 결과 상단 탭 |
| app-sheet-title | 14 | 700 | 확인 필요 | 앱: 필터 시트 구획 제목(정렬, 주거정보, 색상 등) |
| app-chip | 14 | 500 | 확인 필요 | 앱: 쇼핑 홈 카테고리 칩, 검색창 안내 글자(400) |
| app-button | 14 | 700 | 확인 필요 | 앱: 필터 시트 초기화·결과 보기 버튼(숫자 높이 기준. 한글 높이로는 12~13) |
| body14L20 | 14 | 400 | 20px | 웹: 셀렉트 글자, 검색 입력 |
| body14L18 | 14 | 500 | 18px | 웹: 로그인 링크, 작은 버튼 글자(500), 모바일 탭(700) |
| app-sheet-tab | 13 | 700 | 확인 필요 | 앱: 필터 시트 위 탭(선택 700 #2f3438, 나머지 #828c94) |
| app-tooltip | 13 | 500 | 확인 필요 | 앱: 쇼핑 상단 탭 옆 말풍선, 피드 "상품 더보기"(400) |
| detail13L18 | 13 | 400 | 18px | 웹: 상품 카드 상품명 |
| app-option | 12 | 400 | 확인 필요 | 앱: 필터 시트 라디오·체크 항목 글자 |
| app-shortcut | 12 | 400 | 확인 필요 | 앱: 쇼핑 홈 바로가기 아이콘 아래 이름 |
| detail12L20 | 12 | 400 | 20px | 웹: 보조 문단 |
| detail12L16 | 12 | 600 | 16px | 웹: 브랜드명(600), 평점·리뷰 수, 배송 안내 |
| detail11L14 | 11 | 400 | 14px | 웹: 작은 꼬리표 |
| app-tabbar | 10 | 400 | 확인 필요 | 앱: 하단 탭 바 이름(홈, 커뮤니티, 쇼핑, 인테리어/생활, 마이페이지) |
| detail10L14 | 10 | 500 | 14px | 웹: 배송 배지 글자, 시트 보조 문구 |

앱 화면 글자는 대부분 12~14pt다. 앱 캡처에는 웹의 17~32px 같은 큰 글자 단계가 나오지 않았다(상세 화면을 보지 않았기 때문).

### 글자 사용 규칙
- 웹 글자는 모두 자간 -0.3px로 쓴다.
- 가격 숫자는 굵게 키운다: 상세 판매가 32px/700, 카드 할인율·가격 17px/600. 가격 뒤 "원"은 24px/400으로 숫자보다 작고 가볍다.
- 같은 크기라도 쓰임에 따라 행간 변형(16px의 28·24·20px)을 골라 쓴다. 긴 본문은 28px, 버튼·탭은 20px.
- 앱 탭·시트 제목·버튼은 14pt/700, 항목 글자는 12~13pt, 하단 탭 이름은 10pt로 쓴다.
- 브랜드명은 12px/600으로 상품명(13px/400)보다 위에 둔다.

### Don't
- 웹 글자의 자간을 0으로 두지 않는다. -0.3px이다.
- 가격 뒤 "원"을 숫자와 같은 크기·굵기로 쓰지 않는다(숫자 32px/700, "원" 24px/400).
- 긴 본문에 버튼용 행간(16px/20px)을 쓰지 않는다. 긴 본문은 16px/28px.
- 앱 화면에 웹 상세의 큰 단계(26~32px)를 그대로 가져오지 않는다. 앱에서 본 글자는 10~14pt다.
- 브랜드명(12px/600)을 상품명(13px/400) 아래에 두지 않는다.

## 4. 레이아웃·간격
- 기준 화면: 앱 375×812pt 아이폰(상태 표시줄 44pt). 웹은 1024px 폭에서 실측.
- 화면 좌우 여백: 앱 14~15pt(칩 줄, 필터 시트 내용, 하단 버튼). 홈 피드 사진은 좌우 여백 없이 화면 폭을 채운다. 웹 데스크톱은 1024px 폭에서 본문이 왼쪽 60px에서 시작한다. 웹 모바일 좌우 여백은 확인 필요.
- 기본 단위: 4px. 웹 컴포넌트 변수에 2, 3, 4, 6, 8, 9, 12, 16px이 쓰인다(snackbar 8, select 12, option 8, textarea 12/9/5). 공통 spacing 토큰 변수는 찾지 못했다(확인 필요).
- 간격 단계(관찰, pt): 4, 8, 12, 14, 16, 20
- 그리드·최대 폭: 웹 1024px 쇼핑 목록은 카드 폭 214px, 사진 214×214 정사각. 상세 화면은 왼쪽 사진, 오른쪽 377px 구매 영역(587px 지점부터)의 두 칸.
- 앱 상단 구조(위→아래)

| 영역 | 높이 | 배경 | 비고 |
|---|---|---|---|
| 상태 표시줄 | 44pt | #ffffff | |
| 상단 바 | 약 50pt | #ffffff | 왼쪽 메뉴 아이콘, 가운데 검색창(약 205×36pt), 오른쪽 알림·스크랩·장바구니 아이콘 |
| 상단 탭 | 약 36pt | #ffffff | 홈 / 오늘의취향(콘텐츠), 쇼핑 / 셀렉트샵(쇼핑). 선택 탭에 2pt #2f3438 밑줄 |
| 본문 | 나머지 | #ffffff | |
| 하단 탭 바 | 약 43pt + 홈 표시줄 34pt | #ffffff | 위에 1pt #e2e2e2 선, 5칸 같은 폭 |

### 그리드와 화면 폭
| 구분 | 폭 | 구조 | 좌우 여백 |
|---|---|---|---|
| 앱(iOS) | 375pt | 한 열. 피드 사진은 화면 폭 꽉 채움 | 14~15pt |
| 웹 데스크톱 쇼핑 목록 | 1024px에서 실측 | 214px 정사각 카드 격자 | 본문이 왼쪽 60px에서 시작 |
| 웹 데스크톱 상세 | 1024px에서 실측 | 왼쪽 사진 + 오른쪽 377px 구매 영역(587px 지점부터) | 확인 필요 |
| 웹 모바일 | 375px 에뮬레이션 | 확인 필요 | 확인 필요 |

- 중단점과 열 수: 확인 필요. 768px 이상 hover 기기에서 아이콘 확대 효과가 켜지는 것만 확인했다.

### 화면 세로 리듬(앱)
| 구간 | 값 | 근거 |
|---|---|---|
| 상태 표시줄 | 44pt | 캡처 |
| 상단 바(검색창 36pt 포함) | 약 50pt | 캡처 |
| 상단 탭 | 약 36pt | 캡처 |
| 쇼핑 홈 구획 사이 | 8pt #f7f9fa 띠 | 캡처 |
| 칩 사이 / 하단 버튼 사이 | 8pt | 캡처 |
| 피드 썸네일 사이 | 4pt | 캡처 |
| 필터 시트 항목 줄 간격 | 약 31pt | 캡처 |
| 하단 탭 바 | 약 43pt + 홈 표시줄 34pt | 캡처 |

- 카드 안쪽 여백: 웹 고객센터 카드 12px 16px 12px 20px. 상품 카드는 사진 아래 글자 줄 사이 여백만 있고 카드 테두리·안쪽 여백이 없다.

### 간격 적용 규칙
- 앱 쇼핑 홈 구획 사이는 8pt #f7f9fa 띠로 나눈다.
- 앱 칩 사이 8pt. 칩 줄은 가로로 넘치게 두고 다음 칩이 오른쪽에 걸쳐 보이게 한다.
- 앱 쇼핑 바로가기는 48×48pt 칸, 칸 간격(왼쪽 끝 기준) 69pt, 한 줄 5칸, 아래 이름 한 줄.
- 앱 필터 시트 라디오·체크 줄과 색상 견본 줄 간격은 약 31pt. 글자 왼쪽 끝은 컨트롤 오른쪽 7pt.
- 앱 하단 버튼 두 개 사이 8pt.
- 앱 피드 아래 상품 썸네일은 4pt 간격으로 늘어놓는다.

### Don't
- 앱 홈 피드 사진에 좌우 여백이나 모서리를 넣지 않는다. 화면 폭 꽉 채움, 모서리 0이다.
- 앱 구획을 선으로 나누지 않는다. 쇼핑 홈은 8pt #f7f9fa 띠, 필터 시트는 1pt #f2f4f5 선만 쓴다.
- 칩 줄을 화면 안에 다 넣으려고 줄이지 않는다. 가로로 넘쳐 다음 칩이 걸쳐 보이게 둔다.
- 4px 단위 밖의 간격(5, 7px)을 새로 만들지 않는다. 앱 좌우 여백 14pt만 예외다.

## 5. 모서리·고도·모션
1pt = CSS 1px로 본다. 앱 값은 1배율 캡처에서 모서리 번짐 길이를 보고 반올림했다.

| 토큰 | 값 | 쓰임 |
|---|---|---|
| cornerRadius-xs | 2px | 웹: 아주 작은 요소 |
| 웹 메뉴 글자 상자 | 3px | 웹: 데스크톱 1단 메뉴 글자 상자 |
| cornerRadius-sm | 4px | 웹: 가장 많이 쓰는 값. 배송·쿠폰 꼬리표, 모바일 시트의 주 버튼. 앱: 필터 시트 초기화·결과 보기 버튼, 말풍선, 체크박스 |
| select·textarea small | 6px | 웹: 작은 셀렉트, "함께 사고 배송비 절약" 버튼, 아주 작은 외곽선 버튼 |
| cornerRadius-md / lg | 8px | 웹: 상품 사진, 구매 버튼, 쿠폰 받기, 셀렉트, 앱 유도 시트 위쪽. 앱: 상단 검색창, 바로가기 아이콘 칸(추정), 피드 아래 상품 썸네일(4px일 수 있음) |
| cornerRadius-xl | 12px | 웹: 고객센터 카드. 앱: 바텀시트 위쪽 두 모서리 |
| cornerRadius-xxl | 16px | 웹: 필터 칩(전체 칩 높이 32px) |
| cornerRadius-xxxl | 20px | 웹: 큰 카드 |
| cornerRadius-full / circle | 9999px | 웹: 검색창, 프로필 사진(50%). 앱: 카테고리 칩(32pt), 검색 결과 필터 칩(28pt), 상품 태그 점, 떠 있는 + 버튼, 숫자 배지, 사진 장수 알약, 라디오, 색상 견본 |
| app-photo | 0px | 앱: 홈 피드 집 사진(화면 폭 꽉 채움) |

### 고도
- 층은 면 색(흰색 ↔ #f5f5f5·#f7f9fa)과 1px #e0e0e0 선으로 나누고, 그림자는 사진 위 버튼·카드에 옅게만 쓴다. (관찰에서 정리)
- 고도(그림자·층)
  - shadow depth10: 0 2px 5px rgba(0,0,0,.05) — 웹 legacy 그림자 1단계
  - shadow depth20: 0 2px 5px rgba(0,0,0,.1) — 2단계
  - shadow depth30: 0 4px 10px rgba(0,0,0,.12) — 3단계
  - 홈 실측: 0 2px 5px rgba(0,0,0,.15) — 웹 홈 화면 7곳에서 관찰
  - 스크랩 버튼: 0 1px 3px rgba(0,0,0,.36) — 사진 위 스크랩 아이콘 그림자
  - app-fab-shadow: 약 10pt 번지는 옅은 회색 — 앱 떠 있는 + 버튼 둘레. 정확한 값은 확인 필요
  - 테두리: border 1px solid #e0e0e0(웹 기본 외곽선), thumbnail 0.5px rgba(0,0,0,.05)(웹 사진 둘레), app-border-chip 1px solid #e9eae9(앱 검색 결과 필터 칩, 추정), app-border-button 1px solid #ededed(앱 필터 시트 초기화 버튼, ±오차)
### 모션
- 모션(웹): 버튼 눌림 0.111s cubic-bezier(0.2, 0, 0.2, 1.05) scale(0.97). 버튼 위 겹침 색 background-color 0.1s ease-in-out. 768px 이상 hover 기기에서 일부 아이콘이 scale(1.1)로 커진다. 앱 모션은 정지 캡처라 확인 필요.

### Don't
- 진한 그림자를 쓰지 않는다. 0 2px 5px rgba(0,0,0,.05~.15)와 depth30(0 4px 10px .12) 안에서 쓴다.
- 앱 바텀시트 아래쪽 모서리를 둥글리지 않는다. 위쪽 두 모서리만 12px.
- 칩·배지·태그 점에 4px·8px 모서리를 쓰지 않는다. 모두 9999px 알약·원이다.
- 버튼 눌림에 색만 바꾸지 않는다. 웹은 scale(0.97)과 겹침 색을 함께 쓴다.

## 6. 컴포넌트
컴포넌트마다 변형, 상태, 쓰는 때, 쓰지 않는 때를 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼

**크기(웹 실측)**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| large(구매) | 48px | 확인 필요 | 8px | 16px/500 |
| medium(쿠폰 받기, 글쓰기) | 40px | 확인 필요 | 8px | 14px/500 |
| 모바일 시트 | 44px | 16px | 4px | 14px |
| xsmall | 28px | 확인 필요 | 6px | 확인 필요 |
| 앱 필터 시트 | 38pt | 확인 필요 | 4px | 14pt/700 |

**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 웹 주 버튼(바로구매) | 112×48, #00a1ff 바탕, #ffffff 16px/500, 1px 투명 테두리, 8px | 상세 화면의 가장 중요한 구매 행동 |
| 웹 브랜드 외곽선(장바구니) | 112×48, #ffffff 바탕, #00a1ff 16px/500, 1px #00a1ff, 8px | 주 버튼 옆 두 번째 행동 |
| 웹 회색 외곽선(패키지 담기) | 137×48, #ffffff 바탕, #141414 16px/500, 1px #e0e0e0, 8px | 보조 행동 |
| 웹 작은 외곽선(쿠폰 받기) | 94×40, #ffffff 바탕, #141414 14px/500, 1px #e0e0e0, 8px | 상세 화면 안 작은 행동 |
| 웹 아주 작은 외곽선 | 높이 28, #ffffff 바탕, 1px #e0e0e0, 6px | 작은 보조 행동 |
| 웹 헤더 글쓰기 | 83×40, #00a1ff 바탕, #ffffff 14px/500, 8px | 헤더의 만들기 행동 |
| 웹 모바일 시트 주 버튼 | 303×44, 좌우 16px, #00a1ff 바탕, #ffffff 14px, 테두리 없음, 4px | 앱 유도 시트의 주 행동 |
| 앱 필터 결과 보기 | 약 265×38pt, #0aa5ff 바탕, #ffffff 14pt/700, 테두리 없음, 4px | 필터 시트 하단 확정 |
| 앱 필터 초기화 | 약 74×38pt, 결과 보기 왼쪽 8pt, #ffffff 바탕, #2f3438 14pt/700, 앞에 되돌리기 아이콘, 1px #ededed, 4px | 필터 시트 하단 되돌리기 |
| 앱 떠 있는 + 버튼 | 지름 약 46pt, #0198ed 바탕, 흰 + 아이콘, 테두리 없음, 옅은 그림자, 9999px | 홈 피드 오른쪽 아래 올리기 |

- 상태
  - 웹 눌림: `:active`에서 `transform: scale(0.97)`. 전환은 transform 0.111s cubic-bezier(0.2, 0, 0.2, 1.05).
  - 웹 눌림·호버 겹침 색(boxButton): 일반 hover rgba(20,20,20,.04), pressed rgba(20,20,20,.08). 브랜드 버튼 위 hover #00a1ff 4%, pressed 8%. 진한 배경 위는 흰색 8%·10%.
  - 웹 비활성·로딩: `data-disabled`, `data-loading` 속성일 때 눌림 효과를 끈다. 비활성 배경 #ededed, 글자 #c1c1c1. 로딩 모양은 확인 필요.
  - 앱 눌림·비활성·로딩: 확인 필요.
- 앱 필터 결과 보기 버튼 글자는 결과 수를 앞에 둔다("[n]개 콘텐츠 보기").

**규칙** (관찰에서 정리)
- 하늘색 채운 버튼은 한 영역에 하나만 둔다(상세 구매 영역은 바로구매 하나만 채우고 장바구니는 외곽선).
- 두 버튼을 나란히 둘 때 확정(채움)은 오른쪽·넓게, 되돌리기(외곽선)는 왼쪽·좁게 둔다(앱 필터: 초기화 약 74pt + 결과 보기 약 265pt, 사이 8pt).
- 문구는 명사 하나 또는 "[명사] 받기". 결과 수가 있으면 숫자를 앞에 둔다.
- 비활성·로딩 버튼은 눌림 효과를 끈다(`data-disabled`, `data-loading`). 로딩 중 `aria-busy` 처리는 (구현 권장).
- 아이콘만 있는 버튼(떠 있는 +, 스크랩)에는 `aria-label`을 단다. (구현 권장)

### 6.2 입력창
- 앱 상단 검색창: 약 205×36pt, #f7f9fa 바탕, 테두리 없음, 모서리 8px, 왼쪽 돋보기 아이콘 + 안내 글자 14pt(#9fa4ab 안팎). 검색 결과 화면에서는 왼쪽 뒤로·홈 아이콘이 붙고 오른쪽에 지우기(⊗) 버튼이 있다.
- 웹 상단 검색창: 204×38, 배경 #f5f5f5, 1px 투명 테두리, 9999px, 좌우 10px. 입력 글자 14px/20px #141414.
- 웹 셀렉트(옵션 선택): 높이 40px(작은 것 32px), 1px #e0e0e0, 모서리 8px(작은 것 6px), 왼쪽 12px·오른쪽 40px(화살표 자리), 글자 14px. 선택 전 글자 #8c8c8c.
  - 비활성: 앞 단계 미선택으로 막힌 셀렉트는 배경 #f5f5f5, 글자 #c1c1c1.
- 웹 옵션 목록 줄: 최소 높이 48px(작은 것 40px), 여백 8px, 아이콘 20px.
- 웹 여러 줄 입력(textarea): 1px 테두리, 좌우 12px, 위아래 9px(작은 것 5px). 댓글 입력은 1px #cecece 테두리, 글자 #222222.
- 상태: 포커스는 웹 포커스 링 #141414. 오류 상태는 확인 필요.

**규칙** (관찰에서 정리)
- 셀렉트는 앞 단계를 고르기 전까지 뒤 단계를 #f5f5f5 바탕·#c1c1c1 글자로 막는다.
- 검색창은 테두리 없이 옅은 회색 면(웹 #f5f5f5 알약, 앱 #f7f9fa 8px)으로만 구분한다.
- 입력 라벨·오류 문구 연결(`aria-describedby`, `aria-invalid`)은 (구현 권장).

### 6.3 칩·탭
- 앱 쇼핑 홈 카테고리 칩: 높이 32pt, 9999px. 선택은 #303337 바탕 흰 글자, 나머지는 #f7f9fa 바탕 #2f3438 글자 14pt. 칩 사이 8pt, 테두리 없음.
- 앱 검색 결과 필터 칩(정렬, 주거정보, 공간, 스타일, 색상 …): 높이 28pt, 흰 바탕, 1px 연회색(#e9eae9 추정) 테두리, 9999px, 글자 #2f3438 + 오른쪽 아래 꺾쇠(⌄). 누르면 필터 바텀시트가 열린다. 적용된 상태 모양은 확인 필요.
- 웹 필터 칩: 높이 32px, 모서리 16px.
- 앱 상단 탭: 왼쪽 정렬 글자 탭 2개, 14pt/700 #2f3438. 선택 탭 아래 2pt #2f3438 밑줄.
- 앱 검색 결과 상단 탭(통합·사진·콘텐츠·쇼핑·시공업체·유저): 선택 #2f3438 + 2pt 밑줄, 나머지 #828c94. 아래 1pt 연회색 선.
- 웹 데스크톱 1단 메뉴: 18px/700, 선택 #00a1ff, 나머지 #2f3438, 글자 상자 여백 4px·모서리 3px. 2단 메뉴: 16px/700, 같은 색 규칙.
- 웹 상세 탭(상품정보·리뷰·문의·배송/환불): 칸 109×54, 여백 14px 10px 16px, 글자 15px/700. 선택 #00a1ff, 나머지 #2f3438, 숫자는 #8c8c8c. 아래 2px #00a1ff 선.
- 웹 모바일 쇼핑 탭: 14px/700, 선택 #00a1ff. 앱 상단 탭은 선택도 #2f3438이라 웹과 다르다.
- 쓰지 않는 때: 필터 칩(외곽선·꺾쇠)은 바텀시트를 여는 데만 쓰고, 카테고리 이동에는 채운 칩을 쓴다. (관찰에서 정리)

### 6.4 선택 컨트롤
- 앱 라디오: 지름 약 20pt. 켜짐은 #2f3438 두꺼운 고리(약 5pt) + 흰 가운데(약 6pt). 꺼짐은 흰 바탕 + 1pt 연회색(#e3e6e8) 고리. 하늘색이 아니라 진회색으로 선택을 표시한다.
- 앱 체크박스: 약 18×18pt, 모서리 4px, 꺼짐은 1pt 연회색 테두리. 켜짐 모양은 캡처에 없어 확인 필요.
- 앱 항목 글자: 선택 #2f3438, 선택 안 됨 연회색(#89919a 안팎).
- 앱 색상 견본: 24pt 원 + 오른쪽 이름(12pt). 흰색 견본은 연한 테두리로 바탕과 구분한다.
- 웹 스위치: 꺼짐 트랙 #c1c1c1. 켜짐 색은 확인 필요.
- 쓰는 때: 하나만 고르는 정렬은 라디오, 여러 개 고르는 항목은 체크박스.

### 6.5 카드·리스트
- 앱 사진 피드(홈): 화면 폭(374pt)을 꽉 채운 세로형 사진(약 374×487pt, 모서리 0). 오른쪽 위에 "1/3" 장수 알약(검정 약 40% 바탕, 흰 글자). 사진 아래 가운데에 흰 점 3개(약 6pt)로 장 위치를 보여 준다.
- 앱 상품 태그 점: 사진 속 상품 자리에 지름 약 18pt #0aa5ff 원 + 흰 "+"(선 굵기 약 2pt). 테두리·그림자는 거의 없다. 한 장에 여러 개를 찍는다.
- 앱 피드 아래 상품 줄: 약 44×44pt 상품 썸네일을 4pt 간격으로 늘어놓고, 오른쪽 끝에 "상품 더보기 >"(13pt #2f3438 안팎). 그 아래 좋아요·댓글·공유 아이콘(약 24pt)과 숫자, 다음 줄에 글 제목.
- 앱 쇼핑 홈: 위부터 큰 배너 캐러셀(화면 폭, 오른쪽 아래 "01/20" 알약) → 바로가기 5칸(48pt #f5f5f5 칸 + 12pt 이름) → 8pt 띠 → 카테고리 칩 줄 → 상품 사진 줄.
- 웹 상품 카드(쇼핑 목록): 사진 정사각, 모서리 8px, 0.5px rgba(0,0,0,.05) 둘레선, 사진 자리 배경 #eaedef. 아래로 브랜드명(12px/600) → 상품명(13px/18px, 2줄) → 강조 문구(12px/500 #ff4650) → 할인율(17px/600 #ff4650)+가격(17px/600 #141414) → 평점·리뷰(12px #8c8c8c) → 배송 안내(12px #00a1ff) → 꼬리표.
- 웹 품절: 품절 띠 배경 #acacac.
- 웹 고객센터 카드: 1px #eaedef, 모서리 12px, 여백 12px 16px 12px 20px.
- 웹 캐러셀 점: 꺼진 점 rgba(20,20,20,.24), 사진 위 꺼진 점 rgba(255,255,255,.72). 앱 피드 사진 위 점도 흰색 계열이다.
- 상태: 카드 눌림 모양은 확인 필요.

### 6.6 상단 바·하단 탭 바
- 앱 상단 바: 왼쪽 메뉴(≡, 새 소식이 있으면 #ff7777 점), 가운데 검색창, 오른쪽 알림·스크랩·장바구니 선 아이콘(#2f3438). 장바구니 위 #ff7777 원형 숫자 배지(약 16pt, 흰 숫자).
- 앱 쇼핑 탭 말풍선: 두 번째 탭 옆에 #303337 말풍선(높이 약 34pt, 모서리 4px, 왼쪽 꼬리, 흰 13pt 글자)으로 새 메뉴를 알린다.
- 앱 하단 탭 바: 흰 바탕, 위 1pt #e2e2e2 선, 5칸(홈, 커뮤니티, 쇼핑, 인테리어/생활, 마이페이지). 아이콘 약 20~24pt 선형 + 아래 10pt 이름. 선택 칸은 아이콘이 채워지고 아이콘·이름이 #0aa5ff, 나머지는 #2f3438. 탭 위에 #ff7777 알약 배지("OPEN", 높이 약 15pt)를 걸칠 수 있다.

### 6.7 바텀시트·모달
- 앱 필터 바텀시트: 화면 아래에서 약 600pt 높이로 올라오는 흰 시트, 위쪽 모서리 12px. 뒤 막 rgba(33,38,41,.5).
  - 맨 위 가운데 손잡이 약 28×4pt #eaedef.
  - 시트 탭 줄(정렬·주거정보·공간·스타일·색상·전용공간·전문가/셀프 …): 가로로 넘치고, 탭을 누르면 아래 목록이 그 구획으로 스크롤된다. 선택 탭 13pt/700 #2f3438 + 진회색 밑줄, 나머지 #828c94.
  - 본문: 구획 제목 14pt/700 → 라디오(정렬, 한 개 선택) 또는 체크박스(여러 개 선택) 목록 → 1pt #f2f4f5 구분선. 색상 구획은 24pt 견본 원 목록.
  - 오른쪽 끝에 가는 회색 스크롤 막대(약 2pt #a6a6a6)가 보인다.
  - 하단 고정: 위 1pt 연회색 선, 왼쪽 초기화(흰 외곽선) + 오른쪽 넓은 하늘색 결과 보기 버튼.
- 웹 토큰: 손잡이 32×4px, 손잡이 영역 높이 24px, 헤더 좌우 8px, 헤더 버튼 최소 폭 40px. 앱 손잡이는 이보다 조금 짧게 쟀다(1배율 오차일 수 있음).
- 웹 모바일 앱 유도 시트: 위쪽만 8px 둥근 흰 상자, 제목 18px/700 #2f3438, 뒤 막 rgba(33,38,41,.5).
- 모달(가운데 대화상자): 확인 필요.

### 6.8 토스트·배지
- 웹 스낵바 토큰: 높이 48~160px, 여백 8px, 가운데 글자 여백 8px 4px, 아이콘 16px(감싸는 여백 6px). 색과 위치는 확인 필요. 앱 캡처에도 토스트는 없었다.
- 앱 말풍선 안내: #303337 바탕, 흰 13pt 글자, 모서리 4px, 왼쪽을 가리키는 꼬리.
- 웹 꼬리표(squareBadge): 높이 16/20/24px 세 크기, 좌우 3/4/6px. 회색형은 rgba(0,0,0,.05) 배경에 #8c8c8c 10px/500. 외곽선형은 흰 배경에 1px #e0e0e0. 색 꼬리표 배경은 각 색 8%(초록·노랑은 13%).
- 앱 숫자 배지·새 소식 점·"OPEN" 알약: #ff7777 바탕, 흰 글자.

### 6.9 그 밖
- 웹 달력: 날짜 버튼 40px, 오늘 표시 점 5px.
- 아이콘: 선형 아이콘. 앱 상단 바·피드 반응 아이콘은 약 24pt 선형 #2f3438, 하단 탭 아이콘은 약 20~24pt이고 선택하면 채운 모양 + #0aa5ff로 바뀐다. 웹 셀렉트 화살표·옵션 아이콘 20px, 셀렉트 왼쪽 아이콘 18px, 꼬리표 아이콘 12~14px.
- 앱 쇼핑 바로가기 아이콘: #f5f5f5 칸 안에 색이 있는 입체풍 그림 아이콘. 그림 자체는 옮기지 않는다.
- 사진: 사용자가 올린 집 사진과 상품 사진이 화면 대부분이다. 웹 상품 사진은 정사각에 가깝게 자르고 8px 모서리와 아주 옅은 둘레선을 쓴다.

## 7. 패턴
- 목록 → 상세: 웹 쇼핑 목록은 214px 정사각 사진 카드 격자. 상세는 왼쪽 사진, 오른쪽 377px 구매 영역(판매가 32px/700, 셀렉트로 옵션 선택, 아래 바로구매 + 장바구니 버튼), 그 아래 상세 탭(상품정보·리뷰·문의·배송/환불).
- 사진 → 상품: 앱 홈 피드는 집 사진 위 하늘색 "+" 점으로 상품을 찍고, 사진 아래 썸네일 줄과 "상품 더보기 >"로 상품에 닿게 한다.
- 검색: 상단 검색창 → 검색 결과 상단 탭(통합·사진·콘텐츠·쇼핑·시공업체·유저) → 필터 칩 줄 → 칩을 누르면 탭 달린 필터 바텀시트 → 하단 "초기화" + "[n]개 콘텐츠 보기"로 확정.
- 옵션 선택: 웹 셀렉트를 단계별로 고르고, 앞 단계를 안 고르면 뒤 셀렉트는 #f5f5f5 바탕·#c1c1c1 글자로 막는다.
- 앱 유도: 웹 모바일에서 바텀시트로 앱 사용을 권하고, 거절은 "[대안]으로 볼래요" 꼴의 약한 글자 버튼(#828c94)으로 둔다.
- 새 기능 알림: 탭 옆 #303337 말풍선, 하단 탭 위 #ff7777 "OPEN" 알약.
- 빈 상태·오류: 확인 필요.
- 폼·결제: 확인 필요(구매 흐름은 보지 않았다).

### 빈 상태·로딩·오류
- 빈 상태·로딩·오류 화면은 관찰하지 못했다. 확인 필요.
- 문구를 새로 써야 하면 9장 말투(해요체, 사용자 말로 된 짧은 문장)를 따른다. 예:
  ```
  조건에 맞는 콘텐츠가 없어요
  [필터 초기화]
  ```
  (예시 문구, SylviaLab 작성)

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #141414 | #ffffff | 18.4:1 | 통과 |
| #2f3438 | #ffffff | 12.6:1 | 통과 |
| #828c94 | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #8c8c8c | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #9fa4ab | #f7f9fa | 2.4:1 | 미달 |
| #c1c1c1 | #ffffff | 1.8:1 | 미달(비활성 글자) |
| #ffffff | #00a1ff | 2.8:1 | 미달 |
| #ffffff | #0aa5ff | 2.7:1 | 미달 |
| #ff4650 | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #ff7777 | 2.6:1 | 미달 |
| #ffffff | #303337 | 12.7:1 | 통과 |
| #2f3438 | #f7f9fa | 11.9:1 | 통과 |
| #141414 | #f5f5f5 | 16.9:1 | 통과 |
| #00a1ff | #ffffff | 2.8:1 | 미달 |
| #ffffff | #0198ed | 3.1:1 | 미달(큰 글자 3:1은 통과) |
| #ff4747 | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |

- 하늘색 주 버튼의 흰 글자(16px/500, 14pt/700)는 본문 기준에 못 미친다. 보조 글자 #828c94·#8c8c8c와 할인 글자 #ff4650도 12~13px 작은 글자에 쓰여 기준에 못 미친다.
- 터치 영역: 웹 주 버튼 48px, 쿠폰 받기 40px, 셀렉트 40px(작은 것 32px), 옵션 줄 48px은 44pt 기준과 같거나 크다(40px·32px은 작다). 앱 필터 버튼 38pt, 필터 칩 28pt, 검색창 36pt, 라디오 약 20pt는 44pt보다 작다(줄 전체가 눌리는지는 확인 필요).
- 최소 글자 크기: 웹 10px(배송 배지, detail10L14), 앱 10pt(하단 탭 이름).
- 포커스: 웹 포커스 링 #141414. 스크린리더·글자 확대: 확인 필요.

### 점검 목록
- 키보드: 웹 포커스 링(#141414)이 있다. 탭 순서·건너뛰기 링크는 확인 필요.
- 포커스 표시: 링 색만 확인했다. 두께·모양은 확인 필요.
- 대체 텍스트: 사진 속 상품 태그 점과 아이콘 버튼의 이름표는 확인 필요. 점마다 상품 이름을 `aria-label`로 다는 것을 권한다. (구현 권장)
- 확대: 웹 글자는 px 변수로 정의되어 있다. 200% 확대 동작은 확인 필요.
- 터치 영역: 앱 필터 칩 28pt·라디오 약 20pt·상품 태그 점 약 18pt는 44pt보다 작다. 줄 전체를 누를 수 있게 하는 것을 권한다. (구현 권장)
- 색만으로 뜻 전달: 앱 선택 탭은 굵기(700)와 밑줄을 함께 쓰고, 할인은 숫자(%)와 함께 쓴다. 웹 주 버튼 흰 글자 대비(2.8:1)는 기준에 못 미친다.

## 9. 글쓰기 톤
- 말투: 해요체. 사용자 입장의 짧은 문장을 쓴다.
- 예시(직접 관찰한 문장 구조만, 원문 복사 금지):
  - 남은 혜택 알림: "받지 않은 [무엇]이 더 있어요" 꼴.
  - 거절 버튼을 사용자 말로: "[대안]으로 볼래요" 꼴.
  - 배송 안내는 조건을 앞에: [요일 시각]까지 결제시 [결과].
- 버튼 문구 꼴: 명사 또는 "[명사] 받기" 꼴(장바구니, 바로구매, 쿠폰 받기). 앱 필터 결과 버튼은 숫자를 앞에: "[n]개 [무엇] 보기".
- 메뉴·탭 이름: 2~5글자 명사(홈, 쇼핑, 커뮤니티, 마이페이지).
- 숫자·단위 표기: 필터 항목은 "[면적]㎡([평]평대)"처럼 두 단위를 함께 쓴다. 가격은 숫자 뒤 "원"을 작게 붙인다.

## 10. Do & Don't
관찰 기반 문서의 규칙은 "이 서비스 화면에서 반복되는 규칙"을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 주 행동 버튼은 #00a1ff 바탕 + 흰 16px/500 글자, 높이 48px, 모서리 8px로 만든다.
- 상세 구매 영역은 채운 바로구매 + #00a1ff 외곽선 장바구니를 나란히 둔다.
- 앱 선택 상태(상단 탭 밑줄 2pt, 선택 칩, 라디오)는 #2f3438로 표시한다.
- 할인율은 #ff4650으로 가격(#141414)과 같은 17px/600 줄에 앞에 붙인다.
- 웹 글자는 Pretendard, 자간 -0.3px로 쓴다.
- 필터는 28pt 외곽선 알약 칩 → 탭 달린 바텀시트(위 12px 모서리, 뒤 막 rgba(33,38,41,.5)) → 초기화 + "[n]개 보기"로 만든다.
- 상품 사진은 8px 모서리와 0.5px rgba(0,0,0,.05) 둘레선을 쓴다. 앱 홈 피드 사진만 모서리 0으로 화면 폭을 채운다.
- 하단 탭 바는 5칸, 위 1pt #e2e2e2 선, 선택은 채운 아이콘 + 하늘색으로 한다.

### Don't
- 하늘색을 할인·알림·장식에 쓰지 않는다.
- 빨강 두 가지를 섞지 않는다. #ff4650은 할인, #ff7777은 알림 점·배지에만.
- 앱 라디오·칩 선택을 하늘색으로 칠하지 않는다.
- 진한 그림자를 쓰지 않는다. 그림자는 0 2px 5px rgba(0,0,0,.05~.15) 안에서 쓴다.
- 기획전 색(#f1f0fd, #7b67f5)을 평소 화면 토큰으로 쓰지 않는다.
- 하늘색 바탕 위 흰 글자를 14px보다 작게 쓰지 않는다(대비 2.8:1).

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음. 웹 페이지 루트에 `--ds-` CSS 변수 약 990개(core·legacy-core·ext-commerce·컴포넌트 토큰)가 있다.
- 공개 저장소: https://github.com/bucketplace 의 공개 저장소 12개 중 디자인 시스템 저장소 없음.
- Figma 라이브러리: 공개 자료 없음.
- 문서·Storybook: 공개 자료 없음.
- 버전·변경 관리: 공개 자료 없음. 웹은 legacy 토큰과 새 토큰을 함께 쓰고 있다. 글꼴은 Pretendard v1.3.8.

## 12. AI에 넣을 때
```
오늘의집 스타일로 디자인해 줘.
- 주색: 하늘색 #00a1ff(앱 실측 #0aa5ff). 선택·행동·상품 태그 점에만
- 할인: #ff4650. 알림 점·숫자 배지: #ff7777
- 글자: 앱 #2f3438 하나로 통일(선택 탭·칩·라디오도 이 색), 보조 #828c94, 웹 기본 #141414
- 면: 흰 바탕, 약한 면 #f7f9fa(앱) / #f5f5f5(웹), 테두리 #e0e0e0, 구분선 #f2f4f5
- 글꼴: Pretendard, 자간 -0.3px. 앱 탭·제목 14pt 굵게, 항목 12~13pt, 하단 탭 10pt
- 모서리: 버튼 4px, 사진·검색창 8px, 시트 위 12px, 칩·배지·점 9999px. 피드 사진은 0
- 간격 단위 4px, 앱 좌우 여백 14pt, 칩 사이 8pt, 구획 띠 8pt
- 하단 탭 5칸, 위 1pt #e2e2e2 선, 선택은 채운 아이콘 + 하늘색
- 필터는 28pt 알약 칩 → 탭 달린 바텀시트(뒤 막 rgba(33,38,41,.5)), 아래 초기화 + "[n]개 보기" 버튼
- 홈 피드: 화면 폭 세로 사진 위 18pt 하늘색 "+" 점으로 상품 표시
- 분위기: 사진이 주인공. 색은 적게, 하늘색은 행동에만, 빨강은 할인·알림에만
```

## 13. 참고 자료
- 오늘의집 iOS 앱 화면 캡처 7장(서로 다른 화면 6장: 쇼핑 홈 1장, 사진 피드 홈 1장(같은 캡처가 한 번 더 있음), 검색 결과 필터 바텀시트 4장. SylviaLab 벤치마킹 피그마 파일, 저장소에는 올리지 않음)
- https://ohou.se/ (확인 2026-10-31, 홈 실측과 `--ds-` CSS 변수 읽기)
- https://ohou.se/store (확인 2026-10-31, 쇼핑 목록 실측, store.ohou.se로 이동)
- https://ohou.se/productions/767440/selling (확인 2026-10-31, 상품 상세 실측)
- https://asset.ohousecdn.com/_m/common/web/assets/root-BwqYxuUX.css (확인 2026-10-31, 홈이 불러온 스타일시트 중 하나. 빌드마다 주소가 바뀐다)
- https://assets.ohou.se/fonts/pretendard/v1.3.8/pretendardvariable-dynamic-subset.css (확인 2026-10-31, 글꼴)
- https://www.bucketplace.com/post/2026-04-17-%EB%A9%80%ED%8B%B0-%EA%B5%AD%EA%B0%80-%EC%95%B1%EC%97%90%EC%84%9C-pretendard-jp-%EB%8F%84%EC%9E%85%ED%95%98%EA%B8%B0/ (확인 2026-10-31, 버킷플레이스 기술 블로그. 앱 글꼴 사실만 참고)
- https://github.com/bucketplace (확인 2026-10-31, 공개 저장소 12개 중 디자인 시스템 저장소 없음)

근거와 한계
- 오늘의집은 디자인 시스템 문서를 공개하지 않았다. 웹 색·글자 단계·모서리·컴포넌트 수치는 페이지 루트의 `--ds-` CSS 변수에서 읽고, 실제 쓰임은 세 화면(홈, 쇼핑 목록, 상품 상세)의 computed style로 확인했다. 앱 값은 캡처 픽셀에서 잰 값이다.
- 웹은 2026-10-31 한 번의 실측이다. 앱 캡처는 촬영 시기를 알 수 없다(레이어 이름이 사진 파일 번호뿐이다). 쇼핑 홈 캡처는 세일 기획전 기간 화면이라 배너 색은 기획전 테마로 분리했다.
- 앱 캡처가 1배율이라 글자 크기는 ±1pt, 작은 글자 색과 1pt 테두리 색은 번짐 오차가 있다. 넓은 면 색(하늘색 버튼, 검색창, 칩, 시트 막)은 정확하다. 시트 막 아래 색은 막(rgba(33,38,41,.5))을 걷어내 계산했다.
- 앱 하늘색(#0aa5ff)과 웹 변수(#00a1ff)의 차이가 실제 토큰 차이인지, 캡처 색 공간 차이인지는 확인 필요다.
- 앱 상품 목록·상품 상세·구매 흐름·토스트·다크 모드는 보지 않았다. 웹 공식 브랜드 페이지(events.ohou.se/brand)는 열지 못했다. 웹 모바일 좌우 여백과 스낵바 색은 확인하지 못했다.
- 웹은 legacy 토큰과 새 토큰을 함께 쓰고 있어 같은 역할에 다른 값이 보일 수 있다(예: 글자 #141414와 #2f3438). 앱은 legacy 쪽 값(#2f3438, #828c94, #eaedef)과 더 많이 겹친다.
- 캡처 속 사용자 사진, 상품 이름, 배너 그림, 개인 정보는 옮기지 않았다. 토큰 이름 중 app-…, swatch-…, promo-…는 SylviaLab이 쓰임에 맞춰 붙인 이름이다.
- 8장 대비값과 1·6·10장의 "(관찰에서 정리)" 규칙은 SylviaLab이 이 문서의 HEX와 관찰 사실로 계산·정리한 것이다.

서비스 이름과 브랜드는 각 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
공개 패키지는 없다. 웹 페이지 루트에서 읽은 CSS 변수 묶음과 이 문서 이름을 잇는다. 개별 변수의 전체 이름은 빌드마다 바뀔 수 있어 묶음 단위로만 적는다.

| DESIGN.md | 웹 CSS 변수 묶음 |
|---|---|
| `colors.genuine-blue-*`, `colors.gray-*` | `--ds-core-color-*` |
| `colors.background-*`, `foreground-*`, `border-*`, `accent-*` | `--ds-core-color-*` 의 역할 이름(backgroundBrand, foregroundWeak 등) |
| `colors.legacy-*`, `colors.elevation-*-dark`, `elevation.depth*` | `--ds-legacy-core-*` |
| `colors.today-deals`, `review-star`, `ohouse-pick`, `today-departure` | `--ds-ext-commerce-*` |
| `typography.*` 자간 | `--ds-core-letterSpacing-default` (-0.3px) |
| `components.button-*` | boxButton 컴포넌트 토큰 |
| `components.select*` | select 컴포넌트 토큰 |
| `components.bottom-sheet-app` | bottomSheet 컴포넌트 토큰(웹 값: 손잡이 32×4px) |
| `components.square-badge-gray` | squareBadge 컴포넌트 토큰 |

## 부록 B. 값의 출처 구분
- **웹 변수·computed style 그대로(관찰, 2026-10-31)**: 웹 색 전부(genuineBlue·gray 단계, semantic, legacy, ext-commerce, 상태), 글자 단계와 자간 -0.3px, 모서리 2~20px·9999px, 웹 버튼·셀렉트·옵션 줄·꼬리표·스낵바·바텀시트 수치, 그림자 depth10~30과 홈 실측값, 눌림 모션.
- **앱 캡처에서 잰 값(관찰, 1배율, 촬영 시기 확인 필요)**: app- 토큰 색(#0aa5ff, #0198ed, #f7f9fa, #f2f4f5, #e2e2e2 등), 앱 글자 크기(±1pt), 칩·버튼·검색창·탭 높이, 세로 리듬 표, 색상 견본, 기획전 색.
- **SylviaLab이 정리·권장한 것**: 앱 토큰 이름(app-…, swatch-…, promo-…), YAML의 semantic 연결(웹 변수 이름을 kebab-case로 옮김), 1·6·10장의 "(관찰에서 정리)" 규칙, 각 장 Don't, 8장 대비 계산과 점검 목록의 "(구현 권장)", 7장 예시 문구.
- **확인하지 못한 것**: 다크 모드, 중단점, 웹 모바일 여백, 앱 상태(눌림·비활성·로딩), 빈 상태·오류 화면, 구매 흐름.
