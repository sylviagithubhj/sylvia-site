---
version: "1.0"
name: "토스"
description: "흰 바탕·푸른 회색 글자·파랑 #3182f6 하나에, 라이트·다크를 한 이름으로 바꾸는 adaptive 색 토큰과 OS 글자 크기를 따르는 20단계 글자 토큰을 npm 패키지로 배포하는 금융 앱 시스템"
source:
  - "공개 문서"
  - "https://developers-apps-in-toss.toss.im/design/components"
  - "https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md"
  - "npm @toss/tds-colors 0.1.0 (colors.light.css, colors.dark.css)"
  - "npm @toss/tds-typography 0.0.3"
  - "npm @toss/tds-mobile 2.5.1"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 색 — Primitive (tds-colors 라이트 값, 50~900 단계)
#    화면 코드에서는 아래 semantic 이름을 먼저 쓴다.
# ─────────────────────────────────────────────
colors:
  # Blue — 브랜드·행동
  blue50: "#e8f3ff"
  blue100: "#c9e2ff"      # disabledBlue500과 같은 값
  blue200: "#90c2ff"
  blue300: "#64a8ff"      # primary weak 버튼 바탕(15% 투명)
  blue400: "#4593fc"
  blue500: "#3182f6"      # 대표색. primary fill 버튼, 강조, 안내
  blue600: "#2272eb"      # primary weak 버튼 글자
  blue700: "#1b64da"      # light 버튼 글자
  blue800: "#1957c2"
  blue900: "#194aa6"

  # Grey — 푸른 기가 섞인 회색
  grey50: "#f9fafb"
  grey100: "#f2f4f6"
  grey200: "#e5e8eb"
  grey300: "#d1d6db"
  grey400: "#b0b8c1"
  grey500: "#8b95a1"
  grey600: "#6b7684"
  grey700: "#4e5968"
  grey800: "#333d4b"
  grey900: "#191f28"
  white: "#ffffff"

  # 상태 계열 (확인한 단계만)
  red50: "#ffeeee"
  red100: "#ffd4d6"
  red300: "#fb8890"      # danger weak 바탕(15% 투명)
  red500: "#f04452"
  red600: "#e42939"      # danger weak 글자
  red700: "#d22030"
  green50: "#f0faf6"
  green100: "#aeefd5"
  green300: "#3fd599"
  green500: "#03b26c"
  green700: "#029359"
  orange50: "#fff3e0"
  orange300: "#ffbd51"
  orange500: "#fe9800"
  orange700: "#f57800"
  yellow50: "#fff9e7"
  yellow300: "#ffdd78"
  yellow500: "#ffc342"
  yellow700: "#faa131"
  teal500: "#18a5a5"
  purple500: "#a234c7"

  # ── Semantic (화면에서는 이 이름을 쓴다) ──
  primary: "{colors.blue500}"
  primary-strong: "{colors.blue600}"
  primary-light-text: "{colors.blue700}"
  primary-weak: "{colors.blue50}"
  primary-disabled: "{colors.blue100}"
  background: "{colors.white}"
  layered-background: "{colors.white}"
  float-background: "{colors.white}"
  grey-background: "{colors.grey100}"
  background-level-b01: "{colors.grey100}"
  pc-screen-bg: "#f6f7f9"
  hairline: "{colors.grey200}"
  border-disabled: "{colors.grey300}"
  text-title: "{colors.grey900}"
  text-strong: "{colors.grey800}"
  text-body: "{colors.grey700}"
  text-secondary: "{colors.grey600}"
  text-tertiary: "{colors.grey500}"
  text-disabled: "{colors.grey400}"
  text-inverse: "{colors.white}"
  success: "{colors.green500}"
  warning: "{colors.orange500}"
  danger: "{colors.red500}"
  info: "{colors.blue500}"
  dimmed: "#00000033"     # dimmedBackground rgba(0,0,0,0.2)

  # ── 다크 모드 (같은 adaptive 이름의 다크 값) ──
  blue400-dark: "#2970d9"
  blue500-dark: "#3485fa"
  blue600-dark: "#449bff"
  blue50-dark: "#202c4d"
  background-dark: "#17171c"
  layered-background-dark: "#202027"
  float-background-dark: "#2c2c35"
  background-level-b01-dark: "#101013"
  grey50-dark: "#202027"
  grey100-dark: "#2c2c35"
  grey200-dark: "#3c3c47"
  grey300-dark: "#4d4d59"
  grey400-dark: "#62626d"
  grey500-dark: "#7e7e87"
  grey600-dark: "#9e9ea4"
  grey700-dark: "#c3c3c6"
  grey800-dark: "#e4e4e5"
  grey900-dark: "#ffffff"
  green500-dark: "#16bb76"
  orange500-dark: "#f18600"
  red500-dark: "#f04251"

# ─────────────────────────────────────────────
# 2. 글자 — tds-typography (OS 기본 글자 크기 iOS Large 기준)
#    t = 큰 단계, st = 사이를 메우는 단계. 굵기는 패키지에 정해진 것만.
# ─────────────────────────────────────────────
typography:
  font-family: "Toss Product Sans, SF Pro KR, SF Pro Display, -apple-system, BlinkMacSystemFont, Apple SD Gothic Neo, Roboto, Noto Sans KR, sans-serif"
  font-weight-regular: 400
  font-weight-medium: 500
  font-weight-semibold: 600
  font-weight-bold: 700
  t1: { fontSize: "30px", lineHeight: "40px" }      # iOS xxxLarge에서 42px
  st1: { fontSize: "29px", lineHeight: "38px" }
  st2: { fontSize: "28px", lineHeight: "37px" }
  st3: { fontSize: "27px", lineHeight: "36px" }
  t2: { fontSize: "26px", lineHeight: "35px" }
  st4: { fontSize: "25px", lineHeight: "34px" }
  st5: { fontSize: "24px", lineHeight: "33px" }
  st6: { fontSize: "23px", lineHeight: "32px" }
  t3: { fontSize: "22px", lineHeight: "31px" }
  st7: { fontSize: "21px", lineHeight: "30px" }
  t4: { fontSize: "20px", fontWeight: 700, lineHeight: "29px" }    # ListHeader large
  st8: { fontSize: "19px", lineHeight: "28px" }
  st9: { fontSize: "18px", lineHeight: "27px" }
  t5: { fontSize: "17px", fontWeight: 400, lineHeight: "25.5px" }  # 기본 본문, large·xlarge 버튼
  st10: { fontSize: "16px", fontWeight: 400, lineHeight: "24px" }  # Text 기본값
  t6: { fontSize: "15px", fontWeight: 500, lineHeight: "22.5px" }  # medium 버튼
  st11: { fontSize: "14px", fontWeight: 500, lineHeight: "21px" }
  t7: { fontSize: "13px", fontWeight: 400, lineHeight: "19.5px" }  # small 버튼, 캡션
  st12: { fontSize: "12px", fontWeight: 600, lineHeight: "18px" }
  st13: { fontSize: "11px", fontWeight: 500, lineHeight: "16.5px" } # 최소 크기

# 모서리 — 공통 radius 표는 없고, 컴포넌트 크기마다 정해져 있다
rounded:
  button-sm: "8px"
  button-md: "10px"
  bubble-sm: "12px"
  button-lg: "14px"
  button-xl: "16px"
  bubble-md: "16px"
  bubble-lg: "18px"
  full-width: "0px"

