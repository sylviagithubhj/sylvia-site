---
version: "1.0"
name: "원티드"
description: "원시 팔레트에서 역할 토큰으로 이어지는 라이트·다크 쌍 토큰과, 선·면·누름 효과를 회색 #70737c의 정해진 투명도 단계로 그리는 채용 플랫폼 시스템 Montage"
source:
  - "https://montage.wanted.co.kr (Montage 공식 문서)"
  - "https://github.com/wanteddev/montage-web packages/theme (atomic, semantic, typography, radius, spacing, opacity, breakpoint)"
  - "https://github.com/wanteddev/montage-web packages/core (button, text-field, chip, tab, bottom-navigation, modal, toast, snackbar, card, list-card, section-message, with-interaction)"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 색 이름: 원시(atomic)는 `blue-50`처럼, 역할(semantic)은 SylviaLab 줄임 이름.
# 본문 표에는 Montage 공식 역할 이름(surface.brand.primary 등)을 함께 적었다.
# 8자리 HEX 끝 두 자리는 투명도다. 다크 값은 `-dark` 이름으로 따로 둔다.
# ─────────────────────────────────────────────
colors:
  # ── Atomic: blue ──
  blue-10: "#001536"
  blue-20: "#002966"
  blue-30: "#003e9c"
  blue-40: "#0054d1"
  blue-45: "#005eeb"
  blue-50: "#0066ff"      # 대표 파랑
  blue-55: "#1a75ff"
  blue-60: "#3385ff"      # 다크 모드 대표 파랑
  blue-65: "#4f95ff"
  blue-70: "#69a5ff"
  blue-80: "#9ec5ff"
  blue-90: "#c9defe"
  blue-95: "#eaf2fe"
  blue-99: "#f7fbff"

  # ── Atomic: coolNeutral (UI 글자·면은 이 줄) ──
  cool-neutral-5: "#0f0f10"
  cool-neutral-7: "#141415"
  cool-neutral-10: "#171719"
  cool-neutral-15: "#1b1c1e"
  cool-neutral-17: "#212225"
  cool-neutral-20: "#292a2d"
  cool-neutral-22: "#2e2f33"
  cool-neutral-23: "#333438"
  cool-neutral-25: "#37383c"
  cool-neutral-30: "#46474c"
  cool-neutral-40: "#5a5c63"
  cool-neutral-50: "#70737c"   # 선·약한 면의 바탕 색(투명도로 씀)
  cool-neutral-60: "#878a93"
  cool-neutral-70: "#989ba2"
  cool-neutral-80: "#aeb0b6"
  cool-neutral-90: "#c2c4c8"
  cool-neutral-95: "#dbdcdf"
  cool-neutral-96: "#e1e2e4"
  cool-neutral-97: "#eaebec"
  cool-neutral-98: "#f4f4f5"
  cool-neutral-99: "#f7f7f8"
  common-0: "#000000"
  common-100: "#ffffff"

  # ── Semantic (라이트) ──
  primary: "{colors.blue-50}"            # surface.brand.primary / foreground.brand.primary
  primary-strong: "{colors.blue-45}"
  primary-heavy: "{colors.blue-40}"
  primary-subtle: "#0066ff0d"            # 선택된 칩 면
  line-brand: "#0066ff47"                # 선택된 칩 선
  line-brand-strong: "#0066ff6e"         # 입력 포커스 선
  line-brand-focus: "#0066ff1f"          # 입력 포커스 바깥 4px 링
  on-primary: "{colors.common-100}"
  surface: "{colors.common-100}"         # background.neutral.primary
  surface-secondary: "{colors.cool-neutral-99}"
  surface-neutral-secondary: "#70737c14" # 회색 버튼 면
  surface-neutral-tertiary: "#70737c0d"  # 칩 면, 비활성 입력
  surface-neutral-strong: "#70737c29"
  surface-disable: "{colors.cool-neutral-98}"
  surface-inverse: "{colors.cool-neutral-15}"
  surface-elevated: "{colors.common-100}"
  text-strong: "{colors.common-0}"
  text-primary: "{colors.cool-neutral-10}"
  text-secondary: "#2e2f33e0"
  text-tertiary: "#37383c9c"
  text-quaternary: "#37383c47"
  text-inactive: "{colors.cool-neutral-70}"
  text-disable: "#37383c29"
  line-primary: "#70737c38"
  border: "#70737c29"                    # line.neutral.secondary. 입력창·아웃라인 버튼
  line-tertiary: "#70737c14"
  line-opaque: "{colors.cool-neutral-96}"
  line-opaque-2: "{colors.cool-neutral-97}"
  line-opaque-3: "{colors.cool-neutral-98}"
  dimmer: "#17171985"
  success: "#00bf40"
  success-surface: "#00bf4014"
  warning: "#ff9200"
  warning-surface: "#ff920014"
  danger: "#ff4242"
  danger-strong: "#e52222"
  danger-surface: "#ff42421f"
  danger-line: "#ff42426e"

  # ── Semantic (다크) ──
  primary-dark: "{colors.blue-60}"
  primary-strong-dark: "{colors.blue-55}"
  primary-heavy-dark: "{colors.blue-50}"
  primary-subtle-dark: "#3385ff0d"
  line-brand-dark: "#3385ff47"
  line-brand-strong-dark: "#3385ff6e"
  line-brand-focus-dark: "#3385ff1f"
  surface-dark: "{colors.cool-neutral-15}"
  surface-secondary-dark: "{colors.cool-neutral-5}"
  surface-neutral-secondary-dark: "#70737c38"
  surface-neutral-tertiary-dark: "#70737c1f"
  surface-neutral-strong-dark: "#70737c47"
  surface-inverse-dark: "{colors.common-100}"
  surface-elevated-dark: "{colors.cool-neutral-17}"
  surface-disable-dark: "{colors.cool-neutral-22}"
  text-strong-dark: "{colors.common-100}"
  text-primary-dark: "{colors.cool-neutral-99}"
  text-secondary-dark: "#c2c4c8e0"
  text-tertiary-dark: "#aeb0b69c"
  text-quaternary-dark: "#aeb0b647"
  text-inactive-dark: "{colors.cool-neutral-40}"
  text-disable-dark: "#989ba229"
  line-primary-dark: "#70737c52"
  border-dark: "#70737c47"
  line-tertiary-dark: "#70737c38"
  line-opaque-dark: "{colors.cool-neutral-25}"
  dimmer-dark: "#171719bd"
  success-dark: "#1ed45a"
  warning-dark: "#ffa938"
  danger-dark: "#ff6363"
  danger-surface-dark: "#ff636338"
  danger-line-dark: "#ff63636e"

# 투명도 단계(선·약한 면은 cool-neutral-50에 이 값만 쓴다)
opacity: [0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100]

