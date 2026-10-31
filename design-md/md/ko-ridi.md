---
version: "1.0"
name: "리디"
description: "색마다 11단계 이름 토큰과 황금비 책 표지 규칙, 전자잉크 단말용 대체 규칙까지 공개 저장소에 정리한, 파랑 #1F8CE6 하나로 가격·주요 버튼을 짚는 표지 중심 서점"
source:
  - "https://github.com/ridi/design-system (docs/_pages, 마지막 커밋 2022-04-14, MIT)"
  - "npm @ridi/colors 0.7.1 (hex.json)"
  - "npm @ridi/web-ui 0.8.0 (styles.ts: 글꼴 스택, 입력 상태, 표지 스타일)"
  - "npm @ridi/rsg 2.0.18 (rui-no-reset.css: 버튼·입력·체크박스)"
  - "https://ridibooks.com/ 메타 정보·문구 관찰 (2026-10-31)"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 색 이름은 @ridi/colors 공식 이름을 kebab-case로 옮겼다(dodgerBlue50 → dodger-blue-50).
# primitive(단계) → semantic(역할) 두 층. 화면에서는 semantic을 먼저 쓴다.
# ─────────────────────────────────────────────
colors:
  # ── Primitive: dodgerBlue (대표 파랑, 11단계 모두 공식) ──
  dodger-blue-5: "#ebf6ff"
  dodger-blue-10: "#cce8ff"    # 아웃라인 버튼 눌림, 체크박스 포커스 링
  dodger-blue-20: "#99d1ff"
  dodger-blue-30: "#66baff"
  dodger-blue-40: "#339cf2"
  dodger-blue-50: "#1f8ce6"    # 대표색. 주요 버튼, 가격 글자
  dodger-blue-60: "#0077d9"    # 버튼 테두리, 눌림·호버
  dodger-blue-70: "#0062b3"
  dodger-blue-80: "#005499"
  dodger-blue-90: "#004680"
  dodger-blue-100: "#003866"

  # ── Primitive: slateGray (글자·선) ──
  slate-gray-5: "#f2f4f5"
  slate-gray-10: "#e6e8eb"
  slate-gray-20: "#d1d5d9"
  slate-gray-30: "#b8bfc4"
  slate-gray-40: "#9ea7ad"
  slate-gray-50: "#808991"
  slate-gray-60: "#636c73"
  slate-gray-70: "#525a61"
  slate-gray-80: "#40474d"
  slate-gray-90: "#303538"
  slate-gray-100: "#212529"

  # ── Primitive: lightSteelBlue (회색 면) · blueGray (보조) · gray (PAPER) ──
  light-steel-blue-5: "#f7fafc"
  light-steel-blue-10: "#f0f5fa"
  light-steel-blue-20: "#e3edf7"
  light-steel-blue-30: "#d6e3f0"
  blue-gray-5: "#f2f6fc"
  blue-gray-50: "#475161"
  blue-gray-100: "#0f1724"
  gray-100: "#000000"          # PAPER 글자
  white: "#ffffff"

  # ── Primitive: 상태 계열 (공개된 단계만) ──
  red-5: "#fce8e6"
  red-10: "#fabab3"
  red-40: "#eb5847"            # 할인율
  red-50: "#e64938"            # 오류
  red-100: "#942114"
  orange-5: "#ffeee6"
  orange-10: "#ffccb3"
  orange-50: "#fa5300"         # 보조 포인트·별점(경고 아님)
  orange-100: "#802b00"
  green-5: "#f1faeb"
  green-10: "#ddf2cc"
  green-50: "#4fb303"
  green-100: "#214d00"
  brown-5: "#fff9f0"
  brown-10: "#f5e8d4"
  brown-50: "#b0874a"
  brown-pressed: "#a37a3d"     # 갈색 버튼 테두리·눌림(단계 이름은 문서에 없음)
  brown-100: "#5c3f14"

  # ── Semantic (SylviaLab 역할 이름) ──
  primary: "{colors.dodger-blue-50}"
  primary-pressed: "{colors.dodger-blue-60}"
  primary-soft: "{colors.dodger-blue-10}"
  primary-faint: "{colors.dodger-blue-5}"
  on-primary: "{colors.white}"
  surface: "{colors.white}"
  surface-subtle: "{colors.light-steel-blue-5}"
  surface-disabled: "{colors.slate-gray-5}"
  surface-pressed: "{colors.slate-gray-10}"
  border: "{colors.slate-gray-20}"
  border-hover: "{colors.slate-gray-50}"
  text-strong: "{colors.slate-gray-100}"
  text-body: "{colors.slate-gray-90}"
  text-label: "{colors.slate-gray-60}"
  text-secondary: "{colors.slate-gray-50}"
  text-tertiary: "{colors.slate-gray-40}"
  text-disabled: "{colors.slate-gray-20}"
  text-price: "{colors.dodger-blue-50}"
  text-discount: "{colors.red-40}"
  success: "{colors.green-50}"
  point: "{colors.orange-50}"
  error: "{colors.red-50}"
  info: "{colors.brown-50}"
  info-pressed: "{colors.brown-pressed}"
  paper-text: "{colors.gray-100}"

