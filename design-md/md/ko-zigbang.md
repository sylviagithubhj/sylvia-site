---
version: "1.0"
name: "직방"
description: "공개 Storybook(ZUIX)에 버튼 6크기×9테마와 비활성 규칙까지 코드로 정해 두고, 주황 #ff6905를 행동·선택에만 쓰며 모서리를 4px로 단단히 맞춘 부동산 화면"
source:
  - "https://zuix2.zigbang.io/ (ZUIX2 Storybook 스토리·스타일 코드, Color 열거형)"
  - "https://www.zigbang.com/ , https://www.zigbang.com/home/oneroom/map (computed style 실측, 2026-10-31)"
updated: "2026-10-31"

# 단위: 원본 px. 이름 중 orange1·gray10 같은 팔레트 이름은 ZUIX Color 열거형 이름이고,
# 역할 이름(text-primary 등)은 SylviaLab이 붙인 것이다.

# ─────────────────────────────────────────────
# 1. 색 — ZUIX 팔레트(primitive) → 역할(semantic)
# ─────────────────────────────────────────────
colors:
  orange1: "#ff6905"
  orange2: "#fff7f0"
  orange3: "#ffe8d9"
  navy1: "#092c59"
  navy2: "#e4ebf2"
  navy3: "#bccce0"
  navy4: "#f5f7fa"
  white: "#ffffff"
  gray99: "#fcfcfc"
  gray97: "#f7f7f7"
  gray95: "#f2f2f2"
  gray90: "#e6e6e6"
  gray80: "#cccccc"
  gray70: "#b3b3b3"
  gray50: "#808080"
  gray40: "#666666"
  gray30: "#4d4d4d"
  gray10: "#1a1a1a"
  green1: "#0ba04b"
  green2: "#e6f5ed"
  red1: "#fa4e3e"
  red2: "#ffeceb"
  blue1: "#3798fa"
  blue2: "#ebf5ff"
  gray-opacity-08: "#1a1a1a14"   # rgba(26,26,26,.08) 사진 테두리
  gray-opacity-16: "#1a1a1a29"   # rgba(26,26,26,.16) 상단 바 아래 선

  # ── 역할 (화면에서는 이 이름을 쓴다) ──
  primary: "{colors.orange1}"            # 주 버튼, 선택 표시
  on-primary: "{colors.white}"
  primary-weak: "{colors.orange2}"
  primary-disabled: "{colors.orange3}"   # 큰 주 버튼 비활성 배경
  surface: "{colors.white}"
  surface-weak: "{colors.gray97}"        # 검색창, 작은 버튼 비활성
  surface-disabled-input: "{colors.gray95}"
  text-primary: "{colors.gray10}"
  text-secondary: "{colors.gray40}"
  text-tertiary: "{colors.gray50}"       # 주소, 매물 설명
  text-disabled: "{colors.gray80}"
  border: "{colors.gray90}"
  border-strong: "{colors.gray70}"
  border-focus: "{colors.gray10}"
  divider: "{colors.gray95}"
  snackbar: "{colors.gray30}"
  success: "{colors.green1}"
  success-weak: "{colors.green2}"
  danger: "{colors.red1}"
  danger-weak: "{colors.red2}"
  info: "{colors.blue1}"
  info-weak: "{colors.blue2}"
  navy: "{colors.navy1}"

# ─────────────────────────────────────────────
# 2. 타이포그래피 (ZUIX Text, 크기/행간 px)
# ─────────────────────────────────────────────
typography:
  font-family: "Pretendard"
  font-weight-regular: 400
  font-weight-medium: 500
  font-weight-bold: 700
  max-font-size-multiplier: 1.5   # 버튼 글자는 확대하지 않음
  size-26: { fontSize: "26px", lineHeight: "40px", fontWeight: 700 }
  size-24: { fontSize: "24px", lineHeight: "36px", fontWeight: 700 }
  size-22: { fontSize: "22px", lineHeight: "32px", fontWeight: 700 }
  size-20: { fontSize: "20px", lineHeight: "30px", fontWeight: 700 }
  size-18: { fontSize: "18px", lineHeight: "28px", fontWeight: 700 }   # 매물 가격
  size-16: { fontSize: "16px", lineHeight: "24px", fontWeight: 700 }   # 48·44 버튼
  size-14: { fontSize: "14px", lineHeight: "20px", fontWeight: 400 }   # 매물 정보 줄
  size-13: { fontSize: "13px", lineHeight: "18px", fontWeight: 500 }   # 32px 칩
  size-12: { fontSize: "12px", lineHeight: "16px", fontWeight: 500 }
  size-11: { fontSize: "11px", lineHeight: "14px", fontWeight: 500 }   # Text 기본값, 태그
  size-10: { fontSize: "10px", lineHeight: "12px", fontWeight: 500 }
  size-8: { fontSize: "8px", lineHeight: "10px", fontWeight: 500 }

# ─────────────────────────────────────────────
# 3. 간격·크기
# ─────────────────────────────────────────────
spacing:
  xxs: "2px"
  xs: "4px"
  x6: "6px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"           # 화면 좌우, 하단 CTA·스낵바 바깥
  section-gap: "12px"  # 구역 구분 면 높이

size:
  button-48: "48px"
  button-44: "44px"    # 기본
  button-40: "40px"
  button-32: "32px"
  button-28: "28px"
  button-24: "24px"
  search-bar: "40px"
  chip-32: "32px"
  chip-36: "36px"
  top-bar: "52px"
  tab: "52px"
  bottom-navigation: "68px"
  thumbnail-list: "104px"
  sheet-handle-width: "34px"
  sheet-handle-height: "4px"

rounded:
  sm: "4px"            # 버튼 전부, 입력, 검색창, 스낵바, 썸네일, 배지
  sheet: "12px"        # 바텀시트 위쪽
  chip-32: "16px"
  chip-36: "20px"      # 태그 기본

border-width:
  hairline: "0.5px"    # 상단 바·검색 바 아래
  regular: "1px"
  strong: "1.4px"      # 진한 외곽선 버튼, 선택 칩
  focus: "1.5px"       # 입력 포커스(여백 0.5px 감소)

layout:
  web-min-width: "1440px"   # --web-min-width
  page-margin-mobile: "20px"
  snackbar-max-width: "400px"

shadow:
  level1: "0 1px 4px rgba(26,26,26,.2)"
  level2: "0 4px 8px rgba(26,26,26,.06)"
  level3: "0 6px 12px rgba(26,26,26,.12)"
  level4: "0 8px 20px rgba(26,26,26,.10)"

motion:
  dialog-fullscreen: "300ms"   # 들어올 때 ease-in, 나갈 때 ease-out