typography:
  font-family: "Pretendard JP"
  # 굵기: display·title bold 700, heading 이하 bold 600. 모든 단계에 400·500도 있다.
  display1:  { fontFamily: "Pretendard JP", fontSize: "56px", fontWeight: 700, lineHeight: 1.29, letterSpacing: "-0.0319em" }
  display2:  { fontFamily: "Pretendard JP", fontSize: "40px", fontWeight: 700, lineHeight: 1.3, letterSpacing: "-0.0282em" }
  display3:  { fontFamily: "Pretendard JP", fontSize: "36px", fontWeight: 700, lineHeight: 1.33, letterSpacing: "-0.027em" }
  title1:    { fontFamily: "Pretendard JP", fontSize: "32px", fontWeight: 700, lineHeight: 1.38, letterSpacing: "-0.0253em" }
  title2:    { fontFamily: "Pretendard JP", fontSize: "28px", fontWeight: 700, lineHeight: 1.36, letterSpacing: "-0.0236em" }
  title3:    { fontFamily: "Pretendard JP", fontSize: "24px", fontWeight: 700, lineHeight: 1.33, letterSpacing: "-0.023em" }
  heading1:  { fontFamily: "Pretendard JP", fontSize: "22px", fontWeight: 600, lineHeight: 1.36, letterSpacing: "-0.0194em" }
  heading2:  { fontFamily: "Pretendard JP", fontSize: "20px", fontWeight: 600, lineHeight: 1.4, letterSpacing: "-0.012em" }
  headline1: { fontFamily: "Pretendard JP", fontSize: "18px", fontWeight: 600, lineHeight: 1.44, letterSpacing: "-0.002em" }
  headline2: { fontFamily: "Pretendard JP", fontSize: "17px", fontWeight: 600, lineHeight: 1.41, letterSpacing: "0" }
  body1:     { fontFamily: "Pretendard JP", fontSize: "16px", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.0057em" }
  body1-reading: { fontFamily: "Pretendard JP", fontSize: "16px", fontWeight: 400, lineHeight: 1.625 }
  body2:     { fontFamily: "Pretendard JP", fontSize: "15px", fontWeight: 400, lineHeight: 1.47, letterSpacing: "0.0096em" }
  body2-reading: { fontFamily: "Pretendard JP", fontSize: "15px", fontWeight: 400, lineHeight: 1.6 }
  label1:    { fontFamily: "Pretendard JP", fontSize: "14px", fontWeight: 400, lineHeight: 1.43, letterSpacing: "0.0145em" }
  label1-reading: { fontFamily: "Pretendard JP", fontSize: "14px", fontWeight: 400, lineHeight: 1.57 }
  label2:    { fontFamily: "Pretendard JP", fontSize: "13px", fontWeight: 500, lineHeight: 1.38, letterSpacing: "0.0194em" }
  caption1:  { fontFamily: "Pretendard JP", fontSize: "12px", fontWeight: 400, lineHeight: 1.33, letterSpacing: "0.0252em" }
  caption2:  { fontFamily: "Pretendard JP", fontSize: "11px", fontWeight: 400, lineHeight: 1.27, letterSpacing: "0.0311em" }

rounded:
  r4: "4px"
  r8: "8px"      # xsmall 버튼·칩
  r10: "10px"    # small 버튼, small·medium 칩
  r12: "12px"    # medium 버튼·입력창, large 칩, 토스트
  r14: "14px"    # large 버튼·입력창
  r16: "16px"    # 카드
  r20: "20px"    # 카드
  r24: "24px"    # 팝업 모달
  r28: "28px"
  r32: "32px"    # 바텀시트 위 모서리
  full: "9999px"

spacing:
  s2: "2px"
  s4: "4px"      # 기본 단위
  s6: "6px"
  s8: "8px"
  s10: "10px"
  s12: "12px"
  s14: "14px"
  s16: "16px"
  s20: "20px"    # 모바일 좌우 여백, 컬럼 간격
  s24: "24px"    # 모달 안 여백
  s32: "32px"
  s40: "40px"
  s48: "48px"
  s56: "56px"
  s64: "64px"
  s72: "72px"
  s80: "80px"

size:
  button-large: "48px"
  button-medium: "40px"
  button-small: "32px"
  button-xsmall: "28px"
  chip-large: "40px"
  chip-medium: "36px"
  chip-small: "32px"
  chip-xsmall: "24px"
  bottom-navigation: "56px"
  modal-medium: "360px"
  modal-large: "480px"
  modal-xlarge: "560px"
  modal-min: "320px"

border-width:
  regular: "1px"   # box-shadow inset 0 0 0 1px 로 그린다
  tab-indicator: "2px"

layout:
  breakpoints:
    xs: "0–768px"
    sm: "768–992px"
    md: "992–1200px"
    lg: "1200–1600px"   # 최대 콘텐츠 1100px(여백 포함)
    xl: "1600px~"       # 최대 콘텐츠 1440px(여백 포함)
  mobile-side-margin: "20px"
  column-gap: "20px"
  frames:
    web-desktop: "1440×960px (콘텐츠 1100px)"
    web-mobile: "375×635px"
    ios: "375×812pt"
    android: "360×800dp"

elevation:
  normal-xsmall: "0 1px 2px -1px #1717171a"
  normal-small: "0 2px 4px -2px #1717170f, 0 4px 6px -1px #1717170f"
  normal-medium: "0 4px 6px -2px #17171712, 0 10px 15px -3px #17171712"
  normal-large: "0 6px 10px -4px #17171714, 0 16px 24px -6px #17171714"
  normal-xlarge: "0 10px 15px -5px #1717171a, 0 24px 38px -10px #1717171f"
  spread-small: "0 0 60px 0 #1717171a"
  spread-medium: "0 15px 75px 0 #17171729"   # 바텀시트

focus:
  input-border: "inset 0 0 0 1px {colors.line-brand-strong}"
  input-ring: "0 0 0 4px {colors.line-brand-focus}"

interaction:
  hover: "5%"
  pressed: "12%"
  hover-light: "3.75%"
  pressed-light: "9%"
  hover-strong: "7.5%"
  pressed-strong: "18%"

motion:
  interaction: "0.15s ease"     # 호버·누름
  input-border: "0.2s ease"
  toast: "0.2s ease"
  bottom-sheet: "280ms ease"
  press-scale: 0.95             # 일부 변형

components:
  button-large:  { height: "{size.button-large}",  padding: "13px 20px", typography: "{typography.body2}",    fontWeight: 600, rounded: "{rounded.r14}", iconSize: "16px", iconGap: "6px" }
  button-medium: { height: "{size.button-medium}", padding: "10px 16px", typography: "{typography.label1}",   fontWeight: 600, rounded: "{rounded.r12}", iconSize: "14px", iconGap: "4px" }
  button-small:  { height: "{size.button-small}",  padding: "8px 12px",  typography: "{typography.caption1}", fontWeight: 600, rounded: "{rounded.r10}", iconSize: "12px", iconGap: "4px" }
  button-xsmall: { height: "{size.button-xsmall}", padding: "6px 10px",  typography: "{typography.caption1}", fontWeight: 600, rounded: "{rounded.r8}",  iconSize: "12px", iconGap: "4px" }
  button-solid-primary:     { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}" }
  button-solid-assistive:   { backgroundColor: "{colors.surface-neutral-secondary}", textColor: "{colors.text-secondary}" }
  button-solid-negative:    { backgroundColor: "{colors.danger-surface}", textColor: "{colors.danger-strong}" }
  button-outlined-primary:  { backgroundColor: "transparent", borderColor: "{colors.border}", textColor: "{colors.primary}" }
  button-outlined-assistive: { backgroundColor: "transparent", borderColor: "{colors.border}", textColor: "{colors.text-primary}" }
  button-hover:    { overlayOpacity: "{interaction.hover}" }
  button-pressed:  { overlayOpacity: "{interaction.pressed}" }
  button-disabled: { backgroundColor: "{colors.surface-disable}", textColor: "{colors.text-disable}" }
  text-field-large:  { padding: "12px 8px", typography: "{typography.body2}",  rounded: "{rounded.r14}", iconSize: "20px" }
  text-field-medium: { padding: "10px 6px", typography: "{typography.label1}", rounded: "{rounded.r12}", iconSize: "18px" }
  text-field:          { borderColor: "{colors.border}" }
  text-field-focus:    { borderColor: "{colors.line-brand-strong}", ring: "{focus.input-ring}" }
  text-field-error:    { borderColor: "{colors.danger-line}" }
  text-field-disabled: { backgroundColor: "{colors.surface-neutral-tertiary}", borderColor: "{colors.line-tertiary}" }
  chip-large:  { height: "{size.chip-large}",  rounded: "{rounded.r12}", fontSize: "14px", fontWeight: 500 }
  chip-medium: { height: "{size.chip-medium}", rounded: "{rounded.r10}", fontSize: "13px", fontWeight: 500 }
  chip-small:  { height: "{size.chip-small}",  rounded: "{rounded.r10}", fontSize: "12px", fontWeight: 500 }
  chip-xsmall: { height: "{size.chip-xsmall}", rounded: "{rounded.r8}",  fontSize: "11px", fontWeight: 500 }
  chip-solid:             { backgroundColor: "{colors.surface-neutral-tertiary}" }
  chip-solid-selected:    { backgroundColor: "{colors.primary-subtle}", textColor: "{colors.primary}" }
  chip-outlined:          { borderColor: "{colors.border}" }
  chip-outlined-selected: { borderColor: "{colors.line-brand}" }
  tab:          { textColor: "{colors.text-tertiary}", fontWeight: 600, paddingX: "12px" }
  tab-selected: { textColor: "{colors.text-strong}", indicatorHeight: "{border-width.tab-indicator}" }
  bottom-navigation: { height: "{size.bottom-navigation}", backgroundColor: "{colors.surface}", activeColor: "{colors.primary}", inactiveColor: "{colors.text-inactive}", borderTop: "{colors.line-tertiary}" }
  modal:        { backgroundColor: "{colors.surface}", rounded: "{rounded.r24}", padding: "{spacing.s24}", minWidth: "{size.modal-min}", dim: "{colors.dimmer}" }
  bottom-sheet: { rounded: "{rounded.r32}", shadow: "{elevation.spread-medium}", motion: "{motion.bottom-sheet}" }
  toast:        { backgroundColor: "{colors.surface-inverse}", rounded: "{rounded.r12}", padding: "11px 16px", gap: "{spacing.s16}" }
  section-message: { padding: "{spacing.s12}" }
---

# 원티드 디자인 시스템

> 근거: 공개 문서 기반 (Montage 공식 문서 montage.wanted.co.kr, 오픈소스 저장소 wanteddev/montage-web의 theme·core 패키지)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 어긋나면 YAML 값을 따른다.

## 1. 개요와 원칙
- 서비스 성격: 채용·커리어 플랫폼. 웹과 앱을 함께 운영하고, 한국어와 일본어 서비스를 같은 시스템으로 만든다.
- 디자인 인상 한 줄: 아주 연한 푸른 회색 위에 선명한 파랑(#0066ff) 하나, 테두리와 면은 회색의 투명도로 얇게 그린다.
- 공식 시스템 이름: Montage (원티드랩 디자인 시스템, 저장소 라이선스 MIT)
- 구조: 원시 색 팔레트(`atomic`) → 역할 색(`semantic`). 역할은 foreground(글자·아이콘), background, surface(면), line(선), effect(딤·투명) 다섯 갈래다.
- 디자인 원칙: 공개 자료에서 원칙 목록은 찾지 못했다. 아래는 공식 문서·코드의 규칙에서 정리했다.
  1. 간격은 4px 단위로 움직인다. 시각 보정이 필요하면 2px, 피할 수 없을 때만 1px 단위로 움직인다. (공식 문서 grid 원칙)
  2. 회색은 순수 회색(neutral)과 약간 푸른 회색(coolNeutral) 두 줄이 있고, UI 글자·면은 coolNeutral을 쓴다. (관찰에서 정리)
  3. 선과 약한 면은 #70737c에 투명도를 줘서 만든다. 배경색이 달라도 같은 농도로 보인다. 투명도는 정해진 단계만 쓴다: 0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100(%). (관찰에서 정리)
  4. 누름·호버 효과는 색을 바꾸지 않고, 요소 위에 같은 색 막을 깔아 투명도만 올린다. (관찰에서 정리)
  5. 한국어·영어·일본어를 한 글꼴(Pretendard JP)로 맞춘다. (관찰에서 정리)
- 톤: 얇은 선과 옅은 푸른 회색으로 차분하게, 파랑은 행동에만.

### 특장점
- 모든 색이 라이트·다크 쌍으로 정의돼 있다 — 역할 토큰마다 다크 값이 있다(예: surface.brand.primary #0066ff → #3385ff, background.neutral.primary #ffffff → #1b1c1e). 원시 팔레트(atomic) → 역할(semantic) 두 층 구조다.
- 선과 약한 면을 투명도로 만든다 — #70737c에 8%(#70737c14), 16%(#70737c29), 22%(#70737c38)처럼 정해진 15단계 투명도만 써서 어느 바탕 위에서도 같은 농도로 보인다. 투명도를 못 쓰는 곳용 불투명 선(#e1e2e4 등)도 따로 둔다.
- 누름·호버를 색 교체가 아닌 막으로 처리한다 — 호버 5%, 누름 12%(약한 변형 3.75/9%, 강한 변형 7.5/18%) 막을 얹어, 버튼 색이 몇 개든 상태 규칙이 하나다.
- 크기 단계가 컴포넌트 크기와 맞물려 있다 — 버튼 48/40/32/28px에 모서리 14/12/10/8px, 글자 15/14/12/12px가 함께 내려간다. 입력창·칩도 같은 사다리를 쓴다.
- 오픈소스로 코드와 토큰을 공개한다 — wanteddev/montage-web(MIT)의 theme 패키지(atomic, semantic, typography, radius, spacing, opacity, breakpoint)와 core 컴포넌트를 볼 수 있다.

### 배울 점
- 여러 바탕(흰색·회색·다크) 위에서 선을 같은 농도로 보이게 하고 싶을 때 Montage처럼 회색 하나(#70737c)에 정해진 투명도 단계를 줘서 선·면을 만든다.
- 버튼 종류가 많아 상태 색을 다 정하기 어려울 때 Montage처럼 호버 5%·누름 12% 막을 얹는 규칙 하나로 통일한다.
- 크기 변형을 만들 때 높이·모서리·글자를 한 사다리로 묶는다(48px→14px 모서리→15px 글자).

### 이 문서를 읽는 AI 에이전트에게
- 색은 역할 토큰(`primary`, `text-primary`, `border`)으로 먼저 쓰고, 원시 팔레트(`blue-50`, `cool-neutral-10`)는 토큰 정의에만 쓴다.
- 선·약한 면은 `#70737c` + YAML `opacity` 단계로만 만든다. 불투명 회색 HEX를 새로 만들지 않는다.
- 호버·누름은 색을 바꾸지 말고 막(overlay) 투명도 5%/12%로 표현한다.
- 크기 변형은 높이·모서리·글자를 한 묶음으로 고른다(`components.button-*`, `chip-*`). 다크 모드는 같은 역할의 `-dark` 값으로 바꾼다.
- 판단이 어려우면 파랑을 채우는 대신 옅은 면(`primary-subtle`)이나 선(`line-brand`)을 고르고, 파랑 채움은 화면의 주요 행동 하나에 남긴다.

## 2. 색상
토큰 이름은 Montage 공식 이름이다. 8자리 HEX의 끝 두 자리는 투명도다.

### 색 체계
Montage 색은 **atomic(원시) → semantic(역할)** 두 층이고, 역할 층은 다섯 갈래다.

| 층·갈래 | 예시 | 쓰는 곳 |
|---|---|---|
| Atomic | `blue 50`, `coolNeutral 10`, `neutral`, `green`, `orange`, `red`, `common` | 팔레트 정의. 화면 코드에서 직접 쓰지 않는다 |
| semantic foreground | `foreground.neutral.primary`, `foreground.brand.primary` | 글자·아이콘 |
| semantic background | `background.neutral.primary/secondary` | 화면 바탕 |
| semantic surface | `surface.brand.primary`, `surface.neutral.secondary` | 버튼·칩·카드 같은 면 |
| semantic line | `line.neutral.secondary`, `line.brand.strong` | 선·테두리·포커스 |
| semantic effect | `effect.dimmer.primary` | 딤·투명 |

- 단계 숫자는 작을수록 어둡다(blue 10이 가장 어둡고 99가 가장 밝다). 라이트 모드 대표는 blue 50, 다크 모드 대표는 blue 60이다.
- 투명도 단계(%): 0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100. HEX 끝 두 자리로 쓴다(8% = `14`, 16% = `29`, 22% = `38`).

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| surface.brand.primary | #0066ff | 주요 버튼 배경 (blue 50) |
| surface.brand.strong | #005eeb | 진한 브랜드 면 (blue 45) |
| surface.brand.heavy | #0054d1 | 가장 진한 브랜드 면 (blue 40) |
| surface.brand.subtle | #0066ff0d | 선택된 칩 배경 |
| foreground.brand.primary | #0066ff | 브랜드 글자, 아웃라인 버튼 글자, 하단 탭 선택 |
| line.brand.primary | #0066ff47 | 선택된 칩 테두리 |
| line.brand.strong | #0066ff6e | 입력창 포커스 테두리 |
| line.brand.focus | #0066ff1f | 입력창 포커스 바깥 4px 링 |

- blue 팔레트: 10 #001536 · 20 #002966 · 30 #003e9c · 40 #0054d1 · 45 #005eeb · 50 #0066ff · 55 #1a75ff · 60 #3385ff · 65 #4f95ff · 70 #69a5ff · 80 #9ec5ff · 90 #c9defe · 95 #eaf2fe · 99 #f7fbff

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| background.neutral.primary | #ffffff | 화면 바탕 |
| background.neutral.secondary | #f7f7f8 | 회색 바탕 |
| surface.neutral.secondary | #70737c14 | 회색 버튼 면 |
| surface.neutral.tertiary | #70737c0d | 칩 면, 비활성 입력창 |
| surface.neutral.strong | #70737c29 | 진한 회색 면 |
| surface.neutral.inverse | #1b1c1e | 토스트 바탕(반투명으로) |
| surface.elevated.primary | #ffffff | 떠 있는 면 |
| surface.disable.primary | #f4f4f5 | 비활성 버튼 면 |
| line.neutral.primary | #70737c38 | 진한 구분선 |
| line.neutral.secondary | #70737c29 | 입력창·아웃라인 버튼 테두리 |
| line.neutral.tertiary | #70737c14 | 약한 구분선, 하단 탭 위 선 |
| line.neutral.*Opaque | #e1e2e4 | 투명도를 못 쓸 때 대신하는 불투명 선. 세 단계가 #e1e2e4 / #eaebec / #f4f4f5 |
| effect.dimmer.primary | #17171985 | 모달 뒤 딤 |

- coolNeutral 팔레트: 5 #0f0f10 · 7 #141415 · 10 #171719 · 15 #1b1c1e · 17 #212225 · 20 #292a2d · 22 #2e2f33 · 23 #333438 · 25 #37383c · 30 #46474c · 40 #5a5c63 · 50 #70737c · 60 #878a93 · 70 #989ba2 · 80 #aeb0b6 · 90 #c2c4c8 · 95 #dbdcdf · 96 #e1e2e4 · 97 #eaebec · 98 #f4f4f5 · 99 #f7f7f8

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| foreground.neutral.strong | #000000 | 선택된 탭 등 가장 진한 글자 |
| foreground.neutral.primary | #171719 | 본문 |
| foreground.neutral.secondary | #2e2f33e0 | 보조 글자, 회색 버튼 글자 |
| foreground.neutral.tertiary | #37383c9c | 설명, 선택 안 된 탭 |
| foreground.neutral.quaternary | #37383c47 | 아주 흐린 글자 |
| foreground.inactive.primary | #989ba2 | 하단 탭 비선택 |
| foreground.disable.primary | #37383c29 | 비활성 글자 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (foreground.positive) | #00bf40 | 성공 글자·아이콘 |
| success 면 (surface.positive) | #00bf4014 | 성공 안내 바탕 |
| warning (foreground.cautionary) | #ff9200 | 주의 글자·아이콘 |
| warning 면 (surface.cautionary) | #ff920014 | 주의 바탕 |
| error (foreground.negative) | #ff4242 | 오류 글자 |
| error 진한 글자 (negative.strong) | #e52222 | 위험 버튼 글자 |
| error 면 (surface.negative.strong) | #ff42421f | 위험 버튼 면 |
| error 선 (line.negative.primary) | #ff42426e | 오류 입력창 테두리 |

- info: 별도 토큰은 확인 필요. 정보 상태는 브랜드 파랑을 쓴다(섹션 메시지 기준).

### 다크 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| surface.brand.primary | #3385ff | 주요 버튼 배경 (blue 60) |
| surface.brand.strong | #1a75ff | 진한 브랜드 면 (blue 55) |
| surface.brand.heavy | #0066ff | 가장 진한 브랜드 면 |
| surface.brand.subtle | #3385ff0d | 선택된 칩 배경 |
| foreground.brand.primary | #3385ff | 브랜드 글자 |
| line.brand.primary | #3385ff47 | 선택된 칩 테두리 |
| line.brand.strong | #3385ff6e | 입력창 포커스 테두리 |
| line.brand.focus | #3385ff1f | 포커스 링 |
| foreground.neutral.strong | #ffffff | 가장 진한 글자 |
| foreground.neutral.primary | #f7f7f8 | 본문 |
| foreground.neutral.secondary | #c2c4c8e0 | 보조 글자 |
| foreground.neutral.tertiary | #aeb0b69c | 설명 |
| foreground.neutral.quaternary | #aeb0b647 | 아주 흐린 글자 |
| foreground.inactive.primary | #5a5c63 | 하단 탭 비선택 |
| foreground.disable.primary | #989ba229 | 비활성 글자 |
| background.neutral.primary | #1b1c1e | 화면 바탕 |
| background.neutral.secondary | #0f0f10 | 회색 바탕 |
| surface.neutral.secondary | #70737c38 | 회색 버튼 면 |
| surface.neutral.tertiary | #70737c1f | 칩 면 |
| surface.neutral.strong | #70737c47 | 진한 회색 면 |
| surface.neutral.inverse | #ffffff | 토스트 바탕 |
| surface.elevated.primary | #212225 | 떠 있는 면 |
| surface.disable.primary | #2e2f33 | 비활성 버튼 면 |
| line.neutral.primary | #70737c52 | 진한 구분선 |
| line.neutral.secondary | #70737c47 | 입력창 테두리 |
| line.neutral.tertiary | #70737c38 | 약한 구분선 |
| line.neutral.*Opaque | #37383c | 불투명 선. 세 단계가 #37383c / #333438 / #2e2f33 |
| effect.dimmer.primary | #171719bd | 모달 뒤 딤 |
| foreground.positive | #1ed45a | 성공 |
| surface.positive | #1ed45a14 | 성공 바탕 |
| foreground.cautionary | #ffa938 | 주의 |
| surface.cautionary | #ffa93814 | 주의 바탕 |
| foreground.negative | #ff6363 | 오류 글자, 위험 버튼 글자(negative.strong도 같음) |
| surface.negative.strong | #ff636338 | 위험 버튼 면 |
| line.negative.primary | #ff63636e | 오류 입력창 테두리 |

### 보조 색
- 글자용 accent: lime, cyan, lightBlue, violet, purple, pink. 각 색은 8% 면과 43% 선, 불투명 면(`…Opaque`)을 함께 둔다. 원시값은 저장소 atomic 폴더 참고(이 문서에는 옮기지 않음).

### 역할별 색
- 파랑(blue 50): 주요 버튼 면, 브랜드 글자, 아웃라인 primary 버튼 글자, 하단 탭 선택, 입력 포커스(선 #0066ff6e + 링 #0066ff1f). 진한 면이 필요하면 strong(blue 45) → heavy(blue 40) 순서.
- 파랑 옅은 짝: 선택된 칩은 면 5%(#0066ff0d) 또는 선 28%(#0066ff47)로만 표시한다.
- 회색 막(#70737c + 투명도): 회색 버튼 면 8%, 칩 면 5%, 진한 면 16%, 선은 22%(진함)·16%(기본)·8%(약함).
- 글자 다섯 층: strong #000000(선택 탭) → primary #171719(본문) → secondary 88%(보조) → tertiary 61%(설명·비선택 탭) → quaternary 28%(아주 흐림). 비활성은 16%.
- 상태 조합(배경/선/글자):

| 상태 | 면 | 선 | 글자·아이콘 |
|---|---|---|---|
| 성공 | #00bf4014 | 확인 필요 | #00bf40 |
| 주의 | #ff920014 | 확인 필요 | #ff9200 |
| 오류(입력) | — | #ff42426e | #ff4242 |
| 위험 버튼 | #ff42421f | — | #e52222 |
| 정보 | — | — | 브랜드 파랑(섹션 메시지 아이콘) |

### 화면 모드
- 라이트·다크 두 모드가 공식 토큰으로 있다. 위 "다크 모드" 표가 같은 역할 이름의 다크 값이다.
- 다크에서는 파랑을 한 단계 밝게(blue 50 → 60), 회색 막 투명도를 한 단계 진하게(8% → 22%, 16% → 28%) 올린다. 떠 있는 면은 #212225로 바탕(#1b1c1e)보다 밝다.
- 고대비 모드 토큰: 공개 자료에서 확인 못 함. 확인 필요.

### 색 사용 규칙
- UI 글자·면은 coolNeutral 줄을 쓴다. 순수 회색(neutral)과 섞지 않는다.
- 선·약한 면은 #70737c + 정해진 투명도 단계(0, 5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97, 100%)로만 만든다. 투명도를 못 쓰는 곳은 `…Opaque` 불투명 선을 쓴다.
- #0066ff는 주요 버튼 면, 브랜드 글자, 하단 탭 선택, 포커스(선 #0066ff6e·링 #0066ff1f)에 쓴다.
- 선택된 칩은 면 #0066ff0d 또는 선 #0066ff47로, 버튼처럼 꽉 채우지 않는다.
- 위험 행동은 빨강을 채우지 않는다. 면 #ff42421f + 글자 #e52222.
- 정보 상태는 따로 색을 두지 않고 브랜드 파랑을 쓴다.

### Don't
- 선·약한 면에 새 불투명 회색 HEX를 새로 만들지 않는다(`…Opaque` 세 단계만 예외).
- 투명도를 정해진 15단계 밖(예: 10%, 20%)으로 쓰지 않는다.
- 위험 버튼을 #ff4242로 꽉 채우지 않는다.
- 다크 모드에서 라이트 HEX를 그대로 두지 않는다. 같은 역할의 다크 값으로 바꾼다.
- UI 글자에 순수 회색(neutral) 줄을 쓰지 않는다.

## 3. 타이포그래피
- 글꼴: Pretendard JP(SIL OFL). 한국어·영어·일본어를 한 글꼴로 맞추려고 JP 판을 기본으로 쓴다. 웹은 jsDelivr의 dynamic subset CSS로 불러오도록 안내한다.
- 대체 글꼴: 확인 필요(코드에 전체 font-family 순서 정의를 찾지 못함)
- 브랜드 서체 Wanted Sans는 공식 문서에서 별도로 소개한다. UI 기본 글꼴은 Pretendard JP다.
- 크기·행간은 rem 단위. 아래 px는 1rem = 16px 기준(표의 pt = px).
- 굵기: display·title은 regular 400 / medium 500 / bold 700. heading 이하는 bold가 600이다. 표의 굵기 칸에는 각 단계의 bold 값을 적었다. 모든 단계에 400·500도 있다.
- 자간: 큰 글자는 좁히고(-3.19%), 작은 글자는 넓힌다(+3.11%). 17px(headline2)에서 0이다.
- 긴 글을 읽는 곳은 `Reading` 변형으로 행간만 넓힌다.
- 줄바꿈: 개발 시 음절 단위로 줄이 바뀌므로 디자인에서 따로 줄바꿈하지 않아도 된다고 문서가 설명한다.

### 위계와 사용처
| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| display1 | 56 | 700 | 72px | 랜딩 큰 제목 (자간 -0.0319em) |
| display2 | 40 | 700 | 52px | 큰 제목 (자간 -0.0282em) |
| display3 | 36 | 700 | 48px | 큰 제목 (자간 -0.027em) |
| title1 | 32 | 700 | 44px | 페이지 제목 (자간 -0.0253em) |
| title2 | 28 | 700 | 38px | 페이지 제목 (자간 -0.0236em) |
| title3 | 24 | 700 | 32px | 섹션 제목 (자간 -0.023em) |
| heading1 | 22 | 600 | 30px | 섹션 제목 (자간 -0.0194em) |
| heading2 | 20 | 600 | 28px | 카드 제목 (자간 -0.012em) |
| headline1 | 18 | 600 | 26px | 소제목 (자간 -0.002em) |
| headline2 | 17 | 600 | 24px | 탭(중·대) (자간 0) |
| body1 | 16 | 600 | 24px | 본문 (자간 0.0057em) |
| body1-reading | 16 | 600 | 26px | 긴 본문 (자간 0.0057em) |
| body2 | 15 | 600 | 22px | 큰 버튼, 큰 입력창, 작은 탭 (자간 0.0096em) |
| body2-reading | 15 | 600 | 24px | 긴 본문 (자간 0.0096em) |
| label1 | 14 | 600 | 20px | 중간 버튼, 중간 입력창, 큰 칩 (자간 0.0145em) |
| label1-reading | 14 | 600 | 22px | 설명 (자간 0.0145em) |
| label2 | 13 | 600 | 18px | 중간 칩, 카드 메타 (자간 0.0194em) |
| caption1 | 12 | 600 | 16px | 작은 버튼, 작은 칩 (자간 0.0252em) |
| caption2 | 11 | 600 | 14px | 가장 작은 칩 (자간 0.0311em) |

컴포넌트별 글자 묶음

| 컴포넌트 | 크기 | 굵기 |
|---|---|---|
| 버튼 large / medium / small·xsmall | 15 / 14 / 12px | 600 |
| 입력창 large / medium | 15 / 14px | 400 |
| 칩 large / medium / small / xsmall | 14 / 13 / 12 / 11px | 500 |
| 탭 small / medium·large | 15 / 17px | 600 |
| 카드 메타 줄 | 13px | 500 |
| 스낵바 버튼 | 15px | 600(bold) |

### 규칙
- 본문은 body1 16px / 24px, 긴 글은 body1-reading(행간 26px)으로 행간만 넓힌다.
- 버튼 글자는 600: large 15px, medium 14px, small·xsmall 12px. 입력창 글자는 400(large 15px, medium 14px).
- 칩 글자는 500, 카드 메타 줄은 13px / 500.
- 탭 글자는 small 15px, medium·large 17px, 모두 600.
- 디자인에서 줄바꿈을 따로 넣지 않는다(음절 단위로 바뀜).
- 크기·행간은 rem으로 구현한다(1rem = 16px).

### Don't
- heading 이하 단계에 700을 쓰지 않는다. 그 단계의 bold는 600이다.
- 긴 글에서 글자 크기를 키워 가독성을 맞추지 않는다. `Reading` 변형으로 행간만 넓힌다.
- 자간을 단계와 다르게 임의로 주지 않는다(큰 글자 음수, 작은 글자 양수).
- 한·영·일 글꼴을 나눠 섞지 않는다. Pretendard JP 하나로 쓴다.
- 시안에 수동 줄바꿈을 넣지 않는다.

## 4. 레이아웃·간격
- 간격 단계(pt): 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 (px. 이 밖에 0과 0.5도 토큰에 있다)
- 기본 단위: 4px. 시각 보정이 필요하면 2px, 피할 수 없을 때만 1px 단위로 움직인다(공식 문서 원칙).
- 기준 화면(대표 작업 크기): 웹 데스크톱 1440×960px(콘텐츠 1100px), 웹 모바일 375×635px, iOS 375×812pt, Android 360×800dp.
- 화면 좌우 여백(모바일): 20px. 탭 목록 기본 좌우 여백과 컬럼 간격이 모두 20px이다.

### 그리드와 중단점
- 컬럼 사이 20px, 해상도에 따라 컬럼을 합쳐 쓴다. 모바일 2단, 태블릿 3단. 데스크톱 컬럼 수는 확인 필요.

| 구간 | 너비 | 대상 | 최대 콘텐츠 너비 |
|---|---|---|---|
| xs | 0–768px | 모바일 | - |
| sm | 768–992px | 태블릿 세로 | - |
| md | 992–1200px | 태블릿 가로 | - |
| lg | 1200–1600px | 데스크톱 | 1100px(여백 포함) |
| xl | 1600px 이상 | 대형 데스크톱 | 1440px(여백 포함) |

### 컴포넌트 안쪽 여백
| 대상 | 값 |
|---|---|
| 버튼 large / medium / small / xsmall | 13px 20px / 10px 16px / 8px 12px / 6px 10px |
| 입력창 large / medium | 12px 8px / 10px 6px (입력 글자 좌우 4px 추가) |
| 모달 상단 바·본문 | 24px |
| 섹션 메시지 | 12px |
| 토스트·스낵바 | 11px 16px, 요소 사이 16px |
| 탭 위아래 small / medium / large | 9 / 12 / 14px, 좌우 12px(꽉 채움 모드 0) |
| 하단 탭 바 위아래 | 9px |

### 요소 사이 간격
| 구간 | 값 |
|---|---|
| 버튼 아이콘-글자 | 4px(large 6px) |
| 카드 메타 줄 요소 사이 | 6–8px |
| 리스트 카드 요소 사이 | 12–16px |
| 리스트 카드 앞뒤 썸네일 공간 | 36–40px |

- 화면 세로 리듬(헤더→제목, 구획 사이)은 공개 자료에 없다. 확인 필요.

### 간격 적용 규칙
- 모바일 좌우 여백과 컬럼 간격은 둘 다 20px로 맞춘다.
- 버튼 안 아이콘-글자 간격은 4px(large 6px).
- 카드 메타 줄 요소 사이 6–8px, 리스트 카드 요소 사이 12–16px.
- 모달 안 여백은 상단 바·본문 모두 24px, 섹션 메시지는 12px, 토스트는 11px 16px.

### Don't
- 4px 단위 밖의 간격(예: 5px, 7px, 18px)을 쓰지 않는다. 보정은 2px, 불가피할 때만 1px.
- 모바일 좌우 여백과 컬럼 간격을 서로 다르게 두지 않는다(둘 다 20px).
- 콘텐츠를 lg에서 1100px, xl에서 1440px보다 넓게 펼치지 않는다.
- 모달 안 여백을 24px 밖으로 바꾸지 않는다.

## 5. 모서리·고도·모션
### 모서리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius 4 | 4px | 작은 요소 |
| radius 8 | 8px | xsmall 버튼·칩, 중간 입력창 안 버튼 |
| radius 10 | 10px | small 버튼, small·medium 칩 |
| radius 12 | 12px | medium 버튼, 중간 입력창, large 칩, 토스트·스낵바 |
| radius 14 | 14px | large 버튼, 큰 입력창 |
| radius 16 | 16px | 카드류 |
| radius 20 | 20px | 카드류 |
| radius 24 | 24px | 팝업 모달 |
| radius 28 | 28px | 큰 면 |
| radius 32 | 32px | 바텀시트 위쪽 모서리 |
| radius full | 9999px | 원형 |

- 모서리는 요소 크기를 따라 커진다: 28px 버튼 8 → 32px 10 → 40px 12 → 48px 14 → 카드 16·20 → 모달 24 → 바텀시트 32. 전체 화면 모달은 0.

### 고도(층)
- 그림자 색은 #171717에 투명도를 준다.
  - shadow.normal.xsmall: 0 1px 2px -1px #1717171a
  - shadow.normal.small: 0 2px 4px -2px #1717170f, 0 4px 6px -1px #1717170f
  - shadow.normal.medium: 0 4px 6px -2px #17171712, 0 10px 15px -3px #17171712
  - shadow.normal.large: 0 6px 10px -4px #17171714, 0 16px 24px -6px #17171714
  - shadow.normal.xlarge: 0 10px 15px -5px #1717171a, 0 24px 38px -10px #1717171f
  - shadow.spread.small: 0 0 60px 0 #1717171a
  - shadow.spread.medium: 0 15px 75px 0 #17171729 (바텀시트)
  - 그림자에는 `filter: drop-shadow` 판(drop.xsmall~xlarge)도 따로 있다. 투명 이미지 둘레에 쓴다.
- 테두리는 `border` 대신 `box-shadow: inset 0 0 0 1px`로 그린다. 기본 색 line.neutral.secondary(#70737c29).
- 면으로 층 나누기: 바탕 #ffffff ↔ 회색 바탕 #f7f7f8, 떠 있는 면 surface.elevated(라이트 #ffffff, 다크 #212225).
- 각 그림자 단계를 어느 컴포넌트에 쓰는지는 바텀시트(spread.medium) 외에 확인 필요.

### 모션
| 대상 | 길이·이징 |
|---|---|
| 호버·누름 | 0.15s ease |
| 입력 테두리 | 0.2s ease |
| 토스트 등장·퇴장 | 0.2s ease |
| 바텀시트 자리 잡기 | 280ms ease |
| 누름 크기 축소(일부 변형) | scale 0.95 |

- 이징 토큰은 따로 없다. 줄인 움직임(reduced motion) 설정 대응은 확인 필요.

### Don't
- 테두리를 `border`로 그려 요소 크기를 바꾸지 않는다. `box-shadow: inset 0 0 0 1px`.
- 버튼 크기와 맞지 않는 모서리를 쓰지 않는다(예: 48px 버튼에 8px).
- 그림자 색에 순수 검정(#000000)을 쓰지 않는다. #171717 + 투명도다.
- 바텀시트 위 모서리를 32px 외 값으로 바꾸지 않는다.

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 보지 못한 상태는 `확인 필요`. 접근성 메모 중 공식 자료에 근거가 없는 것은 `(구현 권장)`을 달았다.

### 6.1 버튼
**크기**

| 크기 | 최소 높이 | 안 여백 | 글자 | 모서리 | 아이콘 |
|---|---|---|---|---|---|
| large | 48px | 13px 20px | 15px / 600 | 14px | 16px |
| medium | 40px | 10px 16px | 14px / 600 | 12px | 14px |
| small | 32px | 8px 12px | 12px / 600 | 10px | 12px |
| xsmall | 28px | 6px 10px | 12px / 600 | 8px | 12px |

- 아이콘과 글자 사이 4px(large 6px).

**종류**

| 종류 | 모양 | 쓰는 곳 |
|---|---|---|
| solid primary | #0066ff 면 + 흰 글자 | 화면의 주요 행동 |
| solid assistive | #70737c14 면 + #2e2f33e0 글자 | 보조 행동 |
| solid negative | #ff42421f 면 + #e52222 글자 | 삭제 같은 위험 행동 |
| outlined primary | 투명 면 + 1px #70737c29 선 + 파란 글자 | 브랜드 색을 약하게 둘 보조 행동 |
| outlined assistive | 투명 면 + 1px #70737c29 선 + #171719 글자 | 중립 보조 행동 |

**상태**

| 상태 | 모양 |
|---|---|
| 호버 | 위에 깐 막 5%(약한 변형 3.75%, 강한 변형 7.5%) |
| 누름 | 막 12%(약한 9%, 강한 18%), 일부 변형 scale 0.95 |
| 비활성 | 면 #f4f4f5, 글자 #37383c29. 아웃라인은 선을 그대로 두고 글자만 흐리게 |
| 로딩 | 확인 필요 |

- 전환 0.15s ease.

**규칙**
- 위험 행동에 빨강을 꽉 채운 버튼을 쓰지 않는다(solid negative는 옅은 면).
- 높이·모서리·글자는 한 묶음으로 쓴다. 높이만 바꾸지 않는다.
- 한 화면의 solid primary는 주요 행동에만 둔다(관찰에서 정리).
- 버튼 문구 꼴: 확인 필요(공개 UX 라이팅 지침 없음).
- 접근성: large 48px만 44pt를 넘는다. medium 이하는 누르는 영역을 넓힌다 (구현 권장). 포커스 표시는 입력창과 같은 바깥 4px 링을 쓴다 (구현 권장).

### 6.2 입력창
**크기**

| 크기 | 안 여백 | 글자 | 모서리 | 아이콘 |
|---|---|---|---|---|
| large | 12px 8px (입력 글자 좌우 4px 추가) | 15px / 400 | 14px | 20px |
| medium | 10px 6px (입력 글자 좌우 4px 추가) | 14px / 400 | 12px | 18px |

**상태**

| 상태 | 안쪽 선 | 바깥 링 | 면 |
|---|---|---|---|
| 기본 | #70737c29 | — | — |
| 포커스 | #0066ff6e | 4px #0066ff1f | — |
| 오류 | #ff42426e | — | — |
| 오류 + 포커스 | #ff424285 | 4px #ff42421f | — |
| 비활성 | #70737c14 | — | #70737c0d |

- 테두리 전환 0.2s ease. 중간 입력창 안 버튼은 모서리 8px.

**규칙**
- 포커스는 선과 링 두 겹으로 표시한다. 링만 또는 선만 쓰지 않는다.
- 오류는 빨간 선으로 보이고, 오류 상태에서도 포커스 링을 유지한다.
- 접근성: 오류 시 `aria-invalid="true"`와 도움말 연결(`aria-describedby`) (구현 권장). 라벨을 placeholder로 대신하지 않는다 (구현 권장).

### 6.3 칩
**크기**

| 크기 | 높이 | 모서리 | 글자 |
|---|---|---|---|
| xsmall | 24px | 8px | 11px / 500 |
| small | 32px | 10px | 12px / 500 |
| medium | 36px | 10px | 13px / 500 |
| large | 40px | 12px | 14px / 500 |

**종류와 상태**

| 종류 | 기본 | 선택 |
|---|---|---|
| solid | 면 #70737c0d | 면 #0066ff0d + 파란 글자 |
| outlined | 1px #70737c29 선 | 1px #0066ff47 선 |

- 호버·누름은 버튼과 같은 막 방식으로 보이나 칩 개별 값은 확인 필요. 비활성 확인 필요.

**규칙**
- 선택된 칩을 파랑으로 꽉 채우지 않는다.
- 접근성: 선택 칩에 `aria-pressed` 또는 `aria-selected` (구현 권장).

### 6.4 탭
| 크기 | 위아래 여백 | 글자 |
|---|---|---|
| small | 9px | 15px / 600 |
| medium | 12px | 17px / 600 |
| large | 14px | 17px / 600 |

- 좌우 12px(꽉 채움 모드는 0). 탭 목록 기본 좌우 여백 20px.
- 선택된 탭 글자 #000000, 아닌 탭 #37383c9c. 선택 표시 막대 높이 2px. 탭 목록 아래 1px 선.

**규칙**
- 선택은 글자 색(검정)과 2px 막대로 함께 표시한다.
- 접근성: `role="tablist"`·`role="tab"`·`aria-selected` (구현 권장).

### 6.5 카드·리스트 카드
| 항목 | 값 |
|---|---|
| 카드 모서리 | 16 / 20px |
| 카드 메타 줄 | 13px / 500, 요소 사이 6–8px |
| 리스트 카드 썸네일 공간 | 앞뒤 36–40px |
| 리스트 카드 요소 사이 | 12–16px |
| 리스트 카드 제목 | 15–16px bold |

- 썸네일 컴포넌트에 비율·모서리·테두리 옵션이 있다.
- 상태: 확인 필요.

**규칙**
- 카드 테두리도 inset box-shadow 1px로 그린다.
- 접근성: 썸네일 대체 텍스트 (구현 권장).

### 6.6 하단 탭 바·상단 바
| 항목 | 값 |
|---|---|
| 하단 탭 바(BottomNavigation) 높이 | 56px, 위아래 9px |
| 위쪽 선 | 1px #70737c14 |
| 선택 / 비선택 | #0066ff / #989ba2 |
| 상단 바 | 확인 필요 |

- 접근성: 선택 탭에 `aria-current="page"` (구현 권장). 비선택 #989ba2는 2.8:1이라 아이콘 모양 변화도 함께 준다 (구현 권장).

### 6.7 모달·바텀시트
| 종류 | 크기·모양 |
|---|---|
| 팝업 모달 | 너비 medium 360px, large 480px, xlarge 560px, 최소 320px. 모서리 24px. 안 여백 24px |
| 전체 화면 모달 | 모서리 0 |
| 바텀시트 | 위쪽 모서리 32px, 그림자 0 15px 75px #17171729, 자리 잡는 시간 280ms ease |
| 딤 | #17171985 (다크 #171719bd) |

**규칙**
- 모바일에서는 아래쪽 바텀시트, 넓은 화면에서는 팝업 모달을 쓴다(관찰에서 정리).
- 팝업 모달을 320px보다 좁게 만들지 않는다.
- 접근성: `role="dialog"`, `aria-modal="true"`, 포커스 가두기와 닫힐 때 되돌리기 (구현 권장).

### 6.8 토스트·스낵바·섹션 메시지
| 종류 | 모양 |
|---|---|
| 토스트·스낵바 | 모서리 12px, 안 여백 11px 16px, 요소 사이 16px. 바탕 #1b1c1e 52% 투명 + #0066ff 5% 막 한 겹 + 뒤 32px 흐림. 너비 768px 이상 356–420px, 그 아래 꽉 채움. 등장·퇴장 0.2s ease |
| 스낵바 버튼 | 글자 15px bold |
| 섹션 메시지(안내 박스) | 안 여백 12px. 상태별로 앞 아이콘 색만 바꾼다(성공 초록, 주의 주황, 오류 빨강, 정보 파랑) |
| 배지 | 확인 필요 |

**규칙**
- 행동이 붙으면 스낵바, 알림만이면 토스트를 쓴다.
- 섹션 메시지는 면 색을 바꾸지 않고 아이콘 색으로 상태를 나눈다.
- 접근성: 토스트에 `role="status"` (구현 권장). 상태를 아이콘 색만으로 알리지 않고 문구를 함께 쓴다 (구현 권장).

### 6.9 아이콘·이미지
- 아이콘: 단순하고 현대적인 형태가 기본. 공식 문서에서 키워드로 검색할 수 있다. 입력창 안 18–20px, 버튼 안 12–16px.
- 일러스트·사진: 확인 필요.

## 7. 패턴
- 목록 → 상세: 리스트 카드(썸네일 36–40px + 제목 15–16px bold + 13px 메타 줄)로 목록을 만든다. 상세 화면 구성은 확인 필요.
- 상태 알림: 화면 안 안내는 섹션 메시지(아이콘 색만 상태별로), 잠깐 알림은 반투명 흐림 토스트, 행동이 붙으면 스낵바(버튼 15px bold).
- 선택지 고르기: 칩 solid/outlined, 선택은 파란 옅은 면(#0066ff0d) 또는 파란 선(#0066ff47).
- 큰 결정·입력: 팝업 모달(360/480/560px, 모서리 24px), 모바일 아래쪽에서 바텀시트(위 모서리 32px).
- 반응형: 768/992/1200/1600px 구간에서 컬럼을 합쳐 쓰고, 콘텐츠 최대 1100px(lg)·1440px(xl).
- 검색: 확인 필요.

### 오류
- 입력 오류는 빨간 선 #ff42426e. 오류 문구 말투는 공개 지침이 없어 확인 필요.

### 빈 상태·로딩
- 확인 필요(공개 컴포넌트 목록에 빈 상태·스켈레톤이 없다).

### 폼·지원 흐름
- 입력창 large·medium 두 크기와 다섯 상태만 공개. 채용 지원 흐름은 확인 필요.

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값). 투명도가 있는 글자·면은 흰 바탕(#ffffff) 위에 섞은 색으로 계산했다.

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #171719 | #ffffff | 17.9:1 | 통과 |
| #2e2f33e0 | #ffffff | 9.1:1 | 통과 |
| #37383c9c | #ffffff | 3.7:1 | 미달(큰 글자 3:1은 통과) |
| #37383c47 | #ffffff | 1.7:1 | 미달 |
| #ffffff | #0066ff | 4.8:1 | 통과 |
| #0066ff | #ffffff | 4.8:1 | 통과 |
| #2e2f33e0 | #70737c14 | 8.4:1 | 통과 |
| #e52222 | #ff42421f | 3.9:1 | 미달(큰 글자 3:1은 통과) |
| #989ba2 | #ffffff | 2.8:1 | 미달 |
| #f7f7f8 | #1b1c1e | 15.9:1 | 통과 |

- 대비 메모: 설명·비선택 탭 글자(#37383c9c)는 본문 기준에 모자란다. 하단 탭 비선택(#989ba2)은 2.8:1이다. 위험 버튼(15px 600 이하)은 본문 기준 미달이다. 주요 버튼(흰 글자/#0066ff)은 4.8:1로 통과한다.
- 터치 영역: 버튼 large 48px는 44pt 기준을 넘고, medium 40px·small 32px·xsmall 28px는 모자란다. 칩 24~40px도 낮다. 하단 탭 바 높이 56px는 넉넉하다.
- 최소 글자 크기: caption2 11px(가장 작은 칩).

### 점검 목록
| 항목 | 상태 |
|---|---|
| 포커스 표시 | 입력창: 바깥 4px 링(#0066ff1f) + 선(#0066ff6e) 공식 정의. 그 밖의 요소는 확인 필요 |
| 키보드 조작 | 확인 필요 |
| 스크린리더 | 확인 필요. 아이콘만 있는 버튼에 `aria-label` (구현 권장) |
| 글자 확대 | 크기가 rem 단위라 브라우저 글자 크기 설정을 따를 것으로 보이나 공식 설명은 확인 필요 |
| 대체 텍스트 | 확인 필요 |
| 다크 모드 대비 | 본문 #f7f7f8/#1b1c1e 15.9:1. 그 밖 쌍은 확인 필요 |
| 터치 영역 44pt | large 버튼·하단 탭 바만 충족 |
| 색 외 단서 | 섹션 메시지는 아이콘 모양으로도 상태를 나누는지 확인 필요 |

## 9. 글쓰기 톤
- 말투: 확인 필요. 공개 문서와 저장소에서 UX 라이팅 지침을 찾지 못했다.
- 버튼 문구 꼴: 확인 필요
- 숫자·단위 표기: 확인 필요

## 10. Do & Don't
아래 규칙은 Montage 공식 문서·코드 값에서 SylviaLab이 정리한 것이다. 간격 단위 규칙만 공식 문서 원칙이고, 나머지는 (관찰에서 정리)다.

### Do
- 간격은 4px 단위로, 보정이 필요할 때만 2px·1px 단위로 움직인다(공식 문서 원칙).
- 선은 `box-shadow: inset 0 0 0 1px #70737c29`로 그린다.
- 버튼 높이·모서리·글자를 한 묶음으로 쓴다: 48/14/15px, 40/12/14px, 32/10/12px, 28/8/12px.
- 입력창 포커스는 안쪽 선 #0066ff6e + 바깥 4px 링 #0066ff1f로 표시한다.
- 호버는 5%, 누름은 12% 막을 얹어 표시하고 0.15s ease로 바꾼다.
- 모바일 좌우 여백과 컬럼 간격을 20px로 맞춘다.
- 다크 모드는 역할 토큰의 다크 값으로 바꾼다(예: #0066ff → #3385ff, #ffffff → #1b1c1e).

### Don't
- 선·약한 면에 불투명 회색 HEX를 새로 만들지 않는다. #70737c + 정해진 투명도 단계만 쓴다(못 쓰는 곳은 …Opaque).
- 호버·누름 때 버튼 색 자체를 다른 HEX로 바꾸지 않는다.
- 위험 버튼을 #ff4242로 꽉 채우지 않는다(면 #ff42421f + 글자 #e52222).
- UI 글자·면에 순수 회색(neutral)을 쓰지 않는다(coolNeutral).
- 디자인 시안에서 줄바꿈을 손으로 넣지 않는다.
- 팝업 모달을 320px보다 좁게 만들지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: wanteddev/montage-web 저장소의 theme 패키지(atomic, semantic, typography, radius, spacing, opacity, breakpoint)와 core 패키지(button, text-field, chip, tab, bottom-navigation, modal, toast, snackbar, card, list-card, section-message, with-interaction). npm 패키지 이름·버전은 확인 필요.
- 저장소: https://github.com/wanteddev/montage-web (MIT)
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공식 문서 https://montage.wanted.co.kr, 저장소 docs(grid, typography, icons). Storybook은 공개 자료 없음.
- 글꼴 불러오기: core README.ko.md에 Pretendard JP를 jsDelivr dynamic subset CSS로 불러오는 안내가 있다.
- 버전·변경 관리: 공개 자료 없음

## 12. AI에 넣을 때
```
원티드(Montage) 스타일로 디자인해 줘.
- 주색: #0066ff (포커스 선 #0066ff6e, 링 #0066ff1f)
- 글자: 본문 #171719, 보조 #2e2f33e0, 설명 #37383c9c
- 배경: #ffffff, 회색 바탕 #f7f7f8, 회색 면 #70737c14
- 선: #70737c29 (1px inset box-shadow), 투명도 단계 밖 회색 금지
- 상태: 성공 #00bf40, 주의 #ff9200, 오류 #ff4242 (위험 버튼은 면 #ff42421f + 글자 #e52222)
- 글꼴: Pretendard JP, 본문 16/24, 버튼 14–15px 600
- 모서리: 버튼 12px(large 14px), 모달 24px, 바텀시트 32px
- 간격 단위: 4px, 모바일 좌우 20px, 컬럼 간격 20px
- 버튼: 높이 40/48px, 호버 5%·누름 12% 막
- 다크: 파랑 #3385ff, 바탕 #1b1c1e, 본문 #f7f7f8
- 분위기: 얇은 선과 옅은 푸른 회색, 파랑은 한 화면에 한 번
```

## 13. 참고 자료
- https://montage.wanted.co.kr (확인 2026-10-31)
- https://github.com/wanteddev/montage-web (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/packages/theme/src/theme — atomic(blue, coolNeutral, neutral, green, orange, red, common), semantic, typography, radius, spacing, opacity, breakpoint (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/packages/core/src/components — button, text-field, chip, tab, bottom-navigation, modal, toast, snackbar, card, list-card, section-message, with-interaction (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/tree/main/docs/src/features/docs/components/foundations — grid, typography, icons (확인 2026-10-31)
- https://github.com/wanteddev/montage-web/blob/main/packages/core/README.ko.md — Pretendard JP 불러오기 안내 (확인 2026-10-31)

근거와 한계
- 값은 모두 Montage 공식 문서와 오픈소스 저장소에서 읽었다. 실제 원티드 화면의 computed style은 재지 않았다.
- 확인 필요: 대체 글꼴 순서, 데스크톱 컬럼 수, 상단 바 수치, info 토큰, UX 라이팅 지침, 일러스트 규칙.
- 원칙(1장)·사용 규칙·패턴(7장)·Do & Don't(10장)는 공식 값에서 SylviaLab이 정리했고, 대비(8장)는 문서 HEX로 계산했다.

서비스 이름과 브랜드는 (주)원티드랩의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.

## 부록 A. 구현 매핑
이 문서의 토큰 이름과 Montage 저장소 이름을 아래처럼 잇는다(wanteddev/montage-web, 2026-10-31 확인).

| DESIGN.md | Montage 이름·위치 |
|---|---|
| `colors.blue-*`, `colors.cool-neutral-*` | theme/atomic (blue, coolNeutral) |
| `colors.primary` | semantic `surface.brand.primary`, `foreground.brand.primary` |
| `colors.text-primary` ~ `text-quaternary` | semantic `foreground.neutral.primary` ~ `quaternary` |
| `colors.border` | semantic `line.neutral.secondary` |
| `colors.line-opaque*` | semantic `line.neutral.*Opaque` |
| `colors.dimmer` | semantic `effect.dimmer.primary` |
| `colors.*-dark` | semantic 다크 테마 같은 이름 |
| `opacity` | theme/opacity |
| `typography.*` | theme/typography (display1 ~ caption2, Reading 변형) |
| `rounded.*` | theme/radius |
| `spacing.*` | theme/spacing |
| `layout.breakpoints` | theme/breakpoint |
| `interaction.*` | core/with-interaction |
| `components.button-*` | core/button |
| `components.text-field-*` | core/text-field |
| `components.chip-*` | core/chip |
| `components.tab*` | core/tab |
| `components.bottom-navigation` | core/bottom-navigation |
| `components.modal`, `bottom-sheet` | core/modal |
| `components.toast` | core/toast, core/snackbar |
| `components.section-message` | core/section-message |

- npm 패키지 이름·버전은 확인 필요. 저장소 소스를 기준으로 맞춘다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: atomic 팔레트(blue, coolNeutral)와 semantic 라이트·다크 값 전부, 투명도 15단계, 글자 단계(크기·행간·자간·굵기), 모서리·간격 단계, 중단점과 최대 콘텐츠 너비, 대표 작업 크기, 그림자 값, 호버·누름 막 투명도, 모션 길이, 버튼·입력창·칩·탭·하단 탭 바·모달·바텀시트·토스트·섹션 메시지 수치, 4px 간격 원칙(montage.wanted.co.kr, wanteddev/montage-web theme·core).
- **화면에서 잰 값(관찰)**: 없음. 실제 원티드 화면의 computed style은 재지 않았다.
- **SylviaLab이 정리·권장한 것**: YAML의 줄임 역할 이름(`primary`, `text-primary`, `border` 등)과 원시값 참조 연결, 원칙 2~5, 상태 조합 표, 컴포넌트별 글자 묶음 표, Don't 목록, 패턴 정리, `(구현 권장)` 접근성 메모, 대비 계산값(투명 색은 흰 바탕에 섞어 계산).
