---
version: "1.0"
name: "네이버"
description: "네이버 그린 #03C75A를 HEX·RGB·CMYK·PANTONE까지 공식으로 고정하고 로고 변형을 금지하며, 회사 사이트는 흰 바탕·#1a1d24 글자·8px 모서리로 그린만 포인트로 두는 플랫폼"
source:
  - "https://www.navercorp.com/company/brandGuide (공식 브랜드 리소스: 브랜드 색, 로고 규칙)"
  - "navercorp.com 메인·브랜드 리소스 computed style·CSS 변수 실측(2026-10-31, macOS Chrome 1362px)"
  - "https://guide.ncloud-docs.com/docs/sso-button-design-guide (계열사 참고)"
updated: "2026-10-31"

# 주의: 포털 naver.com은 접근이 막혀 재지 못했다. 아래 값은 브랜드 색(공식)과
# 회사 사이트 navercorp.com(관찰)의 값이다. 포털 화면 값으로 쓰지 않는다.

# ─────────────────────────────────────────────
# 1. 색 — 브랜드(공식) + 사이트 팔레트 → 역할
# ─────────────────────────────────────────────
colors:
  # 브랜드 (공식)
  naver-green: "#03c75a"   # RGB 3·199·90, CMYK 72·0·88·0, PANTONE 2270C

  # 사이트 팔레트 (navercorp.com 실측·CSS 변수)
  white: "#ffffff"
  gray-25: "#fbfbfd"       # --relateContent
  gray-50: "#f6f7fb"       # --bgColor02
  gray-75: "#f2f4f5"       # 카드·영역 바탕(실측)
  gray-100: "#f1f1f4"      # --bgColor
  gray-150: "#e9eaeb"      # 카드 테두리(실측)
  gray-200: "#e4e6ea"      # --inputBox
  gray-300: "#d5d7da"      # --border01
  gray-500: "#bbbbbe"      # --secDesc
  gray-550: "#a1a1a6"      # --searchTxt
  gray-600: "#86868b"      # --listSub
  gray-650: "#717680"      # 보조 글자(실측)
  gray-700: "#6e6e73"      # --inputColor
  gray-800: "#424245"      # --box-text
  gray-900: "#1d1d1f"      # --pageTitle
  gray-950: "#1a1d24"      # --default
  blue: "#4078ff"
  blue-tint: "#e8f6ff"

  # ── 역할 ──
  brand: "{colors.naver-green}"
  text-primary: "{colors.gray-950}"
  text-title: "{colors.gray-900}"
  text-box: "{colors.gray-800}"
  text-input: "{colors.gray-700}"
  text-secondary: "{colors.gray-650}"
  text-tertiary: "{colors.gray-600}"
  text-placeholder: "{colors.gray-550}"
  text-disabled: "{colors.gray-500}"
  surface: "{colors.white}"
  surface-subtle: "{colors.gray-50}"
  surface-muted: "{colors.gray-75}"
  surface-button: "{colors.gray-100}"
  input-bg: "{colors.gray-200}"
  border: "{colors.gray-150}"
  border-input: "{colors.gray-200}"
  border-strong: "{colors.gray-950}"
  accent-blue: "{colors.blue}"
  accent-blue-tint: "{colors.blue-tint}"

# ─────────────────────────────────────────────
# 2. 타이포그래피 (navercorp.com 실측)
# ─────────────────────────────────────────────
typography:
  font-family: "InterVariable, NanumHuman, Pretendard, sans-serif"
  letter-spacing-body: "-0.5px"
  display: { fontSize: "32px", fontWeight: 600 }                 # 행간 42~47px
  title: { fontSize: "26px", lineHeight: "36px", fontWeight: 600 }
  subtitle: { fontSize: "20px", lineHeight: "28px", fontWeight: 600 }
  body-lg: { fontSize: "18px", lineHeight: 1.66, fontWeight: 400 }
  body: { fontSize: "16px", lineHeight: "26px", fontWeight: 400 }
  body-530: { fontSize: "16px", lineHeight: "26px", fontWeight: 530 }   # 가변 글꼴 값
  body-600: { fontSize: "16px", lineHeight: "26px", fontWeight: 600 }
  body-sm: { fontSize: "14px", lineHeight: "22px", fontWeight: 400 }
  body-sm-600: { fontSize: "14px", lineHeight: "22px", fontWeight: 600 }
  caption: { fontSize: "12px", lineHeight: "18px", fontWeight: 400 }

