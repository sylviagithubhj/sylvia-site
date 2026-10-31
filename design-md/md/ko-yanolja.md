---
version: "1.0"
name: "놀 NOL (야놀자)"
description: "역할·계열·세기로 이름 지은 웹 토큰 클래스 위에 파란 보라 #4154ff는 행동, 빨강 #e5000f는 할인에만 나눠 쓰고, 그림자 대신 옅은 선과 12~16px 둥근 카드·사진으로 구역을 나누는 여행·여가 예약 서비스."
source:
  - "관찰: https://nol.yanolja.com/ 홈, 숙소 서브홈, 숙소 상세 computed style (1024px, 375×812)"
  - "관찰: 홈이 불러온 CSS 파일 8개의 토큰 클래스 정의 (assets.yanolja.com/display-site/…/_next/static/css/)"
  - "실측일 2026-10-31"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 색 — 웹 CSS 토큰 클래스의 계열·세기(primitive) → 역할(semantic)
#    primitive 이름은 CSS 클래스의 "계열-세기"를 그대로 따랐다.
# ─────────────────────────────────────────────
colors:
  # 계열 primary (파란 보라)
  primary-main: "#4154ff"
  primary-weak4: "#7280ff"
  primary-weak2: "#b2baff"
  primary-weak1: "#dfe2ff"
  primary-weak: "#f5f6ff"
  # 계열 accent / danger (빨강)
  accent-main: "#e5000f"
  accent-weak: "#fef5f5"
  danger-weak2: "#f59ea4"
  # 계열 warning
  warning-main: "#cc4100"
  warning-weak: "#fef8f2"
  # 계열 neutral
  neutral-main: "#1b1c1f"
  neutral-sub: "#6e6f73"
  neutral-medium: "#8b8d92"
  neutral-weak3: "#dadbdf"
  neutral-weak2: "#e9eaef"
  neutral-weak1: "#f2f3f7"
  neutral-weak: "#f7f8fb"
  static-white: "#ffffff"
  static-black: "#000000"
  black-alpha-50: "#00000080"

  # ── Semantic (화면에서는 이 이름만 쓴다) ──
  primary: "{colors.primary-main}"            # 예약하기, 회원가, 검색창 테두리, 새 소식 점
  on-primary: "{colors.static-white}"
  primary-line-strong: "{colors.primary-weak4}"
  primary-line-weak: "{colors.primary-weak2}"
  primary-line-weakest: "{colors.primary-weak1}"
  primary-soft: "{colors.primary-weak}"       # 연한 파랑 배지 배경
  accent: "{colors.accent-main}"              # 할인율, 당일특가
  accent-soft: "{colors.accent-weak}"
  danger: "{colors.accent-main}"              # 오류 (값은 accent와 같음)
  danger-line-weak: "{colors.danger-weak2}"
  warning: "{colors.warning-main}"
  warning-soft: "{colors.warning-weak}"
  text-primary: "{colors.neutral-main}"
  text-secondary: "{colors.neutral-sub}"      # 정가 취소선, 선택 안 된 탭, 안내 글자
  text-muted: "{colors.neutral-medium}"       # 날짜 같은 흐린 정보
  border-strong: "{colors.neutral-weak3}"     # 흰 버튼·필터 칩
  border: "{colors.neutral-weak2}"            # 카드·날짜 상자
  divider: "{colors.neutral-weak1}"           # 구분선, 눌림·호버 면
  pressed: "{colors.neutral-weak1}"
  surface-subtle: "{colors.neutral-weak}"     # 공지 띠
  surface: "{colors.static-white}"
  chip-selected: "{colors.neutral-main}"
  scrim: "{colors.black-alpha-50}"
  membership-dia: "#3549ff"
  membership-gold: "#996500"
  membership-platinum: "#008161"
  membership-silver: "{colors.neutral-sub}"

# ─────────────────────────────────────────────
# 2. 타이포그래피 — Pretendard, 루트 10px(1.6rem = 16px)
#    typography-{역할}-{크기}-{굵기}, 변형 -multiline / -line-clamp-1·2 / -fixed
# ─────────────────────────────────────────────
typography:
  font-family: "Pretendard, -apple-system, system-ui, sans-serif"
  root-font-size: "10px"
  letter-spacing: "normal"
  headline-40: { fontSize: "40px", fontWeight: 700, lineHeight: 1.2 }    # 48px
  headline-32: { fontSize: "32px", fontWeight: 700, lineHeight: 1.19 }   # 38px
  headline-24: { fontSize: "24px", fontWeight: 700, lineHeight: 1.21 }   # 29px, PC 숙소 이름
  subtitle-20: { fontSize: "20px", fontWeight: 700, lineHeight: 1.2, multilineLineHeight: 1.4 }   # 모바일 숙소 이름
  subtitle-18: { fontSize: "18px", fontWeight: 700, lineHeight: 1.22 }
  subtitle-16: { fontSize: "16px", fontWeight: 700, lineHeight: 1.19, multilineLineHeight: 1.5 }
  body-14:     { fontSize: "14px", fontWeight: 400, lineHeight: 1.21, multilineLineHeight: 1.5 }
  body-13:     { fontSize: "13px", fontWeight: 400, lineHeight: 1.23, multilineLineHeight: 1.54 }
  body-12:     { fontSize: "12px", fontWeight: 400, lineHeight: 1.17, multilineLineHeight: 1.5 }
  caption-11:  { fontSize: "11px", fontWeight: 700, lineHeight: 1.18, multilineLineHeight: 1.55 }
  label-10:    { fontSize: "10px", fontWeight: 700, lineHeight: 1.2 }
  label-8:     { fontSize: "8px",  fontWeight: 700, lineHeight: 1.25 }
  stay-name:   { fontSize: "24px", mobileFontSize: "20px", fontWeight: 700 }  # headline-24 / subtitle-20

rounded:
  r4: "4px"
  r6: "6px"       # 작은 배지·썸네일
  r8: "8px"       # 모바일 상품 사진, 지역선택 상자
  r10: "10px"
  r12: "12px"     # 가장 흔한 값: 흰 외곽선 버튼, 공지 띠, 배너
  r16: "16px"     # 예약하기, 날짜·인원 상자, 객실 카드
  r20: "20px"     # 모바일 큰 배너
  r24: "24px"     # 바텀시트
  r28: "28px"     # PC 큰 배너
  capsule: "9999px"

