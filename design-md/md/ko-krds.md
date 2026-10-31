---
version: "1.0"
name: "KRDS(대한민국 정부)"
description: "색 단계 숫자로 대비를 약속하는 매직 넘버, 다크 모드 대신 검정 바탕의 선명한 화면 모드, 본문 17px·행간 150%·기본 버튼 56px, 그리고 rem 기반 오픈소스 토큰 배포로 누구나 읽기 쉬운 공공 화면을 만드는 시스템"
source:
  - "https://www.krds.go.kr (스타일 가이드: 색상·타이포그래피·레이아웃)"
  - "https://github.com/KRDS-uiux/krds-uiux v1.1.0 — resources/css/token/krds_tokens.css (2024-12-09 생성본)"
  - "같은 저장소 resources/css/common/common.css, resources/css/component/component.css, html/code/*.html"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 단위 규칙: html 루트 62.5%(=10px), 크기는 rem으로 구현한다 (1.7rem = 17px).
# 아래 값은 읽기 쉽게 px로 적었다.
# ─────────────────────────────────────────────
units:
  root-font-size: "10px"   # --krds-font-size-base: 62.5%
  implementation: "rem"    # 화면 크기 조정(0.9~1.5배)이 동작하려면 px 고정 금지

colors:
  # ── Primitive: Primary(정부 파랑), 공식 light 값 5~95 ──
  primary-5: "#ecf2fe"
  primary-10: "#d8e5fd"
  primary-20: "#b1cefb"
  primary-30: "#86aff9"
  primary-40: "#4c87f6"
  primary-50: "#256ef4"    # 대표색. 주요 버튼 채움, 링크, 포커스 링
  primary-60: "#0b50d0"    # hover, 강조 글자
  primary-70: "#083891"    # pressed
  primary-80: "#052561"
  primary-90: "#03163a"
  primary-95: "#020f27"
  # ── Primitive: Secondary(정부 남색) ──
  secondary-5: "#eef2f7"   # 공식 배너 바탕
  secondary-10: "#d6e0eb"
  secondary-20: "#bacbde"
  secondary-30: "#90b0d5"
  secondary-40: "#6b96c7"
  secondary-50: "#346fb2"  # 글자 선택(::selection) 바탕
  secondary-60: "#1c589c"
  secondary-70: "#063a74"
  secondary-80: "#052b57"
  secondary-90: "#031f3f"
  secondary-95: "#02162c"
  # ── Primitive: Gray ──
  gray-0: "#ffffff"
  gray-5: "#f4f5f6"
  gray-10: "#e6e8ea"
  gray-20: "#cdd1d5"
  gray-30: "#b1b8be"
  gray-40: "#8a949e"
  gray-50: "#6d7882"
  gray-60: "#58616a"
  gray-70: "#464c53"
  gray-80: "#33363d"
  gray-90: "#1e2124"
  gray-95: "#131416"
  gray-100: "#000000"
  # ── Primitive: Point(정부 빨강, 아주 작은 면적에만) ──
  point-5: "#fbeff0"
  point-10: "#f5d6d9"
  point-20: "#ebadb2"
  point-50: "#d63d4a"
  point-60: "#ab2b36"
  # ── Primitive: System(상태) — 바탕 5, 테두리·아이콘 50, 글자 60 ──
  danger-5: "#fdefec"
  danger-10: "#fcdfd9"
  danger-20: "#f7afa1"
  danger-50: "#de3412"
  danger-60: "#bd2c0f"
  danger-70: "#8a240f"
  warning-5: "#fff3db"
  warning-10: "#ffe0a3"
  warning-20: "#ffc95c"
  warning-30: "#ffb114"
  warning-50: "#9e6a00"
  warning-60: "#8a5c00"
  success-5: "#eaf6ec"
  success-10: "#d8eedd"
  success-20: "#a9dab4"
  success-50: "#228738"
  success-60: "#267337"
  information-5: "#e7f4fe"
  information-10: "#d3ebfd"
  information-20: "#9ed2fa"
  information-50: "#0b78cb"
  information-60: "#096ab3"
  # ── Primitive: Graphic(차트·배너 전용) ──
  graphic-10: "#e5ecf9"
  graphic-30: "#98acc5"
  graphic-50: "#61758f"
  graphic-70: "#39506c"
  graphic-90: "#223a58"
  # ── Primitive: 선명한 화면 모드에서만 바뀌는 secondary(청록 계열) ──
  secondary-hc-5: "#edf6f8"
  secondary-hc-20: "#abd8e3"
  secondary-hc-50: "#268097"
  secondary-hc-60: "#1f687a"
  secondary-hc-95: "#091f25"
  # ── Alpha ──
  dim: "#000000bf"         # alpha-black75, 모달 뒤 배경
  shadow-1: "#0000000d"    # alpha-shadow1 (5%)
  shadow-2: "#00000014"    # alpha-shadow2 (8%)
  shadow-3: "#0000001f"    # alpha-shadow3 (12%)

  # ── Semantic: 화면에서는 이 이름을 먼저 쓴다 (light 모드) ──
  text-basic: "{colors.gray-90}"
  text-bolder: "{colors.gray-95}"
  text-subtle: "{colors.gray-70}"
  text-disabled: "{colors.gray-40}"      # 비활성 글자, 플레이스홀더
  text-disabled-on: "{colors.gray-50}"   # 비활성 버튼 위 글자
  text-primary: "{colors.primary-60}"
  text-secondary: "{colors.secondary-80}"
  text-danger: "{colors.danger-60}"
  text-warning: "{colors.warning-60}"
  text-success: "{colors.success-60}"
  text-information: "{colors.information-60}"
  text-point: "{colors.point-60}"
  text-basic-inverse: "{colors.gray-0}"
  link-default: "{colors.primary-50}"
  link-hover: "{colors.primary-60}"
  link-pressed: "{colors.primary-70}"
  link-visited: "#5917b8"
  background-white: "{colors.gray-0}"
  background-gray-subtler: "{colors.gray-5}"
  surface-white: "{colors.gray-0}"
  surface-gray-subtler: "{colors.gray-5}"
  surface-gray-subtle: "{colors.gray-10}"
  surface-disabled: "{colors.gray-20}"
  surface-primary-subtler: "{colors.primary-5}"
  surface-secondary-subtler: "{colors.secondary-5}"
  surface-danger-subtler: "{colors.danger-5}"
  surface-warning-subtler: "{colors.warning-5}"
  surface-success-subtler: "{colors.success-5}"
  surface-information-subtler: "{colors.information-5}"
  surface-inverse: "{colors.gray-90}"
  border-gray-light: "{colors.gray-20}"
  border-gray: "{colors.gray-30}"
  border-gray-dark: "{colors.gray-60}"
  border-gray-darker: "{colors.gray-90}"
  border-primary: "{colors.primary-50}"
  border-primary-light: "{colors.primary-10}"
  border-secondary: "{colors.secondary-70}"
  border-danger: "{colors.danger-50}"
  border-warning: "{colors.warning-50}"
  border-success: "{colors.success-50}"
  border-information: "{colors.information-50}"
  border-disabled: "{colors.gray-30}"
  border-inverse: "{colors.gray-0}"      # 포커스 안쪽 흰 선
  divider-gray-light: "{colors.gray-20}"
  divider-gray: "{colors.gray-40}"
  icon-gray: "{colors.gray-80}"
  icon-primary: "{colors.primary-50}"
  input-border: "{colors.gray-60}"
  input-surface: "{colors.gray-0}"

  # ── Semantic: 선명한 화면 모드(high-contrast) 값. 같은 역할 이름 + -hc ──
  background-white-hc: "{colors.gray-100}"
  surface-gray-subtler-hc: "{colors.gray-95}"
  surface-disabled-hc: "{colors.gray-70}"
  surface-secondary-subtler-hc: "{colors.secondary-hc-95}"
  text-basic-hc: "{colors.gray-5}"
  text-bolder-hc: "{colors.gray-10}"
  text-subtle-hc: "{colors.gray-20}"
  text-disabled-hc: "{colors.gray-60}"
  text-primary-hc: "{colors.primary-20}"
  text-secondary-hc: "{colors.secondary-hc-20}"
  text-danger-hc: "{colors.danger-20}"
  text-warning-hc: "{colors.warning-20}"
  text-success-hc: "{colors.success-20}"
  text-information-hc: "{colors.information-20}"
  text-point-hc: "{colors.point-20}"
  link-default-hc: "{colors.primary-30}"
  link-hover-hc: "{colors.primary-20}"
  link-pressed-hc: "{colors.primary-10}"
  link-visited-hc: "#c49ff9"
  border-gray-hc: "{colors.gray-70}"
  border-gray-light-hc: "{colors.gray-80}"
  border-gray-dark-hc: "{colors.gray-40}"
  input-border-hc: "{colors.gray-40}"
  input-surface-hc: "{colors.gray-90}"
  icon-gray-hc: "{colors.gray-5}"
  shadow-1-hc: "#0000001f"
  shadow-2-hc: "#00000033"
  shadow-3-hc: "#00000066"

typography:
  # 글꼴: Pretendard GOV. 토큰의 굵기는 Regular(400)·Bold(700) 두 가지. 행간은 모든 단계 1.5.
  display-large: { fontFamily: "Pretendard GOV", fontSize: "60px", mobileFontSize: "44px", fontWeight: 700, lineHeight: 1.5 }
  display-medium: { fontFamily: "Pretendard GOV", fontSize: "44px", mobileFontSize: "32px", fontWeight: 700, lineHeight: 1.5 }
  display-small: { fontFamily: "Pretendard GOV", fontSize: "36px", mobileFontSize: "28px", fontWeight: 700, lineHeight: 1.5 }
  heading-xlarge: { fontFamily: "Pretendard GOV", fontSize: "40px", mobileFontSize: "28px", fontWeight: 700, lineHeight: 1.5 }   # h1
  heading-large: { fontFamily: "Pretendard GOV", fontSize: "32px", mobileFontSize: "24px", fontWeight: 700, lineHeight: 1.5 }    # h1~h2
  heading-medium: { fontFamily: "Pretendard GOV", fontSize: "24px", mobileFontSize: "22px", fontWeight: 700, lineHeight: 1.5 }   # h2~h3, 모달 제목
  heading-small: { fontFamily: "Pretendard GOV", fontSize: "19px", fontWeight: 700, lineHeight: 1.5 }    # h3~h4, 카드 제목
  heading-xsmall: { fontFamily: "Pretendard GOV", fontSize: "17px", fontWeight: 700, lineHeight: 1.5 }   # h4~h5, 탭
  heading-xxsmall: { fontFamily: "Pretendard GOV", fontSize: "15px", fontWeight: 700, lineHeight: 1.5 }  # h5
  body-large: { fontFamily: "Pretendard GOV", fontSize: "19px", fontWeight: 400, lineHeight: 1.5 }
  body-medium: { fontFamily: "Pretendard GOV", fontSize: "17px", fontWeight: 400, lineHeight: 1.5 }      # 기본 본문
  body-small: { fontFamily: "Pretendard GOV", fontSize: "15px", fontWeight: 400, lineHeight: 1.5 }
  body-xsmall: { fontFamily: "Pretendard GOV", fontSize: "13px", fontWeight: 400, lineHeight: 1.5 }
  label-large: { fontFamily: "Pretendard GOV", fontSize: "19px", fontWeight: 400, lineHeight: 1.5 }     # large·xlarge 버튼, large 입력
  label-medium: { fontFamily: "Pretendard GOV", fontSize: "17px", fontWeight: 400, lineHeight: 1.5 }
  label-small: { fontFamily: "Pretendard GOV", fontSize: "15px", fontWeight: 400, lineHeight: 1.5 }     # small 버튼, 배지
  label-xsmall: { fontFamily: "Pretendard GOV", fontSize: "13px", fontWeight: 400, lineHeight: 1.5 }
  navigation-title-medium: { fontFamily: "Pretendard GOV", fontSize: "24px", mobileFontSize: "22px", fontWeight: 700, lineHeight: 1.5 }
  navigation-title-small: { fontFamily: "Pretendard GOV", fontSize: "19px", fontWeight: 700, lineHeight: 1.5 }
  navigation-depth-medium: { fontFamily: "Pretendard GOV", fontSize: "17px", fontWeight: 400, lineHeight: 1.5 }
  navigation-depth-small: { fontFamily: "Pretendard GOV", fontSize: "15px", fontWeight: 400, lineHeight: 1.5 }

