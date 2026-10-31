---
version: "1.0"
name: "LINE"
description: "브랜드 초록을 OS마다 따로 맞추고, 투명도는 흰색·검정만 허용하며, 눌림 색을 HSV로 자동 생성하는 다국어 메신저 시스템"
source:
  - "https://designsystem.line.me/ (LDSM: LINE 메신저 앱 가이드)"
  - "https://designsystem.line.me/LDSG (LDSG: 해외 가족 서비스 가이드)"
  - "확인 2026-10-31"
  - "보조: App Store 소개 스크린샷 6장(https://apps.apple.com/kr/app/id443904275, 확인 2026-11-01). 공식 문서에 없는 화면 값만 보탰고 모두 추정"
updated: "2026-11-01"

# ─────────────────────────────────────────────
# 단위: pt(iOS 기준). 웹으로 옮길 때 1pt = 1px.
# 아래 primitive 이름은 공식 팔레트 이름(Gray 900 → gray-900)을 kebab-case로 옮긴 것이다.
# semantic 이름은 SylviaLab이 문서의 쓰임 규칙에 맞춰 붙였다.
# "추정" 주석이 붙은 값은 App Store 소개 이미지(폰 화면 폭 약 261px, 375pt로 환산)에서 읽은 것이다.
# ─────────────────────────────────────────────
colors:
  # ── Primitive: 브랜드 (OS별) ──
  green-ios: "#06c755"       # iOS·웹 LINE 초록
  green-android: "#4cc764"   # Android LINE 초록

  # ── Primitive: Primary Palette — Gray (흰색~검정 19단계) ──
  white: "#ffffff"
  gray-100: "#fcfcfc"
  gray-150: "#f5f5f5"
  gray-200: "#efefef"
  gray-250: "#e8e8e8"
  gray-300: "#dfdfdf"
  gray-350: "#c8c8c8"   # 스낵바 아이콘·화살표
  gray-400: "#b7b7b7"   # 가장 덜 중요한 글자에만
  gray-500: "#949494"   # 글자 하한(3.0:1)
  gray-600: "#777777"
  gray-650: "#616161"
  gray-700: "#555555"
  gray-750: "#3f3f3f"
  gray-770: "#383838"
  gray-800: "#2a2a2a"
  gray-850: "#1f1f1f"
  gray-870: "#1a1a1a"
  gray-900: "#111111"   # 본문, 비활성 40%의 기준
  black: "#000000"

  # ── Primitive: Primary Palette — Navy·Blue·Red ──
  navy-400: "#c8cfdc"
  navy-500: "#98a0b3"
  navy-600: "#707991"
  navy-700: "#464f69"
  navy-800: "#323b54"   # 검색창
  navy-850: "#262f4a"   # Android 헤더
  navy-900: "#202a43"   # iOS 내비게이션 바
  blue-400: "#96b2ff"
  blue-500: "#638dff"   # 버튼 배경
  blue-600: "#4270ed"
  blue-700: "#2f59cc"
  red-ios: "#ff334b"    # 위험·삭제 (LINE Colors Red 600과 같은 값)

  # ── Primitive: LINE Colors (보조 무지개 팔레트, 대표 600) ──
  lc-lime-600: "#06c755"
  lc-light-green-600: "#15bd66"
  lc-teal-600: "#19bfa1"
  lc-cyan-600: "#1cb8b8"
  lc-light-blue-600: "#00b8e5"
  lc-sky-blue-600: "#1a9cff"
  lc-blue-600: "#4d73ff"     # Primary Palette Blue 600(#4270ed)과 다른 값
  lc-indigo-600: "#5f5fed"
  lc-deep-purple-600: "#8556e3"
  lc-purple-600: "#c355d9"
  lc-magenta-600: "#f74397"
  lc-red-600: "#ff334b"
  lc-orange-600: "#ff6f36"
  lc-amber-600: "#ffc53d"
  lc-yellow-600: "#fffc33"

  # ── 관찰 (App Store 이미지, 추정) ──
  chat-bg-default: "#8cabd8"   # 추정. 대화방 기본 테마 바탕(테마마다 바뀜)
  bubble-mine: "#79e278"       # 추정. 내 말풍선(같은 테마 위)

  # ── Semantic (화면에서는 이 이름만 쓴다) ──
  brand: "{colors.green-ios}"               # Android 빌드에서는 brand-android
  brand-android: "{colors.green-android}"
  action-primary: "{colors.blue-500}"
  navbar-ios: "{colors.navy-900}"
  header-android: "{colors.navy-850}"
  search-field: "{colors.navy-800}"
  danger: "{colors.red-ios}"
  background: "{colors.white}"
  surface-subtle: "{colors.gray-150}"
  surface-muted: "{colors.gray-200}"
  divider: "{colors.gray-250}"
  divider-strong: "{colors.gray-300}"
  icon-on-snackbar: "{colors.gray-350}"
  text-primary: "{colors.gray-900}"
  text-strong: "{colors.gray-750}"
  text-description: "{colors.gray-700}"
  text-secondary: "{colors.gray-600}"
  text-tertiary: "{colors.gray-500}"
  text-faint: "{colors.gray-400}"
  text-inverse: "{colors.white}"
  dim: "{colors.black}"                     # 투명도 10% 이상으로만 쓴다
  on-primary: "{colors.text-inverse}"       # 채움 버튼 흰 글자(공식)
  bubble-other: "{colors.white}"            # 추정. 상대 말풍선
  input-field: "{colors.gray-150}"          # 추정. 대화 입력창 바탕(잰 값 #f5f5f5)
  section-gap: "{colors.gray-150}"          # 추정. 목록 묶음 사이 굵은 띠(잰 값 #f5f5f5)
  sheet-handle: "{colors.gray-300}"         # 추정. 잰 값 #dedede, Gray 300(#dfdfdf)과 1 차이

opacity:
  # LINE White·Black만 5% 단위로 조절. 다른 색은 투명도 변경 금지.
  step: 0.05
  white-text-min: 0.70        # 흰 글자·핵심 아이콘
  white-placeholder-min: 0.40
  white-support-min: 0.15     # 그 밖의 보조 UI
  black-ui-min: 0.10          # 딤 등
  disabled: 0.40              # 흰 요소는 흰색 40%, 그 밖은 Gray 900의 40%
  snackbar-bg: 0.85           # ldsg-opacity-black-85
  tab-hover: 0.70
  tab-pressed: 0.50

typography:
  font-family: "system-ui"   # OS 시스템 글꼴(LDSM). 웹 font-family 순서는 공개 문서에 없음
  # 권장안(크기·굵기를 자유롭게 섞어도 된다고 문서가 밝힘). 행간은 공개 수치 없음.
  heading-1: { fontSize: "24px", fontWeight: 800 }   # Heavy
  title-1:   { fontSize: "23px", fontWeight: 700 }
  title-2:   { fontSize: "19px", fontWeight: 600 }   # Semibold 또는 Bold
  heading-2: { fontSize: "17px", fontWeight: 700 }
  title-3:   { fontSize: "16px", fontWeight: 500 }   # Medium 또는 Semibold
  body-1:    { fontSize: "16px", fontWeight: 400 }
  title-4:   { fontSize: "15px", fontWeight: 500 }
  heading-3: { fontSize: "14px", fontWeight: 700 }
  title-5:   { fontSize: "14px", fontWeight: 500 }
  body-2:    { fontSize: "14px", fontWeight: 400 }
  heading-4: { fontSize: "13px", fontWeight: 400 }
  body-3:    { fontSize: "13px", fontWeight: 400 }
  body-4:    { fontSize: "12px", fontWeight: 400 }   # 최소 크기. 12pt 미만 금지