spacing:
  s2: "2px"
  s4: "4px"       # 버튼 위아래
  s6: "6px"
  s8: "8px"
  s10: "10px"
  s12: "12px"     # 상단 칩 탭 좌우
  s16: "16px"     # 버튼·필터 칩 좌우, 서브홈 모바일 여백
  s20: "20px"     # 홈 모바일 여백, 날짜 상자 좌우
  s24: "24px"
  s40: "40px"     # 1024px 이상 좌우 여백

size:
  button-primary: "52px"
  button-outline: "44px"
  button-app: "40px"
  button-capsule: "32px"
  text-button: "25px"
  search-field: "48px"   # 44~48px
  date-box: "58px"
  region-box: "46px"
  chip-filter: "42px"
  chip-tab: "32px"
  chip-tab-min-width: "44px"
  top-bar-mobile: "52px"
  icon: "24px"
  photo-button: "26px"   # PC 32px
  new-dot: "5px"

border-width:
  regular: "1px"
  search-field: "1.5px"

layout:
  breakpoints: ["600px", "640px", "768px", "1024px", "1280px", "1320px", "1536px"]
  ds-pc: "1024px 이상"
  ds-pc-wide: "1320px 이상"
  margin-x: { mobileHome: "20px", mobileSubhome: "16px", pc: "40px" }
  pc-detail-info-width: "840px"
  pc-room-info-width: "478px"
  mobile-product-card: { width: "109px", imageRatio: "3:4" }

elevation:
  shadow-1: "0 0 8px rgba(0,0,0,.05)"
  shadow-2: "0 0 8px rgba(0,0,0,.1)"
  shadow-3: "0 0 6px rgba(0,0,0,.2)"
  image-edge: "inset 0 0 0 1px rgba(0,0,0,.05)"

motion:
  durations: ["100ms", "150ms", "200ms", "300ms", "500ms"]
  ease-out: "cubic-bezier(0,0,.2,1)"
  ease-in-out: "cubic-bezier(.4,0,.2,1)"
  reduced-motion: "prefers-reduced-motion 규칙 있음"