letter-spacing:
  none: "0px"   # --krds-typo-letter-spacing-0
  wide: "1px"   # --krds-typo-letter-spacing-1 (스타일 가이드: Display 전 단계, Heading xlarge·large)

number:   # 공식 number-0 ~ number-21, number-max
  0: "0px"
  1: "1px"
  2: "2px"
  3: "4px"
  4: "6px"
  5: "8px"
  6: "10px"
  7: "12px"
  8: "16px"
  9: "20px"
  10: "24px"
  11: "28px"
  12: "32px"
  13: "36px"
  14: "40px"
  15: "44px"
  16: "48px"
  17: "56px"
  18: "64px"
  19: "72px"
  20: "80px"
  21: "96px"
  max: "1000px"   # 100rem

spacing:
  # gap: 요소 사이
  gap-1: "2px"
  gap-2: "4px"
  gap-3: "8px"
  gap-4: "12px"
  gap-5: "16px"
  gap-6: "20px"
  gap-7: "24px"
  gap-8: "32px"
  gap-9: "40px"
  gap-10: "48px"
  gap-11: "64px"
  gap-12: "80px"
  # padding: 요소 안쪽
  padding-1: "2px"
  padding-2: "4px"
  padding-3: "8px"
  padding-4: "10px"
  padding-5: "12px"
  padding-6: "16px"
  padding-7: "20px"
  padding-8: "24px"
  padding-9: "32px"
  padding-10: "40px"
  # 레이아웃 간격 (PC / 모바일)
  layout:
    header-breadcrumb: { pc: "24px", mobile: "16px" }
    breadcrumb-h1: { pc: "40px", mobile: "32px" }
    h1-h2: { pc: "48px", mobile: "32px" }
    h2-h2: { pc: "80px", mobile: "40px" }
    h2-h3: { pc: "40px", mobile: "24px" }
    h3-h3: { pc: "64px", mobile: "32px" }
    h3-h4: { pc: "24px", mobile: "16px" }
    h4-h4: { pc: "40px", mobile: "24px" }
    h4-h5: { pc: "16px", mobile: "12px" }
    h5-h5: { pc: "32px", mobile: "16px" }
    title-body-small: { pc: "16px", mobile: "8px" }
    title-body-medium: { pc: "20px", mobile: "12px" }
    title-body-large: { pc: "24px", mobile: "20px" }
    text-text-small: { pc: "12px", mobile: "10px" }
    text-text-medium: { pc: "16px", mobile: "12px" }
    text-text-large: { pc: "20px", mobile: "16px" }
    image-text-small: { pc: "20px", mobile: "16px" }
    image-text-medium: { pc: "24px", mobile: "20px" }
    image-text-large: { pc: "32px", mobile: "24px" }
    left-menu-contents: { pc: "64px", mobile: "0px" }
    contents-right: { pc: "40px", mobile: "0px" }
    contents-footer: { pc: "64px", mobile: "40px" }
  card-padding:
    large: { pc: "40px", mobile: "24px" }
    medium: { pc: "32px", mobile: "24px" }
    small: { pc: "24px", mobile: "20px" }
    xsmall: { pc: "16px", mobile: "12px" }

size:
  height-1: "8px"
  height-2: "16px"
  height-3: "20px"
  height-4: "24px"
  height-5: "32px"
  height-6: "40px"
  height-7: "48px"
  height-8: "56px"
  height-9: "64px"
  height-10: "72px"
  height-11: "80px"

rounded:
  xsmall: "2px"     # radius-xsmall1~3
  small: "4px"      # radius-small1~3
  medium-1: "6px"   # radius-medium1·2
  medium-2: "8px"   # radius-medium3·4
  large: "10px"     # radius-large1·2
  xlarge: "12px"    # radius-xlarge1·2
  max: "1000px"     # radius-max = number-max 100rem (알약·원형)

border-width:
  regular: "1px"     # 선명한 화면 모드에서는 2px (variable-regular)
  medium: "2px"      # 선명한 화면 모드에서는 3px (variable-medium)

layout:
  contents-max-width: "1200px"   # --krds-contents-size
  contents-wrap-width: "1248px"  # --krds-contents-wrap-size (좌우 여백 포함)
  contents-padding-x: { desktop: "24px", upTo1023: "16px" }
  breakpoints:   # CSS 분기: 글자 767px, 여백 1023px
    mobile: "~767px"
    tablet: "768px ~ 1023px"
    desktop: "1024px ~"
  grid:          # 스타일 가이드 레이아웃 표
    small: { minWidth: "360px", columns: 4, gutter: "16px", margin: "16px" }
    medium: { minWidth: "768px", columns: 8, gutter: "16px", margin: "24px" }
    large: { minWidth: "1024px", columns: 12, gutter: "24px", margin: "24px" }
    xlarge: { minWidth: "1280px", columns: 12, gutter: "24px", margin: "24px" }

focus:
  outline: "2px solid {colors.border-inverse}"            # 안쪽 흰 선
  box-shadow: "0 0 0 4px {colors.border-primary}"         # 바깥 파란 고리
  box-shadow-inset: "inset 0 0 0 2px {colors.border-primary}"

elevation:
  modal: "0 0 2px {colors.shadow-2}, 0 16px 24px {colors.shadow-3}"
  popover: "0 0 2px {colors.shadow-2}, 0 8px 16px {colors.shadow-3}"   # 도움 패널, 맥락 도움말 팝오버

motion:
  transition-base: "0.4s ease-in-out"
  transition-fade: "opacity 0.4s linear"
  transition-collapse: "max-height 0.4s ease"
  transition-emphasis: "0.4s cubic-bezier(0.4, 0, 0.23, 1)"   # 컴포넌트 CSS의 메뉴·패널 전환
  modal-fade: "0.2s"

zoom: [0.9, 1, 1.1, 1.3, 1.5]   # 화면 크기 조정 단계

components:
  button-xsmall: { height: "{size.height-5}", paddingX: "{spacing.padding-4}", rounded: "{rounded.small}", typography: "{typography.label-small}" }
  button-small: { height: "{size.height-6}", paddingX: "{spacing.padding-5}", rounded: "{rounded.medium-1}", typography: "{typography.label-small}" }
  button-medium: { height: "{size.height-7}", paddingX: "{spacing.padding-6}", rounded: "{rounded.medium-1}", typography: "{typography.label-medium}" }
  button-large: { height: "{size.height-8}", paddingX: "{spacing.padding-7}", rounded: "{rounded.medium-2}", typography: "{typography.label-large}" }   # 기본
  button-xlarge: { height: "{size.height-9}", paddingX: "{spacing.padding-8}", rounded: "{rounded.medium-2}", typography: "{typography.label-large}" }
  button-primary: { backgroundColor: "{colors.primary-50}", textColor: "{colors.text-basic-inverse}" }
  button-primary-hover: { backgroundColor: "{colors.primary-60}" }
  button-primary-pressed: { backgroundColor: "{colors.primary-70}" }
  button-secondary: { backgroundColor: "{colors.primary-5}", textColor: "{colors.primary-60}", borderColor: "{colors.primary-50}" }
  button-secondary-hover: { backgroundColor: "{colors.primary-10}" }
  button-secondary-pressed: { backgroundColor: "{colors.primary-20}" }
  button-tertiary: { backgroundColor: "transparent", textColor: "{colors.text-basic}", borderColor: "{colors.gray-60}" }
  button-tertiary-hover: { backgroundColor: "{colors.gray-5}" }
  button-tertiary-pressed: { backgroundColor: "{colors.gray-10}" }
  button-text: { backgroundColor: "transparent", textColor: "{colors.text-basic}" }
  button-text-hover: { backgroundColor: "{colors.secondary-5}" }
  button-text-pressed: { backgroundColor: "{colors.secondary-10}" }
  button-disabled: { backgroundColor: "{colors.gray-20}", borderColor: "{colors.gray-30}", textColor: "{colors.text-disabled-on}" }
  input-small: { height: "{size.height-6}", rounded: "{rounded.medium-1}", typography: "{typography.label-small}" }
  input-medium: { height: "{size.height-7}", rounded: "{rounded.medium-1}", typography: "{typography.label-medium}" }
  input-large: { height: "{size.height-8}", rounded: "{rounded.medium-2}", typography: "{typography.label-large}" }   # 기본
  input-xlarge: { height: "{size.height-11}", rounded: "{rounded.large}", typography: "{typography.heading-medium}" }
  input: { paddingX: "{spacing.padding-6}", backgroundColor: "{colors.input-surface}", borderColor: "{colors.input-border}", textColor: "{colors.text-subtle}", placeholderColor: "{colors.text-disabled}" }
  input-focus: { borderColor: "{colors.primary-50}", textColor: "{colors.text-basic}" }
  input-error: { borderColor: "{colors.danger-50}", messageColor: "{colors.text-danger}" }
  input-disabled: { backgroundColor: "{colors.gray-20}", borderColor: "{colors.gray-30}", textColor: "{colors.text-disabled-on}" }
  textarea: { height: "144px", paddingX: "{spacing.padding-6}", paddingY: "{spacing.padding-3}" }
  masthead: { backgroundColor: "{colors.surface-secondary-subtler}", typography: "{typography.body-small}", minHeight: "{size.height-5}" }
  card: { backgroundColor: "{colors.surface-white}", borderColor: "{colors.border-gray}", rounded: "{rounded.xlarge}", padding: "{spacing.card-padding.small}" }
  modal: { backgroundColor: "{colors.surface-white}", borderColor: "{colors.border-gray}", rounded: "{rounded.xlarge}", padding: "{spacing.padding-10}", dim: "{colors.dim}", shadow: "{elevation.modal}" }
  badge: { height: "{size.height-4}", paddingX: "{spacing.padding-3}", rounded: "{rounded.small}", typography: "{typography.label-small}" }
  badge-large: { height: "{size.height-5}", typography: "{typography.label-medium}" }
  toggle-on: { backgroundColor: "{colors.primary-50}" }
  toggle-off: { backgroundColor: "{colors.gray-50}" }
