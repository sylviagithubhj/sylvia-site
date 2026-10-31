---
version: "1.0"
name: "당근"
description: "원시 팔레트 위 역할 토큰과 라이트·다크 테마, rem 글자 크기, 모션 토큰까지 오픈소스로 공개하고, 주황 #ff6600은 화면당 핵심 행동 하나에만 쓰는 동네 앱"
source:
  - "https://seed-design.io"
  - "https://github.com/daangn/seed-design (packages/rootage/*.yaml, packages/rootage/components/*.yaml)"
  - "https://github.com/daangn/seed-design/blob/main/packages/css/base.css"
  - "로컬 사본 확인: seed-design 커밋 99efaf5 (2026-10-29), @seed-design/css 3.1.0"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 단위
#    글자 크기는 rem(1rem = 16px). 아래 값은 읽기 쉽게 px로 적는다.
#    크기를 고정해야 하는 곳만 -static(px) 토큰을 쓴다.
# ─────────────────────────────────────────────
units:
  root-font-size: "16px"
  implementation: "rem"   # OS 글자 크기 설정을 따라가게 하려면 px 고정 금지

# ─────────────────────────────────────────────
# 2. 색 — primitive(라이트) → semantic(역할)
#    화면 코드에서는 semantic(fg·bg·stroke) 이름만 쓴다.
# ─────────────────────────────────────────────
colors:
  # carrot — 브랜드 주황 (라이트 값)
  carrot-100: "#fff2ec"
  carrot-200: "#ffe8db"
  carrot-300: "#ffd5c0"
  carrot-400: "#ffb999"
  carrot-500: "#ff9364"
  carrot-600: "#ff6600"   # 대표색. 핵심 버튼 배경
  carrot-700: "#e14d00"   # 눌림, 연한 배경 위 글자
  carrot-800: "#b93901"
  carrot-900: "#862b00"
  carrot-1000: "#471601"

  # gray — 중립 (라이트 값)
  gray-00: "#ffffff"
  gray-100: "#f7f8f9"
  gray-200: "#f3f4f5"
  gray-300: "#eeeff1"
  gray-400: "#dcdee3"
  gray-500: "#d1d3d8"
  gray-600: "#b0b3ba"
  gray-700: "#868b94"
  gray-800: "#555d6d"
  gray-900: "#2a3038"
  gray-1000: "#1a1c20"

  # red — 오류 (라이트 값, color.yaml)
  red-700: "#fa342c"
  red-800: "#ca1d13"

  # ── Semantic (화면에서는 이 이름만 쓴다) ──
  bg-brand-solid: "{colors.carrot-600}"
  bg-brand-solid-pressed: "{colors.carrot-700}"
  bg-brand-weak: "{colors.carrot-100}"
  bg-brand-weak-pressed: "{colors.carrot-200}"
  fg-brand: "{colors.carrot-600}"
  fg-brand-contrast: "{colors.carrot-700}"
  fg-on-brand-solid: "{colors.gray-00}"
  stroke-brand-weak: "{colors.carrot-300}"
  stroke-brand-solid: "{colors.carrot-700}"

  bg-layer-basement: "{colors.gray-200}"   # 화면 가장 깊은 바탕
  bg-layer-default: "{colors.gray-00}"     # 리스트·본문 표면
  bg-layer-default-pressed: "{colors.gray-100}"
  bg-layer-floating: "{colors.gray-00}"    # 시트·다이얼로그
  bg-neutral-weak: "{colors.gray-200}"
  bg-neutral-weak-pressed: "{colors.gray-300}"
  bg-neutral-solid: "{colors.gray-900}"    # 어두운 버튼, 스낵바
  bg-neutral-solid-pressed: "{colors.gray-800}"
  bg-disabled: "{colors.gray-200}"
  bg-overlay: "#00000074"                  # 시트·다이얼로그 뒤 딤
  bg-transparent-pressed: "#00000007"      # 리스트 눌림

  fg-neutral: "{colors.gray-1000}"
  fg-neutral-muted: "{colors.gray-800}"
  fg-neutral-subtle: "{colors.gray-700}"
  fg-placeholder: "{colors.gray-600}"
  fg-disabled: "{colors.gray-500}"

  stroke-neutral-weak: "{colors.gray-400}"     # 카드·입력창·아웃라인 외곽
  stroke-neutral-muted: "#00000010"            # 섹션 경계(한 화면 한두 번)
  stroke-neutral-subtle: "#0000000c"           # 리스트 항목 사이
  stroke-neutral-contrast: "{colors.gray-1000}" # 입력창 포커스 선
  stroke-focus-ring: "#5e98fe"                 # 키보드 포커스 링

  fg-positive: "#079171"
  bg-positive-weak: "#edfaf6"
  fg-warning: "#9b7821"
  bg-warning-solid: "#fbdc65"
  bg-warning-weak: "#fff7de"
  fg-critical: "{colors.red-700}"
  bg-critical-solid: "{colors.red-700}"
  bg-critical-solid-pressed: "{colors.red-800}"
  bg-critical-weak: "#fdf0f0"
  stroke-critical-solid: "{colors.red-700}"
  fg-informative: "#217cf9"
  bg-informative-weak: "#eff6ff"

  # ── 다크 테마 (같은 역할 이름, 다른 값) ──
  bg-brand-solid-dark: "#ff6600"
  bg-brand-solid-pressed-dark: "#ff9e65"
  bg-brand-weak-dark: "#31241f"
  bg-layer-default-dark: "#000000"
  bg-layer-basement-dark: "#1d2025"
  fg-neutral-dark: "#f3f4f5"
  fg-neutral-muted-dark: "#dcdee3"
  fg-neutral-subtle-dark: "#b0b3ba"
  bg-neutral-solid-dark: "#f3f4f5"
  fg-critical-dark: "#ff6e60"
  fg-positive-dark: "#22b27f"
  fg-informative-dark: "#41a2f9"

# ─────────────────────────────────────────────
# 3. 타이포그래피
#    크기 단계 번호와 행간 단계 번호를 짝지어 쓴다(t5 + t5).
#    굵기는 regular 400 · medium 500 · bold 700 세 가지.
# ─────────────────────────────────────────────
typography:
  font-family: "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard Variable', Pretendard, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif"
  font-weight-regular: 400
  font-weight-medium: 500
  font-weight-bold: 700

  t1: { fontSize: "11px", lineHeight: "15px", fontWeight: 400 }   # 작은 배지, 매너온도
  t2: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 }   # 큰 배지, 상단 바 부제
  t3: { fontSize: "13px", lineHeight: "18px", fontWeight: 400 }   # 리스트 상세, xsmall 버튼
  t4: { fontSize: "14px", lineHeight: "19px", fontWeight: 400 }   # small·medium 버튼, 칩
  t5: { fontSize: "16px", lineHeight: "22px", fontWeight: 400 }   # 리스트 제목, 입력값
  t6: { fontSize: "18px", lineHeight: "24px", fontWeight: 400 }   # large 버튼, 상단 바 제목
  t7: { fontSize: "20px", lineHeight: "27px", fontWeight: 400 }
  t8: { fontSize: "22px", lineHeight: "30px", fontWeight: 400 }   # 시트·다이얼로그 제목
  t9: { fontSize: "24px", lineHeight: "32px", fontWeight: 400 }
  t10: { fontSize: "26px", lineHeight: "35px", fontWeight: 400 }
  t11: { fontSize: "28px", lineHeight: "38px", fontWeight: 400 }  # sm(480px) 이상
  t12: { fontSize: "32px", lineHeight: "42px", fontWeight: 400 }  # sm 이상
  t13: { fontSize: "40px", lineHeight: "52px", fontWeight: 400 }  # sm 이상
  t14: { fontSize: "48px", lineHeight: "60px", fontWeight: 400 }  # sm 이상

  screen-title: { fontSize: "26px", lineHeight: "35px", fontWeight: 700 }
  article-body: { fontSize: "16px", lineHeight: "24px", fontWeight: 400 }
  article-note: { fontSize: "14px", lineHeight: "22px", fontWeight: 400 }

# ─────────────────────────────────────────────
# 4. 간격 (dimension.yaml, 4px 눈금 + 절반 단계)
# ─────────────────────────────────────────────
spacing:
  x0_5: "2px"
  x1: "4px"
  x1_5: "6px"
  x2: "8px"
  x2_5: "10px"
  x3: "12px"
  x3_5: "14px"
  x4: "16px"
  x4_5: "18px"
  x5: "20px"
  x6: "24px"
  x7: "28px"
  x8: "32px"
  x9: "36px"
  x10: "40px"
  x12: "48px"
  x13: "52px"
  x14: "56px"
  x16: "64px"
  # 역할 간격
  global-gutter: "{spacing.x4}"          # 화면 좌우 16px
  between-chips: "{spacing.x2}"          # 칩 사이 8px
  component-default: "{spacing.x3}"      # 정해지지 않은 컴포넌트 사이 12px
  nav-to-title: "{spacing.x5}"           # 상단 바 → 화면 제목 20px
  between-text: "{spacing.x1_5}"         # 텍스트 사이 6px
  screen-bottom: "{spacing.x14}"         # 화면 맨 아래 56px

