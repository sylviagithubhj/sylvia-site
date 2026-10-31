---
version: "1.0"
name: "카카오"
description: "노랑과 검정 두 색으로 브랜드를 말하되 로그인 버튼(#fee500)과 브랜드 노랑(#fae100)을 나눠 문구까지 규칙으로 묶고, 화면은 그림자 없이 흰 바탕·회색 면·알약 버튼으로 담백하게 짜는 시스템"
source:
  - "공개 문서: https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide"
  - "공개 문서: https://developers.kakao.com/docs/ko/kakaosync/design-guide"
  - "공개 문서: https://developers.kakao.com/docs/ko/talkcalendar/design-guide"
  - "관찰(웹 computed style): kakaocorp.com 홈·뉴스 목록·뉴스 상세, macOS Chrome 155, 1362px, 2026-10-31"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 1. 색 — 공개 문서 팔레트 + 웹 관찰 팔레트
#    투명도 값은 공개 문서의 %를 #rrggbbaa로 옮긴 것
# ─────────────────────────────────────────────
colors:
  # 공개 문서
  yellow-button: "#fee500"      # 로그인·카카오싱크 버튼 바탕 (다크도 같음)
  yellow-brand: "#fae100"       # 브랜드 팔레트 (RGB 250 225 0, Pantone 108C)
  black: "#000000"
  black-85: "#000000d9"         # 로그인 버튼 글자
  black-90: "#000000e6"         # 카카오싱크 심볼
  near-black: "#191919"         # 카카오싱크 글자
  white: "#ffffff"
  # 웹 관찰
  gray-50: "#f3f3f3"
  gray-100: "#eeeeee"
  gray-400: "#a1a1a1"
  gray-500: "#888888"           # 가장 많이 쓰인 글자색
  gray-600: "#666666"
  gray-700: "#444444"
  gray-800: "#333333"
  gray-900: "#111111"
  blue-link: "#2439df"
  blue-link-dark: "#489ff8"
  gray-dark-text: "#a8a8a8"

  # ── Semantic ──
  login-yellow: "{colors.yellow-button}"
  kakao-yellow: "{colors.yellow-brand}"
  on-yellow: "{colors.black}"
  login-symbol: "{colors.black}"
  login-label: "{colors.black-85}"
  sync-label: "{colors.near-black}"
  sync-symbol: "{colors.black-90}"
  link: "{colors.blue-link}"
  surface: "{colors.white}"
  surface-card: "{colors.gray-50}"
  surface-button: "{colors.gray-100}"
  surface-strong: "{colors.gray-900}"
  text-title: "{colors.black}"
  text-body: "{colors.gray-800}"
  text-secondary: "{colors.gray-700}"
  text-description: "{colors.gray-600}"
  text-meta: "{colors.gray-500}"
  text-faint: "{colors.gray-400}"
  border-meta: "{colors.gray-500}"

  # ── 다크 모드 (웹 관찰, 바탕은 본문 참고) ──
  text-body-dark: "{colors.gray-dark-text}"
  text-strong-dark: "{colors.gray-50}"
  link-dark: "{colors.blue-link-dark}"
  thumbnail-bg-dark: "{colors.gray-800}"

# ─────────────────────────────────────────────
# 2. 글자 — 웹 실측 px. 자간은 글자가 클수록 더 좁다
# ─────────────────────────────────────────────
typography:
  font-family-title: "KakaoBig, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕, sans-serif"    # 400·700·800
  font-family-body: "KakaoSmall, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕, sans-serif"   # 300·400·700
  font-family-digit: "KakaoDigitLatin"                                                      # 400·700
  login-button-font: "OS 기본 서체, 30pt 기준"     # 공개 문서
  promo-font: "Noto Sans CJK KR Bold, tracking -15"  # 카카오싱크 홍보물
  display-xl: { fontSize: "78.68px", fontWeight: 700, lineHeight: "99.9px", letterSpacing: "-3px" }
  display: { fontSize: "60px", fontWeight: 700, lineHeight: "70px", letterSpacing: "-2px" }
  page-title: { fontSize: "42.12px", fontWeight: 700, lineHeight: "52px" }
  section-title: { fontSize: "30px", fontWeight: 700, lineHeight: "42px", letterSpacing: "-1px" }
  article-title: { fontSize: "30px", fontWeight: 700, lineHeight: "43.2px", letterSpacing: "-0.6px" }
  subtitle: { fontSize: "20px", fontWeight: 400, lineHeight: "26px", letterSpacing: "-0.5px" }
  card-title: { fontSize: "18px", fontWeight: 700, lineHeight: "27.9px", letterSpacing: "-0.5px" }
  body-l: { fontSize: "16px", fontWeight: 400, lineHeight: "28px", letterSpacing: "-0.5px" }
  body: { fontSize: "15px", fontWeight: 400, lineHeight: "28px", letterSpacing: "-0.5px" }
  body-s: { fontSize: "14px", fontWeight: 400, lineHeight: "24.92px", letterSpacing: "-0.2px" }
  label: { fontSize: "14px", fontWeight: 700, lineHeight: "19.88px", letterSpacing: "-0.5px" }
  caption: { fontSize: "13px", fontWeight: 400, lineHeight: "18px", letterSpacing: "-0.2px" }
  caption-s: { fontSize: "12px", fontWeight: 400, lineHeight: "18px", letterSpacing: "-0.2px" }
  body-default: { fontSize: "14px", lineHeight: "21px" }   # body 요소 기본값

