---
version: "1.0"
name: "채널톡"
description: "회색을 검정의 투명도로 만들어 라이트·다크 대비를 같은 비율로 지키고, 보라빛 파랑 #6157ea 하나와 11가지 태그 색, 자동 계산 호버 색을 오픈소스 토큰으로 배포하는 촘촘한 업무용 시스템(Bezier)."
source:
  - "https://github.com/channel-io/bezier-react (packages/bezier-tokens/src/beta, bezier-tokens 0.6.0)"
  - "https://github.com/channel-io/bezier-react (packages/bezier-react/src/components, @channel.io/bezier-react 3.6.6)"
  - "https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/README.md"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 색 — Primitive (beta light 값)
#    Bezier에는 단계 숫자 팔레트 대신 "색 이름 × 진하기" 구조가 있다.
#    아래 primitive 이름(black-alpha-85 등)은 SylviaLab이 투명도를 읽기 쉽게 붙인 것이다.
# ─────────────────────────────────────────────
colors:
  # 검정 투명도 단계 — 라이트 테마 회색 글자·면·선의 재료
  black: "#000000"
  black-alpha-85: "#000000d9"
  black-alpha-60: "#00000099"
  black-alpha-40: "#00000066"
  black-alpha-15: "#00000026"
  black-alpha-8: "#00000014"
  black-alpha-5: "#0000000d"
  black-alpha-3: "#00000008"
  white: "#ffffff"
  # 불투명 회색 면
  grey: "#fbfbfb"            # fill.grey(normal), surface.low
  grey-heavy: "#f7f7f8"      # 토스트·떠 있는 배너
  grey-heavier: "#efeff0"
  # 11가지 색 이름 (글자·아이콘·진한 면 값)
  blue: "#6157ea"            # 대표 행동색
  cobalt: "#3292e3"
  teal: "#09b2ac"
  green: "#20ab55"
  olive: "#b7c427"           # 글자 값. 면·아이콘은 olive-fill
  olive-fill: "#a9b110"
  yellow: "#edae0d"
  orange: "#e67f2b"
  red: "#e1535d"
  pink: "#d64bb5"
  purple: "#8e57e7"
  navy: "#424fab"
  # 행동색 투명 단계
  blue-alpha-10: "#6157ea1a"  # 선택 면, secondary 버튼
  blue-alpha-20: "#6157ea33"  # 선택 상태 눌림
  blue-alpha-30: "#6157ea4d"  # 포커스 링

  # ── Semantic (화면에서는 이 이름만 쓴다) ──
  primary: "{colors.blue}"                      # fill.action / text.action
  on-primary: "{colors.white}"                  # text.absolute.white
  primary-soft: "{colors.blue-alpha-10}"        # fill.accent.blue
  primary-pressed-soft: "{colors.blue-alpha-20}" # fill.accent.blue.heavy
  focus-ring: "{colors.blue-alpha-30}"          # state.action.light
  text-heaviest: "{colors.black}"               # text.neutral.heaviest
  text-primary: "{colors.black-alpha-85}"       # text.neutral
  text-secondary: "{colors.black-alpha-60}"     # text.neutral.light, 플레이스홀더
  text-muted: "{colors.black-alpha-40}"         # text.neutral.lighter, icon.neutral
  surface: "{colors.white}"                     # surface, high, higher, highest
  surface-low: "{colors.grey}"
  surface-glass: "#ffffffe6"
  fill-input: "{colors.grey}"                   # fill.grey
  fill-toast: "{colors.grey-heavy}"             # fill.grey.heavy
  fill-neutral-heaviest: "{colors.black-alpha-85}" # 검정 버튼
  fill-neutral-heavier: "{colors.black-alpha-40}"  # 회색 배지
  fill-neutral-heavy: "{colors.black-alpha-15}"    # 꺼진 스위치
  fill-neutral: "{colors.black-alpha-8}"
  fill-neutral-light: "{colors.black-alpha-5}"     # 보조 버튼, 호버 면, 탭 아래선
  fill-neutral-lighter: "{colors.black-alpha-3}"
  border: "{colors.black-alpha-8}"              # border.neutral
  border-heavy: "{colors.black-alpha-15}"       # border.neutral.heavy, 입력창 안쪽 선
  dim: "{colors.black-alpha-40}"                # dim.absolute.black (라이트·다크 같음)
  floating-surface: "#fdfdff"                   # floating 버튼 흰 면
  success: "{colors.green}"
  warning: "{colors.orange}"                    # 입력 오류도 이 색
  danger: "{colors.red}"                        # fill/text.critical
  info: "{colors.cobalt}"                       # fill/text.highlight
  error-ring: "#e67f2b4d"

  # ── Dark (같은 단계 이름 + -dark) ──
  primary-dark: "#8082ff"
  primary-soft-dark: "#6b6eff2e"
  primary-pressed-soft-dark: "#6b6eff4d"
  focus-ring-dark: "#6b6eff73"
  text-heaviest-dark: "#ffffff"
  text-primary-dark: "#ffffffcc"
  text-secondary-dark: "#ffffff99"
  text-muted-dark: "#ffffff66"
  surface-low-dark: "#1a1a1c"
  surface-dark: "#1d1d20"
  surface-high-dark: "#242426"     # 툴팁, fill.grey
  surface-higher-dark: "#29292d"   # 모달, fill.grey.heavy
  surface-highest-dark: "#313135"  # fill.grey.heavier
  border-dark: "#ffffff1f"
  border-heavy-dark: "#ffffff33"
  success-dark: "#51c371"
  warning-dark: "#f79847"
  danger-dark: "#f36868"
  info-dark: "#5cadef"

# ─────────────────────────────────────────────
# 2. 타이포그래피 — Inter + Noto Sans KR, 행간은 px 고정값을 배수로 적음
#    역할 토큰 굵기는 regular 400 / bold 700 두 가지
# ─────────────────────────────────────────────
typography:
  font-family: "Inter, NotoSansKR, 'Noto Sans KR', NotoSansJP, 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Segoe UI', Roboto, system-ui, sans-serif"
  font-family-code: "ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace"
  letter-spacing-tight: "-0.1px"     # 15~17px
  letter-spacing-tighter: "-0.4px"   # 22px 이상 제목
  display-large:   { fontSize: "36px", fontWeight: 700, lineHeight: 1.22 }  # 44px
  display-medium:  { fontSize: "30px", fontWeight: 700, lineHeight: 1.2 }   # 36px
  heading-xlarge:  { fontSize: "24px", fontWeight: 700, lineHeight: 1.33 }  # 32px
  heading-large:   { fontSize: "22px", fontWeight: 700, lineHeight: 1.27 }  # 28px
  heading-medium:  { fontSize: "18px", fontWeight: 700, lineHeight: 1.33 }  # 24px
  heading-small:   { fontSize: "17px", fontWeight: 700, lineHeight: 1.41 }  # 24px
  heading-xsmall:  { fontSize: "16px", fontWeight: 700, lineHeight: 1.5 }   # 24px
  heading-2xsmall: { fontSize: "15px", fontWeight: 700, lineHeight: 1.33 }  # 20px
  text-2xlarge:    { fontSize: "17px", fontWeight: 400, lineHeight: 1.41 }
  text-xlarge:     { fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }
  text-large:      { fontSize: "15px", fontWeight: 400, lineHeight: 1.33 }
  text-medium:     { fontSize: "14px", fontWeight: 400, lineHeight: 1.29 }  # 기본 본문·버튼·입력창
  text-small:      { fontSize: "13px", fontWeight: 400, lineHeight: 1.38 }
  text-xsmall:     { fontSize: "12px", fontWeight: 400, lineHeight: 1.33 }
  text-2xsmall:    { fontSize: "11px", fontWeight: 400, lineHeight: 1.45 }  # 가장 작은 글자
  code-medium:     { fontSize: "14px", fontWeight: 400, lineHeight: 1.29 }
  code-small:      { fontSize: "13px", fontWeight: 400, lineHeight: 1.38 }