# ─────────────────────────────────────────────
# 3. 컴포넌트 토큰
# ─────────────────────────────────────────────
components:
  button-primary:          { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", typography: "{typography.subtitle-16}", rounded: "{rounded.r16}", height: "{size.button-primary}", padding: "4px 16px" }
  button-outline-primary:  { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", borderColor: "{colors.primary}", rounded: "{rounded.r12}", height: "{size.button-app}" }
  button-capsule-primary:  { backgroundColor: "{colors.surface}", textColor: "{colors.primary}", borderColor: "{colors.primary}", typography: "{typography.body-12}", rounded: "{rounded.capsule}", height: "{size.button-capsule}", padding: "4px 20px" }
  button-outline-neutral:  { backgroundColor: "{colors.surface}", textColor: "{colors.text-primary}", borderColor: "{colors.border-strong}", typography: "{typography.body-14}", rounded: "{rounded.r12}", height: "{size.button-outline}", padding: "4px 16px" }
  button-outline-neutral-pressed: { backgroundColor: "{colors.pressed}" }
  button-capsule-dark:     { backgroundColor: "{colors.surface}", borderColor: "{colors.text-primary}", rounded: "{rounded.capsule}", height: "{size.button-outline}" }
  button-text:             { textColor: "{colors.text-primary}", height: "{size.text-button}" }
  chip-filter:             { backgroundColor: "{colors.surface}", borderColor: "{colors.border-strong}", rounded: "{rounded.capsule}", height: "{size.chip-filter}", padding: "0 16px", typography: "{typography.subtitle-16}" }
  chip-tab:                { rounded: "{rounded.capsule}", height: "{size.chip-tab}", minWidth: "{size.chip-tab-min-width}", padding: "0 12px" }
  chip-tab-selected:       { backgroundColor: "{colors.chip-selected}", textColor: "{colors.on-primary}" }
  search-field:            { backgroundColor: "{colors.surface}", borderColor: "{colors.primary}", borderWidth: "{border-width.search-field}", rounded: "{rounded.capsule}", height: "{size.search-field}", placeholderColor: "{colors.text-secondary}" }
  date-box:                { borderColor: "{colors.border}", rounded: "{rounded.r16}", height: "{size.date-box}", paddingX: "{spacing.s20}", typography: "{typography.subtitle-18}" }
  region-box:              { borderColor: "{colors.text-primary}", rounded: "{rounded.r8}", height: "{size.region-box}" }
  room-card:               { backgroundColor: "{colors.surface}", borderColor: "{colors.border}", rounded: "{rounded.r16}" }
  badge-primary-soft:      { backgroundColor: "{colors.primary-soft}", borderColor: "{colors.primary-line-weak}", rounded: "{rounded.capsule}" }
  bottom-sheet:            { backgroundColor: "{colors.surface}", rounded: "{rounded.r24}", inset: "0 16px 20px", paddingTop: "{spacing.s40}", scrim: "{colors.scrim}" }
---

# 놀 NOL (야놀자) 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 1024px 폭과 375×812 모바일 에뮬레이션, computed style과 페이지가 불러온 CSS 파일의 클래스 정의를 읽음. 작업 컨테이너의 셸은 이 사이트에 접속하지 못해 Playwright 대신 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다.

## 1. 개요와 원칙
- 서비스 성격: 숙소·항공·레저·공연 티켓을 함께 파는 여행·여가 예약 서비스. 웹 주소는 nol.yanolja.com이다.
- 디자인 인상 한 줄: 거의 검정에 가까운 글자(#1b1c1f)와 흰 면 위에 파란 보라(#4154ff)를 행동 색으로, 빨강(#e5000f)을 할인 색으로 쓰는 둥근 카드 화면.
- 공식 시스템 이름: 공개된 이름 없음. 공개 문서는 찾지 못했다. 다만 웹 CSS에 `text-text-primary-main`, `bg-fill-neutral-weak`, `border-line-neutral-weak2`, `typography-subtitle-16-bold` 같은 규칙적인 토큰 클래스가 있다. 역할(text·fill·line) + 색 계열(primary·neutral·accent·danger·warning) + 세기(main·medium·sub·weak1~4)로 이름을 짓는다. 클래스 접두어 `ds-pc`, `ds-pc-wide`로 보아 내부 디자인 시스템이 있는 것으로 보이지만 이름은 확인 필요.
- 디자인 원칙(공식 원칙은 찾지 못했다):
  1. 파랑은 행동, 빨강은 할인. 예약하기·회원가·알림받기는 #4154ff, 할인율·당일특가는 #e5000f로 나눈다. (관찰에서 정리)
  2. 그림자보다 1px 옅은 선(#e9eaef, #dadbdf)과 옅은 회색 면(#f7f8fb)으로 구역을 나눈다. (관찰에서 정리)
  3. 사진은 늘 둥근 모서리와 .05 검정 안쪽 선을 둘러 흰 배경과 섞이지 않게 한다. (관찰에서 정리)
  4. 누를 수 있는 작은 요소(칩, 배지, 검색창, 알림받기)는 캡슐, 큰 면(버튼, 카드, 상자)은 12~16px로 둥글게. (관찰에서 정리)
  5. 같은 정보를 모바일은 한 단계 작게, PC는 한 단계 크게 보여 준다. (관찰에서 정리)
- 톤: 밝고 둥글게, 행동과 할인만 색으로 짚는다.

### 특장점
- 토큰 이름이 문법을 가진다 — CSS 클래스가 역할(text·fill·line) + 계열(primary·neutral·accent·danger·warning) + 세기(main·medium·sub·weak1~4)로 지어지고, 글자도 `typography-{역할}-{크기}-{굵기}`에 `-line-clamp`, `-multiline`, `-fixed` 변형이 붙는다. 공개 문서 없이도 웹 코드에서 체계가 드러난다.
- 행동색과 할인색을 나눈다 — 파랑 #4154ff는 예약하기 버튼·회원가·검색창 테두리, 빨강 #e5000f는 할인율·당일특가·오류에만 나온다.
- 탭 글자 폭 흔들림을 막는다 — 선택 안 된 글자 탭(16px/400) 뒤에 보이지 않는 16px/700 글자를 미리 깔아 폭을 잡아 둔다.
- 사진 둘레에 옅은 선을 두른다 — image-edge(inset 0 0 0 1px rgba(0,0,0,.05))로 흰 배경 사진도 경계가 보인다.
- 모바일·PC 크기를 한 단계씩 옮긴다 — 숙소 이름이 모바일 subtitle-20 → PC headline-24, 좌우 여백은 모바일 16~20px → 1024px 화면 40px이다.

### 배울 점
- 굵기로 선택 상태를 표시하는 탭을 만들 때 놀처럼 굵은 글자를 보이지 않게 미리 깔아 폭을 고정한다.
- 할인과 예약이 한 화면에 함께 있을 때 행동은 파랑, 할인은 빨강으로 색 역할을 나눠 둘이 다투지 않게 한다.
- 토큰 이름을 지을 때 역할 + 색 계열 + 세기 세 칸으로 지어 이름만 보고 쓰임을 알 수 있게 한다.

### 이 문서를 읽는 AI 에이전트에게
- 색·크기는 YAML 토큰 이름으로만 쓴다. 계열·세기 이름(`neutral-weak2`)보다 역할 이름(`border`)을 먼저 쓰고, 구현할 때는 웹의 토큰 클래스 문법(`text-text-primary-main` 등, 부록 A)에 맞춘다.
- 파랑 `primary`는 행동(예약하기, 회원가, 알림받기, 검색창 테두리), 빨강 `accent`는 할인과 오류에만 쓴다. 두 색을 한 버튼에 섞지 않는다.
- 선택된 칩은 파랑이 아니라 `chip-selected`(#1b1c1f)로 칠한다.
- 모바일은 한 단계 작게, PC(1024px 이상)는 한 단계 크게 쓴다. 예: 숙소 이름 subtitle-20 → headline-24.
- 판단이 어려우면 그림자 대신 1px `border`, 각진 것보다 둥근 것(12~16px, 작은 요소는 캡슐)을 고른다.

## 2. 색상
아래 HEX는 CSS 파일의 토큰 클래스 정의에서 읽고, 화면 computed style과 맞는지 대조했다. 다크 모드 규칙(`.dark`, `prefers-color-scheme: dark`)은 CSS에서 찾지 못했다(다크 값 확인 필요).

### 색 체계
웹 CSS의 토큰 클래스가 **역할(text·fill·line) + 계열(primary·neutral·accent·danger·warning) + 세기(main·medium·sub·weak, weak1~4)** 세 칸으로 지어져 있다(관찰). 이 문서는 "계열-세기"를 primitive로, 화면 쓰임을 semantic으로 적는다.

| 층 | 예시 이름 | 쓰는 곳 |
|---|---|---|
| 계열-세기(primitive) | `primary-main`, `neutral-weak2`, `accent-weak` | YAML 정의. CSS 클래스의 뒤 두 칸과 같다 |
| 역할(semantic) | `text-primary`, `border`, `primary-soft`, `scrim` | 화면과 컴포넌트 |
| 역할 접두(CSS) | `text-`, `bg-fill-`, `border-line-` | 같은 색을 글자·면·선 중 어디에 쓰는지 |
| 상호작용 | `interaction-neutral-presshover-weak1` | 눌림·호버 면(#f2f3f7) |

- 세기 이름은 `main`(가장 진함) → `medium`·`sub` → `weak4` … `weak1` → `weak`(가장 옅음) 순이다.
- 같은 HEX가 여러 역할에 쓰인다. 예: #e5000f는 accent-main(할인)과 danger-main(오류) 두 이름을 가진다.

### 역할별 색
- 행동 `primary`(#4154ff): 예약하기 버튼 면, 회원가·회원가입 글자, 외곽선 버튼 선·글자, 검색창 1.5px 테두리, 공지 배지, 새 소식 점.
  - 짝: 연한 배지 = 면 `primary-soft` + 선 `primary-line-weak`. 눌림·비활성 짝은 확인 필요.
- 할인 `accent`(#e5000f): 할인율(보통 굵기), 당일특가. 연한 면 `accent-soft`.
- 오류 `danger`: 글자·면·선 모두 #e5000f, 연한 선 `danger-line-weak`.
- 경고 `warning`: 글자 #cc4100 + 면 #fef8f2 조합(대비 4.61:1).
- 회색 글자: 기본 `text-primary` → 정가·안내 `text-secondary` → 흐린 정보 `text-muted`.
- 회색 선: 카드·상자 `border`, 흰 버튼·칩 `border-strong`, 구분선 `divider`.
- 회색 면: 공지 띠 `surface-subtle`, 눌림·호버 `pressed`.
- 선택: 상단 칩 탭은 `chip-selected`(#1b1c1f) 면 + 흰 글자.
- 멤버십 색: 등급 표시 전용.
- 성공·정보 색: 토큰 클래스에서 찾지 못함(확인 필요).

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| primary-main (text·fill·line) | #4154ff | "예약하기" 버튼 배경, "회원가입"·"회원가" 글자, 알림받기 외곽선 버튼, 검색창 테두리(1.5px), 공지 배지, 새 소식 점 |
| primary-weak4 (line) | #7280ff | 진한 보조 테두리 |
| primary-weak2 (line) | #b2baff | 연한 파랑 배지 테두리 |
| primary-weak1 (line) | #dfe2ff | 가장 연한 파랑 테두리 |
| primary-weak (fill) | #f5f6ff | 연한 파랑 배지 배경("지금예매" 류) |
| accent-main (fill) | #e5000f | 할인율 글자(text-accent-medium 클래스로 붙지만 값은 같음), "당일특가" 같은 강조 |
| accent-weak (fill) | #fef5f5 | 빨강 계열 연한 배경 |

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| neutral-weak3 (fill·line) | #dadbdf | 흰 버튼·필터 칩 테두리 |
| neutral-weak2 (fill·line) | #e9eaef | 카드·날짜 선택 상자 테두리 |
| neutral-weak1 (fill·line) | #f2f3f7 | 구분선, 눌림·호버 배경(interaction-neutral-presshover-weak1) |
| neutral-weak (fill) | #f7f8fb | 공지 띠 배경, 옅은 면 |
| static-white | #ffffff | 페이지·카드 배경, 진한 바탕 위 글자 |
| static-black | #000000 | 고정 검정 |
| opacity-black-5~80 | rgba(0,0,0,.05~.8) | 이미지 테두리 .05, 시트 뒤 막(scrim) .5, 사진 위 버튼 .5~.6 |
| opacity-white-20·80 | rgba(255,255,255,.2/.8) | 사진 위 흰 반투명 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| neutral-main (text·fill·line) | #1b1c1f | 기본 글자. 선택된 상단 칩 배경. 지역선택 상자 테두리 |
| neutral-sub (text) | #6e6f73 | 정가 취소선, 선택 안 된 탭, 검색창 안내 글자 |
| neutral-medium (text·line) | #8b8d92 | 날짜 같은 흐린 정보 |
| 토큰 밖 회색 | #6d6d6d | 객실 카드의 "취소 및 환불 불가" 글자. 토큰 목록에 없는 값이다 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | 확인 필요 | 토큰 클래스에서 찾지 못함 |
| warning | #cc4100 | text-warning-main |
| warning-weak (fill) | #fef8f2 | 경고 배경 fill-warning-weak |
| error | #e5000f | text·fill·line-danger-main |
| danger-weak2 (line) | #f59ea4 | 연한 오류 테두리 line-danger-weak2 |
| info | 확인 필요 | 토큰 클래스에서 찾지 못함 |

### 멤버십 색(참고)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| membership-dia-main | #3549ff | 다이아 등급 |
| membership-dia-weak2 | #bfd1ff | 다이아 등급 연한 색 |
| membership-gold-main | #996500 | 골드 등급 |
| membership-gold-weak2 | #fddd72 | 골드 등급 연한 색 |
| membership-platinum-main | #008161 | 플래티넘 등급 |
| membership-platinum-weak3 | #7ce7d0 | 플래티넘 등급 연한 색 |
| membership-silver-main | #6e6f73 | 실버 등급 |

### 색 사용 규칙
- #4154ff는 예약하기 버튼, 회원가·회원가입 글자, 외곽선 버튼, 검색창 테두리, 공지 배지, 새 소식 점에 쓴다.
- #e5000f는 할인율·당일특가 같은 할인 강조와 오류(danger)에 쓴다. 행동 버튼에는 쓰지 않는다.
- 기본 글자는 #1b1c1f, 정가·안내 글자는 #6e6f73, 날짜처럼 흐린 정보는 #8b8d92.
- 테두리는 카드·상자 #e9eaef, 흰 버튼·필터 칩 #dadbdf. 눌림·호버 배경은 #f2f3f7.
- 시트 뒤 막은 rgba(0,0,0,.5), 사진 위 버튼은 rgba(0,0,0,.5~.6).
- 멤버십 색은 등급 표시에만 쓴다.

### 화면 모드
- 다크 모드 규칙(`.dark`, `prefers-color-scheme: dark`)은 CSS에서 찾지 못했다. 밝은 화면 한 벌만 확인했다.
- 고대비 모드: 확인 필요.

### Don't
- #e5000f를 예약하기·알림받기 같은 행동에 쓰지 않는다.
- #4154ff를 할인율·가격 강조에 쓰지 않는다. 회원가 글자만 예외다.
- 선택된 칩을 파랑으로 칠하지 않는다. #1b1c1f다.
- 토큰 밖 회색(#6d6d6d 같은 값)을 새로 만들지 않는다.
- 멤버십 색을 등급 표시 밖에 쓰지 않는다.

## 3. 타이포그래피
- 글꼴: Pretendard(yaimg.yanolja.com에서 Pretendard 글꼴 조각 CSS를 불러온다. Pretendard는 SIL Open Font License 1.1 무료 글꼴이다.)
- 대체 글꼴: -apple-system, system-ui, sans-serif
- 루트 글자 크기가 10px라서 1.6rem = 16px다. 자간은 실측한 글자 모두 normal이었다.
- 크기 단위는 px(1pt=1px로 적음). 굵기 칸은 대표 굵기이고, 같은 단계에 있는 다른 굵기는 쓰임 칸에 적었다. 행간은 한 줄 값, 괄호는 여러 줄(multiline) 값이다.

### 위계와 사용처

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| headline-40 | 40 | 700 | 48px | 가장 큰 제목 |
| headline-32 | 32 | 700 | 38px | 큰 제목(400도 있음) |
| headline-24 | 24 | 700 | 29px | PC 숙소 이름(H1), PC 객실 가격, 평점 숫자(400도 있음) |
| subtitle-20 | 20 | 700 | 24px (여러 줄 28px) | 모바일 숙소 이름, PC 객실 이름(H2)(600·400도 있음) |
| subtitle-18 | 18 | 700 | 22px | 모바일 섹션 제목, 날짜·인원 값(400도 있음) |
| subtitle-16 | 16 | 700 | 19px (여러 줄 24px) | 객실 이름(H4), 할인율, 탭 글자, 필터 칩(600·400도 있음) |
| body-14 | 14 | 400 | 17px (여러 줄 21px) | 버튼 글자, 정가, 본문(700·600도 있음) |
| body-13 | 13 | 400 | 16px (여러 줄 20px) | 모바일 상품 카드 이름·가격(700·600도 있음) |
| body-12 | 12 | 400 | 14px (여러 줄 18px) | 작은 버튼, 보조 정보(700·600도 있음) |
| caption-11 | 11 | 700 | 13px (여러 줄 17px) | "원~" 단위, 작은 꼬리표(400도 있음) |
| label-10 | 10 | 700 | 12px | 공지 배지(400도 있음) |
| label-8 | 8 | 700 | 10px | 아주 작은 상품 배지 |

- 이름 규칙: `typography-{역할}-{크기}-{굵기}`. 한 줄 자르기용 `-line-clamp-1/2`, 행간을 늘린 `-multiline`, rem이 아닌 px로 고정한 `-fixed` 변형이 있다.

### 모바일·PC 짝
| 쓰임 | 모바일 | PC(1024px) |
|---|---|---|
| 숙소 이름 | subtitle-20 (20px/700) | headline-24 (24px/700, H1) |
| 화면 좌우 여백 | 16~20px | 40px |
| 그 밖의 단계 | 확인 필요 | 확인 필요 |

### 규칙
- 한 화면에서 모바일은 한 단계 작은 크기, PC는 한 단계 큰 크기를 쓴다(예: 모바일 subtitle-20 → PC headline-24).
- 가격은 굵게, 할인율은 빨강 보통 굵기로 둔다. 모바일 카드: 할인율 13px/400 빨강 + 가격 13px/700 + "원~" 11px/700.
- 주 버튼 글자는 16px/700, 외곽선 버튼은 14px/700, 캡슐 알림받기는 12px/700.
- 여러 줄 글은 `-multiline` 변형으로 행간을 늘린다(14px: 17px → 21px).
- 8~10px는 배지에만 쓴다.
- 같은 크기 안에서 굵기는 400·600·700을 쓴다. 600은 회원가(14px/600) 같은 중간 강조에 쓰인다.

### Don't
- 단계 밖 크기(15px, 17px 등)를 새로 만들지 않는다.
- 8~10px를 본문·가격에 쓰지 않는다. 배지 전용이다.
- 여러 줄 글에 한 줄 행간(14px: 17px)을 그대로 쓰지 않는다. `-multiline`(21px)을 쓴다.
- 굵기로 선택을 바꾸는 탭에서 폭이 흔들리게 두지 않는다.
- 사용자 확대가 필요한 본문에 `-fixed`(px 고정) 변형을 쓰지 않는다.

## 4. 레이아웃·간격
- 간격 단계(관찰, pt): 2, 4, 6, 8, 10, 12, 16, 20, 24, 40
- 기준 화면: 375×812 모바일 에뮬레이션과 1024px 폭 웹.
- 화면 좌우 여백: 홈 모바일 20px, 숙소 서브홈 모바일 16px. 1024px 폭 상세 화면은 40px.
- 눈금: 2px. 클래스에 2, 4, 6, 8, 10, 12, 16, 20, 24, 40이 쓰인다(gap-2, py-4, px-6, gap-8, mb-10, rounded-12, px-16, px-20, pl-24, px-40).
- 그리드·최대 폭: 중단점은 CSS에서 600, 640, 768, 1024, 1280, 1320, 1536px이 보인다. `ds-pc` 접두 규칙은 1024px 이상, `ds-pc-wide`는 1320px 이상에서 적용된다. 1024px 상세 화면은 왼쪽 정보 840px 폭, 객실 카드는 사진 칸과 478px 정보 칸으로 나뉜다. 모바일 가로 스크롤 상품 카드는 폭 109px, 사진 3:4.

### 그리드와 중단점
| 구분 | 범위·값 | 좌우 여백 | 비고 |
|---|---|---|---|
| 모바일 | 375px 에뮬레이션 | 홈 20px, 서브홈 16px | 가로 스크롤 상품 카드 109px, 사진 3:4 |
| PC (`ds-pc`) | 1024px 이상 | 40px | 상세: 왼쪽 정보 840px, 객실 카드 정보 칸 478px |
| 넓은 PC (`ds-pc-wide`) | 1320px 이상 | 확인 필요 | — |
| CSS 중단점 | 600, 640, 768, 1024, 1280, 1320, 1536px | — | 각 중단점의 쓰임은 확인 필요 |
| 컬럼 수 | 확인 필요 | — | — |

### 화면 세로 리듬
화면 단위 세로 간격(헤더 → 제목, 구획 사이)은 실측 기록이 없어 확인 필요다. 컴포넌트 단위로 잰 값은 아래와 같다.

| 구간 | 값 |
|---|---|
| 모바일 상단 바 | 높이 52px |
| 버튼 안 위아래 | 4px |
| 바텀시트 위 여백 | 40px |
| 바텀시트 ↔ 화면 아래 | 20px(좌우 16px) |
| 구획 사이 | 확인 필요 |

### 간격 적용 규칙
- 간격은 2px 배수에서 고른다.
- 버튼 안 여백은 위아래 4px, 좌우 16px(캡슐 알림받기는 20px).
- 필터 칩 좌우 16px, 상단 칩 탭 좌우 12px, 날짜·인원 상자 좌우 20px.
- 1024px 이상(`ds-pc`)에서는 좌우 여백을 40px로 넓힌다.

### Don't
- 2px 배수가 아닌 간격(5px, 7px 등)을 만들지 않는다.
- 1024px 이상에서 모바일 여백(16~20px)을 그대로 쓰지 않는다. 40px로 넓힌다.
- 버튼 좌우 여백을 16px(캡슐 알림받기 20px) 밖으로 바꾸지 않는다.
- 모바일 상품 카드 사진을 3:4 밖의 비율로 자르지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| rounded-4 | 4px | 작은 요소 |
| rounded-6 | 6px | 작은 배지·썸네일 |
| rounded-8 | 8px | 모바일 상품 사진, 지역선택 상자 |
| rounded-10 | 10px | 일부 상자 |
| rounded-12 | 12px | 가장 흔한 값. 흰 외곽선 버튼, 공지 띠, 배너, 모바일 썸네일 |
| rounded-16 | 16px | 예약하기 버튼, 날짜·인원 상자, 객실 카드, PC 썸네일 |
| rounded-20 | 20px | 모바일 큰 배너 이미지 |
| rounded-24 | 24px | 바텀시트 상자 |
| rounded-28 | 28px | PC 큰 배너 이미지 |
| rounded-capsule / full | 9999px | 상단 칩, 필터 칩, 배지, 알림받기 버튼, 검색창 |

- 규칙: 누를 수 있는 작은 요소는 캡슐, 큰 면은 12~16px, 사진은 화면이 클수록 더 둥글게(모바일 8~12 → 배너 20 → PC 배너 28px). (관찰에서 정리)

### 고도
  - shadow-1: 0 0 8px rgba(0,0,0,.05) — 떠 있는 작은 면
  - shadow-2: 0 0 8px rgba(0,0,0,.1) — 홈에서 2곳 관찰
  - shadow-3: 0 0 6px rgba(0,0,0,.2) — 진한 그림자
  - image-edge: inset 0 0 0 1px rgba(0,0,0,.05) — 사진 둘레의 아주 옅은 선
  - border: 1px #e9eaef 또는 #dadbdf — 카드·칩 외곽선
  - 그림자보다 1px 옅은 선과 옅은 회색 면으로 구역을 나눈다.

### 모션
- 길이·이징: CSS에 duration 100·150·200·300·500ms, ease-out cubic-bezier(0,0,.2,1), ease-in-out cubic-bezier(.4,0,.2,1)이 있다. 어느 컴포넌트에 쓰는지는 확인 필요. prefers-reduced-motion 규칙이 있다.

### 아이콘·사진
- 아이콘: 선형 SVG, 24px 기본. 사진 위 원형 버튼 26px(PC 32px).
- 사진: 숙소·공연 사진이 크다. 사진은 늘 둥근 모서리와 .05 검정 안쪽 선을 둘러 흰 배경과 섞이지 않게 한다. 공연 포스터는 3:4.

### Don't
- 카드·버튼에 shadow-2(0 0 8px rgba(0,0,0,.1))보다 진한 그림자를 쓰지 않는다. 기본 카드는 1px #e9eaef 선이다.
- 사진에서 image-edge 선을 빼지 않는다.
- 칩·배지·검색창을 12px 모서리로 만들지 않는다. 캡슐이다.
- 큰 면(버튼·카드)을 캡슐로 만들지 않는다. 12~16px다(알림받기·전체 사진 캡슐은 예외).
- prefers-reduced-motion을 무시하고 전환을 넣지 않는다.


## 6. 컴포넌트
컴포넌트마다 크기·종류, 상태, 규칙을 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
**크기**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| 큰(예약하기) | 52px | 16px | 16px | 16px/700 |
| 중간(외곽선 줄·캡슐) | 44px | 16px | 12px / 9999px | 14px(/700) |
| 앱에서 보기 | 40px | 확인 필요 | 12px | 14px/700 |
| 작은 캡슐(알림받기) | 32px | 20px | 9999px | 12px/700 |
| 글자 버튼 | 25px | 0 | 0 | 14px/700 |

**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 주 버튼(예약하기) | 192×52, 여백 4px 16px, #4154ff 배경, #ffffff 16px/700, 테두리 없음, 모서리 16px | 객실 카드의 예약 |
| 파랑 외곽선(앱에서 보기) | 263×40, #ffffff 배경, #4154ff 14px/700, 1px #4154ff, 모서리 12px | 앱 유도 |
| 파랑 외곽선 캡슐(알림받기) | 99×32, 여백 4px 20px, #ffffff 배경, #4154ff 12px/700, 1px #4154ff, 9999px | 알림 신청 같은 작은 행동 |
| 흰 외곽선(전체보기 줄) | 335×44, 여백 4px 16px, #ffffff 배경, #1b1c1f 14px, 1px #dadbdf, 모서리 12px | 목록 아래 전체보기 |
| 검정 외곽선 캡슐(전체 사진) | 153×44, #ffffff 배경, 14px/700, 1px #1b1c1f, 9999px | 사진 갤러리 열기 |
| 글자 버튼(상세보기) | 높이 25, 배경·테두리 없음, #1b1c1f 14px/700, 모서리 0 | 카드 안 상세 보기 |

- 상태: 눌림·호버는 `hover:bg-interaction-neutral-presshover-weak1`, `active:` 접두로 #f2f3f7 배경을 깐다. 사진 위 버튼은 rgba(0,0,0,.6)로 진해진다. 비활성은 `aria-disabled:pointer-events-none` 규칙이 있고 비활성 색은 확인 필요. 로딩은 확인 필요.

**규칙** (관찰에서 정리)
- 파랑 채운 버튼은 예약하기 같은 주요 행동에만 쓰고, 전체보기 같은 이동에는 흰 외곽선 버튼을 쓴다.
- 예약하기는 객실 카드 오른쪽 아래에 둔다.
- 문구는 "[동사]하기" 꼴. 거절 버튼은 사용자 말투로 쓴다.
- 비활성은 `aria-disabled`로 표시한다(관찰한 CSS 규칙). 로딩 중에는 `aria-busy`(구현 권장).

### 6.2 입력창·선택 상자
| 종류 | 높이 | 모서리 | 테두리 | 글자 |
|---|---|---|---|---|
| 상단 검색창 | 44~48px | 9999px | 1.5px #4154ff(홈) | 입력 16px/700, 안내 14px |
| 날짜·인원 상자 | 58px | 16px | 1px #e9eaef | 값 18px/700 |
| 지역선택 상자(모바일) | 46px | 8px | 1px #1b1c1f | 확인 필요 |

- 상단 검색창: 높이 44~48px, 흰 배경, 1.5px #4154ff 테두리(홈), 모서리 9999px, 여백 4px 12px 4px 16px. 입력 글자 16px/700 #1b1c1f, 안내 글자 14px #6e6f73.
- 날짜·인원 선택 상자: 높이 58px, 1px #e9eaef, 모서리 16px, 좌우 20px. 값은 18px/700.
- 지역선택 상자(모바일): 높이 46px, 1px #1b1c1f, 모서리 8px, 왼쪽 24px.
- 상태: 기본만 봤다. 포커스·오류·비활성은 확인 필요. 오류 색은 danger(#e5000f, 연한 선 #f59ea4) 토큰이 있다.
- 규칙: 검색창 안내 글자는 #6e6f73. 입력창에 라벨을 연결한다(구현 권장).

### 6.3 칩·탭
- 필터 칩: 높이 42px, 흰 배경, 1px #dadbdf, 9999px, 좌우 16px, 글자 16px/400.
- 상단 칩 탭: 높이 32px, 최소 폭 44px, 좌우 12px, 9999px. 선택은 #1b1c1f 배경·흰 글자, 나머지는 투명. 새 소식은 5px 파란 점(#4154ff).
- 글자 탭(특가, 쿠폰·혜택 등): 선택 안 됨 16px/400 #6e6f73. 보이지 않는 가상 요소에 16px/700 글자를 미리 깔아 폭을 잡아 둔다. 선택되면 굵어질 때 폭이 흔들리지 않게 하려는 것으로 보인다. 선택 상태 값은 확인 필요.
- 규칙: 선택된 상단 칩은 파랑이 아니라 #1b1c1f로 칠한다. 새 소식은 5px 파란 점 하나. 선택된 탭에 `aria-selected="true"`(구현 권장).

### 6.4 카드·리스트
- 모바일 상품 카드: 사진(3:4, 모서리 8~12px, 둘레 .05 검정 선) → 이름 13px → 할인율(빨강 13px/400) + 가격(13px/700) + "원~"(11px/700).
- PC 객실 카드: 1px #e9eaef 테두리, 모서리 16px, 흰 배경. 이름 16px/700, 체크인 정보 14px, 정가 14px #6e6f73 취소선, "회원가" 14px/600 #4154ff, 가격 24px/700, 오른쪽 아래 예약하기 버튼.
- 상태: 기본만 봤다. 품절·비활성 카드는 확인 필요.
- 규칙: 카드 구분에 그림자를 쓰지 않고 1px #e9eaef 선을 쓴다. 가격 순서는 정가 취소선 → 회원가 → 가격.

### 6.5 상단 바·하단 탭 바
- 모바일 상단 바: 높이 52px, 흰 배경, 그림자 없음.
- 하단 탭 바: 확인 필요(웹 실측에서 보지 못했다).

### 6.6 바텀시트·모달
- 앱 유도 시트: 좌우 16px, 아래 20px 띄운 흰 상자, 모서리 24px, 위 여백 40px. 뒤 막은 rgba(0,0,0,.5)(bg-scrim).
- 모달: 확인 필요.
- 규칙: 시트는 화면 가장자리에 붙이지 않고 좌우 16px·아래 20px 띄운다. 열리면 포커스를 시트 안으로 옮긴다(구현 권장).

### 6.7 배지·토스트
- 배지: 캡슐(9999px). 공지 배지 #4154ff 10px, 연한 파랑 배지는 #f5f6ff 배경 + #b2baff 테두리, 아주 작은 상품 배지 8px/700.
- 토스트·스낵바: 확인 필요. 실측 중에 뜨지 않았다.

## 7. 패턴
반복되는 화면 해법을 적는다. 결제·빈 상태·오류 화면은 실측하지 않았다.

- 목록 → 상세: 서브홈 목록(모바일 가로 스크롤 카드 109px, 사진 3:4) → 숙소 상세(1024px에서 왼쪽 정보 840px, 객실 카드 사진 칸 + 478px 정보 칸, 오른쪽 아래 예약하기 버튼).
- 검색: 상단 캡슐 검색창(1.5px 파랑 테두리) + 날짜·인원 선택 상자(58px, 16px 모서리). 검색 결과 화면은 확인 필요.
- 가격 표시: 정가 취소선(#6e6f73) → 회원가(#4154ff) → 가격(굵게) 순, 모바일은 빨강 할인율 + 굵은 가격 + "원~".
- 바텀시트: 앱 유도처럼 화면 아래에서 16px·20px 띄운 24px 둥근 시트 + 50% 검정 막.
- 빈 상태·오류: 확인 필요.
- 폼·결제: 확인 필요.
- 로딩: 확인 필요.
- 앱 유도 시트의 거절 버튼은 사용자 말투로 쓴다(9장).

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #1b1c1f | #ffffff | 17.04:1 | 통과 |
| #6e6f73 | #ffffff | 5.02:1 | 통과 |
| #8b8d92 | #ffffff | 3.32:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #4154ff | 5.33:1 | 통과 |
| #e5000f | #ffffff | 4.84:1 | 통과 |
| #4154ff | #f5f6ff | 4.96:1 | 통과 |
| #cc4100 | #fef8f2 | 4.61:1 | 통과 |
| #ffffff | #1b1c1f | 17.04:1 | 통과 |

- 터치 영역: 예약하기 52px, 흰 외곽선·검정 캡슐 44px, 필터 칩 42px, 검색창 44~48px, 날짜·인원 상자 58px. 앱에서 보기 40px, 상단 칩 탭 32px(최소 폭 44px), 알림받기 32px, 글자 버튼 25px, 사진 위 원형 버튼 26px(PC 32px)은 44pt 기준보다 낮다.
- 최소 글자 크기: 8px(label-8, 아주 작은 상품 배지). 본문 정보는 11px 이상.

### 점검 목록
| 항목 | 현재 상태 |
|---|---|
| 키보드 포커스 | 포커스 표시는 확인 필요 |
| 스크린리더 | 비활성 `aria-disabled` 규칙(관찰). 사진 위 원형 버튼·아이콘 버튼 이름은 확인 필요, `aria-label`(구현 권장) |
| 글자 확대 | 루트 10px + rem 단계라 브라우저 글자 크기를 따른다(관찰). `-fixed`는 px 고정 |
| 움직임 줄이기 | prefers-reduced-motion 규칙 있음(관찰) |
| 대체 텍스트 | 숙소·공연 사진에 이름(구현 권장) |
| 색만으로 전달 | 할인은 빨강 + "%" 숫자, 정가는 취소선으로 함께 표시(관찰) |

- 메모: 비활성 버튼에 `aria-disabled` 규칙, 움직임 줄이기(prefers-reduced-motion) 규칙이 있다. 루트 글자 크기를 rem으로 두어 글자 크기 단계가 rem 기준이다(`-fixed` 변형은 px 고정). 포커스 표시는 확인 필요.

## 9. 글쓰기 톤
- 말투: 짧은 명사형 레이블과 해요체 안내를 섞는다.
- 버튼 문구 꼴: "[동사]하기" 꼴(예약하기, 알림받기). 거절 버튼은 사용자 말투로 쓴다: "오늘은 [대안]으로 볼게요" 꼴.
- 숫자·단위 표기: 혜택은 숫자를 앞세운다: [결제수단] 결제 시 최대 [금액]. 가격 뒤 "원~"으로 최저가임을 짧게 표시한다.
- 예시는 직접 관찰한 문장 구조만 적었다(원문 복사 금지).

## 10. Do & Don't
관찰 기반 문서의 규칙은 "이 서비스 화면에서 반복되는 규칙"을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 예약하기 버튼은 #4154ff 배경, 흰 16px/700 글자, 높이 52px, 모서리 16px로 만든다.
- 할인율은 #e5000f로, 정가는 #6e6f73 취소선으로 둔다.
- 카드·날짜 상자는 1px #e9eaef 테두리, 흰 버튼·필터 칩은 1px #dadbdf 테두리를 쓴다.
- 칩·배지·검색창·알림받기 버튼은 9999px 캡슐로 만든다.
- 사진에는 inset 0 0 0 1px rgba(0,0,0,.05) 선을 두른다.
- 선택된 상단 칩 탭은 #1b1c1f 배경 + 흰 글자로 칠한다.
- 간격은 2px 배수(4, 8, 12, 16, 20)에서 고른다.

### Don't
- 빨강 #e5000f를 예약하기 같은 행동 버튼에 쓰지 않는다.
- 카드 구분에 진한 그림자를 쓰지 않는다. 그림자는 최대 0 0 8px rgba(0,0,0,.1) 수준이다.
- 토큰 밖 회색(#6d6d6d 같은 값)을 새로 늘리지 않는다.
- 사진을 각지게 쓰지 않는다. 모바일 8~12px, 큰 배너 20~28px로 둥글린다.
- 글자 탭을 굵게 바꿀 때 폭이 흔들리게 두지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음. 웹 CSS에서 토큰 클래스(`text-*`, `bg-fill-*`, `border-line-*`, `typography-*`)와 `ds-pc`, `ds-pc-wide` 접두어만 확인했다.
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공개 자료 없음. github.com/yanolja의 공개 저장소 2개 중 디자인 시스템 저장소는 없다.
- 버전·변경 관리: 공개 자료 없음. CSS 주소에 빌드 해시가 들어 있어 배포 때마다 바뀐다.

## 12. AI에 넣을 때
```
놀(NOL, 야놀자) 스타일로 디자인해 줘.
- 주색: #4154ff (연한 배경 #f5f6ff, 연한 테두리 #b2baff)
- 할인·오류: #e5000f
- 글자: #1b1c1f 기본, #6e6f73 보조, #8b8d92 흐림
- 배경: #ffffff, 옅은 면 #f7f8fb, 선 #e9eaef / #dadbdf
- 글꼴: Pretendard, 크기 16/19, 14/17, 13/16, 굵기 400·600·700
- 모서리: 버튼·카드 12~16px, 칩·배지 9999px, 시트 24px
- 간격 단위: 2px 배수(4, 8, 12, 16, 20), 모바일 좌우 16~20px
- 버튼: 주 버튼 #4154ff 흰 글자 16px/700 높이 52, 모서리 16
- 분위기: 그림자 거의 없이 옅은 선과 둥근 사진. 파랑은 행동, 빨강은 할인에만
```

## 13. 참고 자료
- https://nol.yanolja.com/ (확인 2026-10-31, 홈 실측)
- https://nol.yanolja.com/sub-home/hotel?verticalCategory=LOCAL_ACCOMMODATION&verticalSubCategory=HOTEL (확인 2026-10-31, 목록 성격 서브홈 실측)
- https://nol.yanolja.com/stay/domestic/10066964 (확인 2026-10-31, 숙소 상세 실측)
- https://assets.yanolja.com/display-site/b8c98583d1b61e36b2ffb46bdc62769bdb70b104/_next/static/css/04b243d7dc1d04f9.css (확인 2026-10-31, 홈이 불러온 CSS 중 하나. 토큰 클래스 정의를 읽음. 빌드마다 주소가 바뀐다)
- https://yaimg.yanolja.com/joy/sunny/static/fonts/pretendard/pretendard-font-chunks.css (확인 2026-10-31, 글꼴)
- https://github.com/yanolja (확인 2026-10-31, 공개 저장소 2개 중 디자인 시스템 저장소 없음)

근거와 한계
- 색·글자 단계·모서리·모션 값은 홈이 불러온 CSS 파일 8개의 클래스 정의에서 읽었다. 실제 쓰임은 위 세 화면의 computed style로 확인했다.
- 실측값은 사이트가 바뀌면 달라질 수 있다. CSS 주소에 빌드 해시가 들어 있어 배포 때마다 바뀐다.
- 앱 화면은 보지 않았다. 다크 모드, 성공·정보 색, 토스트, 비활성 버튼 색은 확인하지 못했다.
- 놀, NOL, 야놀자 이름과 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
공개 패키지는 없다. 아래는 nol.yanolja.com이 불러온 CSS에서 관찰한 토큰 클래스 이름이다(관찰, 빌드마다 바뀔 수 있음). 표에 적은 클래스 외의 조합은 문법(역할 + 계열 + 세기)으로 미루어 쓴 것이므로 실제 존재 여부를 확인한다.

| DESIGN.md | 관찰한 CSS 클래스 |
|---|---|
| `colors.primary` (글자) | `text-text-primary-main` |
| `colors.surface-subtle` 등 옅은 면 | `bg-fill-neutral-weak` |
| `colors.border` | `border-line-neutral-weak2` |
| `colors.accent` (할인율) | `text-accent-medium` (값은 accent-main과 같음) |
| `colors.warning` / `colors.warning-soft` | `text-warning-main` / `fill-warning-weak` |
| `colors.danger` / `colors.danger-line-weak` | `text-·fill-·line-danger-main` / `line-danger-weak2` |
| `colors.pressed` | `hover:bg-interaction-neutral-presshover-weak1`, `active:` 접두 |
| `colors.scrim` | `bg-scrim` |
| `typography.subtitle-16` (굵게) | `typography-subtitle-16-bold` |
| 여러 줄·줄 자르기·px 고정 | `-multiline`, `-line-clamp-1/2`, `-fixed` 접미 |
| PC 규칙 | `ds-pc` 접두(1024px 이상), `ds-pc-wide` 접두(1320px 이상) |
| 간격·모서리 | `gap-2`, `py-4`, `px-6`, `gap-8`, `mb-10`, `rounded-12`, `px-16`, `px-20`, `pl-24`, `px-40` |
| 비활성 | `aria-disabled:pointer-events-none` |

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 없음. 공개 디자인 시스템 문서·저장소를 찾지 못했다(github.com/yanolja 공개 저장소 2개 중 디자인 시스템 없음).
- **화면에서 잰 값(관찰)**: 색 HEX 전체와 토큰 클래스 이름, 글자 단계 크기·행간·굵기, 모서리 4~28px·9999px, 그림자 3단계와 image-edge, 모션 길이·이징, 중단점, 좌우 여백, 버튼·입력·칩 크기. nol.yanolja.com 홈·숙소 서브홈·숙소 상세 computed style과 홈이 불러온 CSS 8개, 실측일 2026-10-31.
- **SylviaLab이 정리·권장한 것**: primitive/semantic 이름 나눔(semantic 이름 `text-primary`, `border`, `pressed` 등), 디자인 원칙 5개, 각 장의 규칙과 Don't, `(구현 권장)`이 붙은 접근성 항목, 부록 A의 짝짓기(문법으로 미룬 조합 포함).