rounded:
  chip: "6px"
  login-button: "12px"     # 공개 문서
  card: "16px"
  small-pill: "16px"       # 높이 32px 버튼
  icon-button: "18px"      # 36px 원형
  large-pill: "24px"       # 높이 40~50px 버튼(24~25px)
  full: "999px"
  circle: "50%"

spacing:
  xs: "8px"
  sm: "12px"
  md: "14px"
  lg: "24px"
  xl: "36px"

size:
  header: "72px"
  menu-pill: "36px"
  icon-button: "36px"
  small-button: "32px"
  chip: "30px"
  play-toggle: "48px"

border-width:
  thin: "1px"
  thick: "2px"

layout:
  measured-viewport: "1362px"
  header-max-width: "1024px"
  article-column: "630px"
  header-padding-x: "36px"
  card-gap: "24px"

elevation:
  shadow: "none"   # 3개 화면 box-shadow 0건

# ─────────────────────────────────────────────
# 3. 컴포넌트 토큰
# ─────────────────────────────────────────────
components:
  button-kakao-login: { backgroundColor: "{colors.login-yellow}", symbolColor: "{colors.login-symbol}", textColor: "{colors.login-label}", rounded: "{rounded.login-button}", label: "카카오 로그인 | 로그인", maxTextHeight: "버튼 높이의 1/3" }
  button-kakao-sync: { backgroundColor: "{colors.login-yellow}", symbolColor: "{colors.sync-symbol}", textColor: "{colors.sync-label}", rounded: "{rounded.login-button}", label: "카카오로 시작하기 | 시작하기" }
  button-menu-pill: { backgroundColor: "{colors.surface}", textColor: "{colors.text-title}", typography: "{typography.body-l}", rounded: "{rounded.full}", height: "{size.menu-pill}", padding: "3px 14px 5px" }
  button-icon: { backgroundColor: "transparent", textColor: "{colors.text-body}", rounded: "{rounded.icon-button}", size: "{size.icon-button}" }
  button-download: { backgroundColor: "{colors.kakao-yellow}", textColor: "{colors.on-yellow}", typography: "{typography.caption}", rounded: "{rounded.small-pill}", height: "{size.small-button}", padding: "7px 13px 8px 30px" }
  button-hashtag: { backgroundColor: "{colors.surface-strong}", textColor: "{colors.surface}", typography: "{typography.caption}", rounded: "{rounded.small-pill}", height: "{size.small-button}", padding: "7px 8px 8px" }
  button-banner-link: { backgroundColor: "rgba(255,255,255,0.1)", rounded: "25px", size: "130×50px" }
  button-related-site: { backgroundColor: "{colors.surface-button}", rounded: "{rounded.large-pill}", size: "208×40px" }
  button-play-toggle: { backgroundColor: "rgba(255,255,255,0.1)", rounded: "{rounded.circle}", size: "{size.play-toggle}" }
  card-news: { backgroundColor: "{colors.surface-card}", rounded: "{rounded.card}", size: "301×385px", gap: "{layout.card-gap}", shadow: "none" }
  chip-category: { backgroundColor: "{colors.surface}", rounded: "{rounded.chip}", height: "{size.chip}", paddingX: "{spacing.sm}" }
  header: { backgroundColor: "{colors.surface}", height: "{size.header}", paddingX: "{layout.header-padding-x}" }
  article-body: { typography: "{typography.body-l}", textColor: "{colors.text-body}", maxWidth: "{layout.article-column}", linkColor: "{colors.link}" }
---

# 카카오 디자인 시스템

> 근거: 공개 문서 기반 + 관찰 기반 (실측일 2026-10-31, macOS Chrome 155, 창 폭 1362px, kakaocorp.com 홈·뉴스 목록·뉴스 상세 3개 화면)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. YAML의 `#000000d9`(85%), `#000000e6`(90%)는 공개 문서의 투명도 값을 #rrggbbaa로 옮긴 것이다.

