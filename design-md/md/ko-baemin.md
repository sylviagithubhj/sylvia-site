---
version: "1.0"
name: "배달의민족"
description: "민트 #0cefd3 넓은 면에 검정 굵은 글자를 올리고, ref→sem→com 3층 CSS 변수와 7단계 글자 크기 설정으로 화면을 짜는 배달 앱"
source:
  - "관찰(웹 computed style·CSS 변수, baemin.com, macOS Chrome 1362px, 실측 2026-10-31)"
  - "https://www.baemin.com/ (--ref-*, --sem-mint-*, --sem-base-*, --com-mint-* 변수 1,746개)"
  - "https://www.woowahan.com/fonts (공식 글꼴)"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 색 — Primitive (--ref-color-*, 1→8 단계, gray는 1→12)
#    투명도 값은 rgba를 #rrggbbaa로 옮긴 것
# ─────────────────────────────────────────────
colors:
  # Mint — 브랜드
  mint1: "#e6fff8"
  mint2: "#b0ffeb"
  mint3: "#87ffe5"
  mint4: "#35fcdf"
  mint5: "#0cefd3"     # 대표색. 주 버튼 채움, 넓은 면
  mint6: "#00c9b9"     # 포커스 테두리, 입력 커서
  mint7: "#00a39b"
  mint8: "#007d7b"

  # Gray — gray12가 본문 글자
  gray1: "#f3f5f7"     # 화면 바탕
  gray2: "#e4e6e8"
  gray3: "#d5d7d9"
  gray4: "#b1b3b5"
  gray5: "#97999b"
  gray6: "#7e8082"
  gray7: "#646668"
  gray8: "#4b4d4f"
  gray9: "#313335"
  gray10: "#26282a"
  gray11: "#1e2022"
  gray12: "#181a1c"
  white: "#ffffff"
  black: "#000000"

  # 보조 계열 (1·5·6 단계만 의미 토큰에 연결. 전체는 본문 2장 표)
  blue1: "#edf7ff"
  blue5: "#1a7cff"
  blue6: "#086ade"
  purple1: "#eef0ff"
  purple5: "#5f57ff"
  pink5: "#f13fa1"
  green1: "#edfdf4"
  green5: "#00b96b"
  green6: "#009f5c"
  orange1: "#fff5ed"
  orange5: "#ff8400"
  orange6: "#ff6610"
  red1: "#ffeeef"
  red5: "#ff403e"
  red6: "#e52420"

  # ── Semantic (--sem-mint-color-*, 화면에서는 이 이름을 쓴다) ──
  primary: "{colors.mint5}"             # systemMainPrimary
  primary-secondary: "{colors.mint6}"   # systemMainSecondary
  primary-tertiary: "{colors.mint1}"    # systemMainTertiary
  on-primary: "{colors.black}"
  fill-inverted: "{colors.black}"
  on-inverted: "{colors.white}"
  sub-primary: "{colors.blue5}"         # systemSubPrimary
  sub-secondary: "{colors.blue6}"
  sub-tertiary: "{colors.blue1}"
  benefit: "{colors.purple5}"           # benefitPrimary
  benefit-tertiary: "{colors.purple1}"
  count-badge: "{colors.pink5}"
  background: "{colors.gray1}"          # backgroundPrimary
  surface: "{colors.white}"             # surfaceContainer
  text-primary: "{colors.gray12}"       # foregroundPrimary
  text-secondary: "#181a1cc7"           # foregroundSecondary .78
  text-tertiary: "#181a1c8f"            # foregroundTertiary .56
  text-quaternary: "#181a1c54"          # foregroundQuaternary .33
  text-disabled: "#181a1c2e"            # foregroundDisabled .18
  border-primary: "{colors.gray12}"
  border-secondary: "#181a1c2e"         # .18
  border-tertiary: "#181a1c1c"          # .11
  border-quaternary: "#181a1c14"        # .08
  separator: "#181a1c0f"                # separatorPrimary .06
  fill-primary: "#0000330a"             # rgba(0,0,51,.04)
  fill-secondary: "#0000141a"           # rgba(0,0,20,.1)
  fill-hovered: "#0000000a"             # rgba(0,0,0,.04)
  fill-pressed: "#00000014"             # rgba(0,0,0,.08)
  overlay: "#00000080"                  # overlayPrimary .5 (base 테마 .3)
  success: "{colors.green5}"
  success-secondary: "{colors.green6}"
  success-tertiary: "{colors.green1}"
  warning: "{colors.orange5}"
  warning-secondary: "{colors.orange6}"
  warning-tertiary: "{colors.orange1}"
  danger: "{colors.red5}"
  danger-secondary: "{colors.red6}"
  danger-tertiary: "{colors.red1}"
  footer-text: "{colors.gray4}"
  footer-text-secondary: "{colors.gray6}"

# ─────────────────────────────────────────────
# 2. 글자 — mint 테마, body에 붙은 4번째 크기 설정 기준
#    tracking 0px. 7단계 크기 설정에 따라 같은 토큰이 커진다
# ─────────────────────────────────────────────
typography:
  font-family: "system-ui, sans-serif"
  font-family-brand: "BAEMINWORK"     # 안내 페이지 큰 문구만
  letter-spacing: "0px"
  displayLarge: { fontSize: "44px", fontWeight: 700, lineHeight: "59px" }
  displayMedium: { fontSize: "41px", fontWeight: 700, lineHeight: "55px" }
  displaySmall: { fontSize: "36px", fontWeight: 700, lineHeight: "48px" }
  headlineLarge: { fontSize: "32px", fontWeight: 700, lineHeight: "40px" }
  headlineMedium: { fontSize: "29px", fontWeight: 700, lineHeight: "36px" }
  headlineSmall: { fontSize: "26px", fontWeight: 700, lineHeight: "33px" }
  subheadingLarge: { fontSize: "22px", fontWeight: 700, lineHeight: "26px" }
  subheadingMedium: { fontSize: "20px", fontWeight: 700, lineHeight: "24px" }
  subheadingSmall: { fontSize: "18px", fontWeight: 700, lineHeight: "22px" }
  titleLarge: { fontSize: "22px", fontWeight: 700, lineHeight: "23.8px" }
  titleMedium: { fontSize: "20px", fontWeight: 700, lineHeight: "21.6px" }
  titleSmall: { fontSize: "18px", fontWeight: 700, lineHeight: "19.5px" }
  bodyLarge: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" }
  bodyMedium: { fontSize: "14px", fontWeight: 400, lineHeight: "21px" }    # 기본 본문. 크기 설정별 12·13·14·15·17·19·20px
  bodySmall: { fontSize: "12px", fontWeight: 400, lineHeight: "18px" }
  labelLarge: { fontSize: "16px", fontWeight: 400, lineHeight: "17.3px" }
  labelLargeEmphasized: { fontSize: "16px", fontWeight: 700, lineHeight: "17.3px" }
  labelMedium: { fontSize: "14px", fontWeight: 400, lineHeight: "15.2px" }
  labelMediumEmphasized: { fontSize: "14px", fontWeight: 700, lineHeight: "15.2px" }
  labelSmall: { fontSize: "12px", fontWeight: 400, lineHeight: "13px" }
  labelSmallEmphasized: { fontSize: "12px", fontWeight: 700, lineHeight: "13px" }
  captionLarge: { fontSize: "12px", fontWeight: 400, lineHeight: "13px" }
  captionMedium: { fontSize: "11px", fontWeight: 400, lineHeight: "11.9px" }
  captionSmall: { fontSize: "10px", fontWeight: 400, lineHeight: "10.8px" }
  footnote: { fontSize: "11px", fontWeight: 400, lineHeight: "15px" }
  detail: { fontSize: "10px", fontWeight: 400, lineHeight: "13px" }