# 간격 — 공식 간격 토큰 표는 없다. 버튼·말풍선 코드에서 쓰인 여백 값
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "10px"
  md: "12px"
  lg: "16px"
  xl: "20px"
  xxl: "28px"

size:
  button-sm: "32px"
  button-md: "38px"
  button-lg: "48px"
  button-xl: "56px"
  icon-min: "24px"
  icon-max: "40px"
  app-logo: "600px"

border-width:
  hairline: "1px"

layout:
  miniapp-viewport-portrait: "약 360×640 ~ 420×740"
  miniapp-viewport-landscape: "약 640×360 ~ 740×420"
  safe-area: "노치·다이내믹 아일랜드·홈 바를 피한다"

motion:
  easing-default: "cubic-bezier(.25,.1,.25,1)"
  duration-default: "0.5s"
  easing-ease: "cubic-bezier(.6,0,0,.6)"
  easing-expo: "cubic-bezier(.16,1,.3,1)"
  easing-back: "cubic-bezier(.34,1.56,.64,1)"

# ─────────────────────────────────────────────
# 3. 컴포넌트 토큰 (tds-mobile 2.5.1)
# ─────────────────────────────────────────────
components:
  # 크기 — 높이는 최소 높이
  button-small: { height: "{size.button-sm}", minWidth: "52px", paddingX: "{spacing.sm}", rounded: "{rounded.button-sm}", typography: "{typography.t7}" }
  button-medium: { height: "{size.button-md}", minWidth: "64px", paddingX: "{spacing.lg}", rounded: "{rounded.button-md}", typography: "{typography.t6}" }
  button-large: { height: "{size.button-lg}", minWidth: "80px", paddingX: "{spacing.lg}", rounded: "{rounded.button-lg}", typography: "{typography.t5}" }
  button-xlarge: { height: "{size.button-xl}", minWidth: "96px", paddingX: "{spacing.xxl}", rounded: "{rounded.button-xl}", typography: "{typography.t5}" }   # 기본
  button-full: { rounded: "{rounded.full-width}" }
  # 색 × 변형
  button-primary-fill: { backgroundColor: "{colors.primary}", textColor: "{colors.text-inverse}" }
  button-primary-weak: { backgroundColor: "{colors.blue300}", backgroundOpacity: 0.15, textColor: "{colors.primary-strong}" }
  button-danger-fill: { backgroundColor: "{colors.danger}", textColor: "{colors.text-inverse}" }
  button-danger-weak: { backgroundColor: "{colors.red300}", backgroundOpacity: 0.15, textColor: "{colors.red600}" }
  button-dark-fill: { backgroundColor: "{colors.grey700}", textColor: "{colors.text-inverse}" }
  button-dark-weak: { backgroundColor: "greyOpacity100", textColor: "{colors.grey700}" }
  button-light-fill: { backgroundColor: "{colors.white}", textColor: "{colors.primary-light-text}" }
  button-weak-dark-mode: { backgroundColor: "600 단계", backgroundOpacity: 0.22, textColor: "400 단계" }
  button-loading: { indicator: "점 세 개", keepWidth: true }
  button-disabled: { interactive: false }

  badge-xsmall: { fontSize: "10px", fontWeight: 600, padding: "3px 7px", rounded: "9px" }
  badge-small: { fontSize: "12px", fontWeight: 700, padding: "3px 7px", rounded: "11px" }
  badge-medium: { fontSize: "13px", fontWeight: 700, padding: "3px 7px", rounded: "12px" }
  badge-large: { fontSize: "14px", fontWeight: 700, padding: "4px 8px", rounded: "13px" }

  list-header-large: { typography: "{typography.t4}", descriptionSize: "13px" }
  list-header-medium: { fontSize: "17px", fontWeight: 700, descriptionSize: "12px" }
  list-header-small: { fontSize: "15px", fontWeight: 500 }
  list-header-xsmall: { fontSize: "13px", fontWeight: 400 }
  list-divider: { backgroundColor: "{colors.hairline}", height: "{border-width.hairline}" }
  bubble: { typography: "{typography.st10}" }
  dialog-dim: { backgroundColor: "{colors.dimmed}" }
---

# 토스 디자인 시스템

> 근거: 공개 문서 기반 (앱인토스 개발자 문서 + npm 공개 패키지 @toss/tds-colors 0.1.0, @toss/tds-typography 0.0.3, @toss/tds-mobile 2.5.1)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 다르면 YAML 값이 우선한다.