# ─────────────────────────────────────────────
# 4. 컴포넌트 토큰
# ─────────────────────────────────────────────
components:
  button-48: { height: "{size.button-48}", paddingY: "9px", paddingX: "16px", rounded: "{rounded.sm}", typography: "{typography.size-16}" }
  button-44: { height: "{size.button-44}", paddingY: "9px", paddingX: "15px", rounded: "{rounded.sm}", typography: "{typography.size-16}" }
  button-40: { height: "{size.button-40}", paddingY: "9px", paddingX: "15px", rounded: "{rounded.sm}", typography: "{typography.size-14}" }
  button-32: { height: "{size.button-32}", paddingY: "6px", paddingX: "11px", rounded: "{rounded.sm}", typography: "{typography.size-14}" }
  button-28: { height: "{size.button-28}", paddingY: "4px", paddingX: "7px", rounded: "{rounded.sm}", typography: "{typography.size-13}" }
  button-24: { height: "{size.button-24}", paddingY: "3px", paddingX: "5px", rounded: "{rounded.sm}", typography: "{typography.size-12}" }

  button-primary: { backgroundColor: "{colors.primary}", textColor: "{colors.on-primary}" }
  button-primary-disabled-large: { backgroundColor: "{colors.primary-disabled}", textColor: "{colors.white}" }   # 48·44·40
  button-primary-disabled-small: { backgroundColor: "{colors.surface-weak}", textColor: "{colors.text-disabled}" } # 32·28·24
  button-line-gray10: { backgroundColor: "{colors.white}", textColor: "{colors.gray10}", borderColor: "{colors.gray10}", borderWidth: "1.4px" }
  button-line-gray30: { backgroundColor: "{colors.white}", textColor: "{colors.gray10}", borderColor: "{colors.gray30}", borderWidth: "1px" }
  button-line-gray90: { backgroundColor: "{colors.white}", textColor: "{colors.gray10}", borderColor: "{colors.gray90}", borderWidth: "1px" }
  button-line-gray-disabled: { backgroundColor: "{colors.gray97}", textColor: "{colors.gray80}", borderColor: "{colors.gray90}" }
  button-line-orange: { backgroundColor: "{colors.white}", textColor: "{colors.orange1}", borderColor: "{colors.orange1}", borderWidth: "1.4px" }
  button-line-orange-disabled: { backgroundColor: "{colors.white}", textColor: "{colors.orange3}", borderColor: "{colors.orange3}" }
  button-orange2: { backgroundColor: "{colors.orange2}", textColor: "{colors.orange1}", borderColor: "{colors.orange1}", borderWidth: "1.4px" }
  button-red1: { backgroundColor: "{colors.red1}", textColor: "{colors.white}" }
  button-red1-disabled-large: { backgroundColor: "{colors.red2}" }
  button-gray30: { backgroundColor: "{colors.gray30}", textColor: "{colors.white}" }

  text-field: { backgroundColor: "{colors.surface}", textColor: "{colors.text-primary}", borderColor: "{colors.border}", rounded: "{rounded.sm}", paddingY: "9px", paddingX: "11px" }
  text-field-focused: { borderColor: "{colors.border-focus}", borderWidth: "1.5px" }
  text-field-error: { borderColor: "{colors.danger}" }
  text-field-disabled: { backgroundColor: "{colors.surface-disabled-input}" }
  search-bar: { backgroundColor: "{colors.surface-weak}", rounded: "{rounded.sm}", height: "{size.search-bar}" }

  chip-32: { height: "{size.chip-32}", paddingX: "12px", rounded: "{rounded.chip-32}", typography: "{typography.size-13}" }
  chip-36: { height: "{size.chip-36}", paddingX: "16px", rounded: "{rounded.chip-36}", typography: "{typography.size-14}" }
  chip-selected: { borderColor: "{colors.primary}", borderWidth: "1.4px", textColor: "{colors.primary}" }
  chip-36-selected-filled: { backgroundColor: "{colors.gray30}", textColor: "{colors.white}" }
  tag-large: { paddingY: "6px", paddingX: "12px", typography: "{typography.size-13}", rounded: "{rounded.chip-36}" }
  tag-medium: { paddingY: "4px", paddingX: "8px", typography: "{typography.size-12}", rounded: "{rounded.chip-36}" }
  tag-small: { paddingY: "2px", paddingX: "6px", typography: "{typography.size-11}", rounded: "{rounded.chip-36}" }
  tag-xsmall: { paddingY: "2px", paddingX: "4px", typography: "{typography.size-10}", rounded: "{rounded.chip-36}" }
  tag-recommend: { backgroundColor: "{colors.success-weak}", textColor: "{colors.success}" }
  tab: { height: "{size.tab}", indicatorColor: "{colors.primary}", indicatorHeight: "2px", dividerColor: "{colors.divider}" }

  snackbar: { backgroundColor: "{colors.snackbar}", textColor: "{colors.white}", actionColor: "{colors.primary}", rounded: "{rounded.sm}", padding: "12px", maxWidth: "{layout.snackbar-max-width}" }
  bottom-sheet: { backgroundColor: "{colors.surface}", rounded: "{rounded.sheet}", handleColor: "{colors.gray80}" }
  top-bar: { backgroundColor: "{colors.surface}", height: "{size.top-bar}", paddingX: "12px", dividerColor: "{colors.gray-opacity-16}" }
  bottom-navigation: { backgroundColor: "{colors.surface}", height: "{size.bottom-navigation}" }
  thumbnail: { rounded: "{rounded.sm}", borderColor: "{colors.gray-opacity-08}" }
---

# 직방 디자인 시스템

> 근거: 공개 문서 기반 + 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 데스크톱 폭. 직방이 공개 주소로 띄워 둔 ZUIX2 Storybook의 컴포넌트 코드에서 토큰 값을 읽고, zigbang.com 화면 computed style과 대조함. 작업 컨테이너의 셸은 이 사이트에 접속하지 못하고 WebFetch는 robots 규칙으로 막혀 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다.

## 1. 개요와 원칙
- 서비스 성격: 원룸·빌라·오피스텔·아파트 매물을 지도와 목록으로 찾는 부동산 서비스. 앱이 중심이고 웹(zigbang.com)은 지도 검색과 소개 화면을 둔다.
- 디자인 인상 한 줄: 흰 바탕과 #1a1a1a 글자에 주황(#ff6905) 하나를 주 버튼·선택 색으로 쓰고, 모서리 4px로 단단하게 맞춘 화면.
- 공식 시스템 이름: ZUIX(Storybook 주소는 zuix2.zigbang.io, 소스 경로는 packages/zuix). React Native와 웹을 함께 겨냥한 컴포넌트 라이브러리다. 토큰 설명 문서는 따로 없고, 컴포넌트 스토리와 그 안의 스타일 코드가 공개되어 있다.
- 디자인 원칙: 공식 원칙 문장은 공개되지 않았다. 아래는 코드·화면 사실에서 정리했다.
  1. 주황 #ff6905는 주 버튼과 선택 표시(칩 테두리·글자, 탭 밑줄, 스낵바 버튼)에만 쓴다. (관찰에서 정리)
  2. 버튼·입력·검색창·썸네일·스낵바는 모서리 4px 하나로 맞추고, 둥근 모양은 칩·태그(16~20px)에만 쓴다. (관찰에서 정리)
  3. 상태 색은 "연한 배경 + 같은 계열 진한 글자" 짝으로 쓴다(orange2+orange1, green2+green1 등). (관찰에서 정리)
  4. 테두리 두께를 바꿔도 크기가 변하지 않게 안쪽 여백을 줄인다(버튼 15·11·7·5, 포커스 1.5px에 여백 0.5px 감소). (관찰에서 정리)
  5. 글자 확대는 따르되 최대 1.5배로 묶는다. (관찰에서 정리)