# ─────────────────────────────────────────────
# 3. 치수 — 토큰 이름이 곧 px (dimension.6 = 6px)
# ─────────────────────────────────────────────
rounded:
  r2: "2px"
  r3: "3px"
  r4: "4px"     # 작은 태그·배지
  r6: "6px"     # xs 버튼, 큰 태그, 작은 리스트 항목
  r7: "7px"     # 체크박스(m)
  r8: "8px"     # s·m 버튼, 입력창, 툴팁, 탭 버튼
  r10: "10px"
  r12: "12px"   # l 버튼, xl 입력창, 토스트, 배너
  r14: "14px"
  r16: "16px"   # xl 버튼
  r20: "20px"   # 모달
  r32: "32px"
  full: "9999px" # floating 버튼

spacing:
  s2: "2px"     # 버튼 안 아이콘-글자
  s3: "3px"
  s4: "4px"
  s6: "6px"     # 리스트 좌우, 토스트·배너 요소 사이
  s8: "8px"
  s10: "10px"
  s12: "12px"   # 배너·입력창 좌우, 모달 머리-본문
  s14: "14px"
  s16: "16px"   # 토스트 안, 모달 버튼 영역 위
  s20: "20px"
  s24: "24px"   # 모달 안
  s28: "28px"
  s32: "32px"
  s36: "36px"
  s40: "40px"
  s44: "44px"
  s48: "48px"

size:
  button-xs: "20px"
  button-s: "24px"
  button-m: "36px"
  button-l: "44px"
  button-xl: "54px"
  input-xs: "28px"
  input-m: "36px"
  input-l: "44px"
  input-xl: "54px"
  tab-list-l: "53px"
  tab-list-m: "45px"
  tab-list-s: "33px"
  icon-in-control: "20px"
  checkbox-m: "18px"
  checkbox-s: "14px"

layout:
  # 패널·모달 너비 후보 (dimension 큰 값). 그리드·중단점은 공개 코드에 없음
  panel-widths: ["200px", "240px", "320px", "420px", "540px", "640px", "720px", "800px", "900px"]
  modal-min-width: "360px"
  toast-width: "288px"
  tooltip-max-width: "260px"
  banner-min-width: "200px"

elevation:
  # 아래 그림자 + 1px 테두리 그림자(#0000000d, blur 2px) + 안쪽 흰 하이라이트(#ffffff1f, blur 2px)
  level-1: "0 1px 2px #00000014"
  level-2: "0 2px 6px #00000014"
  level-3: "0 4px 12px #00000014"
  level-4: "0 4px 24px #00000014"
  level-5: "0 6px 40px #00000014"
  level-6: "0 12px 60px #00000014"

opacity:
  disabled: 0.4

backdrop-blur:
  small: "6px"
  large: "60px"

focus:
  button: "outline 3px {colors.focus-ring}"          # primary blue 버튼 :focus-visible
  input: "0 0 0 3px {colors.focus-ring} + inset 1px {colors.primary}"
  input-error: "0 0 0 3px {colors.error-ring} + inset 1px {colors.warning}"

motion:
  easing: "cubic-bezier(0.3, 0, 0, 1)"   # 이징은 하나뿐
  fast: "150ms"      # 호버 색, 스위치, 탭 표시줄
  default: "300ms"   # 모달·토스트 등장
  slow: "450ms"

# ─────────────────────────────────────────────
# 4. 컴포넌트 토큰
# ─────────────────────────────────────────────
components:
  button-xs: { height: "{size.button-xs}", paddingX: "{spacing.s2}", rounded: "{rounded.r6}", typography: "{typography.text-small}" }
  button-s:  { height: "{size.button-s}",  paddingX: "{spacing.s4}", rounded: "{rounded.r8}", typography: "{typography.text-small}" }
  button-m:  { height: "{size.button-m}",  paddingX: "{spacing.s10}", rounded: "{rounded.r8}", typography: "{typography.text-medium}" }
  button-l:  { height: "{size.button-l}",  paddingX: "{spacing.s12}", rounded: "{rounded.r12}", typography: "{typography.text-large}" }
  button-xl: { height: "{size.button-xl}", paddingX: "{spacing.s20}", rounded: "{rounded.r16}", fontSize: "18px" }
  button-primary:          { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}" }
  button-primary-hover:    { backgroundColor: "fill.action-hovered (빌드 때 자동 계산)", transition: "{motion.fast}" }
  button-primary-focus:    { outline: "{focus.button}" }
  button-primary-disabled: { opacity: "{opacity.disabled}" }
  button-primary-loading:  { content: "Spinner, 너비 유지", interaction: "disabled" }
  button-secondary:        { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}" }
  button-tertiary:         { backgroundColor: transparent, hoverBackgroundColor: "{colors.fill-neutral-light}" }
  button-floating:         { backgroundColor: "{colors.floating-surface}", rounded: "{rounded.full}", shadow: "{elevation.level-3}" }

  text-field-xs: { height: "{size.input-xs}", rounded: "{rounded.r8}", typography: "{typography.text-medium}" }
  text-field-m:  { height: "{size.input-m}",  rounded: "{rounded.r8}", typography: "{typography.text-medium}" }
  text-field-l:  { height: "{size.input-l}",  rounded: "{rounded.r8}", typography: "{typography.text-xlarge}" }
  text-field-xl: { height: "{size.input-xl}", rounded: "{rounded.r12}", fontSize: "18px" }
  text-field:
    paddingX: "{spacing.s12}"
    backgroundColor: "{colors.fill-input}"
    textColor: "{colors.text-primary}"
    placeholderColor: "{colors.text-secondary}"
    innerBorder: "inset 0 0 0 1px {colors.border-heavy}"
  text-field-secondary: { backgroundColor: "{colors.fill-neutral-light}" }
  text-field-focus:     { shadow: "{focus.input}" }
  text-field-error:     { shadow: "{focus.input-error}" }
  text-field-disabled:  { opacity: "{opacity.disabled}" }

  checkbox:          { size: "{size.checkbox-m}", rounded: "{rounded.r7}", border: "inset 2px {colors.border-heavy}" }
  checkbox-checked:  { backgroundColor: "{colors.green}" }
  switch-m:          { width: "30px", height: "20px", thumbPadding: "{spacing.s3}" }
  switch-l:          { width: "36px", height: "24px", thumbPadding: "{spacing.s3}" }
  switch-off:        { backgroundColor: "{colors.fill-neutral-heavy}" }
  switch-on:         { backgroundColor: "{colors.green}" }

  tab-indicator:     { height: "3px", backgroundColor: "{colors.primary}", rounded: "1.5px" }
  tab-selected:      { textColor: "{colors.primary}" }
  tab-unselected:    { textColor: "{colors.text-muted}" }
  tag-badge-s:       { paddingX: "{spacing.s2}", rounded: "{rounded.r4}" }
  tag-badge-l:       { paddingX: "{spacing.s4}", rounded: "{rounded.r6}" }

  list-item-hover:            { backgroundColor: "{colors.fill-neutral-light}" }
  list-item-selected:         { backgroundColor: "{colors.primary-soft}", textColor: "{colors.primary}" }
  list-item-selected-pressed: { backgroundColor: "{colors.primary-pressed-soft}" }

  banner:  { padding: "{spacing.s12}", rounded: "{rounded.r12}", gap: "{spacing.s6}", minWidth: "{layout.banner-min-width}" }
  toast:   { width: "{layout.toast-width}", backgroundColor: "{colors.fill-toast}", rounded: "{rounded.r12}", padding: "{spacing.s16}", shadow: "{elevation.level-3}" }
  tooltip: { maxWidth: "{layout.tooltip-max-width}", padding: "5px 8px", rounded: "{rounded.r8}", backgroundColor: "{colors.surface}", shadow: "{elevation.level-3}" }
  modal:   { backgroundColor: "{colors.surface}", rounded: "{rounded.r20}", padding: "{spacing.s24}", minWidth: "{layout.modal-min-width}", shadow: "{elevation.level-4}", dim: "{colors.dim}" }
---

# 채널톡 디자인 시스템

> 근거: 공개 문서 기반 (오픈소스 저장소 channel-io/bezier-react의 토큰·컴포넌트 코드, @channel.io/bezier-react 3.6.6 / bezier-tokens 0.6.0)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 다르면 YAML이 우선이다.