rounded:
  none: "0px"
  xsmall: "2px"
  small: "4px"
  medium: "8px"
  large: "12px"
  xlarge: "16px"
  xxlarge: "20px"
  rounded: "9999px"

# --ref-spacing-* (이름은 8px = 100 기준 배수)
spacing:
  spacing-25: "2px"
  spacing-50: "4px"
  spacing-75: "6px"
  spacing-100: "8px"
  spacing-125: "10px"
  spacing-150: "12px"
  spacing-200: "16px"
  spacing-250: "20px"
  spacing-300: "24px"
  spacing-400: "32px"
  spacing-500: "40px"
  spacing-600: "48px"
  spacing-800: "64px"
  spacing-1000: "80px"
  spacing-1: "1px"
  spacing-700: "56px"
  spacing-900: "72px"
  spacing-1200: "96px"
  spacing-1500: "120px"
  spacing-2000: "160px"

border-width:
  default: "1px"
  focus-select: "2px"

layout:
  landing-content-width: "1128px"   # 1362px 창에서 실측

elevation:
  shadow-level1: "0 2px 8px rgba(0,0,0,.06)"    # 약한 띄움
  shadow-level2: "0 2px 8px rgba(0,0,0,.12)"    # 카드
  shadow-level3: "0 2px 10px rgba(0,0,0,.18)"   # 팝업·툴팁
  button: "none"                                # filledButton-shadow

focus:
  mint-button: "rgba(0,0,0,.38) 테두리"
  black-gray-button: "{colors.mint6} 테두리"
  select: "2px"

motion:
  # 스프링 방식. 단위는 변수에 없다(초로 보임)
  duration-fastest: 0.17
  duration-fast: 0.25
  duration-default: 0.33
  duration-slow: 0.66
  bounce-smooth: 0
  bounce-snappy: 0.15
  bounce-bounce: 0.3

# ─────────────────────────────────────────────
# 3. 컴포넌트 토큰 (--com-mint-*). 높이는 변수에 없다
# ─────────────────────────────────────────────
components:
  button-small: { rounded: "{rounded.medium}", typography: "{typography.labelSmallEmphasized}" }
  button-medium: { rounded: "{rounded.medium}", typography: "{typography.labelMediumEmphasized}" }
  button-large: { rounded: "{rounded.large}", typography: "{typography.labelLargeEmphasized}" }
  button-filled-mint: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}", shadow: "none" }
  button-filled-mint-hover: { overlay: "{colors.fill-hovered}" }
  button-filled-mint-pressed: { overlay: "{colors.fill-pressed}" }
  button-filled-mint-focus: { borderColor: "rgba(0,0,0,.38)" }
  button-filled-black: { backgroundColor: "{colors.fill-inverted}", textColor: "{colors.on-inverted}" }
  button-filled-black-hover: { overlay: "rgba(255,255,255,.04)" }
  button-filled-black-pressed: { overlay: "rgba(255,255,255,.1)" }
  button-filled-black-focus: { borderColor: "{colors.primary-secondary}" }
  button-filled-gray: { backgroundColor: "{colors.fill-primary}", textColor: "{colors.text-primary}" }
  button-outlined-small: { paddingX: "{spacing.spacing-100}" }
  button-outlined-medium: { paddingX: "{spacing.spacing-150}" }
  button-outlined-large: { paddingX: "{spacing.spacing-200}" }
  button-outlined: { textColor: "{colors.text-primary}", borderColor: "{colors.border-tertiary}" }
  button-text: { rounded: "{rounded.none}", padding: "0px", iconGap: "2~4px" }
  button-filled-icon: { rounded: "{rounded.rounded}", padding: "0px" }
  search-field: { backgroundColor: "{colors.fill-primary}", placeholderColor: "{colors.text-tertiary}", caretColor: "{colors.primary-secondary}", iconGap: "{spacing.spacing-75}" }
  select-focus: { borderWidth: "{border-width.focus-select}" }
  chip: { borderColor: "{colors.border-tertiary}", rounded: "{rounded.large}" }
  chip-selected: { backgroundColor: "{colors.fill-inverted}", textColor: "{colors.on-inverted}" }
  tab: { paddingY: "{spacing.spacing-150}", paddingX: "{spacing.spacing-75}", gap: "{spacing.spacing-50}", textColor: "{colors.text-primary}" }
  segmented-control: { rounded: "{rounded.large}", indicatorRounded: "10px" }
  switch-on: { backgroundColor: "{colors.fill-inverted}" }
  switch-thumb: { backgroundColor: "{colors.white}" }
  checkbox: { rounded: "{rounded.small}" }
  list-item: { backgroundColor: "{colors.surface}", padding: "{spacing.spacing-200}", gap: "{spacing.spacing-125}", dividerColor: "{colors.separator}" }
  card: { backgroundColor: "{colors.surface}", shadow: "{elevation.shadow-level2}" }
  full-sheet: { topRounded: "{rounded.none}" }
  dialog: { paddingBottom: "90px", dim: "{colors.overlay}" }
  snackbar: { paddingY: "{spacing.spacing-150}", gap: "{spacing.spacing-100}" }
  badge-inline: { rounded: "{rounded.small}", padding: "{spacing.spacing-50}" }
  badge-inline-blue: { backgroundColor: "{colors.sub-tertiary}" }
  badge-inline-red: { backgroundColor: "{colors.danger-tertiary}" }
  badge-count: { backgroundColor: "{colors.count-badge}", rounded: "{rounded.rounded}" }
  tooltip: { shadow: "{elevation.shadow-level3}" }
---

# 배달의민족 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, macOS Chrome 데스크톱 · 창 너비 1362px · Claude in Chrome으로 computed style과 CSS 변수 직접 읽음) + 글꼴은 우아한형제들 공식 글꼴 페이지
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다.

작업 환경의 셸과 WebFetch로는 baemin.com·woowahan.com에 접속할 수 없었다(robots 차단·접속 오류). 그래서 연결된 Chrome 브라우저에서 공개 페이지를 열고 개발자 도구와 같은 방식으로 값을 읽었다. YAML의 투명도 색(`#181a1cc7` 등)은 아래 rgba 값을 #rrggbbaa 꼴로 옮긴 것이다.