- 톤: 각지고 단정하게. 매물 정보는 짧은 명사구로 빽빽하게.

### 특장점
- 버튼 규칙이 코드로 다 정해져 있다 — 높이 6단계(48·44·40·32·28·24)와 테마 9종(primary, lineGray10·30·90, lineOrange, orange2, red1, grayOpacity08, gray30)마다 배경·글자·테두리·비활성 값이 ZUIX Storybook 코드에 있다.
- 비활성도 크기에 따라 다르다 — 큰 주 버튼(48·44·40)은 비활성일 때 #ffe8d9 배경에 흰 글자로 주황 계열을 유지하고, 작은 버튼은 #f7f7f7 배경 #cccccc 글자로 바뀐다.
- 모서리가 4px 하나로 단단하다 — 버튼 전부, 입력창, 검색창, 스낵바, 썸네일, 배지가 4px이다. 같은 모음의 당근이 버튼을 8px(large 12px)로 둥글리는 것과 대비된다.
- 크기가 흔들리지 않는 테두리 — 입력 포커스는 테두리를 1.5px #1a1a1a로 굵히면서 여백을 0.5px씩 줄이고, 버튼 안쪽 여백도 테두리 1px을 뺀 15·11·7·5px을 쓴다.
- 플랫폼별 그림자 표 — 그림자 4단계(level1~4)를 웹(boxShadow), iOS, Android(elevation) 값으로 나란히 적어 둔다.