---

# KRDS(대한민국 정부) 디자인 시스템

> 근거: 공개 문서 기반 (krds.go.kr 스타일 가이드 + KRDS-uiux/krds-uiux 오픈소스 토큰·CSS)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 KRDS(Korea Design System, 대한민국 디지털 정부 디자인 시스템)를 따르는 화면을 만들 때 쓰는 기준이다. 위 YAML은 공식 토큰 값이고, 아래 글은 그 값을 **언제, 왜, 어떻게** 쓰는지 설명한다. 둘이 다르면 YAML이 우선한다. 값의 출처는 맨 아래 부록 B에 나눠 적었다.

## 1. 개요와 원칙
- 서비스 성격: 정부·공공기관 웹사이트와 앱이 같이 쓰는 표준 디자인 시스템. 운영 주체는 행정안전부 쪽 디지털 정부 사업이다. 사용자는 나이·디지털 역량·장애 여부와 관계없는 모든 국민이고, 고령층과 저시력 사용자를 기본 사용자로 본다.
- 목적: 정보를 찾고, 신청하고, 결과를 확인하는 일을 헤매지 않고 끝내게 하는 것.
- 디자인 인상 한 줄: 흰 바탕에 정부 파랑(#256ef4) 하나를 주색으로 쓰고, 큰 글자(본문 17px)와 넓은 행간(150%)으로 누구나 읽기 쉽게 만든 화면.
- 공식 시스템 이름: KRDS (Korea Design System, 대한민국 디지털 정부 디자인 시스템)
- 배포 형태: Figma 라이브러리, 디자인 토큰(JSON·CSS), HTML 컴포넌트 키트(npm `krds-uiux`, 이 문서는 v1.1.0 기준).
- 디자인 원칙(공식 원칙 문장은 옮기지 않았다. 아래는 공식 문서의 규칙과 토큰에서 정리한 것이다)
  1. 대비를 숫자로 약속한다. 색마다 5~95의 11단계를 두고 단계 차이로 대비를 보장한다(40=3:1, 50=4.5:1, 70=7:1, 90=15:1). (관찰에서 정리, 근거: krds.go.kr 색상 가이드)
  2. 크게, 넓게 읽힌다. 본문 17px, 모든 단계 행간 150%, 기본 버튼·입력 높이 56px. (관찰에서 정리)
  3. 색만으로 뜻을 전하지 않는다. 글자나 아이콘을 함께 둔다. (공식 문서: 색상 가이드)
  4. 누구에게나 맞춘다. 다크 모드 대신 검정 바탕의 선명한 화면 모드, 0.9~1.5배 화면 크기 조정, 4px 포커스 고리를 둔다. (관찰에서 정리)
  5. 주색은 적게 쓴다. 중립 60 : 보조 30 : 주색 10 비율. (공식 문서: 색상 가이드)
- 톤: 신뢰, 명료, 포용. 장식보다 읽힘이 먼저이고, 공식 사이트임을 맨 위 띠로 알린다.

### 이 문서를 읽는 AI 에이전트에게
- 색·크기·간격은 **YAML 토큰 이름으로만** 쓴다. 목록에 없는 HEX·px 값을 새로 만들지 않는다.
- 화면 코드에서는 primitive(`primary-50`)보다 semantic(`text-primary`, `border-primary`, `surface-gray-subtler`)을 먼저 쓴다. 그래야 선명한 화면 모드가 자동으로 바뀐다.
- 크기는 rem으로 구현한다(루트 10px). `font-size: 17px` 대신 `font-size: 1.7rem`.
- 파랑 채움(`primary-50`)은 한 화면의 핵심 행동 하나에만, 빨강(`point-50`)은 새 소식·필수 표시 같은 작은 면적에만 쓴다.
- 판단이 어려우면 더 큰 글자, 더 높은 대비, 더 단순한 구조를 고른다.

### 특장점
- 색 단계 숫자가 곧 대비 약속이다 — 매직 넘버 규칙에 따라 글자와 바탕은 단계 차이 40 이상(본문 50 이상)을 지킨다. 예: 흰 바탕(gray-0) 위 primary-50 #256ef4는 4.6:1, gray-90 #1e2124는 16.2:1, gray-40 #8a949e는 3.1:1이라 본문에 못 쓴다.
- 다크 모드 대신 선명한 화면 모드를 둔다 — 바탕 #000000, 본문 #f4f5f6(19.2:1), 테두리 두께 1px→2px, secondary는 남색에서 청록(#268097)으로 바뀐다. `data-krds-mode="high-contrast"` 속성 하나로 전체 semantic 토큰이 갈아 끼워진다. 이 모음의 다른 회사 파일이 라이트·다크 두 벌을 다루는 것과 다르다.
- 모든 크기가 PC·모바일 두 벌이다 — 글자 분기점 767px, 여백 분기점 1023px. h1 40/28px, 화면 좌우 여백 24/16px, 제목 사이 간격 19구간과 카드 안쪽 여백까지 PC·모바일 값을 토큰으로 따로 둔다.
- 토큰·코드가 공개 배포된다 — Figma 라이브러리, 디자인 토큰(JSON·CSS), HTML 컴포넌트 키트(npm `krds-uiux`), GitHub KRDS-uiux/krds-uiux. 컴포넌트 CSS가 `--krds-button--color-primary-text-disabled`처럼 토큰을 다시 참조해, 모드가 바뀌어도 컴포넌트 코드는 그대로다.
- 상태 색을 쓰임별 단계로 묶는다 — 아이콘·테두리 50, 글자 60, 배경 면 5(예: 오류 #de3412 / #bd2c0f / #fdefec). 비활성은 투명도 대신 정해진 회색 단계(#cdd1d5, #b1b8be, #6d7882)를 쓴다.

### 배울 점
- 색 팔레트를 만들 때 KRDS처럼 단계 숫자와 대비를 묶어(50 차이 = 4.5:1) 디자이너가 숫자만 보고 조합을 고르게 한다.
- 저시력 사용자를 챙길 때 KRDS처럼 일반 다크 모드와 별개로 검정 바탕·고대비 모드를 semantic 토큰 한 벌로 정의하고, 테두리 두께까지 모드 토큰(1px→2px)에 넣는다.
- 상태 색을 정할 때 KRDS처럼 아이콘·테두리, 글자, 배경 면에 쓸 단계를 미리 정해 두어 같은 상태가 화면마다 다른 진하기로 나오지 않게 한다.

## 2. 색상
토큰 값은 `resources/css/token/krds_tokens.css`(krds-uiux v1.1.0, 2024-12-09 생성본)에서 확인했다.

### 색 체계
KRDS 색은 **primitive → semantic** 두 층이다. 모드(기본 / 선명한 화면)는 semantic 층에서만 바뀐다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| Primitive | `primary-50`, `gray-90`, `danger-5` | 토큰 정의에만. 화면 코드에서 직접 쓰지 않는 것이 원칙 |
| Semantic | `text-basic`, `surface-gray-subtler`, `border-primary`, `button-primary-fill` | 실제 화면과 컴포넌트. 모드에 따라 가리키는 primitive가 바뀐다 |

- Semantic 이름 꼴은 `{역할}-{색 계열}-{강도}`다. 역할: text, surface, background, border, divider, icon, link, button, input, element, action, graphic. 강도: subtler < subtle < (기본) < dark < darker.
- 예: `text-primary`는 기본 모드에서 primary-60 #0b50d0, 선명한 화면 모드에서 primary-20 #b1cefb를 가리킨다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| primary-50 | #256ef4 | 주요 버튼 채움, 링크 기본, 포커스 고리, 토글 켜짐 |
| primary-60 | #0b50d0 | 주요 버튼 hover, 링크 hover, 강조 글자(text-primary) |
| primary-70 | #083891 | 주요 버튼 눌림, 링크 눌림 |
| primary-5 | #ecf2fe | 보조 버튼 채움, 연한 강조 면(surface-primary-subtler) |
| primary-10 | #d8e5fd | 보조 버튼 hover, 연한 파랑 테두리(border-primary-light) |
| primary-20 | #b1cefb | 보조 버튼 눌림 |
| secondary-70 | #063a74 | 보조 테두리·구분선(border-secondary), 보조 배지 채움 |
| secondary-80 | #052b57 | 보조 글자(text-secondary), 보조 아이콘 |
| secondary-50 | #346fb2 | 글자를 드래그로 선택했을 때 바탕(흰 글자) |
| secondary-5 | #eef2f7 | 공식 배너(masthead) 바탕, 전체 팝업 바탕, text 버튼 hover |
| secondary-10 | #d6e0eb | text 버튼 눌림, 연한 보조 테두리 |
| point-50 | #d63d4a | 새 소식·중요 알림 배지, point 아이콘·테두리(전체 화면의 5% 이하) |
| point-60 | #ab2b36 | point 글자(text-point), 필수 입력 표시 |
| link-visited | #5917b8 | 방문한 링크 |

primary 전체 단계: 5 #ecf2fe · 10 #d8e5fd · 20 #b1cefb · 30 #86aff9 · 40 #4c87f6 · 50 #256ef4 · 60 #0b50d0 · 70 #083891 · 80 #052561 · 90 #03163a · 95 #020f27

secondary 전체 단계(기본 모드): 5 #eef2f7 · 10 #d6e0eb · 20 #bacbde · 30 #90b0d5 · 40 #6b96c7 · 50 #346fb2 · 60 #1c589c · 70 #063a74 · 80 #052b57 · 90 #031f3f · 95 #02162c

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-0 | #ffffff | 기본 바탕(background-white), 카드·모달 면, 입력창 바탕 |
| gray-5 | #f4f5f6 | 연한 회색 면(surface-gray-subtler), 3차 버튼 hover |
| gray-10 | #e6e8ea | 회색 면(surface-gray-subtle), 3차 버튼 눌림 |
| gray-20 | #cdd1d5 | 연한 테두리·구분선(border-gray-light), 비활성 버튼·입력 바탕 |
| gray-30 | #b1b8be | 기본 테두리(border-gray), 비활성 테두리, 카드·모달 테두리 |
| gray-40 | #8a949e | 구분선(divider-gray) |
| gray-60 | #58616a | 입력창 테두리, 3차 버튼 테두리(border-gray-dark) |
| gray-90 | #1e2124 | 반전 면(surface-inverse), 가장 진한 테두리 |
| background-dim | #000000bf | 모달 뒤 딤(검정 75%) |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-95 | #131416 | 가장 진한 글자(text-bolder) |
| gray-90 | #1e2124 | 본문 글자(text-basic), 인라인 툴팁 바탕 |
| gray-80 | #33363d | 기본 아이콘(icon-gray) |
| gray-70 | #464c53 | 보조 글자(text-subtle), 카드 본문, 입력 전 글자 |
| gray-50 | #6d7882 | 비활성 버튼·입력 위 글자(text-disabled-on), 토글 꺼짐 |
| gray-40 | #8a949e | 비활성 글자(text-disabled), 플레이스홀더 |
| text-primary | #0b50d0 | 파랑 글자(primary-60) |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success-50 | #228738 | 완료·성공 아이콘·테두리 |
| success-60 | #267337 | 성공 글자 |
| success-5 | #eaf6ec | 성공 바탕 |
| warning-50 | #9e6a00 | 주의 아이콘·테두리 |
| warning-60 | #8a5c00 | 주의 글자 |
| warning-5 | #fff3db | 주의 바탕 |
| danger-50 | #de3412 | 오류 아이콘, 입력 오류 테두리 |
| danger-60 | #bd2c0f | 오류 글자 |
| danger-5 | #fdefec | 오류 바탕 |
| info-50 | #0b78cb | 안내 아이콘·테두리 |
| info-60 | #096ab3 | 안내 글자 |
| info-5 | #e7f4fe | 안내 바탕 |

- 연한 테두리가 필요하면 `-10` 단계(예: border-danger-light #fcdfd9, border-success-light #d8eedd, border-warning-light #ffe0a3, border-information-light #d3ebfd)를 쓴다.
- 조합 규칙: 상태 박스 = 바탕 `-5` + 테두리 `-50` + 글자 `-60` + 아이콘 `-50`. 예: 오류 박스 = #fdefec + #de3412 + #bd2c0f.

### 그래픽(차트·배너 전용)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| graphic-10 | #e5ecf9 | 차트·배너 가장 연한 단계(graphic-blue-subtler) |
| graphic-30 | #98acc5 | 차트·배너(graphic-blue-subtle) |
| graphic-50 | #61758f | 차트·배너(graphic-blue) |
| graphic-70 | #39506c | 차트·배너(graphic-blue-dark) |
| graphic-90 | #223a58 | 차트·배너 가장 진한 단계(graphic-blue-darker) |

### 역할별 색
- **Primary (`primary-50` #256ef4)**: 주요 버튼 채움, 링크, 포커스 고리, 선택 상태. 한 화면의 핵심 행동 하나에 몰아준다.
  - 짝: hover `primary-60` #0b50d0, pressed `primary-70` #083891, 강조 글자 `text-primary`(primary-60).
- **Secondary (`secondary-70` #063a74)**: 정부 남색. 보조 테두리·구분선, 보조 배지, 공식 배너 바탕(`secondary-5`), text 버튼 hover·눌림(`secondary-5`·`secondary-10`).
- **Point (`point-50` #d63d4a)**: 정부 빨강. 새 소식 배지, 필수 입력 표시(`*`, text-point #ab2b36)처럼 **아주 작은 면적에만**.
- **Gray**: 글자(gray-90 본문, gray-70 보조), 테두리(gray-20~gray-60), 면(gray-5, gray-10).
- **System**: 상태 전달 전용. 바탕 `-5`, 테두리·아이콘 `-50`, 글자 `-60`.

### 명도 대비 — 매직 넘버 규칙
| 두 색의 단계 차이 | 확보되는 대비 | 쓸 수 있는 곳 |
|---|---|---|
| 40 이상 | 3:1 이상 | 큰 글자, 아이콘, 입력창 경계선 |
| 50 이상 | 4.5:1 이상 | 본문 글자(기본 기준) |
| 70 이상 | 7:1 이상 | 선명한 화면 모드의 글자 |
| 90 이상 | 15:1 이상 | 선명한 화면 모드의 본문 |

- 예: gray-0 바탕 + gray-90 글자 → 차이 90 → 본문 가능(16.2:1).
- 예: gray-5 바탕 + gray-40 글자 → 차이 35 → 본문 불가(2.8:1).

### 화면 모드
- **기본 모드**: 위 표의 light 값. CSS 변수 `--krds-light-color-*`.
- **선명한 화면 모드(high-contrast)**: 상위 요소에 `data-krds-mode="high-contrast"`를 달면 켜진다. `data-krds-mode="theme"`이면 운영체제의 어두운 화면 설정(`prefers-color-scheme: dark`)을 따라 같은 값으로 바뀐다. CSS 변수 `--krds-high-contrast-color-*`.
- 바뀌는 것: 바탕이 검정, 글자는 밝은 회색 단계, 강조 글자는 `-20` 단계, 테두리 두께 1px→2px(강조 2px→3px), 그림자 색이 진해진다(12%·20%·40%). secondary 계열 전체가 청록으로 바뀐다.
- 층 구분이 뒤집힌다: 기본 모드는 흰 면 위에 옅은 회색 면을 겹치고, 선명한 화면 모드는 층이 올라갈수록 면이 밝아진다(검정 #000000 → gray-95 #131416 → gray-90 #1e2124).

### 선명한 화면 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| background-white(gray-100) | #000000 | 바탕, 카드 면 |
| surface-gray-subtler(gray-95) | #131416 | 한 층 위 면, 3차 버튼 hover |
| input-surface(gray-90) | #1e2124 | 입력창 바탕 |
| text-basic(gray-5) | #f4f5f6 | 본문 글자, 기본 아이콘 |
| text-bolder(gray-10) | #e6e8ea | 진한 글자 |
| text-subtle(gray-20) | #cdd1d5 | 보조 글자 |
| text-disabled(gray-60) | #58616a | 비활성 글자 |
| border-gray(gray-70) | #464c53 | 기본 테두리 |
| border-gray-light(gray-80) | #33363d | 연한 테두리, 비활성 버튼 채움 |
| input-border(gray-40) | #8a949e | 입력창 테두리, 3차 버튼 테두리 |
| text-primary(primary-20) | #b1cefb | 파랑 글자, 링크 hover |
| link-default(primary-30) | #86aff9 | 링크 기본 |
| link-pressed(primary-10) | #d8e5fd | 링크 눌림 |
| link-visited | #c49ff9 | 방문한 링크 |
| button-primary-fill(primary-50) | #256ef4 | 주요 버튼 채움(기본 모드와 같다). hover #0b50d0, 눌림 #083891도 같다 |
| button-secondary-fill(primary-95) | #020f27 | 보조 버튼 채움. hover primary-90 #03163a, 눌림 primary-80 #052561 |
| text-danger(danger-20) | #f7afa1 | 오류 글자 |
| text-warning(warning-20) | #ffc95c | 주의 글자 |
| text-success(success-20) | #a9dab4 | 성공 글자 |
| text-information(information-20) | #9ed2fa | 안내 글자 |
| text-point(point-20) | #ebadb2 | point 글자 |
| secondary-50(청록) | #268097 | 선명한 화면 모드의 secondary 기준색 |
| text-secondary(secondary-20) | #abd8e3 | 보조 글자(청록) |
| border-secondary(secondary-60) | #1f687a | 보조 테두리 |
| surface-secondary-subtler(secondary-95) | #091f25 | 공식 배너 바탕 |

- primary·gray·point·상태 색의 primitive 단계는 두 모드가 같다. 바뀌는 것은 semantic이 가리키는 단계와 secondary 팔레트다(청록: 5 #edf6f8 … 50 #268097 … 95 #091f25).
- point-50 #d63d4a, primary-5 #ecf2fe 같은 primitive 값은 모드와 관계없이 그대로다.

### 색 사용 규칙
- 비율은 중립 60, 보조(secondary) 30, 주색(primary) 10을 권한다. (공식 문서)
- 글자는 바탕과 매직 넘버 차이 40 이상, 본문은 50 이상을 지킨다. 선명한 화면 모드는 70 이상, 본문 90 이상. (공식 문서)
- 색만으로 뜻을 전하지 않는다. 글자나 아이콘을 함께 둔다. (공식 문서)
- 비활성 상태에 투명도를 쓰지 않는다. 정해진 회색 단계를 쓴다. (공식 문서)
- 5단계와 95단계는 바탕과 섞여 보일 수 있어 조심한다. (공식 문서)
- point-50 #d63d4a는 새 소식·중요 알림 배지에만, 전체 화면의 5% 이하로 쓴다.
- 상태 색은 아이콘·테두리에 50, 글자에 60, 배경 면에 5 단계를 쓴다.
- 차트·배너에는 graphic 단계만 쓴다.

### Don't
- 본문 글자에 gray-100 #000000을 쓰지 않는다. 본문은 `text-basic`(gray-90 #1e2124).
- point·danger 색을 장식이나 일반 강조에 쓰지 않는다.
- gray-40 #8a949e를 흰 바탕 본문 글자로 쓰지 않는다(3.1:1). 비활성·플레이스홀더 전용이다.
- 색을 HEX로 하드코딩하지 않는다. 선명한 화면 모드에서 바뀌지 않는다.
- 기관 브랜드 색을 primary 자리에 그대로 넣지 않는다. 바꿔야 하면 11단계 전체를 매직 넘버 규칙에 맞춰 다시 만든다.

## 3. 타이포그래피
- 글꼴: Pretendard GOV (Pretendard를 공공용으로 다듬은 글꼴. 깃허브 orioncactus/pretendard에서 배포)
- 글꼴 토큰: `--krds-typo-font-type`
- 대체 글꼴: 고딕 계열. 문서는 Noto Sans, 나눔고딕, 스포카 한 산스를 예로 든다. 고딕이 아닌 글꼴은 배너·디스플레이에만 쓴다.
- CSS 루트 글자 크기를 62.5%로 두고 rem을 쓴다. 따라서 토큰의 1rem = 10px이다.
- 글자 크기는 767px 이하에서 모바일 값으로 바뀐다.

### 위계와 사용처
아래 표의 크기는 PC 값(px, 1pt=1px로 적음)이다. 모바일 값이 다르면 쓰임 칸 끝에 적었다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| display-large | 60 | 700 | 150% | 메인 비주얼 핵심 문구. 모바일 44 |
| display-medium | 44 | 700 | 150% | 캠페인·메인 비주얼. 모바일 32 |
| heading-xlarge | 40 | 700 | 150% | h1 페이지 제목(페이지당 1개). 모바일 28 |
| display-small | 36 | 700 | 150% | 메인 섹션 대표 문구. 모바일 28 |
| heading-large | 32 | 700 | 150% | h1~h2 큰 구획. 모바일 24 |
| heading-medium | 24 | 700 | 150% | h2~h3, 모달 제목, xlarge 입력 글자. 모바일 22 |
| navigation-title-medium | 24 | 700 | 150% | 메뉴 제목. 모바일 22 |
| heading-small | 19 | 700 | 150% | h3~h4, 카드 제목, 폼 묶음 제목 |
| navigation-title-small | 19 | 700 | 150% | 작은 메뉴 제목 |
| body-large | 19 | 400 | 150% | 리드 문단, 중요한 안내(700도 씀) |
| label-large | 19 | 400 | 150% | large·xlarge 버튼, large 입력 |
| heading-xsmall | 17 | 700 | 150% | h4~h5, 탭 글자, 작은 카드 제목 |
| body-medium | 17 | 400 | 150% | 기본 본문, 표 셀(700도 씀) |
| label-medium | 17 | 400 | 150% | medium 버튼·입력, 큰 배지 |
| navigation-depth-medium | 17 | 400 | 150% | 메뉴 항목(700도 씀) |
| heading-xxsmall | 15 | 700 | 150% | h5~h6 |
| body-small | 15 | 400 | 150% | 보조 본문, 도움말, 툴팁, 공식 배너(700도 씀) |
| label-small | 15 | 400 | 150% | small·xsmall 버튼, small 입력, 배지 |
| navigation-depth-small | 15 | 400 | 150% | 하위 메뉴(700도 씀) |
| body-xsmall | 13 | 400 | 150% | 각주, 저작권 표시(700도 씀) |
| label-xsmall | 13 | 400 | 150% | 아주 작은 라벨 |

- 공식 문서 표는 navigation-title을 large/small(24·19)로, 토큰 파일은 medium/small로 부른다. 크기 값은 같다.
- navigation-depth에는 `-bold` 변형 토큰이 따로 있다(크기 같음, 굵기 700).

### 글자 사용 규칙
- 굵기: 토큰은 Regular(400)와 Bold(700) 두 가지만 정의한다. 스타일 가이드는 500을 더해 세 가지까지가 이상적이고 네 가지를 넘기지 말라고 한다. (공식 문서)
- 행간: 모든 단계 150% (`--krds-line-height-base: 1.5`). 행간은 px 대신 상대 단위로 쓴다.
- 자간: Display 전 단계와 Heading xlarge·large는 1px(`letter-spacing-1`), 나머지는 0. (공식 문서)
- 본문 최소 16px. Pretendard GOV는 같은 크기에서 작아 보여서 기본 본문을 17px로 잡는다. (공식 문서)
- 제목과 본문 크기 비율은 1.25~1.5배를 권한다. (공식 문서)
- 버튼·입력 라벨은 모든 크기에서 굵기 400.
- 제목 단계를 건너뛰지 않는다(h2 다음 바로 h4 금지). 스크린리더 사용자가 구조를 잃는다.
- 숫자·날짜·금액은 표에서 오른쪽 정렬해 자릿수를 맞춘다.

### Don't
- 굵기를 토큰에 없는 값(600 등)으로 쓰지 않는다. 500을 더하더라도 전체 세 가지를 넘기지 않는다.
- `font-size`를 px로 고정하지 않는다. 화면 크기 조정(0.9~1.5배)이 막힌다.
- 본문을 16px보다 작게 쓰지 않는다. 15px(body-small)은 도움말·보조 정보에만.
- 문장 전체를 Bold로 쓰지 않는다. 강조는 핵심 단어만.
- 고딕이 아닌 글꼴을 본문에 쓰지 않는다.

## 4. 레이아웃·간격
- 기준 화면: 모바일 기준 콘텐츠 폭 348px. 분기점 360·768·1024·1280.
- 화면 좌우 여백: 모바일 16px, 데스크톱 24px (`--krds-contents-padding-x`, 1023px 이하에서 16px)
- 기본 단위: 8pt 그리드. 세밀한 조정에만 2·4·6px. 모든 값은 숫자 단계(number-0~21) 안에서 고른다.
- 간격 단계(pt): 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80 (gap-1~12)
- 숫자 단계(px): 0, 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96 (number-max 1000px)
- 안쪽 여백 단계(padding-1~10, px): 2, 4, 8, 10, 12, 16, 20, 24, 32, 40
- 높이 단계(size-height-1~11, px): 8, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80
- 요소 **사이**는 `gap-*`, 요소 **안쪽**은 `padding-*`, 고정 높이는 `size-height-*`를 쓴다.
- 그리드·최대 폭: 콘텐츠 최대 폭 1200px (여백 포함 감싸개 1248px), 1024px 이상에서 가운데 정렬.

### 그리드와 중단점
| 분기점 | 화면 폭 | 열 | 거터 | 최소 여백 |
|---|---|---|---|---|
| small | 360px 이상 | 4 | 16px | 16px |
| medium | 768px 이상 | 8 | 16px | 24px |
| large | 1024px 이상 | 12 | 24px | 24px |
| xlarge | 1280px 이상 | 12 | 24px | 24px |

- 분기점은 360·768·1024·1280·1440까지 3~6단계를 고른다. 거터는 열 폭의 절반을 넘기지 않는다. (공식 문서)
- 코드(CSS)의 실제 분기: 글자 크기·PC 전용 요소는 767px / 768px, 좌우 여백은 1023px / 1024px에서 바뀐다.
- 768~1023px 구간 여백은 스타일 가이드 표(24px)와 CSS(16px)가 다르다. 코드를 따를 때는 16px.
- 서브 페이지 PC 구조: 좌측 메뉴 — 64px — 본문 — 40px — 우측 콘텐츠 내 탐색. 모바일에서는 좌·우 간격을 0으로 둔다.

### 화면 세로 리듬(px, PC / 모바일)
| 구간 | PC | 모바일 |
|---|---|---|
| 헤더 → 브레드크럼 | 24 | 16 |
| 브레드크럼 → h1 | 40 | 32 |
| h1 → h2 | 48 | 32 |
| h2 → h2 | 80 | 40 |
| h2 → h3 | 40 | 24 |
| h3 → h3 | 64 | 32 |
| h3 → h4 | 24 | 16 |
| h4 → h4 | 40 | 24 |
| h4 → h5 | 16 | 12 |
| h5 → h5 | 32 | 16 |
| 제목 → 본문(소/중/대) | 16 / 20 / 24 | 8 / 12 / 20 |
| 본문 → 본문(소/중/대) | 12 / 16 / 20 | 10 / 12 / 16 |
| 이미지 → 글(소/중/대) | 20 / 24 / 32 | 16 / 20 / 24 |
| 좌측 메뉴 → 본문 | 64 | 0 |
| 본문 → 우측 탐색 | 40 | 0 |
| 본문 → 푸터 | 64 | 40 |

### 카드 안쪽 여백(px, PC / 모바일)
| 단계 | PC | 모바일 |
|---|---|---|
| card-large | 40 | 24 |
| card-medium | 32 | 24 |
| card-small(기본) | 24 | 20 |
| card-xsmall | 16 | 12 |

### 간격 적용 규칙
- 카드 목록 사이 24px, 카드 안 요소 사이 16px.
- 입력창 가로 사이 16px, 세로 사이 16~24px, 라벨·설명·입력·메시지 사이 8px.
- 같은 단계 제목 사이는 그 아래 단계로 들어갈 때보다 넓게 둔다(h2→h2 80px, h2→h3 40px, PC).
- 글자는 767px, 여백은 1023px에서 모바일 값으로 바꾼다.

### Don't
- 3px, 7px, 13px처럼 숫자 단계 밖의 간격을 만들지 않는다.
- 모바일에서 PC 세로 리듬 값을 그대로 쓰지 않는다(h2→h2는 80px이 아니라 40px).
- 카드 안에 카드를 넣지 않는다.
- 모바일에서 표를 가로 스크롤만으로 해결하지 않는다. 구조화 목록(카드형)으로 바꾸는 방안을 먼저 본다.
- 콘텐츠 폭을 1200px보다 넓게 펼치지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-xsmall | 2px | 체크박스 같은 아주 작은 요소 |
| radius-small | 4px | xsmall 버튼, 배지, 인라인 툴팁 |
| radius-medium1·2 | 6px | small·medium 버튼, small·medium 입력, 채움형 탭, 메뉴 hover |
| radius-medium3·4 | 8px | large·xlarge 버튼, large 입력 |
| radius-large | 10px | xlarge 입력, 긴급 공지 배너 |
| radius-xlarge | 12px | 모달, 구조화 목록 카드, 박스형 툴팁 |
| radius-max | 1000px | 알약형(번호 배지, 토글, 단계 표시 원). 토큰 값 100rem |

- 원본 이전 판은 radius-max를 1000rem(v2는 10000px)으로 적었으나, 토큰 파일 값은 `--krds-number-max: 100rem` = 1000px이다. 이 문서는 토큰 파일을 따른다.

### 고도(그림자·층)
- 기본은 **평면**이다. 층은 면 색(흰색 ↔ gray-5)과 1px 테두리로 나눈다. 기본 카드는 그림자 없이 테두리만 쓴다.
- 그림자 색은 세 단계뿐이다: shadow1 #0000000d(검정 5%), shadow2 #00000014(8%), shadow3 #0000001f(12%).
- 그림자를 쓰는 곳은 떠 있는 요소뿐이다.
  - 모달: 0 0 2px shadow2, 0 16px 24px shadow3.
  - 도움 패널·맥락 도움말 팝오버: 0 0 2px shadow2, 0 8px 16px shadow3.
- 선명한 화면 모드의 그림자 색은 #0000001f(12%), #00000033(20%), #00000066(40%)로 진해진다.
- 테두리: border-regular 1px(기본), border-medium 2px(강조, 목록 선택). 선명한 화면 모드는 2px, 3px.
- 모달 뒤 배경은 dim(검정 75%, #000000bf).

### 포커스·상태 표시
- 키보드 포커스는 **안쪽 흰 선 2px + 바깥 파란 고리 4px**이다. 어떤 바탕에서도 보이게 하려는 이중 구조다. 공식 CSS는 아래와 같다.

```css
*:focus {
  outline: 0.2rem solid var(--krds-light-color-border-inverse); /* #ffffff */
  outline-offset: 0;
  box-shadow: var(--krds-box-shadow-outline); /* 0 0 0 0.4rem #256ef4 */
  transition: outline 0s, box-shadow 0s !important;
}
```

- 안쪽형은 `inset 0 0 0 2px #256ef4`(`--krds-box-shadow-outline-inset`)로, 모달 안·목록 안처럼 고리가 잘릴 곳에 쓴다.
- 포커스는 전환 없이 즉시(0s) 나타난다.
- 상호작용 요소는 기본 · hover · focus · 눌림 · 선택 · 비활성 · 로딩 · 오류 상태를 함께 설계한다.

### 모션
- 기본 전환 0.4s ease-in-out(`--krds-transition-base`), 페이드 opacity 0.4s linear, 펼침 max-height 0.4s ease. 모달은 투명도 0.2s로 나타난다.
- 메뉴·패널처럼 움직임이 큰 곳은 컴포넌트 CSS에서 0.4s cubic-bezier(0.4, 0, 0.23, 1)를 쓴다.
- `prefers-reduced-motion`이면 전환과 자동 재생을 끈다. 공식 CSS에는 이 처리가 없다. (구현 권장)

### Don't
- `outline: none`으로 포커스를 지우지 않는다.
- 기본 카드에 그림자를 넣지 않는다. 그림자는 모달·팝오버 같은 떠 있는 요소에만.
- shadow1~3 밖의 그림자 색을 만들지 않는다.
- 반복 재생되는 장식 애니메이션을 넣지 않는다. 캐러셀을 자동 재생하면 정지 버튼을 둔다.
- 정보를 hover에만 숨기지 않는다. 터치·키보드 사용자는 볼 수 없다.

## 6. 컴포넌트
KRDS는 아이덴티티·탐색·레이아웃·액션·선택·피드백·도움·입력·설정·콘텐츠 영역에 걸쳐 컴포넌트를 제공한다(HTML 키트 `html/code/` 아래 70여 개 파일). 여기에는 자주 쓰고 자주 틀리는 것만 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 공식 배너(masthead)
- 모든 정부 누리집 **맨 위**에 둔다. 공식 전자정부 누리집임을 알리는 한 줄 띠다.
- 바탕 `surface-secondary-subtler` #eef2f7(선명한 화면 모드 #091f25), 글자 body-small 15px, 최소 높이 32px.
- 규칙: 빼거나 색·문구를 바꾸지 않는다. 헤더보다 위에 둔다.

### 6.2 헤더·탐색
- 순서: 공식 배너 → 헤더(로고, 주 메뉴, 검색, 전체 메뉴) → 브레드크럼 → h1. 사이드 메뉴, 콘텐츠 내 탐색이 이어진다.
- 헤더: 흰 바탕, 메뉴 글자 17px 굵게(모바일 15px), 메뉴 최소 높이 40px, hover 모서리 6px.
- 현재 메뉴는 `aria-current="page"`로 표시한다(HTML 키트의 사이드 메뉴 `side_navigation.html` 예시에 있다. 주 메뉴·브레드크럼은 (구현 권장)).
- 건너뛰기 링크: "본문 바로가기"를 탭 순서 첫 번째에 둔다(HTML 키트 `skip_link.html`).
- 화면 크기 조정(`resize.html`): 0.9, 1, 1.1, 1.3, 1.5배.

### 6.3 버튼

**크기**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 | 아이콘 |
|---|---|---|---|---|---|
| xsmall | 32px | 10px | 4px | 15px | 16px |
| small | 40px | 12px | 6px | 15px | 16px |
| medium | 48px | 16px | 6px | 17px | 20px |
| large(기본) | 56px | 20px | 8px | 19px | 24px |
| xlarge | 64px | 24px | 8px | 19px | 24px |

**종류**

| 종류 | 모양 | 쓰는 곳 |
|---|---|---|
| primary | 채움 #256ef4, 글자 #ffffff | 화면(또는 한 단계)의 핵심 행동 하나: 신청, 다음, 제출 |
| secondary | 채움 #ecf2fe, 테두리 #256ef4, 글자 #0b50d0 | 주요 행동 옆 두 번째 행동: 임시 저장, 미리 보기 |
| tertiary | 투명, 테두리 #58616a, 글자 #1e2124 | 덜 중요한 행동: 취소, 이전 |
| text | 투명, 글자 #1e2124 | 줄 안의 가벼운 행동, 더 보기 |
| link | 투명, 글자 #256ef4 | 다른 화면으로 이동 |

**상태**

| 종류 | hover | 눌림 | 비활성 |
|---|---|---|---|
| primary | #0b50d0 | #083891 | 채움 #cdd1d5, 테두리 #b1b8be, 글자 #6d7882 |
| secondary | #d8e5fd | #b1cefb | primary와 같음 |
| tertiary | #f4f5f6 | #e6e8ea | primary와 같음 |
| text | #eef2f7 | #d6e0eb | 글자 #8a949e |
| link | 글자 #0b50d0 | 글자 #083891 | 글자 #8a949e |

- 포커스는 공식 포커스 표시(흰 2px + 파랑 4px). 로딩 상태 규격: 확인 필요(HTML 키트에 별도 `spinner.html`이 있다).
- 글자 굵기는 모든 크기에서 400. 아이콘과 글자 사이 4px(small 이하) 또는 8px.

**규칙**
- 기본 크기는 large(56px)다. small·xsmall(40·32px)은 44px 터치 기준보다 작으니 표 안·보조 영역에만 쓴다.
- primary 버튼은 한 화면(또는 한 단계)에 하나만.
- 버튼 문구는 결과를 말하는 짧은 동사로 쓴다("확인"보다 "신청서 제출").
- 이전·다음이 함께 있으면 이전은 왼쪽 tertiary, 다음은 오른쪽 primary.
- 비활성 버튼을 투명도로 흐리게 만들지 않는다. 정해진 회색 단계(#cdd1d5·#b1b8be·#6d7882)를 쓴다. (공식 문서)
- 이동은 `<a>`, 동작 실행은 `<button>`. 로딩 중에는 `aria-busy="true"`와 스피너를 쓰고 중복 클릭을 막는다. (구현 권장)

### 6.4 입력창

**크기**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| small | 40px | 16px | 6px | 15px |
| medium | 48px | 16px | 6px | 17px |
| large(기본) | 56px | 16px | 8px | 19px |
| xlarge | 80px | 16px | 10px | 24px 굵게 |
| 여러 줄(textarea) | 144px | 16px(위아래 8px) | 8px | 19px |

**상태**

| 상태 | 바탕 | 테두리 | 글자 |
|---|---|---|---|
| 기본(입력 전) | #ffffff | #58616a | #464c53, 플레이스홀더 #8a949e |
| 입력 중·포커스 | #ffffff | #256ef4 | #1e2124 |
| 오류 | #ffffff | #de3412 | 아래 메시지 #bd2c0f |
| 비활성·읽기전용 | #cdd1d5 | #b1b8be | #6d7882(읽기전용은 #464c53) |

- 아래 도움말은 일반·오류·성공·안내 네 가지 메시지 형태가 있다. 같은 자리를 바꿔 쓴다.

**규칙**
- 라벨은 항상 입력창 위에 보이게 둔다. 플레이스홀더로 라벨을 대신하지 않는다.
- 라벨 → 설명 → 입력 → 메시지를 8px 간격으로 쌓는다.
- 필수 항목은 라벨 옆 `*`(text-point #ab2b36)로 표시하고 화면 위에 그 뜻을 한 번 알린다. `aria-required="true"`. (구현 권장)
- 도움말·오류 문구는 `aria-describedby`로 입력창에 연결하고, 오류면 `aria-invalid="true"`를 단다. (구현 권장)
- 오류 문구는 고치는 방법까지 쓴다. 오류가 여럿이면 제출할 때 화면 위에 요약과 각 항목으로 가는 링크를 준다.

### 6.5 선택 컨트롤(체크박스·라디오·셀렉트·토글)
- 라벨 전체를 누를 수 있게 한다.
- 선택지가 2~5개면 라디오, 6개 이상이면 셀렉트.
- 토글은 바로 반영되는 설정에만 쓴다. 제출이 필요한 폼에는 체크박스.
- 묶음에는 `<fieldset>`과 `<legend>`를 쓴다(HTML 키트 예시에 fieldset이 있다).
- 토글 크기: medium 32×20px, large 40×24px. 켜짐 #256ef4, 꺼짐 #6d7882.
- 체크박스·라디오 크기별 수치: 확인 필요(`checkbox_size.html`, `radio_size.html`에 있음).

### 6.6 탭
| 종류 | 높이 | 최소 폭 | 글자 | 모서리 |
|---|---|---|---|---|
| 기본 탭 | 48px | 64px | 17px | — |
| 꽉 찬 탭 | 56px | — | 19px | — |
| 채움형 탭 | — | — | — | 6px |

- 탭 선택·비활성 색: 확인 필요.
- 칩 컴포넌트: 체크박스 칩·라디오 칩(`checkbox_chip.html`, `radio_chip.html`)이 있다. 수치는 확인 필요.

### 6.7 카드·구조화 목록
- 구조화 목록 카드: 바탕 흰색, 테두리 1px #b1b8be, 모서리 12px, 안쪽 여백 24·32·40px(PC) 세 단계.
- 카드 사이 24px, 카드 안 요소 사이 16px. 카드 제목 19px(작은 카드 17px) 굵게, 본문 #464c53.
- 선택(활성) 시 2px 링크색(#256ef4) 테두리.
- 순서: 제목 → 본문 → 메타 정보 → 행동.
- 표, 텍스트 목록, 아코디언, 디스클로저 컴포넌트가 따로 있다.

**규칙**
- 카드 전체가 링크면 하나의 `<a>`로 감싼다. 카드 안 행동 버튼은 2개까지. (구현 권장)

### 6.8 모달
| 크기 | 폭 |
|---|---|
| small | 400px |
| medium | 560px |
| large | 760px |

- 최소 높이 264px, 모서리 12px, 안쪽 여백 40px(모바일 24px), 제목 24px(모바일 22px) 굵게.
- 바탕 흰색, 테두리 1px #b1b8be, 그림자 0 0 2px shadow2 + 0 16px 24px shadow3, 뒤 딤 검정 75%(#000000bf).
- 버튼 사이 8px, 버튼 최소 폭 78px. 나타날 때 투명도 0.2s.
- 바텀시트 전용 규격: 확인 필요.

**규칙**
- 되돌릴 수 없는 작업(삭제, 신청 취소)은 확인 모달을 거친다.
- HTML 키트는 `role="dialog"`와 `aria-labelledby`(제목 연결)를 쓴다. `aria-modal="true"`, 열릴 때 포커스를 안으로 옮겨 가두기, Esc로 닫기, 닫으면 연 버튼으로 포커스 돌려주기는 (구현 권장).

### 6.9 단계 표시기
- 신청처럼 여러 단계인 흐름에 쓴다. 번호(1단계, 2단계…)와 단계 이름을 함께 보여준다.
- HTML 키트는 `<ol class="krds-step-wrap">`에 완료 `done`, 현재 `active` 클래스를 달고, 현재 단계에 화면에 보이지 않는 "현재단계" 글자를 넣는다. `aria-current="step"`은 (구현 권장).
- 단계 표시 원은 radius-max(알약·원형)를 쓴다.

### 6.10 배지·태그
| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| 기본 | 24px | 8px | 4px | 15px / 400 |
| large | 32px | 8px | 4px | 17px / 400 |
| 번호 배지 | 20px | — | 1000px(알약) | — |
| 점 배지 | 6px | 0 | — | — |

- 종류: 채움형(element 색)과 연한 바탕형(`-5` 바탕 + `-60` 글자). 예: 처리 완료 = #eaf6ec + #267337.
- 색 계열: primary, secondary, gray, point, danger, warning, success, information.
- 태그(`tag.html`, `tag_link.html`)는 삭제 버튼이 붙는 별도 컴포넌트다. 수치는 확인 필요.

### 6.11 표
- `<caption>`으로 표 제목과 요약을 준다(HTML 키트 표 예시에 caption이 있다).
- 머리글 셀은 `<th scope="col|row">`. (구현 권장)
- 행 구분은 border-gray-light #cdd1d5, 머리글 행은 surface-gray-subtler #f4f5f6. (예시 샘플에서 정리)
- 모바일에서는 구조화 목록 표(`structured_list_table.html`)로 바꿀 수 있다.

### 6.12 긴급 공지(토스트 대신)
- HTML 키트에 토스트·스낵바 컴포넌트는 없다. 대신 `긴급 공지`(critical alerts) 배너가 있다: 최대 폭 846px, 모서리 10px, 안쪽 여백 16px.
- 화면 아래에서 잠깐 뜨는 알림이 필요하면 KRDS 범위 밖이다. 확인 필요.

### 6.13 툴팁·도움말
- 인라인 툴팁: #1e2124 바탕에 흰 글자, 모서리 4px.
- 박스형 툴팁: 흰 바탕, 모서리 12px.
- 도움 패널·맥락 도움말 팝오버: 그림자 0 0 2px shadow2 + 0 8px 16px shadow3.

### 6.14 아이콘·이미지
- 아이콘 크기: 16px(xsmall·small), 20px(medium), 24px(large·xlarge). 기본 색 #33363d. SVG 마스크로 색을 입힌다.
- 일러스트·사진: 차트와 배너에는 graphic 색 단계를 쓴다. 장식용 사진 규칙은 확인 필요.
- 아이콘만 있는 버튼에는 `aria-label`을 단다(HTML 키트 예시에 있다).

## 7. 패턴
- 페이지 머리: 공식 배너(masthead) → 헤더 → 브레드크럼 → h1. 간격은 헤더→브레드크럼 24/16px, 브레드크럼→h1 40/32px.
- 폼: 라벨 → 설명 → 입력 → 메시지를 8px 간격으로 쌓는다. 오류·성공·안내 메시지는 입력 아래 같은 자리에 바꿔 넣는다. 입력 가로 사이 16px, 세로 사이 16~24px.
- 신청 흐름: 단계 표시기로 현재 단계와 남은 단계를 보여주고, 각 단계에 primary 버튼은 하나(다음), 이전은 왼쪽 tertiary.
- 확인 모달: 400·560·760px 세 폭, 제목 24px, 버튼 사이 8px, 뒤 딤 75%.
- 긴급 공지: 페이지 안 최대 폭 846px 배너(모서리 10px)로 알린다.
- 목록 → 상세: 구조화 목록 카드(선택 시 2px 테두리), 표, 아코디언, 디스클로저로 펼친다. 상세 화면 규칙은 확인 필요.
- 검색: 확인 필요.
- 결제: 확인 필요.

### 빈 상태·로딩·오류
모든 데이터 영역은 세 상태를 함께 설계한다. 아래 문구는 KRDS 화면의 문장이 아니라, 1장 톤 규칙으로 SylviaLab이 새로 쓴 예시다.

- 빈 상태: 왜 비었는지와 할 수 있는 행동을 쓴다.
  ```
  아직 신청한 내역이 없습니다.
  필요한 서비스를 찾아 신청해 보세요.
  [서비스 찾기]
  ```
  (예시 문구, SylviaLab 작성)
- 로딩: 실제 콘텐츠 크기에 가까운 자리 표시 또는 스피너(`spinner.html`). 스피너에는 "불러오는 중" 같은 대체 텍스트. (구현 권장)
- 오류: 무엇이 잘못됐는지, 사용자가 할 일, 문의처를 함께 쓴다.
  ```
  신청서를 불러오지 못했습니다.
  잠시 뒤 다시 시도해 주세요. 계속 안 되면 담당 기관에 문의해 주세요.
  [다시 시도]
  ```
  (예시 문구, SylviaLab 작성)
- 세션 만료: 만료 전에 알리고 연장 버튼을 준다. 입력하던 내용은 잃지 않게 한다. (구현 권장)

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #1e2124 | #ffffff | 16.2:1 | 통과 |
| #464c53 | #ffffff | 8.7:1 | 통과 |
| #6d7882 | #ffffff | 4.5:1 | 통과 |
| #8a949e | #ffffff | 3.1:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #256ef4 | 4.6:1 | 통과 |
| #0b50d0 | #ffffff | 6.8:1 | 통과 |
| #0b50d0 | #ecf2fe | 6.1:1 | 통과 |
| #ffffff | #d63d4a | 4.5:1 | 통과 |
| #ab2b36 | #ffffff | 6.7:1 | 통과 |
| #bd2c0f | #ffffff | 5.9:1 | 통과 |
| #bd2c0f | #fdefec | 5.3:1 | 통과 |
| #267337 | #eaf6ec | 5.3:1 | 통과 |
| #8a5c00 | #fff3db | 5.3:1 | 통과 |
| #096ab3 | #e7f4fe | 5.0:1 | 통과 |
| #1e2124 | #eef2f7 | 14.4:1 | 통과 |
| #5917b8 | #ffffff | 9.4:1 | 통과 |
| #6d7882 | #cdd1d5 | 2.9:1 | 미달(비활성 버튼, WCAG 예외) |
| #f4f5f6 | #000000 | 19.2:1 | 통과(선명한 화면 모드 본문) |
| #cdd1d5 | #000000 | 13.7:1 | 통과(선명한 화면 모드 보조) |
| #b1cefb | #000000 | 13.1:1 | 통과(선명한 화면 모드 파랑 글자) |
| #86aff9 | #000000 | 9.5:1 | 통과(선명한 화면 모드 링크) |
| #f7afa1 | #000000 | 11.6:1 | 통과(선명한 화면 모드 오류 글자) |

- 경계선 대비(3:1 기준): 입력 테두리 #58616a / #ffffff 6.3:1, 선명한 화면 모드 입력 테두리 #8a949e / #000000 6.8:1.
- 매직 넘버 규칙(본문 50 차이)과 계산값이 맞다: 흰 바탕(0)과 gray-40(차이 40)은 3.1:1, gray-50·primary-50(차이 50)은 4.5:1·4.6:1.

### 점검 목록
- 터치 영역: 기본 버튼·입력 56px, medium 48px, small 40px, xsmall 32px. 탭 48px(꽉 찬 탭 56px), 메뉴 최소 40px. small·xsmall과 메뉴는 44pt보다 작다.
- 최소 글자 크기: 본문 최소 16px(기본 17px). 가장 작은 단계는 body-xsmall·label-xsmall 13px.
- 포커스: 모든 요소에 흰 2px + 파랑 4px(`*:focus` 공식 CSS). 안쪽형 inset 2px.
- 키보드: 모든 기능을 키보드로 쓸 수 있고, 탭 순서가 보이는 순서와 같다. 첫 탭에 "본문 바로가기"(`skip_link.html`). 나머지 점검: 확인 필요.
- 선명한 화면 모드: 검정 바탕, 본문 대비 15:1 목표, 테두리 2px.
- 글자 확대: 화면 크기 조정 0.9, 1, 1.1, 1.3, 1.5배(`--krds-zoom-*`). 200% 확대에서 잘림·겹침이 없어야 한다. (구현 권장)
- 대체 텍스트: 의미 있는 이미지에는 `alt`, 장식 이미지는 `alt=""`. 아이콘만 있는 버튼에는 `aria-label`. (구현 권장)
- 문서 정보: 페이지마다 고유한 `<title>`, `lang="ko"`. (구현 권장)
- 색만으로 뜻을 전하지 않는다. 방문한 링크는 #5917b8로 구분한다.
- 시간 제한이 있으면 알리고 연장할 수 있게 한다. (구현 권장)
- 스크린리더 상세 규칙: 확인 필요.

## 9. 글쓰기 톤
- 말투: 공공 서비스답게 존댓말 평서문. 안내·요청은 "-해 주세요" 꼴로 맞춘다.
- 버튼 문구 꼴: 짧은 명사·동사(확인, 취소, 삭제, 예, 아니요). 핵심 행동은 결과가 드러나게("신청서 제출").
- 구조: 입력 아래 도움말 → 오류 시 같은 자리에 오류 메시지. 성공·안내 메시지도 같은 자리를 쓴다.
- 쉬운 말: 행정 용어 대신 국민이 쓰는 말을 쓴다. 한 문장에 한 가지 내용.
- 숫자·단위 표기: 전화번호·금액은 끊어 읽기 쉽게 쓰고, 날짜 꼴은 서비스 안에서 하나로 통일한다. 공식 표기 규칙: 확인 필요.
- 쉬운 공공언어 세부 지침의 KRDS 내 위치와 문장 규칙: 확인 필요.

## 10. Do & Don't
아래 규칙은 KRDS 공식 문서·토큰의 사실에서 SylviaLab이 정리한 것이다. "(공식 문서)"라고 단 줄은 원본에 공식 규칙으로 적힌 내용이다.

### Do
- 글자와 바탕은 매직 넘버 차이 40 이상, 본문은 50 이상으로 고른다(예: 흰 바탕에 #256ef4·#1e2124). (공식 문서)
- 본문은 Pretendard GOV 17px, 행간 150%로 쓴다.
- 기본 버튼·입력은 높이 56px, 글자 19px/400, 모서리 8px로 만든다.
- 상태 색은 아이콘·테두리 50(#de3412), 글자 60(#bd2c0f), 바탕 5(#fdefec)로 나눠 쓴다.
- 키보드 포커스는 흰 2px 선 + 0 0 0 4px #256ef4 고리로 보인다.
- 정부 사이트 맨 위에는 #eef2f7 공식 배너(최소 높이 32px)를 둔다.
- PC와 모바일 크기를 따로 정한다(h1 40/28px, 좌우 여백 24/16px, 모달 여백 40/24px).
- 크기는 rem, 색은 semantic 토큰으로 구현해 선명한 화면 모드와 화면 크기 조정이 그대로 동작하게 한다.

### Don't
- 비활성 상태를 투명도로 표현하지 않는다. #cdd1d5·#b1b8be·#6d7882를 쓴다. (공식 문서)
- 색만으로 뜻을 전하지 않는다. (공식 문서)
- point-50 #d63d4a를 화면의 5%를 넘게 쓰거나 버튼 색으로 쓰지 않는다.
- 글꼴 굵기를 네 가지 넘게 쓰지 않는다. (공식 문서)
- 본문을 16px보다 작게 쓰지 않는다. (공식 문서)
- 고딕이 아닌 글꼴을 본문에 쓰지 않는다. 배너·디스플레이에만. (공식 문서)
- 5단계·95단계 색을 바탕 위 경계로 쓰지 않는다(바탕과 섞여 보인다). (공식 문서)
- 플레이스홀더로 라벨을 대신하지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: HTML 컴포넌트 키트(npm `krds-uiux`, 이 문서 기준 v1.1.0). 저장소 https://github.com/KRDS-uiux/krds-uiux (README, tokens/, resources/css/token/krds_tokens.css, resources/css/common/common.css, resources/css/component/component.css, html/code/*.html).
- 디자인 토큰: JSON·CSS로 배포. CSS 변수 예: `--krds-line-height-base`, `--krds-contents-padding-x`. 루트 글자 크기 62.5%(1rem = 10px).
- 모드 전환: `data-krds-mode="high-contrast"`(선명한 화면 모드 고정) 또는 `data-krds-mode="theme"`(운영체제 어두운 화면 설정을 따름).
- 컴포넌트 CSS 변수는 `--krds-{컴포넌트}--{속성}` 꼴로 토큰을 다시 참조한다(예: `--krds-input--color-border: var(--krds-light-color-input-border)`).
- Figma 라이브러리: 배포 형태에 Figma 라이브러리가 있다. 파일 주소는 확인 필요.
- 문서·Storybook: 문서는 https://www.krds.go.kr 스타일 가이드. Storybook은 공개 자료 없음.
- 버전·변경 관리: npm 패키지 v1.1.0, 토큰 CSS 2024-12-09 생성본을 근거로 했다. 변경 기록 체계는 확인 필요.
- 토큰 값을 바꿀 때는 원본 토큰 파일을 고치지 말고 프로젝트 CSS에서 같은 변수를 다시 선언한다(토큰 파일 맨 위에 "직접 고치지 말 것" 표시가 있다).
- 이용 조건: KRDS 이용약관을 따른다.

## 12. AI에 넣을 때
```
KRDS(대한민국 정부 디자인 시스템) 스타일로 디자인해 줘.
- 주색: #256ef4 (hover #0b50d0, 눌림 #083891), 보조 #063a74, 강조 배지만 #d63d4a
- 배경: #ffffff, 회색 면 #f4f5f6, 공식 배너 띠 #eef2f7
- 글자: 본문 #1e2124, 보조 #464c53, 비활성 #8a949e
- 상태: 바탕 -5 / 테두리 -50 / 글자 -60 (오류 #fdefec / #de3412 / #bd2c0f)
- 글꼴: Pretendard GOV, 본문 17px, 행간 150%, 굵기 400/700만
- 모서리: 버튼 8px(작은 것 6px), 입력 8px, 모달·카드 12px
- 간격 단위: 8px 기준(4·8·16·24·32·40), 콘텐츠 최대 1200px, 좌우 여백 24/16px
- 버튼: 기본 높이 56px, 글자 19px 보통 굵기, 포커스는 흰 2px + 파란 4px 고리
- 크기는 rem(루트 10px), 색은 semantic 토큰 이름으로
- 분위기: 크고 또렷한 글자, 높은 대비, 장식 적게, 공식 배너 포함
```

## 13. 참고 자료
- https://www.krds.go.kr (확인 2026-10-31)
- https://www.krds.go.kr/html/site/style/style_02.html (색상, 확인 2026-10-31)
- https://www.krds.go.kr/html/site/style/style_03.html (타이포그래피, 확인 2026-10-31)
- https://www.krds.go.kr/html/site/style/style_05.html (레이아웃, 확인 2026-10-31)
- https://github.com/KRDS-uiux/krds-uiux (README, tokens/, resources/css/token/krds_tokens.css, resources/css/common/common.css, resources/css/component/component.css, 확인 2026-10-31)
- npm `krds-uiux` v1.1.0 로컬 사본: resources/css/token/krds_tokens.css(2024-12-09 생성본), resources/css/common/common.css, resources/css/component/component.css, html/code/*.html (대조 2026-10-31)

근거와 한계
- 색·크기·간격·모서리 숫자는 모두 오픈소스 토큰 CSS(2024-12-09 생성본)에서 읽었다. 글꼴 굵기·자간·그리드·쓰임 원칙은 krds.go.kr 스타일 가이드 페이지에서 읽었다.
- 선명한 화면 모드 값은 v2에서 `확인 필요`였던 단계(primary-60·70·10, secondary 계열)까지 토큰 파일로 확인해 채웠다.
- 바텀시트·앱 탭 바·토스트 규격, 탭 선택 색, UX 라이팅 세부 규칙은 확인하지 못했다.
- 8장 대비값은 SylviaLab이 이 문서의 HEX로 계산했다. 1장 원칙과 10장 규칙 중 "(공식 문서)" 표시가 없는 줄은 SylviaLab이 문서 사실에서 정리한 것이다.
- 서비스 이름과 브랜드는 각 권리자의 것이며, 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다. KRDS 이용약관을 따른다.

## 부록 A. 구현 매핑
이 문서의 토큰 이름과 공식 패키지(`krds-uiux` v1.1.0)의 CSS 변수 이름은 아래처럼 잇는다.

| DESIGN.md | 공식 CSS 변수 |
|---|---|
| `colors.primary-50` | `--krds-color-light-primary-50` |
| `colors.secondary-hc-50` | `--krds-color-high-contrast-secondary-50` |
| `colors.text-basic` | `--krds-light-color-text-basic` |
| `colors.text-basic-hc` | `--krds-high-contrast-color-text-basic` |
| `colors.surface-gray-subtler` | `--krds-light-color-surface-gray-subtler` |
| `colors.border-primary` | `--krds-light-color-border-primary` |
| `colors.input-border` | `--krds-light-color-input-border` |
| `colors.dim` | `--krds-light-color-background-dim` |
| `colors.shadow-2` | `--krds-light-color-alpha-shadow2` |
| `components.button-primary` | `--krds-light-color-button-primary-fill` (hover `-fill-hover`, 눌림 `-fill-pressed`) |
| `typography.body-medium` | `--krds-pc-font-size-body-medium` / `--krds-mobile-font-size-body-medium` |
| `letter-spacing.wide` | `--krds-typo-letter-spacing-1` (`--krds-letter-spacing-wide`) |
| `number.8` | `--krds-number-8` |
| `spacing.gap-5` | `--krds-gap-5` |
| `spacing.padding-6` | `--krds-padding-6` |
| `size.height-8` | `--krds-size-height-8` |
| `rounded.medium-2` | `--krds-radius-medium3` (또는 `medium4`) |
| `rounded.max` | `--krds-radius-max` (`--krds-number-max`) |
| `border-width.regular` | `--krds-light-border-width-variable-regular` |
| `spacing.layout.h1-h2` | `--krds-pc-gap-layout-h1-h2` / `--krds-mobile-gap-layout-h1-h2` |
| `spacing.card-padding.small` | `--krds-pc-padding-card-small` / `--krds-mobile-padding-card-small` |
| `focus.box-shadow` | `--krds-box-shadow-outline` |
| `motion.transition-base` | `--krds-transition-base` |
| `layout.contents-max-width` | `--krds-contents-size` |
| `zoom` | `--krds-zoom-small` ~ `--krds-zoom-xxlarge` |

| 컴포넌트 | HTML 키트 파일 / 클래스 |
|---|---|
| 공식 배너 | `masthead.html` / `#krds-masthead` |
| 버튼 | `button*.html` / `.krds-btn` |
| 입력창 | `text_input*.html`, `textarea.html` / `.krds-input` |
| 모달 | `modal.html` / `.krds-modal` |
| 단계 표시기 | `step_indicator.html` / `.krds-step-wrap` |
| 구조화 목록 | `structured_list.html` / `.krds-structured-list` |
| 탭 | `tab.html` / `.krds-tab-area` |
| 토글 | `toggle_switch.html` / `.krds-form-toggle-switch` |
| 배지 | `badge*.html` / `.krds-badge` |
| 표 | `table.html` / `.krds-table-wrap` |
| 긴급 공지 | `critical_alerts.html` / `.krds-critical-alerts` |

설치: `npm install krds-uiux` 뒤 `resources/css/token/krds_tokens.css`(또는 이를 불러오는 `common.css`)를 불러온다.

## 부록 B. 값의 출처 구분
- **공식 토큰 그대로**(krds-uiux v1.1.0 `resources/css/token/krds_tokens.css`): 모든 색 primitive(기본·선명한 화면 모드, secondary 청록 단계 #edf6f8·#abd8e3·#268097·#1f687a·#091f25 포함)와 semantic 연결, 상태 색 `-10`·`-20` 단계(#fcdfd9·#f7afa1·#ffe0a3·#ffc95c·#ffb114·#d8eedd·#a9dab4·#d3ebfd·#9ed2fa·#ebadb2·#fbeff0·#f5d6d9·#8a240f, point-60 #ab2b36 등), 그림자 색(기본·선명한 화면 모드), 글자 크기(PC/모바일), 자간 0/1px, number·gap·padding·size·radius 단계, 레이아웃 간격 19구간(PC/모바일), 카드 안쪽 여백(PC/모바일), 테두리 두께(1·2px → 선명한 화면 모드 2·3px).
- **공식 CSS·HTML 키트 그대로**(같은 저장소 `common.css`, `component.css`, `html/code/`): 루트 62.5%, 행간 1.5, 굵기 400/700, transition 값, 콘텐츠 폭 1200px·감싸개 1248px, 좌우 여백 24/16px와 1023px 분기, 767/768px 분기, 포커스 CSS, 화면 크기 조정 단계, 버튼·입력·textarea(144px)·배지·모달 크기와 상태 색, 모달·팝오버 그림자, cubic-bezier(0.4, 0, 0.23, 1), `data-krds-mode` 전환, 글자 선택 색(secondary-50), 컴포넌트 클래스 이름, skip link·caption·fieldset·`aria-current="page"`·`role="dialog"` 사용.
- **공식 사이트 스타일 가이드**(krds.go.kr, 원본에서 옮김): 매직 넘버 규칙, 60:30:10 비율, 굵기 세 가지 권장·네 가지 상한, Display·Heading xlarge·large 자간 1px, 본문 최소 16px, 그리드 표(360/768/1024/1280, 열·거터·여백), 대체 글꼴, 비활성에 투명도 금지, point 5% 이하.
- **사용자 제공 예시(EXEMPLAR_KRDS)에서 가져와 SylviaLab이 정리한 것**: 서비스 성격 문장, 에이전트 안내, 버튼 배치(이전 왼쪽·다음 오른쪽)와 문구 꼴, 라디오/셀렉트 선택 기준(2~5개 / 6개 이상), 표 머리글 행 색, 카드 링크 처리, 오류 요약, 세션 만료, 대부분의 `aria-*` 메모. 공식 HTML 키트에서 확인되지 않은 것은 본문에 `(구현 권장)`을 달았다.
- **SylviaLab이 계산·정리한 것**: 8장 대비값, 1장 원칙 중 "(관찰에서 정리)" 줄, 10장 Do & Don't, 각 장 Don't, 7장 예시 문구.
- **예시와 토큰 파일이 달라 토큰 파일을 따른 곳**: 버튼 비활성 글자(예시 gray-40 → 토큰 text-disabled-on gray-50 #6d7882), 입력 플레이스홀더(예시 gray-50 → 토큰 text-disabled gray-40 #8a949e), 배지 글자(예시 13px Bold → label-small 15px/400), textarea(예시 최소 80px·모서리 10px → 80px·10px는 xlarge 입력, textarea는 144px), 브레드크럼→h1·본문→푸터 모바일 값(예시 비어 있음 → 32px·40px), 카드 테두리(예시 border-gray-light → 구조화 목록 카드 #b1b8be), 자간(예시 전 단계 0 → 스타일 가이드는 큰 제목 1px), 굵기(예시 400/700만 → 토큰은 두 가지, 가이드는 500 허용).
- **원본·v2와 토큰 파일이 달라 토큰 파일을 따른 곳**: radius-max(원본 1000rem, v2 10000px → 토큰 100rem = 1000px).
- **공식 근거를 찾지 못한 것**: `prefers-reduced-motion` 처리(공식 CSS에 없음), 그리드 768~1023px 여백(가이드 24px vs CSS 16px), 바텀시트·토스트·앱 탭 바 규격.