rounded:
  r0_5: "2px"
  r1: "4px"
  r1_5: "6px"
  r2: "8px"
  r2_5: "10px"
  r3: "12px"
  r3_5: "14px"
  r4: "16px"
  r5: "20px"
  r6: "24px"
  full: "9999px"

border-width:
  regular: "1px"   # 아웃라인 버튼, 입력창, 칩, 배지
  focused: "2px"   # 입력창 포커스·오류 때 선 두께

layout:
  breakpoints:
    base: "0–479px"
    sm: "480–767px"
    md: "768–1279px"
    lg: "1280–1439px"
    xl: "1440px~"
  grid:
    base: { gutter: "16px", margin: "12px" }
    sm: { gutter: "16px", margin: "12px" }
    md: { gutter: "32px", margin: "24px" }
    lg: { gutter: "32px", margin: "24px" }
    xl: { gutter: "32px", margin: "24px" }
  content-max-width: "1040px"   # 콘텐츠 페이지 12컬럼 권장, 넓은 탐색 화면은 1280px까지
  bottom-sheet-max-width: "480px"

shadow:
  s1: "0 1px 4px #00000014"
  s2: "0 2px 10px #0000001a"
  s3: "0 4px 16px #0000001f"
  s1-dark: "0 1px 4px #00000080"
  s2-dark: "0 2px 10px #000000ad"
  s3-dark: "0 4px 16px #000000cc"

focus:
  outline: "2px solid {colors.stroke-focus-ring}"   # 버튼 :focus-visible
  outline-offset: "2px"

motion:
  d1: "50ms"
  d2: "100ms"
  d3: "150ms"   # 색 전환, 눌림 축소
  d4: "200ms"   # 작은 반응의 상한, 시트 퇴장
  d5: "250ms"
  d6: "300ms"   # 시트 등장
  easing: "cubic-bezier(0.35, 0, 0.35, 1)"
  enter: "cubic-bezier(0, 0, 0.15, 1)"
  exit: "cubic-bezier(0.35, 0, 1, 1)"
  enter-expressive: "cubic-bezier(0.03, 0.4, 0.1, 1)"
  exit-expressive: "cubic-bezier(0.35, 0, 0.95, 0.55)"

# ─────────────────────────────────────────────
# 5. 컴포넌트 토큰 (rootage/components/*.yaml)
# ─────────────────────────────────────────────
components:
  button-xsmall: { height: "32px", paddingX: "{spacing.x3_5}", rounded: "{rounded.full}", typography: "{typography.t3}" }
  button-small: { height: "36px", paddingX: "{spacing.x3_5}", rounded: "{rounded.r2}", typography: "{typography.t4}" }
  button-medium: { height: "40px", paddingX: "{spacing.x4}", rounded: "{rounded.r2}", typography: "{typography.t4}" }
  button-large: { height: "52px", paddingX: "{spacing.x5}", rounded: "{rounded.r3}", typography: "{typography.t6}" }

  button-brand-solid: { backgroundColor: "{colors.bg-brand-solid}", textColor: "{colors.fg-on-brand-solid}" }
  button-brand-solid-pressed: { backgroundColor: "{colors.bg-brand-solid-pressed}" }
  button-neutral-solid: { backgroundColor: "{colors.bg-neutral-solid}", textColor: "{colors.gray-00}" }
  button-neutral-solid-pressed: { backgroundColor: "{colors.bg-neutral-solid-pressed}" }
  button-neutral-weak: { backgroundColor: "{colors.bg-neutral-weak}", textColor: "{colors.fg-neutral}" }
  button-neutral-weak-pressed: { backgroundColor: "{colors.bg-neutral-weak-pressed}" }
  button-critical-solid: { backgroundColor: "{colors.bg-critical-solid}", textColor: "{colors.gray-00}" }
  button-critical-solid-pressed: { backgroundColor: "{colors.bg-critical-solid-pressed}" }
  button-neutral-outline: { backgroundColor: "transparent", borderColor: "{colors.stroke-neutral-muted}", textColor: "{colors.fg-neutral}" }
  button-disabled: { backgroundColor: "{colors.bg-disabled}", textColor: "{colors.fg-disabled}" }

  text-input-outline-large: { height: "52px", paddingX: "{spacing.x4}", rounded: "{rounded.r3}", typography: "{typography.t5}" }
  text-input-outline-medium: { height: "40px", paddingX: "{spacing.x3_5}", rounded: "{rounded.r2}", typography: "{typography.t4}" }
  text-input:
    backgroundColor: "{colors.bg-layer-default}"
    borderColor: "{colors.stroke-neutral-weak}"
    textColor: "{colors.fg-neutral}"
    placeholderColor: "{colors.fg-placeholder}"
  text-input-focused: { borderColor: "{colors.stroke-neutral-contrast}", borderWidth: "2px" }
  text-input-invalid: { borderColor: "{colors.stroke-critical-solid}", borderWidth: "2px" }
  text-input-disabled: { backgroundColor: "{colors.bg-disabled}", textColor: "{colors.fg-disabled}" }

  chip: { height: "32px", rounded: "{rounded.full}", typography: "{typography.t4}" }
  chip-selected: { backgroundColor: "{colors.bg-neutral-solid}", textColor: "{colors.gray-00}" }
  chip-selected-pressed: { backgroundColor: "{colors.bg-neutral-solid-pressed}" }
  tab-medium: { height: "44px", typography: "{typography.t5}" }
  tab-small: { height: "40px", typography: "{typography.t4}" }
  tab: { textColor: "{colors.fg-neutral-subtle}" }
  tab-selected: { textColor: "{colors.fg-neutral}" }
  tab-disabled: { textColor: "{colors.fg-disabled}" }

  list-item: { paddingY: "{spacing.x3}", paddingX: "{spacing.x4}" }
  list-item-pressed: { backgroundColor: "{colors.bg-transparent-pressed}", rounded: "{rounded.r2_5}" }
  callout: { padding: "{spacing.x3_5}", rounded: "{rounded.r2_5}", minHeight: "50px", typography: "{typography.t4}" }
  top-navigation: { height: "56px", paddingX: "{spacing.x1_5}", typography: "{typography.t6}" }
  bottom-sheet: { backgroundColor: "{colors.bg-layer-floating}", rounded: "{rounded.r6}", maxWidth: "480px", dim: "{colors.bg-overlay}" }
  dialog: { backgroundColor: "{colors.bg-layer-floating}", rounded: "{rounded.r5}", padding: "{spacing.x6}", dim: "{colors.bg-overlay}" }
  snackbar: { backgroundColor: "{colors.bg-neutral-solid}", textColor: "{colors.gray-00}", rounded: "{rounded.r2}", height: "44px", padding: "{spacing.x2_5}", maxWidth: "464px" }
  badge-large: { height: "24px", rounded: "{rounded.r1_5}", typography: "{typography.t2}" }
  badge-medium: { height: "20px", rounded: "{rounded.r1}", typography: "{typography.t1}" }
  fab: { size: "44px", backgroundColor: "{colors.bg-layer-floating}", rounded: "{rounded.full}" }
---

# 당근 디자인 시스템

> 근거: 공개 문서 기반 (SEED Design 공식 문서 seed-design.io, 오픈소스 저장소 daangn/seed-design의 토큰 정의 파일)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 다르면 YAML이 우선이고, YAML과 공식 저장소가 다르면 공식 저장소가 우선이다.