## 1. 개요와 원칙
- 서비스 성격: 기업용 고객 상담·CRM(고객 관계 관리) 도구. 상담원이 하루 종일 켜 두는 데스크톱 웹 앱이 중심이고, 고객 쪽에는 웹사이트에 붙는 채팅 위젯이 있다.
- 디자인 인상 한 줄: 흰 면과 반투명 검정 회색 위에 보라빛 파랑(#6157ea) 하나로 행동을 표시하는, 촘촘하고 작은 업무용 화면.
- 공식 시스템 이름: Bezier (저장소 라이선스 Apache-2.0)
- 토큰 세대: 코드에 `global/semantic`(이전), `beta`, `alpha` 세 세트가 있다. 현재 컴포넌트 스타일은 `beta` 토큰(`--color-fill-*`, `--color-text-*`)을 쓴다. 이 문서는 beta 기준으로 적는다.
- 디자인 원칙(공개 저장소에 원칙 문서는 없어 코드 구조에서 정리했다):
  1. 회색 글자와 면은 고정 HEX가 아니라 검정(다크에선 흰색)의 투명도로 만든다. 배경이 바뀌어도 대비가 같은 비율로 유지된다. (관찰에서 정리)
  2. 행동색은 #6157ea 하나이고, 그 색의 10%·20%·30% 투명 면으로 선택·눌림·포커스를 표시한다. (관찰에서 정리)
  3. 색 이름 11가지를 태그·배지·차트에 고루 써서 상담 태그를 색으로 구분한다. (관찰에서 정리)
  4. 호버 색은 손으로 정하지 않고 빌드 단계에서 원래 색으로부터 자동 계산한다(`-hovered` 접미사). (관찰에서 정리)
  5. 기본 UI 글자는 14px로 작게, 간격은 2·4px 단위로 촘촘하게 둔다. (관찰에서 정리)
- 톤: 하루 종일 보는 업무 화면이라 차분하고 촘촘하게, 색은 행동과 태그 구분에만.

### 특장점
- 회색을 투명도로 정의한다 — 본문 #000000d9, 보조 #00000099, 흐림 #00000066, 다크는 #ffffffcc / #ffffff99 / #ffffff66이라 라이트·다크가 같은 단계 구조를 그대로 쓴다.
- 호버 색을 자동 생성한다 — bezier-tokens 빌드 스크립트(format.ts)가 원래 색에서 `-hovered` 색을 계산해, 컴포넌트마다 호버 값을 따로 고르지 않는다.
- 태그 색 체계가 넓다 — blue부터 navy까지 11색마다 글자색, 10% 연한 면, 진한 면 세 가지를 두고, 차트 기본 10색(#7c72fd 등)도 따로 있다. 같은 모음의 다른 회사 파일에서 보기 드문 크기다.
- 테두리를 1px box-shadow로 그린다 — border.default 등으로 선을 그려 테두리가 생겨도 레이아웃 크기가 변하지 않고, 그림자는 아래 그림자 + 1px 테두리 그림자 + 안쪽 흰 하이라이트 세 겹이다.
- 패키지로 배포된다 — @channel.io/bezier-react 3.6.6, bezier-tokens 0.6.0, bezier-icons가 오픈소스로 공개되어 있고, 다크 표면은 위로 갈수록 밝아진다(#1a1a1c → #313135).

### 배울 점
- 라이트·다크를 함께 지원해야 할 때 Bezier처럼 회색 글자·면을 검정/흰색 투명도 단계로 정의해 한 단계 이름을 두 테마에 같이 쓴다.
- 호버 색 관리가 번거로울 때 빌드 단계에서 원래 색으로부터 호버 색을 자동 계산한다.
- 선택 상태를 표시할 때 행동색 10% 면 + 행동색 글자, 눌림은 20% 면처럼 같은 색의 투명도 단계로 만든다.

### 이 문서를 읽는 AI 에이전트에게
- 색·크기·간격은 YAML 토큰 이름으로만 쓴다. 회색을 새 불투명 HEX로 만들지 않고 `text-primary`·`text-secondary`·`text-muted` 세 단계에서 고른다.
- 화면 코드에서는 primitive(`black-alpha-60`, `blue`)보다 semantic(`text-secondary`, `primary`)을 먼저 쓴다. 다크 테마는 같은 이름의 `-dark` 값으로 바뀐다.
- 파랑 #6157ea는 주요 버튼, 선택 표시, 링크에만 쓴다. 태그·배지는 11색 이름에서 고른다.
- 호버 색은 직접 정하지 않는다. 구현할 때는 `--color-*-hovered` 변수를 쓴다.
- 판단이 어려우면 더 작은 쪽(14px, m 36px)과 더 적은 색을 고른다. 이 시스템은 촘촘한 업무 화면이 기준이다.

---

## 2. 색상
라이트 값을 먼저 적고, 다크 값은 `### 다크 모드`에 같은 토큰 이름으로 모았다.

### 색 체계
Bezier beta 색은 **global(색 이름 × 진하기) → semantic(역할)** 두 층이다. 단계 숫자(blue-500 같은) 대신 `normal / light / lighter / heavy / heavier / heaviest` 진하기 이름을 쓴다.

| 층 | 예시 이름 | 쓰는 곳 |
|---|---|---|
| Global(primitive) | 검정·흰색 투명도, 11가지 색 이름 | 토큰 정의에만. 화면 코드에서 직접 쓰지 않는다 |
| Semantic | `fill.action`, `text.neutral.light`, `border.neutral`, `surface.higher` | 컴포넌트와 화면 |
| 상태 파생 | `-hovered` 접미사 | 빌드 때 자동 생성(format.ts). 손으로 고르지 않는다 |

- 진하기 이름 규칙: `fill`(면)·`text`(글자)·`icon`·`border`·`surface`(층) 다섯 갈래 아래에 진하기를 붙인다. 면은 lighter → heaviest로 갈수록 진해진다.
- 라이트의 회색은 검정 투명도, 다크의 회색은 흰색 투명도라 같은 이름이 두 테마에서 같은 상대 대비를 낸다.

### 역할별 색
- 행동(blue, `fill.action`): 주요 버튼 면, 탭 선택 표시줄, 선택 글자·링크.
  - 선택 면 `fill.accent.blue`(10%), 선택 상태 눌림 `fill.accent.blue.heavy`(20%), 포커스 링 `state.action.light`(30%), 호버는 자동 계산 `-hovered`.
- 회색 글자: 가장 진함 `text.neutral.heaviest` → 본문 `text.neutral` → 보조 `text.neutral.light` → 흐림 `text.neutral.lighter` 네 단계.
- 회색 면: 입력창 `fill.grey`, 토스트 `fill.grey.heavy`, 호버·보조 버튼 `fill.neutral.light`, 꺼진 스위치 `fill.neutral.heavy`.
- 층: `surface.low` < `surface` < `surface.high`(툴팁) < `surface.higher`(모달) < `surface.highest`. 라이트에선 모두 흰색이고 다크에선 위로 갈수록 밝아진다.
- 상태: 성공 green, 주의 orange, 위험 red(`critical`), 정보 cobalt(`highlight`). 각 상태는 normal(불투명)·light(20% 내외)·lighter(10% 내외) 면을 함께 둔다.
- 상태 조합 규칙: 배너·태그는 "색의 연한 면 + 같은 색 글자", 입력 오류는 "안쪽 1px 주황 선 + 바깥 3px 연한 주황 링". 글자만 색을 바꾸고 면은 회색으로 두는 조합은 리스트 항목의 위험·성공 글자에서만 쓴다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| fill.accent.blue.heavier (= fill.action) | #6157ea | 주요 버튼, 탭 선택 표시줄 |
| text.accent.blue (= text.action) | #6157ea | 선택된 탭·리스트 글자, 링크 |
| fill.accent.blue.heavy | #6157ea33 | 선택된 리스트 항목 눌림, 파란 태그 |
| fill.accent.blue | #6157ea1a | 선택 항목 배경, 보조 버튼 배경 |
| state.action.light | #6157ea4d | 포커스 링(3px) |
| text.absolute.white | #ffffff | 진한 버튼 위 글자 |

### 바탕·선
글자와 면 대부분은 검정의 투명도다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| fill.neutral.heaviest | #000000d9 | 검정 버튼 |
| fill.neutral.heavier | #00000066 | 회색 배지 |
| fill.neutral.heavy | #00000026 | 꺼진 스위치 |
| fill.neutral (normal) | #00000014 | 약한 면 |
| fill.neutral.light | #0000000d | 보조 버튼, 입력창 호버, 탭 아래선 |
| fill.neutral.lighter | #00000008 | 아주 약한 면 |
| fill.grey (normal) | #fbfbfb | 입력창 배경 |
| fill.grey.heavy | #f7f7f8 | 토스트·떠 있는 배너 배경 |
| fill.grey.heavier | #efeff0 | 진한 회색 면 |
| surface (normal) | #ffffff | 기본 표면 |
| surface.low | #fbfbfb | 바탕보다 한 단계 낮은 면 |
| surface.high / higher / highest | #ffffff | 툴팁 / 모달 / 가장 위 레이어 |
| surface.glass (normal) | #ffffffe6 | 반투명 유리 면 |
| border.neutral (normal) | #00000014 | 기본 테두리 |
| border.neutral.heavy | #00000026 | 진한 테두리 |
| dim.absolute.black | #00000066 | 모달 뒤 딤(라이트·다크 같음) |
| floating 버튼 흰 면 | #fdfdff | floating 버튼 흰 면 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| text.neutral.heaviest | #000000 | 모달 제목 등 가장 진한 글자 |
| text.neutral (normal) | #000000d9 | 본문 |
| text.neutral.light | #00000099 | 보조 글자, 플레이스홀더 |
| text.neutral.lighter | #00000066 | 비활성 탭, 흐린 아이콘, icon.neutral 기본 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success (fill/text.success) | #20ab55 | 완료, 켜진 스위치·체크박스(green heavier) |
| warning (fill/text.warning) | #e67f2b | 주의. 입력 오류 테두리도 이 주황을 쓴다 |
| error (fill/text.critical) | #e1535d | 삭제, 위험 |
| info (fill/text.highlight) | #3292e3 | 정보 강조(cobalt) |

- 각 상태 색은 normal(불투명), light(20% 내외), lighter(10% 내외) 세 단계 면을 함께 둔다.

### 다크 모드
다크 테마는 표면이 위로 올라갈수록 밝아진다(#1a1a1c → #313135).

| 토큰 | HEX | 쓰임 |
|---|---|---|
| fill.action / text.action | #8082ff | 주요 버튼, 선택 글자 |
| fill.accent.blue.heavy | #6b6eff4d | 눌림, 파란 태그 |
| fill.accent.blue | #6b6eff2e | 선택 항목 배경 |
| state.action.light | #6b6eff73 | 포커스 링 |
| text.neutral.heaviest | #ffffff | 가장 진한 글자 |
| text.neutral | #ffffffcc | 본문 |
| text.neutral.light | #ffffff99 | 보조 글자 |
| text.neutral.lighter | #ffffff66 | 흐린 글자 |
| fill.neutral.heaviest | #ffffff | 검정 버튼 자리(밝은 면) |
| fill.neutral.heavier | #ffffff66 | 회색 배지 |
| fill.neutral.heavy | #ffffff33 | 꺼진 스위치 |
| fill.neutral | #ffffff1f | 약한 면 |
| fill.neutral.light | #ffffff14 | 보조 버튼 |
| fill.neutral.lighter | #ffffff0d | 아주 약한 면 |
| fill.grey | #242426 | 입력창 배경 |
| fill.grey.heavy | #29292d | 토스트 배경 |
| fill.grey.heavier | #313135 | 진한 회색 면 |
| surface | #1d1d20 | 기본 표면 |
| surface.low | #1a1a1c | 낮은 면 |
| surface.high | #242426 | 툴팁 |
| surface.higher | #29292d | 모달 |
| surface.highest | #313135 | 가장 위 레이어 |
| surface.glass | #29292de6 | 반투명 유리 면 |
| border.neutral | #ffffff1f | 기본 테두리 |
| border.neutral.heavy | #ffffff33 | 진한 테두리 |
| success | #51c371 | 완료 |
| warning | #f79847 | 주의 |
| error | #f36868 | 위험 |
| info | #5cadef | 정보 |

### 보조 색(태그·배지·차트)
| 토큰 | HEX | 쓰임 |
|---|---|---|
| blue | #6157ea | 글자·아이콘·진한 면, 연한 면 #6157ea1a |
| cobalt | #3292e3 | 글자·아이콘·진한 면, 연한 면 #3292e31a |
| teal | #09b2ac | 글자·아이콘·진한 면, 연한 면 #09b2ac1a |
| green | #20ab55 | 글자·아이콘·진한 면, 연한 면 #20ab551a |
| olive | #b7c427 | 글자(아이콘·진한 면은 #a9b110, 연한 면 #a9b1101a) |
| yellow | #edae0d | 글자·아이콘·진한 면, 연한 면 #edae0d1a |
| orange | #e67f2b | 글자·아이콘·진한 면, 연한 면 #e67f2b1a |
| red | #e1535d | 글자·아이콘·진한 면, 연한 면 #e1535d1a |
| pink | #d64bb5 | 글자·아이콘·진한 면, 연한 면 #d64bb51a |
| purple | #8e57e7 | 글자·아이콘·진한 면, 연한 면 #8e57e71a |
| navy | #424fab | 글자·아이콘·진한 면, 연한 면 #424fab1a |

차트 기본 10색: #7c72fd, #81dfdd, #fc9783, #b1596a, #fe71ba, #c971ec, #4a75e3, #80b6fd, #fb90f1, #b4d6e5

### 화면 모드
- 라이트·다크 두 테마가 같은 토큰 이름을 공유한다. 구현은 `ThemeProvider`(및 `BetaTokenProvider`)가 테마별 CSS 변수를 바꾸는 방식이다.
- 다크에서 바뀌는 것: 회색 재료(검정 투명도 → 흰색 투명도), 행동색(#6157ea → #8082ff), 층 표면(모두 흰색 → #1a1a1c~#313135 계단), 상태 색(한 단계 밝게).
- 다크에서 바뀌지 않는 것: 딤 #00000066, 모서리·간격·그림자 구조.
- 고대비 모드: 공개 코드에 없음(확인 필요).

### 색 사용 규칙
- #6157ea(fill.action)는 주요 버튼, 탭 선택 표시줄, 선택된 글자·링크에만 쓴다.
- 선택 항목은 #6157ea1a 면 + #6157ea 글자, 선택 상태에서 누르면 #6157ea33, 포커스 링은 3px #6157ea4d.
- 회색 글자는 단계 토큰(#000000d9 / #00000099 / #00000066)으로만 쓰고, 고정 회색 HEX를 새로 만들지 않는다.
- 입력창 오류는 빨강이 아니라 주황(state.warning #e67f2b)이다. 바깥 3px 연한 주황 + 안쪽 1px 주황.
- 빨강(#e1535d)은 삭제·위험에, 초록(#20ab55)은 완료·켜진 스위치·체크된 체크박스에 쓴다.
- 태그·배지는 11색 중 하나를 고르고, 배경은 그 색의 20% 면을 쓴다.
- 차트는 기본 10색 순서를 쓴다.

### Don't
- 회색 글자·면을 불투명 회색 HEX로 새로 만들지 않는다. 다크 테마에서 대비가 깨진다.
- 입력 오류를 빨강(#e1535d)으로 칠하지 않는다. 오류 링은 주황 #e67f2b다.
- `-hovered` 색을 손으로 정하지 않는다.
- 흐린 글자(#00000066)를 읽어야 하는 본문에 쓰지 않는다. 흰 바탕 대비 2.85:1이다.
- 태그 색을 11색 밖에서 고르지 않는다.

---

## 3. 타이포그래피
- 글꼴: Inter(라틴) + Noto Sans KR(한글). Inter는 채널 자체 CDN 또는 Google Fonts에서 불러오도록 README가 안내한다. 둘 다 SIL OFL.
- 대체 글꼴(한국어): `Inter, NotoSansKR, "Noto Sans KR", NotoSansJP, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Roboto, system-ui, sans-serif`. 일본어 화면은 JP를 KR 앞에 둔다.
- 코드: `ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace`
- 굵기 토큰은 400·500·600·700이 있으나, 역할 토큰에는 regular 400과 bold 700만 연결되어 있다.
- 자간: 15–17px은 -0.1px(tight), 22px 이상 제목은 -0.4px(tighter)까지 좁힌다.

### 위계와 사용처
크기 단위는 px(1pt=1px로 적음), 행간도 px 고정값이다. 데스크톱 웹 기준 한 벌이며 모바일 값은 따로 없다. text 단계는 400과 700 두 굵기를 모두 쓴다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| display large | 36 | 700 | 44px | 큰 숫자, 랜딩 제목 |
| display medium | 30 | 700 | 36px | 큰 제목 |
| heading xlarge | 24 | 700 | 32px | 페이지 제목 |
| heading large | 22 | 700 | 28px | 섹션 제목 |
| heading medium | 18 | 700 | 24px | 카드 제목 |
| heading small | 17 | 700 | 24px | 소제목 |
| heading xsmall | 16 | 700 | 24px | 소제목 |
| heading 2xsmall | 15 | 700 | 20px | 작은 제목 |
| text 2xlarge | 17 | 400 | 24px | 큰 본문(700도 있음) |
| text xlarge | 16 | 400 | 24px | l 입력창(700도 있음) |
| text large | 15 | 400 | 20px | 본문(넓은 영역, 700도 있음) |
| text medium | 14 | 400 | 18px | 기본 본문, 입력창, 버튼(700도 있음) |
| text small | 13 | 400 | 18px | 보조 설명(700도 있음) |
| text xsmall | 12 | 400 | 16px | 캡션(700도 있음) |
| text 2xsmall | 11 | 400 | 16px | 아주 작은 라벨(700도 있음) |
| code medium | 14 | 400 | 18px | 코드 |
| code small | 13 | 400 | 18px | 코드 |

### 규칙
- 기본 본문·입력창·버튼은 text medium(14px/18px)이다.
- 제목(heading, display)은 모두 700, 본문(text)은 400을 기본으로 하고 강조만 700을 쓴다. 500·600은 역할 토큰에 연결되어 있지 않다.
- 15–17px은 자간 -0.1px, 22px 이상 제목은 -0.4px까지 좁힌다.
- 입력창 글자는 크기에 맞춘다. xs·m 14px, l 16px, xl 18px.
- 버튼 글자는 크기에 따라 바뀐다. xs·s 13px, m 14px, l 15px, xl 18px(Button.tsx).
- 행간은 배수가 아니라 px 고정값(16·18·20·24px 등)이라 글자 크기가 바뀌면 행간 토큰도 함께 바꾼다.
- 일본어 화면에서는 글꼴 목록에서 Noto Sans JP를 KR 앞에 둔다.

### Don't
- 굵기 500·600을 역할 글자에 쓰지 않는다. 역할 토큰은 400과 700뿐이다.
- 11px(text 2xsmall)보다 작은 글자를 만들지 않는다.
- 제목에 400을 쓰지 않는다. heading·display는 모두 700이다.
- 행간을 크기와 따로 임의 px로 정하지 않는다. 표의 짝(14/18, 15/20, 17/24)을 그대로 쓴다.

---

## 4. 레이아웃·간격
- 간격 단계(pt): 2, 3, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48
- 기준 화면: 데스크톱 웹 앱(상담원 화면). 모바일 기준은 확인 필요.
- 눈금: 2px 단위가 섞인 4px 계열. 토큰 이름이 곧 px 값이다(dimension.6 = 6px).
- 화면 좌우 여백: 확인 필요(컴포넌트 코드에 페이지 여백 정의 없음)

### 그리드와 패널 폭
| 구분 | 값 | 비고 |
|---|---|---|
| 그리드 컬럼·중단점 | 확인 필요 | 공개 코드에 정의 없음 |
| 패널·모달 너비 후보 | 200, 240, 320, 420, 540, 640, 720, 800, 900px | dimension 큰 값 토큰 |
| 모달 최소 너비 | 360px | Modal |
| 토스트 너비 | 288px | Toast |
| 툴팁 최대 너비 | 260px | Tooltip |
| 배너 최소 너비 | 200px | Banner |

### 컴포넌트 안팎 리듬
화면 단위 세로 리듬(헤더→제목, 구획 사이)은 공개 코드에 없어 확인 필요다. 컴포넌트 단위 값은 아래와 같다.

| 구간 | 값 | 출처 컴포넌트 |
|---|---|---|
| 버튼 아이콘 ↔ 글자 | 2px | Button |
| 버튼 글자 자체 좌우 | 4px (xs·s 3px) | Button |
| 리스트 항목 좌우 | 6px | ListItem |
| 배너 안 여백 / 요소 사이 | 12px / 6px | Banner |
| 토스트 안 여백 / 토스트 사이 | 16px / 6px | Toast |
| 모달 안 여백 | 24px | Modal |
| 모달 머리 → 본문 | 12px | Modal |
| 본문 → 모달 버튼 영역 | 16px | Modal |
| 모달 닫기 버튼 ↔ 모서리 | 18px | Modal |
| 입력창 좌우 | 12px | TextField |

### 간격 적용 규칙
- 컴포넌트 안 여백은 6, 12, 16, 24px에서 고른다. 리스트 좌우 6px, 배너 12px, 토스트 16px, 모달 24px. 면이 클수록 여백도 한 단계 커진다.
- 같은 종류 요소를 쌓을 때는 6px(토스트 사이, 배너 요소 사이).
- 모달은 머리와 본문 사이 12px, 버튼 영역 위 16px.
- 한 줄에 놓이는 입력창과 버튼은 같은 크기 이름(m 36px끼리, l 44px끼리)을 쓴다.

### Don't
- 간격 단계 밖의 값(5px, 18px 등)을 새로 만들지 않는다. 예외는 코드에 있는 모달 닫기 버튼 18px뿐이다.
- 모달 안 여백을 버튼 여백(10~12px) 수준으로 줄이지 않는다. 모달은 24px다.
- 쌓이는 토스트 사이를 6px보다 넓게 벌리지 않는다.
- 같은 줄의 입력창(m 36px)과 버튼(l 44px)처럼 높이가 다른 크기를 섞지 않는다.

---

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-4 | 4px | 작은 태그·배지 |
| radius-6 | 6px | xs 버튼, 큰 태그, 작은 리스트 항목 |
| radius-8 | 8px | s·m 버튼, 입력창, 툴팁, 탭 버튼 |
| radius-12 | 12px | l 버튼, xl 입력창, 토스트, 배너, 스위치 |
| radius-16 | 16px | xl 버튼 |
| radius-20 | 20px | 모달 |
| radius-32 | 32px | 큰 둥근 면 |
| radius-full | 9999px | floating 버튼(원) |

- 기타 모서리 토큰: 2, 3, 7, 10, 14px(세부 조정용). 체크박스는 7px(m), 4.6px(s).
- 규칙: 요소가 커질수록 모서리도 커진다(버튼 xs 6 → m 8 → l 12 → xl 16px, 모달 20px).

### 고도(그림자·층)
- 층은 면 색과 그림자를 함께 쓴다. 라이트에선 표면이 모두 흰색이라 그림자로, 다크에선 표면 밝기 계단(#1a1a1c → #313135)으로 층을 나눈다.
- 그림자는 세 겹이다. 아래쪽 그림자 하나 + 주변 1px 테두리 그림자(#0000000d, 블러 2px) + 안쪽 흰 하이라이트(#ffffff1f, 블러 2px).

| 단계 | 아래 그림자 | 쓰임 |
|---|---|---|
| elevation-1 | 0 1px 2px #00000014 | 살짝 뜬 요소 |
| elevation-2 | 0 2px 6px #00000014 | 스위치 손잡이, 떠 있는 배너 |
| elevation-3 | 0 4px 12px #00000014 | 토스트, 툴팁 |
| elevation-4 | 0 4px 24px #00000014 | 모달 |
| elevation-5 | 0 6px 40px #00000014 | 큰 팝오버 |
| elevation-6 | 0 12px 60px #00000014 | 가장 위 레이어 |

- 테두리는 `border`가 아닌 1px box-shadow로 그린다(border.default, border.top 등). 레이아웃 크기가 변하지 않는다.
- 비활성 요소는 투명도 40%로 낮춘다(opacity.disabled).
- 배경 흐림(backdrop blur): small 6px, large 60px. 반투명 유리 면(surface.glass)과 함께 쓴다.

### 모션
이징은 하나만 쓴다: cubic-bezier(0.3, 0, 0, 1).

| 토큰 | 길이 | 쓰임 |
|---|---|---|
| transition.fast | 150ms | 호버 색, 스위치, 탭 표시줄 |
| transition.default | 300ms | 모달·토스트 등장 |
| transition.slow | 450ms | 큰 전환 |

- 토스트는 좌우에서 밀려 들어오고 나간다(300ms).
- 움직임 줄이기(prefers-reduced-motion) 대응: 확인 필요.

### 아이콘·이미지
- 아이콘: 별도 패키지 `@channel.io/bezier-icons`. 버튼·입력창 안에서 20px, 작은 버튼에서 더 작게 쓴다. 색은 icon.neutral(#00000066)이 기본.
- 일러스트·사진: 확인 필요
- 아바타: 둥근 사각형(smooth corner) 처리 컴포넌트(`SmoothCornersBox`)가 따로 있다. 세부 수치 확인 필요.

### Don't
- 테두리를 CSS `border`로 그려 요소 크기를 바꾸지 않는다. 1px box-shadow를 쓴다.
- 기본 카드·리스트에 elevation을 넣지 않는다. 그림자는 토스트·툴팁·모달·떠 있는 배너처럼 뜬 요소에만.
- 모달 모서리를 버튼과 같은 8px로 줄이지 않는다. 모달은 20px다.
- cubic-bezier(0.3, 0, 0, 1) 외 이징을 섞지 않는다.
- 비활성을 회색 HEX로 다시 칠하지 않는다. 투명도 40%로 낮춘다.

---

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 이름은 `@channel.io/bezier-react`의 컴포넌트 이름이다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼 (Button)
**크기**

| 크기 | 높이 | 최소 너비 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|---|
| xs | 20px | 20px | 2px | 6px | 13px |
| s | 24px | 24px | 4px | 8px | 13px |
| m | 36px | 36px | 10px | 8px | 14px |
| l | 44px | 44px | 12px | 12px | 15px |
| xl | 54px | 54px | 20px | 16px | 18px |

**종류**

| 종류 | 모양 | 쓰는 곳 |
|---|---|---|
| primary | 진한 색 면 + 흰 글자 | 화면의 주요 행동 |
| secondary | 10% 연한 색 면 + 색 글자 | 주요 행동 옆 보조 행동 |
| tertiary | 배경 없음, 호버 때만 면 | 툴바·목록 안 가벼운 행동 |
| floating | 완전한 원(9999px) + 그림자, 흰 면 #fdfdff 또는 색 면 | 화면 위에 떠 있는 행동 |
| floating-alt | floating과 같되 모서리 8px | 떠 있는 사각 행동 |

- 색: blue, red, green, cobalt, orange, pink, purple과 monochrome 3종.
- 아이콘과 글자 사이 2px. 글자 자체 좌우 4px(xs·s는 3px). 앞뒤 아이콘은 `@channel.io/bezier-icons` 아이콘을 넣는다.

**상태**
- 기본 / 호버(자동 계산된 `-hovered` 색, 전환 150ms) / 포커스(파란 primary 버튼에 3px 반투명 파랑 외곽선 #6157ea4d, `:focus-visible`) / 비활성(투명도 40%).
- 로딩: `loading`을 켜면 버튼이 비활성이 되고 가운데 Spinner(xs·s 버튼은 xs, m·l·xl은 s 크기)가 나온다. 글자는 `visibility`로 숨겨 너비가 그대로 유지된다.

**규칙**
- 위험 행동에는 blue 대신 red 버튼을 쓴다.
- 입력창 옆 버튼은 같은 크기 이름을 쓴다(m 36px 입력창 ↔ m 36px 버튼).
- 아이콘만 있는 버튼에는 `aria-label`을 단다(구현 권장).
- 그 밖의 배치·개수 지침은 공개 저장소에 없다(확인 필요).

### 6.2 입력창 (TextField · TextArea)
| 크기 | 높이 | 글자 | 모서리 |
|---|---|---|---|
| xs | 28px | 14px | 8px |
| m | 36px | 14px | 8px |
| l | 44px | 16px | 8px |
| xl | 54px | 18px | 12px |

| 종류 | 모양 | 쓰는 곳 |
|---|---|---|
| primary(기본) | 배경 #fbfbfb + 안쪽 1px #00000026 선 + 아래 1px 2px 그림자 | 일반 폼 |
| secondary | 배경 #0000000d | 면 위에 얹는 입력 |

- 좌우 여백 12px, 플레이스홀더 #00000099, 앞뒤 아이콘 20px.
- 상태: 호버·포커스는 안쪽 선이 #6157ea로 바뀌고, 포커스 때 바깥 3px #6157ea4d 링이 붙는다(`--state-input-active`). 오류는 안쪽 선 #e67f2b + 바깥 3px #e67f2b4d(`--state-input-error`). 비활성은 투명도 40%.
- 지우기 버튼에는 `aria-label="Clear input"`이 달려 있다(공식 코드).
- 규칙: 라벨·도움말은 `FormControl`·`FormLabel`·`FormHelperText`로 묶는다. 오류 문구 꼴은 확인 필요.

### 6.3 선택 컨트롤 (Checkbox · Switch · RadioGroup · SegmentedControl)
- Checkbox: 18px(m)·14px(s), 모서리 7px / 4.6px, 안쪽 2px `border.neutral.heavy` 선, 바탕 `fill.grey.light`. 체크·중간 상태는 초록 면(`fill.accent.green.heavier`, #20ab55). 오류는 `--state-input-error`, 키보드 포커스는 `--state-input-active` 링. 비활성은 `fill.neutral.heavy` 면.
- Switch: 30×20px(m), 36×24px(l). 꺼짐 #00000026, 켜짐 초록 #20ab55. 손잡이 흰색, 안쪽 여백 3px, elevation-2, 전환 150ms.
- SegmentedControl: 높이 24px(안 여백 1px, 모서리 6px), 28px(안 여백 2px, 모서리 8px) 등 크기별로 정해져 있다.
- RadioGroup: 세부 수치 확인 필요.
- 규칙: 켜짐·체크의 색은 파랑이 아니라 초록이다. 즉시 반영 설정은 Switch, 제출이 필요한 선택은 Checkbox(구현 권장).

### 6.4 탭 (Tabs)
| 크기 | 탭 목록 높이 | 탭 버튼 높이 | 탭 버튼 모서리 |
|---|---|---|---|
| l | 53px | 44px | 12px |
| m | 45px | 36px | 8px |
| s | 33px | 24px | 8px |

- 목록 아래에 1px 회색 선(#0000000d). 탭 버튼은 호버 때 회색 면.
- 선택 표시: 3px 높이의 파란 막대(#6157ea), 양 끝 둥글게(1.5px). 선택된 탭 글자 #6157ea, 아닌 탭 #00000066. 표시줄 이동은 150ms.
- 넘치는 탭은 "더 보기" 버튼으로 모은다(`aria-label="More actions"`, 공식 코드).

### 6.5 태그·배지 (Tag · Badge · BaseTagBadge · Status)
| 크기 | 좌우 여백 | 모서리 |
|---|---|---|
| s | 2px | 4px |
| l | 4px | 6px |

- 배경은 11색 중 하나의 20% 면, 글자는 같은 색. 회색 배지는 #00000066 면.
- 규칙: 상담 태그 구분은 색 이름으로 하고, 같은 화면에서 같은 뜻에는 같은 색을 쓴다.

### 6.6 리스트 항목 (ListItem · NavItem · OutlineItem)
- 크기별 안 여백 4×6 / 6 / 8×6 / 10×6px, 모서리 6 / 6 / 8 / 12px.
- 상태: 호버 배경 #0000000d. 선택되면 배경 #6157ea1a + 글자 #6157ea, 선택 상태에서 누르면 #6157ea33.
- 위험 항목은 빨강 글자, 성공은 초록 글자를 쓴다. 면은 바꾸지 않는다.
- 카드 컴포넌트: 확인 필요(공개 코드에 Card가 없다).

### 6.7 배너 (Banner)
- 안 여백 12px, 모서리 12px, 최소 너비 200px, 요소 사이 6px. 색별로 10% 연한 면 + 같은 색 글자. 떠 있는 배너는 #f7f7f8 면 + elevation-2.
- 규칙: 화면 안에 머무는 안내에 쓴다. 잠깐 보였다 사라질 결과는 토스트로.

### 6.8 토스트 (Toast)
- 너비 288px, 안 여백 16px, 모서리 12px, 배경 #f7f7f8, 그림자 elevation-3. 토스트 사이 6px.
- 앞 아이콘 색으로 성격을 표시: 성공 초록, 주의 주황, 오류 빨강, 기본 회색.
- 좌우에서 밀려 들어오고 나간다(300ms). `role="status"`로 스크린리더에 알리고, 나가는 중에는 `aria-hidden`이 켜진다(공식 코드).

### 6.9 모달 (Modal · ConfirmModal)
- 모서리 20px, 최소 너비 360px, 안 여백 24px, 머리와 본문 사이 12px, 버튼 영역 위 16px. 표면 #ffffff(surface.higher), 그림자 elevation-4.
- 딤: #00000066. 등장 애니메이션 300ms. 닫기 버튼은 모서리에서 18px 안쪽.
- `aria-modal="true"`가 달린 대화상자 기본 부품(AlphaDialogPrimitive) 위에 만든다(공식 코드). 열 때 포커스 이동·Esc 닫기는 확인 필요.
- 확인이 필요한 작업에는 `ConfirmModal`을 쓴다.

### 6.10 툴팁 (Tooltip)
- 최대 너비 260px, 안 여백 5×8px, 모서리 8px, 표면 #ffffff(surface.high), elevation-3.
- 규칙: 아이콘 버튼 설명처럼 짧은 보조 정보에만. 꼭 알아야 할 정보는 툴팁에 숨기지 않는다(구현 권장).

### 6.11 상단 바·하단 탭 바·바텀시트
- 상단 바(GNB) 반투명 배경은 이전 토큰에 #efeff0cc가 있으나 beta 기준 값은 확인 필요.
- 하단 탭 바: 확인 필요(데스크톱 웹 컴포넌트에 없음).
- 바텀시트: 확인 필요(웹 컴포넌트에 없음).

## 7. 패턴
반복되는 화면 해법을 적는다. 화면 흐름 자체는 공개 코드에 없어, 컴포넌트 조합으로 확인되는 것만 적는다.

| 패턴 | 해법 | 근거 |
|---|---|---|
| 목록 → 상세 | ListItem에서 선택하면 #6157ea1a 면 + #6157ea 글자. 상세 화면 구성은 확인 필요 | ListItem |
| 로딩 | 버튼은 `loading`으로 Spinner + 비활성(너비 유지). 영역 로딩은 `Spinner`·`ProgressBar` 컴포넌트. 스켈레톤은 확인 필요 | Button, Spinner, ProgressBar |
| 입력 오류 | 주황(#e67f2b) 안쪽 선 + 바깥 3px 링. 문구는 `FormHelperText` 자리 | TextField, FormControl |
| 빈 상태 | 확인 필요 | — |
| 짧은 결과 알림 | 토스트(288px, 좌우에서 밀려 들어옴, 6px 간격으로 쌓임) | Toast |
| 화면 안 고정 안내 | 색별 배너(10% 면 + 같은 색 글자) | Banner |
| 확인·위험 작업 | ConfirmModal(20px 모서리, #00000066 딤, 300ms 등장), 위험 버튼은 red | Modal, Button |
| 폼 | 입력창(m 36px)과 버튼(m 36px) 높이를 맞춘다. 결제 흐름은 확인 필요 | TextField, Button |
| 검색 | 확인 필요 | — |

- 예시 문구 블록은 넣지 않는다. 공개 저장소에 말투 규칙이 없어 근거가 없다(9장 참고).

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값). 투명 색은 바탕 위에 겹친 결과로 계산했다.

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #000000d9 | #ffffff | 15.13:1 | 통과 |
| #00000099 | #ffffff | 5.74:1 | 통과 |
| #00000066 | #ffffff | 2.85:1 | 미달 |
| #00000099 | #fbfbfb | 5.68:1 | 통과 |
| #ffffff | #6157ea | 5.17:1 | 통과 |
| #6157ea | #6157ea1a | 4.51:1 | 통과 |
| #e1535d | #ffffff | 3.75:1 | 미달(큰 글자 3:1은 통과) |
| #ffffffcc | #1d1d20 | 11.10:1 | 통과 |
| #ffffff | #8082ff | 3.20:1 | 미달(큰 글자 3:1은 통과) |

- 흐린 글자(#00000066)는 비활성 탭·흐린 아이콘에 쓰인다. 비활성 탭 글자는 대비 기준 예외(비활성 요소)에 해당한다.
- 다크 모드 주요 버튼(#8082ff 위 흰 글자)은 3.20:1로 본문 기준에 못 미친다.
- 빨강 글자(#e1535d)는 3.75:1이라, 위험 문구는 색만이 아니라 아이콘·문구로 함께 알린다(구현 권장).

### 점검 목록
| 항목 | 현재 상태 |
|---|---|
| 키보드 포커스 | 버튼(primary blue)은 `:focus-visible`에 3px #6157ea4d 외곽선, 입력창·체크박스는 `--state-input-active` 링(공식 코드). 다른 버튼 색의 포커스 표시는 확인 필요 |
| 스크린리더 | 토스트 `role="status"`, 모달 `aria-modal="true"`, 입력 지우기 버튼 `aria-label`, 탭 더보기 `aria-label`, 숨김 글자용 `VisuallyHidden` 컴포넌트(공식 코드). 나머지는 확인 필요 |
| 터치 영역 | 버튼 l 44px, xl 54px는 44pt 기준을 충족한다. m 36px, s 24px, xs 20px, 입력창 xs 28px·m 36px은 그보다 작다. 데스크톱 마우스용 화면이라 작게 둔 것으로 보인다 |
| 최소 글자 크기 | 11px(text 2xsmall) |
| 글자 확대 | 행간이 px 고정이라 확대 시 동작은 확인 필요 |
| 대체 텍스트 | 아이콘만 있는 버튼에 `aria-label`(구현 권장) |
| 움직임 줄이기 | 확인 필요 |

## 9. 글쓰기 톤
- 말투: 확인 필요. 공개 저장소에는 UX 라이팅 지침이 없다.
- 버튼 문구 꼴: 확인 필요
- 숫자·단위 표기: 확인 필요

## 10. Do & Don't
### Do
- 본문은 #000000d9, 보조는 #00000099, 흐림은 #00000066 투명도 토큰을 쓴다.
- 주요 버튼은 #6157ea 면 + 흰 글자, m 크기는 높이 36px·모서리 8px, l은 44px·12px로 만든다.
- 선택된 리스트 항목은 #6157ea1a 면 + #6157ea 글자로 표시한다.
- 포커스에는 바깥 3px #6157ea4d 링을 붙인다.
- 입력 오류는 주황 #e67f2b 안쪽 선 + 3px #e67f2b4d 링으로 표시한다.
- 테두리는 1px box-shadow로 그린다.
- 비활성은 투명도 40%로 낮춘다.
- 모션 이징은 cubic-bezier(0.3, 0, 0, 1) 하나, 호버 150ms·등장 300ms를 쓴다.

### Don't
- 회색 글자를 고정 HEX(예: 흰 바탕용 회색)로 새로 만들지 않는다. 투명도 단계를 쓴다.
- 입력 오류를 빨강(#e1535d)으로 표시하지 않는다. 빨강은 삭제·위험이다.
- 호버 색을 손으로 따로 정하지 않는다. `-hovered` 자동 계산 값을 쓴다.
- 태그 색을 11색 밖에서 만들지 않는다.
- 모달 모서리를 버튼과 같은 8px로 줄이지 않는다. 모달은 20px다.
- 다크 모드 표면을 한 색으로 통일하지 않는다. 위 레이어일수록 밝게(#1a1a1c → #313135) 둔다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: `@channel.io/bezier-react` 3.6.6(React 컴포넌트), `bezier-tokens` 0.6.0(토큰), `@channel.io/bezier-icons`(아이콘). 저장소 channel-io/bezier-react, 라이선스 Apache-2.0.
- 토큰 구조: `global/semantic`(이전), `beta`(현재 컴포넌트가 씀), `alpha` 세 세트. beta는 global(color, dimension, typography, motion)과 semantic(light·dark color, radius, typography, elevation, state, border, opacity, backdrop, motion)으로 나뉜다. 호버 색은 빌드 스크립트(format.ts)가 만든다.
- 테마 적용: `AppProvider`·`ThemeProvider`·`BetaTokenProvider`·`AlphaTokenProvider` 컴포넌트가 있다.
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 저장소 README(글꼴 설치 안내)와 컴포넌트 코드, 컴포넌트마다 `.stories.tsx` 파일이 있다. Storybook 공개 주소는 공개 자료 없음.
- 버전·변경 관리: 패키지 버전으로 관리한다(위 버전은 확인 시점 값). 변경 기록 위치는 공개 자료 없음.

## 12. AI에 넣을 때
```
채널톡(Bezier) 스타일로 디자인해 줘.
- 주색: #6157ea (연한 면 #6157ea1a, 포커스 링 #6157ea4d)
- 글자: 본문 #000000d9, 보조 #00000099, 흐림 #00000066
- 배경: 표면 #ffffff, 입력창 #fbfbfb, 토스트 #f7f7f8, 회색 면 #0000000d
- 상태: 성공 #20ab55, 주의·입력오류 #e67f2b, 위험 #e1535d, 정보 #3292e3
- 글꼴: Inter + Noto Sans KR, 기본 14px/18px, 제목 700
- 모서리: 버튼·입력 8px, 큰 버튼·토스트 12px, 모달 20px
- 간격 단위: 2·4px, 자주 쓰는 여백 6/12/16/24px
- 버튼: 높이 36(m)·44(l), 비활성은 투명도 40%, 로딩은 스피너+너비 유지
- 켜짐·체크 표시는 초록 #20ab55
- 테두리: 1px box-shadow로, 그림자는 얕고 넓게
- 분위기: 촘촘한 업무용 화면, 색은 태그 구분에만 넉넉히
```

## 13. 참고 자료
- https://github.com/channel-io/bezier-react (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/beta — global(color, dimension, typography, motion), semantic(light·dark color, radius, typography, elevation, state, border, opacity, backdrop, motion) (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-tokens/src/global — 이전 세대 토큰(font, radius, transition) (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/blob/main/packages/bezier-tokens/scripts/lib/format.ts — 호버 색 자동 생성 (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/tree/main/packages/bezier-react/src/components — Button, TextField, ListItem, Banner, BaseTagBadge, Tabs, Modal, Toast, Switch, Tooltip, Checkbox, SegmentedControl 스타일 (확인 2026-10-31)
- https://github.com/channel-io/bezier-react/blob/main/packages/bezier-react/README.md — 글꼴 설치 안내 (확인 2026-10-31)

근거와 한계
- 값은 모두 공개 저장소의 토큰·컴포넌트 코드(beta 토큰 기준)에서 읽었다. 원본 문서에는 이 절이 없어, 원본에 적힌 한계만 모았다.
- 페이지 좌우 여백, 그리드, 바텀시트, 일러스트, 아바타 세부 수치, UX 라이팅은 공개 코드에 없어 확인 필요로 남겼다.
- 상단 바 반투명 배경(#efeff0cc)은 이전 세대 토큰 값이라 beta 기준 값은 확인 필요.
- 디자인 원칙은 공개 문서가 아니라 토큰·코드 구조에서 정리한 것이다.

서비스 이름과 브랜드는 (주)채널코퍼레이션의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.

## 부록 A. 구현 매핑
이 문서의 토큰 이름과 `@channel.io/bezier-react`가 컴포넌트 스타일에서 쓰는 CSS 변수를 잇는다. 변수 이름은 컴포넌트 `.module.scss` 파일에서 확인한 것만 적었다.

| DESIGN.md | 공식 CSS 변수 |
|---|---|
| `colors.primary` (fill.action) | `--color-fill-accent-blue-heavier` |
| `colors.primary` (글자) | `--color-text-accent-blue` |
| `colors.primary-soft` | `--color-fill-accent-blue` |
| `colors.focus-ring` | `--color-state-action-light` |
| `colors.text-heaviest` | `--color-text-neutral-heaviest` |
| `colors.text-primary` | `--color-text-neutral` |
| `colors.text-secondary` | `--color-text-neutral-light` |
| `colors.text-muted` | `--color-text-neutral-lighter` |
| `colors.on-primary` | `--color-text-absolute-white` |
| `colors.fill-input` | `--color-fill-grey` |
| `colors.fill-toast` | `--color-fill-grey-heavy` |
| `colors.fill-neutral-light` / 호버 | `--color-fill-neutral-light` / `--color-fill-neutral-light-hovered` |
| `colors.surface-low` / 툴팁 / 모달 | `--color-surface-low` / `--color-surface-high` / `--color-surface-higher` |
| `colors.border` / `colors.border-heavy` | `--color-border-neutral` / `--color-border-neutral-heavy` |
| `colors.dim` | `--color-dim-absolute-black` |
| `colors.green` (체크·스위치 켜짐) | `--color-fill-accent-green-heavier` |
| `rounded.r8` 등 | `--radius-8`, `--radius-6`, `--radius-12`, `--radius-16` |
| `elevation.level-3` 등 | `--elevation-1` ~ `--elevation-4` |
| `opacity.disabled` | `--opacity-disabled` |
| `focus.input` / `focus.input-error` | `--state-input-active` / `--state-input-error` (기본 `--state-input-default`) |
| `motion.fast` / `motion.default` | `--motion-transition-fast` / `--motion-transition-default` |
| `typography.text-medium` 크기 | `--typography-size-14-font-size` |
| 굵기 700 | `--typography-text-weight-bold` |

설치: `npm install @channel.io/bezier-react` 후 앱을 `AppProvider`로 감싼다. 글꼴은 README 안내대로 Inter와 Noto Sans KR을 따로 불러온다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로** (bezier-react 저장소, bezier-react 3.6.6 / bezier-tokens 0.6.0):
  - 색 전체(라이트·다크, 11색, 차트 10색): `packages/bezier-tokens/src/beta/global/color.json`, `packages/bezier-tokens/src/beta/semantic/light-theme/`, `dark-theme/`
  - 치수·간격·패널 폭: `packages/bezier-tokens/src/beta/global/dimension.json`
  - 글자 크기·행간·자간·굵기·글꼴 목록: `packages/bezier-tokens/src/beta/global/typography.json`, `semantic/typography.json`
  - 모서리·그림자·투명도·흐림·상태 링: `semantic/radius.json`, `semantic/elevation.json`, `semantic/opacity.json`, `semantic/backdrop.json`, `semantic/state.json`
  - 모션(150/300/450ms, cubic-bezier(0.3, 0, 0, 1)): `packages/bezier-tokens/src/beta/global/motion.json`
  - 호버 자동 계산: `packages/bezier-tokens/scripts/lib/format.ts`
  - 컴포넌트 크기·상태·접근성 속성: `packages/bezier-react/src/components/Button/Button.module.scss`·`Button.tsx`(크기별 글자 13/13/14/15/18, 로딩 Spinner), `TextField/TextField.tsx`(aria-label), `Checkbox/Checkbox.module.scss`, `Switch/Switch.module.scss`, `SegmentedControl/SegmentedControl.module.scss`, `Tabs/Tabs.tsx`·`Tabs.module.scss`, `Toast/Toast.tsx`(role="status"), `Modal/Modal.tsx`(aria-modal) 등
- **화면에서 잰 값(관찰)**: 없음. 이 문서는 실측 없이 공개 코드만 읽었다.
- **SylviaLab이 정리·권장한 것**: YAML primitive 이름(`black-alpha-85` 등 투명도를 이름에 붙인 것)과 semantic 별칭(`text-primary`, `primary-soft` 등), 디자인 원칙 5개, 색·간격·모서리 사용 규칙과 각 장의 Don't, `(구현 권장)`이 붙은 접근성 항목, 7장 패턴 표의 정리 방식.