## 1. 개요와 원칙
- 서비스 성격: 송금·결제·자산관리를 한 앱에서 하는 금융 슈퍼앱. 외부 파트너가 토스 안에 넣는 미니앱(앱인토스)도 같은 시스템을 쓴다.
- 디자인 인상 한 줄: 흰 바탕, 푸른 회색 글자, 파랑(#3182f6) 하나. 큰 글자와 넉넉한 둥근 버튼으로 한 화면에 한 가지 일만 시킨다.
- 공식 시스템 이름: TDS (Toss Design System). 미니앱용 React 구현은 TDS Mobile.
- 디자인 원칙(공개 문서에 원칙 목록은 없어, 앱인토스 문서 규칙과 패키지 값에서 정리):
  1. 한 화면에 한 가지 일. 핵심 그래픽도 한 화면에 하나다. (관찰에서 정리, 근거: 앱인토스 UI/UX 가이드)
  2. 사용자를 붙잡지 않는다. 진입하자마자 홍보·알림 바텀시트를 띄우지 않고, 대화상자 왼쪽 버튼은 "닫기"로 쓴다. (관찰에서 정리, 근거: 앱인토스 UI/UX 가이드)
  3. 글자는 사용자 설정을 따른다. 글자 크기가 OS 글자 크기 설정을 따라 커진다. (관찰에서 정리, 근거: tds-typography)
  4. 라이트·다크를 한 이름으로. 색 토큰이 `adaptive`로 시작해 모드마다 다른 값을 낸다. (관찰에서 정리, 근거: tds-colors)
  5. 그림자보다 면과 선. 구획은 #f2f4f6 면과 1px #e5e8eb 선, 다크 모드는 면 밝기로 층을 나눈다. (관찰에서 정리)
- 톤: 해요체로 짧게, 한 화면에 한 가지 일.

### 특장점
- 색 토큰이 모드를 스스로 바꾼다 — `adaptive` 토큰 하나가 라이트·다크에서 다른 값을 낸다(blue500 #3182f6 → #3485fa, grey900 #191f28 → #ffffff, background #ffffff → #17171c). 다크 모드는 그림자 대신 background #17171c → layered #202027 → float #2c2c35로 면 밝기를 올려 층을 나눈다.
- 글자 크기 토큰이 1px 단위 20단계다 — t1~t7과 그 사이를 메우는 st1~st13이 11~30px을 1px씩 채우고, iOS 접근성 크기·Android fontScale을 따라 커진다(iOS xxxLarge에서 t1 30px → 42px).
- 버튼 조합을 좁게 묶는다 — 색은 primary·danger·dark·light 네 가지, 변형은 fill·weak 두 가지뿐이고, 크기 4단계(32·38·48·56px)마다 모서리(8·10·14·16px)와 글자(t7·t6·t5)가 짝지어 있다.
- 시스템이 npm 패키지로 공개돼 있다 — @toss/tds-colors 0.1.0(colors.light.css·colors.dark.css), @toss/tds-typography 0.0.3, @toss/tds-mobile 2.5.1을 누구나 받아 값을 확인할 수 있고, 파트너 브랜드 색을 primary로 넣으면 버튼 색이 바뀐다.
- 글쓰기 규칙이 구체적이다 — 모든 상황 해요체, "되어요" 대신 "돼요", "~께" 대신 "~에게", 대화상자 왼쪽 버튼은 "취소" 대신 "닫기".

### 배울 점
- 다크 모드를 만들 때 토스처럼 색 이름 하나에 라이트·다크 값을 함께 묶고(adaptive), 다크에서는 그림자 대신 면 밝기 3단계로 층을 나눈다.
- 글자 크기 설정을 지원할 때 토스처럼 크기 토큰을 고정 px이 아니라 OS 설정별 표(예: t1 30px → 42px)로 만든다.
- 버튼을 설계할 때 토스처럼 크기 단계마다 높이·최소 폭·좌우 여백·모서리·글자를 한 줄로 묶어 표로 정한다(예: xlarge 56px·96px·28px·16px·17px).

### 관찰한 특징
- 색 이름이 `adaptive`로 시작한다. 같은 토큰이 라이트·다크에서 다른 값을 낸다.
- 글자 크기 토큰이 11~30px을 1px 단위로 20단계 촘촘히 나눈다(t1~t7 + st1~st13).
- 글자 크기가 OS 글자 크기 설정(iOS 접근성 크기, Android fontScale)을 따라 커진다.
- 버튼 색은 primary·danger·dark·light 네 가지, 채움(fill)과 연한(weak) 두 변형뿐이다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 HEX가 아니라 YAML 토큰 이름(`primary`, `text-body`, `hairline`)으로 쓴다. 토스 패키지를 쓸 수 있으면 `adaptive` 이름을 그대로 써서 다크 값이 저절로 바뀌게 한다.
- 화면 코드에서는 primitive(`blue500`, `grey700`)보다 semantic(`primary`, `text-body`)을 먼저 쓴다.
- 파랑 `primary`는 한 화면의 핵심 행동 하나(보통 아래쪽 xlarge 버튼)에 몰아준다. 빨강 `danger`는 오류·위험 행동에만.
- 글자 크기는 t·st 토큰으로만 고른다. 11px(st13) 아래 크기, 토큰 밖의 px을 새로 만들지 않는다.
- 판단이 어려우면 버튼은 xlarge 56px 하나, 구획은 그림자 대신 #f2f4f6 면, 문구는 해요체 짧은 문장을 고른다.

## 2. 색상
값은 npm `@toss/tds-colors`의 `colors.light.css`, `colors.dark.css`에서 읽었다. 아래 표는 라이트 값이고, 다크 값은 `### 다크 모드` 표에 모았다.

### 색 체계
TDS 색은 **단계 팔레트(primitive) → 역할(semantic)** 두 층으로 읽으면 쉽다. 패키지 안의 이름은 둘 다 `adaptive`로 시작하고, 모드가 바뀌면 같은 이름이 다른 값을 낸다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| 단계 팔레트 | `blue500`, `grey700`, `red300` | 토큰 정의, 컴포넌트 내부 조합(예: weak 버튼 바탕) |
| 역할 | `background`, `greyBackground`, `hairlineBorder`, `dimmedBackground` | 화면 바탕·구획·선·딤 |
| YAML 역할 이름 | `primary`, `text-body`, `danger` | 이 문서에서 SylviaLab이 붙인 이름. 글자 역할 매핑은 공식 표가 없어 컴포넌트 코드 쓰임으로 정리 |

- 색 계열은 blue·grey·red·green·orange·yellow·teal·purple 모두 50~900 10단계다. 이 문서에는 확인한 단계만 적었다.
- 투명 회색 단계(greyOpacity50~900)는 글자가 아니라 겹침 면용이다. 50은 rgba(0,23,51,0.02), 100은 0.05, 200은 0.1, 500은 0.46, 900은 rgba(2,9,19,0.91).

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| blue500 | #3182f6 | 주요 버튼(primary fill), 강조, 안내(info) |
| blue600 | #2272eb | 연한 버튼 글자(라이트) |
| blue400 | #4593fc | 파랑 단계(다크 연한 버튼 글자는 다크 표 참고) |
| blue700 | #1b64da | light 버튼 글자 |
| blue50 | #e8f3ff | 연한 파랑 면 |
| disabledBlue500 | #c9e2ff | 비활성 파랑 |

파랑 전체 단계(라이트): 50 #e8f3ff · 100 #c9e2ff · 200 #90c2ff · 300 #64a8ff · 400 #4593fc · 500 #3182f6 · 600 #2272eb · 700 #1b64da · 800 #1957c2 · 900 #194aa6

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| background | #ffffff | 기본 화면 바탕 |
| layeredBackground | #ffffff | 한 층 올라간 면 |
| floatBackground | #ffffff | 떠 있는 면(시트·팝오버) |
| grey50 | #f9fafb | 가장 옅은 면 |
| grey100 | #f2f4f6 | 회색 바탕(greyBackground), 구획 면 |
| backgroundLevelB01 | #f2f4f6 | 회색 계열 바탕 |
| pcScreenBg | #f6f7f9 | PC 화면 바깥 바탕 |
| grey200 | #e5e8eb | 얇은 구분선(hairlineBorder) |
| grey300 | #d1d6db | 비활성 테두리 |
| dimmedBackground | rgba(0,0,0,0.2) | 시트·모달 뒤 딤 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| grey900 | #191f28 | 제목·가장 진한 글자 |
| grey800 | #333d4b | 진한 글자 |
| grey700 | #4e5968 | 본문 글자, dark 버튼 채움 |
| grey600 | #6b7684 | 보조 글자, 설명 문단 |
| grey500 | #8b95a1 | 흐린 보조 글자 |
| grey400 | #b0b8c1 | 비활성 글자·아이콘 |

- 회색은 순수 회색이 아니라 푸른 기가 섞여 있다(#191f28, #4e5968). 다크 모드 회색은 반대로 거의 무채색이다.
- 글자 역할별(본문·보조) 공식 매핑 표는 공개 문서에서 찾지 못했다. 위 쓰임 열의 글자 역할은 컴포넌트 코드에서 쓰인 위치로 정리했다.

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (green500) | #03b26c | 완료, 수익 |
| warning (orange500) | #fe9800 | 주의 |
| error (red500) | #f04452 | 오류, danger 버튼 |
| info (blue500) | #3182f6 | 안내 |
| yellow500 | #ffc342 | 노랑 계열 기준 |
| teal500 | #18a5a5 | 청록 계열 기준 |
| purple500 | #a234c7 | 보라 계열 기준 |

모든 색 계열은 50~900 10단계다. 확인한 단계:
- red: 50 #ffeeee · 100 #ffd4d6 · 300 #fb8890 · 500 #f04452 · 600 #e42939 · 700 #d22030
- green: 50 #f0faf6 · 100 #aeefd5 · 300 #3fd599 · 500 #03b26c · 700 #029359
- orange: 50 #fff3e0 · 300 #ffbd51 · 500 #fe9800 · 700 #f57800
- yellow: 50 #fff9e7 · 300 #ffdd78 · 500 #ffc342 · 700 #faa131

### 역할별 색
- **파랑(primary, blue500)**: primary fill 버튼, 강조, 안내. weak 버튼은 blue300을 15% 투명으로 깔고 글자는 blue600, light 버튼 글자는 blue700. hover·pressed 단계는 공개 자료에서 확인 필요.
- **빨강(danger, red500)**: 오류, danger 버튼. weak 짝은 red300 15% 바탕 + red600 글자.
- **회색 글자 사다리**: 제목 grey900 → 본문 grey700 → 보조 grey600 → 흐린 글자 grey500 → 비활성 grey400. 진한 글자 grey800은 제목과 본문 사이.
- **dark 버튼(grey700)**: 파랑을 쓰기엔 무거운 중립 행동. weak 짝은 greyOpacity100 바탕 + grey700 글자.
- **light 버튼(white)**: 색 바탕 위 행동. fill은 흰 바탕 + blue700 글자, weak는 흰색 투명 바탕 + 흰 글자.
- **배지 색**: blue·green·yellow·orange·red·grey 여섯 가지에 fill·weak. 단계 조합 값은 확인 필요.

### 화면 모드
- 라이트·다크 두 모드를 패키지가 따로 낸다(`colors.light.css`, `colors.dark.css`). 같은 이름이 모드에 따라 값을 바꾸므로 HEX를 하드코딩하면 다크 모드가 깨진다.
- 다크에서 층은 background #17171c → layeredBackground #202027 → floatBackground #2c2c35 순서로 밝아진다. 라이트에서는 세 층이 모두 #ffffff다.
- 다크 weak 버튼은 600 단계 22% 투명 바탕에 400 단계 글자로 바뀐다(라이트는 300 단계 15% 바탕에 600 단계 글자).
- 고대비 모드: 공개 자료에서 확인 필요.

### 다크 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| blue500 | #3485fa | 주요 버튼, 강조 |
| blue600 | #449bff | 파랑 진한 단계 |
| blue400 | #2970d9 | 연한 버튼 글자(다크) |
| blue700 | 확인 필요 | light 버튼 글자 |
| blue50 | #202c4d | 연한 파랑 면 |
| disabledBlue500 | 확인 필요 | 비활성 파랑 |
| background | #17171c | 기본 화면 바탕 |
| layeredBackground | #202027 | 한 층 올라간 면 |
| floatBackground | #2c2c35 | 떠 있는 면 |
| backgroundLevelB01 | #101013 | 회색 계열 바탕 |
| grey50 | #202027 | 가장 옅은 면 |
| grey100 | #2c2c35 | 회색 바탕 |
| grey200 | #3c3c47 | 얇은 구분선 |
| grey300 | #4d4d59 | 비활성 테두리 |
| grey400 | #62626d | 비활성 글자·아이콘 |
| grey500 | #7e7e87 | 흐린 보조 글자 |
| grey600 | #9e9ea4 | 보조 글자 |
| grey700 | #c3c3c6 | 본문 글자 |
| grey800 | #e4e4e5 | 진한 글자 |
| grey900 | #ffffff | 제목 |
| green500 | #16bb76 | 성공 |
| orange500 | #f18600 | 주의 |
| red500 | #f04251 | 오류 |
| pcScreenBg | 확인 필요 | PC 화면 바깥 바탕 |
| dimmedBackground | 확인 필요 | 딤 |

### 색 사용 규칙
- 파랑 #3182f6은 주요 버튼(primary fill)과 강조·안내에 쓴다. 한 화면에 큰 파랑 버튼 하나를 둔다.
- 빨강 #f04452는 오류와 danger 버튼에만 쓴다.
- 초록 #03b26c는 완료·수익에 쓴다.
- 구획은 그림자 대신 #f2f4f6 면과 1px #e5e8eb 선으로 나눈다.
- 글자는 제목 #191f28 → 본문 #4e5968 → 보조 #6b7684 → 흐린 글자 #8b95a1 → 비활성 #b0b8c1 순서로 쓴다.
- 색은 HEX가 아니라 adaptive 토큰 이름으로 쓴다. 그래야 다크 모드 값으로 바뀐다.
- 파트너 미니앱은 브랜드 색을 primary로 넣어 버튼 색을 바꾼다.

### Don't
- HEX를 코드에 직접 박지 않는다. 다크 모드에서 #ffffff 바탕이 #17171c로 바뀌지 않는다.
- 빨강 #f04452를 할인·강조 같은 장식 색으로 쓰지 않는다. 오류·danger 버튼에만.
- 흐린 글자 #8b95a1, 비활성 #b0b8c1을 흰 바탕 본문 글자로 쓰지 않는다(대비 3.0:1, 2.0:1).
- 다크 모드에서 층을 그림자로 만들지 않는다. #17171c → #202027 → #2c2c35 면 밝기로 나눈다.
- 무채색 회색을 라이트 글자에 새로 섞지 않는다. 라이트 회색은 푸른 기가 있는 grey 단계(#191f28~#b0b8c1)만 쓴다.

## 3. 타이포그래피
- 글꼴: Toss Product Sans(토스 전용 글꼴, 외부 배포용 라이선스 확인 필요). 이모지는 Tossface.
- 대체 글꼴: 'SF Pro KR', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', sans-serif
- 굵기: regular 400, medium 500, semibold 600, bold 700.
- 행간: 작은 글자는 1.5배, 큰 글자로 갈수록 좁아져 30px에서 약 1.33배.

### 위계와 사용처
아래는 OS 기본 글자 크기(iOS Large) 기준이다. 1px = 1pt로 본다. 굵기 칸 `-`는 패키지에 굵기가 정해져 있지 않은 단계다. 모바일 앱 전용 시스템이라 PC 값은 따로 없다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| t1 | 30 | 확인 필요 | 40px | 가장 큰 제목·숫자, large 배지 기준 |
| st1 | 29 | - | 38px | 보조 단계 |
| st2 | 28 | - | 37px | 보조 단계 |
| st3 | 27 | - | 36px | 보조 단계 |
| t2 | 26 | 확인 필요 | 35px | 큰 제목 |
| st4 | 25 | - | 34px | 보조 단계 |
| st5 | 24 | - | 33px | 보조 단계 |
| st6 | 23 | - | 32px | 보조 단계 |
| t3 | 22 | 확인 필요 | 31px | 화면 제목급 |
| st7 | 21 | - | 30px | 보조 단계 |
| t4 | 20 | 700 | 29px | 큰 목록 머리말(ListHeader large) |
| st8 | 19 | - | 28px | 보조 단계 |
| st9 | 18 | - | 27px | 보조 단계 |
| t5 | 17 | 400 | 25.5px | 기본 본문, large·xlarge 버튼, ListHeader medium(700도 씀) |
| st10 | 16 | 400 | 24px | 본문(Text 기본값), 말풍선 |
| t6 | 15 | 500 | 22.5px | medium 버튼, 보조 본문(600도 씀) |
| st11 | 14 | 500 | 21px | 작은 설명 |
| t7 | 13 | 400 | 19.5px | small 버튼, 캡션(500·600도 씀) |
| st12 | 12 | 600 | 18px | 아주 작은 라벨 |
| st13 | 11 | 500 | 16.5px | 최소 크기 설명 |

- 이름 규칙: t(title)는 큰 단계, st(sub title)는 그 사이를 메우는 단계다.
- 글자 크기는 고정 px이 아니라 접근성 설정 표를 거친다. 예: iOS xxxLarge 설정에서 t1은 42px까지 커진다.

### 규칙
- 기본 본문은 t5 17px, Text 컴포넌트 기본값은 st10 16px, 보조 본문은 t6 15px, 캡션은 t7 13px.
- 버튼 글자는 크기에 따라 정해져 있다. small t7 13px, medium t6 15px, large·xlarge t5 17px.
- ListHeader 제목은 large 20px 굵게, medium 17px 굵게, small 15px 중간 굵기, xsmall 13px 보통. 설명은 large 13px, medium 12px.
- 가장 작은 글자는 st13 11px이다(배지 xsmall만 10px).
- 크기는 px로 고정하지 말고 토큰으로 써서 OS 글자 크기 설정을 따르게 한다.
- 화면 위계는 t 단계(30·26·22·20·17·15·13px)로 먼저 잡고, 그 사이 미세 조정이 필요할 때만 st 단계를 쓴다. (SylviaLab 정리)

### Don't
- 글자 크기를 px 고정값으로 박지 않는다. iOS xxxLarge에서 t1이 42px로 커지는 동작이 사라진다.
- 11px(st13)보다 작은 글자를 본문·설명에 쓰지 않는다. 10px은 배지 xsmall 한 곳뿐이다.
- 400·500·600·700 밖의 굵기를 쓰지 않는다.
- 버튼 크기와 글자 짝을 바꾸지 않는다(예: small 버튼에 t5 17px 금지).

## 4. 레이아웃·간격
- 기준 화면: 미니앱 논리 해상도 세로 약 360×640 ~ 420×740, 가로 약 640×360 ~ 740×420 중 하나를 고른다.
- 화면 좌우 여백(모바일/데스크톱): 확인 필요
- 기본 단위: 확인 필요 (공개 문서와 패키지에서 간격 토큰 표를 찾지 못했다. `Spacing` 컴포넌트만 있다.)
- 간격 단계(관찰, pt): 4, 8, 10, 12, 16, 20, 28 (공식 간격 토큰이 아니라 버튼·말풍선 코드에서 쓰인 여백 값)
- 그리드·최대 폭: 확인 필요

### 기준 화면과 그리드
| 구분 | 논리 해상도 | 컬럼 | 좌우 여백 |
|---|---|---|---|
| 세로 | 약 360×640 ~ 420×740 | 확인 필요 | 확인 필요 |
| 가로 | 약 640×360 ~ 740×420 | 확인 필요 | 확인 필요 |
| PC 화면 | 바깥 바탕 #f6f7f9(pcScreenBg) | 확인 필요 | 확인 필요 |

### 화면 세로 리듬
| 구간 | 값 |
|---|---|
| 상단 Top 제목 → 내용 | 확인 필요 |
| ListHeader → ListRow | 확인 필요 |
| ListRow 사이 | 1px hairline 선 |
| 내용 → 하단 BottomCTA | 확인 필요 |

- 컴포넌트 안쪽 여백만 확인됐다: 버튼 좌우 small 10px, medium·large 16px, xlarge 28px. 배지 상하 3~4px·좌우 7~8px.

### 간격 적용 규칙
- 버튼 좌우 여백은 small 10px, medium·large 16px, xlarge 28px.
- 노치·다이내믹 아일랜드·하단 홈 바는 Safe Area로 피한다. 레터박스(빈 띠)를 남기지 않는다.
- 에셋은 1x·2x면 충분하고, 세밀한 그래픽만 3x.
- 테스트는 비율이 다른 기기 3~5대로 한다.

### Don't
- 레터박스(위아래 빈 띠)를 남기지 않는다. 화면 비율이 달라도 Safe Area 안을 채운다.
- 노치·홈 바 영역에 버튼·글자를 두지 않는다.
- 4·8·10·12·16·20·28px 밖의 여백을 컴포넌트 안에 새로 만들지 않는다.
- 한 기기 비율만 보고 끝내지 않는다. 비율이 다른 기기 3~5대로 확인한다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| 버튼 small | 8px | 높이 32px 버튼 |
| 버튼 medium | 10px | 높이 38px 버튼 |
| 버튼 large | 14px | 높이 48px 버튼 |
| 버튼 xlarge | 16px | 높이 56px 버튼 |
| 버튼 full | 0px | 화면 가로 전체 버튼 |
| 말풍선 small | 12px | 말풍선(Bubble) |
| 말풍선 medium | 16px | 말풍선(Bubble) |
| 말풍선 large | 18px | 말풍선(Bubble) |
| 배지 | 9~13px | 크기별(xsmall 9 · small 11 · medium 12 · large 13), 6.6 배지 표 참고 |

- 모서리는 컴포넌트 크기에 따라 따로 정해져 있고, 공통 radius 토큰 표는 공개되지 않았다. 버튼이 커질수록 모서리도 커진다(32→8, 38→10, 48→14, 56→16px).
- 테두리: hairlineBorder 1px #e5e8eb (다크 #3c3c47), 목록 구분선.

### 고도
- 라이트에서는 면 색(#ffffff ↔ #f2f4f6)과 1px 선으로 층을 나눈다.
- 다크에서는 그림자 대신 면 밝기(background #17171c → layered #202027 → float #2c2c35)로 층을 나눈다.
- 시트·모달 뒤 딤은 검정 20%(dimmedBackground).
- 그림자 수치: 확인 필요.

### 모션
- 기본 이징 cubic-bezier(.25,.1,.25,1), 기본 길이 0.5초.
- 그 밖의 곡선: ease(.6,0,0,.6), expo(.16,1,.3,1), back(.34,1.56,.64,1), 스프링 프리셋. 곡선별 쓰는 곳은 확인 필요.
- 버튼 로딩은 점 세 개가 차례로 움직인다.
- 3D·모션 리소스는 토스가 주는 모듈 것만 쓴다(미니앱 규칙).
- 동작 줄이기(reduced motion) 대응: 확인 필요.

### Don't
- 버튼 크기와 모서리 짝을 섞지 않는다(예: 56px 버튼에 8px 모서리 금지).
- 화면 가로 전체(full) 버튼에 모서리를 주지 않는다. full은 0px.
- 미니앱에서 직접 만든 3D·모션 리소스를 넣지 않는다.
- 입자·과한 그라데이션 같은 효과를 그래픽에 넣지 않는다.

## 6. 컴포넌트
TDS Mobile이 내보내는 주요 컴포넌트: Button, TextButton, IconButton, BottomCTA·FixedBottomCTA, ListRow, ListHeader, ListFooter, Top, TopNavigation, Tab, SegmentedControl, Chip, Badge, TextField, SearchField, BottomSheet, AlertDialog, ConfirmDialog, Toast, Tooltip, Switch, Checkbox, Skeleton, ProgressBar, NumberKeypad 등. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
**크기**

| 크기 | 최소 높이 | 최소 폭 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|---|
| small | 32px | 52px | 10px | 8px | t7 13px |
| medium | 38px | 64px | 16px | 10px | t6 15px |
| large | 48px | 80px | 16px | 14px | t5 17px |
| xlarge(기본) | 56px | 96px | 28px | 16px | t5 17px |

**종류**

| 색 | fill(채움) | weak(연한) | 쓰는 곳 |
|---|---|---|---|
| primary(기본) | 바탕 #3182f6, 흰 글자 | 바탕 #64a8ff 15% 투명, 글자 #2272eb | 주요 행동 / 보조 행동 |
| danger | 바탕 #f04452, 흰 글자 | 바탕 #fb8890 15% 투명, 글자 #e42939 | 삭제·위험 행동 |
| dark | 바탕 #4e5968, 흰 글자 | 바탕 greyOpacity100, 글자 #4e5968 | 중립 행동 |
| light | 흰 바탕, 글자 #1b64da | 흰색 투명 바탕, 흰 글자 | 색 바탕 위 행동 |

- 다크 모드 weak는 600 단계 22% 투명 바탕에 400 단계 글자.
- 놓는 방식: inline(옆에 나란히), block(컨테이너 폭), full(가로 전체, 모서리 0).

**상태**
- 로딩: 점 세 개가 차례로 움직이고 버튼 폭은 그대로 둔다. 화면 낭독기에는 바쁨 상태를 알린다.
- 비활성: 누를 수 없고 흐리게 보인다. 로딩과 비활성을 함께 쓸 수 있다.
- 눌림(pressed)·hover 값: 확인 필요.

**규칙**
- 화면 아래 주요 행동은 xlarge primary fill 하나. 보조 행동은 weak로 낮춘다.
- 파트너 브랜드 색을 primary로 넣으면 버튼 색이 그 색으로 바뀐다.
- 버튼 문구는 다음 행동을 바로 말한다. [동사 + 기] 또는 [동사 + 요] 꼴.
- 쓰지 않는 때: 버튼 위에 부풀린 설명을 붙이거나 혜택만 반복하는 문구로 쓰지 않는다. danger는 오류·위험 행동 밖에서 쓰지 않는다.
- 접근성: 로딩 중 바쁨 상태 알림은 패키지 동작. 링크 이동이면 `<a>`, 동작이면 `<button>`을 쓴다(구현 권장). small·medium(32·38px)은 터치 영역 44pt보다 작으니 주변 여백으로 누를 곳을 넓힌다(구현 권장).

### 6.2 입력창
| 컴포넌트 | 쓰는 곳 | 높이·모서리 |
|---|---|---|
| TextField | 한 줄 입력 | 확인 필요 |
| SplitTextField | 칸이 나뉜 입력(쓰는 화면은 확인 필요) | 확인 필요 |
| SearchField | 검색 | 확인 필요 |
| TextArea | 여러 줄 입력 | 확인 필요 |
| NumberKeypad | 숫자 입력 전용 키패드 | 확인 필요 |

- 상태(포커스·오류·비활성): 확인 필요.
- 라벨은 입력창 밖에 보이게 두고, 오류는 `aria-invalid`와 문구로 함께 알린다(구현 권장).

### 6.3 칩·탭·선택
| 컴포넌트 | 쓰는 곳 |
|---|---|
| Tab | 화면 안 내용 전환 |
| SegmentedControl | 화면 안 보기 방식 전환 |
| Chip | 선택·필터 |
| Switch | 켜고 끄기 |
| Checkbox | 여러 개 고르기 |

- 크기·색·선택 상태 값: 확인 필요.
- 미니앱 하단 탭 바는 선택 사항이다. 쓰면 토스가 주는 떠 있는(floating) 형태만 쓰고, 탭은 2~5개.

### 6.4 카드·리스트
- ListRow: 왼쪽(아이콘·이미지) · 가운데(제목·설명) · 오른쪽(값·화살표) 세 칸 구조. 세부 여백 수치는 확인 필요.
- 구분선은 1px hairline(#e5e8eb, 다크 #3c3c47).
- Skeleton으로 불러오는 중을 표시한다.

| ListHeader 크기 | 제목 | 설명 |
|---|---|---|
| large | 20px 굵게(t4 700) | 13px |
| medium | 17px 굵게(700) | 12px |
| small | 15px 중간 굵기(500) | 확인 필요 |
| xsmall | 13px 보통(400) | 확인 필요 |

**규칙**
- 묶음 머리에 ListHeader, 아래 ListRow들, 끝에 ListFooter를 둔다.
- 행 사이는 그림자가 아니라 1px 선으로 나눈다.
- 아이콘은 한 행에 하나, 24~40px.

### 6.5 상단 바·내비게이션
- Top: 화면 위쪽 큰 제목 영역. TopNavigation: 뒤로 가기·아이콘·텍스트 버튼을 담는 내비게이션 바.
- 높이·글자 값: 확인 필요.
- 아이콘만 있는 버튼에는 `aria-label`을 단다(구현 권장).

### 6.6 배지
| 배지 크기 | 글자 | 굵기 | 여백(상하×좌우) | 모서리 |
|---|---|---|---|---|
| xsmall | 10px | 600 | 3×7px | 9px |
| small | 12px | 700 | 3×7px | 11px |
| medium | 13px | 700 | 3×7px | 12px |
| large | 14px | 700 | 4×8px | 13px |

- 배지 색: blue, green, yellow, orange, red, grey. fill과 weak 변형.
- 상태를 배지 색만으로 알리지 않고 글자를 함께 쓴다(구현 권장).

### 6.7 바텀시트·대화상자
- BottomSheet, AlertDialog, ConfirmDialog. 뒤 딤은 검정 20%.
- 대화상자 왼쪽 버튼은 "취소" 대신 "닫기"로 쓴다. 지금 하던 일을 취소한다는 오해를 막기 위해서다.
- 쓰지 않는 때: 진입하자마자 홍보·알림 바텀시트를 띄우지 않는다(다크 패턴으로 본다).
- 시트 모서리 수치: 확인 필요.
- 열리면 포커스를 안으로 옮기고, 닫히면 연 버튼으로 돌려준다. `role="dialog"`, `aria-modal="true"`(구현 권장).

### 6.8 토스트·툴팁·진행
- Toast, PointToast, Tooltip, ProgressBar 컴포넌트가 있다. 크기·위치 수치: 확인 필요.
- 토스트 문구는 [무엇이] [어떻게 됐어요] 꼴로 짧게. 화면 낭독기에 `role="status"`로 알린다(구현 권장).

### 6.9 말풍선
- Bubble 모서리 small 12px · medium 16px · large 18px, 글자는 st10 16px.
- 색·여백 세부: 확인 필요.

### 6.10 아이콘·이미지
- 아이콘·이모지 크기: 24~40px. 한 번에 하나만 쓰고 두 개 이상 묶지 않는다.
- 이모지 글꼴은 Tossface.
- 그래픽은 뜻을 돕는 용도로만 쓴다. 한 화면에 핵심 그래픽 하나. 입자·과한 그라데이션·효과는 피한다.
- 그래픽 색은 라이트·다크 둘 다에서 보이는 중간 밝기로 고른다.
- 앱 로고: 600×600px 정사각형, 모서리 없이 제출(라운드는 플랫폼이 처리).

## 7. 패턴
- 한 화면 한 행동: 위쪽 Top 큰 제목, 가운데 내용, 아래쪽 BottomCTA·FixedBottomCTA(xlarge 56px 파랑 버튼 하나).
- 목록 → 상세: ListHeader로 묶고 ListRow(왼쪽 아이콘 · 가운데 제목·설명 · 오른쪽 값·화살표)를 1px #e5e8eb 선으로 나눈다. 상세 화면 구조는 확인 필요.
- 검색: SearchField 컴포넌트가 있다. 흐름은 확인 필요.
- 불러오는 중: Skeleton, 버튼은 점 세 개 로딩(폭 유지).
- 확인 대화상자: ConfirmDialog, 왼쪽 버튼은 "닫기". 진입 즉시 홍보 시트는 띄우지 않는다.
- 폼·결제: NumberKeypad, SplitTextField 컴포넌트가 있다. 흐름은 확인 필요.

### 빈 상태·오류
글쓰기 규칙(부정형 대신 할 수 있는 것, 이유를 함께, 해요체)을 따른다. 화면 배치 수치는 확인 필요.

```
아직 받은 돈이 없어요.
친구에게 링크를 보내면 바로 받을 수 있어요.
[링크 보내기]
```
(예시 문구, SylviaLab 작성)

```
지금은 이체할 수 없어요. 은행 점검 시간이에요.
00시 30분부터 다시 이체할 수 있어요.
[닫기]
```
(예시 문구, SylviaLab 작성)

### 확인 대화상자 꼴
```
자동이체를 해지할까요?
해지하면 다음 달부터 돈이 빠져나가지 않아요.
[닫기] [해지하기]
```
(예시 문구, SylviaLab 작성. 왼쪽 "닫기", 오른쪽 결과를 말하는 동사)

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값). weak 버튼 바탕은 흰 바탕 위에 15% 투명 색을 겹친 값으로 계산했다.

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #191f28 | #ffffff | 16.6:1 | 통과 |
| #4e5968 | #ffffff | 7.1:1 | 통과 |
| #6b7684 | #ffffff | 4.6:1 | 통과 |
| #8b95a1 | #ffffff | 3.0:1 | 미달(큰 글자 3:1은 통과) |
| #b0b8c1 | #ffffff | 2.0:1 | 미달(비활성 글자) |
| #ffffff | #3182f6 | 3.7:1 | 미달(큰 글자 3:1은 통과) |
| #2272eb | #64a8ff 15% | 4.0:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #f04452 | 3.7:1 | 미달(큰 글자 3:1은 통과) |
| #1b64da | #ffffff | 5.4:1 | 통과 |
| #191f28 | #f2f4f6 | 15.0:1 | 통과 |
| #c3c3c6 | #17171c | 10.2:1 | 통과 |
| #9e9ea4 | #17171c | 6.7:1 | 통과 |

- 파랑 버튼 글자는 17px(t5)이라 굵게 쓸 때만 큰 글자 기준(굵은 14pt 이상)에 든다. 굵기가 정해지지 않은 상태에서는 본문 기준에 못 미친다.
- 터치 영역: xlarge 56px, large 48px은 44pt 기준을 넘는다. medium 38px, small 32px은 44pt보다 작다.
- 최소 글자 크기: st13 11px, 배지 xsmall 10px(기본 글자 크기 기준).
- 포커스·스크린리더·글자 확대: 글자 크기가 iOS 접근성 크기·Android fontScale을 따라 커진다(iOS xxxLarge에서 t1 42px). 로딩 버튼은 화면 낭독기에 바쁨 상태를 알린다. 포커스 표시는 확인 필요.

### 점검 목록
- [ ] 글자 확대: t·st 토큰을 써서 OS 글자 크기를 따르는가 (패키지 동작)
- [ ] 로딩 버튼이 바쁨 상태를 알리는가 (패키지 동작)
- [ ] 키보드·스위치 제어 포커스 표시가 보이는가 (확인 필요)
- [ ] 아이콘만 있는 버튼에 `aria-label`이 있는가 (구현 권장)
- [ ] 그래픽·이모지에 대체 텍스트가 있고, 장식이면 숨겼는가 (구현 권장)
- [ ] 32·38px 버튼 주변에 44pt 누를 영역을 확보했는가 (구현 권장)
- [ ] 흰 글자 파랑 버튼은 굵게 써서 큰 글자 기준을 맞췄는가 (구현 권장)
- [ ] 다크 모드에서도 대비를 다시 확인했는가 (#c3c3c6/#17171c 10.2:1)

## 9. 글쓰기 톤
- 말투: 모든 상황에서 해요체.
- 능동문을 쓴다. 수동문은 서비스 종료·만료 안내나 안심시키는 말처럼 꼭 필요할 때만.
- 부정형 대신 할 수 있는 것을 말한다. 안 되는 이유가 있으면 이유를 함께 쓴다.
- 과한 높임을 줄인다. "~시겠어요?", "~께" 대신 "~에게".
- 명사를 겹쳐 쓰지 않는다. 한자어 명사는 동사로 풀어 쓴다.
- "되어요" 대신 "돼요".
- 버튼 문구 꼴: 다음 행동을 바로 말한다. [동사 + 기] 또는 [동사 + 요] 형태의 짧은 행동. 혜택만 반복하거나 버튼 위에 부풀린 설명을 붙이지 않는다.
- 안내 문장 구조: [무엇이] [어떻게 됐어요].
- 숫자·단위 표기: 확인 필요.

## 10. Do & Don't
아래 규칙은 앱인토스 개발자 문서와 TDS 패키지 값(13장 링크)을 SylviaLab이 정리한 것이다. 출처가 문서 규칙인 것과 패키지 값에서 읽은 것을 함께 적었다.

### Do
- 화면 아래 주요 행동은 xlarge 버튼(높이 56px, 모서리 16px, #3182f6) 하나로 둔다.
- 색은 adaptive 토큰 이름으로 써서 다크 모드(#17171c 바탕)에 자동으로 맞춘다.
- 구획은 #f2f4f6 면과 1px #e5e8eb 선으로 나눈다.
- 글자 크기는 t·st 토큰으로 써서 OS 글자 크기 설정을 따르게 한다.
- 대화상자 왼쪽 버튼은 "닫기"로 쓴다(문서 규칙).
- 모든 문구를 해요체로 쓰고 "돼요"로 줄인다(문서 규칙).
- 로딩 중인 버튼은 폭을 유지한 채 점 세 개로 표시한다.

### Don't
- 진입하자마자 홍보·알림 바텀시트를 띄우지 않는다(문서 규칙).
- 아이콘·이모지를 두 개 이상 묶어 쓰지 않는다. 크기는 24~40px(문서 규칙).
- 한 화면에 핵심 그래픽을 둘 이상 두거나 입자·과한 그라데이션을 쓰지 않는다(문서 규칙).
- 빨강 #f04452를 오류·danger 밖에서 강조색으로 쓰지 않는다.
- 미니앱 탭 바를 직접 만들지 않는다. 토스가 주는 떠 있는 형태만, 탭 2~5개(문서 규칙).
- 흐린 글자 #8b95a1·비활성 #b0b8c1을 흰 바탕 본문 글자로 쓰지 않는다(대비 3.0:1, 2.0:1).
- 앱 로고에 모서리를 넣어 제출하지 않는다(600×600px 정사각형).

## 11. 구현·운영
- 코드 컴포넌트·패키지: npm @toss/tds-colors 0.1.0(colors.light.css·colors.dark.css), @toss/tds-typography 0.0.3(글자 크기·행간 표), @toss/tds-mobile 2.5.1(React 컴포넌트: 버튼·배지·목록 머리말·모션 값).
- Figma 라이브러리: 공개 자료 없음. TDS UI Kit가 있고 토스의 라이선스가 걸려 있다는 것만 확인했다(형식·공개 범위는 확인 필요).
- 문서·Storybook: 앱인토스 개발자 문서(developers-apps-in-toss.toss.im), TDS Mobile 문서(tossmini-docs.toss.im/tds-mobile). Storybook은 공개 자료 없음.
- 버전·변경 관리: 위 패키지 버전 번호로 배포된다. 변경 기록 공개 여부는 확인 필요.

## 12. AI에 넣을 때
```
토스(TDS) 스타일로 모바일 화면을 디자인해 줘.
- 주색: #3182f6 (다크 #3485fa), 오류 #f04452, 성공 #03b26c
- 배경: #ffffff, 회색 구획 #f2f4f6, 다크 바탕 #17171c
- 글자: 제목 #191f28, 본문 #4e5968, 보조 #6b7684, 흐린 글자 #8b95a1
- 글꼴: Toss Product Sans 대신 시스템 산스(SF Pro, Apple SD Gothic Neo, Noto Sans KR)
- 크기: 제목 22~26px 굵게, 본문 17px, 보조 15px, 캡션 13px
- 모서리: 하단 큰 버튼 16px, 중간 버튼 10px, 작은 버튼 8px
- 버튼: 높이 56px 가로 꽉 찬 파랑 버튼 하나, 보조는 연한 파랑(weak)
- 구분: 그림자 대신 #f2f4f6 면과 1px #e5e8eb 선
- 문구: 해요체, 짧게, 한 화면에 한 가지 일
```

## 13. 참고 자료
- https://developers-apps-in-toss.toss.im/design/components (TDS 소개·컴포넌트 목록, 확인 2026-10-31)
- https://developers-apps-in-toss.toss.im/design/consumer-ux-guide.md (미니앱 UI/UX·UX 라이팅 규칙, 확인 2026-10-31)
- https://developers-apps-in-toss.toss.im/llms.txt (문서 색인, 확인 2026-10-31)
- https://tossmini-docs.toss.im/tds-mobile/components/button/ (Button 속성, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-colors (0.1.0, colors.light.css·colors.dark.css, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-typography (0.0.3, 글자 크기·행간 표, 확인 2026-10-31)
- https://www.npmjs.com/package/@toss/tds-mobile (2.5.1, 버튼·배지·목록 머리말·모션 값, 확인 2026-10-31)

근거와 한계
- 색은 tds-colors 패키지 CSS에서, 글자 크기·행간은 tds-typography와 tds-mobile 패키지 코드에서, 버튼·배지·말풍선 수치는 tds-mobile 배포 코드에서 읽었다.
- UX 라이팅·그래픽·해상도 규칙은 앱인토스 개발자 문서에서 읽고 내 말로 바꿔 적었다.
- tossmini-docs의 대부분 페이지는 수집 차단으로 열지 못했다. 그래서 간격 단위, 화면 여백, 입력창·시트·토스트 수치, 그림자는 확인하지 못했다.
- 이 값은 미니앱용 TDS Mobile 기준이다. 토스 앱 내부 화면이 같은 값을 쓰는지는 확인 필요.
- TDS UI Kit는 토스의 라이선스가 걸려 있다. 이 문서는 사실 값만 옮겼다.
- 원칙과 Do & Don't는 문서 규칙과 패키지 값에서 SylviaLab이 정리했다. 접근성 대비는 위 HEX로 SylviaLab이 계산했다.
- 서비스 이름과 브랜드는 각 권리자의 것이며, 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
공개 npm 패키지에 있는 이름만 적었다. CSS 변수의 정확한 접두어는 패키지 파일에서 다시 확인한다.

| DESIGN.md | 공식 패키지 이름 | 패키지 |
|---|---|---|
| `colors.blue500`, `colors.grey700` 등 단계 | adaptive blue500 / grey700 … | @toss/tds-colors 0.1.0 (colors.light.css·colors.dark.css) |
| `colors.background` / `layered-background` / `float-background` | background / layeredBackground / floatBackground | @toss/tds-colors |
| `colors.grey-background` | greyBackground | @toss/tds-colors |
| `colors.hairline` | hairlineBorder | @toss/tds-colors |
| `colors.dimmed` | dimmedBackground | @toss/tds-colors |
| `colors.pc-screen-bg` | pcScreenBg | @toss/tds-colors |
| `typography.t1`~`t7`, `st1`~`st13` | t1~t7, st1~st13 | @toss/tds-typography 0.0.3 |
| `components.button-*` | `Button` (size small·medium·large·xlarge, color primary·danger·dark·light, variant fill·weak, display inline·block·full) | @toss/tds-mobile 2.5.1 |
| `components.badge-*` | `Badge` | @toss/tds-mobile |
| `components.list-header-*` | `ListHeader` | @toss/tds-mobile |
| 목록 행 | `ListRow`, `ListFooter` | @toss/tds-mobile |
| 하단 행동 영역 | `BottomCTA`, `FixedBottomCTA` | @toss/tds-mobile |
| 대화상자·시트 | `AlertDialog`, `ConfirmDialog`, `BottomSheet` | @toss/tds-mobile |
| 입력 | `TextField`, `SplitTextField`, `SearchField`, `TextArea`, `NumberKeypad` | @toss/tds-mobile |

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 색 단계·역할 값(라이트·다크, @toss/tds-colors 0.1.0), 글자 크기·행간 20단계와 확대 표(@toss/tds-typography 0.0.3), 버튼 크기별 높이·최소 폭·좌우 여백·모서리·글자, fill·weak 색 조합, 배지 크기, ListHeader 글자, 말풍선 모서리, 모션 곡선·0.5초(@toss/tds-mobile 2.5.1), UX 라이팅·그래픽·해상도·탭 바 규칙(앱인토스 개발자 문서).
- **화면에서 잰 값(관찰)**: 없음. 이 문서는 패키지와 문서만 읽었다.
- **SylviaLab이 정리·권장한 것**: 원칙 5개, YAML 역할 이름(`primary`, `text-body` 등)과 글자 역할 매핑, 간격 단계(컴포넌트 코드 여백을 모은 것으로 공식 간격 토큰 아님), YAML의 weak 버튼 `backgroundOpacity` 표기, 각 장의 Don't, 7장 예시 문구, 접근성 대비 계산값과 `(구현 권장)` 항목.
- **확인 못 한 것**: 간격 토큰·화면 여백·그리드, 입력창·시트·토스트 수치, 그림자, 눌림 상태 값, t1·t2·t3 굵기, 일부 다크 값(blue700, disabledBlue500, pcScreenBg, dimmedBackground).