spacing:
  header: "100px"      # 회사 사이트 머리 높이. 간격 단계는 재지 못했다

rounded:
  xs: "3px"
  sm: "6px"
  md: "8px"            # 카드·버튼 기본
  lg: "14px"
  xl: "24px"
  full: "50%"

border-width:
  regular: "1px"

components:
  button-type3: { backgroundColor: "{colors.surface-button}", textColor: "{colors.text-title}", borderColor: "{colors.border-input}", rounded: "{rounded.md}" }
  button-download: { textColor: "{colors.text-title}" }
  button-outline-strong: { borderColor: "{colors.border-strong}", borderWidth: "1px" }
  input: { backgroundColor: "{colors.input-bg}", textColor: "{colors.text-input}", placeholderColor: "{colors.text-placeholder}" }
  tab: { textColor: "{colors.text-input}" }
  tab-inactive: { textColor: "{colors.text-disabled}" }
  card: { backgroundColor: "{colors.surface-muted}", rounded: "{rounded.md}" }
  card-outline: { backgroundColor: "{colors.surface}", borderColor: "{colors.border}", rounded: "{rounded.md}" }
  header: { backgroundColor: "{colors.surface}", height: "{spacing.header}" }
---

# 네이버 디자인 시스템

> 근거: 공개 문서 기반(브랜드 색: 네이버 공식 브랜드 리소스) + 관찰 기반 (실측일 2026-10-31, macOS Chrome 데스크톱 · 창 너비 1362px · navercorp.com computed style과 CSS 변수)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다.

먼저 밝혀 둔다. 포털 naver.com은 이번 작업 환경에서 열 수 없었다. 셸은 프록시가 막았고, WebFetch와 연결된 Chrome 모두 접근이 차단됐다(developers.naver.com, hangeul.naver.com도 같음). 그래서 포털 화면의 글자 크기·간격·컴포넌트 값은 비어 있다. 이 문서는 (1) 회사가 공개한 브랜드 색과 (2) 회사 사이트 navercorp.com의 실측값으로 채웠다. navercorp.com은 회사 소개 사이트라 포털과 화면 규칙이 다를 수 있다.