## 1. 개요와 원칙
- 서비스 성격: 우아한형제들이 운영하는 음식·장보기 배달 앱. 주문은 앱에서 하고, 웹(baemin.com)은 앱을 소개하는 한 장짜리 안내 페이지다.
- 디자인 인상 한 줄: 민트(#0cefd3)를 넓은 면으로 깔고 검정 글자를 크게 올린다. 버튼은 민트 채움에 검정 글자, 또는 검정 채움에 흰 글자 두 가지다.
- 공식 시스템 이름: 공개된 이름 없음. 웹 CSS에 `ref`(원색) → `sem`(의미) → `com`(컴포넌트) 3층 변수 구조가 들어 있다. 의미 층은 `mint`와 `base` 두 테마가 있다.
- 디자인 원칙(공식 원칙은 공개되지 않음):
  1. 민트는 면으로, 글자는 검정으로. 민트 위 글자와 민트 버튼 글자는 #000000이다. (관찰에서 정리)
  2. 원색 → 의미 → 컴포넌트 순서로 값을 이어 쓴다. 화면에서 원색 이름을 바로 쓰지 않고 `sem`·`com` 토큰을 거친다. (관찰에서 정리)
  3. 글자 색은 한 색(#181a1c)에 투명도를 걸어 단계를 만든다. (관찰에서 정리)
  4. 사용자가 글자 크기를 고를 수 있다. 같은 토큰이 7단계 크기 설정에 따라 커진다. (관찰에서 정리)
  5. 브랜드 글꼴은 큰 문구에만, 화면 글자는 시스템 글꼴로. (관찰에서 정리)
- 톤: 밝은 민트 면과 큰 굵은 문구, 짧고 재치 있는 말투.

### 특장점
- 토큰이 3층으로 나뉜다 — baemin.com 한 페이지에 CSS 변수 1,746개가 `--ref-color-*`(원색) → `--sem-mint-color-*`(의미) → `--com-mint-*`(컴포넌트)로 실려 있고, 컴포넌트 토큰만 테마당 600개 안팎이다.
- 글자 크기 설정이 토큰에 들어 있다 — 7단계 크기 설정 클래스에 따라 bodyMedium이 12·13·14·15·17·19·20px로 바뀐다. 실측 시 body에는 4번째 단계가 붙어 있었다.
- 글자·테두리 단계를 투명도로 만든다 — foregroundSecondary .78, Tertiary .56, Quaternary .33, Disabled .18, borderTertiary .11, separator .06처럼 #181a1c 한 색의 투명도만 바꾼다. `base` 테마는 같은 이름에 더 옅은 값(예: .56, 딤 .3)을 쓴다.
- 민트에 검정 글자를 올린다 — 주 버튼은 #0cefd3 채움에 #000000 글자(대비 14.3:1)라, 밝은 브랜드색인데도 글자가 잘 읽힌다.
- 회사가 글꼴을 직접 만들어 배포한다 — 한나체(2012)부터 꾸불림체(2024)까지 공식 글꼴 12종을 무료로 내놓고, 안내 페이지 72px 큰 문구는 `BAEMINWORK` 웹폰트로 그린다.

### 배울 점
- 밝은 브랜드색을 버튼에 쓸 때 배달의민족처럼 흰 글자 대신 검정 글자를 올려 대비를 확보한다.
- 글자 색 단계를 만들 때 배달의민족처럼 본문색 하나에 투명도(.78/.56/.33/.18)만 바꿔 쓰면 바탕이 바뀌어도 단계가 유지된다.
- 글자 크기 설정을 지원할 때 배달의민족처럼 화면 값을 바꾸지 말고 토큰 크기표를 단계별로(예: 12~20px) 만들어 바꿔 끼운다.

### 관찰한 특징
- baemin.com 한 페이지에 CSS 변수가 1,746개 실려 있다. 컴포넌트 토큰만 테마당 600개 안팎이다.
- 글자 크기는 7단계 크기 설정(접근성용) 클래스로 바뀐다. 실측 시 body에 붙은 단계는 4번째 클래스였다.
- 브랜드 글꼴(한나체, 주아체, 을지로체 등)은 제목·광고 문구에만 쓰고, 화면 본문은 시스템 글꼴을 쓴다.
- 공식 글꼴 12종은 회사가 무료로 배포한다.

### 이 문서를 읽는 AI 에이전트에게
- 색·간격·모서리는 YAML 토큰 이름으로 쓴다. 화면에서는 원색(`mint5`, `gray12`)보다 의미 토큰(`primary`, `text-primary`, `separator`)을 먼저 쓴다. 배민 CSS도 ref → sem → com 순서로 이어 쓴다.
- 민트 `primary` 위 글자는 항상 검정 `on-primary`다. 흰 글자를 올리지 않는다.
- 보조 글자·테두리는 새 회색을 만들지 말고 #181a1c 투명도 토큰(`text-secondary` .78 … `separator` .06)으로 고른다.
- 글자 크기는 크기 설정 단계에 따라 바뀌는 토큰으로 쓴다. px을 화면에 고정하지 않는다.
- 판단이 어려우면 버튼은 민트 채움 + 검정 글자, 혜택은 보라 `benefit`, 그림자는 카드·팝업에만 고른다.

## 2. 색상
값은 baemin.com에 실린 CSS 변수(`--ref-color-*`, `--sem-mint-color-*`, `--com-mint-*`)에서 읽었다. 다크 모드 변수 묶음은 찾지 못했다.

### 색 체계
배민 CSS 변수는 **원색(ref) → 의미(sem) → 컴포넌트(com)** 3층이다. 의미 층에는 `mint`와 `base` 두 테마가 있다.

| 층 | 변수 앞머리 | 예시 | 쓰는 곳 |
|---|---|---|---|
| 원색 | `--ref-color-*` | mint5, gray12, purple5 | 토큰 정의에만 |
| 의미 | `--sem-mint-color-*`, `--sem-base-color-*` | systemMainPrimary, foregroundSecondary, separatorPrimary | 화면 글자·면·선 |
| 컴포넌트 | `--com-mint-*` | filledButton, searchField, listItem | 부품 안 값(테마당 600개 안팎) |

- 원색 계열은 1(가장 옅음) → 8(가장 진함) 단계다. 의미 토큰은 대개 1단계(Tertiary 면), 5단계(Primary), 6단계(Secondary)를 가리킨다.
- 회색 글자·선은 원색 단계 대신 gray12 #181a1c에 투명도를 건 의미 토큰을 쓴다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| mint5 (systemMainPrimary) | #0cefd3 | 주 버튼 채움, 안내 페이지 전체 배경, 큰 제목 글자 |
| mint6 (systemMainSecondary) | #00c9b9 | 포커스 테두리, 입력 커서 |
| mint1 (systemMainTertiary) | #e6fff8 | 연한 민트 면 |
| mint2 | #b0ffeb | 원색 단계 |
| mint3 | #87ffe5 | 원색 단계 |
| mint4 | #35fcdf | 원색 단계 |
| mint7 | #00a39b | 원색 단계 |
| mint8 | #007d7b | 원색 단계 |
| blue5 (systemSubPrimary) | #1a7cff | 보조 강조(링크·정보) |
| blue6 (systemSubSecondary) | #086ade | 보조 강조 진한 단계 |
| purple5 (benefitPrimary) | #5f57ff | 혜택·할인 표시 |
| pink5 | #f13fa1 | 숫자 배지(countBadge) 채움 |
| black | #000000 | fillInverted(검정 버튼), 안내 페이지 푸터 배경 |

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| white | #ffffff | surfaceContainer(카드·시트 면), 반전 글자 |
| gray1 | #f3f5f7 | backgroundPrimary(화면 바탕) |
| gray2 | #e4e6e8 | 원색 단계 |
| gray3 | #d5d7d9 | 원색 단계 |
| gray5 | #97999b | 원색 단계 |
| gray7 | #646668 | 원색 단계 |
| gray8 | #4b4d4f | 원색 단계 |
| gray9 | #313335 | 원색 단계 |
| gray10 | #26282a | 원색 단계 |
| gray11 | #1e2022 | 원색 단계 |

투명도 의미 토큰(mint 테마 기준). HEX 하나로 적을 수 없어 rgba로 둔다.

| 의미 토큰 | 값 | 쓰임 |
|---|---|---|
| borderSecondary | rgba(24,26,28,.18) | 일반 테두리 |
| borderTertiary | rgba(24,26,28,.11) | 칩 테두리, 약한 테두리 |
| borderQuaternary | rgba(24,26,28,.08) | 가장 약한 테두리 |
| separatorPrimary | rgba(24,26,28,.06) | 리스트 구분선 |
| fillPrimary | rgba(0,0,51,.04) | 회색 버튼·검색창 채움 |
| fillSecondary | rgba(0,0,20,.1) | 진한 회색 채움 |
| fillHovered | rgba(0,0,0,.04) | hover 겹침 |
| fillPressed | rgba(0,0,0,.08) | 눌림 겹침 |
| overlayPrimary | rgba(0,0,0,.5) | 모달 뒤 딤 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray12 (foregroundPrimary) | #181a1c | 제목·본문, borderPrimary |
| gray4 | #b1b3b5 | 푸터 회사 정보 글자(실측) |
| gray6 | #7e8082 | 푸터 보조 글자(실측) |

글자 색은 gray12에 투명도를 걸어 단계를 만든다(mint 테마 기준).

| 의미 토큰 | 값 | 쓰임 |
|---|---|---|
| foregroundSecondary | rgba(24,26,28,.78) | 보조 글자 |
| foregroundTertiary | rgba(24,26,28,.56) | 설명, 입력 placeholder |
| foregroundQuaternary | rgba(24,26,28,.33) | 약한 글자 |
| foregroundDisabled | rgba(24,26,28,.18) | 비활성 글자 |

`base` 테마는 같은 이름에 조금 더 옅은 값을 쓴다(예: foregroundSecondary .56, overlayPrimary .3).

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (positivePrimary = green5) | #00b96b | 완료, 긍정 |
| warning (warningPrimary = orange5) | #ff8400 | 주의 |
| error (negativePrimary = red5) | #ff403e | 오류, 삭제 |
| info (systemSubPrimary = blue5) | #1a7cff | 정보, 링크 |
| positiveSecondary (green6) | #009f5c | 성공 진한 단계 |
| negativeSecondary (red6) | #e52420 | 오류 진한 단계 |
| warningSecondary (orange6) | #ff6610 | 주의 진한 단계 |
| positiveTertiary (green1) | #edfdf4 | 연한 배경(인라인 배지 등) |
| negativeTertiary (red1) | #ffeeef | 연한 배경(인라인 배지 등) |
| warningTertiary (orange1) | #fff5ed | 연한 배경(인라인 배지 등) |
| subTertiary (blue1) | #edf7ff | 연한 배경(인라인 배지 등) |
| benefitTertiary (purple1) | #eef0ff | 연한 배경(인라인 배지 등) |

### 그 밖의 원색 단계(1→8)
| 계열 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| blue | #edf7ff | #d7eaff | #77bbff | #449bff | #1a7cff | #086ade | #0f59b7 | #09356f |
| green | #edfdf4 | #c6f6dc | #77e6af | #3bd28d | #00b96b | #009f5c | #00844d | #00502e |
| orange | #fff5ed | #ffe4cf | #ffba77 | #ff9e3b | #ff8400 | #ff6610 | #bb4500 | #6e2800 |
| red | #ffeeef | #ffdadb | #ff8b8d | #ff6262 | #ff403e | #e52420 | #bb2523 | #6f1a19 |
| pink | #ffeefa | #ffdbf1 | #ff8cd1 | #fd63ba | #f13fa1 | #d2308b | #af2874 | #6b1646 |
| purple | #eef0ff | #d9dbff | #9ca5ff | #7476ff | #5f57ff | #4d1aff | #3605c6 | #26246e |
| yellow | #fffced | #fff2b2 | #ffe677 | #ffd73b | #ffc600 | #dbaa00 | #b68e00 | #6e5500 |
| brown | #fbf5f1 | #f2e6de | #d6b29b | #c19374 | #a8744f | #906444 | #785339 | #483222 |

(blue3은 CSS에 `#7bf` 줄임형으로 적혀 있어 #77bbff로 풀었다.)

### 역할별 색
- **민트(`primary` mint5 #0cefd3)**: 주 버튼 채움, 안내 페이지 넓은 면, 큰 제목 글자. 글자는 검정. hover는 rgba(0,0,0,.04), 눌림은 rgba(0,0,0,.08)을 위에 겹친다.
- **진한 민트(`primary-secondary` mint6 #00c9b9)**: 키보드 포커스 테두리, 입력 커서.
- **검정(`fill-inverted` #000000)**: 반전 버튼, 선택된 칩, 켜진 스위치. hover는 흰색 .04, 눌림은 흰색 .1을 겹친다.
- **보라(`benefit` purple5 #5f57ff)**: 혜택·할인 표시. 연한 면은 purple1 #eef0ff.
- **파랑(`sub-primary` blue5 #1a7cff)**: 링크·정보. 연한 면 blue1 #edf7ff.
- **분홍(`count-badge` pink5 #f13fa1)**: 숫자 배지 채움.
- **상태 3색**: 각 계열의 5단계 = 글자·아이콘(Primary), 6단계 = 진한 단계(Secondary), 1단계 = 인라인 배지 바탕(Tertiary). 예: 오류 배지 = 바탕 red1 #ffeeef + 글자 red5 #ff403e.
- **면 두 층**: 화면 바탕 `background` #f3f5f7, 카드·시트 `surface` #ffffff.

### 화면 모드
- `mint` 테마와 `base` 테마가 같은 의미 이름을 나눠 쓴다. `base`는 더 옅은 값을 쓴다(foregroundSecondary .56, overlayPrimary .3).
- 7단계 글자 크기 설정이 화면 모드처럼 body 클래스로 바뀐다(3장).
- 다크 모드: 변수 묶음을 찾지 못했다(아래 표).

### 다크 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| 전체 | 확인 필요 | 다크 모드 변수 묶음을 찾지 못함 |

### 색 사용 규칙
- 민트 #0cefd3은 주 버튼 채움과 넓은 면(안내 페이지 배경), 큰 제목 글자에 쓴다. 민트 버튼 글자는 #000000이다.
- #00c9b9는 포커스 테두리와 입력 커서에만 쓴다.
- 혜택·할인 표시는 보라 #5f57ff, 숫자 배지는 분홍 #f13fa1이다.
- 링크·정보는 파랑 #1a7cff다.
- 성공 #00b96b, 주의 #ff8400, 오류 #ff403e. 인라인 배지 바탕은 각 계열 1단계(#edfdf4, #fff5ed, #ffeeef, #edf7ff, #eef0ff)를 쓴다.
- 화면 바탕은 #f3f5f7, 카드·시트 면은 #ffffff다.
- 글자·테두리 단계는 새 회색을 만들지 않고 #181a1c의 투명도로 만든다.

### Don't
- 민트 #0cefd3 버튼에 흰 글자를 올리지 않는다(검정 #000000이면 대비 14.3:1).
- 혜택 표시에 민트를 쓰지 않는다. 혜택은 보라 #5f57ff.
- 성공 #00b96b·주의 #ff8400을 흰 바탕 글자로 쓰지 않는다(2.6:1, 2.5:1). 면·아이콘으로 쓴다.
- 보조 글자용 회색 HEX를 새로 만들지 않는다. #181a1c 투명도 토큰을 쓴다.
- 화면에서 원색 이름(`--ref-color-*`)을 바로 쓰지 않는다. 의미 토큰을 거친다.

## 3. 타이포그래피
- 글꼴: 시스템 글꼴(mint 테마 글자 토큰은 `system-ui, sans-serif`. baemin.com 본문 계산값은 `-apple-system, system-ui, "Segoe UI", Roboto, …` 순서의 시스템 글꼴 묶음)
- 글꼴(브랜드): 안내 페이지 큰 문구(72px)는 `BAEMINWORK`라는 웹폰트로 그려진다. 공식 배포 글꼴은 아래 표.
- 대체 글꼴: sans-serif
- 자간: 모든 글자 토큰의 tracking이 0px.
- 행간: 제목·라벨류는 "크기 + 약 8%"(예: 22px → 22+1.8px)로 촘촘하고, 본문·설명류는 1.5배(14px → 21px)다.

### 위계와 사용처
mint 테마, body에 적용된 4번째 크기 설정 기준, 1px = 1pt로 본다. 앱 화면은 보지 않아 PC/모바일 구분 값은 없다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| displayLarge | 44 | 700 | 59px | 가장 큰 숫자·표제 |
| displayMedium | 41 | 700 | 55px | 표제 |
| displaySmall | 36 | 700 | 48px | 표제 |
| headlineLarge | 32 | 700 | 40px | 화면 큰 제목 |
| headlineMedium | 29 | 700 | 36px | 화면 제목 |
| headlineSmall | 26 | 700 | 33px | 화면 제목 |
| subheadingLarge | 22 | 700 | 26px | 섹션 제목 |
| subheadingMedium | 20 | 700 | 24px | 섹션 제목 |
| subheadingSmall | 18 | 700 | 22px | 섹션 제목 |
| titleLarge | 22 | 700 | 23.8px | 카드·시트 제목 |
| titleMedium | 20 | 700 | 21.6px | 카드 제목 |
| titleSmall | 18 | 700 | 19.5px | 리스트 제목 |
| bodyLarge | 16 | 400 | 24px | 본문 큰 |
| bodyMedium | 14 | 400 | 21px | 기본 본문 |
| bodySmall | 12 | 400 | 18px | 작은 본문 |
| labelLarge | 16 | 400 | 17.3px | 큰 버튼 글자(Emphasized 700) |
| labelMedium | 14 | 400 | 15.2px | 중간 버튼 글자(Emphasized 700) |
| labelSmall | 12 | 400 | 13px | 작은 버튼·칩 글자(Emphasized 700) |
| captionLarge | 12 | 400 | 13px | 보조 설명 |
| captionMedium | 11 | 400 | 11.9px | 보조 설명 |
| captionSmall | 10 | 400 | 10.8px | 가장 작은 글자 |
| footnote | 11 | 400 | 15px | 각주 |
| detail | 10 | 400 | 13px | 세부 정보 |

크기 설정을 한 단계 올리면 같은 토큰이 커진다. 예: bodyMedium은 단계별로 12·13·14·15·17·19·20px.

### 안내 페이지(baemin.com) 실측 글자
| 쓰임 | 크기 | 굵기 | 행간 | 글꼴 |
|---|---|---|---|---|
| 큰 광고 문구 | 72px | 400 | 100.8px(1.4) | BAEMINWORK |
| 첫 화면 민트 문구 | 60px | 800 | 84px | 시스템 |
| 문구 아래 설명 | 20px | 600 | 29px | 시스템 |
| 푸터 링크 큰 글자 | 30px | 700 | 39px | 시스템 |
| 푸터 회사 정보 | 14px | 400 | 19.6px | 시스템 |

### 공식 배포 글꼴 (woowahan.com/fonts)
| 이름 | 공개 연도 |
|---|---|
| 한나체 | 2012 |
| 주아체 | 2014 |
| 도현체 | 2015 |
| 연성체 | 2016 |
| 기랑해랑체 | 2017 |
| 한나체 Air · 한나체 Pro | 2018 |
| 을지로체 | 2019 |
| 을지로10년후체 | 2020 |
| 을지로오래오래체 | 2021 |
| 글림체 | 2022 |
| 꾸불림체 | 2024 |
| 한나는열한살체 | 2015년 한나체 개편판 |

- 라이선스 메모: 우아한형제들이 지식재산권을 갖는다. 개인·기업 모두 상업적 사용, 수정, 재배포가 된다. 글꼴 파일 자체를 돈 받고 파는 것은 안 된다. 쓰기 전에 공식 라이선스 문서를 다시 확인할 것.

### 규칙
- 제목·라벨은 700, 본문·캡션은 400이다. 버튼은 small/medium/large에 labelSmall/Medium/Large의 Emphasized(700)를 쓴다.
- 본문은 행간 1.5배(14/21, 16/24), 제목·라벨은 크기 + 약 8%로 촘촘하게 둔다.
- 자간은 모든 단계에서 0이다.
- 브랜드 글꼴(한나체·주아체·을지로체 등, `BAEMINWORK`)은 큰 광고 문구에만 쓰고 본문에는 쓰지 않는다.
- 크기는 화면에서 고정하지 말고 크기 설정 단계에 따라 바뀌는 토큰으로 쓴다.
- 기본 본문은 bodyMedium 14/21. 설명은 bodySmall 12/18, 각주는 footnote 11/15. (SylviaLab 정리)

### Don't
- 브랜드 글꼴(한나체·주아체·`BAEMINWORK`)을 본문·버튼에 쓰지 않는다.
- 자간을 주지 않는다. 모든 단계 tracking 0px.
- 본문 행간을 1.5배보다 좁히지 않는다(14/21, 16/24). 촘촘한 행간은 제목·라벨용이다.
- 400·700 밖의 굵기를 앱 토큰에 쓰지 않는다(800·600은 안내 페이지 큰 문구에서만 관찰).

## 4. 레이아웃·간격
- 기준 화면: 데스크톱 1362px 창의 안내 페이지 한 장. 앱 화면은 보지 않았다.
- 화면 좌우 여백: 모바일 리스트 항목 좌우 패딩 16px(listItem 토큰). 앱 화면 전체 여백은 확인 필요. 데스크톱 안내 페이지 본문 폭 1128px(1362px 창에서 실측).
- 기본 단위: 8px. 반 단위 4px, 미세 조정 1·2·6·10px.
- 간격 단계(관찰, pt): 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 120, 160
- 그리드·최대 폭: 그리드는 확인 필요. 안내 페이지 본문 폭 1128px.

간격 토큰(`--ref-spacing-*`)

| 토큰 | 값 | 토큰 | 값 |
|---|---|---|---|
| spacing-1 | 1px | spacing-400 | 32px |
| spacing-25 | 2px | spacing-500 | 40px |
| spacing-50 | 4px | spacing-600 | 48px |
| spacing-75 | 6px | spacing-700 | 56px |
| spacing-100 | 8px | spacing-800 | 64px |
| spacing-125 | 10px | spacing-900 | 72px |
| spacing-150 | 12px | spacing-1000 | 80px |
| spacing-200 | 16px | spacing-1200 | 96px |
| spacing-250 | 20px | spacing-1500 | 120px |
| spacing-300 | 24px | spacing-2000 | 160px |

### 그리드·중단점
| 구분 | 값 |
|---|---|
| 데스크톱 안내 페이지 본문 폭 | 1128px (1362px 창) |
| 중단점·컬럼 | 확인 필요 |
| 모바일 리스트 좌우 | 16px (listItem) |

### 컴포넌트 안쪽 여백
| 부품 | 값 |
|---|---|
| 리스트 항목 | 상하좌우 16px, 요소 사이 10px |
| 탭 | 상하 12px · 좌우 6px, 탭 사이 4px |
| 아웃라인 버튼 좌우 | S 8px · M 12px · L 16px |
| 스낵바 | 상하 12px, 요소 사이 8px |
| 인라인 배지 | 4px |
| 다이얼로그 아래 | 90px |
| 화면 세로 리듬(헤더→제목, 구획 사이) | 확인 필요(앱 화면을 보지 않음) |

### 간격 적용 규칙
- 토큰 이름은 8px = 100 기준 배수다(spacing-50 = 4px, spacing-200 = 16px).
- 리스트 항목은 상하좌우 16px, 요소 사이 10px.
- 탭은 상하 12px·좌우 6px, 탭 사이 4px.
- 아웃라인 버튼 좌우 패딩은 S 8px · M 12px · L 16px.
- 아이콘과 글자 사이는 검색창 6px, 텍스트 버튼 2~4px.

### Don't
- 토큰 표(1~160px) 밖의 값을 만들지 않는다(예: 5px, 14px, 18px 금지).
- 리스트 항목 패딩을 16px보다 줄이지 않는다.
- 간격을 px 숫자로 박지 않고 `spacing-*` 이름으로 쓴다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-none | 0px | 텍스트 버튼, 전체 화면 시트 |
| radius-xSmall | 2px | 아주 작은 표시 |
| radius-small | 4px | 체크박스, 인라인 배지 |
| radius-medium | 8px | 버튼 small·medium |
| radius-large | 12px | 버튼 large, 칩, 세그먼트 컨트롤, 152×54px 흰 버튼(실측) |
| radius-xLarge | 16px | 안내 페이지 1곳, 쓰임 확인 필요 |
| radius-xxLarge | 20px | 쓰임 확인 필요 |
| radius-rounded | 9999px | 아이콘 버튼, 알약형 링크 버튼 |

- 테두리: 기본 1px, borderTertiary rgba(24,26,28,.11)(칩, 아웃라인 요소). 포커스 테두리 2px(select), mint6 #00c9b9(키보드 포커스).

### 고도
- 위계는 먼저 면 색으로 만든다: 바탕 #f3f5f7 위에 #ffffff 카드·시트.
- 그림자는 3단계뿐이다.
  - shadow-level1: 0 2px 8px rgba(0,0,0,.06) — 약한 띄움
  - shadow-level2: 0 2px 8px rgba(0,0,0,.12) — 카드 띄움
  - shadow-level3: 0 2px 10px rgba(0,0,0,.18) — 팝업·툴팁
  - 버튼 토큰은 그림자를 쓰지 않는다(`filledButton-shadow: none`).

### 모션
- 스프링 방식 변수가 있다. 길이 단위는 변수에 적혀 있지 않다. 초(s)로 보이지만 확인 필요.

| 모션 토큰 | 값 |
|---|---|
| duration-fastest | 0.17 |
| duration-fast | 0.25 |
| duration-default | 0.33 |
| duration-slow | 0.66 |
| bounce-smooth | 0 |
| bounce-snappy | 0.15 |
| bounce-bounce | 0.3 |

- 길이 4단계와 튕김 3단계를 조합한다. 어느 부품에 어느 조합을 쓰는지는 확인 필요.
- 동작 줄이기(reduced motion) 대응: 확인 필요.

### Don't
- 버튼에 그림자를 넣지 않는다(`filledButton-shadow: none`).
- 카드·팝업 그림자를 0 2px 8~10px보다 크게 번지게 하지 않는다.
- 전체 화면 시트 위 모서리를 둥글게 하지 않는다(0px).
- 16px·20px 모서리를 버튼·칩에 쓰지 않는다. 버튼은 8·12px, 칩 12px.

## 6. 컴포넌트
컴포넌트 이름과 값은 `--com-mint-*` 변수에서 읽었다. 높이는 변수에 없어서 확인 필요. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
**크기**

| 크기 | 높이 | 좌우 여백(outlined) | 모서리 | 글자 |
|---|---|---|---|---|
| S | 확인 필요 | 8px | 8px | labelSmall Emphasized 12px/700 |
| M | 확인 필요 | 12px | 8px | labelMedium Emphasized 14px/700 |
| L | 확인 필요 | 16px | 12px | labelLarge Emphasized 16px/700 |

**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| filled · mint | 채움 #0cefd3, 글자 #000000, 모서리 S·M 8px / L 12px, 좌우 패딩 확인 필요 | 주 행동 |
| filled · black | 채움 #000000, 글자 #ffffff, 모서리 S·M 8px / L 12px, 좌우 패딩 확인 필요 | 주 행동(반전), 민트 면 위 |
| filled · gray | 채움 rgba(0,0,51,.04), 글자 #181a1c, 모서리 S·M 8px / L 12px, 좌우 패딩 확인 필요 | 보조 행동 |
| outlined | 투명, 글자 #181a1c, 모서리 S·M 8px / L 12px, 좌우 패딩 S 8px · M 12px · L 16px | 보조 행동 |
| text | 투명, 모서리 0px, 패딩 0px, 아이콘 간격 2~4px | 글자 링크형 행동 |
| filledIcon | 모서리 9999px, 패딩 0px | 아이콘만 있는 버튼 |

- 안내 페이지 실측: 알약형 검정 링크 버튼 228×58px, 패딩 16px 32px, 18px/700, 모서리 9999px. 흰 버튼 152×54px(앱 내려받기 버튼으로 보임), 흰 바탕, 모서리 12px, 패딩 14px 19px.
- 상태: hover는 rgba(0,0,0,.04), 눌림은 rgba(0,0,0,.08)을 위에 겹친다. 검정 버튼은 흰색 겹침(hover .04, 눌림 .1). 포커스는 민트 버튼 rgba(0,0,0,.38) 테두리, 검정·회색 버튼 #00c9b9 테두리. 비활성·로딩은 확인 필요.
- 글자: 크기별 labelSmall/Medium/Large Emphasized(700).
- 쓰지 않는 때: 버튼에 그림자를 넣지 않는다(`filledButton-shadow: none`). 민트 버튼에 흰 글자를 쓰지 않는다.

**규칙**
- 주 행동은 민트 채움 하나. 민트 면 위에서는 검정 채움으로 바꾼다. (관찰에서 정리)
- 상태는 색을 바꾸지 않고 겹침(hover .04 / 눌림 .08)으로 표시한다.
- 아이콘만 있는 filledIcon에는 `aria-label`을 단다(구현 권장). 높이가 확인되지 않았으니 44pt 터치 영역을 따로 확인한다(구현 권장).

### 6.2 입력창
- 검색창(searchField): 채움 rgba(0,0,51,.04), 테두리 없음, placeholder rgba(24,26,28,.56), 커서 #00c9b9, 아이콘·글자 간격 6px.
- 한 줄·여러 줄 입력, 비밀번호 입력(secureField), 선택 상자(select) 토큰이 따로 있다. 선택 상자 포커스 테두리 2px.
- 높이·내부 패딩: 확인 필요.
- 상태: 포커스(2px #00c9b9)만 확인. 오류·비활성은 확인 필요.
- 규칙: 검색창은 테두리 없이 회색 채움으로, 포커스만 민트로 드러낸다. (관찰에서 정리)
- placeholder(.56, 4.0:1)를 라벨 대신 쓰지 않는다. 오류는 `aria-invalid`와 문구로(구현 권장).

### 6.3 칩·탭·선택
- 칩: 모서리 12px. 선택 시 검정 채움 + 흰 글자, 미선택 시 테두리 rgba(24,26,28,.11).
- 탭: 패딩 상하 12px · 좌우 6px, 간격 4px, 선택 안 된 글자 #181a1c. 고정 탭(fixedTabs)과 가로 스크롤 탭(scrollableTabs) 두 종류. 선택 표시 값은 확인 필요.
- 세그먼트 컨트롤: 바깥 모서리 12px, 선택 표시 모서리 10px.
- 스위치: 켜짐 채움 #000000, 꺼짐 손잡이 #ffffff.
- 체크박스: 모서리 4px.
- 규칙: 선택은 검정 채움(칩·스위치)으로 표시하고 민트로 칠하지 않는다. (관찰에서 정리)
- 탭에는 `role="tab"`·`aria-selected`, 스위치에는 `role="switch"`·`aria-checked`(구현 권장).

### 6.4 카드·리스트
- 리스트 항목: 패딩 상하좌우 16px, 요소 간격 10px. 구분선 separatorPrimary rgba(24,26,28,.06).
- 리스트 머리(listHeader) 토큰 있음. 값은 확인 필요.
- 카드 면: surfaceContainer #ffffff 위에 놓고 바탕은 #f3f5f7. 카드 띄움은 shadow-level2.

### 6.5 상단 바·하단 탭 바
- 상단 바(topBar): 채움 투명. 높이 확인 필요.
- 하단 탭 바: 확인 필요.

### 6.6 바텀시트·모달
- 다이얼로그: 아래 여백 90px 토큰이 있다. 나머지 값 확인 필요.
- 전체 화면 시트(fullSheet): 위 모서리 0px.
- 뒤 딤: rgba(0,0,0,.5)(`base` 테마 .3).
- 열리면 포커스를 안으로 옮기고 `Esc`로 닫는다. `role="dialog"`, `aria-modal="true"`(구현 권장).

### 6.7 토스트·배지·툴팁
- 스낵바: 패딩 상하 12px, 요소 간격 8px, 채움 변수는 투명(실제 배경은 다른 층에서 칠하는 것으로 보임, 확인 필요).
- 인라인 배지: 모서리 4px, 패딩 4px. 회색 rgba(0,0,51,.04) · 파랑 #edf7ff · 빨강 #ffeeef.
- 숫자 배지: 채움 #f13fa1.
- 툴팁: 강조형(highlightTooltip)과 정보형(informationTooltip) 두 종류. 값 확인 필요. 그림자는 shadow-level3.
- 상태 배지는 바탕 1단계 + 글자 5단계 조합을 쓰고, 색만으로 뜻을 전하지 않게 글자를 함께 둔다(구현 권장). 스낵바는 `role="status"`(구현 권장).

### 6.8 아이콘·이미지
- 아이콘 스타일·크기: 확인 필요.
- 일러스트·사진: 안내 페이지는 민트 단색 면 위에 큰 문구와 앱 화면 이미지를 번갈아 놓는다.

## 7. 패턴
- 목록 → 상세: 확인 필요(앱 화면을 보지 않았다). 토큰상 리스트는 #f3f5f7 바탕 위 #ffffff 면, 항목 패딩 16px이다.
- 검색: searchField 토큰(회색 채움, 테두리 없음, 민트 커서)만 확인. 화면 흐름은 확인 필요.
- 빈 상태·오류: 확인 필요(앱 화면을 보지 않았다).
- 폼·결제: 확인 필요.

### 안내 문구 꼴
9장 문구 구조("[행동]해도 [행동]해도 / [혜택] 무료", 둘째 줄에 핵심 혜택)를 따른 예:
```
골라도 골라도
배달팁 무료
가까운 가게부터 먼저 보여 드려요.
```
(예시 문구, SylviaLab 작성. 실제 화면 문장 아님)
- 안내(랜딩) 페이지: 민트 단색 면 위에 큰 문구(72px 브랜드 글꼴 또는 60px/800)와 앱 화면 이미지를 번갈아 놓고, 20px 설명을 붙인다. 아래 검정 푸터에 30px 링크와 14px 회사 정보.

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값). 투명도 글자는 흰 바탕에 겹친 값으로 계산했다.

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #181a1c | #ffffff | 17.5:1 | 통과 |
| #181a1c | #f3f5f7 | 16.0:1 | 통과 |
| rgba(24,26,28,.78) | #ffffff | 8.6:1 | 통과 |
| rgba(24,26,28,.56) | #ffffff | 4.0:1 | 미달(큰 글자 3:1은 통과) |
| rgba(24,26,28,.33) | #ffffff | 2.1:1 | 미달 |
| #000000 | #0cefd3 | 14.3:1 | 통과 |
| #ffffff | #000000 | 21.0:1 | 통과 |
| #1a7cff | #ffffff | 3.9:1 | 미달(큰 글자 3:1은 통과) |
| #5f57ff | #ffffff | 4.9:1 | 통과 |
| #ff403e | #ffffff | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #b1b3b5 | #000000 | 10.0:1 | 통과 |
| #7e8082 | #000000 | 5.3:1 | 통과 |

- 설명·placeholder(.56)는 본문 기준에 조금 못 미친다. 성공 #00b96b(2.6:1)·주의 #ff8400(2.5:1)은 흰 바탕 글자로 쓰면 큰 글자 기준도 못 넘으니 면·아이콘으로 쓴다.
- 터치 영역: 컴포넌트 높이는 변수에 없어 확인 필요. 안내 페이지 실측 버튼은 228×58px, 152×54px로 44pt 기준을 넘는다.
- 최소 글자 크기: captionSmall·detail 10px(4번째 크기 설정 기준). 크기 설정을 올리면 커진다.
- 포커스·스크린리더·글자 확대(점검 목록은 아래): 포커스 테두리 토큰이 있다(민트 버튼 rgba(0,0,0,.38), 검정·회색 버튼 #00c9b9, select 2px). 글자 확대는 7단계 크기 설정 클래스로 한다(예: bodyMedium 12~20px). 스크린리더는 확인 필요.

### 점검 목록
- [x] 키보드 포커스 표시 토큰이 있다(민트 버튼 rgba(0,0,0,.38), 그 밖 #00c9b9, select 2px)
- [x] 글자 확대: 7단계 크기 설정(bodyMedium 12~20px)
- [ ] 크기 설정 최대 단계에서 버튼·리스트가 잘리지 않는가 (확인 필요)
- [ ] placeholder .56(4.0:1)를 꼭 필요한 정보에 쓰지 않는가 (구현 권장)
- [ ] 아이콘 버튼에 `aria-label`, 이미지에 대체 텍스트가 있는가 (확인 필요)
- [ ] 버튼·아이콘 버튼 높이가 44pt 이상인가 (확인 필요)
- [ ] 상태 색(성공·주의)을 글자 없이 쓰지 않는가 (구현 권장)

## 9. 글쓰기 톤
- 말투: 짧은 구어체. 같은 말을 두 번 반복해 리듬을 만들고, 낱말 뒤에 하이픈(-)을 붙여 소리를 늘이듯 쓴다. 큰 문구는 명사로 끝나는 경우가 많고, 설명 문장은 "~요", "~니다"로 끝난다.
- 문구 꼴(구조만): "[행동]해도 [행동]해도 / [혜택] 무료" 처럼 두 줄로 나누고, 둘째 줄에 핵심 혜택을 둔다. 설명 문장은 20px 한두 줄로 붙인다.
- 버튼 문구 꼴: 확인 필요.
- 숫자·단위 표기: 지역 제한 같은 단서는 옅은 글자(투명도 .2)로 별표를 달아 아래에 둔다. 그 밖은 확인 필요.

## 10. Do & Don't
관찰 기반 문서의 규칙은 "이 서비스 화면에서 반복되는 규칙"을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 민트 #0cefd3 버튼에는 #000000 글자를 올린다.
- 화면 바탕은 #f3f5f7, 카드·시트 면은 #ffffff로 나눈다.
- 보조 글자는 #181a1c에 투명도(.78/.56/.33/.18)를 걸어 만든다.
- 버튼 모서리는 S·M 8px, L 12px, 칩·세그먼트 컨트롤 12px, 배지·체크박스 4px로 둔다.
- 간격은 8px 단위(4·8·12·16·24·32) 토큰에서 고른다. 리스트 항목은 16px.
- 눌림은 rgba(0,0,0,.08), hover는 rgba(0,0,0,.04)를 위에 겹쳐 표시한다.
- 키보드 포커스는 #00c9b9 테두리로 보인다.

### Don't
- 버튼에 그림자를 넣지 않는다. 그림자는 카드·팝업에 0 2px 8~10px만 쓴다.
- 민트 버튼에 흰 글자를 쓰지 않는다.
- 브랜드 글꼴(한나체·주아체 등)을 본문·버튼 글자에 쓰지 않는다.
- 혜택 표시에 민트를 쓰지 않는다. 혜택은 보라 #5f57ff다.
- 글자에 자간을 주지 않는다(tracking 0px).
- 성공 #00b96b·주의 #ff8400을 흰 바탕 본문 글자로 쓰지 않는다(대비 2.6:1, 2.5:1).

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음. baemin.com에 CSS 변수 `--ref-*`(원색), `--sem-mint-*`·`--sem-base-*`(의미), `--com-mint-*`(컴포넌트)가 실려 있다(1,746개).
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공개 자료 없음
- 버전·변경 관리: 공개 자료 없음
- 글꼴 배포: 공식 글꼴 12종을 woowahan.com/fonts에서 무료 배포한다.

## 12. AI에 넣을 때
```
배달의민족 스타일로 디자인해 줘.
- 주색: 민트 #0cefd3 (보조 #00c9b9), 버튼 글자는 검정 #000000
- 배경: 화면 #f3f5f7, 카드 #ffffff, 본문 글자 #181a1c
- 상태: 성공 #00b96b, 주의 #ff8400, 오류 #ff403e, 혜택 #5f57ff
- 글꼴: 시스템 글꼴(system-ui), 자간 0. 큰 광고 문구만 배민 글꼴(한나체·주아체 등)
- 글자: 본문 14/21, 큰 본문 16/24, 섹션 제목 18~22 bold, 화면 제목 26~32 bold
- 모서리: 버튼 8px(큰 버튼 12px), 칩 12px, 배지 4px, 아이콘 버튼 원형
- 간격 단위: 8px (4·12·16·24·32), 리스트 패딩 16px
- 버튼: 민트 채움+검정 글자 / 검정 채움+흰 글자 / 회색 rgba(0,0,51,.04) 채움
- 그림자: 0 2px 8px rgba(0,0,0,.06~.12)만, 버튼엔 없음
- 분위기: 밝은 민트 면, 큰 굵은 문구, 짧고 재치 있는 말투
```

## 13. 참고 자료
- https://www.baemin.com/ (확인 2026-10-31) — CSS 변수(`--ref-*`, `--sem-mint-*`, `--sem-base-*`, `--com-mint-*`)와 화면 computed style 실측
- https://www.woowahan.com/fonts (확인 2026-10-31) — 공식 글꼴 목록과 공개 연도
- https://www.sandollcloud.com/free-font/626/BM-HANNA-Pro (확인 2026-10-31) — 배민 글꼴 라이선스 요약(권리자 우아한형제들 표기)

근거와 한계
- 공식 디자인 시스템 문서는 공개되어 있지 않다. 색·글자·간격·모서리·컴포넌트 값은 모두 baemin.com 안내 페이지에 실린 CSS 변수와 화면 계산값이다.
- 이 변수들이 앱 화면에도 같은 값으로 쓰이는지는 확인하지 못했다. 앱 화면은 열어 보지 않았다.
- 실측은 데스크톱 한 화면(안내 페이지)만 했다. 목록·상세 화면이 웹에 없어 CLAUDE.md의 "최소 3개 화면" 기준을 채우지 못했다. 반복 값 대신 변수 정의를 근거로 삼았다.
- 다크 모드 값, 컴포넌트 높이, 아이콘 규격, 모션 단위는 찾지 못했다.
- 관찰한 값은 사이트가 바뀌면 달라질 수 있다.
- 접근성 대비는 SylviaLab이 위 HEX·rgba 값으로 계산한 것이다.
- 서비스 이름, 글꼴, 브랜드는 우아한형제들의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
공개 패키지는 없다. baemin.com에 실린 CSS 변수의 앞머리와 이 문서 토큰의 관계만 적는다. 변수 이름 전체 철자는 페이지에서 다시 확인한다.

| DESIGN.md | baemin.com CSS 변수 |
|---|---|
| `colors.mint1`~`mint8`, `gray1`~`gray12` 등 | `--ref-color-*` |
| `colors.primary`, `text-secondary`, `separator` 등 | `--sem-mint-color-*` (systemMainPrimary, foregroundSecondary, separatorPrimary …) |
| `base` 테마 값 | `--sem-base-color-*` |
| `spacing.spacing-*` | `--ref-spacing-*` |
| `components.*` | `--com-mint-*` (filledButton, searchField, listItem, chip, tab, snackbar …) |
| `elevation.button` | `filledButton-shadow: none` |

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 공식 글꼴 12종과 공개 연도, 라이선스 요약(woowahan.com/fonts). 디자인 토큰 공식 문서는 없다.
- **화면에서 잰 값(관찰)**: baemin.com에 실린 CSS 변수 값(원색·의미·컴포넌트 색, 글자 크기·행간, 간격, 모서리, 그림자, 모션, 포커스) 그리고 안내 페이지 computed style(72·60·20·30·14px 글자, 버튼 228×58·152×54px, 본문 폭 1128px). 회사가 서비스에 실은 값이지만 문서로 공개한 것은 아니라 관찰로 분류한다.
- **SylviaLab이 정리·권장한 것**: 원칙 5개, 역할별 색 설명, 투명도 rgba를 #rrggbbaa로 옮긴 표기, 각 장의 규칙·Don't, 7장 예시 문구, 접근성 대비 계산값과 `(구현 권장)` 항목.
- **확인 못 한 것**: 다크 모드, 컴포넌트 높이, 앱 화면 전반(목록·상세·결제), 아이콘 규격, 모션 단위, 상단·하단 바 값.