### 배울 점
- 버튼 비활성을 정할 때 직방처럼 큰 주 버튼은 주색의 연한 단계(#ffe8d9)로, 작은 버튼은 회색으로 나눠 큰 CTA가 화면에서 사라지지 않게 한다.
- 포커스·선택으로 테두리가 굵어질 때 그만큼 안쪽 여백을 줄여 레이아웃이 밀리지 않게 한다.
- 태그·배지 색은 "연한 배경 + 같은 계열 진한 글자" 짝으로만 정의한다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 YAML 역할 이름(`primary`, `text-primary`, `border`)으로 쓰고, 정의에는 ZUIX 팔레트 이름(`orange1`, `gray10`)을 쓴다. 새 HEX를 만들지 않는다.
- 주황 `primary`(#ff6905)는 주 버튼과 선택 표시(칩 테두리·글자, 탭 밑줄, 스낵바 버튼 글자)에만 쓴다.
- 버튼은 6크기(48·44·40·32·28·24) 중 하나, 모서리는 항상 4px. 비활성 모양은 크기(40 이상/32 이하)로 갈린다.
- 테두리가 굵어지는 상태(포커스 1.5px, 선택 1.4px)는 안쪽 여백을 그만큼 줄여 크기를 유지한다.
- 판단이 어려우면 더 각지고(4px), 더 무채색이며, 그림자가 얕은 쪽(level1~2)을 고른다.

## 2. 색상
아래 HEX는 ZUIX Storybook이 불러오는 스타일 코드의 `Color` 열거형에서 읽었다. 웹 실측과 맞은 값은 "웹 확인"으로 표시했다. 다크 모드 토큰은 찾지 못했다(확인 필요).

### 색 체계
ZUIX 코드의 `Color` 열거형이 **팔레트 층**이다. 역할 이름은 공식 코드에 따로 없어서 SylviaLab이 쓰임을 보고 붙였다(YAML 아래쪽).

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| 팔레트(공식 이름) | `orange1`, `gray10`, `gray90`, `green1` | 컴포넌트 스타일 코드 |
| 역할(SylviaLab 이름) | `primary`, `text-primary`, `border`, `success-weak` | 이 문서와 새 화면 |

- 팔레트 이름 규칙: 유채색은 `색이름 + 번호`(1이 진함, 2·3이 연함), 회색은 `gray + 명도`(10이 가장 진하고 99가 가장 옅음).
- 반투명은 `grayOpacity05~80`, `whiteOpacity04`처럼 불투명도를 이름에 넣는다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| orange1 | #ff6905 | 주 버튼(primary) 배경, 선택 칩 테두리·글자, 탭 밑줄, 스낵바 버튼 글자. 웹 확인 |
| orange2 | #fff7f0 | 연한 주황 버튼·칩·태그 배경 |
| orange3 | #ffe8d9 | 큰 주 버튼의 비활성 배경, 주황 외곽선 비활성 테두리 |
| navy1 | #092c59 | 진한 남색 태그·글자. 웹 확인 |
| navy2 | #e4ebf2 | 남색 계열 연한 면 |
| navy3 | #bccce0 | 남색 계열 연한 면 |
| navy4 | #f5f7fa | 남색 계열 연한 면 |

웹 지도 화면 상단 메뉴의 선택 글자는 #ff681b였다. 토큰 orange1과 아주 조금 다른 값이다.

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| white | #ffffff | 페이지·카드 배경 |
| gray99 | #fcfcfc | 가장 옅은 면 |
| gray97 | #f7f7f7 | 비활성 버튼 배경, 검색창 배경 |
| gray95 | #f2f2f2 | 구분선, 탭 아래 선, 비활성 입력 배경. 웹 확인 |
| gray90 | #e6e6e6 | 기본 테두리(입력창, 회색 외곽선 버튼·칩). 웹 확인 |
| gray70 | #b3b3b3 | 약한 테두리 |
| gray30 | #4d4d4d | 스낵바 배경, 선택된 36px 칩 배경 |
| grayOpacity05 | rgba(26,26,26,.05) | 옅은 반투명 면 |
| grayOpacity08 | rgba(26,26,26,.08) | 사진 테두리 |
| grayOpacity16 | rgba(26,26,26,.16) | 상단 바 아래 0.5px 선 |
| grayOpacity60 | rgba(26,26,26,.6) | 사진 위 어두운 면 |
| grayOpacity80 | rgba(26,26,26,.8) | 사진 위 어두운 면 |
| whiteOpacity04 | rgba(255,255,255,.4) | 진한 면 위 흰 반투명 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray10 | #1a1a1a | 기본 글자, 진한 외곽선 버튼 테두리, 입력 포커스 테두리. 웹 확인 |
| gray40 | #666666 | 보조 글자 |
| gray50 | #808080 | 흐린 글자(주소, 매물 설명). 웹 확인 |
| gray80 | #cccccc | 비활성 글자, 바텀시트 손잡이 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| green1 | #0ba04b | success. 웹 매물 목록의 "추천" 태그 글자. 웹 확인 |
| green2 | #e6f5ed | success 연한 배경("추천" 태그 바탕). 웹 확인 |
| red1 | #fa4e3e | error. 입력 오류 테두리, 빨강 버튼 |
| red2 | #ffeceb | error 연한 배경 |
| blue1 | #3798fa | info |
| blue2 | #ebf5ff | info 연한 배경 |

- warning: 확인 필요(별도 경고 토큰은 찾지 못함).

### 그 밖의 색 토큰
| 토큰 | HEX | 쓰임 |
|---|---|---|
| blue3 | #025fd2 | 확인 필요 |
| blue4 | #1c75bc | 확인 필요 |
| blue5 | #1a71d3 | 확인 필요 |
| green3 | #009d41 | 확인 필요 |
| green4 | #f0f6f2 | 확인 필요 |
| green5 | #3ab54b | 확인 필요 |
| green6 | #55baa6 | 확인 필요 |
| purple1 | #584de4 | 확인 필요 |
| purple2 | #eeedfc | 확인 필요 |
| badge-pink1 | #ff20a6 | Badge pink1 글자·아이콘 |
| badge-pink1-bg | #fff5fb | Badge pink1 배경 |
| badge-blue1 | #0651f1 | Badge blue1 글자·아이콘 |
| badge-blue1-bg | #f0f7ff | Badge blue1 배경 |

### 역할별 색
- **주황 orange1 #ff6905**: 주 버튼 배경, 선택 칩 테두리·글자, 탭 밑줄 2px, 스낵바 버튼 글자. 연한 면 orange2 #fff7f0, 비활성 orange3 #ffe8d9. 눌림 색은 확인 필요.
- **진한 회색 gray10 #1a1a1a**: 기본 글자, 진한 외곽선 버튼 테두리(1.4px), 입력 포커스 테두리(1.5px).
- **회색 면·선**: 검색창·작은 비활성 #f7f7f7, 구분선·비활성 입력 #f2f2f2, 기본 테두리 #e6e6e6.
- **스낵바 gray30 #4d4d4d**: 스낵바 배경과 36px 선택 칩 배경. 위 글자는 흰색, 행동 글자는 주황.
- **상태 짝**: 배경은 `2`번, 글자는 `1`번. 성공 #e6f5ed + #0ba04b, 오류 #ffeceb + #fa4e3e, 정보 #ebf5ff + #3798fa, 주황 #fff7f0 + #ff6905.

### 색 사용 규칙
- orange1은 주 버튼 배경, 선택 칩 테두리·글자, 탭 밑줄, 스낵바 버튼 글자에만 쓴다.
- 태그는 연한 배경 + 같은 계열 진한 글자 짝으로 쓴다(orange2+orange1, blue2+blue1, red2+red1, green2+green1).
- red1은 입력 오류 테두리와 빨강(위험) 버튼에 쓴다.
- 비활성은 #f7f7f7 배경 + #cccccc 글자 + #e6e6e6 테두리. 큰 주 버튼(48·44·40)만 #ffe8d9 배경 흰 글자.
- 사진 둘레는 rgba(26,26,26,.08) 1px, 상단 바·검색 바 아래는 rgba(26,26,26,.16) 0.5px.

### Don't
- 한 화면에 주황 채운 버튼(primary)을 두 개 이상 두지 않는다. 두 번째 행동은 lineGray 계열로.
- 상태 태그를 진한 배경 + 흰 글자로 만들지 않는다. 연한 배경(`2`) + 진한 글자(`1`) 짝이다.
- 용도가 확인되지 않은 색(blue3~5, green3~6, purple1·2)을 새 화면에 쓰지 않는다.
- 웹에서 본 #ff681b를 주황 토큰으로 쓰지 않는다. 토큰은 #ff6905다.
- 오류를 빨강 테두리만으로 알리지 않는다. 오류 문구를 함께 둔다. (구현 권장)

## 3. 타이포그래피
- 글꼴: Pretendard(ZUIX Text 컴포넌트 기본, zuix2.zigbang.io에서 subset 파일을 제공). SIL Open Font License 1.1 무료 글꼴. 웹 소개·지도 화면 일부는 아직 Spoqa Han Sans(SpoqaHanSans)를 쓴다.
- 대체 글꼴: 확인 필요(Text 컴포넌트는 fontFamily "Pretendard"만 지정).
- 굵기: regular 400, medium 500, bold 700 세 단계만 둔다. 아래 모든 단계에 세 굵기를 쓸 수 있다(표 굵기 칸은 쓰임에 맞는 대표값). Text 기본값은 11px·medium·gray10.
- 원본 단위는 px이고, 아래 표는 1px = 1pt로 적었다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| 26 | 26 | 700 | 40px | 가장 큰 제목 |
| 24 | 24 | 700 | 36px | 큰 제목 |
| 22 | 22 | 700 | 32px | 화면 제목 |
| 20 | 20 | 700 | 30px | 섹션 제목 |
| 18 | 18 | 700 | 28px | 매물 가격(700). 웹 확인 |
| 16 | 16 | 700 | 24px | 48·44px 버튼 글자(700), 리스트 제목 |
| 14 | 14 | 400 | 20px | 40·32px 버튼, 36px 칩, 매물 정보 줄. 웹 확인 |
| 13 | 13 | 500 | 18px | 28px 버튼, 32px 칩, large 태그 |
| 12 | 12 | 500 | 16px | 24px 버튼, medium 태그 |
| 11 | 11 | 500 | 14px | small 태그, 배지 글자. 웹 확인 |
| 10 | 10 | 500 | 12px | xsmall 태그 |
| 8 | 8 | 500 | 10px | 아주 작은 표시 |

### 위계와 사용처
| 층 | 단계 | 크기/행간 | 굵기 | 사용처 |
|---|---|---|---|---|
| 화면 제목 | 22 | 22/32px | 700 | 화면 제목 |
| 섹션 제목 | 20 | 20/30px | 700 | 섹션 머리 |
| 가격 | 18 | 18/28px | 700 | 매물 가격 |
| 큰 버튼·리스트 제목 | 16 | 16/24px | 700 | 48·44 버튼, ListItem 제목 |
| 본문·정보 줄 | 14 | 14/20px | 400(관리비 700) | 매물 정보, 40·32 버튼, 36px 칩 |
| 작은 버튼·칩 | 13 / 12 | 13/18 · 12/16px | 500 | 28·24 버튼, 32px 칩, 태그 |
| 태그·배지 | 11 / 10 | 11/14 · 10/12px | 500 | small·xsmall 태그, 배지 |

### 규칙
- 행간은 대부분 크기 × 1.5 안팎이고 짝수 px로 맞춘다.
- 사용자 글자 크기 설정을 따르되 최대 1.5배까지만 키운다(maxFontSizeMultiplier 1.5). 버튼 글자는 확대하지 않는다.
- 48·44 버튼과 lineGray10·gray30 테마 버튼 글자는 bold, 나머지 버튼은 medium.
- 매물 목록은 가격 18px/700 → 관리비 14px/700 → 방 정보 14px/400 → 위치·설명 14px #808080 순서로 쓴다.

### Don't
- 400·500·700 밖의 굵기를 쓰지 않는다.
- 홀수 px 행간을 만들지 않는다. 표의 짝수 행간을 쓴다.
- 글자 확대를 1.5배보다 크게 열지 않는다. 버튼 글자는 확대하지 않는다.
- 매물 가격을 18px보다 작게, 또는 400 굵기로 쓰지 않는다.
- 새 웹 화면에 Spoqa Han Sans를 쓰지 않는다. ZUIX 기본은 Pretendard다.

## 4. 레이아웃·간격
- 기준 화면: 모바일 컴포넌트(React Native) + 데스크톱 웹.
- 화면 좌우 여백: 모바일 컴포넌트 기준 20px(탭 콘텐츠, 하단 CTA, 스낵바 바깥 여백, 구분선 여백). 데스크톱 웹은 최소 폭 1440px(`--web-min-width`).
- 기본 단위: 4px. 컴포넌트 코드에 4, 8, 12, 16, 20이 반복된다. 버튼 안쪽 여백은 테두리 1px을 뺀 15·11·7·5 같은 값을 쓴다.
- 간격 단계(pt): 2, 4, 6, 8, 12, 16, 20
- 그리드·최대 폭: 확인 필요. 웹 지도 화면 목록은 한 줄 카드에 왼쪽 글자, 오른쪽 104×104 사진.

### 그리드와 폭
| 구분 | 값 |
|---|---|
| 모바일 화면 좌우 | 20px |
| 데스크톱 웹 최소 폭 | 1440px (`--web-min-width`) |
| 웹 매물 목록 | 한 줄 카드, 오른쪽 사진 104×104 |
| 스낵바 최대 폭 | 400px |
| 컬럼·중단점 | 확인 필요 |

### 화면 세로 리듬
| 구간 | 값 |
|---|---|
| 상단 바 | 52px, 아래 여백 6px, 0.5px 선 |
| 탭 줄 | 52px, 아래 1px #f2f2f2 |
| 구역 → 구역 | 높이 12px 면 |
| 항목 → 항목 | 1px #f2f2f2 선 |
| 하단 CTA 바깥 | 위아래 12px · 좌우 20px |
| 버튼 두 개 세로 | 8px |
| 하단 탭 바 | 68px |

### 안쪽 여백
| 요소 | 값 |
|---|---|
| 버튼 44 | 위아래 9 · 좌우 15px(테두리 1px 뺀 값) |
| 입력창 | 9 · 11px (큰 것 위아래 12px) |
| 스낵바 | 12px |
| 탭 하나 | 위 16 · 좌우와 아래 12px |
| 썸네일 글자 영역 | 좌우 12px |

### 간격 적용 규칙
- 화면 좌우와 하단 CTA·스낵바 바깥 여백은 20px.
- 리스트 항목의 왼쪽·오른쪽 요소와 글자 사이는 12px.
- 구역 구분은 높이 12px 면, 항목 구분은 1px #f2f2f2 선.
- 버튼 두 개는 세로 간격 8px 또는 가로(5:5, 1:2, 2:1)로 둔다.

### Don't
- 4px 눈금 밖의 간격(3·5·7px)을 새로 만들지 않는다. 15·11·7·5px은 테두리 1px을 뺀 버튼 안쪽 여백에만.
- 구역 구분에 굵은 선을 쓰지 않는다. 높이 12px 면이다.
- 하단 버튼 두 개를 5:5·1:2·2:1 말고 다른 비율로 나누지 않는다.
- 스낵바를 400px보다 넓게 늘이지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-4 | 4px | 기본. 버튼 전부, 입력창, 검색창, 스낵바, 썸네일, 배지. 웹에서 가장 많은 값 |
| radius-12 | 12px | 바텀시트 위쪽 두 모서리 |
| radius-16 | 16px | 32px 칩 |
| radius-20 | 20px | 36px 칩, 태그 기본값 |

- 테두리·선
  - border: 1px #e6e6e6 — 입력창·회색 외곽선
  - border-strong: 1.4px — 진한 외곽선 버튼·선택 칩
  - image-border: 1px rgba(26,26,26,.08) — 사진 둘레. 웹 확인
  - hairline: 0.5px rgba(26,26,26,.16) — 상단 바·검색 바 아래 선
### 고도
- 고도(그림자·층): Storybook 그림자 문서는 웹(boxShadow), iOS, Android(elevation) 값을 나란히 적어 둔다.
  - level1: 0 1px 4px rgba(26,26,26,.2) — 가장 얕은 그림자
  - level2: 0 4px 8px rgba(26,26,26,.06) — 카드
  - level3: 0 6px 12px rgba(26,26,26,.12) — 떠 있는 패널
  - level4: 0 8px 20px rgba(26,26,26,.10) — 가장 높은 층. 웹 소개 화면에서 확인
- 층 쓰임: 목록·입력은 그림자 없이 선(#e6e6e6, #f2f2f2)으로, 카드는 level2, 떠 있는 패널은 level3, 가장 높은 층은 level4. 바텀시트는 흰 면 + 위 모서리 12px.

### 모션
- 모션(길이·이징): 전체 화면 Dialog 300ms, 들어올 때 ease-in·나갈 때 ease-out. 그 밖은 확인 필요.
- 눌림: Pressable의 feedback이 기본으로 켜져 있다. 값은 확인 필요.

### Don't
- 버튼·입력창·썸네일에 4px 밖의 모서리를 쓰지 않는다.
- 리스트 항목마다 그림자를 넣지 않는다. 구분은 1px 선이다.
- level4 그림자를 작은 카드에 쓰지 않는다.
- 상단 바 아래 선을 1px 진한 회색으로 바꾸지 않는다(0.5px 반투명).

## 6. 컴포넌트
컴포넌트마다 변형, 상태, 쓰는 때, 쓰지 않는 때를 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
크기는 6단계, 모서리는 모두 4px.

| 크기 | 최소 높이 | 위아래 / 좌우 여백 | 글자 |
|---|---|---|---|
| 48 | 48 | 9 / 16 | 16px bold |
| 44(기본) | 44 | 9 / 15 | 16px bold |
| 40 | 40 | 9 / 15 | 14px |
| 32 | 32 | 6 / 11 | 14px |
| 28 | 28 | 4 / 7 | 13px |
| 24 | 24 | 3 / 5 | 12px |

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| primary | #ff6905 배경 / #ffffff 글자 / 테두리 없음. 비활성: 48·44·40은 #ffe8d9 배경 흰 글자, 그보다 작으면 #f7f7f7 배경 #cccccc 글자 | 화면의 주 행동 |
| lineGray10 | #ffffff / #1a1a1a / 1.4px #1a1a1a. 비활성 #f7f7f7 / #cccccc / #e6e6e6 | 강한 보조 행동 |
| lineGray30 | #ffffff / #1a1a1a / 1px #4d4d4d. 비활성 #f7f7f7 / #cccccc / #e6e6e6 | 보조 행동 |
| lineGray90 | #ffffff / #1a1a1a / 1px #e6e6e6. 비활성 #f7f7f7 / #cccccc / #f2f2f2 | 가벼운 보조 행동 |
| lineOrange | #ffffff / #ff6905 / 1.4px #ff6905. 비활성 #ffffff / #ffe8d9 / #ffe8d9 | 주황 외곽선 강조 |
| orange2 | #fff7f0 / #ff6905 / 1.4px #ff6905. 비활성 글자·테두리 #ffe8d9 | 연한 주황 강조 |
| red1 | #fa4e3e / #ffffff. 큰 크기 비활성 #ffeceb 배경 | 위험 행동 |
| grayOpacity08 | rgba(26,26,26,.08) / 테두리 1px #b3b3b3. 비활성 테두리 #4d4d4d | 사진 위 등 반투명 버튼 |
| gray30 | #4d4d4d / 흰 글자. 비활성 #f7f7f7 | 어두운 강조 |

- 상태: 비활성은 위 표. 눌림은 Pressable의 feedback이 기본으로 켜져 있으나 값은 확인 필요. 로딩은 확인 필요.
- 굵기 규칙: 48·44 크기와 lineGray10·gray30 테마는 bold, 나머지는 medium.
- 쓰지 않는 때: 버튼에 4px 밖의 모서리를 쓰지 않는다.

**규칙** (관찰에서 정리)
- 화면의 주 행동은 primary 하나. 보조는 lineGray10 → lineGray30 → lineGray90 순으로 강도를 낮춘다.
- 화면 아래 CTA는 44(기본) 또는 48을 쓴다. 40 이하는 목록·카드 안 작은 행동에.
- 위험 행동(삭제 등)만 red1. (구현 권장: 확인 다이얼로그를 거친다)
- 터치: 40 이하 버튼은 주변 여백까지 44pt 영역을 잡는다. (구현 권장)
- 아이콘만 있는 버튼은 `accessibilityLabel`(웹은 `aria-label`)을 단다. (구현 권장)

### 6.2 입력창
- TextField: 1px #e6e6e6 테두리, 모서리 4px, 여백 9px 11px(큰 것 위아래 12px).
- 포커스: 테두리 1.5px #1a1a1a로 굵어지고 여백을 0.5px씩 줄여 크기를 유지한다.
- 오류: 테두리 #fa4e3e. 비활성: 배경 #f2f2f2.
- SearchBar: 상단 바 안에 높이 40px, 배경 #f7f7f7, 모서리 4px의 입력 상자. 아래에 0.5px 선.

| 상태 | 테두리 | 배경 |
|---|---|---|
| 기본 | 1px #e6e6e6 | #ffffff |
| 포커스 | 1.5px #1a1a1a(여백 0.5px 감소) | #ffffff |
| 오류 | #fa4e3e | #ffffff |
| 비활성 | 확인 필요 | #f2f2f2 |

- 규칙: 오류 문구 위치·글자 크기는 확인 필요. 라벨은 입력창 밖에 보이게 둔다. (구현 권장)

### 6.3 칩·탭
- Chip: 32px(좌우 12, 모서리 16, 글자 13px medium), 36px(좌우 16, 모서리 20, 14px). 선택되면 테두리 1.4px #ff6905, 글자 #ff6905. 36px 선택형은 #4d4d4d 배경에 흰 글자.
- Tag: 크기 4단계. large 6/12px·13px, medium 4/8px·12px, small 2/6px·11px, xsmall 2/4px·10px. 기본 모서리 20px. 연한 배경 + 같은 계열 진한 글자 조합.
- 규칙: 선택 표시는 주황 테두리·글자(32px) 또는 #4d4d4d 채움(36px) 둘 중 하나로 한 줄 안에서 통일한다. (관찰에서 정리)
- Tab: 높이 52px, 콘텐츠 좌우 20px, 탭 하나 여백 위 16px·좌우와 아래 12px. 선택 밑줄 2px #ff6905, 탭 줄 아래 1px #f2f2f2.

### 6.4 카드·리스트
- ListItem: 왼쪽 요소와 12px, 오른쪽 요소와 12px 간격. 제목 기본 16px.
- 웹 매물 목록 줄: "추천" 태그(#e6f5ed 배경, #0ba04b 11px/500, 여백 2px 6px, 모서리 20px) → 가격 18px/700 → 관리비 14px/700 → 방 정보 14px/400 #1a1a1a → 위치·설명 14px #808080. 오른쪽 사진 104×104, 모서리 4px, 1px rgba(26,26,26,.08) 테두리.
- Thumbnail: 모서리 4px, 1px rgba(26,26,26,.08) 테두리, 글자 영역 좌우 12px.
- Divider: 선 1px #f2f2f2, 구역 구분은 높이 12px 면.
- 상태: 눌림은 확인 필요.

### 6.5 상단 바·하단 탭 바
- TopBar: 높이 52px, 좌우 12px, 아래 여백 6px, 흰 배경. 아래 0.5px rgba(26,26,26,.16) 선.
- BottomNavigation: 높이 68px, 흰 배경, 아이콘과 글자 사이 4px. 선택 탭 색은 확인 필요.

### 6.6 바텀시트·모달
- BottomSheet: 흰 배경, 위쪽 모서리 12px. 손잡이 34×4px, 모서리 5px, 색 #cccccc.
- 전체 화면 Dialog: 등장·퇴장 300ms. 아래에서 올라오는 slide 또는 fade. 들어올 때 ease-in, 나갈 때 ease-out.
- BottomCTA: 바깥 여백 좌우 20px·위아래 12px. 버튼 두 개는 세로(간격 8px) 또는 가로(5:5, 1:2, 2:1) 배치.

### 6.7 토스트·배지
- SnackBar: 화면 아래 고정, 좌우 20px 띄움, 최대 폭 400px. 배경 #4d4d4d, 여백 12px, 모서리 4px. 글자 흰색, 오른쪽 버튼 글자 #ff6905.
- Badge: 모서리 4px, 안 아이콘 16px. pink1·blue1 색 조합(2장).
- 규칙: 스낵바 행동 버튼은 하나, 글자는 주황. 스낵바는 화면 아래 한 개만 띄운다. (구현 권장: 스크린리더가 읽도록 알림 영역으로 표시)

### 6.8 아이콘·이미지
- 아이콘: ZUIX Icon 컴포넌트에 SVG 아이콘 세트가 들어 있다. 버튼 스토리 예시는 24px, 배지 안 아이콘은 16px. 기본 크기는 확인 필요.
- 사진: 매물 사진은 4px 모서리와 옅은 테두리. 사진 위 글자에는 rgba(0,0,0,.5) 글자 그림자를 쓴다.

## 7. 패턴
- 목록 → 상세: 웹 지도 화면 옆 매물 목록(한 줄 카드, 오른쪽 104×104 사진)에서 상세로 간다. 상세 화면은 앱 위주라 확인 필요.
- 검색: 상단 바 안 SearchBar(높이 40px, #f7f7f7). 안내 문구는 찾을 대상을 나열하는 꼴.
- 빈 상태·오류: 입력 오류는 테두리 #fa4e3e. 일시 알림은 화면 아래 스낵바(#4d4d4d, 오른쪽 주황 버튼 글자). 빈 상태는 확인 필요.
- 폼·결제: 화면 아래 BottomCTA(좌우 20px, 버튼 두 개 세로 8px 또는 가로 5:5·1:2·2:1). 결제 흐름은 확인 필요.
- 바텀시트: 위 모서리 12px, 손잡이 34×4px #cccccc.
- 로딩: 확인 필요.

### 매물 목록 한 줄의 짜임
| 순서 | 요소 | 값 |
|---|---|---|
| 1 | 상태 태그 | #e6f5ed 배경, #0ba04b 11px/500, 모서리 20px |
| 2 | 가격 | 18px/700 |
| 3 | 관리비 | 14px/700 |
| 4 | 방 정보 | 14px/400 #1a1a1a, 가운뎃점(·)으로 잇기 |
| 5 | 위치·설명 | 14px #808080 |
| 옆 | 사진 | 104×104, 4px, 1px 반투명 테두리 |

```
월세 1000/50
관리비 5만
원룸 · 20m² · 3층
역에서 걸어서 5분, 새로 고친 방
```
(예시 문구, SylviaLab 작성 — 9장 매물 요약 꼴을 따랐고 숫자는 임의 값이다)

## 8. 접근성
- 글자 대비(WCAG 2.x, 원본 HEX로 계산):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #1a1a1a | #ffffff | 17.4:1 | 통과 |
| #666666 | #ffffff | 5.7:1 | 통과 |
| #808080 | #ffffff | 3.9:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #ff6905 | 2.9:1 | 미달 |
| #ff6905 | #fff7f0 | 2.7:1 | 미달 |
| #0ba04b | #e6f5ed | 3.0:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #4d4d4d | 8.5:1 | 통과 |
| #ff6905 | #4d4d4d | 2.9:1 | 미달 |
| #fa4e3e | #ffffff | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #ffffff | #fa4e3e | 3.4:1 | 미달(큰 글자 3:1은 통과) |
| #092c59 | #ffffff | 13.9:1 | 통과 |
| #1a1a1a | #f7f7f7 | 16.2:1 | 통과 |
| #3798fa | #ebf5ff | 2.7:1 | 미달 |

- 대비 메모: 주 버튼 흰 글자(16px bold)가 2.9:1로 큰 글자 기준에도 조금 못 미친다. 매물 설명 #808080(14px)도 본문 기준 미달. 큰 주 버튼 비활성(#ffffff / #ffe8d9)은 1.2:1이지만 비활성이라 기준 대상은 아니다.
- 터치 영역: 버튼 48·44는 44pt 기준을 채우고, 40·32·28·24는 못 미친다. 칩 32·36px, 상단 바·탭 52px, 하단 탭 68px.
- 최소 글자 크기: 8px 단계가 있다(아주 작은 표시). 태그는 10~11px.
- 글자 확대: 사용자 설정을 최대 1.5배(maxFontSizeMultiplier 1.5)까지 따른다. 버튼 글자는 확대하지 않는다.
- 포커스: 입력창 포커스 테두리 1.5px #1a1a1a. 스크린리더는 확인 필요.

### 점검 목록
- [ ] 글자 확대: 1.5배까지 키워도 매물 줄·태그가 잘리지 않는다(maxFontSizeMultiplier 1.5는 코드 사실, 잘림 여부는 확인 필요).
- [ ] 주 버튼 흰 글자 2.9:1: 16px bold 이상으로만 쓰고 더 작게 줄이지 않는다. (구현 권장)
- [ ] 정보 태그 #3798fa / #ebf5ff(2.7:1)는 글자 정보만으로 의미를 전하지 않는다. (구현 권장)
- [ ] 웹 키보드 포커스 표시: 확인 필요.
- [ ] 아이콘만 있는 버튼·탭에 접근성 이름. (구현 권장)
- [ ] 매물 사진 대체 텍스트(매물 종류·위치). (구현 권장)
- [ ] 터치: 40 이하 버튼, 32px 칩은 44pt 영역 확보. (구현 권장)

## 9. 글쓰기 톤
- 말투: 해요체. 매물 정보는 짧은 명사구를 가운뎃점(·)으로 잇는다.
- 예시(직접 관찰한 문장 구조만, 원문 복사 금지):
  - 매물 요약: [거래 종류] [보증금/월세] 다음 줄에 [구조] · [면적] · [층].
  - 검색 안내: [찾을 수 있는 대상 1], [대상 2], [대상 3] 검색 꼴의 나열형.
  - 상태 태그는 두 글자 안팎 명사(추천 등).
- 버튼 문구 꼴: 확인 필요.
- 숫자·단위 표기: 가격은 [보증금/월세] 꼴로 한 줄, 관리비는 다음 줄.

## 10. Do & Don't
아래는 ZUIX 코드와 웹 화면 사실에서 SylviaLab이 정리한 규칙이다(관찰에서 정리, 공식 규칙 아님).

### Do
- 주 버튼은 #ff6905 배경에 흰 16px bold 글자, 높이 44px(기본), 모서리 4px로 만든다.
- 버튼·입력창·검색창·썸네일·스낵바 모서리는 4px로 맞춘다.
- 태그는 모서리 20px, 연한 배경 + 같은 계열 진한 글자(#e6f5ed + #0ba04b 등)로 만든다.
- 입력 포커스는 1.5px #1a1a1a 테두리로 굵히고 여백을 0.5px 줄인다.
- 매물 사진에는 1px rgba(26,26,26,.08) 테두리와 4px 모서리를 준다.
- 화면 좌우와 하단 CTA 바깥 여백은 20px로 둔다.
- 굵기는 400·500·700만 쓴다.

### Don't
- 주황 #ff6905를 주 버튼·선택 표시·스낵바 버튼 글자 밖에 쓰지 않는다.
- 버튼에 8px 이상의 둥근 모서리를 쓰지 않는다(칩·태그만 16~20px).
- 작은 버튼(32 이하) 비활성에 #ffe8d9를 쓰지 않는다. #f7f7f7 배경 #cccccc 글자를 쓴다.
- 버튼 글자를 사용자 글자 크기 설정에 따라 키우지 않는다. 다른 글자도 1.5배를 넘기지 않는다.
- 상단 바 아래를 1px 진한 선으로 긋지 않는다. 0.5px rgba(26,26,26,.16)를 쓴다.
- 테두리를 굵히면서 안쪽 여백을 그대로 두지 않는다(크기가 밀린다).

## 11. 구현·운영
- 코드 컴포넌트·패키지: ZUIX(소스 경로 packages/zuix). React Native와 웹을 함께 겨냥한 컴포넌트 라이브러리. 공개 저장소는 보이지 않는다(GitHub zigbang 공개 저장소 36개 중 ZUIX 없음).
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: ZUIX2 Storybook https://zuix2.zigbang.io/ (index.json 컴포넌트 목록, 스토리 코드). 토큰 설명 문서는 따로 없다. 글꼴은 https://zuix2.zigbang.io/font/pretendard-subset.css 로 제공한다.
- 버전·변경 관리: 공개 자료 없음. Storybook 진입 코드 주소(iframe-BejBUJc2.js)는 빌드마다 바뀐다.

## 12. AI에 넣을 때
```
직방(ZUIX) 스타일로 디자인해 줘.
- 주색: #ff6905 (연한 면 #fff7f0, 비활성 #ffe8d9)
- 글자: #1a1a1a 기본, #808080 보조, #cccccc 비활성
- 배경: #ffffff, 약한 면 #f7f7f7, 테두리 #e6e6e6, 구분선 #f2f2f2
- 상태: 성공 #0ba04b, 오류 #fa4e3e, 정보 #3798fa
- 글꼴: Pretendard, 크기/행간 18/28, 16/24, 14/20, 13/18, 12/16, 굵기 400·500·700
- 모서리: 버튼·입력·카드 4px, 칩·태그 16~20px, 바텀시트 위 12px
- 간격 단위: 4px, 화면 좌우 20px
- 버튼: 높이 48/44/40/32/28/24, 주 버튼 주황 배경 흰 글자 16px bold
- 분위기: 각진 4px 모서리, 주황은 행동과 선택에만, 그림자는 얕게
```

## 13. 참고 자료
- https://zuix2.zigbang.io/ (확인 2026-10-31, 직방 ZUIX2 Storybook. index.json의 컴포넌트 목록과 스토리 코드)
- https://zuix2.zigbang.io/assets/iframe-BejBUJc2.js (확인 2026-10-31, Storybook 진입 코드. 여기서 불러오는 style·Button·Text·Tag·Chip·TextField·SnackBar·BottomSheet·TopBar·Tab 조각에서 값을 읽음. 빌드마다 주소가 바뀐다)
- https://zuix2.zigbang.io/font/pretendard-subset.css (확인 2026-10-31, 글꼴)
- https://www.zigbang.com/ (확인 2026-10-31, 소개 화면 실측)
- https://www.zigbang.com/home/oneroom/map (확인 2026-10-31, 지도·매물 목록 실측)
- https://s.zigbang.com/zigbang-www/_next/static/css/235e93ad9dfc2a45.c1.css (확인 2026-10-31, 웹이 불러온 스타일시트 주소)
- https://github.com/zigbang (확인 2026-10-31, 공개 저장소 36개 중 ZUIX 저장소는 보이지 않음)

근거와 한계
- 색·글자 단계·버튼·입력·칩·태그·스낵바·바텀시트·탭 수치는 ZUIX Storybook의 스타일 코드에서 읽었다. 코드에서 읽은 값이라 문서의 설명 문장은 없다.
- 웹 화면에서는 orange1, gray10, gray50, gray90, gray95, green1·green2, 4px 모서리, 18/28·14/20 글자 단계, shadow level4가 실제로 쓰이는 것을 확인했다.
- 웹은 상품 상세 화면이 앱 위주라 상세 화면은 실측하지 못했다. 다크 모드, 경고 색, 눌림 피드백 값, 그리드는 확인하지 못했다.
- Storybook과 웹 실측값은 배포가 바뀌면 달라질 수 있다.
- 직방 이름과 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
공개 저장소는 없고, ZUIX2 Storybook에서 확인한 컴포넌트·이름만 잇는다.

| DESIGN.md | ZUIX 이름 |
|---|---|
| `colors.orange1` 등 팔레트 | `Color` 열거형 멤버(`orange1`, `gray10`, `grayOpacity08` …) |
| `components.button-*` | `Button` (크기 48·44·40·32·28·24, 테마 primary·lineGray10·lineGray30·lineGray90·lineOrange·orange2·red1·grayOpacity08·gray30) |
| `typography.*` | `Text` (기본 11px·medium·gray10, fontFamily "Pretendard") |
| `components.text-field*` | `TextField` |
| `components.search-bar` | `SearchBar` |
| `components.chip-*` | `Chip` |
| `components.tag-*` | `Tag` |
| `components.tab` | `Tab` |
| `components.top-bar` | `TopBar` |
| `components.bottom-navigation` | `BottomNavigation` |
| `components.bottom-sheet` | `BottomSheet` |
| `components.snackbar` | `SnackBar` |
| `components.thumbnail` | `Thumbnail` |
| 리스트·구분선·하단 CTA·배지·아이콘 | `ListItem`, `Divider`, `BottomCTA`, `Badge`, `Icon` |
| `layout.web-min-width` | CSS 변수 `--web-min-width`(zigbang.com) |

- 글꼴: `https://zuix2.zigbang.io/font/pretendard-subset.css`. 패키지 배포 이름·버전은 공개 자료 없음.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**(ZUIX2 Storybook 스타일 코드, 확인 2026-10-31): 팔레트 HEX와 이름(Color 열거형), 글자 단계 크기·행간·굵기, maxFontSizeMultiplier 1.5, 버튼 6크기·여백·9테마와 비활성 값, TextField 테두리·포커스·오류·비활성, Chip·Tag·Tab·TopBar·BottomNavigation·BottomSheet·SnackBar·Badge 수치, 그림자 level1~4, 전체 화면 Dialog 300ms. 반투명 색은 코드의 rgba를 YAML에서 8자리 HEX(#1a1a1a14, #1a1a1a29)로 바꿔 적었다.
- **화면에서 잰 값(관찰)**: zigbang.com computed style로 확인한 orange1·gray10·gray50·gray90·gray95·green1·green2, 4px 모서리, 18/28·14/20 글자, shadow level4, 메뉴 선택 글자 #ff681b, 매물 목록 줄 구성과 사진 104×104, `--web-min-width` 1440px, Spoqa Han Sans 잔존.
- **SylviaLab이 정리·권장한 것**: 역할 이름 층(`primary`, `text-primary`, `border` 등), 원칙 5개와 AI 에이전트 안내, 각 장 Don't, 4장 리듬·여백 표 구성, 6장 규칙과 `(구현 권장)` 줄, 7장 매물 줄 표와 예시 문구, 8장 대비 계산과 점검 목록.