## 1. 개요와 원칙
- 서비스 성격: 카카오톡을 중심으로 한 메신저·플랫폼 회사. 외부 서비스가 쓰는 카카오 로그인·카카오싱크·톡캘린더 버튼 규칙은 카카오 디벨로퍼스에 공개돼 있다.
- 디자인 인상 한 줄: 노랑(#fee500 / #fae100)과 검정 두 색으로 브랜드를 말하고, 화면 자체는 흰 바탕·회색 글자·둥근 알약 버튼으로 담백하게 짠다.
- 공식 시스템 이름: 공개된 이름 없음. 공개된 UI 디자인 시스템 이름과 토큰은 찾지 못했다. 공개된 것은 버튼·로고 사용 가이드(디자인 가이드)다.
- 이 문서의 두 층
  - 공개 문서: 카카오 로그인·카카오싱크·톡캘린더 디자인 가이드의 색과 규칙.
  - 실측: 회사 웹사이트 kakaocorp.com의 계산된 스타일(computed style). 카카오톡 앱 화면은 실측하지 않았다.
- 디자인 원칙(공식 원칙 목록은 공개되지 않음):
  1. 브랜드 요소는 바꾸지 않는다. 말풍선 심볼의 모양·비율·색을 바꾸거나 생략하지 않는다. (공개 문서: 카카오 로그인 디자인 가이드)
  2. 노랑은 용도별로 나눈다. 버튼은 #fee500, 브랜드 팔레트는 #fae100. (공개 문서: 로그인·톡캘린더 가이드)
  3. 정해진 문구만 쓴다. 로그인·카카오싱크 버튼 글자는 허용된 문구 밖으로 쓰지 않는다. (공개 문서)
  4. 화면은 담백하게. 흰 바탕·회색 글자에 노랑은 한두 군데만 쓴다. (관찰에서 정리)
  5. 그림자 대신 면 색. 3개 화면에서 box-shadow가 0건이고 #f3f3f3 면으로 구분한다. (관찰에서 정리)
- 톤: 담백한 흰 화면 위에 노랑은 한두 군데만.

### 특장점
- 노랑을 두 값으로 나눠 쓴다 — 로그인·카카오싱크 버튼은 #fee500, 브랜드 팔레트는 #fae100(RGB 250 225 0, Pantone 108C)이고, 공개 문서가 둘을 섞지 말라고 정해 둔다.
- 버튼 규칙이 문구·비율까지 정해져 있다 — 카카오 로그인 버튼은 #fee500 바탕, 말풍선 심볼 #000000, 글자 #000000 85%, 모서리 12px. 키울 때 글자 높이는 버튼 높이의 1/3 이하, 넓힐 때 좌우로 똑같이 늘리고, 좁으면 "로그인"만 남긴다.
- 노랑 위 글자 대비가 매우 높다 — #fee500 위 #000000 85%는 12.5:1, #191919는 13.7:1로, 밝은 브랜드색에 검정 글자를 올려 읽기 쉽다.
- 그림자 없이 알약과 면으로 짠다 — kakaocorp.com 3개 화면에서 box-shadow 0건. 뉴스 카드는 #f3f3f3·모서리 16px, 메뉴는 999px 알약(높이 36px), 버튼은 높이에 맞춘 반지름(32px → 16px, 40~50px → 24~25px).
- 음수 자간을 계단처럼 준다 — 본문 -0.2~-0.5px, 섹션 제목 30px -1px, 홈 대표 문구 60px -2px, 78.68px -3px로 글자가 커질수록 더 좁힌다.

### 배울 점
- 외부에 버튼을 배포할 때 카카오처럼 색·모서리뿐 아니라 허용 문구("카카오 로그인" / "로그인")와 크기 조절 규칙(글자 높이 1/3 이하, 좌우 균등 확장)까지 함께 정한다.
- 브랜드 노랑을 여러 용도로 쓸 때 카카오처럼 기능 버튼용 값(#fee500)과 브랜드 표현용 값(#fae100)을 따로 둔다.
- 알약 버튼을 만들 때 카카오처럼 모서리를 높이의 절반(32px → 16px, 50px → 25px)으로 맞춘다.

### 이 문서를 읽는 AI 에이전트에게
- 이 문서는 두 층이다. 로그인·카카오싱크 버튼은 **공개 문서 값 그대로** 쓰고, 화면(웹) 스타일은 **kakaocorp.com 관찰 값**으로 쓴다. 둘을 섞지 않는다.
- 색은 YAML 역할 이름(`login-yellow`, `kakao-yellow`, `text-body`, `surface-card`)으로 쓴다. 버튼 노랑은 `login-yellow`(#fee500), 브랜드 표현 노랑은 `kakao-yellow`(#fae100)다.
- 로그인 버튼 문구는 "카카오 로그인"/"로그인", 카카오싱크는 "카카오로 시작하기"/"시작하기"만 쓴다. 말풍선 심볼을 새로 그리거나 바꾸지 않는다.
- 노랑 위 글자는 검정 계열만. 판단이 어려우면 그림자 없이 #f3f3f3 면, 알약 모서리(높이의 절반), 노랑은 한 화면 한두 군데를 고른다.
- 카카오톡 앱 값은 이 문서에 없다. 앱 화면을 만들 때 웹 값을 앱 값처럼 단정하지 않는다.

## 2. 색상
### 색 체계
공개 UI 토큰이 없어 **공개 문서 팔레트 + 웹 관찰 팔레트 → 역할 이름**으로 정리했다.

| 층 | 예시 | 출처 | 쓰는 곳 |
|---|---|---|---|
| 공개 문서 팔레트 | #fee500, #fae100, #000000 85%·90%, #191919 | 카카오 디벨로퍼스 디자인 가이드 | 로그인·카카오싱크 버튼, 브랜드 팔레트, 로고 |
| 웹 관찰 팔레트 | `gray-50`~`gray-900`, `blue-link` | kakaocorp.com computed style | 회사 웹사이트 화면 |
| 역할 이름 | `login-yellow`, `text-meta`, `surface-card` | SylviaLab 정리 | 실제 화면·컴포넌트 |

- 웹 회색은 무채색 한 줄(#111111 → #f3f3f3)이다. 글자는 #000000 → #333333 → #444444 → #666666 → #888888 → #a1a1a1 여섯 단계.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| login-yellow | #fee500 | 카카오 로그인·카카오싱크 버튼 바탕(공개 문서, 다크도 같음) |
| kakao-yellow | #fae100 | 브랜드 팔레트 노랑(RGB 250 225 0, Pantone 108C)(공개 문서·톡캘린더) |
| kakao-yellow(웹) | #fae100 | kakaocorp.com "카카오톡 다운로드" 버튼(실측) |
| black | #000000 | 로그인 버튼 심볼, 노랑 위 글자(공개 문서) |
| login-label | #000000 | 85% 불투명. 카카오 로그인 버튼 글자(공개 문서) |
| sync-label | #191919 | 카카오싱크 버튼 글자(공개 문서) |
| sync-symbol | #000000 | 90% 불투명. 카카오싱크 버튼 말풍선 심볼(공개 문서) |
| link | #2439df | 기사 본문 링크(실측) |

### 바탕·선
kakaocorp.com 실측.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| white | #ffffff | 화면 바탕, 메뉴 알약 버튼 바탕, 카드 위 분류 칩 |
| gray-50 | #f3f3f3 | 뉴스 카드 바탕 |
| gray-100 | #eeeeee | 관련 사이트 버튼 바탕 |
| gray-900 | #111111 | 해시태그 버튼 바탕, 진한 띠 |
| white-10 | rgba(255,255,255,0.1) | 어두운 배너 위 반투명 버튼 |

### 글자
kakaocorp.com 실측.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| black | #000000 | 제목, 메뉴 글자 |
| gray-800 | #333333 | body 기본 글자, 기사 본문 |
| gray-700 | #444444 | 보조 글자 |
| gray-600 | #666666 | 목록 설명 글자 |
| gray-500 | #888888 | 날짜·메타 정보 (가장 많이 쓰인 글자색) |
| gray-400 | #a1a1a1 | 흐린 보조 글자 |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | 확인 필요 | |
| warning | 확인 필요 | |
| error | 확인 필요 | |
| info | 확인 필요 | |

### 역할별 색
- **버튼 노랑(`login-yellow` #fee500)**: 카카오 로그인·카카오싱크 버튼 바탕만. 다크 모드에서도 같다. 위에는 #000000 심볼 + #000000 85% 글자(로그인) 또는 #000000 90% 심볼 + #191919 글자(카카오싱크).
- **브랜드 노랑(`kakao-yellow` #fae100)**: 브랜드 표현, 웹 "카카오톡 다운로드" 버튼. 위 글자는 검정.
- **진한 면(`surface-strong` #111111)**: 해시태그 버튼, 진한 띠. 위 글자 흰색(18.9:1).
- **카드 면(`surface-card` #f3f3f3)**: 뉴스 카드. 그 위 분류 칩은 흰색.
- **링크(`link` #2439df)**: 기사 본문 링크만. 다크에서는 #489ff8.
- **글자 사다리**: 제목 #000000 → 본문 #333333 → 보조 #444444 → 설명 #666666 → 메타 #888888 → 흐림 #a1a1a1.
- hover·눌림 색 짝: 확인 필요.

### 화면 모드
- kakaocorp.com에는 다크 모드 전환 버튼(헤더 오른쪽 아이콘)이 있다. 본문 #a8a8a8, 굵은 글자 #f3f3f3, 링크 #489ff8, 썸네일 바탕 #333333으로 바뀐다. 다크 바탕은 확인 필요.
- 로그인 버튼 #fee500은 다크 모드에서도 같다(공개 문서).
- 고대비 모드: 확인 필요.

### 다크 모드
사이트에 전환 버튼이 있다. 실측 규칙만 적는다. 다크 바탕색은 확인 필요.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| article-text | #a8a8a8 | 기사 본문 글자 |
| strong-text | #f3f3f3 | 굵은 글자 |
| link | #489ff8 | 기사 본문 링크 |
| thumbnail-bg | #333333 | 썸네일 바탕 |
| background | 확인 필요 | 다크 바탕 |

### 색 사용 규칙
- 공개 문서는 버튼에 #fee500, 브랜드 팔레트에 #fae100을 쓴다. 두 값은 용도가 다르니 섞지 않는다.
- 로그인 버튼은 정해진 색 밖의 값을 쓰지 못한다. 다른 회사 로그인 버튼보다 튀게 꾸미지도 않는다.
- 노랑 위 글자·심볼은 검정(#000000, 85%·90%, #191919)이다.
- 로고 바탕 규칙: 흰 바탕에는 검정 로고, 검정 바탕에는 흰 로고, 노랑 바탕에는 검정 로고만. 회색 바탕은 더 잘 보이는 쪽.
- 웹 글자는 제목 #000000 → 본문 #333333 → 설명 #666666 → 메타 #888888 순서로 쓴다.
- 카드·구획은 #f3f3f3 면으로 나눈다. 진한 띠·해시태그 버튼은 #111111.

### Don't
- #fee500과 #fae100을 바꿔 쓰지 않는다. 로그인 버튼은 #fee500, 브랜드 표현은 #fae100(공개 문서).
- 노랑 위에 흰 글자나 회색 글자를 쓰지 않는다. 검정 계열만(공개 문서).
- 로그인 버튼을 다른 회사 로그인 버튼보다 튀게 꾸미지 않는다(공개 문서).
- 메타 #888888, 흐린 글자 #a1a1a1을 긴 본문에 쓰지 않는다(3.5:1, 2.6:1).
- 링크 파랑 #2439df를 제목·버튼 색으로 쓰지 않는다. 기사 본문 링크에만. (관찰에서 정리)

## 3. 타이포그래피
- 글꼴: KakaoBig(웹 실측, 제목용 400·700·800), KakaoSmall(본문용, 300·400·700), KakaoDigitLatin(숫자·라틴, 400·700). 카카오 전용 서체이며 외부 사용 라이선스는 확인 필요.
- 대체 글꼴(웹 실측): "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", sans-serif
- 공개 문서 규칙: 로그인·카카오싱크 버튼 글자는 OS 기본 서체, 크기 30pt(sp/dp) 기준. 버튼을 넓혀도 글자 크기·자간은 바꾸지 않는다.
- 홍보물 문구 규칙(카카오싱크): Noto Sans CJK KR Bold, 트래킹 -15, 검정.
- 자간: 웹에서는 거의 모든 글자에 음수 자간을 준다(-0.2px ~ -0.5px, 큰 제목은 -1px ~ -3px).

### 위계와 사용처
아래 표는 데스크톱 웹 실측 px 값이다(1px = 1pt로 봄). 자간은 쓰임 칸에 적었다. 모바일 값은 확인 필요.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| display-xl | 78.68 | 700 | 약 99.9px | 홈 큰 문구, 자간 -3px (창 폭에 따라 변하는 값으로 보인다) |
| display | 60 | 700 | 70px | 홈 섹션 대표 문구, 자간 -2px |
| page-title | 42.12 | 700 | 52px | 뉴스 목록 페이지 제목 |
| section-title | 30 | 700 | 42px | 홈 섹션 제목, 자간 -1px |
| article-title | 30 | 700 | 43.2px | 뉴스 상세 기사 제목, 자간 -0.6px |
| subtitle | 20 | 400 | 26px | 홈 부제, 자간 -0.5px |
| card-title | 18 | 700 | 27.9px | 카드·묶음 제목, 자간 -0.5px |
| body-l | 16 | 400 | 28px | 기사 본문, 메뉴, 자간 -0.5px |
| body | 15 | 400 | 28px | 설명 문단, 자간 -0.5px |
| body-s | 14 | 400 | 24.92px | 가장 많이 쓰인 본문 단계, 자간 -0.2px |
| label | 14 | 700 | 19.88px | 굵은 라벨, 자간 -0.5px |
| caption | 13 | 400 | 18px | 카드 메타, 버튼, 자간 -0.2px |
| caption-s | 12 | 400 | 18px | 날짜, 푸터, 자간 -0.2px |

- body 기본값은 14px / 21px(1.5) / #333333 / KakaoSmall.

### 규칙
- 제목은 KakaoBig 700, 본문은 KakaoSmall 400, 숫자·라틴은 KakaoDigitLatin.
- 글자가 클수록 자간을 더 좁힌다(본문 -0.2~-0.5px, 30px -1px, 60px -2px).
- 본문은 행간을 넉넉히 둔다(16px/28px, 14px/24.92px).
- 로그인 버튼 글자는 OS 기본 서체로, 버튼을 넓혀도 크기·자간을 바꾸지 않는다(공개 문서).
- 메타·날짜는 12~13px #888888.
- 홍보물 문구는 Noto Sans CJK KR Bold, 트래킹 -15, 검정(카카오싱크 공개 문서).

### Don't
- 로그인 버튼 글자에 KakaoBig 같은 전용 서체를 쓰지 않는다. OS 기본 서체(공개 문서).
- 버튼을 넓힐 때 글자 크기·자간을 바꾸지 않는다(공개 문서).
- 큰 제목에 자간 0을 그대로 두지 않는다. 30px -1px, 60px -2px처럼 좁힌다. (관찰에서 정리)
- 본문 행간을 1.5배 아래로 줄이지 않는다(16px/28px, 14px/24.92px).

## 4. 레이아웃·간격
- 기준 화면: 데스크톱 창 폭 1362px(kakaocorp.com). 모바일은 확인 필요.
- 화면 좌우 여백: 데스크톱 헤더 안쪽 36px. 모바일은 확인 필요.
- 기본 단위: 확인 필요 (웹 값은 4·8 배수와 비배수가 섞여 있다)
- 간격 단계(관찰, pt): 8, 12, 14, 24, 36
- 그리드·최대 폭: 헤더 안쪽 최대 폭 1024px, 기사 본문 단 폭 630px. 그리드는 확인 필요.

### 그리드·최대 폭
| 구분 | 값 |
|---|---|
| 실측 창 | 1362px |
| 헤더 안쪽 최대 폭 | 1024px, 좌우 36px |
| 기사 본문 단 폭 | 630px |
| 뉴스 카드 | 301×385px, 사이 24px |
| 중단점·모바일 | 확인 필요 |

### 화면 세로 리듬
| 구간 | 값 |
|---|---|
| 헤더 | 72px |
| 카드 사이 | 24px |
| 헤더 → 제목, 구획 사이 | 확인 필요 |

### 간격 적용 규칙
- 헤더는 높이 72px, 흰 바탕.
- 뉴스 카드 사이는 24px.
- 분류 칩은 좌우 12px, 메뉴 알약은 좌우 14px.
- 긴 글은 630px 단 폭 안에 둔다.

### Don't
- 기사 본문을 630px보다 넓게 펼치지 않는다.
- 카드 사이를 24px과 다르게 섞지 않는다.
- 관찰한 간격(8·12·14·24·36) 밖의 값을 새로 만들지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| chip | 6px | 뉴스 카드 분류 칩 (실측) |
| login-button | 12px | 카카오 로그인 버튼 (공개 문서) |
| card | 16px | 뉴스 카드 (실측) |
| small-pill | 16px | 높이 32px 버튼 (실측) |
| icon-button | 18px | 36px 원형 아이콘 버튼 (실측) |
| large-pill | 24px | 높이 40~50px 버튼(24~25px) (실측) |
| full | 999px | 메뉴 알약 버튼 (실측) |
| circle | 50% | 재생/일시정지 버튼 (실측) |

- 카카오싱크 버튼 모서리는 공개 문서에 6dp(12px)로 적혀 있다.
- 테두리: 1px #888888, 2px 흰색·검정. 드물게 쓴다(실측).
- 알약 규칙: 버튼 모서리는 높이의 절반 이상이다(32px → 16px, 36px → 18px, 50px → 25px. 40px 버튼만 24px로 절반보다 크다). (관찰에서 정리)

### 고도
- 없음. 실측한 3개 화면에서 box-shadow 0건. 면 색(#f3f3f3)으로 구분한다.
- 층은 흰 바탕 → #f3f3f3 카드 → 흰 칩 순서로 겹친다.

### 모션
- 확인 필요.

### Don't
- 카드·버튼에 그림자를 넣지 않는다.
- 알약 버튼 모서리를 높이의 절반보다 작게 두지 않는다(예: 32px 버튼에 8px 금지).
- 로그인 버튼 모서리를 12px 밖으로 바꾸지 않는다(공개 문서).
- 테두리를 구획 구분에 남발하지 않는다. 1px #888888, 2px 흰색·검정은 드물게만.

## 6. 컴포넌트
컴포넌트마다 변형, 상태, 쓰는 때, 쓰지 않는 때를 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 로그인 버튼(공개 문서)
공개 문서(카카오 로그인)

| 항목 | 값 |
|---|---|
| 바탕 | #fee500 |
| 심볼 | 말풍선, #000000. 모양·비율·색 변경 금지, 생략 금지 |
| 글자 | "카카오 로그인" / 짧게 "로그인", #000000 85% |
| 모서리 | 12px |
| 넓힐 때 | 심볼·글자 영역은 두고 좌우로 똑같이 늘린다. 심볼은 왼쪽 정렬 또는 글자와 함께 가운데 |
| 키울 때 | 심볼과 글자 비율 유지, 글자 높이는 버튼 높이의 1/3 이하 |
| 작게 쓸 때 | 비율을 억지로 맞추지 말고 짧은 글자 "로그인" |

공개 문서(카카오싱크): 바탕 #fee500, 심볼 #000000 90%, 글자 #191919, 모서리 6dp, 글자 "카카오로 시작하기" / "시작하기"만 허용.

**규칙**
- 문구는 허용된 두 가지만. 공간이 좁으면 기능 단어("로그인", "시작하기")만 남긴다.
- 심볼은 왼쪽 정렬 또는 글자와 함께 가운데. 생략 금지.
- 높이는 공개 문서 그림에만 있어 확인 필요. 터치 영역 44pt 이상(구현 권장). 버튼 요소에 "카카오 로그인" 접근 가능한 이름을 준다(구현 권장).

### 6.2 웹 버튼(관찰)
**크기**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| 작은 알약 | 32px | 13px(다운로드, 왼쪽 30px) / 8px(해시태그) | 16px | 13px |
| 메뉴 알약 | 36px | 14px | 999px | 16px |
| 아이콘 | 36×36px | 0 | 18px | — |
| 관련 사이트 | 40px | 확인 필요 | 24px | 확인 필요 |
| 재생 토글 | 48×48px | 0 | 50% | — |
| 배너 링크 | 50px | 확인 필요 | 25px | 확인 필요 |

**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 메뉴 알약 | 높이 36px, 여백 3px 14px 5px, 모서리 999px, 흰 바탕, 검정 글자 16px | 헤더 가운데 메뉴 |
| 아이콘 버튼 | 36×36px, 여백 0, 모서리 18px, 투명, #333333 | 헤더 검색·언어·다크 모드 |
| 다운로드 버튼 | 높이 32px, 여백 7px 13px 8px 30px(왼쪽 아이콘 자리), 모서리 16px, #fae100 바탕, 검정 글자 13px | "카카오톡 다운로드" |
| 해시태그 버튼 | 높이 32px, 여백 7px 8px 8px, 모서리 16px, #111111 바탕, 흰 글자 13px | 해시태그형 바로가기 |
| 배너 링크 | 130×50px, 모서리 25px, 흰색 10% 바탕 | 어두운 배너 위 링크 |
| 관련 사이트 | 208×40px, 모서리 24px, #eeeeee 바탕 | 관련 사이트 이동 |
| 재생 토글 | 48×48px, 모서리 50%, 흰색 10% 바탕 | 영상 재생/일시정지 |

- 상태: 눌림·비활성 상태는 확인 필요.
- 쓰지 않는 때: 로그인·카카오싱크 버튼에 허용 문구 밖 글자, 정해진 색 밖 바탕을 쓰지 않는다. 다른 회사 로그인 버튼보다 튀게 꾸미지 않는다.
- 규칙: 노랑 버튼(다운로드)은 한 화면 한 개, 나머지는 흰·회색·검정 알약. (관찰에서 정리)
- 접근성: 36px 아이콘 버튼에는 `aria-label`(구현 권장). 32·36px 버튼은 44pt보다 작으니 주변 여백으로 누를 곳을 넓힌다(구현 권장).

### 6.3 입력창
- 확인 필요 (실측 화면에 입력창이 열려 있지 않았다).

### 6.4 칩·탭
- 카드 안 분류 칩: 흰 바탕, 높이 30px, 좌우 12px, 모서리 6px.
- 탭: 확인 필요.

### 6.5 카드·리스트
- 뉴스 카드: 301×385px(창 폭 1362px 기준), 바탕 #f3f3f3, 모서리 16px, 그림자 없음, 카드 사이 24px.
- 메타 글자 13px #888888, 설명 #666666.
- 쓰지 않는 때: 카드에 그림자를 넣지 않는다.
- 순서: 분류 칩 → 제목 → 메타(13px #888888). 카드 전체가 링크면 하나의 `<a>`로 감싼다(구현 권장).

### 6.6 헤더·탭 바
- 헤더 72px. 가운데에 알약형 메뉴(36px), 오른쪽에 검색·언어·다크 모드 아이콘 버튼(36px 원형).
- 앱 탭 바: 확인 필요.

### 6.7 바텀시트·모달
- 확인 필요.

### 6.8 토스트·배지
- 확인 필요.

### 6.9 아이콘·로고·이미지
- 아이콘: 웹 아이콘 버튼 36px 원형 영역. 아이콘 자체 크기·선 굵기는 확인 필요.
- 톡캘린더 아이콘은 SVG로 받고, 선 굵기·크기·무게를 기기에 맞게 조정할 수 있다. 달력 은유는 유지한다.
- 로고·심볼: 말풍선 심볼은 바꾸지 않는다. 카카오 CI나 기능 아이콘으로 대신하지 않는다.
- 이미지: kakaocorp.com은 큰 사진·그래픽 히어로와 서비스 아이콘 이미지를 쓴다. 모서리 규칙은 확인 필요.

## 7. 패턴
- 목록 → 상세: 뉴스 목록은 #f3f3f3 카드(16px 모서리, 사이 24px)에 흰 분류 칩·제목·13px 메타를 둔다. 상세는 30px/700 제목 아래 630px 단 폭 본문(16px/28px, #333333), 링크 #2439df.
- 외부 서비스 로그인: #fee500 버튼 + 말풍선 심볼 + "카카오 로그인"(좁으면 "로그인"). 카카오싱크는 "카카오로 시작하기"/"시작하기".
- 다크 모드 전환: 헤더 오른쪽 아이콘 버튼으로 바꾼다. 본문 #a8a8a8, 굵은 글자 #f3f3f3, 링크 #489ff8.
- 검색: 헤더 검색 아이콘 버튼만 확인. 흐름은 확인 필요.
- 빈 상태·오류: 확인 필요(실측 화면에 없었다).
- 폼·결제: 확인 필요.

### 로그인 버튼 배치 꼴
```
[ (말풍선)  카카오 로그인 ]     ← 넓은 자리: #fee500, 모서리 12px, 좌우로 똑같이 늘림
[ (말풍선)  로그인 ]            ← 좁은 자리: 짧은 문구
```
(배치 예시, SylviaLab 작성. 문구는 공개 문서가 허용한 것만)

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값). 85% 검정 글자는 노랑 위에 겹친 값으로 계산했다.

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #000000 | #ffffff | 21.0:1 | 통과 |
| #333333 | #ffffff | 12.6:1 | 통과 |
| #666666 | #ffffff | 5.7:1 | 통과 |
| #888888 | #ffffff | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #a1a1a1 | #ffffff | 2.6:1 | 미달 |
| #000000 85% | #fee500 | 12.5:1 | 통과 |
| #191919 | #fee500 | 13.7:1 | 통과 |
| #000000 | #fae100 | 15.8:1 | 통과 |
| #ffffff | #111111 | 18.9:1 | 통과 |
| #2439df | #ffffff | 7.7:1 | 통과 |
| #888888 | #f3f3f3 | 3.2:1 | 미달(큰 글자 3:1은 통과) |

- 가장 많이 쓰인 메타 글자색 #888888(12~13px)은 본문 기준에 못 미친다.
- 다크 모드 대비는 다크 바탕색을 확인하지 못해 계산하지 못했다(확인 필요).
- 터치 영역: 웹 메뉴 알약 36px, 아이콘 버튼 36px, 다운로드·해시태그 버튼 32px로 44pt보다 작다. 재생 토글 48px, 배너 링크 50px은 넘는다. 로그인 버튼 높이는 확인 필요.
- 최소 글자 크기: 12px(날짜, 푸터).
- 포커스·스크린리더·글자 확대: 확인 필요.

### 점검 목록
- [x] 노랑 위 글자 대비 12.5:1 이상(#000000 85% / #fee500)
- [ ] 메타 #888888 글자를 큰 글자로 쓰거나 더 진한 회색으로 바꿨는가 (구현 권장)
- [ ] 아이콘 버튼(검색·언어·다크 모드)에 `aria-label`이 있는가 (확인 필요)
- [ ] 키보드 포커스 표시가 보이는가 (확인 필요)
- [ ] 32·36px 버튼의 누를 영역이 44pt 이상인가 (구현 권장)
- [ ] 다크 모드 대비를 바탕색과 함께 다시 쟀는가 (확인 필요)
- [ ] 히어로 사진·서비스 아이콘에 대체 텍스트가 있는가 (확인 필요)

## 9. 글쓰기 톤
- 말투: 회사 사이트 문장은 짧은 평서문과 해시태그형 바로가기 버튼을 섞는다. 카카오톡 앱 안 문장 규칙은 확인 필요.
- 버튼 문구 꼴: [도구 이름] + [기능] 구조다: "카카오로" + "시작하기", "카카오" + "로그인". 공간이 좁으면 기능 단어만 남긴다. 정해진 문구 밖의 버튼 글자는 쓰지 않는다.
- 이름 표기: 서비스 이름은 띄어쓰기·대소문자를 정해진 대로 쓴다(예: 톡캘린더 / Talk Calendar).
- 숫자·단위 표기: 확인 필요.

## 10. Do & Don't
공개 문서에서 온 규칙은 "(공개 문서)"로 표시했다. 나머지는 kakaocorp.com 화면에서 반복되는 규칙을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 카카오 로그인 버튼은 #fee500 바탕, #000000 말풍선, #000000 85% 글자, 모서리 12px로 쓴다(공개 문서).
- 버튼을 키울 때 글자 높이를 버튼 높이의 1/3 이하로 두고, 넓힐 때 좌우로 똑같이 늘린다(공개 문서).
- 노랑 바탕 위 로고·글자는 검정으로 쓴다(공개 문서).
- 웹 카드는 #f3f3f3 면, 모서리 16px, 사이 24px로 놓는다.
- 알약 버튼 모서리는 높이의 절반(32px → 16px, 50px → 25px)으로 둔다.
- 본문에 -0.2~-0.5px 음수 자간을 준다.

### Don't
- #fee500과 #fae100을 섞어 쓰지 않는다(버튼과 브랜드 팔레트는 다른 값)(공개 문서).
- 말풍선 심볼의 모양·비율·색을 바꾸거나 생략하지 않는다(공개 문서).
- 로그인 버튼에 "카카오 로그인"/"로그인" 밖의 문구를 쓰지 않는다(공개 문서).
- 버튼을 넓힐 때 글자 크기·자간을 바꾸지 않는다(공개 문서).
- 카드·버튼에 그림자를 넣지 않는다(실측 3개 화면 box-shadow 0건).
- 메타 글자 #888888을 #f3f3f3 카드 위 긴 본문에 쓰지 않는다(대비 3.2:1).

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 카카오 디벨로퍼스 디자인 가이드(카카오 로그인, 카카오싱크, 톡캘린더). UI 시스템 문서·Storybook은 공개 자료 없음.
- 버전·변경 관리: 공개 자료 없음
- 에셋: 톡캘린더 아이콘은 SVG로 받는다.

## 12. AI에 넣을 때
```
카카오 스타일로 웹 화면을 디자인해 줘.
- 주색: 노랑 #fae100(브랜드), 로그인 버튼만 #fee500 + 검정 85% 글자
- 배경: #ffffff, 카드 면 #f3f3f3, 진한 띠 #111111
- 글자: 제목 #000000, 본문 #333333, 설명 #666666, 메타 #888888
- 글꼴: 시스템 산스(Apple SD Gothic Neo, 맑은 고딕), 음수 자간 -0.2~-0.5px
- 크기: 섹션 제목 30px 굵게, 본문 14~16px 행간 1.75, 메타 13px
- 모서리: 카드 16px, 칩 6px, 메뉴·버튼은 알약형(999px)
- 간격: 카드 사이 24px, 헤더 72px
- 그림자 없이 면 색으로 구분
- 분위기: 담백한 흰 화면 위에 노랑은 한두 군데만
```

## 13. 참고 자료
- https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide (카카오 로그인 디자인 가이드, 확인 2026-10-31)
- https://developers.kakao.com/docs/ko/kakaosync/design-guide (카카오싱크 디자인 가이드, 확인 2026-10-31)
- https://developers.kakao.com/docs/ko/talkcalendar/design-guide (톡캘린더 디자인 가이드·브랜드 팔레트, 확인 2026-10-31)
- https://www.kakaocorp.com/page/ (홈 실측, 확인 2026-10-31)
- https://www.kakaocorp.com/page/presskit (뉴스 목록 실측, /page/news에서 이동, 확인 2026-10-31)
- https://www.kakaocorp.com/page/detail/12181 (뉴스 상세 실측, 확인 2026-10-31)

근거와 한계
- 공개 문서에서 읽은 것: 로그인·카카오싱크 버튼 색(#fee500, #000000 85%·90%, #191919), 모서리(12px, 6dp), 글자 문구와 크기 규칙, 브랜드 팔레트(#fae100, #000000, #ffffff), 로고 바탕 규칙.
- 실측한 것: kakaocorp.com 3개 화면의 글자색·바탕색·글꼴·글자 크기·모서리·버튼 크기. 브라우저 개발자 도구 계산값을 셌고, 2개 화면 이상에서 반복된 값 위주로 적었다.
- 하지 못한 것: 카카오톡 앱 실측, 모바일 웹 실측, 다크 모드 바탕색, 상태 색, 입력창·모달·토스트. 카카오는 공개 UI 토큰을 내지 않아 회사 웹사이트 값이 카카오톡 앱과 같다고 볼 수 없다.
- 원칙 4·5와 표시 없는 Do & Don't는 SylviaLab이 관찰에서 정리했다. 접근성 대비는 위 HEX로 SylviaLab이 계산했다.
- 서비스 이름과 브랜드는 각 권리자의 것이며, 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 로그인·카카오싱크 버튼 색(#fee500, #000000, #000000 85%·90%, #191919), 모서리(12px, 6dp), 허용 문구, 크기 조절 규칙(글자 높이 1/3, 좌우 균등 확장), 버튼 글자 OS 기본 서체 30pt, 홍보물 글꼴, 브랜드 팔레트(#fae100, Pantone 108C), 로고 바탕 규칙, 톡캘린더 아이콘 SVG 규칙(카카오 디벨로퍼스).
- **화면에서 잰 값(관찰)**: kakaocorp.com 3개 화면의 글자색·바탕색·글꼴·글자 크기·행간·자간·모서리·버튼 크기·헤더 72px·폭 1024/630px·카드 301×385px·다크 모드 글자색(2026-10-31).
- **SylviaLab이 정리·권장한 것**: 원칙 4·5, 역할 이름과 관찰 팔레트 이름, 알약 모서리 규칙, 각 장의 Don't, 7장 배치 예시, 접근성 대비 계산값, `(구현 권장)` 항목, 투명도를 #rrggbbaa로 옮긴 표기.
- **확인 못 한 것**: 카카오톡 앱 화면, 모바일 웹, 다크 바탕, 상태 색, 입력창·모달·토스트, 눌림·비활성 상태, 모션, 로그인 버튼 높이.