## 1. 개요와 원칙
- 서비스 성격: 동네 기반 중고거래·커뮤니티 앱. 모바일 앱이 중심이고, 판매자 센터·광고주 센터 같은 웹 도구도 같은 시스템을 쓴다.
- 디자인 인상 한 줄: 흰 바탕에 짙은 회색 글자, 주황(#ff6600)은 화면에서 가장 중요한 행동 하나에만 쓴다.
- 공식 시스템 이름: SEED Design (토큰 원본 이름은 Rootage, 저장소 라이선스 Apache-2.0)
- 구조: 원시 팔레트(`$color.palette.*`) 위에 역할 토큰(`$color.fg.*`, `$color.bg.*`, `$color.stroke.*`)을 얹는다. 화면 코드에서는 역할 토큰만 쓴다. 라이트·다크 두 테마가 토큰 단위로 정의되어 있다.
- 디자인 원칙: 공개 자료에서 화면 디자인 원칙 문장은 찾지 못했다. 글쓰기 원칙(명확함, 쉬움, 배려)은 9장에 있다. 아래는 공개된 토큰·문서 사실에서 정리했다.
  1. 화면 코드는 원시 팔레트가 아니라 역할 토큰(fg·bg·stroke)만 쓴다. (관찰에서 정리)
  2. 주황 #ff6600은 화면에서 가장 중요한 행동 하나에만 쓴다. (관찰에서 정리)
  3. 면 구분은 그림자보다 표면 색 단계(basement → default → floating)로 먼저 한다. (관찰에서 정리)
  4. 글자 크기는 rem이라 OS 글자 크기 설정을 따라가고, 고정이 필요한 곳만 `-static` px 토큰을 쓴다. (관찰에서 정리)
  5. 움직임은 200ms 이하는 작은 반응, 넘으면 화면 전환·시트처럼 길이로 역할을 나눈다. (관찰에서 정리)
- 톤: 담백한 흰 화면에 친근한 해요체. 그림자 대신 면 색으로 층을 나눈다.

### 특장점
- 토큰이 두 층으로 나뉘어 공개된다 — 원시 팔레트(carrot 100~1000, gray-00~1000) 위에 fg·bg·stroke 역할 토큰을 얹고, 이 정의 파일(color.yaml 등 9개)이 Apache-2.0 저장소에 있다. 같은 모음의 29CM처럼 화면 측정에 기대지 않아도 된다.
- 다크 모드가 토큰 단위로 정의된다 — 같은 역할 이름이 다크에서 다른 값을 갖는다(bg.brand-solid-pressed #e14d00 → #ff9e65, 기본 글자 #1a1c20 → #f3f4f5). 그림자도 다크에서 불투명도만 높인다(s1 #00000014 → #00000080).
- 글자 크기가 접근성 설정을 따라간다 — 크기 토큰이 rem(1rem = 16px)이고, 크기 단계 번호와 행간 단계 번호를 맞춰 쓴다(t5 16px + t5 22px).
- 모션까지 토큰이다 — 길이 d1 50ms~d6 300ms와 이징 5종(easing, enter, exit, enter-expressive, exit-expressive)이 있고, 바텀시트는 등장 300ms·퇴장 200ms로 정해져 있다.
- 서비스 고유 컴포넌트를 토큰으로 둔다 — 매너온도 배지는 10단계(l1 회색 #757b85 → l6 주황 #ff6600 → l10 빨강 #cb0123)마다 글자·배경 색이 정해져 있다.
- 컴포넌트 명세가 상태까지 기계가 읽는 꼴이다 — 버튼·입력창·칩·탭마다 enabled·pressed·focused·invalid·selected·disabled 값이 YAML(`rootage/components/*.yaml`)로 적혀 있어, 이 문서의 상태 표를 화면 관찰 없이 채울 수 있다.

### 배울 점
- 다크 모드를 만들 때 당근처럼 화면 코드는 역할 토큰만 쓰게 하고, 테마마다 역할 토큰 값만 바꾼다.
- 비활성 버튼을 정할 때 종류와 관계없이 한 조합(#f3f4f5 바탕 + #d1d3d8 글자)으로 묶는다.
- 글자 크기 표를 만들 때 크기와 행간을 같은 단계 번호로 짝지어 둔다.
- 선 토큰을 쓰임으로 나눌 때 당근처럼 "외곽선(weak) / 섹션 경계(muted) / 항목 구분(subtle)" 세 이름을 두면 구분선이 남발되지 않는다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 YAML의 semantic 이름(`bg-brand-solid`, `fg-neutral`, `stroke-neutral-weak`)으로 쓴다. `carrot-600`, `gray-900` 같은 primitive와 임의의 HEX는 화면 코드에 쓰지 않는다.
- 주황(`bg-brand-solid`)은 한 화면에 하나다. 일반 CTA가 필요하면 먼저 `neutralSolid`(#2a3038)를 고려한다. 공식 명세가 neutralSolid를 "대부분 화면의 CTA"로, brandSolid를 "사용자 사이 연결이 일어나는 주요 기능"으로 나눈다.
- 크기는 rem으로 구현한다(`font-size: 1rem` = 16px). 행간은 크기와 같은 단계 번호를 고른다.
- 층은 그림자보다 면 색(basement #f3f4f5 → default #ffffff)으로 먼저 나눈다.
- 판단이 어려우면 더 담백한 쪽(회색 버튼, 그림자 없음, 해요체 짧은 문장)을 고른다.

## 2. 색상
팔레트 이름은 `carrot`이다. 다크 테마에서는 단계가 뒤집혀 같은 이름이 다른 값을 가진다. 토큰 이름은 SEED 역할 토큰 이름이다.

### 색 체계
SEED 색은 **primitive → semantic** 두 층이다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| Primitive | `$color.palette.carrot-600`, `$color.palette.gray-900` | 토큰 정의에만. 테마마다 값이 바뀐다 |
| Semantic | `$color.bg.brand-solid`, `$color.fg.neutral`, `$color.stroke.neutral-weak` | 실제 화면과 컴포넌트 |

- semantic 이름은 `{층}.{역할}-{강도}` 꼴이다. 층은 fg(글자·아이콘), bg(면), stroke(선). 강도는 solid(진함) · weak(연함) · muted · subtle 순으로 약해진다.
- 눌림은 `-pressed`, 선택은 `-selected`를 이름 끝에 붙인다(예: bg.brand-solid → bg.brand-solid-pressed).

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| bg.brand-solid | #ff6600 | 화면의 핵심 버튼 배경 (carrot-600) |
| bg.brand-solid-pressed | #e14d00 | 핵심 버튼 눌림 (carrot-700) |
| bg.brand-weak | #fff2ec | 연한 브랜드 배경(배지 등) (carrot-100) |
| bg.brand-weak-pressed | #ffe8db | 연한 배경 눌림 (carrot-200) |
| fg.brand | #ff6600 | 브랜드 색 글자·아이콘 |
| fg.brand-contrast | #e14d00 | 연한 브랜드 배경 위 글자 |
| stroke.brand-weak | #ffd5c0 | 브랜드 외곽선(약) (carrot-300) |
| stroke.brand-solid | #e14d00 | 브랜드 외곽선(강) |
| fg.on-brand-solid | #ffffff | 주황 배경 위 글자 |

carrot 팔레트 전체(라이트): 100 #fff2ec · 200 #ffe8db · 300 #ffd5c0 · 400 #ffb999 · 500 #ff9364 · 600 #ff6600 · 700 #e14d00 · 800 #b93901 · 900 #862b00 · 1000 #471601

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| bg.layer-basement | #f3f4f5 | 화면 가장 깊은 바탕 |
| bg.layer-default | #ffffff | 리스트·본문이 놓이는 기본 표면 |
| bg.layer-floating | #ffffff | 시트·다이얼로그 같은 떠 있는 표면 |
| bg.neutral-weak | #f3f4f5 | 회색 버튼, 약한 배지 |
| bg.neutral-solid | #2a3038 | 어두운 버튼, 스낵바 |
| bg.disabled | #f3f4f5 | 비활성 버튼 배경 |
| bg.overlay | #00000074 | 시트·다이얼로그 뒤 딤 |
| stroke.neutral-weak | #dcdee3 | 카드·입력창·아웃라인 버튼 외곽선 |
| stroke.neutral-muted | #00000010 | 섹션 경계선, 아웃라인 버튼 |
| stroke.neutral-subtle | #0000000c | 리스트 항목 사이 구분선 |
| stroke.focus-ring | #5e98fe | 키보드 포커스 링 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| fg.neutral | #1a1c20 | 기본 글자 |
| fg.neutral-muted | #555d6d | 설명 글자 |
| fg.neutral-subtle | #868b94 | 부가 정보, 리스트 상세 |
| fg.placeholder | #b0b3ba | 입력 안내 |
| fg.disabled | #d1d3d8 | 비활성 글자 |

### 중립 팔레트(라이트)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-00 | #ffffff | 기본 표면 |
| gray-100 | #f7f8f9 | 눌린 표면 |
| gray-200 | #f3f4f5 | 가장 아래 바탕, 비활성 배경 |
| gray-300 | #eeeff1 | 약한 배경 눌림 |
| gray-400 | #dcdee3 | 입력창·카드 외곽선 |
| gray-500 | #d1d3d8 | 비활성 글자 |
| gray-600 | #b0b3ba | 플레이스홀더 |
| gray-700 | #868b94 | 보조 글자(subtle) |
| gray-800 | #555d6d | 보조 글자(muted) |
| gray-900 | #2a3038 | 어두운 버튼 배경 |
| gray-1000 | #1a1c20 | 본문 글자 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| fg.positive | #079171 | 완료, 확인 (success) |
| bg.positive-weak | #edfaf6 | 성공 안내 박스 |
| fg.warning | #9b7821 | 주의 글자 |
| bg.warning-solid | #fbdc65 | 강한 주의 배경, 위 글자는 검정 계열 |
| bg.warning-weak | #fff7de | 주의 안내 박스 |
| fg.critical | #fa342c | 오류 글자, 필수 표시 (error) |
| bg.critical-solid | #fa342c | 삭제 같은 위험 버튼 |
| bg.critical-solid-pressed | #ca1d13 | 위험 버튼 눌림 (red-800, color.yaml) |
| bg.critical-weak | #fdf0f0 | 오류 안내 박스 |
| fg.informative | #217cf9 | 정보 글자, 링크성 강조 (info) |
| bg.informative-weak | #eff6ff | 정보 안내 박스 |

### 역할별 색
- **Brand (`bg.brand-solid` #ff6600)**: 화면의 핵심 행동 하나. 눌림 `bg.brand-solid-pressed` #e14d00. 연한 배지는 `bg.brand-weak` #fff2ec + 글자 `fg.brand-contrast` #e14d00.
- **Neutral solid (`bg.neutral-solid` #2a3038)**: 어두운 CTA와 스낵바. 눌림 `bg.neutral-solid-pressed` #555d6d. 선택된 칩 배경도 이 색이다.
- **Neutral weak (`bg.neutral-weak` #f3f4f5)**: CTA가 아닌 대부분의 버튼. 눌림 #eeeff1.
- **Critical (`bg.critical-solid` #fa342c)**: 삭제·초기화처럼 되돌릴 수 없는 행동. 눌림 #ca1d13. 입력창 오류 선(`stroke.critical-solid`)도 같은 #fa342c다.
- **상태 안내 조합**: 콜아웃은 "연한 배경(`-weak`) + 진한 글자(`fg.*`)"로 짝짓는다. 예: 오류 = `bg.critical-weak` #fdf0f0 + `fg.critical` #fa342c, 정보 = `bg.informative-weak` #eff6ff + `fg.informative` #217cf9.
- **선 세 가지**: 요소의 외곽은 `stroke.neutral-weak`(#dcdee3), 섹션 경계는 `stroke.neutral-muted`(#00000010, 한 화면에 한두 번), 리스트 항목 사이는 `stroke.neutral-subtle`(#0000000c).

### 화면 모드
- 라이트·다크 두 테마가 같은 역할 이름으로 정의된다. 웹에서는 `data-seed-color-mode` 속성으로 `system`(OS 설정 따름) · `light-only` · `dark-only`를 고른다(packages/css/base.css).
- 다크에서는 회색 단계가 뒤집힌다(gray-00 #ffffff → #000000, gray-1000 #1a1c20 → #f3f4f5). 역할 이름으로 짰다면 코드 수정 없이 바뀐다.

### 다크 모드
| 토큰 | HEX | 쓰임 |
|---|---|---|
| bg.brand-solid | #ff6600 | 핵심 버튼 배경 (carrot-700) |
| bg.brand-solid-pressed | #ff9e65 | 핵심 버튼 눌림 (carrot-800) |
| bg.brand-weak | #31241f | 연한 브랜드 배경 |
| bg.brand-weak-pressed | #4b291c | 연한 배경 눌림 |
| fg.brand | #ff6600 | 브랜드 글자·아이콘 |
| fg.brand-contrast | #ff6600 | 연한 브랜드 배경 위 글자 |
| stroke.brand-weak | #6b311c | 브랜드 외곽선(약) |
| stroke.brand-solid | #ff6600 | 브랜드 외곽선(강) |
| fg.on-brand-solid | #ffffff | 주황 배경 위 글자 |
| gray-00 | #000000 | 기본 표면 |
| gray-100 | #16171b | 눌린 표면 |
| gray-200 | #1d2025 | 가장 아래 바탕, 비활성 배경 |
| gray-300 | #2b2e35 | 약한 배경 눌림 |
| gray-400 | #393d46 | 입력창·카드 외곽선 |
| gray-500 | #5b606a | 비활성 글자 |
| gray-600 | #868b94 | 플레이스홀더 |
| gray-700 | #b0b3ba | 보조 글자(subtle) |
| gray-800 | #dcdee3 | 보조 글자(muted) |
| gray-900 | #e9eaec | 어두운 버튼 배경 |
| gray-1000 | #f3f4f5 | 본문 글자 |
| fg.positive | #22b27f | 완료, 확인 |
| bg.positive-weak | #202926 | 성공 안내 박스 |
| fg.warning | #ca901c | 주의 글자 |
| bg.warning-solid | #dab156 | 강한 주의 배경 |
| bg.warning-weak | #302819 | 주의 안내 박스 |
| fg.critical | #ff6e60 | 오류 글자 |
| bg.critical-solid | #f73526 | 위험 버튼 |
| bg.critical-weak | #322323 | 오류 안내 박스 |
| fg.informative | #41a2f9 | 정보 글자 |
| bg.informative-weak | #202742 | 정보 안내 박스 |

### 서비스 고유 색
- 매너온도 배지: 10단계(l1~l10)로 배경과 글자 색이 따로 정해져 있다. 낮은 단계는 회색(l1 글자 #757b85, 배경 #f1f2f3), 중간은 주황(l6 글자 #ff6600, 배경 #fff0e5), 가장 높은 단계는 빨강(l10 글자 #cb0123, 배경 #ffebee)이다.
- 배너 배경 10종: blue #e1f7ff, cool-gray #ebf1f5, green #f0fbe5, orange #fff2e1, pink #ffebf1, purple #f5ecff, red #ffecee, teal #e6faf6, warm-gray #f2f0ee, yellow #fffae1.

### 색 사용 규칙
- 주황 bg.brand-solid는 화면당 핵심 버튼 하나에만 쓴다.
- 화면 코드에서는 원시 팔레트(`$color.palette.*`)를 쓰지 않고 역할 토큰만 쓴다.
- 연한 브랜드 배경(#fff2ec) 위 글자는 fg.brand-contrast(#e14d00)를 쓴다.
- bg.warning-solid(#fbdc65) 위 글자는 검정 계열로 쓴다.
- bg.critical-solid(#fa342c)는 삭제 같은 위험 버튼에 쓴다.
- 리스트 항목 사이는 stroke.neutral-subtle, 섹션 경계는 stroke.neutral-muted로 나눠 쓴다.
- 비활성은 종류와 관계없이 bg.disabled #f3f4f5 + fg.disabled #d1d3d8.

### Don't
- 한 화면에 bg.brand-solid(#ff6600) 면을 두 곳 이상 쓰지 않는다.
- 주황 위 흰 글자를 작은 글자(18px 미만 일반 굵기)로 쓰지 않는다. 대비가 2.9:1이다(8장).
- 섹션 경계선 stroke.neutral-muted를 리스트 항목마다 긋지 않는다. 항목 사이는 stroke.neutral-subtle.
- 다크 테마용 값을 라이트 이름 옆에 HEX로 따로 박지 않는다. 같은 역할 토큰이 테마에 따라 바뀌게 둔다.
- 매너온도 10단계 색을 매너온도 밖(일반 배지·버튼)에 쓰지 않는다.

## 3. 타이포그래피
- 글꼴: 시스템 글꼴(iOS·Android·macOS는 각 플랫폼 시스템 글꼴). Windows만 Pretendard(SIL OFL)를 쓴다. 맑은 고딕·Segoe UI가 의도와 맞지 않아서라고 공식 문서가 설명한다.
- 대체 글꼴(웹 CSS 순서): `-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- 굵기는 세 가지뿐: regular 400, medium 500, bold 700. 아래 모든 단계에 세 굵기를 다 쓸 수 있다(표의 굵기 칸은 기본값 400).
- 크기 토큰은 rem 단위(1rem = 16px)라 OS 글자 크기 설정을 따라간다. 크기 고정이 필요한 곳은 `-static` px 토큰을 쓴다. 원본 단위는 px이고 아래 표는 1px = 1pt로 적었다. 행간도 px 값이다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| t1 | 11 | 400 | 15px | 작은 배지, 매너온도 |
| t2 | 12 | 400 | 16px | 큰 배지, 상단 바 부제 |
| t3 | 13 | 400 | 18px | 리스트 상세, xsmall 버튼 |
| t4 | 14 | 400 | 19px | 작은·중간 버튼, 칩, 탭(작음) |
| t5 | 16 | 400 | 22px | 리스트 제목, 입력값, 탭(중간) |
| t6 | 18 | 400 | 24px | 큰 버튼, 상단 바 제목 |
| t7 | 20 | 400 | 27px | 소제목 |
| t8 | 22 | 400 | 30px | 시트·다이얼로그 제목 |
| t9 | 24 | 400 | 32px | 큰 제목 |
| t10 | 26 | 400 | 35px | 화면 제목(screenTitle) |
| t11 | 28 | 400 | 38px | sm(480px) 이상 권장 |
| t12 | 32 | 400 | 42px | sm 이상 권장 |
| t13 | 40 | 400 | 52px | sm 이상 권장 |
| t14 | 48 | 400 | 60px | sm 이상 권장 |

역할 이름이 붙은 스타일 세 가지:

| 이름 | 조합 | 쓰임 |
|---|---|---|
| screenTitle | 26px / 35px / 700 | 화면 상단 큰 제목 |
| articleBody | 16px / 24px / 400 | 게시글 본문 (행간을 한 단계 넓게) |
| articleNote | 14px / 22px / 400 | 주석, 참고 사항 |

### 위계와 사용처
컴포넌트 토큰에서 실제로 쓰는 조합을 모았다.

| 자리 | 토큰 | 크기/행간 | 굵기 |
|---|---|---|---|
| 화면 제목 | screenTitle | 26/35px | 700 |
| 시트·다이얼로그 제목 | t8 | 22/30px | 700 |
| 상단 바 제목(제목만) | t6 | 18/24px | 700 |
| 상단 바 제목(부제 있음) + 부제 | t5 + t2 | 16px + 12px | 700 + 400 |
| large 버튼 | t6 | 18/24px | 700 |
| small·medium 버튼, 칩 | t4 | 14/19px | 700(버튼) · 500(칩) |
| 탭 medium / small | t5 / t4 | 16px / 14px | 700 |
| 리스트 제목 / 상세 | t5 / t3 | 16px / 13px | 400 |
| 입력값(large) | t5 | 16/22px | 400 |
| 게시글 본문 | articleBody | 16/24px | 400 |
| 배지 large / medium | t2 / t1 | 12px / 11px | 500(weak) · 700(solid) |

### 규칙
- 크기 단계 번호와 행간 단계 번호를 같이 맞춰 쓴다(t5 크기 + t5 행간).
- 게시글 본문만 행간을 한 단계 넓힌다(articleBody 16px / 24px).
- t11(28px) 이상은 sm(480px) 이상 화면에서 쓴다.
- 굵기는 400·500·700만 쓴다. 버튼 글자는 모든 크기에서 700.
- ghost 버튼만 글자 굵기를 400·500으로 낮춰 주목도를 줄일 수 있다(action-button.yaml).

### Don't
- 400·500·700 밖의 굵기(600 등)를 쓰지 않는다.
- 글자 크기를 px로 고정하지 않는다. 고정이 꼭 필요하면 `-static` 토큰을 쓴다.
- 모바일 기본 화면(base, 0–479px)에 t11(28px) 이상을 쓰지 않는다.
- 크기와 행간 단계를 엇갈려 쓰지 않는다(t5 크기에 t3 행간 금지).
- 일반 리스트 본문에 articleBody 행간(24px)을 쓰지 않는다. 게시글 본문 전용이다.

## 4. 레이아웃·간격
- 기준 화면: 모바일 우선(base 0–479px).
- 화면 좌우 여백: 모바일 `global-gutter` 16px. 리스트 항목, 시트 본문, 탭 스크롤 여백이 모두 이 값을 쓴다.
- 기본 단위: 4px. 토큰 이름 `x1` = 4px, `x0_5` = 2px처럼 4의 배수와 절반 단계를 함께 둔다.
- 간격 단계(pt): 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 52, 56, 64 (원본 px)
- 역할 간격 토큰:

| 토큰 | 값 | 쓰임 |
|---|---|---|
| spacing-x.global-gutter | 16px | 화면 좌우 기본 여백 |
| spacing-x.between-chips | 8px | 칩 사이 가로 간격 |
| spacing-y.component-default | 12px | 따로 정해지지 않은 컴포넌트 사이 세로 간격 |
| spacing-y.nav-to-title | 20px | 상단 바와 화면 제목 사이 |
| spacing-y.between-text | 6px | 텍스트 요소 사이 |
| spacing-y.screen-bottom | 56px | 화면 맨 아래 여백 |

### 그리드와 중단점
웹, 모바일 우선 반응형 중단점(packages/css/breakpoints: base 0 · sm 480 · md 768 · lg 1280 · xl 1440).

| 구간 | 너비 | 거터 | 마진 |
|---|---|---|---|
| base | 0–479px | 16px | 12px |
| sm | 480–767px | 16px | 12px |
| md | 768–1279px | 32px | 24px |
| lg | 1280–1439px | 32px | 24px |
| xl | 1440px 이상 | 32px | 24px |

- 콘텐츠 페이지는 12컬럼, 최대 너비 1040px 권장(넓은 탐색 화면은 1280px까지). 대시보드는 밀도별로 8컬럼·720px(낮음), 12컬럼·1040px(기본), 전체 폭(높음). 대시보드 거터 24px, 마진 32px. 사이드바는 768px 이상에서만 보인다.

### 화면 세로 리듬
| 구간 | 값 | 토큰 |
|---|---|---|
| 상단 바 높이 | 56px | top-navigation |
| 상단 바 → 화면 제목 | 20px | spacing-y.nav-to-title |
| 텍스트 → 텍스트 | 6px | spacing-y.between-text |
| 컴포넌트 → 컴포넌트(기본) | 12px | spacing-y.component-default |
| 라벨 → 입력창 | 8px | field |
| 리스트 항목 위아래 | 12px | list-item |
| 화면 맨 아래 | 56px | spacing-y.screen-bottom |

### 안쪽 여백
| 요소 | 값 |
|---|---|
| 리스트 항목 | 위아래 12px · 좌우 16px |
| 콜아웃 | 14px |
| 다이얼로그 | 24px |
| 바텀시트 헤더 | 위 24px · 아래 16px, 본문 좌우 16px |
| 스낵바 | 10px |

### 간격 적용 규칙
- 화면 좌우, 리스트 항목 좌우, 시트 본문 좌우는 모두 16px로 맞춘다.
- 칩 사이는 8px, 텍스트 요소 사이는 6px, 상단 바와 화면 제목 사이는 20px.
- 따로 정해지지 않은 컴포넌트 사이 세로 간격은 12px, 화면 맨 아래는 56px 비운다.

### Don't
- 3px, 7px, 15px처럼 dimension 스케일(2~64px) 밖의 값을 만들지 않는다.
- 화면 좌우 여백을 16px 말고 다른 값으로 화면마다 바꾸지 않는다.
- 화면 맨 아래를 56px보다 좁게 비워 마지막 내용이 하단 버튼에 가리게 두지 않는다.
- 768px 미만에서 사이드바를 띄우지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius.r0_5 | 2px | 아주 작은 요소 |
| radius.r1 | 4px | 중간 배지 |
| radius.r1_5 | 6px | 큰 배지 |
| radius.r2 | 8px | small·medium 버튼, medium 입력창, 스낵바 |
| radius.r2_5 | 10px | 콜아웃, 눌린 리스트 항목 |
| radius.r3 | 12px | large 버튼, large 입력창 |
| radius.r3_5 | 14px | 확인 필요(문서상 쓰임 미기재) |
| radius.r4 | 16px | 확인 필요(문서상 쓰임 미기재) |
| radius.r5 | 20px | 다이얼로그 |
| radius.r6 | 24px | 바텀시트 위쪽 모서리 |
| radius.full | 9999px | xsmall 버튼, 칩, FAB, 매너온도 배지 |

- 규칙: 모서리는 요소 크기에 따라 커진다. 작은 버튼 8px → large 버튼 12px → 다이얼로그 20px → 바텀시트 24px. 같은 크기의 버튼과 입력창은 같은 모서리를 쓴다(medium 8px, large 12px).
- 테두리 두께: 1px (아웃라인 버튼, 입력창, 칩, 배지). 입력창은 포커스·오류 때 2px.

### 고도
- shadow.s1: 0 1px 4px #00000014 — 낮은 띄움
- shadow.s2: 0 2px 10px #0000001a — 중간 띄움
- shadow.s3: 0 4px 16px #0000001f — 가장 위 계층
- 다크 테마의 그림자는 같은 크기에 불투명도만 높인다(s1 #00000080, s2 #000000ad, s3 #000000cc).
- 면 구분은 그림자보다 표면 색 단계(basement → default → floating)로 먼저 한다.

| 층 | 면 | 쓰는 곳 |
|---|---|---|
| basement | #f3f4f5 | 화면 가장 아래, 묶음 사이 틈 |
| default | #ffffff | 리스트, 본문, 입력창 |
| floating | #ffffff + 딤 #00000074 | 바텀시트, 다이얼로그 |
| 떠 있는 버튼 | floating 면 | FAB |

### 모션
- 길이: d1 50ms, d2 100ms, d3 150ms, d4 200ms, d5 250ms, d6 300ms. 200ms 이하는 작은 반응(버튼, 포커스), 넘으면 화면 전환·시트 같은 큰 움직임으로 나눈다.
- 색 전환과 버튼 눌림 축소는 d3 150ms(duration.yaml `color-transition`, `pressed-scale`).

| 이징 토큰 | cubic-bezier | 쓰임 |
|---|---|---|
| easing | (0.35, 0, 0.35, 1) | 버튼·포커스 같은 기능 반응 |
| enter | (0, 0, 0.15, 1) | 시트·다이얼로그 등장 |
| exit | (0.35, 0, 1, 1) | 시트·다이얼로그 퇴장 |
| enter-expressive | (0.03, 0.4, 0.1, 1) | 강조할 등장 |
| exit-expressive | (0.35, 0, 0.95, 0.55) | 강조할 퇴장 |

| 움직임 | 길이 | 이징 |
|---|---|---|
| 버튼 색·눌림 | 150ms | easing |
| 바텀시트 등장 / 퇴장 | 300ms / 200ms | enter / exit |
| 다이얼로그 딤 등장·퇴장 | 100ms | 확인 필요 |
| 스낵바 등장 | 150ms(80% 크기·투명에서 시작) | 확인 필요 |

- 움직임 줄이기(`prefers-reduced-motion`) 대응: 확인 필요.

### Don't
- 기본 카드·리스트에 shadow.s1~s3를 깔지 않는다. 그림자는 떠 있는 요소에만.
- 다이얼로그(20px)·바텀시트(24px)보다 큰 모서리를 일반 카드에 쓰지 않는다.
- 작은 반응(버튼, 포커스)에 200ms를 넘는 길이를 쓰지 않는다.
- 등장과 퇴장에 같은 이징을 쓰지 않는다. 등장은 enter, 퇴장은 exit.

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 상태 값은 `packages/rootage/components/*.yaml`에서 읽었다. 공식 명세에서 확인 못 한 상태는 `확인 필요`.

### 6.1 버튼 (ActionButton)
**크기**

| 크기 | 최소 높이 | 좌우 여백 | 글자 | 모서리 | 쓰는 곳 |
|---|---|---|---|---|---|
| xsmall | 32px | 14px | 13px | full | 좁은 공간, 알약 꼴 |
| small | 36px | 14px | 14px | 8px | 화면 가운데 일반 행동 |
| medium | 40px | 16px | 14px | 8px | 화면 가운데 일반 행동 |
| large | 52px | 20px | 18px | 12px | 주로 CTA |

**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| brandSolid | 주황 #ff6600 배경, 흰 글자 | 사용자 사이 연결이 일어나는 핵심 기능 하나 |
| neutralSolid | #2a3038 배경, 흰 글자 | 대부분 화면의 CTA. 한 화면에 하나 |
| neutralWeak | #f3f4f5 배경 | CTA 밖의 대부분 행동 |
| criticalSolid | 빨강 #fa342c 배경 | 삭제·초기화처럼 되돌릴 수 없는 행동 |
| neutralOutline·brandOutline | 투명 배경 + 1px 선 | 외곽선 보조 버튼. 둘끼리 짝지어 쓴다 |
| ghost | 투명 | 가장 가벼운 행동 |

**상태**

| 상태 | 모양 |
|---|---|
| pressed | 배경이 `-pressed` 토큰으로 바뀌고(brand #e14d00, neutralSolid #555d6d, neutralWeak #eeeff1, critical #ca1d13) 버튼이 살짝 줄어든다. 150ms |
| focus-visible | 2px #5e98fe 바깥선, 2px 띄움(css/recipes/action-button.css) |
| disabled | 종류와 관계없이 배경 #f3f4f5, 글자·아이콘 #d1d3d8 |
| loading | 글자 대신 원형 진행 표시(14–18px, 두께 2px). 배경은 pressed 색 |

**규칙**
- 글자는 모든 크기에서 bold(700). 아이콘만 있는 버튼은 높이와 같은 정사각형(32·36·40·52px).
- 한 화면에 brandSolid나 neutralSolid는 하나만 둔다.
- outline 변형은 solid 변형(brand·neutral·critical)과 같은 묶음에 섞지 않는다.
- 아이콘만 있는 버튼은 꼭 필요할 때만 쓰고 접근성 이름(`aria-label`)을 단다.
- 문구는 마침표 없는 짧은 동사형(9장).
- 터치: large(52px)만 44pt를 넘는다. small·medium은 주변 여백으로 터치 영역을 44pt까지 넓힌다. (구현 권장)

### 6.2 입력창 (TextInput · Field)
**크기**

| 변형 | 최소 높이 | 좌우 여백 | 글자 | 모서리 |
|---|---|---|---|---|
| outline large | 52px | 16px | 16px | 12px |
| outline medium | 40px | 14px | 14px | 8px |
| underline large | 40px | 0 | 18px | 아래선 1px |
| underline medium | 34px | 0 | 16px | 아래선 1px |
| 여러 줄 large | 94px | 16px | 16px | 12px |
| 여러 줄 medium | 82px | 14px | 14px | 8px |

**상태**

| 상태 | 모양 |
|---|---|
| 기본 | 외곽선 #dcdee3 1px, 값 #1a1c20, 안내 #b0b3ba |
| focused | 선 색 stroke.neutral-contrast #1a1c20, 두께 2px |
| invalid | 선 색 stroke.critical-solid #fa342c, 두께 2px. 포커스 중이어도 빨강 유지 |
| disabled | 면 bg.disabled #f3f4f5, 값·안내·아이콘 #d1d3d8 |
| readonly | outline은 면 #f3f4f5, underline은 글자 #555d6d |

- 선 색이 바뀔 때는 두께·색을 전환하지 않고 상태 선이 겹쳐 나타났다 사라진다(text-input.yaml).

**규칙**
- 라벨 묶음(Field): 라벨과 입력창 사이 8px. 필수 표시는 빨강 점.
- 라벨은 입력창 위에 둔다. placeholder로 라벨을 대신하지 않는다. (구현 권장)
- Field는 `aria-invalid`, `aria-required`, `aria-describedby`(설명·오류 문구)를 입력창에 연결한다(react-headless/field/src/useField.ts).
- 같은 폼에서 outline과 underline을 섞지 않는다. (구현 권장)

### 6.3 칩·탭
**칩**

| 크기 | 높이 | 모서리 | 글자 |
|---|---|---|---|
| 작음 / 중간 / 큼 | 32 / 36 / 40px | full | 14px medium |

| 상태 | 모양 |
|---|---|
| selected | 배경 bg.neutral-solid #2a3038, 글자·아이콘 흰색 |
| selected + pressed | 배경 #555d6d |
| pressed(선택 안 됨) | 약한 배경이 눌림 색으로 |
| disabled | 불투명도 0.5 |

**탭**

| 크기 | 최소 높이 | 글자 |
|---|---|---|
| medium | 44px | 16px bold |
| small | 40px | 14px bold |

- 상태: 선택 안 됨 #868b94, 선택 #1a1c20, 비활성 #d1d3d8.
- 규칙: 칩 사이 8px. 탭은 `role="tablist"`/`"tab"`/`"tabpanel"`과 `aria-selected`를 쓴다(react-headless/tabs/src/useTabs.ts).

### 6.4 리스트·콜아웃
- 리스트 항목: 위아래 12px, 좌우 16px. 제목 16px/400 #1a1c20, 상세 13px #868b94. 앞 아이콘 22px, 뒤 화살표 18px.
- 리스트 눌림: 배경이 #00000007 정도로 어두워지고, 좌우 6px 안쪽으로 들어오며 모서리 10px이 생긴다.
- 항목 사이 구분선은 stroke.neutral-subtle, 섹션 경계는 stroke.neutral-muted로 나눠 쓴다.
- 콜아웃(안내 박스): 안 여백 14px, 모서리 10px, 최소 높이 50px, 글자 14px. 상태별로 연한 배경 + 진한 글자 조합.

| 콜아웃 종류 | 배경 | 글자 |
|---|---|---|
| 오류 | #fdf0f0 | #fa342c |
| 주의 | #fff7de | #9b7821 |
| 성공 | #edfaf6 | #079171 |
| 정보 | #eff6ff | #217cf9 |

- 규칙: 상태를 색만으로 알리지 않고 아이콘·문구를 함께 둔다. (구현 권장)

### 6.5 상단 바·하단 탭 바
- 상단 바(TopNavigation): 높이 56px, 좌우 6px. 제목만 있을 때 18px bold, 부제가 있으면 제목 16px bold + 부제 12px. iOS·Android 정렬 방식을 따로 둔다. 투명 톤일 때 글자는 흰색.
- 앱 하단 탭 바: 확인 필요(공개 토큰에 별도 정의 없음).

### 6.6 바텀시트·다이얼로그
| 항목 | 바텀시트 | 다이얼로그 |
|---|---|---|
| 모서리 | 위쪽 24px | 20px |
| 너비 | 최대 480px | 화면의 90%(medium 최대 480px, large 800px), 좌우 바깥 20px |
| 높이 | 최대 화면의 90% | 확인 필요 |
| 안 여백 | 헤더 위 24px·아래 16px, 본문·버튼 좌우 16px | 24px |
| 제목 / 설명 | 22px bold / 16px | 22px bold / 16px #555d6d |
| 딤 | #00000074 | #00000074 |
| 움직임 | 등장 300ms, 퇴장 200ms | 딤 등장·퇴장 100ms |

- 다이얼로그는 `role="dialog"`, 모달이면 `aria-modal`을 단다(react-headless/dialog/src/useDialog.ts).
- 되돌릴 수 없는 행동을 묻는 다이얼로그의 확인 버튼은 criticalSolid를 쓴다. (구현 권장)

### 6.7 스낵바·배지
- 스낵바: 배경 #2a3038, 모서리 8px, 최소 높이 44px, 최대 너비 464px, 안 여백 10px. 성공이면 앞 아이콘 초록, 실패면 빨강. 나타날 때 80% 크기·투명에서 시작해 150ms 안에 자리 잡는다. `role="status"`, `aria-atomic="true"`로 읽힌다(react-headless/snackbar/src/useSnackbar.ts).
- 배지: large 높이 24px·모서리 6px·글자 12px, medium 높이 20px·모서리 4px·글자 11px. weak(연한 배경, medium 굵기), solid(진한 배경, bold), outline(1px 선) 세 종류.
- 매너온도 배지: 모서리 full, 10단계 색(2장 서비스 고유 색).

### 6.8 기타
- FAB: 44px 원, 흰 떠 있는 표면, 아이콘 22px.
- 스위치: 높이 32·24·16 세 크기.
- 체크박스: medium 최소 높이 32px, large 36px. 라벨과 8px.
- 아이콘: 당근 로고 형태에서 온 둥근 인상, 굵은 선. 모노크롬과 멀티컬러 두 분류, 300개 안팎. 이름은 의미가 아니라 생김새로 짓는다. 실제 쓰임 크기는 컴포넌트 토큰 기준 14, 16, 18, 22px이 자주 나온다.
- 일러스트·사진: 공식 문서에 별도 규칙 확인 필요. 이미지 프레임·반응 버튼 컴포넌트가 있다.

## 7. 패턴
- 목록 → 상세: 리스트 항목(위아래 12px, 좌우 16px, 뒤 화살표 18px)을 누르면 눌림 배경과 10px 모서리가 생긴다. 상세 화면 구조는 확인 필요.
- 검색: 확인 필요.
- 빈 상태·오류: 오류·성공·주의·정보 안내는 콜아웃(연한 배경 + 진한 글자)으로, 일시적인 결과 알림은 스낵바(성공 초록·실패 빨강 아이콘)로 보여 준다. 빈 상태 화면은 확인 필요.
- 폼·결제: 입력창은 라벨 묶음(Field)으로 라벨과 8px, 필수 표시는 빨강 점. 결제 흐름은 확인 필요.
- 바텀시트·다이얼로그: 딤 #00000074 위에 떠 있는 표면(bg.layer-floating). 시트는 등장 300ms(enter)·퇴장 200ms(exit).

### 알림 고르기
| 상황 | 쓰는 것 |
|---|---|
| 방금 한 행동의 결과(저장됨, 실패) | 스낵바 |
| 화면에 머무는 안내·주의 | 콜아웃 |
| 입력 하나의 오류 | 입력창 invalid + 아래 오류 문구 |
| 되돌릴 수 없는 행동 확인 | 다이얼로그 + criticalSolid |
| 여러 선택지 고르기 | 바텀시트 |

### 예시 문구
9장 말투 규칙(해요체, -시- 높임 줄이기, 긍정문, 버튼 마침표 없음)으로 쓴 예시다.

```
(스낵바, 성공)  관심 목록에 담았어요
(스낵바, 실패)  저장하지 못했어요. 다시 시도해 주세요
(다이얼로그)    게시글을 삭제할까요?
                삭제한 글은 되돌릴 수 없어요.
                [취소] [삭제]
```
(예시 문구, SylviaLab 작성)

- 로딩: 버튼 안 원형 진행 표시가 있다. 화면 단위 로딩(스켈레톤 `Skeleton` 컴포넌트가 react 패키지에 있음)의 쓰임 규칙은 확인 필요.

## 8. 접근성
- 글자 대비(WCAG 2.x, 원본 HEX로 계산):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #1a1c20 | #ffffff | 17.1:1 | 통과 |
| #555d6d | #ffffff | 6.6:1 | 통과 |
| #868b94 | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #b0b3ba | #ffffff | 2.1:1 | 미달 |
| #ffffff | #ff6600 | 2.9:1 | 미달 |
| #ffffff | #e14d00 | 4.0:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #2a3038 | 13.3:1 | 통과 |
| #e14d00 | #fff2ec | 3.6:1 | 미달(큰 글자 3:1은 통과) |
| #fa342c | #ffffff | 3.8:1 | 미달(큰 글자 3:1은 통과) |
| #079171 | #ffffff | 4.0:1 | 미달(큰 글자 3:1은 통과) |
| #217cf9 | #ffffff | 4.0:1 | 미달(큰 글자 3:1은 통과) |
| #1a1c20 | #fbdc65 | 12.6:1 | 통과 |
| #1a1c20 | #f3f4f5 | 15.5:1 | 통과 |
| #f3f4f5 | #000000 | 19.1:1 | 통과 |

- 대비 메모: 주황 버튼의 흰 글자는 2.9:1로 큰 글자 기준에도 못 미친다(버튼 글자는 700 굵기, large 18px). 눌림 색 #e14d00 위에서는 4.0:1로 오른다. 부가 정보 #868b94와 오류 글자 #fa342c, 성공·정보 글자는 큰 글자 기준만 통과한다. 비활성 글자(#d1d3d8 / #f3f4f5, 1.4:1)는 비활성이라 대비 기준 대상이 아니다.
- 터치 영역: 버튼 최소 높이 32/36/40/52px, 탭 44px·40px, FAB 44px, 상단 바 56px. large 버튼·탭 medium·FAB만 44pt 기준을 넘는다.
- 최소 글자 크기: t1 11px(작은 배지, 매너온도).
- 포커스: 키보드 포커스 링 stroke.focus-ring #5e98fe.
- 글자 확대: 크기 토큰이 rem(1rem = 16px)이라 OS 글자 크기 설정을 따라간다.
- 스크린리더: 확인 필요(화면 단위 검증 자료 없음). 아래 점검 목록의 ARIA 항목은 공식 headless 코드에서 확인한 것이다.

### 점검 목록
- [ ] 키보드: 모든 버튼·입력창에 Tab으로 갈 수 있다. 버튼 `:focus-visible`에 2px #5e98fe 바깥선이 보인다(css/recipes 84개 파일에 focus-visible 규칙).
- [ ] 입력 오류: 오류 입력창에 `aria-invalid`, 설명·오류 문구는 `aria-describedby`로 연결된다(Field).
- [ ] 다이얼로그: `role="dialog"` + `aria-modal`. 닫으면 연 버튼으로 포커스가 돌아간다. (구현 권장)
- [ ] 스낵바: `role="status"`로 읽힌다. 사라지는 중인 스낵바는 읽지 않는다.
- [ ] 아이콘만 있는 버튼: `aria-label`을 단다.
- [ ] 이미지: 의미 있는 사진은 대체 텍스트, 장식은 빈 alt. (구현 권장)
- [ ] 확대: OS 글자 크기를 키워도 버튼·리스트 글자가 잘리지 않는다. 확인 필요.
- [ ] 터치: 52px 미만 버튼은 주변 여백까지 44pt 영역을 확보한다. (구현 권장)

## 9. 글쓰기 톤
- 말투: 친근하고 활기찬 해요체. 원칙은 명확함, 쉬움, 배려 세 가지(SEED 문서 voice-and-tone).
- 존댓말 높임(-시-)은 줄인다. "할 수 있어요"처럼 쓰고 "하실 수 있어요"는 피한다. 사용자 이름을 부를 때만 "님"을 붙인다.
- 같은 내용이면 부정문보다 긍정문으로 쓴다. 한 문장에 한 가지 내용만 담는다. 느낌표는 꼭 필요할 때 한 번만.
- 마침표는 평서문 끝에 찍되, 화면 큰 제목·20pt 이상 큰 글씨·버튼·메뉴·라벨에는 찍지 않는다.
- 버튼 문구 꼴: 마침표 없는 짧은 문구. 예시 구조는 "[대상]을 [동작]할 수 있어요", "[닉네임]님, [제안]해보세요".
- 숫자·단위 표기: 수는 아라비아 숫자로 쓴다.

## 10. Do & Don't
아래는 SEED 공개 문서·토큰에 적힌 사실에서 SylviaLab이 정리한 규칙이다(관찰에서 정리, 공식 Do & Don't 문장은 아님).

### Do
- 화면 코드에는 fg·bg·stroke 역할 토큰만 쓴다.
- 핵심 버튼은 bg.brand-solid #ff6600, 눌림은 #e14d00으로 바꾼다.
- 비활성 버튼은 종류와 관계없이 #f3f4f5 배경 + #d1d3d8 글자로 둔다.
- 화면 좌우 여백은 16px(global-gutter), 칩 사이는 8px로 둔다.
- 크기와 행간은 같은 단계 번호로 짝짓는다(t5 16px / 22px).
- 바텀시트는 위쪽 모서리 24px, 등장 300ms·퇴장 200ms로 움직인다.
- 버튼 글자는 크기와 관계없이 700으로 쓴다.
- 입력창 포커스는 #1a1c20 2px 선, 오류는 #fa342c 2px 선으로 바꾼다.

### Don't
- 한 화면에 주황 brandSolid 버튼을 두 개 이상 두지 않는다.
- 원시 팔레트(`$color.palette.*`) 값을 화면 코드에 바로 쓰지 않는다.
- 면을 나눌 때 그림자부터 쓰지 않는다. basement(#f3f4f5) → default(#ffffff) → floating 순서로 먼저 나눈다.
- 400·500·700 밖의 굵기를 쓰지 않는다.
- 버튼·메뉴·라벨·20pt 이상 큰 글씨에 마침표를 찍지 않는다.
- 작은 반응(버튼, 포커스)에 200ms를 넘는 움직임을 쓰지 않는다.
- "하실 수 있어요"처럼 -시- 높임을 쓰지 않는다.
- outline 버튼을 solid 버튼과 한 묶음에 섞지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: 오픈소스 저장소 daangn/seed-design(Apache-2.0). 토큰 원본은 packages/rootage(color.yaml, dimension.yaml, radius.yaml, font-size.yaml, line-height.yaml, font-weight.yaml, shadow.yaml, duration.yaml, timing-function.yaml), 컴포넌트 토큰은 packages/rootage/components(action-button, text-input, chip, badge, list-item, callout, top-navigation, tab, bottom-sheet, dialog, snackbar, fab, manner-temp-badge, typography), 웹 기본 CSS는 packages/css/base.css.
- 배포 패키지(2026-10-29 커밋 기준): `@seed-design/css` 3.1.0, `@seed-design/react` 3.1.0, `@seed-design/rootage-artifacts` 3.1.0, `@seed-design/tailwind3-plugin` 3.1.0, `@seed-design/figma` 2.1.0, `@seed-design/mcp` 3.0.0, `@seed-design/docs-mcp` 0.7.0.
- Figma 라이브러리: 공개 자료 없음(저장소에 `@seed-design/figma` 패키지는 있다)
- 문서·Storybook: 공식 문서 seed-design.io, 저장소 docs/content/foundations(typography, layout, motion, iconography, voice-and-tone, writing). Storybook은 공개 자료 없음.
- 버전·변경 관리: 패키지마다 CHANGELOG.md가 있다(packages/rootage/CHANGELOG.md 등). `@seed-design/css` 4.0.0에서 지울 예정인 토큰은 color.yaml에 `@deprecated`로 표시된다(예: fg.neutral-inverted → fg.on-neutral-solid).

## 12. AI에 넣을 때
```
당근 스타일로 디자인해 줘.
- 주색: #ff6600 (눌림 #e14d00). 화면당 핵심 버튼 하나에만.
- 일반 CTA: #2a3038 배경 + 흰 글자 (눌림 #555d6d)
- 글자: 본문 #1a1c20, 설명 #555d6d, 부가 #868b94
- 배경: 표면 #ffffff, 바닥·회색 버튼 #f3f4f5, 외곽선 #dcdee3
- 상태: 오류 #fa342c, 성공 #079171, 정보 #217cf9
- 글꼴: 시스템 글꼴(Windows는 Pretendard), 굵기 400/500/700만
- 크기: 본문 16/22, 리스트 상세 13/18, 화면 제목 26/35 bold
- 모서리: 버튼 8px(large 12px), 다이얼로그 20px, 시트 위 24px, 칩 full
- 간격 단위: 4px, 화면 좌우 16px
- 버튼: 높이 40/52px, 글자 bold, 비활성은 #f3f4f5 배경 + #d1d3d8 글자
- 입력창: 포커스 #1a1c20 2px, 오류 #fa342c 2px
- 분위기: 그림자 거의 없이 면 색으로 층을 나누는 담백한 화면, 해요체
```

## 13. 참고 자료
- https://seed-design.io (확인 2026-10-31)
- https://github.com/daangn/seed-design (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/rootage — color.yaml, dimension.yaml, radius.yaml, font-size.yaml, line-height.yaml, font-weight.yaml, shadow.yaml, duration.yaml, timing-function.yaml (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/rootage/components — action-button, text-input, chip, badge, list-item, callout, top-navigation, tab, bottom-sheet, dialog, snackbar, fab, manner-temp-badge, typography (확인 2026-10-31)
- https://github.com/daangn/seed-design/blob/main/packages/css/base.css — 웹 글꼴 순서 (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/docs/content/foundations — typography, layout, motion, iconography, voice-and-tone, writing 문서 (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/react-headless — field, dialog, snackbar, tabs의 ARIA 연결 (확인 2026-10-31)
- https://github.com/daangn/seed-design/tree/main/packages/css/recipes — action-button.css 포커스 표시 (확인 2026-10-31)

근거와 한계
- 이 문서의 값은 위 공식 문서·저장소 토큰 파일에서 읽은 것이다.
- 앱 하단 탭 바, radius r3_5·r4의 쓰임, 일러스트·사진 규칙은 공개 자료에서 확인하지 못했다.

서비스 이름과 브랜드는 당근마켓(주)의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.

## 부록 A. 구현 매핑
DESIGN.md 이름과 공식 CSS 변수(`@seed-design/css`, packages/css/base.css) 이름을 잇는다. 점(.)은 하이픈(-)으로 바뀐다.

| DESIGN.md | 공식 CSS 변수 | React 컴포넌트 |
|---|---|---|
| `colors.bg-brand-solid` | `--seed-color-bg-brand-solid` | — |
| `colors.carrot-600` | `--seed-color-palette-carrot-600` | — |
| `colors.fg-neutral` | `--seed-color-fg-neutral` | — |
| `colors.bg-layer-default` | `--seed-color-bg-layer-default` | — |
| `colors.stroke-focus-ring` | `--seed-color-stroke-focus-ring` | — |
| `spacing.x4` | `--seed-dimension-x4` | — |
| `spacing.global-gutter` | `--seed-dimension-spacing-x-global-gutter` | — |
| `spacing.nav-to-title` | `--seed-dimension-spacing-y-nav-to-title` | — |
| `typography.t5` | `--seed-font-size-t5` · `--seed-line-height-t5` (고정은 `-static`) | `Text` |
| `typography.font-weight-bold` | `--seed-font-weight-bold` | — |
| `rounded.r3` | `--seed-radius-r3` | — |
| `shadow.s1` | `--seed-shadow-s1` | — |
| `motion.d4` | `--seed-duration-d4` | — |
| `motion.enter` | `--seed-timing-function-enter` | — |
| `components.button-*` | `.seed-action-button` | `ActionButton` |
| `components.text-input-*` | 확인 필요 | `TextField`, `Field` |
| `components.chip*` | 확인 필요 | `Chip`, `ChipTabs` |
| `components.tab*` | 확인 필요 | `Tabs` |
| `components.bottom-sheet` | 확인 필요 | `BottomSheet` |
| `components.dialog` | 확인 필요 | `Dialog`, `AlertDialog` |
| `components.snackbar` | 확인 필요 | `Snackbar` |
| `components.badge-*` | 확인 필요 | `Badge`, `MannerTempBadge` |
| `components.callout` | 확인 필요 | `Callout` |

- 테마: `data-seed-color-mode="system" | "light-only" | "dark-only"`를 루트나 영역에 단다.
- 중단점: `@seed-design/css/breakpoints`의 `breakpoints`(base 0, sm 480, md 768, lg 1280, xl 1440).

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**(seed-design 저장소, 로컬 사본 커밋 99efaf5 · 2026-10-29): 색 primitive·semantic·다크 값(packages/rootage/color.yaml), 간격 x0_5~x16과 역할 간격(dimension.yaml), 모서리(radius.yaml), 글자 크기·행간·굵기(font-size.yaml, line-height.yaml, font-weight.yaml), 그림자(shadow.yaml), 길이·이징(duration.yaml, timing-function.yaml), 컴포넌트 크기·상태(components/action-button.yaml, text-input.yaml, chip.yaml, tab.yaml 등), 버튼 포커스 표시(packages/css/recipes/action-button.css), 테마 속성(packages/css/base.css), 중단점(packages/css/breakpoints/index.mjs), ARIA 연결(packages/react-headless/field/src/useField.ts, dialog/src/useDialog.ts, snackbar/src/useSnackbar.ts, tabs/src/useTabs.ts), 패키지 버전(각 package.json). 글꼴 설명·글쓰기 원칙·그리드 표는 seed-design.io와 docs/content/foundations.
- **이번 판에 공식 저장소에서 새로 읽은 값**: 위험 버튼 눌림 #ca1d13(color.yaml `$color.palette.red-800`, `$color.bg.critical-solid-pressed`), 입력창 focused 선 stroke.neutral-contrast(#1a1c20)·2px와 invalid 선 #fa342c·2px(text-input.yaml), 칩 selected #2a3038·disabled 불투명도 0.5(chip.yaml), 탭 selected #1a1c20(tab.yaml), neutralSolid·brandSolid 쓰임 구분과 outline 혼용 금지(action-button.yaml 변형 설명). v2 문서는 입력창 포커스를 #5e98fe로 적었으나, 저장소 기준으로 #5e98fe는 버튼 등 키보드 포커스 바깥선이고 입력창 포커스 선은 #1a1c20이라 바로잡았다.
- **SylviaLab이 정리·권장한 것**: 1장 원칙 5개와 AI 에이전트 안내, 각 장 Don't, 6장 규칙 중 `(구현 권장)` 표시 줄, 7장 알림 고르기 표와 예시 문구, 8장 대비 계산(공식 HEX로 WCAG 공식 적용)과 점검 목록, 모서리 크기 위계 설명, YAML의 semantic 이름 표기(`bg.brand-solid` → `bg-brand-solid`).