spacing:
  tab-s: "8px"      # 탭 글자 ↔ 경계, 글자 사이 (S)
  tab-m: "12px"     # 같은 자리 (M)
  page: "16px"      # 화면 좌우, 카드 안 좌우
  snackbar-offset: "16px"   # 화면 바닥·하단 탭·안전 영역에서 최소 거리
  grid:
    col2: { column: "167px", gutter: "9px", margin: "16px" }
    col3: { column: "109px", gutter: "8px", margin: "16px" }
    col4: { column: "82px", gutter: "5px", margin: "16px" }

size:
  icon-grid: "24px"      # 사방 2px 안쪽 여백
  icon-live-area: "20px"

border-width:
  tab-underline-m: "2px"  # 기본
  tab-underline-s: "1px"
  icon-stroke: "1.3px"    # 기본. 직접 그릴 때 1.3·1.5·1.8pt 중 하나

rounded:
  icon: "2px"   # 아이콘 모서리 0–2px
  sheet: "9px"  # 추정(8~10). 바텀시트 위 두 모서리
  full: "999px" # 추정. 말풍선, 대화 입력창, 날짜 알약

layout:
  base-width: "375px"     # 167×2 + 9 + 16×2 = 375

components:
  button-primary:   { backgroundColor: "{colors.action-primary}", textColor: "{colors.on-primary}" }   # 모서리·높이 확인 필요(공식 문서 수치 없음, 스토어 이미지에 채움 버튼 없음)
  button-disabled:  { textColor: "{colors.text-primary}", opacity: "{opacity.disabled}" }   # 배경은 기본 유지
  navbar-ios:       { backgroundColor: "{colors.navbar-ios}", textColor: "{colors.text-inverse}" }
  header-android:   { backgroundColor: "{colors.header-android}", textColor: "{colors.text-inverse}" }
  search-field:     { backgroundColor: "{colors.search-field}", placeholderOpacity: "{opacity.white-placeholder-min}" }
  tab-fixed:        { items: "2-4", paddingX: "{spacing.page}", underline: "{border-width.tab-underline-m}" }
  tab-item-hover:   { opacity: "{opacity.tab-hover}" }
  tab-item-pressed: { opacity: "{opacity.tab-pressed}" }
  snackbar:         { backgroundColor: "{colors.dim}", backgroundOpacity: "{opacity.snackbar-bg}", textColor: "{colors.text-inverse}", iconColor: "{colors.icon-on-snackbar}", offset: "{spacing.snackbar-offset}", duration: "3s" }
  sheet-liff:       { heights: "50% / 70% / 98%" }
  sheet-custom:     { heights: "0-98%" }
  modal-fullscreen: { height: "100%" }
  # ── 아래는 App Store 소개 이미지에서 읽은 추정값 ──
  chat-bubble-mine:  { backgroundColor: "{colors.bubble-mine}", textColor: "{colors.black}", rounded: "{rounded.full}", height: "33px" }   # 추정. 한 줄일 때
  chat-bubble-other: { backgroundColor: "{colors.bubble-other}", textColor: "{colors.black}", rounded: "{rounded.full}", height: "33px" }  # 추정
  date-pill:         { backgroundColor: "{colors.black}", backgroundOpacity: 0.15, textColor: "{colors.white}", rounded: "{rounded.full}", height: "23px" }   # 추정. 바탕 위 검정 약 15%
  chat-input:        { backgroundColor: "{colors.input-field}", rounded: "{rounded.full}", height: "34px" }   # 추정. 흰 입력 줄 안
  bottom-sheet:      { backgroundColor: "{colors.background}", rounded: "{rounded.sheet}", handleColor: "{colors.sheet-handle}", handleWidth: "48px" }   # 추정
---

# LINE 디자인 시스템

> 근거: 공개 문서 기반 (LINE Design System 공식 사이트 designsystem.line.me의 외부 공개용 LDSM·LDSG 페이지). 공식 문서에 없는 화면 값 일부는 App Store 소개 스크린샷 6장(확인 2026-11-01)에서 읽어 보탰고 `추정`으로 표시했다.
> 작성: SylviaLab · 최종 수정 2026-11-01

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 어긋나면 YAML 값이 우선한다.