typography:
  font-family: "Helvetica Neue, 'Apple SD Gothic Neo', arial, '나눔고딕', 'Nanum Gothic', '돋움', Dotum, Tahoma, Geneva, sans-serif"
  font-weight-regular: 400
  font-weight-bold: 700        # 제목·링크·가격에만
  letter-spacing-base: "-0.3px"
  letter-spacing-tight: "-0.7px"
  letter-spacing-component: "-0.03em"   # 버튼·리스트
  display-1:   { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "30px", fontWeight: 700, lineHeight: 1.3 }
  display-2:   { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "24px", fontWeight: 700, lineHeight: 1.3 }
  heading-1:   { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "20px", fontWeight: 700, lineHeight: 1.3 }
  heading-2:   { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "18px", fontWeight: 700, lineHeight: 1.4 }   # 리스트 Subtitle
  heading-3:   { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "16px", fontWeight: 700, lineHeight: 1.3 }   # 50px 버튼 글자
  paragraph-1: { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.4 }   # 본문, 리스트 Body
  paragraph-2: { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.4 }   # Caption, 40px 버튼 글자
  paragraph-3: { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "13px", fontWeight: 400, lineHeight: 1.4 }   # Overline
  button:      { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "13px", fontWeight: 700 }                    # 기본 버튼(코드)
  caption:     { fontFamily: "Helvetica Neue, 'Apple SD Gothic Neo', arial, sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: 1.4 }   # 저자명. 문서 범위 11~12px
  # 앱 단계(Android dp / iOS pt)
  app-headline:    { fontSize: "18px", iosFontSize: "19px" }
  app-title:       { fontSize: "16px" }      # 16~17
  app-body:        { fontSize: "14px" }      # 14~15
  app-sub-body:    { fontSize: "13px" }
  app-caption:     { fontSize: "12px" }
  app-sub-caption: { fontSize: "10px" }      # 10~11

rounded:
  control: "3px"   # 셀렉트, 체크박스
  button: "4px"    # 버튼, 업데이트 배지(오른쪽 아래만)
  full: "50%"      # 표지 선택 체크 원

spacing:
  s4: "4px"   # 아이콘-라벨(40px 이하 버튼)
  s5: "5px"   # 25·21px 버튼 묶음
  s6: "6px"   # 30px 버튼 묶음, 50px 버튼 아이콘-라벨
  s8: "8px"   # 50·40px 버튼 묶음
  s12: "12px"
  s16: "16px"

size:
  button-xlarge: "50px"
  button-large: "40px"
  button-medium: "30px"
  button-small: "25px"   # 리스트 행 안 버튼
  button-xsmall: "21px"
  badge-adult: "20px"
  badge-update-width: "24px"

thumbnail:
  widths: "40~50px | 60~70px | 80~120px | 150·200px"
  max-height: "width × 1.618 − 10px"   # 코드에서는 가로의 162%
  border: "1px solid rgba(0,0,0,0.1)"
  side-shade: "좌우 끝 rgba(0,0,0,0.2) → 5%·95% 지점 투명"
  series-scale: 0.86

elevation:
  button: "0 1px 1px 0 rgba(31,140,230,0.3)"   # 버튼색 30%. 파랑 예시
  input-focus: "0 0 4px rgba(31,140,230,0.1)"

focus:
  input: "border {colors.primary} + {elevation.input-focus}"
  checkbox-ring: "0 0 0 3px {colors.primary-soft}"

motion:
  button: "200ms cubic-bezier(0.23, 1, 0.32, 1)"   # easeOutQuint
  popup: "400ms, 나옴 ease-out /들어감 ease-in"
  toast: "300ms, 나옴 ease-out /들어감 ease-in"
  mobile-banner: "140ms easeOutExpo"
  checkbox: "0.3s"
  button-color: "0.2s"
  rule: "linear 금지, 100ms 이하·500ms 이상 피함, PAPER는 모션 없음"

components:
  button-xlarge: { height: "{size.button-xlarge}", fontSize: "16px", iconSize: "18px", minPaddingX: "16px", iconGap: "6px", groupGap: "{spacing.s8}" }
  button-large:  { height: "{size.button-large}",  fontSize: "14px", iconSize: "16px", minPaddingX: "12px", iconGap: "4px", groupGap: "{spacing.s8}" }
  button-medium: { height: "{size.button-medium}", fontSize: "13px", iconSize: "14px", minPaddingX: "8px",  iconGap: "4px", groupGap: "{spacing.s6}" }
  button-small:  { height: "{size.button-small}",  fontSize: "11px", iconSize: "13px", minPaddingX: "6px",  iconGap: "4px", groupGap: "{spacing.s5}" }
  button-xsmall: { height: "{size.button-xsmall}", fontSize: "11px", iconSize: "11px", minPaddingX: "5px",  iconGap: "4px", groupGap: "{spacing.s5}" }
  button-blue:          { backgroundColor: "{colors.primary}", borderColor: "{colors.primary-pressed}", textColor: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.button}", shadow: "{elevation.button}" }
  button-blue-pressed:  { backgroundColor: "{colors.primary-pressed}" }
  button-blue-outline:  { backgroundColor: "{colors.surface}", borderColor: "{colors.primary}", textColor: "{colors.primary}", rounded: "{rounded.button}" }
  button-blue-outline-pressed: { backgroundColor: "{colors.primary-soft}" }
  button-gray:          { backgroundColor: "{colors.slate-gray-50}", borderColor: "{colors.slate-gray-60}", textColor: "{colors.on-primary}", rounded: "{rounded.button}" }
  button-gray-pressed:  { backgroundColor: "{colors.slate-gray-60}" }
  button-gray-outline:  { backgroundColor: "{colors.surface}", borderColor: "{colors.border}", textColor: "{colors.text-secondary}", rounded: "{rounded.button}" }
  button-gray-outline-pressed: { backgroundColor: "{colors.surface-pressed}" }
  button-brown:         { backgroundColor: "{colors.info}", borderColor: "{colors.info-pressed}", textColor: "{colors.on-primary}", rounded: "{rounded.button}" }
  button-brown-pressed: { backgroundColor: "{colors.info-pressed}" }
  button-disabled:      { opacity: 0.5 }
  input:          { padding: "0.6em", backgroundColor: "{colors.surface}", borderColor: "{colors.border}" }
  input-hover:    { borderColor: "{colors.border-hover}" }
  input-focus:    { borderColor: "{colors.primary}", shadow: "{elevation.input-focus}" }
  input-disabled: { backgroundColor: "{colors.surface-disabled}", borderColor: "{colors.border}", textColor: "{colors.text-disabled}" }
  select:         { padding: "0.6em", paddingRight: "1.7em", rounded: "{rounded.control}" }
  checkbox:       { size: "1.38em", rounded: "{rounded.control}", labelColor: "{colors.text-label}" }
  checkbox-checked: { backgroundColor: "{colors.primary}", borderColor: "{colors.primary-pressed}" }
  list-row-button: { height: "{size.button-small}" }
---

# 리디 디자인 시스템

> 근거: 공개 문서 기반 (리디 공식 오픈소스 ridi/design-system 저장소 문서·코드, npm @ridi/colors 0.7.1 · @ridi/web-ui 0.8.0 · @ridi/rsg 2.0.18) + 일부 관찰 (실측일 2026-10-31, WebFetch로 ridibooks.com 메타 정보와 화면 문구만 확인. 이 작업 환경에서는 브라우저·Playwright로 사이트를 열 수 없어 computed style은 재지 못함)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 어긋나면 YAML 값을 따른다.

## 1. 개요와 원칙
- 서비스 성격: 전자책·웹툰·웹소설 서점과 뷰어. 웹 서점(ridibooks.com), 모바일 앱, 전자책 단말기(PAPER), 구독 서비스(리디셀렉트)를 함께 운영한다.
- 디자인 인상 한 줄: 흰 바탕에 푸른 회색 글자, 파란색 하나(#1F8CE6)로 가격·주요 버튼을 짚는, 책 표지가 주인공인 차분한 서점 화면.
- 공식 시스템 이름: RIDI Design System (저장소 ridi/design-system, MIT 라이선스)
- 기준 시점 주의: 공개 저장소의 마지막 커밋은 2022-04-14이고, 색 패키지는 2019년, 컴포넌트 패키지는 2020년 배포본이다. 현재 사이트는 이후 바뀌었을 수 있다. 실제로 2026-10-31 사이트 메타 정보의 타일 색은 #1E9EFF로, 문서의 대표 파랑 #1F8CE6과 다르다.
- 디자인 원칙(공식, ridi/design-system principles 문서). 공통 원칙 네 가지이며, 독창성보다 관례를 앞세운다.
  1. 보편성
  2. 기본에 충실
  3. 꼭 필요한 최소한
  4. 일관성
- 톤: 장식 없이 차분하게. 책 표지가 주인공이고 화면은 그 뒤로 물러난다.

### 특장점
- 색을 이름 있는 11단계로 관리한다 — 색마다 5·10·20…100 단계를 두고(dodgerBlue5 #EBF6FF ~ dodgerBlue100 #003866), 대화할 때 HEX 대신 `dodgerBlue50` 같은 변수 이름을 쓰라고 정한다. @ridi/colors 0.7.1로 hex.json까지 배포한다.
- 책 표지 규칙이 숫자로 정해져 있다 — 표지 가로 기준을 40~50 / 60~70 / 80~120 / 150·200px로 나누고, 최대 높이는 가로 × 1.618 − 10px(황금비), 모든 표지에 1px rgba(0,0,0,0.1) 테두리와 양옆 그늘 그라데이션을 준다.
- 전자잉크 단말용 대체 규칙이 따로 있다 — PAPER에서는 파란 버튼 대신 검정 버튼, 글자는 gray100 #000000, 모션은 잔상 때문에 쓰지 않는다.
- 버튼 크기를 다섯 높이로 표준화했다 — 50/40/30/25/21px마다 아이콘·글자 크기, 최소 좌우 패딩, 아이콘-라벨 간격, 묶음 간격(8/6/5px)까지 정해 둔다.
- 글쓰기 표기 규칙이 세세하다 — 날짜 `YYYY.MM.DD.`(끝 마침표), 요일 `(금)`, 범위 `12:50~14:00`, 용량은 십진 단위(KB, MB), 확장자 `.pdf`/`PDF` 구분까지 문서로 둔다.

### 배울 점
- 색 팔레트를 팀이 함께 쓸 때 리디처럼 색마다 숫자 단계 이름(dodgerBlue50)을 붙이고, 말할 때도 HEX 대신 이름을 쓰게 한다.
- 이미지 비율이 제각각인 목록(책·상품 표지)을 둘 때 리디처럼 가로만 맞추고 최대 높이를 가로 × 1.618 − 10px로 잘라 줄을 맞춘다.
- 특수 기기(전자잉크 등)를 지원할 때 색·모션 대체 규칙(파랑 → 검정, 모션 없음)을 별도 절로 묶어 둔다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 공식 단계 이름(`dodger-blue-50`, `slate-gray-90`)이나 역할 이름(`primary`, `text-body`)으로만 쓴다. 단계 사이 값(예: 55단계)을 만들지 않는다.
- 화면 코드에서는 역할 이름을 먼저 쓴다. 글자는 slateGray 계열, 회색 면은 lightSteelBlue 계열이다.
- 파랑 `primary`는 주요 버튼·가격·대표 영역에만 쓴다. 굵기 700도 제목·링크·가격에만 쓴다.
- 버튼은 50/40/30/25/21px 다섯 높이 중에서 고른다. 높이를 정하면 글자·아이콘·패딩·묶음 간격이 따라온다(YAML `components.button-*`).
- PAPER(전자잉크)용 화면이면 파랑을 검정으로, 모션을 없음으로 바꾼다. 판단이 어려우면 관례적이고 장식이 적은 쪽(공식 원칙 "기본에 충실")을 고른다.

## 2. 색상
토큰 이름은 리디 공식 이름이다(@ridi/colors). 괄호 안 역할 이름은 SylviaLab이 붙였다.

### 색 체계
리디 색은 **primitive(색 이름 + 단계) → semantic(역할)** 두 층으로 쓴다. 공식 자료는 primitive만 배포하고, 역할 이름은 문서 규칙을 바탕으로 SylviaLab이 붙였다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| Primitive(공식) | `dodgerBlue50`, `slateGray90`, `lightSteelBlue5` | @ridi/colors hex.json. 디자인 전달·대화도 이 이름으로 한다(공식 규칙) |
| Semantic(정리) | `primary`, `text-body`, `surface-subtle`, `border` | 화면과 컴포넌트 코드 |
| 단계 숫자 | 5 · 10 · 20 … 100 | 숫자가 클수록 진하다. 5·10은 면, 50은 대표, 60은 눌림, 90·100은 글자 |

- 색 계열마다 맡은 일이 있다: dodgerBlue = 행동·가격, slateGray = 글자·선, lightSteelBlue = 회색 면, gray = PAPER 전용, blueGray = slateGray와 구분이 필요할 때 보조.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| dodgerBlue50 (primary) | #1F8CE6 | 앱 아이콘, 서점 상단 내비게이션, 주요 버튼, 가격 글자 |
| dodgerBlue60 | #0077D9 | 파란 버튼 테두리, 눌림·호버 배경, 리디셀렉트 표기 글자 |
| dodgerBlue10 | #CCE8FF | 파란 아웃라인 버튼 눌림 배경, 체크박스 포커스 링 |
| dodgerBlue5 | #EBF6FF | 가장 옅은 파란 면 |
| msapplication-TileColor (현재 사이트) | #1E9EFF | 2026-10-31 ridibooks.com 메타 값. 문서 팔레트에는 없는 값 |

- dodgerBlue 전체 단계: 5 #EBF6FF · 10 #CCE8FF · 20 #99D1FF · 30 #66BAFF · 40 #339CF2 · 50 #1F8CE6 · 60 #0077D9 · 70 #0062B3 · 80 #005499 · 90 #004680 · 100 #003866
- scubablue50: 리디셀렉트 대표색. hwb(188, 13%, 19%)로 정의돼 있으나 배포된 hex.json에는 없음. HEX 확인 필요.

### 바탕·선
글자는 slateGray, 회색 면 배경은 lightSteelBlue를 쓴다. gray는 주로 PAPER용이다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| background | #ffffff | 기본 바탕. 사이트 theme-color도 #ffffff |
| slateGray5 | #F2F4F5 | 비활성 입력창 배경 |
| slateGray10 | #E6E8EB | 회색 아웃라인 버튼 눌림, 표지 로딩 배경 |
| slateGray20 | #D1D5D9 | 입력창·셀렉트·체크박스 기본 테두리, 비활성 글자 |
| slateGray30 | #B8BFC4 | 옅은 구분 |
| lightSteelBlue5 | #F7FAFC | 흰 바탕과 구분할 면 |
| lightSteelBlue10 | #F0F5FA | 면 |
| lightSteelBlue20 | #E3EDF7 | 면 |
| lightSteelBlue30 | #D6E3F0 | 면 |
| blueGray5 | #F2F6FC | slateGray와 구분이 필요할 때 보조 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| slateGray100 | #212529 | 가장 진한 글자(책 제목) |
| slateGray90 | #303538 | 본문(리스트 Subtitle·Body) |
| slateGray80 | #40474D | 진한 글자 |
| slateGray70 | #525A61 | 진한 보조 글자 |
| slateGray60 | #636C73 | 회색 버튼 테두리·눌림 배경, 체크박스 라벨 |
| slateGray50 | #808991 | 보조 글자(저자명, Subheader, Caption), 회색 버튼 배경, 입력창 호버 테두리 |
| slateGray40 | #9EA7AD | 리스트 Overline 글자, 비활성 셀렉트 글자 |
| blueGray50 | #475161 | 보조 진한 회색 |
| blueGray100 | #0F1724 | 가장 진한 보조 회색 |
| gray100 | #000000 | PAPER 글자(가독성 우선) |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (green50) | #4FB303 | 확인, 성공 메시지 |
| warning (orange50) | #FA5300 | 보조 포인트, 별점. 문서에서 orange는 경고가 아니라 보조 포인트로 정의됨 |
| error (red50) | #E64938 | 오류, 경고, 실패 |
| discount (red40) | #EB5847 | 할인율 글자 |
| info (brown50) | #B0874A | 안내 메시지, 갈색 버튼 |

- 각 색의 5·10·100 단계: red #FCE8E6 / #FABAB3 / #942114, orange #FFEEE6 / #FFCCB3 / #802B00, green #F1FAEB / #DDF2CC / #214D00, brown #FFF9F0 / #F5E8D4 / #5C3F14.

### 서비스 보조색
| 토큰 | HEX | 쓰임 |
|---|---|---|
| hello | #00A16E | 서비스 구분색(용도 설명 없음) |
| comic | #D1914D | 만화 구분색 |
| fanmu | #9B82BD | 서비스 구분색 |
| lemon1 | #FFDE24 | 강조 노랑 |
| highlighterYellow | #E7D97C | 뷰어 형광펜 |
| highlighterGreen | #BED370 | 뷰어 형광펜 |
| highlighterPurple | #BE93CC | 뷰어 형광펜 |
| highlighterBlue | #7CB9C8 | 뷰어 형광펜 |
| highlighterPink | #D6959B | 뷰어 형광펜 |

### 역할별 색
- 파랑 `primary`(dodgerBlue50): 주요 버튼 채움, 가격 글자(강조 Body 15px 700), 서점 상단 대표 영역, 체크박스 선택.
  - 테두리·눌림·호버는 `primary-pressed`(dodgerBlue60), 아웃라인 버튼 눌림과 포커스 링은 `primary-soft`(dodgerBlue10).
- 회색 버튼: 면 slateGray50, 테두리·눌림 slateGray60. 회색 아웃라인 버튼은 테두리 slateGray20, 글자 slateGray50, 눌림 slateGray10.
- 갈색 `info`(brown50): 안내 메시지와 갈색 버튼. 테두리·눌림은 #A37A3D.
- 글자 다섯 층: 책 제목 slateGray100 → 본문 slateGray90 → 라벨 slateGray60 → 보조 slateGray50 → Overline slateGray40. 비활성 글자는 slateGray20.
- 상태: 성공 green50, 오류·경고 red50, 할인율 red40, 보조 포인트·별점 orange50. 상태 박스의 "배경/선/글자" 조합 규칙은 공개 문서에 없다. 확인 필요(5·10 단계를 면으로 쓰는 쓰임은 문서에 없으므로 지어내지 않는다).
- 서비스 보조색·형광펜: 서비스 구분과 뷰어 형광펜 전용. 일반 UI 상태색으로 쓰지 않는다.

### 화면 모드
- 기본(웹·앱): 위 표의 light 값.
- PAPER(전자잉크 단말): 별도 규칙이 있다(공식). 파란 버튼 → 검정 버튼, 글자는 gray100(#000000), 같은 페이지 글자에 slateGray와 gray를 섞지 않는다, 모션 없음(잔상).
- 다크 모드: 공개 자료에 다크 모드 토큰이 없다. 확인 필요.

### 색 사용 규칙
- dodgerBlue50(#1F8CE6)은 주요 버튼, 가격 글자, 상단 대표 영역에 쓴다. 눌림·호버는 dodgerBlue60(#0077D9).
- 글자는 slateGray, 회색 면은 lightSteelBlue를 쓴다. 같은 페이지 글자에 slateGray와 gray를 섞지 않는다(공식 규칙). gray는 PAPER용이다.
- orange(#FA5300)는 경고가 아니라 보조 포인트·별점에 쓴다. 오류·경고는 red50(#E64938)이다(공식 정의).
- 할인율 글자는 red40(#EB5847)이다.
- 대화·디자인 전달 때는 HEX 대신 `dodgerBlue50` 같은 변수 이름을 쓴다(공식 규칙).
- PAPER(전자잉크)에서는 파란 버튼 대신 검정 버튼을 쓴다.

### Don't
- orange50(#FA5300)을 경고·오류 표시에 쓰지 않는다. 오류는 red50(#E64938)이다.
- 같은 페이지 글자에 slateGray와 gray를 섞지 않는다.
- 회색 면 배경에 slateGray 단계를 쓰지 않는다. 회색 면은 lightSteelBlue다.
- 디자인 전달 문서에 HEX만 적지 않는다. `dodgerBlue50`처럼 이름을 함께 쓴다.
- 현재 사이트 값 #1E9EFF를 문서 팔레트 값처럼 쓰지 않는다. 출처가 다르다.

## 3. 타이포그래피
- 글꼴: Apple SD Gothic Neo(한글)와 Helvetica Neue(영문·숫자), 가격·숫자 강조 Museo Sans(웹 서점 문서 기준). 리디셀렉트·PAPER 서점은 Noto Sans.
- Ridi Sans: 페이퍼샵용 자체 웹폰트. 한글 Noto Sans + 영문·숫자 Museo Sans 조합.
- 대체 글꼴: `Helvetica Neue, 'Apple SD Gothic Neo', arial, '나눔고딕', 'Nanum Gothic', '돋움', Dotum, Tahoma, Geneva, sans-serif`
- 앱: Android는 한글 Noto Sans·영문 Roboto, iOS는 한글 Apple SD Gothic Neo·영문 Avenir.
- 리디바탕: 리디가 배포한 본문용 명조 서체. 뷰어 읽기용(npm @kfonts/ridi-batang 등으로 재배포됨. 라이선스는 리디 배포처 확인 필요).
- 굵기: regular(400)와 bold(700) 두 가지.
- 행간: 기본 1.3em, 문단은 1.4~1.6 권장. 리스트·컴포넌트 코드는 1.4em.
- 자간: 기본 -0.3px, 좁은 곳은 -0.7px. 컴포넌트 코드는 -0.03em(버튼·리스트), -0.4px(web-ui 리셋).

### 위계와 사용처
웹 크기 단계(문서, 단위 px = 표의 pt)

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| Display 1 | 30 | 700 | 1.3 | 큰 제목 |
| Display 2 | 24 | 700 | 1.3 | 제목 |
| Heading 1 | 20 | 700 | 1.3 | 섹션 제목 |
| Heading 2 | 18 | 700 | 1.4em(리스트) | 리스트 Subtitle(#303538) |
| Heading 3 | 16 | 700 | 1.3 | 작은 제목, 50px 버튼 글자 |
| Paragraph 1 | 15 | 400 | 1.4~1.6 | 본문, 리스트 Body, 책 제목(가로형, 700, 1.31em) |
| Paragraph 2 | 14 | 400 | 1.4~1.6 | 리스트 Caption(#808991), 40px 버튼 글자 |
| Paragraph 3 | 13 | 400 | 1.4~1.6 | Overline(#9EA7AD), 세로형 책 제목, 기본 버튼 글자(700) |
| Caption | 12 | 400 | 1.4em | 저자명(12px #808991), 작은 버튼(11px). 문서 범위 11~12px |

- 문서는 단계별 굵기를 따로 정하지 않고 "제목·링크·가격만 bold"라고만 적는다. Display·Heading 1·Heading 3의 700은 그 규칙을 적용한 것이다.

앱 크기 단계(문서)

| 단계 | Android(dp) | iOS(pt) | 쓰임 |
|---|---|---|---|
| Big headline | 20 | - | 앱 바 제목 |
| Headline | 18 | 19 | 튜토리얼 제목, 독서노트 책 제목 |
| Title | 16~17 | 16~17 | 앱 바 버튼, 큰 버튼 |
| Body | 14~15 | 14~15 | 목록 제목, 토스트(Android) |
| Sub body | 13 | 13 | 튜토리얼 본문, 토스트(iOS) |
| Caption | 12 | 12 | 저자명, 작은 버튼 |
| Sub caption | 10~11 | 10~11 | 대여기간, 탭 바 아이콘 아래 글자 |

- Android 행간은 lineSpacingMultiplier 1.15를 주로 쓴다.

리스트 글자 묶음(코드, 자간 -0.03em, 행간 1.4em)

| 이름 | 크기·굵기 | 색 |
|---|---|---|
| Subtitle | 18px 700 | slateGray90 |
| Subheader | 15px 400 | slateGray50 |
| Body | 15px 400 | slateGray90 |
| 강조 Body | 15px 700 | dodgerBlue50 |
| Caption | 14px 400 | slateGray50 |
| Overline | 13px 400 | slateGray40 |

### 규칙
- bold(700)는 제목, 텍스트 링크, 가격에만 쓴다(공식 규칙). 나머지는 400.
- 리스트 글자는 자간 -0.03em, 행간 1.4em으로 맞춘다.
- 강조 Body는 15px 700 #1F8CE6이다(가격 등).
- 숫자·비밀번호 입력은 자간을 넓힌다.
- 뷰어 본문에는 리디바탕(명조)을 쓴다.
- 버튼 글자는 버튼 높이를 따른다: 50px 16px, 40px 14px, 30px 13px, 25·21px 11px.

### Don't
- 굵기를 400·700 외로 쓰지 않는다(500·600 없음).
- 본문 문장 전체를 700으로 쓰지 않는다. 700은 제목·링크·가격만.
- 가격을 회색 글자로 쓰지 않는다. 가격은 강조 Body(15px 700 dodgerBlue50)다.
- 서점 UI 글자에 리디바탕(명조)을 쓰지 않는다. 명조는 뷰어 본문용이다.
- 자간을 양수로 벌리지 않는다(숫자·비밀번호 입력만 예외).

## 4. 레이아웃·간격
- 간격 단계(pt): 4, 5, 6, 8, 12, 16 (컴포넌트 코드에서 확인된 값, px)
- 기본 단위: 공식 간격 토큰은 없음(확인 필요). 컴포넌트 수치는 4px 배수와 홀수 값(5, 6px)이 섞여 있다.

### 그리드와 중단점
| 구분 | 값 |
|---|---|
| 기준 화면 | 확인 필요 |
| 화면 좌우 여백(모바일/데스크톱) | 확인 필요 |
| 그리드·최대 폭 | 확인 필요 |
| 모바일/데스크톱 구분이 문서에 나오는 곳 | 알림 박스 접힘 높이, 탭 배치 |

### 컴포넌트 간격
| 구간 | 값 |
|---|---|
| 버튼 묶음 간격 | 50·40px 버튼 8px, 30px 6px, 25·21px 5px |
| 아이콘과 라벨 사이 | 50px 버튼 6px, 그 외 4px |
| 성인 배지 위치 | 표지 오른쪽 위에서 2px |
| 입력창 안쪽 | 0.6em(셀렉트 오른쪽 1.7em) |

### 접힘 기준 높이
| 내용 | 모바일 | 데스크톱 |
|---|---|---|
| 알림 박스 글 | 160px 넘으면 `더보기` | 180px 넘으면 `더보기` |
| 알림 박스 이미지 | 320px | 600px |

### 간격 적용 규칙
- 버튼 사이 간격은 버튼 높이에 따라 8 → 6 → 5px로 줄인다.
- 아이콘-라벨 간격은 50px 버튼만 6px, 나머지는 4px.
- 알림 박스는 위 높이를 넘으면 접고 `더보기`를 붙인다.
- 화면 세로 리듬(헤더→제목, 구획 사이)은 공개 자료에 없다. 확인 필요.

### Don't
- 버튼 높이와 맞지 않는 묶음 간격을 쓰지 않는다(예: 25px 버튼 사이 8px).
- 아이콘-라벨 간격을 버튼마다 따로 정하지 않는다(6px 또는 4px 두 값).
- 알림 박스 글을 모바일 160px·데스크톱 180px 넘게 펼친 채로 두지 않는다.
- 4·5·6·8·12·16px 밖의 컴포넌트 간격을 새로 만들지 않는다(화면 여백은 확인 필요).

## 5. 모서리·고도·모션
### 모서리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius.control | 3px | 셀렉트 박스, 체크박스 |
| radius.button | 4px | 기본 버튼 |
| radius.badge | 4px | 표지 위 업데이트 배지(오른쪽 아래 모서리만) |
| radius.full | 50% | 표지 선택 체크 원 |

- 모서리는 3~4px 두 값뿐이다. 둥근 알약 버튼은 공식 자료에 없다.

### 테두리
- border.thumbnail: 1px solid rgba(0,0,0,0.1) — 모든 책 표지
- border.input: 1px solid #D1D5D9 — 입력창·셀렉트 기본
- gradient.thumbnail: 좌우 끝 rgba(0,0,0,0.2) → 5%·95% 지점 투명 — 표지 양옆 그늘(책등 느낌)

### 고도(층)
- shadow.button: 0 1px 1px 0 (버튼색 30%) — 버튼. 예: 파란 버튼 rgba(31,140,230,0.3)
- shadow.focus: 0 0 4px rgba(31,140,230,0.1) — 입력창 포커스
- ring.focus: 0 0 0 3px #CCE8FF — 체크박스 포커스
- 그림자는 버튼 아래 1px과 포커스 번짐뿐이다. 카드·모달 그림자 값은 공개 자료에 없다(확인 필요).
- 버튼 그림자 색은 버튼 면 색의 30%다. 버튼 색이 바뀌면 그림자 색도 따라 바뀐다.

### 모션
- linear 금지. 100ms 이하는 너무 짧고 500ms 이상은 느리다고 본다. 이동 거리와 크기가 클수록 길게(공식 원칙). PAPER(전자잉크)에서는 잔상 때문에 모션을 쓰지 않는다.

| 대상 | 이징 | 길이 |
|---|---|---|
| 버튼 | cubic-bezier(0.23, 1, 0.32, 1) (easeOutQuint) | 200ms |
| 팝업 | 나옴 ease-out / 들어감 ease-in | 400ms |
| 토스트 | 나옴 ease-out / 들어감 ease-in | 300ms |
| 모바일 큰 배너 | easeOutExpo | 140ms |
| 체크박스 상태 | - | 0.3s |

### Don't
- 버튼·입력창 모서리를 4px보다 크게 둥글리지 않는다.
- 책 표지에서 1px rgba(0,0,0,0.1) 테두리를 빼지 않는다(흰 표지가 바탕에 묻힌다).
- 모션에 linear 이징을 쓰지 않는다.
- PAPER 화면에 전환 모션을 넣지 않는다.

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 보지 못한 상태는 `확인 필요`. 접근성 메모 중 공식 자료에 근거가 없는 것은 `(구현 권장)`을 달았다.

### 6.1 버튼
**크기(문서)**

| 높이 | 아이콘 | 글자 | 최소 좌우 패딩 | 아이콘-라벨 간격 | 묶음 간격 |
|---|---|---|---|---|---|
| 50px | 18px | 16px | 16px | 6px | 8px |
| 40px | 16px | 14px | 12px | 4px | 8px |
| 30px | 14px | 13px | 8px | 4px | 6px |
| 25px | 13px | 11px | 6px | 4px | 5px |
| 21px | 11px | 11px | 5px | 4px | 5px |

- 공통(코드): 글자 13px 700, 모서리 4px, 테두리 1px, 흰 글자, 그림자 0 1px 1px.

**종류**

| 종류 | 모양(면 / 테두리 / 글자, 눌림·호버) | 쓰는 곳 |
|---|---|---|
| 파랑 | #1F8CE6 / #0077D9 / 흰 글자, 눌림·호버 #0077D9 | 주요 행동 |
| 흰색 | 확인 필요(색 값 없음) | 보조 행동 |
| 회색 | #808991 / #636C73 / 흰 글자, 눌림·호버 #636C73 | 기능 구분 |
| 파랑 아웃라인 | 흰 바탕 / #1F8CE6 / #1F8CE6, 눌림·호버 #CCE8FF | 부가 기능 |
| 회색 아웃라인 | 흰 바탕 / #D1D5D9 / #808991, 눌림·호버 #E6E8EB | 부가 기능(회색) |
| 흰 아웃라인 | 확인 필요(색 값 없음) | 어두운 배경 위 |
| 갈색 | #B0874A / #A37A3D / 흰 글자, 눌림·호버 #A37A3D | 안내성 행동 |

**상태**

| 상태 | 모양 |
|---|---|
| 기본 | 위 종류 표 |
| 눌림·호버 | 위 종류 표. 색 전환 0.2s, 호버는 마우스 입력일 때만 |
| 비활성 | opacity 0.5 |
| 로딩 | 확인 필요 |

**규칙**
- 배치: 주요 버튼은 묶음의 오른쪽 또는 위. 아이콘은 라벨 왼쪽, 오른쪽 화살표만 라벨 뒤.
- 리스트 행 안 버튼은 25px 높이를 쓴다.
- 버튼 문구는 어미 없는 짧은 명사로 쓴다(9장).
- PAPER에서는 파란 버튼을 쓰지 않고 검정 버튼으로 바꾼다.
- 접근성: 50px만 44pt 터치 기준을 넘는다. 25·21px 버튼은 주변 여백을 포함해 누르는 영역을 넓힌다 (구현 권장). 비활성 버튼은 `disabled` 속성으로 막는다 (구현 권장).

### 6.2 입력창
**크기·모양**

| 항목 | 값 |
|---|---|
| 안쪽 여백 | 0.6em |
| 테두리 | 1px #D1D5D9 |
| 모서리 | 확인 필요(셀렉트·체크박스는 3px) |

**상태(공식 다섯 가지)**

| 상태 | 테두리 | 배경 | 글자 | 그 밖 |
|---|---|---|---|---|
| normal | #D1D5D9 | 흰색 | — | — |
| hover | #808991 | 흰색 | — | — |
| focus | #1F8CE6 | 흰색 | — | 그림자 0 0 4px rgba(31,140,230,0.1) |
| error | 확인 필요 | — | — | — |
| disabled | #D1D5D9 | #F2F4F5 | #D1D5D9 | — |

**규칙**
- 숫자·비밀번호 입력은 자간을 넓힌다.
- 접근성: 오류일 때 `aria-invalid="true"`와 오류 문구 연결(`aria-describedby`)을 둔다 (구현 권장). 오류 문구는 "[무엇이 일어났는지] + [할 일]" 꼴(9장).

### 6.3 셀렉트·체크박스
| 부품 | 크기·모양 | 상태 |
|---|---|---|
| 셀렉트 | 패딩 0.6em, 오른쪽 1.7em, 모서리 3px, 열림 아이콘 10×6px #808991 | 비활성 글자 #9EA7AD |
| 체크박스 | 1.38em 정사각, 모서리 3px, 라벨 13px #636C73 | 선택: 배경 #1F8CE6·테두리 #0077D9, 라벨 #313538. 포커스 링 0 0 0 3px #CCE8FF. 전환 0.3s |

**규칙**
- 체크박스 선택색은 파란 버튼과 같은 짝(#1F8CE6 / #0077D9)이다.
- 접근성: 라벨 전체를 누르는 영역으로 만든다 (구현 권장).

### 6.4 탭·칩
| 환경 | 배치 |
|---|---|
| 모바일 | 5개 이하. 균등 너비, 글자 비율 너비, 가로 스크롤 세 가지 |
| 데스크톱 | 글자 너비 기준으로 나열하고 넘김 버튼을 붙인다 |

- 페이지 중간 탭은 위에 구분선을 두고, 중요하면 스크롤 시 상단 고정.
- 탭 색·선택 표시: 확인 필요. 칩: 공개 자료에 없음(확인 필요).

**규칙**
- 모바일에서 탭이 5개를 넘으면 균등 너비 대신 가로 스크롤을 쓴다.
- 접근성: `role="tablist"`/`role="tab"`과 `aria-selected` (구현 권장).

### 6.5 책 표지·리스트
**표지 크기**

| 가로 | 쓰는 곳 |
|---|---|
| 40~50px | 작은 영역 |
| 60~70px | 메타데이터 많은 리스트 |
| 80~120px | 주요 리스트 |
| 150·200px | 단독 강조 |

- 최대 높이: 가로 × 1.618 − 10px. 코드에서는 가로의 162%.
- 성인 배지 20×20px, 표지 오른쪽 위 2px. 업데이트 배지 가로 24px, 배경 rgba(33,37,41,0.9), 오른쪽 아래 모서리만 4px.
- 시리즈 표지는 0.86배로 줄이고 뒤에 표지 대표색 면 두 장을 겹친다.
- 배치: 세로형(표지 아래 정보, 아래 맞춤)과 가로형(표지 옆 정보, 위 맞춤) 두 가지.
- 리스트 글자: 3장 "리스트 글자 묶음" 표.
- 표지 로딩: #E6E8EB → #EDEFF2 → #E6E8EB 사선 그라데이션 자리 표시.

**규칙**
- 리스트 구분선은 아래쪽에만. 한 줄짜리와 마지막 행에는 넣지 않는다.
- 링크만 있는 행은 오른쪽 화살표를 꼭 넣고, 행 전체를 눌림 영역으로 쓴다. 행 안 버튼은 25px 높이.
- 표지는 원래 비율을 살리고 가로 폭만 맞춘다.
- 접근성: 표지 이미지에 책 제목을 대체 텍스트로 준다 (구현 권장). 성인 배지는 글자로도 읽히게 한다 (구현 권장).

### 6.6 상단 바·하단 탭 바
- 웹 상단 대표 영역은 dodgerBlue50(문서 기준). 현재 사이트 상단 색은 확인 필요.
- 2026-10-31 관찰: 웹 상단 주 메뉴는 만화 · 웹툰 · 웹소설 · 도서 · 리디샵 · 셀렉트 6개.
- 앱 바: 제목 Big headline 20dp(Android), 앱 바 버튼 Title 16~17.
- 앱 탭 바: 아이콘 아래 글자 10~11(dp/pt). 그 밖의 규격은 확인 필요.

### 6.7 모달·바텀시트
- 모달 종류: 확인, 입력, 선택(앱은 결정 추가). 제목은 모달을 연 버튼 라벨과 맞춘다.
- 화면 가운데 배치, 필요하면 Y축 고정.
- 팝업 모션: 나올 때 ease-out, 들어갈 때 ease-in, 400ms.
- 크기·모서리·딤 색: 확인 필요. 바텀시트: 공개 자료에 없음(확인 필요).

**규칙**
- 모달 제목은 모달을 연 버튼 문구와 같은 말을 쓴다(예: "캐시충전" 버튼 → "캐시충전" 모달).
- 접근성: `role="dialog"`, `aria-modal="true"`, 열면 포커스를 모달 안으로, 닫으면 연 버튼으로 (구현 권장).

### 6.8 토스트·배지
| 항목 | 값 |
|---|---|
| 종류 | 일반, 성공, 얼럿 |
| 길이 | 최대 2줄 |
| 닫기 | 항상 닫기 버튼. 실행 취소 버튼을 붙일 수 있다 |
| 위치 | 하단 고정 영역과 겹치지 않게 |
| 모션 | ease-out으로 나오고 ease-in으로 들어감, 300ms |
| 글자 | Android Body 14~15dp, iOS Sub body 13pt |

- 배지: 6.5의 성인 배지·업데이트 배지 참고.
- 접근성: 토스트에 `role="status"`(얼럿은 `role="alert"`)를 준다 (구현 권장).

### 6.9 아이콘·이미지
- 아이콘: @ridi/web-icons(SVG) 패키지. 아이콘 색은 라벨과 같게. 버튼 안 크기는 11~18px(버튼 높이에 비례).
- 이미지: 책 표지가 중심. 표지 원래 비율을 살리고 가로 폭만 맞춘다.

## 7. 패턴
- 목록 → 상세: 책 목록은 세로형·가로형 두 배치에서 표지 가로 폭 단계(40~200px)를 고른다. 링크 행은 행 전체를 누르게 하고 오른쪽 화살표를 둔다. 상세 화면 구성은 확인 필요.
- 시리즈 묶음: 시리즈 표지는 0.86배로 줄이고 뒤에 대표색 면 두 장을 겹쳐 "여러 권"임을 보인다.
- 긴 내용 접기: 알림 박스 글이 모바일 160px·데스크톱 180px을 넘으면 `더보기`로 접는다.
- 검색: 확인 필요.

### 로딩
- 표지 자리에 회색 사선 그라데이션(#E6E8EB → #EDEFF2 → #E6E8EB)을 깐다. 표지 크기는 미리 정해진 가로 단계와 최대 높이로 잡아 자리가 흔들리지 않게 한다.

### 오류
- 오류 문구는 "[무엇이 일어났는지] + [사용자가 할 일]"을 한 문장씩 쓴다(공식 글쓰기 규칙). 합니다체, `-주세요`는 허용.

```
서버와 연결하지 못했습니다.
잠시 후 다시 시도해 주세요.
```
(예시 문구, SylviaLab 작성)

- 오류 화면 구성은 확인 필요.

### 빈 상태
- 확인 필요. 문구를 쓴다면 같은 규칙("무엇" + "할 일", 긍정형)을 따른다.

### 폼·결제
- 입력창 다섯 상태와 체크박스 규칙만 공개. 결제 흐름은 확인 필요.

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #212529 | #ffffff | 15.4:1 | 통과 |
| #303538 | #ffffff | 12.4:1 | 통과 |
| #636C73 | #ffffff | 5.4:1 | 통과 |
| #808991 | #ffffff | 3.6:1 | 미달(큰 글자 3:1은 통과) |
| #9EA7AD | #ffffff | 2.4:1 | 미달 |
| #ffffff | #1F8CE6 | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #1F8CE6 | #ffffff | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #EB5847 | #ffffff | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #808991 | 3.6:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #B0874A | 3.3:1 | 미달(큰 글자 3:1은 통과) |
| #D1D5D9 | #F2F4F5 | 1.3:1 | 미달 |

- 대비 메모: 파란 버튼 글자는 13px 700이라 큰 글자(18px 이상 또는 14px 굵게)에 조금 못 미친다. 가격 글자(15px 700 #1F8CE6)는 큰 글자 기준 3:1을 넘는다. 보조 글자 #808991은 12~14px로 쓰여 본문 기준에 모자란다. 비활성 입력(#D1D5D9/#F2F4F5)은 비활성 요소라 WCAG 대비 예외다.
- 터치 영역: 버튼 높이 50px만 44pt 기준을 넘는다. 40px은 조금 모자라고, 30·25·21px(리스트 행 안 버튼 25px)은 낮다. 링크 행은 행 전체를 눌림 영역으로 써 보완한다.
- 최소 글자 크기: 웹 11px(Caption·작은 버튼), 앱 10~11(탭 바 글자·대여기간).

### 점검 목록
| 항목 | 상태 |
|---|---|
| 포커스 표시 | 입력창 포커스 테두리 #1F8CE6 + 그림자, 체크박스 포커스 링 3px #CCE8FF가 공식 정의돼 있다. 버튼 포커스는 확인 필요 |
| 호버 | 마우스 입력일 때만 적용(공식). 터치에서 호버 상태가 남지 않는다 |
| 키보드 조작 | 확인 필요 |
| 스크린리더 이름 | 확인 필요. 아이콘만 있는 버튼에 `aria-label` (구현 권장) |
| 대체 텍스트 | 책 표지에 제목 대체 텍스트 (구현 권장) |
| 글자 확대 | 확인 필요 |
| 터치 영역 44pt | 50px 버튼만 충족. 작은 버튼은 누르는 영역 확장 (구현 권장) |
| 색 외 단서 | 할인율(red40)·가격(파랑)은 숫자와 기호(%, 원)가 함께 있어 색만으로 전달하지 않는다. 오류 입력 표시 방식은 확인 필요 |

## 9. 글쓰기 톤
- 말투(문서 기준): 합니다체 중심. 해요체는 신뢰가 떨어져 보일 수 있다며 쓰지 않고, `-주세요`, `-보세요`만 예외로 둔다.
- 2026-10-31 관찰: 현재 사이트 소개 문구는 `즐기세요`, `만나 보세요!`처럼 권유형 어미를 쓴다.
- 버튼 문구 꼴: 메뉴·버튼은 어미 없는 짧은 명사(캐시충전, 내 서재, 더보기). 모달 제목은 모달을 연 버튼 라벨과 맞춘다.
- 원칙: 전문용어 대신 쉬운 말, 오류 뒤에는 다음 행동 안내, 부정형보다 긍정형, 능동문, 같은 대상은 같은 이름으로, 과장하지 않기.
- 숫자·단위 표기
  - 날짜: `YYYY년 MM월 DD일` 또는 표·리스트에서 `YYYY.MM.DD.`(끝에도 마침표)
  - 요일: 괄호로 붙여 `(금)`
  - 시간: 오전·오후만 쓰고 낮·밤은 쓰지 않음
  - 범위: 물결표를 앞뒤에 붙여 씀(12:50~14:00)
  - 용량: 십진 단위(KB, MB). KiB 같은 이진 접두어는 쓰지 않음
  - 확장자: 소문자면 앞에 마침표(.pdf), 마침표 없으면 대문자(PDF)
  - 제품명: 원래 표기 그대로(iPhone, macOS, PAPER)
- 예시 구조: "[무엇이 일어났는지] + [사용자가 할 일]"을 한 문장씩. 예) 연결 문제 안내 한 문장 + 새로고침 요청 한 문장.

## 10. Do & Don't
아래 규칙은 리디 공식 저장소 문서(ridi/design-system)에 있는 규칙을 SylviaLab이 짧게 옮긴 것이다.

### Do
- 주요 버튼은 #1F8CE6 바탕 + #0077D9 테두리, 눌림·호버는 #0077D9로 바꾼다.
- 책 표지는 가로 폭만 맞추고 최대 높이를 가로 × 1.618 − 10px로 자른다. 테두리 1px rgba(0,0,0,0.1).
- 버튼 높이 50/40/30/25/21px 중에서 고르고, 높이에 맞는 글자(16/14/13/11/11px)와 묶음 간격(8/6/5px)을 쓴다.
- 굵기는 400·700 두 가지만 쓰고, 700은 제목·링크·가격에만.
- 버튼 모션은 200ms cubic-bezier(0.23, 1, 0.32, 1), 팝업 400ms, 토스트 300ms.
- 리스트 구분선은 행 아래쪽에만 긋고 마지막 행에는 넣지 않는다.
- 토스트에는 항상 닫기 버튼을 두고 2줄을 넘기지 않는다.
- 날짜는 표·리스트에서 `YYYY.MM.DD.`처럼 끝에도 마침표를 찍는다.

### Don't
- 같은 페이지 글자에 slateGray와 gray를 섞지 않는다.
- 모션에 linear를 쓰지 않는다. 100ms 이하·500ms 이상 길이도 피한다.
- PAPER(전자잉크)에서 파란 버튼과 모션을 쓰지 않는다.
- orange(#FA5300)를 경고색으로 쓰지 않는다(경고·오류는 #E64938).
- 해요체로 쓰지 않는다(`-주세요`, `-보세요`만 예외).
- 모바일 탭을 5개 넘게 균등 너비로 늘어놓지 않는다.
- 용량에 KiB 같은 이진 접두어를 쓰지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: npm @ridi/colors 0.7.1(색 hex.json), @ridi/web-ui 0.8.0(글꼴 스택, 입력 상태, 표지 스타일), @ridi/rsg 2.0.18(rui-no-reset.css: 버튼·입력·체크박스 규칙), @ridi/web-icons(SVG 아이콘).
- 저장소: https://github.com/ridi/design-system (MIT 라이선스, 문서는 docs/_pages)
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 저장소 docs/_pages 문서(colors, principles, web/typography, web/components, web/motion, app/typography, app/components, writings). Storybook은 공개 자료 없음.
- 버전·변경 관리: 저장소 마지막 커밋 2022-04-14, 색 패키지 2019년·컴포넌트 패키지 2020년 배포본. 이후 변경 내역은 공개 자료 없음. 현재 사이트 타일 색 #1E9EFF가 문서 #1F8CE6과 달라 문서와 실제가 벌어졌을 수 있다.

## 12. AI에 넣을 때
```
리디 서점 스타일로 디자인해 줘.
- 주색: #1F8CE6 (눌림 #0077D9, 옅은 면 #CCE8FF). 가격 글자도 이 파랑
- 배경: #FFFFFF, 구분 면 #F7FAFC
- 글자: 본문 #303538, 보조 #808991, 흐린 #9EA7AD, 할인율 #EB5847
- 오류는 #E64938, 주황 #FA5300은 별점·보조 포인트에만
- 글꼴: Apple SD Gothic Neo + Helvetica Neue, 400/700만, 자간 -0.03em
- 크기: 30/24/20/18/16/15/14/13/12px, 행간 1.4
- 모서리: 버튼 4px, 입력·체크박스 3px
- 간격 단위: 4px 기반, 버튼 사이 8px
- 버튼: 높이 50/40/30/25/21px, 13~16px 굵은 글자, 그림자 0 1px 1px
- 책 표지: 1px rgba(0,0,0,.1) 테두리, 최대 높이 = 가로×1.618−10px
- 모션: 200ms cubic-bezier(0.23,1,0.32,1), linear 금지
- 문구: 합니다체, 버튼은 짧은 명사, 날짜 YYYY.MM.DD.
- 분위기: 표지가 주인공, 장식 없이 차분한 서점
```

## 13. 참고 자료
- https://github.com/ridi/design-system (확인 2026-10-31) — docs/_pages의 colors, principles, web/typography, web/components, web/motion, app/typography, app/components, writings 문서. 마지막 커밋 2022-04-14
- https://www.npmjs.com/package/@ridi/colors (확인 2026-10-31) — 0.7.1, hex.json 값
- https://www.npmjs.com/package/@ridi/web-ui (확인 2026-10-31) — 0.8.0, 소스맵의 styles.ts(글꼴 스택, 입력 상태, 표지 스타일)
- https://www.npmjs.com/package/@ridi/rsg (확인 2026-10-31) — 2.0.18, stylesheets/dist/rui-no-reset.css(버튼·입력·체크박스 규칙)
- https://ridibooks.com/ (확인 2026-10-31) — WebFetch로 메타 정보(theme-color #ffffff, msapplication-TileColor #1E9EFF), 메뉴 이름, 문구 톤만 확인

근거와 한계
- 색·글꼴·버튼·모션 값은 리디 공식 저장소와 리디 계정이 배포한 npm 패키지에서 읽었다. 2019~2022년 자료라 현재 화면과 다를 수 있다.
- 현재 사이트에서 직접 확인한 값은 메타 정보 두 가지와 문구뿐이다. 이 작업 환경은 브라우저로 사이트를 열 수 없어 현재 화면의 색, 글꼴, 간격, 모서리는 재지 못했다. 사이트가 바뀌면 관찰 값도 바뀐다.
- 확인 필요: 다크 모드 값, 간격 토큰, 화면 여백·그리드, 모달 규격, 입력 오류 색, 현재 상단 바 색, scubablue 단계 HEX.
- 대비(8장)는 문서 HEX로 SylviaLab이 계산했다. 패턴(7장)은 문서의 컴포넌트 규칙에서 정리했다.
- 서비스 이름과 브랜드는 리디 주식회사의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
이 문서의 토큰 이름과 공식 패키지 이름을 아래처럼 잇는다. 패키지는 2019~2020년 배포본이다.

| DESIGN.md | 공식 이름·위치 |
|---|---|
| `colors.dodger-blue-50` ~ `-100` | @ridi/colors hex.json `dodgerBlue5` ~ `dodgerBlue100` |
| `colors.slate-gray-*` | @ridi/colors `slateGray5` ~ `slateGray100` |
| `colors.light-steel-blue-*` | @ridi/colors `lightSteelBlue5` ~ `lightSteelBlue30` |
| `colors.red-40`, `colors.red-50` | @ridi/colors `red40`, `red50` |
| `colors.gray-100` | @ridi/colors `gray100` |
| `typography.font-family` | @ridi/web-ui styles.ts 글꼴 스택 |
| `components.input-*` | @ridi/web-ui styles.ts 입력 상태 |
| `thumbnail.*` | @ridi/web-ui styles.ts 표지 스타일 |
| `components.button-*`, `components.checkbox*` | @ridi/rsg 2.0.18 stylesheets/dist/rui-no-reset.css |
| 아이콘 | @ridi/web-icons(SVG) |

- 역할 이름(`primary`, `text-body` 등)은 공식 패키지에 없다. 프로젝트 CSS에서 공식 색 이름을 가리키는 별칭으로 만든다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 모든 색 단계 HEX(@ridi/colors 0.7.1 hex.json), 디자인 원칙 네 가지, 웹·앱 글자 크기 단계, 굵기 400/700 규칙, 자간·행간, 버튼 다섯 높이와 아이콘·글자·패딩·간격, 버튼 종류별 색, 입력 다섯 상태, 체크박스·셀렉트 수치, 표지 가로 단계·황금비 높이·테두리·그늘, 배지 크기, 그림자·포커스 링, 모션 이징·길이, 탭·토스트·모달 규칙, 글쓰기 표기 규칙(ridi/design-system docs/_pages, @ridi/web-ui 0.8.0, @ridi/rsg 2.0.18).
- **화면에서 잰 값(관찰)**: ridibooks.com 메타 정보(theme-color #ffffff, msapplication-TileColor #1E9EFF), 상단 주 메뉴 6개, 현재 소개 문구 어미(2026-10-31 WebFetch).
- **SylviaLab이 정리·권장한 것**: 역할 이름(semantic 층)과 kebab-case 토큰 이름, `brown-pressed` 이름, 리스트 글자 묶음 표 정리, Don't 목록, 패턴 정리, 오류 예시 문구, `(구현 권장)` 접근성 메모, 대비 계산값.