## 1. 개요와 원칙
- 서비스 성격: 검색 포털과 여러 생활 서비스를 묶은 플랫폼. 운영사는 네이버(주).
- 디자인 인상 한 줄: 네이버 그린(#03C75A) 하나를 브랜드 색으로 고정하고, 나머지는 흰 바탕과 짙은 남색 계열 글자(#1a1d24)로 정리한다(회사 사이트 기준).
- 공식 시스템 이름: 공개된 UI 디자인 시스템 문서는 찾지 못했다. 공개된 것은 로고·브랜드 색 가이드(브랜드 리소스)다.
- 디자인 원칙
  1. 브랜드 색은 네이버 그린 하나로 고정하고 HEX·RGB·CMYK·PANTONE까지 정해 둔다. (네이버 브랜드 리소스)
  2. 로고는 모양·색·스타일을 바꾸지 않고 그대로 쓴다. 배경에 따라 흰색·검정 로고만 허용한다. (네이버 브랜드 리소스)
  3. 화면은 흰 바탕과 짙은 남색 글자로 두고 그린은 포인트에만 쓴다. (관찰에서 정리, 회사 사이트 기준)
  4. 글자 자간을 -0.5px로 좁히고 본문 행간을 약 1.6배로 둔다. (관찰에서 정리, 회사 사이트 기준)
- 톤: 흰 화면에 그린 한 색, 짧은 권유·금지 문장으로 단정하게.

### 특장점
- 브랜드 색을 매체별로 고정한다 — 네이버 그린 #03C75A를 RGB 3·199·90, CMYK 72·0·88·0, PANTONE 2270C까지 공식 브랜드 리소스에 적어 두어 화면·인쇄·별색이 같은 색을 낸다.
- 로고 보호 규칙이 구체적이다 — 선으로만 그리기, 이미지 틀, 색 바꾸기, 그라데이션, 비율 변경, 효과, 잘 안 보이는 배경 위 올리기를 금지하고, 생성형 AI 학습 자료로 재배포하는 것도 막는다.
- 계열사까지 같은 그린을 쓴다 — 네이버클라우드 로그인 버튼 가이드도 #03C75A를 쓰고, 보조로 시안 #00C3C8을 둔다.
- 사이트 CSS 변수가 역할 이름으로 붙어 있다 — navercorp.com은 --default(#1A1D24), --pageTitle(#1d1d1f), --inputBox(#e4e6ea), --buttonType3 같은 역할 변수로 글자·면·버튼을 나눈다.
- 영문과 한글 글꼴을 짝지어 쓴다 — 회사 사이트는 InterVariable(영문·숫자)과 나눔휴먼(한글)을 함께 쓰고 가변 굵기 530까지 쓴다.

### 배울 점
- 브랜드 색을 정할 때 네이버처럼 화면용 HEX·RGB와 인쇄용 CMYK·PANTONE을 한 표에 같이 적는다.
- 로고 사용 규칙을 쓸 때 "하지 말 것"을 행동 단위(색 바꾸기, 비율 바꾸기, 효과 넣기)로 한 줄씩 나열한다.
- 사이트 색을 관리할 때 --pageTitle, --inputBox처럼 쓰임 이름의 CSS 변수로 둔다.

### 이 문서를 읽는 AI 에이전트에게
- 이 문서에서 "공식"은 브랜드 색과 로고 규칙뿐이다. 나머지 화면 값은 회사 사이트 navercorp.com에서 잰 것이라 포털 naver.com 화면을 흉내 낼 근거가 아니다.
- 로고는 그리지도, 이미지로 넣지도 않는다. 자리에는 "NAVER 로고" 같은 빈 틀만 둔다.
- 네이버 그린 `brand`(#03C75A)는 브랜드 접점(로고 주변, 강조 면)에만 쓰고, 흰 바탕 글자색으로 쓰지 않는다(2.3:1).
- 색은 YAML 역할 이름(`text-primary`, `surface-muted`, `border`)으로 쓴다. 간격·컴포넌트 크기는 `확인 필요`이니 값을 지어내지 말고 사용자에게 묻는다.

## 2. 색상
### 색 체계
| 층 | 예시 | 근거 | 쓰는 곳 |
|---|---|---|---|
| 브랜드 | `naver-green` #03C75A | 공식 브랜드 리소스 | 로고, 브랜드 접점 |
| 사이트 팔레트 | `gray-950`, `gray-75`, `gray-200` | navercorp.com 실측·CSS 변수 | 값 정의 |
| 역할 | `text-primary`, `surface-muted`, `input-bg` | SylviaLab이 사이트 변수 쓰임을 보고 정리 | 화면 |

- 사이트 CSS 변수(`--default`, `--pageTitle`, `--inputBox` …)가 이미 역할 이름이라, YAML 역할 이름은 이 변수 쓰임을 따라 붙였다(부록 A).

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| NAVER Green | #03C75A | 로고, 브랜드를 나타내는 모든 접점(공식 문서) |
| blue | #4078ff | navercorp.com 메인 화면 강조 글자·테두리(실측) |
| blue-tint | #e8f6ff | 메인 화면 연한 파랑 면(실측) |
| privacy-bg | #f2f6ff | 개인정보 영역 바탕(CSS 변수) |
| flower-bg | #ebf4ff | 연한 파랑 면(CSS 변수) |
| orange | #ff5f00 | 브랜드 리소스 화면 1곳(실측) |

- 네이버 그린 공식 값: RGB 3 · 199 · 90(화면용), CMYK 72 · 0 · 88 · 0(인쇄용), PANTONE 2270C(별색 인쇄). navercorp.com 브랜드 리소스 화면의 색 견본 면도 #03c75a로 실측됐다.
- 로고 반전: 흰색 · 검정. 그린 로고가 잘 안 보이는 배경에서만 쓴다.
- 참고: 계열사 네이버클라우드의 로그인 버튼 가이드도 같은 그린 #03C75A를 쓰고, 보조로 시안 #00C3C8, 기본형 버튼 면 #F9F9F9·테두리 #AAAAAA를 정해 두었다. 이것은 NAVER Cloud Platform 계정 로그인 버튼용이다. 네이버 아이디 로그인 버튼 규격은 확인하지 못했다.

### 바탕·선
navercorp.com 실측과 CSS 변수다. `--`로 시작하는 이름은 사이트 변수 이름 그대로다.

| 토큰 | HEX | 쓰임 |
|---|---|---|
| --background01 | #ffffff | 기본 바탕 |
| --relateContent | #fbfbfd | 관련 콘텐츠 바탕 |
| --bgColor02 | #f6f7fb | 보조 바탕 |
| 실측 바탕 | #f2f4f5 | 메인 화면 카드·영역 바탕(44곳) |
| --bgColor | #f1f1f4 | 보조 바탕, 3번 버튼 면 |
| --inputBox | #e4e6ea | 입력칸·검색칸 바탕(--searchBox), 테두리(--border03) |
| 실측 테두리 | #e9eaeb | 1px 카드 테두리 |
| --graphBar | #e0e0e0 | 그래프 막대 |
| --border05 | #d8d8d8 | 테두리 |
| --border01 | #D5D7DA | 테두리 |
| --border02 | #cfcfcf | 테두리 |
| --newslistBg | #000000 | 뉴스 목록 어두운 면 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| --default | #1A1D24 | 기본 글자(실측 최다) |
| --pageTitle | #1d1d1f | 페이지·섹션 제목(--secTitle), 버튼 글자 |
| --box-text | #424245 | 상자 안 글자 |
| --graphTitle | #444444 | 그래프 제목 |
| --inputColor | #6e6e73 | 입력 글자, 탭(--tab-cta) |
| 실측 보조 글자 | #717680 | 본문 보조 글자(142~147곳) |
| --listSub | #86868b | 목록 보조, 날짜(--newsDate) |
| --searchTxt | #a1a1a6 | 검색 placeholder, 약한 설명(--flowerDesc) |
| --secDesc | #bbbbbe | 4차 글자, 접기 번호(--accordionNum), 비활성 탭(--tab-cta02) |

### 상태
- success, warning, error, info: 모두 확인 필요. 포털과 회사 사이트 모두에서 상태 색 정의를 확인하지 못했다.
- 다크 모드: 확인 필요.

### 역할별 색
- **브랜드 그린 #03C75A**: 로고와 브랜드 접점. 위에 글자를 얹는다면 짙은 글자(#1a1d24, 7.5:1)가 흰 글자(2.3:1)보다 대비가 높다(계산값). 실제 쓰임은 확인 필요.
- **글자 단계**: 기본 #1a1d24 → 제목·버튼 #1d1d1f → 상자 #424245 → 입력 #6e6e73 → 보조 #717680 → 목록 보조 #86868b → placeholder #a1a1a6 → 비활성 #bbbbbe.
- **면 단계**: 흰 #ffffff → #fbfbfd → #f6f7fb → #f2f4f5(카드) → #f1f1f4(3번 버튼) → #e4e6ea(입력칸).
- **선**: 카드 1px #e9eaeb, 입력·3번 버튼 #e4e6ea, 강조 아웃라인 1px #1a1d24.
- **파랑 #4078ff / #e8f6ff**: 회사 사이트 메인의 강조 글자·테두리·연한 면. 포털에서의 쓰임은 확인 필요.

### 색 사용 규칙
- 네이버 그린 #03C75A는 로고와 브랜드를 나타내는 접점에 쓴다. 로고 색은 바꾸지 않는다(공식 문서).
- 그린 로고가 잘 안 보이는 배경에서만 흰색·검정 로고로 바꾼다(공식 문서).
- 회사 사이트 기준: 기본 글자는 #1a1d24, 제목·버튼 글자는 #1d1d1f, 보조 글자는 #717680.
- 회사 사이트 기준: 영역 구분은 #f2f4f5·#f6f7fb 면, 카드 테두리는 1px #e9eaeb.
- 입력칸·검색칸 면은 #e4e6ea, 그 안 placeholder는 #a1a1a6.

### Don't
- 로고 색을 그린·흰색·검정 밖의 색으로 바꾸지 않는다. (공식)
- #03C75A를 흰 바탕 위 글자색이나 흰 글자 바탕색으로 본문에 쓰지 않는다(2.3:1).
- 그린과 비슷한 다른 초록을 새로 만들지 않는다. 브랜드 색은 #03C75A 하나다.
- 계열사(네이버클라우드) 시안 #00C3C8을 네이버 화면 강조색으로 가져오지 않는다.
- 보조 글자 #717680을 #f2f4f5 카드 위 본문에 쓰지 않는다(4.1:1).

## 3. 타이포그래피
- 글꼴: InterVariable + 나눔휴먼(회사 사이트 실측 `InterVariable, NanumHuman, Pretendard, sans-serif`). 영문·숫자는 Inter, 한글은 나눔휴먼이 먼저 잡힌다.
- 글꼴(포털 naver.com): 확인 필요.
- 대체 글꼴: Pretendard, sans-serif
- 원본 단위는 px이고, 아래 표는 1px = 1pt로 적었다. 위치는 navercorp.com에서 본 위치(추정)다. 굵기 530은 가변 글꼴(InterVariable) 값이다.

| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| display | 32 | 600 | 42~47px | 가장 큰 제목 글자 |
| title | 26 | 600 | 36px | 제목 |
| subtitle | 20 | 600 | 28px | 메인 화면 반복 제목(18곳) |
| body-lg | 18 | 400 | 29.88px(1.66) | 큰 본문 |
| body | 16 | 400 | 26px | 기본 본문(가장 많음) |
| body-530 | 16 | 530 | 26px | 기본 본문 중간 굵기 |
| body-600 | 16 | 600 | 26px | 기본 본문 굵게 |
| body-sm | 14 | 400 | 22px(21.994px) | 보조 본문 |
| body-sm-600 | 14 | 600 | 22px(21.994px) | 보조 본문 굵게 |
| caption | 12 | 400 | 18px | 날짜, 작은 표시 |

### 위계와 사용처
| 층 | 토큰 | 크기/행간 | 굵기 | 사용처(회사 사이트, 추정) |
|---|---|---|---|---|
| 큰 제목 | display | 32 / 42~47px | 600 | 가장 큰 제목 |
| 제목 | title | 26 / 36px | 600 | 페이지 제목 |
| 소제목 | subtitle | 20 / 28px | 600 | 메인 반복 제목(18곳) |
| 큰 본문 | body-lg | 18 / 29.88px | 400 | 리드 문단 |
| 본문 | body, body-530, body-600 | 16 / 26px | 400·530·600 | 기본 본문 |
| 보조 본문 | body-sm, body-sm-600 | 14 / 22px | 400·600 | 설명 |
| 작은 표시 | caption | 12 / 18px | 400 | 날짜 |

### 규칙
- 자간: 본문 -0.5px(138곳), 일부 -0.2996px.
- 행간은 본문 약 1.6배(16px → 26px).
- 제목 단계(20px 이상)는 600으로 쓴다.
- 포털의 글자 단계는 확인 필요.

### Don't
- 20px 이상 제목을 400으로 쓰지 않는다. 600이다.
- 본문 행간을 1.4배 이하로 좁히지 않는다(16px → 26px).
- 가변 굵기 530을 InterVariable이 없는 환경에서 그대로 쓰지 않는다. 대체 글꼴에서는 500 또는 600으로 맞춘다. (구현 권장)
- 12px보다 작은 글자를 새로 만들지 않는다(사이트 최소 12px).

## 4. 레이아웃·간격
- 기준 화면: macOS Chrome 데스크톱, 창 너비 1362px(navercorp.com).
- 화면 좌우 여백: 모바일·데스크톱 모두 확인 필요.
- 기본 단위: 확인 필요.
- 간격 단계(관찰, pt): 확인 필요
- 그리드·최대 폭: 확인 필요.
- 회사 사이트 머리 영역 높이: 100px(실측).

### 그리드와 중단점
| 구분 | 값 |
|---|---|
| 측정 창 너비 | 1362px(데스크톱) |
| 최대 폭·컬럼·중단점 | 확인 필요 |

### 화면 세로 리듬
| 구간 | 값 |
|---|---|
| 머리 영역 | 100px |
| 구획 사이·제목 → 본문 | 확인 필요 |

### 간격 적용 규칙
- 확인 필요(간격 값을 측정하지 못했다).

### Don't
- 간격 값을 지어내 네이버 기준이라고 적지 않는다. 다시 재기 전까지 비워 둔다.
- 회사 사이트 머리 높이 100px을 포털·앱 상단 바 값으로 쓰지 않는다.
- 관찰 값이 없는 모바일 레이아웃을 데스크톱 값에서 줄여 만들지 않는다.

## 5. 모서리·고도·모션
navercorp.com 실측값이다. 포털 값은 확인 필요.

| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-xs | 3px | 작은 표시(메인 18곳) |
| radius-sm | 6px | 2~3곳, 쓰임 확인 필요 |
| radius-md | 8px | 카드·버튼 기본(메인 55곳, 브랜드 리소스 31곳) |
| radius-lg | 14px | 1곳 |
| radius-xl | 24px | 2곳, 쓰임 확인 필요 |
| radius-full | 50% | 원형 요소 |

- 테두리: border 1px solid #e9eaeb(카드 테두리), border-strong 1px solid #1a1d24(강조 아웃라인 버튼).
### 고도
- 고도(그림자·층): 확인 필요. 실측에서 대표 그림자를 찾지 못했다. 실측 화면에 rgba(0,0,0,.4)·.5 반투명 검정 면이 있었으나 쓰임은 확인하지 못했다.
- 층은 그림자보다 면 색(#ffffff ↔ #f2f4f5)과 1px #e9eaeb 테두리로 나뉜다(관찰에서 정리).

### 모션
- 모션(길이·이징): 확인 필요.

### Don't
- 카드·버튼에 8px 말고 다른 모서리를 기본으로 쓰지 않는다(메인 55곳, 브랜드 리소스 31곳이 8px).
- 쓰임을 확인 못 한 6px·14px·24px 모서리를 새 컴포넌트 기본값으로 쓰지 않는다.
- 대표 그림자를 지어내 카드에 깔지 않는다.

## 6. 컴포넌트
포털 컴포넌트는 측정하지 못했다. 아래는 회사 사이트 CSS 변수에서 확인한 것만 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 3번 버튼(--buttonType3) | 글자 #1d1d1f, 면 #f1f1f4, 테두리 #e4e6ea | 확인 필요 |
| 다운로드 버튼(--buttonDownload) | #1d1d1f | 브랜드 리소스 내려받기 |
| 강조 아웃라인 | 1px solid #1a1d24 테두리 | 확인 필요 |

- 크기·모서리: 확인 필요(모서리는 8px가 가장 많음).
- 상태: 눌림 / 비활성 / 로딩 모두 확인 필요.
- 규칙: 내려받기·주 행동 글자는 #1d1d1f. 버튼에 로고를 넣지 않는다. 터치 영역 44pt 확보. (구현 권장)

### 6.2 입력창
- 입력 글자 #6e6e73, 입력칸 면 #e4e6ea.
- 검색칸 면 #e4e6ea, placeholder #a1a1a6.
- 크기·상태: 확인 필요.
- 규칙: placeholder(#a1a1a6, 2.1:1)로 라벨을 대신하지 않는다. 라벨을 입력칸 밖에 둔다. (구현 권장)

### 6.3 칩·탭
- 회사 사이트 탭 글자 #6e6e73(--tab-cta), 비활성 #bbbbbe(--tab-cta02).
- 포털 탭: 확인 필요.

### 6.4 카드·리스트
- 카드: 바탕 #f2f4f5 또는 흰 면 + 1px #e9eaeb, 모서리 8px.
- 목록 보조 글자 #86868b, 날짜 #86868b.

### 6.5 상단 바·하단 탭 바
- 회사 사이트 머리 높이 100px.
- 포털 상단·탭: 확인 필요.

### 6.6 바텀시트·모달
- 확인 필요.

### 6.7 토스트·배지
- 확인 필요.

### 6.8 아이콘·로고
- 아이콘: 확인 필요.
- 로고 쓰기 규칙(공식 문서 요지): 선으로만 그리기, 이미지 틀로 쓰기, 색 바꾸기, 그라데이션, 비율 바꾸기, 효과 넣기, 잘 안 보이는 배경색·배경 사진 위에 올리기를 하지 않는다.
- 로고를 템플릿·데이터셋·생성형 AI 학습 자료로 재배포하지 말라고 정해 두었다. 그래서 이 문서와 AI 요약에는 로고를 넣지 않는다.

## 7. 패턴
- 목록 → 상세: 확인 필요.
- 검색: 확인 필요(포털 검색창을 측정하지 못했다).
- 빈 상태·오류: 확인 필요.
- 폼·결제: 확인 필요.
- 브랜드 리소스 안내: 색 견본 면 + 다운로드 버튼 + "하지 마세요" 금지 목록으로 구성한다(navercorp.com 브랜드 리소스 화면).
- 로딩: 확인 필요.

### 금지 목록 꼴
9장의 꼴(행동 단위로 한 줄씩, "~하지 마세요")을 따른 예시다. 공식 문장을 옮기지 않았다.

```
이렇게 쓰지 마세요
- 브랜드 색 대신 비슷한 초록을 쓰지 마세요.
- 글자 위에 그림자를 넣지 마세요.
```
(예시 문구, SylviaLab 작성)

## 8. 접근성
- 글자 대비(WCAG 2.x, 원본 HEX로 계산):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #1a1d24 | #ffffff | 16.9:1 | 통과 |
| #717680 | #ffffff | 4.6:1 | 통과 |
| #717680 | #f2f4f5 | 4.1:1 | 미달(큰 글자 3:1은 통과) |
| #86868b | #ffffff | 3.6:1 | 미달(큰 글자 3:1은 통과) |
| #a1a1a6 | #e4e6ea | 2.1:1 | 미달 |
| #1d1d1f | #f1f1f4 | 14.9:1 | 통과 |
| #03c75a | #ffffff | 2.3:1 | 미달 |
| #4078ff | #ffffff | 3.9:1 | 미달(큰 글자 3:1은 통과) |
| #424245 | #ffffff | 10.0:1 | 통과 |
| #6e6e73 | #e4e6ea | 4.1:1 | 미달(큰 글자 3:1은 통과) |
| #bbbbbe | #ffffff | 1.9:1 | 미달 |
| #1a1d24 | #03c75a | 7.5:1 | 통과 |

- 대비 메모: 네이버 그린은 흰 바탕 글자색이나 흰 글자의 바탕색으로 쓰면 2.3:1로 낮다. 보조 글자 #717680은 흰 바탕에서만 통과하고 #f2f4f5 카드 위에서는 미달이다.
- 터치 영역: 확인 필요(버튼 높이를 측정하지 못했다).
- 최소 글자 크기: 12px(caption, 회사 사이트).
- 포커스·스크린리더·글자 확대: 확인 필요.

### 점검 목록
- [ ] 입력칸 글자 #6e6e73 / #e4e6ea는 4.1:1이라 본문 기준 미달이다. 입력값 글자는 #1a1d24로 올리는 것을 검토한다. (구현 권장)
- [ ] 비활성 탭 #bbbbbe(1.9:1)는 선택 탭과 굵기·밑줄로도 구분한다. (구현 권장)
- [ ] 로고 이미지에 서비스 이름 대체 텍스트. (구현 권장)
- [ ] 키보드 포커스 표시, 확대 200%, 터치 영역: 확인 필요.

## 9. 글쓰기 톤
- 말투: 회사 사이트 브랜드 안내는 "~해 주세요", "~하지 마세요"로 끝나는 짧은 권유·금지 문장을 쓴다.
- 예시(구조만): 금지 항목은 "로고를 [행동]하지 마세요" 한 줄씩 나열한다. 설명 문단은 2~3문장으로 끊는다.
- 버튼 문구 꼴: 확인 필요.
- 숫자·단위 표기: 확인 필요.
- 포털 화면의 문구 규칙: 확인 필요.

## 10. Do & Don't
로고·브랜드 색 규칙은 네이버 공식 브랜드 리소스에서 온 것이다. 화면 규칙은 navercorp.com 실측에서 SylviaLab이 정리한 것이다(관찰에서 정리, 공식 규칙 아님).

### Do
- 브랜드 색은 #03C75A(RGB 3·199·90)로 쓰고, 인쇄는 CMYK 72·0·88·0 또는 PANTONE 2270C로 맞춘다. (공식)
- 그린 로고가 잘 안 보이는 배경에서는 흰색 또는 검정 로고로 바꾼다. (공식)
- 기본 글자는 #1a1d24, 보조 글자는 #717680으로 둔다. (관찰에서 정리)
- 본문은 16px / 26px, 자간 -0.5px로 쓴다. (관찰에서 정리)
- 카드는 #f2f4f5 면 또는 흰 면 + 1px #e9eaeb, 모서리 8px로 만든다. (관찰에서 정리)

### Don't
- 로고 색을 바꾸거나 그라데이션·효과를 넣지 않는다. (공식)
- 로고 비율을 바꾸거나 선으로만 그리거나 이미지 틀로 쓰지 않는다. (공식)
- 로고를 템플릿·데이터셋·생성형 AI 학습 자료로 재배포하지 않는다. (공식)
- #03C75A를 흰 바탕 위 본문 글자색으로 쓰지 않는다(2.3:1). (관찰에서 정리)
- 검색칸 placeholder #a1a1a6을 안내 외 정보 글자로 쓰지 않는다(#e4e6ea 위 2.1:1). (관찰에서 정리)

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공개 자료 없음. 공개된 것은 브랜드 리소스(https://www.navercorp.com/company/brandGuide)뿐이다.
- 버전·변경 관리: 공개 자료 없음

## 12. AI에 넣을 때
```
네이버 느낌으로 디자인해 줘. (포털 화면 실측값이 없으니 브랜드 색 중심으로)
- 주색: 네이버 그린 #03C75A (RGB 3,199,90). 로고는 그리지 말 것
- 배경: #ffffff, 영역 구분 #f2f4f5 / #f6f7fb
- 글자: 기본 #1a1d24, 보조 #717680, 약한 글자 #a1a1a6
- 테두리: 1px #e9eaeb, 입력칸 면 #e4e6ea
- 글꼴: Inter + 나눔휴먼(없으면 Pretendard), 자간 -0.5px
- 크기: 본문 16/26, 보조 14/22, 카드 제목 20/28 semibold, 큰 제목 32/600
- 모서리: 카드·버튼 8px, 작은 표시 3px
- 분위기: 깔끔한 흰 화면에 그린 한 색만 포인트
```

## 13. 참고 자료
- https://www.navercorp.com/company/brandGuide (확인 2026-10-31) — 공식 브랜드 리소스: 네이버 그린 HEX·RGB·CMYK·PANTONE, 로고 사용 규칙. 같은 화면의 computed style·CSS 변수 실측
- https://www.navercorp.com/main (확인 2026-10-31) — 회사 사이트 메인 실측
- https://guide.ncloud-docs.com/docs/sso-button-design-guide (확인 2026-10-31) — 네이버클라우드 로그인 버튼 색(계열사 참고)
- https://www.naver.com/ (확인 2026-10-31) — 접근 차단으로 값 없음

근거와 한계
- 공식 문서에서 확인: 브랜드 색(#03C75A와 RGB·CMYK·PANTONE), 로고 사용 규칙.
- 실측으로 확인: navercorp.com 두 화면(메인, 브랜드 리소스)의 글꼴·글자 크기·색·모서리, 그리고 그 사이트 CSS 변수. 토큰 이름 중 `--`로 시작하는 것은 사이트 변수 이름 그대로이고, 나머지는 SylviaLab이 붙였다.
- 확인하지 못함: 포털 naver.com의 모든 화면 값(글자 단계, 간격, 검색창, 탭, 카드), 다크 모드, 상태 색, 아이콘, 모션. 접근 차단 때문이다. 포털 값을 쓰려면 다른 환경에서 다시 재야 한다.
- CLAUDE.md의 "최소 3개 화면" 기준을 채우지 못했다.
- 관찰한 값은 사이트가 바뀌면 달라질 수 있다.
- 서비스 이름, 로고, 브랜드 색은 네이버의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 A. 구현 매핑
navercorp.com이 쓰는 CSS 변수(실측)와 이 문서 이름을 잇는다. 공개 패키지는 없다. 포털에 같은 변수가 있는지는 확인 필요.

| DESIGN.md | 사이트 CSS 변수 |
|---|---|
| `colors.text-primary` | `--default` |
| `colors.text-title` | `--pageTitle`, `--secTitle` |
| `colors.text-box` | `--box-text` |
| `colors.text-input` | `--inputColor`, `--tab-cta` |
| `colors.text-tertiary` | `--listSub`, `--newsDate` |
| `colors.text-placeholder` | `--searchTxt`, `--flowerDesc` |
| `colors.text-disabled` | `--secDesc`, `--accordionNum`, `--tab-cta02` |
| `colors.surface` | `--background01` |
| `colors.surface-subtle` | `--bgColor02` |
| `colors.surface-button` | `--bgColor` |
| `colors.input-bg` | `--inputBox`, `--searchBox`, `--border03` |
| `components.button-type3` | `--buttonType3` |
| `components.button-download` | `--buttonDownload` |

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**(네이버 브랜드 리소스, 확인 2026-10-31): 네이버 그린 #03C75A, RGB 3·199·90, CMYK 72·0·88·0, PANTONE 2270C, 흰색·검정 로고 반전, 로고 금지 사항, 재배포·AI 학습 금지. 계열사 참고로 네이버클라우드 로그인 버튼 색(#03C75A, #00C3C8, #F9F9F9, #AAAAAA).
- **화면에서 잰 값(관찰)**: navercorp.com 메인·브랜드 리소스 두 화면의 글꼴, 글자 크기·굵기·행간·자간, 회색·파랑 HEX, 모서리 3·6·8·14·24px, 머리 높이 100px, CSS 변수 이름과 값.
- **SylviaLab이 정리·권장한 것**: 사이트 팔레트 이름(`gray-75` 등)과 역할 층, 원칙 3·4, AI 에이전트 안내, 각 장 Don't, 역할별 색 단계 정리, 6장 `(구현 권장)` 줄, 7장 예시 문구, 8장 대비 계산과 점검 목록.
- **확인 못 한 것**: 포털 naver.com 화면 전체(접근 차단).