## 1. 개요와 원칙
- 서비스 성격: 일본·대만·태국 등에서 쓰는 메신저 앱과 그 위의 가족 서비스(결제, 쇼핑, 뉴스, Keep 등). 화면의 중심은 iOS·Android 네이티브 앱이다.
- 디자인 인상 한 줄: 무채색 회색 단계 위에 LINE 초록(#06c755)을 상징으로 두고, 앱 상단 바는 짙은 남색 계열을 쓰는 다국어 메신저 화면.
- 공식 시스템 이름: LINE Design System. 두 갈래로 나뉜다.
  - LDSM: LINE 메신저 앱 기준 가이드(색, 아이콘, 그래픽, 글꼴, 레이아웃, UX 패턴).
  - LDSG: 해외 가족 서비스용 가이드(Figma 라이브러리, 웹 컴포넌트, 언어 팩). 토큰 이름이 `ldsg-` 로 시작한다.
- 디자인 원칙: 공식 원칙 목록은 이번에 읽은 페이지에 없다. 문서의 규칙에서 읽은 방향은 아래와 같다.
  1. 브랜드 초록을 OS마다 다르게 쓴다. 화면 표현 차이를 맞추려는 결정이다. (LDSM 색 가이드)
  2. 투명도를 바꿀 수 있는 색은 흰색과 검정뿐이다. 나머지 색은 불투명하게 쓴다. (LDSM 색 가이드)
  3. 눌림·강조 색은 사람이 고르지 않고 HSV 값을 조정해 자동으로 만든다. (LDSM 색 가이드)
  4. 한국어 외에 일본어·대만 중국어·태국어를 함께 다루므로 글 길이 변화를 전제로 설계한다. (LDSM 글꼴 가이드)
  5. 꼭 사용자 주의가 필요한 경우만 모달로 한다. (LDSM 모달 가이드)
- 톤: 무채색 바탕에 초록은 상징으로만 두고, 다국어 길이에 여유를 둔 중립적인 화면.

### 특장점
- 브랜드 색을 OS별로 나눠 정의한다 — LINE 초록이 iOS #06c755, Android #4cc764로 따로 있고, 상단 바도 iOS 내비게이션 바 #202a43, Android 헤더 #262f4a로 나뉜다.
- 투명도 규칙이 숫자로 정해져 있다 — 흰색·검정만 5% 단위로 바꿀 수 있고, 흰 글자·핵심 아이콘 70% 이상, 플레이스홀더 40% 이상, 딤은 검정 10% 이상이다. 다른 색은 투명도를 바꾸지 않는다.
- 회색 19단계에 글자 하한을 붙였다 — #ffffff부터 #000000까지 Gray 100~900 단계가 있고, 글자는 500 단계(#949494, 대비 3.0:1) 이상을 기본으로 한다.
- 모달·시트 높이와 닫기 규칙이 표로 정해져 있다 — 전체 화면 100%, 직접 구현 시트 0–98%, LIFF 웹앱 시트 50·70·98%이고, X 버튼 위치를 함께 놓인 버튼에 따라 왼쪽·오른쪽으로 정한다.
- 핵심 팔레트와 보조 팔레트를 나눈다 — 핵심 UI용 Primary Palette와 배너·스토리용 LINE Colors 15계열(각 300–900 + 채도 낮춘 `p` 단계)을 따로 둔다.
- 대화방 날짜 표시에 검정 투명도를 쓴다 — 기본 테마 바탕 #8cabd8 위 날짜 알약이 #7791b7로, 검정 약 15%를 얹은 값과 맞는다. 테마가 바뀌어도 새 색을 고르지 않는 방식이다(추정, App Store 이미지. 관찰에서 정리).

### 배울 점
- 여러 OS에서 같은 브랜드 색이 다르게 보일 때 LINE처럼 OS별 브랜드 값(#06c755 / #4cc764)을 따로 정의한다.
- 반투명 색이 늘어날 때 LINE처럼 투명도는 흰색·검정에만 허용하고 용도별 최소값(글자 70%, 플레이스홀더 40%, 딤 10%)을 정한다.
- 시트 높이가 제각각일 때 LINE처럼 50%, 70%, 98% 세 가지 단계로 묶고, 높이를 바꿀 수 있는 시트에만 손잡이를 단다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 YAML 토큰 이름으로만 쓴다. 화면 코드에서는 `gray-900` 같은 팔레트 이름보다 `text-primary` 같은 semantic 이름을 먼저 쓴다.
- 만드는 대상이 Android면 `brand-android`(#4cc764)·`header-android`, iOS·웹이면 `brand`(#06c755)·`navbar-ios`를 쓴다. 한 화면에 둘을 섞지 않는다.
- 반투명이 필요하면 흰색·검정에 `opacity.*` 값을 곱한다. 초록·파랑·남색에 투명도를 주지 않는다.
- 눌림·hover 색을 새 HEX로 만들지 않는다. 공식 규칙은 HSV 자동 조정이고 수치가 공개되지 않았으므로 `확인 필요`로 둔다.
- 판단이 어려우면 일반 화면(옆에서 밀려 들어옴)을 고르고 모달은 아낀다. 글자는 12pt 아래로 내리지 않는다.
- `추정` 표시 값(말풍선·입력창·시트 모서리 등)은 App Store 홍보 이미지에서 읽은 것이다. 공식 값과 부딪히면 공식 값을 따른다. 버튼 모서리·높이는 여전히 `확인 필요`다.

## 2. 색상
### 색 체계
LINE 색은 **Primary Palette(핵심 UI) → semantic** 두 층에, 보조용 **LINE Colors**가 따로 붙는 구조다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| Primary Palette | `gray-900`, `navy-900`, `blue-500`, `red-ios` | 토큰 정의. 핵심 UI의 원천 |
| LINE Colors | `lc-teal-600`, `lc-amber-600` 등 15계열 × (300–900 + `p`) | 배너·스토리 같은 보조 요소에만 |
| Semantic | `text-primary`, `navbar-ios`, `action-primary`, `danger` | 실제 화면과 컴포넌트(이름은 SylviaLab 정리) |
| Opacity | `opacity.white-text-min` 등 | 흰색·검정에만 곱하는 투명도 |

- 문서에 "Semantic Color Key"라는 개념은 나오지만 공식 키와 값 목록은 없다. 위 semantic 이름은 문서의 쓰임 규칙에서 SylviaLab이 정리했다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| LINE Green (iOS) | #06c755 | iOS 앱 브랜드 색. 웹 서비스도 이 값을 쓴다 |
| LINE Green (Android) | #4cc764 | Android 앱 브랜드 색 |
| Blue 500 | #638dff | 버튼 배경, 큰 툴팁 |
| Navy 900 | #202a43 | iOS 내비게이션 바 |
| Navy 850 | #262f4a | Android 헤더 |
| Navy 800 | #323b54 | 검색창 |

- LDSG 토큰 `ldsg-color-brand-primary`(스낵바 버튼 글자 등)의 HEX는 문서에 없다. 확인 필요.
- 브랜드 색(초록·Blue 500·빨강)의 다크 모드 값은 확인 필요. Navy 단계는 다크 값이 정해져 있지 않다(원본 표기 "-").

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| White | #ffffff | 바탕 |
| Gray 100 | #fcfcfc | 아주 연한 면 |
| Gray 150 | #f5f5f5 | 연한 면 |
| Gray 200 | #efefef | 면 |
| Gray 250 | #e8e8e8 | 구분선 후보 |
| Gray 300 | #dfdfdf | 구분선 후보 |
| Gray 350 | #c8c8c8 | 스낵바 안 아이콘·화살표 |
| Gray 770 | #383838 | 진한 면 |
| Gray 800 | #2a2a2a | 진한 면 |
| Gray 850 | #1f1f1f | 어두운 면 |
| Gray 870 | #1a1a1a | 어두운 면 |
| Black | #000000 | 딤, 가장 진한 글자 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| Gray 900 | #111111 | 본문, 비활성 색의 기준 |
| Gray 750 | #3f3f3f | 진한 글자 |
| Gray 700 | #555555 | 설명 글자 |
| Gray 650 | #616161 | 보조 글자 |
| Gray 600 | #777777 | 보조 글자 |
| Gray 500 | #949494 | 글자로 쓸 수 있는 가장 연한 회색 |
| Gray 400 | #b7b7b7 | 가장 덜 중요한 글자에만 |

- 위 회색 표의 "쓰임"은 Blue·Navy·Gray 350·Gray 900을 빼면 문서의 단계 규칙에서 옮긴 것이고, 개별 지정은 아니다.

### 화면에서 본 색(추정, App Store 이미지)
공식 문서에 쓰임이 없는 자리를 스토어 이미지에서 읽었다. 홍보용 편집 이미지라 모두 `추정`이다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| (공식 값 확인) LINE Green | #06c755 | 스토어 이미지 배경을 재면 공식 iOS 초록과 정확히 같다 |
| chat-bg-default | #8cabd8 | 대화방 기본 테마 바탕. 대화방 상단 바도 같은 색이고 이름·아이콘은 검정. 테마에 따라 바뀐다 |
| bubble-mine | #79e278 | 내 말풍선(위 테마 기준). LINE Colors 표에 같은 값이 없다(확인 필요) |
| bubble-other | #ffffff | 상대 말풍선 |
| date-pill | #7791b7 | 대화방 날짜 알약. #8cabd8에 검정 약 15%를 얹은 값과 맞는다 |
| input-field | #f5f5f5 | 대화 입력창 바탕. Gray 150과 같은 값 |
| section-gap | #f5f5f5 | 지갑(결제) 화면 묶음 사이 굵은 띠(약 9pt). Gray 150과 같은 값 |
| sheet-handle | #dedede | 바텀시트 손잡이. Gray 300(#dfdfdf)과 1 차이 |
| 초록 글자 | #16b947 근처 | 시트 안 '감지된 언어', '번역하기' 같은 링크 글자. 작은 글자라 번짐이 있어, 브랜드 #06c755와 같은 색인지 확인 필요 |
| 본문 글자 | #000000 근처 | 말풍선·목록 글자. 공식 본문 Gray 900(#111111)과 같은지 확인 필요 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| error (Red iOS) | #ff334b | 위험·삭제. Primary Palette의 iOS용 빨강(LINE Colors에서는 Red 600) |
| success | 확인 필요 | 별도 상태 색 표가 공개 문서에 없다 |
| warning | 확인 필요 | 같음 |
| info | 확인 필요 | 같음 |

- 문서에 "Semantic Color Key"라는 개념은 나오지만 키와 값 목록은 없다.
- 비활성: 흰색 요소는 흰색 40% 투명도, 그 밖의 색은 Gray 900(#111111)의 40%를 쓴다. 기본은 버튼 글자에만 적용하고, 배경까지 회색으로 바꾸는 것은 디자이너가 정할 때만이다.
- 상태 색의 "배경/선/글자" 조합 규칙은 공개 문서에 없다. 확인 필요.

### Navy·Blue 단계
| 토큰 | HEX | 쓰임 |
|---|---|---|
| Navy 400 | #c8cfdc | Navy 단계 |
| Navy 500 | #98a0b3 | Navy 단계 |
| Navy 600 | #707991 | Navy 단계 |
| Navy 700 | #464f69 | Navy 단계 |
| Blue 400 | #96b2ff | Blue 단계(Primary Palette) |
| Blue 600 | #4270ed | Blue 단계(Primary Palette) |
| Blue 700 | #2f59cc | Blue 단계(Primary Palette) |

- Navy 800·850·900과 Blue 500은 위 브랜드·행동 표에 있다.
- LINE Colors 표의 Blue 600은 #4d73ff로 값이 다르다. 두 표가 서로 다른 용도라 함께 적는다.

### LINE Colors (보조 무지개 팔레트)
배너, 스토리 UI 같은 보조 요소용이다. 15계열이고, 각 계열에 300–900 단계와 채도를 낮춘 `p` 단계가 있다. 대표 600 값만 적는다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| Lime 600 | #06c755 | LINE 초록과 같은 값 |
| Light Green 600 | #15bd66 | 보조 요소 |
| Teal 600 | #19bfa1 | 보조 요소 |
| Cyan 600 | #1cb8b8 | 보조 요소 |
| Light Blue 600 | #00b8e5 | 보조 요소 |
| Sky Blue 600 | #1a9cff | 보조 요소 |
| Blue 600 (LINE Colors) | #4d73ff | 보조 요소 |
| Indigo 600 | #5f5fed | 보조 요소 |
| Deep Purple 600 | #8556e3 | 보조 요소 |
| Purple 600 | #c355d9 | 보조 요소 |
| Magenta 600 | #f74397 | 보조 요소 |
| Red 600 | #ff334b | 보조 요소, 위험 색과 같은 값 |
| Orange 600 | #ff6f36 | 보조 요소 |
| Amber 600 | #ffc53d | 보조 요소 |
| Yellow 600 | #fffc33 | 보조 요소 |
| Navy 900 | #202a43 | Navy 계열 대표값(600이 아니라 900) |

- 가족 서비스는 LINE Colors와 브랜드 색으로 자기 주색을 만들거나, LINE 앱 주색을 그대로 물려받을 수 있다.

### 역할별 색
- 브랜드 `brand`(#06c755) / `brand-android`(#4cc764): 상징 색. 문서상 핵심 UI 버튼 예시는 초록이 아니라 Blue 500이다.
- 주요 행동 `action-primary`(Blue 500 #638dff): 채움 버튼 배경, 큰 툴팁. 눌림 색은 HSV 자동 조정(값 확인 필요). 비활성은 글자만 40%.
- 상단 바 `navbar-ios`(#202a43) / `header-android`(#262f4a): 앱 상단 영역. 그 안 검색창은 `search-field`(#323b54), 플레이스홀더는 흰색 40% 이상.
- 위험 `danger`(#ff334b): 삭제·위험 행동.
- 글자 단계: `text-primary`(#111111) → `text-strong`(#3f3f3f) → `text-description`(#555555) → `text-secondary`(#777777) → `text-tertiary`(#949494, 하한) → `text-faint`(#b7b7b7, 글자가 많이 겹치는 화면의 가장 덜 중요한 글자에만).
- 면·선: `surface-subtle`(#f5f5f5)·`surface-muted`(#efefef), 구분선 후보 `divider`(#e8e8e8)·`divider-strong`(#dfdfdf).
- 딤 `dim`(검정): 시트·모달 뒤, 투명도 10% 이상. 스낵바 배경은 검정 85%.

### 화면 모드
- 다크 모드 색은 문서에 시뮬레이터 이미지로만 있고 HEX 표가 없다. 확인 필요.
- Navy 단계는 다크 값이 "-"로 정해져 있지 않다. 다크 모드에서 상단 바 색은 확인 필요.

### 색 사용 규칙
- 브랜드 초록은 iOS·웹은 #06c755, Android는 #4cc764를 쓴다.
- 상단 바는 iOS #202a43, Android #262f4a, 그 안 검색창은 #323b54다.
- 글자는 Gray 500(#949494, 대비 3.0:1) 단계 이상을 기본으로 한다. Gray 400(#b7b7b7)은 글자가 많이 겹치는 화면에서 가장 덜 중요한 글자에만 쓴다.
- LINE Colors는 배너·스토리 같은 보조 요소에만 쓰고, 핵심 UI는 Primary Palette를 쓴다.
- 눌림·강조 색은 HSV 값을 조정해 자동으로 만든다. 따로 고르지 않는다.
- 투명도 규칙:

| 색 | 규칙 |
|---|---|
| LINE White | 5% 단위로 조절. 글자·핵심 아이콘은 70% 이상, 플레이스홀더 40% 이상, 그 밖의 보조 UI 15% 이상 |
| LINE Black | 5% 단위로 조절. 딤처럼 UI 요소에는 10% 이상. 글자에는 투명도를 쓰지 않는다(비활성·플레이스홀더 예외) |
| 그 밖의 색 | 투명도 변경 금지 |
| 배경 이미지 딤 | 정해진 세 가지 프리셋 중 하나를 고른다(값 확인 필요) |

### Don't
- 흰색·검정 밖의 색(초록, Blue, Navy, LINE Colors)에 투명도를 주지 않는다.
- 투명도를 5% 단위 밖(예: 33%, 72%)으로 쓰지 않는다.
- LINE Colors(무지개 15계열)를 버튼·상단 바 같은 핵심 UI에 쓰지 않는다.
- Gray 400(#b7b7b7)을 일반 본문·보조 글자에 쓰지 않는다.
- 눌림 색을 손으로 고른 HEX로 따로 정의하지 않는다.

## 3. 타이포그래피
- 글꼴: OS 시스템 글꼴(LDSM). 나라별 글꼴에 따라 쓸 수 있는 굵기가 다르다. iOS는 13부터 표의 모든 굵기를 지원한다.
- 대체 글꼴: 확인 필요(웹용 font-family 순서가 공개 문서에 없다)
- App Store 이미지(한국어 화면)의 글자는 iOS 시스템 글꼴 모양이다(추정). 문서의 "OS 시스템 글꼴"과 맞는다.
- 단위: pt(iOS 기준). 12pt보다 작은 글자는 권하지 않는다.
- 아래 크기 표는 권장안이다. 크기와 굵기를 자유롭게 섞어도 된다고 문서가 밝힌다.
- 행간·자간: 확인 필요(문서 본문에 수치 없음)
- 굵기 칸 숫자는 문서의 이름(Heavy, Bold, Semibold, Medium, Regular)을 숫자로 바꾼 것이다. 두 굵기를 허용하는 단계는 쓰임 칸에 함께 적었다.

### 위계와 사용처
| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| Heading 1 | 24 | 800 | 확인 필요 | 화면에서 가장 큰 제목(문서 표기 Heavy) |
| Title 1 | 23 | 700 | 확인 필요 | 큰 제목(Bold) |
| Title 2 | 19 | 600 | 확인 필요 | 제목(Semibold, Bold) |
| Heading 2 | 17 | 700 | 확인 필요 | 섹션 제목(Bold) |
| Title 3 | 16 | 500 | 확인 필요 | 목록 제목(Medium, Semibold) |
| Body 1 | 16 | 400 | 확인 필요 | 큰 본문(Regular) |
| Title 4 | 15 | 500 | 확인 필요 | 목록 제목(Medium, Semibold) |
| Heading 3 | 14 | 700 | 확인 필요 | 작은 제목(Bold) |
| Title 5 | 14 | 500 | 확인 필요 | 작은 목록 제목(Medium, Semibold) |
| Body 2 | 14 | 400 | 확인 필요 | 본문(Regular) |
| Heading 4 | 13 | 400 | 확인 필요 | 보조 제목(Regular) |
| Body 3 | 13 | 400 | 확인 필요 | 보조 본문(Regular) |
| Body 4 | 12 | 400 | 확인 필요 | 가장 작은 본문(Regular) |

- 세 갈래 이름의 뜻: Heading은 화면의 큰 제목, Title은 목록·카드 같은 컴포넌트 안 제목(굵기 두 가지 허용), Body는 본문과 일반 목록 줄 글자다.
- LDSG는 Title(행간 좁음)과 Text(행간 넓음) 두 종류에 XS·S·M·L·XL·XXL 크기 이름을 붙인다. CSS 토큰은 굵기를 100·200·300으로 적는다. 실제 px 값은 공개 문서에 없다(확인 필요).

### 규칙
- Heading은 화면에서 가장 크게, 중요한 정보를 빨리 전하는 용도. Body는 본문과 일반 목록 줄 글자에 쓴다.
- 위계는 화면 전체뿐 아니라 컴포넌트 안에서도 세운다.
- 12pt보다 작은 글자는 쓰지 않는다.
- 일본어·태국어는 영어보다 길어지기 쉬우니 다국어 배치를 따로 확인한다.
- 굵기는 나라별 시스템 글꼴이 지원하는 것만 쓴다. 지원하지 않으면 가까운 굵기로 내려간다는 전제로 설계한다.

### Don't
- 12pt 미만 글자를 쓰지 않는다(Body 4가 최소).
- 고정 폭 버튼·탭에 글자 길이가 딱 맞게 설계하지 않는다. 일본어·태국어로 길어질 여유를 둔다.
- 검정 글자에 투명도로 위계를 만들지 않는다. 회색 단계(#3f3f3f~#949494)를 쓴다.
- 웹 글꼴을 따로 지정하지 않는다. OS 시스템 글꼴이 기준이다.

## 4. 레이아웃·간격
- 기준 화면: 375pt 너비(그리드 값이 이 폭에 맞아떨어진다: 167×2+9+16×2 = 375)
- 화면 좌우 여백(모바일): 16pt. 모든 화면 공통.
- 간격 단계(pt): 확인 필요(공개 문서에 기본 단위·단계 명시 없음). 문서에서 확인된 간격 값은 8, 12(탭), 16(화면·카드 좌우)이다.
- 카드 안 좌우 여백: 16pt
- 데스크톱 여백: 확인 필요

### 그리드
해상도가 바뀌면 거터는 그대로 두고 컬럼 수를 늘린다.

| 형태 | 컬럼 너비 | 거터 | 바깥 여백 |
|---|---|---|---|
| 2단 | 167 | 9 | 16 |
| 3단 | 109 | 8 | 16 |
| 4단 | 82 | 5 | 16 |

- 중단점(태블릿·데스크톱 경계 px): 확인 필요.

### 화면 세로 리듬
| 구간 | 간격 |
|---|---|
| 스낵바 ↔ 화면 바닥·하단 탭·안전 영역 | 16px 이상 |
| 제목 → 본문, 구획 → 구획 | 확인 필요(공개 수치 없음) |

### 카드 안쪽 여백
- 좌우 16pt. 위아래 여백은 확인 필요.

### 간격 적용 규칙
- 화면 좌우와 카드 안 좌우는 모두 16pt로 둔다.
- 컬럼 수가 바뀌어도 바깥 여백 16pt는 그대로다.
- 해상도가 커지면 거터를 늘리지 않고 컬럼 수를 늘린다.
- 탭 글자 주변 간격은 S 8 / M 12 두 값 중에서 고른다.

### Don't
- 화면 좌우 여백을 16pt 밖의 값으로 바꾸지 않는다.
- 넓은 화면에서 거터(9/8/5)를 키워 맞추지 않는다. 컬럼을 늘린다.
- 2단 그리드에 4단 거터(5)를 섞지 않는다. 형태마다 짝지어진 값을 쓴다.
- 스낵바를 화면 바닥이나 하단 탭에 붙이지 않는다(16px 이상).

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| 아이콘 모서리 | 0–2px | 아이콘 선 끝·모서리. 모서리마다 따로 지정 가능 |
| 탭 밑줄 M | 2px | 선택 탭 표시(기본) |
| 탭 밑줄 S | 1px | 선택 탭 표시(작은 탭) |
| 말풍선·입력창·날짜 알약 | 높이의 절반(알약) | 추정, App Store 이미지 |
| 바텀시트 위 모서리 | 약 9pt(8~10) | 추정, App Store 이미지(텍스트 인식 결과 시트) |

- 버튼·카드 모서리: 확인 필요(공개 문서에 수치 없음, 스토어 이미지에 채움 버튼·카드 없음)

### 고도(층)
- 그림자 수치는 확인 필요.
- 층은 딤으로 나눈다: 시트·모달 뒤에는 검정 딤 10% 이상을 깐다. 스낵바는 검정 85% 면 위에 흰 글자.
- 배경 이미지 위 딤은 정해진 세 가지 프리셋 중 하나(값 확인 필요).

### 모션
- 모달은 아래에서 위로 올라오고, 일반 화면은 옆에서 밀려 들어온다.
- 시트에 추가되는 항목(선택 목록 편집 영역)은 애니메이션으로 알린다.
- 스낵바는 3초 뒤 자동으로 사라진다(4–10초로 바꿀 수 있음).
- 길이·이징 값은 확인 필요. 움직임 줄이기 설정 대응도 확인 필요.

### Don't
- 모달을 옆에서 밀려 들어오게 만들지 않는다. 모달은 아래에서 위로.
- 딤을 검정 10% 미만으로 깔지 않는다.
- 아이콘 모서리를 2px보다 크게 둥글리지 않는다.
- 선택 탭 밑줄을 1px·2px 밖의 굵기로 두지 않는다.

## 6. 컴포넌트
공개 문서에서 수치가 확인되는 것만 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 채움 버튼 | 배경 Blue 500(#638dff) 예시 | 주요 행동 |
| 아이콘 버튼 Solid | 채운 아이콘 | 확인 필요 |
| 아이콘 버튼 Stroke | 선 아이콘 | 확인 필요 |

**상태**

| 상태 | 규칙 |
|---|---|
| 기본 | 배경 Blue 500, 흰 글자 |
| 눌림 | HSV 조정으로 자동 생성(값 확인 필요) |
| 비활성 | 글자를 Gray 900의 40%(흰 글자면 흰색 40%). 배경은 기본적으로 유지 |
| 로딩 | 확인 필요 |

- 크기·모서리·여백: 확인 필요. App Store 이미지 6장에도 채움 버튼이 없어 보탤 값이 없다.
- 글자 버튼(추정): 시트 안 오른쪽 아래 '다음'은 면 없이 굵은 검정 글자, '번역하기'는 초록 아이콘 + 초록 글자로 보인다.
- 쓰지 않는 때: 확인 필요

**규칙**
- 비활성을 배경 회색으로 바꾸는 것은 디자이너가 정할 때만이다. 기본은 글자만 바꾼다.
- 버튼 문구는 다국어로 길어질 수 있으니 너비를 글자에 맞추거나 여유를 둔다.
- 아이콘만 있는 버튼에는 `aria-label`(iOS는 accessibilityLabel)을 단다(구현 권장).
- 터치 영역 44pt 이상(구현 권장, 공식 버튼 높이는 확인 필요).

### 6.2 입력창
- 검색창 배경(앱 상단 남색 영역 안): Navy 800 #323b54
- 플레이스홀더: 흰 글자일 때 40% 이상 투명도
- 크기·모서리·여백·오류 상태: 확인 필요

**대화 입력 줄(추정, App Store 이미지)**

| 항목 | 값 |
|---|---|
| 줄 | 흰 바탕, 왼쪽에 + · 카메라 · 사진 아이콘, 오른쪽에 마이크 아이콘 |
| 입력창 | #f5f5f5 알약, 높이 약 34pt, 안내 글자 'Aa', 안쪽 오른쪽에 이모티콘 아이콘 |
| 테두리 | 없음 |

**규칙**
- 남색 상단 영역 안 검색창은 `search-field`, 글자는 흰색, 플레이스홀더는 흰색 40% 이상으로 둔다.
- 플레이스홀더로 라벨을 대신하지 않는다(구현 권장).

### 6.3 탭
**종류**

| 종류 | 항목 수 | 너비 | 좌우 여백 |
|---|---|---|---|
| 고정 탭(LDSG) | 2–4개 | 같은 폭 | 16(2개일 때) 또는 0(3개일 때) |
| 가변 탭 | 제한 없음 | 글자에 맞춰 바뀜 | 가로 스크롤·펼침 버튼 선택 가능 |

**크기**

| 크기 | 글자 ↔ 탭 경계 | 글자 사이 | 밑줄 |
|---|---|---|---|
| S | 8 | 8 | 1px |
| M(기본) | 12 | 12 | 2px |

**상태**: 항목 투명도 기본 100%, 호버 70%, 눌림 50%. 선택은 한 번에 하나.

- 탭 높이·글자 크기·색: 확인 필요
- 쓰지 않는 때: 항목이 5개 이상이면 고정 탭 대신 가변 탭을 쓴다(고정 탭은 2–4개).

**규칙**
- 선택 탭에 `aria-selected="true"`, 묶음에 `role="tablist"`(구현 권장).

### 6.4 선택 목록·카드
- 카드 안 좌우 여백 16pt.

| 고르는 방식 | 컨트롤 | 예 |
|---|---|---|
| 하나만 | 라디오 버튼 | 친구 목록처럼 같은 성격의 항목 |
| 여러 개 | 체크 버튼 | — |
| 여러 개 + 순서 중요 | 번호 버튼 | 채팅방에 사진 보내기 |

- 고른 항목을 확인·수정해야 하면 편집 영역을 둔다. 첫 항목을 고른 뒤에 나타나고, 추가되는 항목은 애니메이션으로 보여 준다.
- 전체 선택 수단을 함께 제공한다.
- 카드 모서리·그림자: 확인 필요

**말풍선(추정, App Store 이미지)**

| 종류 | 바탕 | 글자 | 모양 |
|---|---|---|---|
| 내 말 | #79e278(기본 테마) | 검정 | 알약, 한 줄 높이 약 33pt, 오른쪽 정렬 |
| 상대 말 | #ffffff | 검정 | 알약, 왼쪽에 둥근 프로필 사진 |
| 보낸 시각 | 없음 | 작은 흰 글자 | 말풍선 바깥 아래쪽 옆 |
| 날짜 | 바탕 위 검정 약 15% | 흰 글자 | 가운데 알약, 높이 약 23pt |

- 꼬리 모양 말풍선 여부는 이미지가 작아 확인 필요.

**아이콘 메뉴 격자(추정)**
- 지갑(결제) 화면: 굵은 묶음 제목 → 4열 아이콘 + 아래 작은 이름 → #f5f5f5 굵은 띠 → 선 아이콘 + 이름 목록 줄.

**규칙**
- 라벨 줄 전체를 누를 수 있게 하고, 선택 상태를 스크린리더에 알린다(구현 권장).

### 6.5 상단 바·하단 탭 바
- 상단 바 색: iOS 내비게이션 바 #202a43, Android 헤더 #262f4a.
- 하단 메인 탭: 일반 화면에서는 유지, 모달에서는 감춘다.
- 대화방 상단 바(추정, App Store 이미지): 남색이 아니라 대화방 테마 바탕(#8cabd8)과 같은 색이다. 왼쪽 뒤로(<) + 상대 이름, 오른쪽에 검색·전화·메뉴 아이콘, 모두 검정. 공식 문서의 남색 내비게이션 바(#202a43)는 다른 화면용으로 보인다(확인 필요).

**모달 상단 바의 닫기(X) 위치**

| 함께 놓인 버튼 | X 위치 |
|---|---|
| X 하나뿐(작업을 마치거나 닫는 역할) | 오른쪽 |
| 단계형 작업과 함께(취소 역할) | 왼쪽 |
| 메뉴 버튼과 함께 | 오른쪽 |
| "더 보기" 버튼과 함께 | 왼쪽 |

**규칙**
- 모달 제목은 모달에서 하는 일을 분명히 적는다.
- 닫기(X)는 Android에서도 반드시 둔다.

### 6.6 바텀시트·모달
| 종류 | 높이 | 닫는 방법 | 쓰는 때 |
|---|---|---|---|
| 전체 화면 모달 | 100% | 닫기 영역 탭, 아래로 쓸기 | 집중이 필요한 작업 |
| 시트(직접 구현) | 0–98% | 딤 탭, 닫기 영역 탭, 아래로 쓸기 | 기존 화면 맥락을 유지해야 할 때 |
| 시트(LIFF 웹앱) | 50%, 70%, 98% | 같음 | 웹앱을 앱 안에서 띄울 때 |

- 높이를 바꿀 수 있는 시트는 손잡이(handle bar)를 단다.
- 모달은 X 버튼과 아래로 당겨 닫기, 일반 화면은 뒤로(<) 버튼과 옆으로 쓸기.
- iOS는 OS 모달, Android는 Full-Screen Dialog를 쓴다. Android는 모달과 일반 화면이 들어올 때 비슷해 보이므로 모달을 아껴 쓴다.
- 쓰지 않는 때: 순서가 있는 흐름이나 모달 안의 모달은 일반 화면을 먼저 검토한다.
- 모서리·여백 수치: 공식 수치 없음. App Store 이미지(추정)에서는 흰 시트 위 모서리 약 9pt(8~10), 손잡이 #dedede 약 48 × 3pt가 가운데 위에 있다.

**규칙**
- 모달이 열리면 포커스를 모달 안으로 옮기고, 닫으면 연 버튼으로 돌려준다(구현 권장).
- 웹 구현이면 `role="dialog"`, `aria-modal="true"`(구현 권장).

### 6.7 스낵바·배지
스낵바(LDSG):
- 위치: 화면 아래. 화면 바닥·하단 탭·안전 영역에서 최소 16px 띄운다.
- 너비: 가변, 화면 너비 100% 기준. 높이는 줄 수에 따라 자동.
- 배경: 검정 85% 투명도(`ldsg-opacity-black-85`). 정확한 HEX 확인 필요.
- 제목: 흰색 #ffffff, 1줄 권장. 설명: 흰색 40%(설명만 있을 때는 흰색), 2줄 권장.
- 왼쪽 아이콘·오른쪽 화살표: Gray 350 #c8c8c8. 오른쪽 버튼 글자는 브랜드 주색.
- 자동으로 3초 뒤 사라진다(4–10초로 바꿀 수 있음). 버튼이 없으면 스낵바 전체를 링크로 쓸 수 있다.
- 모서리·안 여백: 확인 필요
- 배지: 확인 필요

**규칙**
- 스낵바 안 행동 버튼은 하나. 버튼이 없을 때만 전체를 링크로 쓴다.
- 스낵바 내용은 `role="status"`(또는 `aria-live="polite"`)로 읽히게 한다(구현 권장).

### 6.8 아이콘
- 아이콘 그리드: 24×24px, 사방 2px 안쪽 여백 → 실제 그리는 영역 20×20px.
- 선 두께: 기본 1.3pt. 직접 그릴 때는 1.3, 1.5, 1.8pt 중에서. 선 외곽을 픽셀 격자에 맞춘다.
- 모서리 0–2px, 기울기는 45°가 기본(필요하면 15°).
- 형태: 간결하고 중립적, 굵은 선과 둥근 모서리. 비슷한 비율의 기본 틀(key shape)을 맞춰 일관되게 보이게 한다.
- 컴포넌트 안 아이콘은 크기와 선 두께가 고정이고 바꿀 수 없다.
- 일러스트·그래픽: 금융, ID, IT, 커머스, 음식 등 서비스 분야별 그래픽 자료가 따로 있다. 사용 규칙 세부 확인 필요.

## 7. 패턴
- 모달 vs 일반 화면: 집중이 필요한 작업은 모달(아래에서 위로, X 버튼·아래로 당겨 닫기), 그 밖은 일반 화면(옆에서 들어옴, 뒤로 버튼·옆으로 쓸기). 모달에서는 하단 메인 탭을 감춘다.
- 선택 흐름: 하나는 라디오, 여럿은 체크, 순서가 중요하면 번호 버튼. 첫 선택 뒤 편집 영역이 나타나고 전체 선택 수단을 함께 둔다.
- 시트로 맥락 유지: 기존 화면을 유지해야 할 때 시트(0–98%, LIFF는 50·70·98%)를 띄운다.
- 짧은 결과 알림: 화면 아래 스낵바, 3초 뒤 자동으로 사라진다. 제목 1줄, 설명 2줄 안.
  ```
  사진 3장을 보냈습니다.          ← 제목, 흰색, 1줄
  채팅방에서 확인할 수 있습니다.   ← 설명, 흰색 40%, 2줄 안
  ```
  (예시 문구, SylviaLab 작성)
- 목록 → 상세: 확인 필요
- 검색: 상단 남색 영역 안 검색창(#323b54). 흐름은 확인 필요.
- 대화(추정, App Store 이미지): 테마 바탕 위 상대 흰 말풍선(왼쪽, 프로필 사진), 내 초록 말풍선(오른쪽), 가운데 날짜 알약, 아래 흰 입력 줄. 스티커는 말풍선 없이 크게 놓인다.
- 사진 속 글자 인식(추정): 사진 위로 바텀시트가 올라와 감지된 언어(초록 글자)와 인식 결과를 보여 주고, 아래에 번역 링크와 '다음'을 둔다.
- 빈 상태·로딩·오류: 확인 필요
- 폼·결제: 확인 필요

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #111111 | #ffffff | 18.9:1 | 통과 |
| #3f3f3f | #ffffff | 10.5:1 | 통과 |
| #555555 | #ffffff | 7.5:1 | 통과 |
| #616161 | #ffffff | 6.2:1 | 통과 |
| #777777 | #ffffff | 4.48:1 | 미달(큰 글자 3:1은 통과) |
| #949494 | #ffffff | 3.0:1 | 미달(큰 글자 3:1은 통과) |
| #b7b7b7 | #ffffff | 2.0:1 | 미달 |
| #ffffff | #638dff | 3.1:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #202a43 | 14.3:1 | 통과 |
| #ffffff | #262f4a | 13.2:1 | 통과 |
| #ff334b | #ffffff | 3.6:1 | 미달(큰 글자 3:1은 통과) |
| #000000 | #79e278 | 13.0:1 | 통과. 내 말풍선(추정 HEX) |
| #000000 | #ffffff | 21.0:1 | 통과. 상대 말풍선(추정) |
| #000000 | #8cabd8 | 8.9:1 | 통과. 대화방 상단 바 이름(추정 HEX) |
| #ffffff | #7791b7 | 3.2:1 | 미달(큰 글자 3:1은 통과). 날짜 알약(추정 HEX) |
| #16b947 | #ffffff | 2.6:1 | 미달. 시트 안 초록 링크 글자(추정 HEX) |

- 문서는 글자 하한을 3.0:1(Gray 500)로 둔다. 본문 4.5:1 기준에는 #555555(Gray 700)보다 진한 단계가 맞다. 흰 글자를 LINE 초록 위에 올리면 #06c755 2.3:1, #4cc764 2.2:1로 낮다.
- 터치 영역: 공개 문서에 버튼 높이 수치가 없다. 확인 필요. 대화 입력창 약 34pt(추정)는 44pt보다 낮아, 입력 줄 전체를 누르는 영역으로 잡는다(구현 권장).
- 추정 대비 메모: 초록 링크 글자(2.6:1)와 날짜 알약 흰 글자(3.2:1)는 본문 기준에 못 미친다. 초록 글자는 아이콘을 함께 두어 뜻을 보탠다(구현 권장).
- 최소 글자 크기: 12pt(Body 4). 12pt 미만은 권하지 않는다.
- 포커스·스크린리더·글자 확대: 확인 필요

### 점검 목록
- [ ] 본문 글자는 #616161(6.2:1)보다 진한 단계로 둔다. #777777·#949494는 큰 글자·보조 정보에만(구현 권장).
- [ ] 흰 글자를 초록(#06c755·#4cc764) 위에 작은 크기로 올리지 않는다(2.3:1·2.2:1).
- [ ] 비활성 글자 40% 투명도는 대비 기준 예외(비활성 요소)로 본다. 비활성임을 스크린리더에도 알린다(구현 권장).
- [ ] 아이콘만 있는 버튼에 이름(accessibilityLabel / `aria-label`)을 단다(구현 권장).
- [ ] OS 글자 크기 확대(Dynamic Type 등)에서 다국어 문구가 잘리지 않는지: 확인 필요.
- [ ] 스낵바가 3초 뒤 사라지므로, 중요한 행동은 스낵바에만 두지 않는다(구현 권장).
- [ ] 키보드·포커스 표시(웹 LDSG 컴포넌트): 확인 필요.

## 9. 글쓰기 톤
- 말투: 확인 필요. 공식 사이트에 "LINE Voice" 페이지가 있으나 이번 확인에서 내용을 읽지 못했다.
- 확인된 원칙: 모달 제목은 할 일을 분명히 적는다. 스낵바 제목은 1줄, 설명은 2줄 안으로 쓴다.
- 다국어(일본어·대만 중국어·태국어) 길이 차이를 고려해 글자 수 여유를 둔다.
- 버튼 문구 꼴: 확인 필요
- 숫자·단위 표기: 확인 필요

## 10. Do & Don't
### Do
- 브랜드 초록은 iOS·웹 #06c755, Android #4cc764로 나눠 쓴다.
- 글자는 Gray 500(#949494) 이상 단계로 쓴다.
- 비활성 버튼은 글자만 #111111의 40%(흰 글자면 흰색 40%)로 바꾼다.
- 화면과 카드 안 좌우 여백은 16pt로 둔다.
- 모달에는 Android에서도 닫기(X)를 둔다.
- 스낵바는 화면 바닥·하단 탭에서 16px 이상 띄우고 3초 뒤 사라지게 한다.
- 직접 그리는 아이콘은 24×24px 그리드, 선 1.3·1.5·1.8pt 중 하나로 그린다.
- 대화방 말풍선·입력창은 알약 모양, 날짜 표시는 바탕 위 검정 투명도로 만든다(추정 값, 관찰에서 정리).

### Don't
- 흰색·검정 밖의 색에 투명도를 주지 않는다.
- 검정 글자에 투명도를 쓰지 않는다(비활성·플레이스홀더 예외).
- 12pt보다 작은 글자를 쓰지 않는다.
- LINE Colors(무지개 15계열)를 핵심 UI 색으로 쓰지 않는다. 배너·스토리 같은 보조 요소에만 쓴다.
- 모달 안에 모달을 띄우지 않는다. 일반 화면을 먼저 검토한다.
- 컴포넌트 안 아이콘의 크기·선 두께를 바꾸지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: LDSG 웹 컴포넌트가 있다(패키지 이름 확인 필요). CSS 토큰 이름은 `ldsg-`로 시작한다(예: `ldsg-color-brand-primary`, `ldsg-opacity-black-85`).
- Figma 라이브러리: LDSG가 Figma 라이브러리를 제공한다(링크 확인 필요).
- 문서·Storybook: 공식 사이트 designsystem.line.me(LDSM·LDSG). Storybook은 공개 자료 없음.
- 버전·변경 관리: 공개 자료 없음
- 그 밖: LDSG에 언어 팩이 있다.

## 12. AI에 넣을 때
```
LINE 스타일로 모바일 화면을 디자인해 줘.
- 주색: LINE 초록 #06c755 (Android는 #4cc764), 버튼 파랑 #638dff
- 상단 바: iOS #202a43, Android #262f4a, 검색창 #323b54
- 글자: 본문 #111111, 보조 #555555~#777777, 가장 연한 글자 #949494
- 배경: #ffffff, 면 #f5f5f5 / #efefef
- 위험: #ff334b
- 글꼴: OS 시스템 글꼴, 본문 14–16pt, 12pt 미만 금지
- 여백: 화면 좌우 16pt, 카드 안 16pt. 그리드 2단 167/9, 3단 109/8, 4단 82/5
- 투명도: 흰색·검정만 5% 단위, 글자에는 쓰지 않기
- 비활성: 글자를 #111111의 40%로
- 모달은 아래에서 위로, 일반 화면은 옆에서. 시트 높이 50/70/98%
- (추정) 대화방: 바탕 #8cabd8, 내 말풍선 #79e278, 상대 #ffffff, 말풍선·입력창(#f5f5f5)은 알약, 날짜는 검정 15% 알약 + 흰 글자
- (추정) 바텀시트 위 모서리 약 9pt, 손잡이 #dedede. 버튼 모서리는 정하지 말고 비워 둔다
- 분위기: 무채색 바탕에 초록은 상징으로만, 다국어 길이에 여유
```

## 13. 참고 자료
- https://designsystem.line.me/ (확인 2026-10-31)
- https://designsystem.line.me/LDSM/foundation/color/line-color-guide-ex-en (확인 2026-10-31)
- https://designsystem.line.me/LDSM/foundation/typography-ex-en (확인 2026-10-31)
- https://designsystem.line.me/LDSM/foundation/layout-ex-en (확인 2026-10-31)
- https://designsystem.line.me/LDSM/foundation/iconography/iconography-ex-en/ (확인 2026-10-31)
- https://designsystem.line.me/LDSM/ux/modal-ex-en (확인 2026-10-31)
- https://designsystem.line.me/LDSM/ux/selection-ex-en (확인 2026-10-31)
- https://designsystem.line.me/LDSG (확인 2026-10-31)
- https://designsystem.line.me/LDSG/foundation/typography-en (확인 2026-10-31)
- https://designsystem.line.me/LDSG/components/navigations/tab-en (확인 2026-10-31)
- https://designsystem.line.me/LDSG/components/overlays/snackbar-en (확인 2026-10-31)
- LINE App Store 앱 페이지 소개 스크린샷 6장(대화 2, 결제, 영상통화, 카메라, 글자 인식): https://apps.apple.com/kr/app/id443904275 (확인 2026-11-01)

근거와 한계
- 다크 모드 HEX, 컴포넌트 모서리·그림자, 행간, 간격 단계, 상태 색(성공·경고·정보)은 공개 문서에서 찾지 못했다.
- 굵기 숫자는 문서의 굵기 이름을 숫자로 옮긴 것이다.
- App Store 이미지는 홍보용으로 편집되었다(첫 장의 내 말풍선은 다른 장보다 크게 키워져 있다). 여기서 읽은 값은 모두 `추정`이고, 크기는 폰 화면 폭 약 261px를 375pt로 보고 환산했다. 채움 버튼은 이미지에 없어 버튼 모서리·높이는 여전히 확인 필요다.
- 서비스 이름과 브랜드는 LY Corporation의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 공개 자료를 읽고 직접 작성했다.

## 부록 A. 구현 매핑
공개 문서에 나온 LDSG 토큰 이름만 적는다. 나머지 CSS 변수 이름과 패키지 이름은 확인 필요.

| DESIGN.md | LDSG 토큰 |
|---|---|
| 스낵바 버튼 글자(브랜드 주색) | `ldsg-color-brand-primary` (HEX 확인 필요) |
| `opacity.snackbar-bg` | `ldsg-opacity-black-85` |
| `typography.*` 굵기 | LDSG CSS 토큰은 굵기를 100·200·300으로 적는다(대응 관계 확인 필요) |

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**(designsystem.line.me, 확인 2026-10-31): 모든 HEX(OS별 초록, Gray 19단계, Navy·Blue 단계, Red, LINE Colors 15계열 600값), 투명도 규칙(5% 단위, 70/40/15/10%, 비활성 40%, 스낵바 85%), 글자 크기·굵기 이름, 12pt 하한, 그리드(167/9, 109/8, 82/5, 바깥 16), 탭 S 8·M 12·밑줄 1·2px·항목 2–4개·호버 70%·눌림 50%, 시트 높이(100%, 0–98%, 50·70·98%), X 버튼 위치 규칙, 스낵바 16px·3초(4–10초), 아이콘 24/20px·선 1.3/1.5/1.8pt·모서리 0–2px·45°/15°.
- **화면에서 잰 값(관찰)**: 직접 기기 실측은 없음.
- **App Store 이미지에서 읽은 값(추정)**: 대화방 바탕 #8cabd8, 내 말풍선 #79e278, 날짜 알약 #7791b7(검정 약 15%), 입력창·묶음 띠 #f5f5f5, 시트 손잡이 #dedede, 초록 링크 글자 #16b947 근처, 말풍선 높이 약 33pt, 입력창 약 34pt, 날짜 알약 약 23pt, 시트 위 모서리 약 9pt, 손잡이 약 48 × 3pt.
- **SylviaLab이 정리·권장한 것**: semantic 색 이름(`text-primary`, `action-primary` 등), 굵기 이름 → 숫자 변환(Heavy 800 등), WCAG 대비 계산값, 기준 화면 375pt(그리드 합으로 추정), 컴포넌트 표의 묶음, 스낵바 예시 문구, `(구현 권장)`이 붙은 접근성 항목, 각 장의 Don't.
