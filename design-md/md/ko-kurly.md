---
version: "1.0"
name: "컬리"
description: "흰 바탕에 보라 #5f0080을 로그인·검색·배지에만 아껴 쓰고, 그림자 없이 4px 모서리와 회색 테두리로 상품 사진을 주인공으로 세우는 장보기 화면"
source:
  - "관찰: https://www.kurly.com/main, /member/login, /goods/5031442 computed style (데스크톱 폭 + 375×812 모바일 에뮬레이션)"
  - "관찰: res.kurly.com 스타일시트·Pretendard Variable 1.3.9 글꼴 CSS"
  - "실측일 2026-10-31. 쇼핑몰 화면용 공개 디자인 시스템은 찾지 못함"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 단위: 웹 computed style의 px. 1px = 1pt로 본다.
# 토큰 이름은 SylviaLab이 역할에 맞춰 붙였다(컬리 내부 이름 아님).
# ─────────────────────────────────────────────
colors:
  # ── 관찰 팔레트: 보라 (진하기별 역할) ──
  purple-900: "#5f0080"   # 행동·테두리
  purple-800: "#672091"   # 선택 탭·배지 글자
  purple-600: "#8d4cc4"   # 첫구매 혜택가
  purple-300: "#c19edf"   # 비활성 CTA 글자
  purple-100: "#e8dbf3"   # 비활성 CTA 바탕
  purple-coupon: "#bd76ff"
  teal-coupon: "#4dbed7"
  orange-discount: "#fa622f"

  # ── 관찰 팔레트: 회색 ──
  white: "#ffffff"
  gray-25: "#fcfcfc"
  gray-50: "#f7f7f7"
  gray-100: "#eceff3"
  gray-150: "#e2e2e2"
  gray-175: "#dfe4eb"
  gray-200: "#dddddd"
  gray-300: "#bcc4cc"
  gray-350: "#b5b5b5"
  gray-400: "#a7b2bc"
  gray-450: "#999999"
  gray-500: "#848f9a"
  gray-600: "#666666"
  gray-650: "#565e67"
  gray-700: "#464c52"
  gray-800: "#333333"
  gray-900: "#222222"

  # ── Semantic (화면에서는 이 이름만 쓴다) ──
  primary: "{colors.purple-900}"
  primary-text: "{colors.purple-800}"
  primary-soft: "{colors.purple-600}"
  primary-disabled-bg: "{colors.purple-100}"
  primary-disabled-text: "{colors.purple-300}"
  discount: "{colors.orange-discount}"
  coupon-purple: "{colors.purple-coupon}"
  coupon-teal: "{colors.teal-coupon}"
  background: "{colors.white}"
  bg-tabbar: "{colors.gray-25}"
  bg-subtle: "{colors.gray-50}"
  bg-badge: "{colors.gray-100}"
  line: "{colors.gray-175}"          # 가장 많이 쓰는 테두리
  line-input: "{colors.gray-200}"
  line-weak: "{colors.gray-150}"
  text-strong: "{colors.gray-900}"   # 제목·판매가
  text-primary: "{colors.gray-800}"  # 기본 본문
  text-label: "{colors.gray-650}"
  text-secondary: "{colors.gray-600}"
  text-muted: "{colors.gray-450}"
  icon-muted: "{colors.gray-400}"
  price-original: "{colors.gray-300}"
  text-inverse: "{colors.white}"

typography:
  font-family: "Pretendard, -apple-system, system-ui, AppleSDGothicNeo, 'Apple SD Gothic Neo', Helvetica, 'malgun gothic', '맑은 고딕', AppleGothic, dotum, sans-serif"
  price-hero:   { fontSize: "36px", fontWeight: 700, lineHeight: "44px" }
  title-xl:     { fontSize: "32px", fontWeight: 700, lineHeight: "38px" }
  title-lg:     { fontSize: "28px", fontWeight: 600, lineHeight: "36px" }   # 상세 상품명 H1
  section:      { fontSize: "28px", fontWeight: 500, lineHeight: "36px" }   # 데스크톱 섹션 H2
  price-detail: { fontSize: "28px", fontWeight: 700, lineHeight: "36px" }
  sub:          { fontSize: "20px", fontWeight: 400, lineHeight: "28px" }
  section-m:    { fontSize: "18px", fontWeight: 600, lineHeight: "26px" }   # 모바일 섹션 제목
  cta:          { fontSize: "18px", fontWeight: 600, lineHeight: "18px" }
  body-lg:      { fontSize: "16px", fontWeight: 400, lineHeight: "24px" }   # 카드 상품명
  price:        { fontSize: "16px", fontWeight: 700, lineHeight: "24px", letterSpacing: "-0.5px" }
  body:         { fontSize: "14px", fontWeight: 400 }                        # 행간 14~21px
  body-strong:  { fontSize: "14px", fontWeight: 500, lineHeight: "19px" }
  caption:      { fontSize: "13px", fontWeight: 400 }                        # 행간 17~18px
  micro:        { fontSize: "12px", fontWeight: 400 }                        # 행간 12~16px
  badge-num:    { fontSize: "10px", fontWeight: 700, lineHeight: "12px" }
  letter-spacing:
    price: "-0.5px"
    login: "-0.6px"
    search: "-0.33px"

spacing:
  xxs: "2px"
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"   # 모바일 좌우 여백
  2xl: "20px"  # 모바일 팝업 좌우
  3xl: "24px"  # 큰 CTA 좌우
  inset:
    badge: "3px 8px"
    coupon-band: "6px 8px"
    option-box: "12px 16px"
    count-badge: "2px 5px"
    input: "0 11px 0 15px"

size:
  button-primary: "54px"
  button-cta: "56px"
  button-card-add: "36px"
  button-coupon: "40px"
  button-inquiry: "40px"
  input: "54px"
  search-lg: "48px"
  search-sm: "36px"
  option-box: "48px"
  tab-mobile: "44px"
  tabbar-mobile: "45px"
  icon-button: "36px"
  icon-tabbar: "24px"
  card-width: "249px"
  info-label-col: "128px"

rounded:
  xs: "3px"
  sm: "4px"     # 기본
  md: "6px"
  lg: "8px"
  xl: "10px"
  2xl: "12px"
  full: "50%"

border-width:
  regular: "1px"

layout:
  desktop-content-width: "1050px"
  mobile-viewport: "375px"
  product-grid-desktop: { columns: 4, cardWidth: "249px", imageSize: "249x320" }
  main-banner: "1050x370"

shadow:
  card: "0 0 4px rgba(0,0,0,.08), 0 1px 0 rgba(0,0,0,.03), 0 0 0 1px rgba(0,0,0,.02)"
  pop: "0 1px 8px rgba(0,0,0,.2)"
  soft: "0 3px 4px rgba(0,0,0,.07)"
  dim-opacity: 0.5

motion:
  benefit-band: "margin 0.4s linear"
  cta: "0.1s ease-out"

components:
  button-primary:      { backgroundColor: "{colors.primary}", textColor: "{colors.text-inverse}", typography: "{typography.body}", rounded: "{rounded.md}", height: "{size.button-primary}", paddingX: "10px", width: "340px" }
  button-secondary:    { backgroundColor: "{colors.background}", textColor: "{colors.primary}", borderColor: "{colors.primary}", rounded: "{rounded.md}", height: "{size.button-primary}" }
  button-cta:          { typography: "{typography.cta}", rounded: "{rounded.2xl}", height: "{size.button-cta}", paddingX: "{spacing.3xl}", width: "432px" }
  button-cta-disabled: { backgroundColor: "{colors.primary-disabled-bg}", textColor: "{colors.primary-disabled-text}" }
  button-card-add:     { backgroundColor: "{colors.background}", textColor: "{colors.text-primary}", borderColor: "{colors.line}", rounded: "{rounded.sm}", height: "{size.button-card-add}" }
  button-coupon:       { backgroundColor: transparent, textColor: "{colors.text-primary}", borderColor: "{colors.primary-text}", rounded: "{rounded.lg}", height: "{size.button-coupon}" }
  button-inquiry:      { backgroundColor: transparent, textColor: "{colors.text-primary}", borderColor: "{colors.line-weak}", rounded: "{rounded.xs}", height: "{size.button-inquiry}" }
  input:               { borderColor: "{colors.line-input}", textColor: "{colors.text-primary}", rounded: "{rounded.sm}", height: "{size.input}", padding: "{spacing.inset.input}" }
  search-lg:           { borderColor: "{colors.primary}", rounded: "{rounded.md}", height: "{size.search-lg}" }
  search-sm:           { backgroundColor: "{colors.bg-subtle}", rounded: "{rounded.md}", height: "{size.search-sm}" }
  option-box:          { backgroundColor: "{colors.background}", borderColor: "{colors.line}", rounded: "{rounded.xl}", height: "{size.option-box}", padding: "{spacing.inset.option-box}" }
  tab-mobile:          { textColor: "{colors.text-secondary}", fontWeight: 400, height: "{size.tab-mobile}" }
  tab-mobile-selected: { textColor: "{colors.primary-text}", fontWeight: 600 }
  badge-kurly-only:    { backgroundColor: "{colors.bg-badge}", textColor: "{colors.primary-text}", typography: "{typography.micro}", fontWeight: 500, rounded: "{rounded.sm}", padding: "{spacing.inset.badge}" }
  badge-count:         { backgroundColor: "{colors.primary}", textColor: "{colors.text-inverse}", typography: "{typography.badge-num}", rounded: "{rounded.xl}", padding: "{spacing.inset.count-badge}" }
  coupon-band:         { backgroundColor: "{colors.coupon-purple}", textColor: "{colors.text-inverse}", rounded: "{rounded.sm}", padding: "{spacing.inset.coupon-band}" }
  coupon-band-members: { backgroundColor: "{colors.coupon-teal}" }
  tabbar-mobile:       { backgroundColor: "{colors.bg-tabbar}", borderTopColor: "{colors.line-input}", height: "{size.tabbar-mobile}" }
---

# 컬리 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, Claude 데스크톱 앱 내장 브라우저(Chromium) · 데스크톱 폭과 375×812 모바일 에뮬레이션, 개발자 도구 computed style을 스크립트로 읽음. 작업 컨테이너의 셸은 이 사이트에 접속하지 못해 Playwright 대신 이 방법을 썼다.)
> 작성: SylviaLab · 최종 수정 2026-10-31

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 어긋나면 YAML 값이 우선한다.

## 1. 개요와 원칙
- 서비스 성격: 식품·생활용품·뷰티를 파는 온라인 장보기 몰. 웹(kurly.com)과 앱을 함께 운영한다.
- 디자인 인상 한 줄: 흰 바탕에 짙은 보라 한 가지를 브랜드 색으로 쓰고, 할인율만 주황으로 띄우는 차분한 상품 목록 화면.
- 공식 시스템 이름: 커머스 화면용 공개 디자인 시스템은 확인하지 못했다. 컬리 기술 블로그에는 물류 조직의 KLDS(Kurly Logistics Design System)와 웹 컴포넌트 라이브러리 Kitchen 이야기가 있다. 이것은 내부 물류 도구용이며, 아래 값은 모두 쇼핑몰 화면에서 실측한 것이다.
- 디자인 원칙(공식 원칙은 찾지 못했다):
  1. 보라는 아껴 쓰고 상품 사진을 주인공으로 둔다. 상품 카드에는 테두리·그림자가 없다. (관찰에서 정리)
  2. 면은 그림자보다 테두리(#dfe4eb)와 회색 배경(#f7f7f7)으로 나눈다. (관찰에서 정리)
  3. 가격 정보는 굵게(700), 숫자가 많은 곳만 자간을 좁힌다. (관찰에서 정리)
  4. 모서리는 4px을 기본으로 하고, 큰 버튼일수록 6~12px로 키운다. (관찰에서 정리)
- 톤: 흰 면이 넓고 차분하다. 강조는 보라 하나와 할인 주황 하나뿐이다.

### 특장점
- 보라의 진하기를 역할별로 나눈다 — 행동·테두리는 #5f0080, 선택 탭·배지 글자는 #672091, 첫구매 혜택가는 #8d4cc4, 비활성 CTA는 #e8dbf3 바탕에 #c19edf 글자다. 한 브랜드 색으로 다섯 상태를 만든다.
- 상품 카드에 "담기" 버튼을 이미지 바로 아래 둔다 — 카드 폭×36px, 흰 바탕 1px #dfe4eb 테두리, 모서리 4px 버튼이 상품명보다 위에 온다. 목록에서 바로 장바구니에 담는 흐름이다.
- 가격 줄을 세 색으로 나눈다 — 정가 #bcc4cc 취소선, 할인율 #fa622f 16px/700, 판매가 #222222 16px/700이 한 줄(할인율+판매가)에 나란히 오고, 가격 숫자는 자간 -0.5px이다.
- 그림자를 거의 쓰지 않는다 — 그림자는 작은 패널·드롭다운·상단 바 정도에만 있고(관찰 3종), 카드와 입력창은 1px 테두리(#dfe4eb, #dddddd)로 나눈다.
- 쿠폰을 이미지 위 색 띠로 알린다 — 이미지 왼쪽 아래에 #bd76ff(쿠폰·특가) 또는 #4dbed7(멤버스) 띠, 여백 6px 8px, 모서리 4px, 흰 글자 14px/500.

### 배울 점
- 브랜드 색 하나로 여러 상태를 만들 때 컬리처럼 진한 값(#5f0080)·글자용 값(#672091)·비활성 바탕/글자(#e8dbf3/#c19edf)를 따로 정해 둔다.
- 목록에서 바로 담게 할 때 컬리처럼 이미지 바로 아래 36px 외곽선 "담기" 버튼을 둬서 상세로 가지 않아도 되게 한다.
- 할인 상품 가격을 보여 줄 때 컬리처럼 정가는 흐린 회색 취소선, 할인율은 주황, 판매가는 진한 회색으로 같은 굵기 700에 색만 바꾼다.

### 이 문서를 읽는 AI 에이전트에게
- 색·크기·간격은 YAML 토큰 이름으로만 쓴다. 화면에서는 `purple-900`보다 `primary`, `gray-175`보다 `line` 같은 semantic 이름을 먼저 쓴다.
- 보라 채움(`primary`)은 화면의 주 행동 하나(로그인, 장바구니 담기)와 숫자 배지에만 쓴다. 상품 카드 안 버튼은 흰 외곽선 "담기"다.
- `discount`(#fa622f)는 할인율 숫자에만 쓴다. 가격은 늘 700, 숫자 자간은 `letter-spacing.price`(-0.5px).
- 면을 나눌 때 그림자보다 `line` 1px 테두리나 `bg-subtle` 면을 먼저 고른다.
- 판단이 어려우면 모서리는 4px, 글자는 #333333 14px, 여백은 4의 배수로 둔다.

## 2. 색상
### 색 체계
컬리는 공개 팔레트가 없다. computed style에서 반복된 값을 **관찰 팔레트**(보라 진하기 5단계 + 회색)로 모으고, 그 위에 **역할 이름**을 붙였다(관찰에서 정리).

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| 관찰 팔레트 | `purple-900`, `purple-100`, `gray-175`, `gray-800` | 토큰 정의에만. 번호는 진하기 순서일 뿐 공식 단계가 아니다 |
| 역할 이름 | `primary`, `primary-disabled-bg`, `line`, `text-primary`, `discount` | 실제 화면과 컴포넌트 |

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| primary | #5f0080 | 로그인 버튼 배경, 검색창 테두리, 회원가입 링크 글자, 장바구니 숫자 배지, 모바일 하단 탭 선택 아이콘 |
| primary-text | #672091 | 모바일 상단 탭 선택 글자, "Kurly Only" 배지 글자, 쿠폰 다운로드 버튼 테두리 |
| primary-soft | #8d4cc4 | 상세 화면 "첫구매 혜택가" 글자와 그 가격 숫자 |
| primary-disabled-bg | #e8dbf3 | 옵션 선택 전 "장바구니 담기" 버튼 배경 |
| primary-disabled-text | #c19edf | 같은 버튼의 글자 |
| discount | #fa622f | 상품 카드의 할인율(15%, 30% 등) |
| coupon-purple | #bd76ff | 상품 이미지 위 쿠폰·특가 띠 배경 |
| coupon-teal | #4dbed7 | 멤버스 쿠폰 띠 배경 |

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| background | #ffffff | 페이지 배경 |
| bg-tabbar | #fcfcfc | 모바일 하단 탭 바 배경 |
| bg-subtle | #f7f7f7 | 상단 작은 검색창 배경, 영역 구분 배경 |
| bg-badge | #eceff3 | "Kurly Only" 배지 배경 |
| line | #dfe4eb | 상품 카드 "담기" 버튼 테두리, 옵션 선택 상자 테두리. 화면에서 가장 많은 테두리색 |
| line-input | #dddddd | 로그인 입력창 테두리, 모바일 하단 바 윗선 |
| line-weak | #e2e2e2 | 고객센터 문의 버튼 테두리 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| gray-900 | #222222 | 상품명 제목(H1), 판매가, 모바일 섹션 제목 |
| gray-800 | #333333 | 기본 본문 글자. 화면에서 가장 많이 쓰인 글자색 |
| gray-700 | #464c52 | 일부 보조 글자 |
| gray-650 | #565e67 | 상세 화면 정보 표의 항목 이름(배송, 배송비) |
| gray-600 | #666666 | 모바일 상단 탭의 선택 안 된 글자 |
| gray-500 | #848f9a | 모바일 푸터 소제목 |
| gray-450 | #999999 | 흐린 안내 글자 |
| gray-400 | #a7b2bc | 후기 수, 아이콘 선 색 |
| gray-350 | #b5b5b5 | 선택 안 된 "뷰티컬리" 전환 버튼 |
| gray-300 | #bcc4cc | 정가(취소선 가격) |

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | 확인 필요 | |
| warning | 확인 필요 | |
| error | 확인 필요 | 로그인 오류 상태는 입력해 보지 않아 확인하지 못했다 |
| info | 확인 필요 | |

- 상태 색의 "배경/선/글자" 조합 규칙은 오류 화면을 보지 못해 확인 필요.
- 참고: 소셜 로그인 버튼은 각 회사 색을 그대로 쓴다(네이버 #03c75a, 카카오 #fee500에 검정 글자). 컬리 고유 색은 아니다.

### 역할별 색
- 주 행동 `primary`(#5f0080): 로그인 버튼 채움, 큰 검색창 테두리, 회원가입 링크, 장바구니 숫자 배지, 하단 탭 선택 아이콘. hover·pressed 짝은 확인 필요.
  - 비활성 짝: 바탕 `primary-disabled-bg`(#e8dbf3) + 글자 `primary-disabled-text`(#c19edf).
  - 외곽선 짝: 흰 바탕 + `primary` 테두리·글자(회원가입 버튼).
- 선택·라벨 `primary-text`(#672091): 모바일 선택 탭 글자(600), "Kurly Only" 배지 글자, 쿠폰 다운로드 버튼 테두리. 넓은 면에는 쓰지 않는다.
- 혜택가 `primary-soft`(#8d4cc4): 상세 화면 "첫구매 혜택가" 줄에만.
- 할인 `discount`(#fa622f): 상품 카드 할인율 숫자.
- 쿠폰 띠 `coupon-purple`(#bd76ff) / `coupon-teal`(#4dbed7): 이미지 위 띠 바탕, 흰 글자.
- 글자 단계: `text-strong`(#222222, 제목·판매가) → `text-primary`(#333333, 본문) → `text-label`(#565e67, 표 항목 이름) → `text-secondary`(#666666, 선택 안 된 탭) → `text-muted`(#999999) → `price-original`(#bcc4cc, 취소선 정가).
- 선 단계: `line`(#dfe4eb, 기본) / `line-input`(#dddddd, 입력창·하단 바 윗선) / `line-weak`(#e2e2e2, 약한 외곽선 버튼).

### 화면 모드
- 다크 모드는 웹에서 확인하지 못했다. 모바일 에뮬레이션에서도 밝은 화면만 나왔다(확인 필요).

### 색 사용 규칙
- primary(#5f0080)는 주 버튼 배경, 검색창 테두리, 회원가입 링크, 장바구니 숫자 배지, 하단 탭 선택 아이콘에 쓴다.
- 선택 탭 글자와 배지 글자는 #672091로 쓴다.
- discount(#fa622f)는 상품 카드 할인율에만 쓴다.
- 쿠폰 띠는 #bd76ff(쿠폰·특가)와 #4dbed7(멤버스) 두 색만 쓴다.
- 기본 글자는 #333333, 제목·판매가는 #222222, 정가는 #bcc4cc 취소선이다.
- 기획전·배너 색은 운영 중에 자주 바뀌므로 토큰으로 쓰지 않는다.
- 소셜 로그인 색(네이버·카카오)은 그 버튼에만 쓴다.

### Don't
- `discount`(#fa622f)를 버튼·제목·배지 바탕에 쓰지 않는다.
- 쿠폰 띠에 #bd76ff, #4dbed7 밖의 색을 쓰지 않는다.
- 비활성 상태를 회색으로 만들지 않는다. 보라 비활성 짝(#e8dbf3/#c19edf)을 쓴다.
- 정가(#bcc4cc)를 취소선 없이 일반 글자로 쓰지 않는다.
- 네이버 #03c75a·카카오 #fee500을 소셜 로그인 버튼 밖에서 쓰지 않는다.

## 3. 타이포그래피
- 글꼴: Pretendard(res.kurly.com에서 Pretendard Variable 1.3.9 dynamic subset CSS를 불러온다. Pretendard는 SIL Open Font License 1.1로 배포되는 무료 글꼴이다.)
- 대체 글꼴: -apple-system, system-ui, AppleSDGothicNeo, Apple SD Gothic Neo, Helvetica, malgun gothic, 맑은 고딕, AppleGothic, dotum, sans-serif (body에 걸린 순서 그대로)
- 단위: 웹 px를 그대로 적었다(1px = 1pt로 본다).

### 위계와 사용처
| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| price-hero | 36 | 700 | 44px | 상세 화면 수량·큰 숫자 |
| title-xl | 32 | 700 | 38px | 데스크톱 메인 큰 숫자·강조 |
| title-lg | 28 | 600 | 36px | 상세 화면 상품명(H1) |
| section | 28 | 500 | 36px | 데스크톱 메인 섹션 제목(H2) |
| price-detail | 28 | 700 | 36px | 상세 화면 판매가 숫자 |
| sub | 20 | 400 | 28px | 상세 화면 원산지 같은 부제 |
| section-m | 18 | 600 | 26px | 모바일 메인 섹션 제목 |
| cta | 18 | 600 | 18px | 상세 화면 "장바구니 담기" 버튼 |
| body-lg | 16 | 400 | 24px | 상품 카드 상품명(H4) |
| price | 16 | 700 | 24px | 상품 카드 판매가·할인율. 자간 -0.5px |
| body | 14 | 400 | 14~21px | 버튼, 입력창, 표 내용 |
| body-strong | 14 | 500 | 19px | 탭 선택 글자, 쿠폰 띠 글자(500~600) |
| caption | 13 | 400 | 17~18px | 정가, 후기 수, 아이디 찾기 링크 |
| micro | 12 | 400 | 12~16px | 상단 유틸 링크(로그인·회원가입), 배지(400~600) |
| badge-num | 10 | 700 | 12px | 장바구니 숫자 배지 |

- 데스크톱 섹션 제목은 28px/500, 모바일 섹션 제목은 18px/600이다. 모바일에서 크기가 줄어드는 대신 굵기를 한 단계 올린다.
- 자간: 기본은 normal. 가격 숫자는 -0.5px, 로그인 입력창과 링크는 -0.6px, 큰 검색창은 -0.33px. 숫자가 많은 곳만 좁힌다.
- 굵기: 400·500·600·700 네 단계가 모두 쓰인다. 가격은 늘 700이다.

### 규칙
- 가격(정가 제외)은 늘 700으로 쓴다.
- 자간은 숫자가 많은 곳(가격 -0.5px, 로그인 입력창·링크 -0.6px, 큰 검색창 -0.33px)만 좁히고 나머지는 normal이다.
- 상품 카드 상품명은 16px/400, 판매가·할인율은 16px/700로 같은 크기에 굵기만 다르게 한다.
- 버튼·입력창·표 내용은 14px, 정가·후기 수는 13px이다.
- 탭은 선택 600, 선택 안 됨 400으로 굵기 차이를 둔다.

### Don't
- 상품명을 700으로 쓰지 않는다. 카드 상품명은 400, 굵기는 가격에 양보한다.
- 일반 문장 자간을 좁히지 않는다(숫자가 많은 곳만).
- 상세 상품명(28px/600)보다 판매가(28px/700)를 작게 쓰지 않는다.
- 10px 숫자 배지 밖에서 12px 미만 글자를 쓰지 않는다.

## 4. 레이아웃·간격
- 기준 화면: 데스크톱 폭과 375×812 모바일 에뮬레이션.
- 화면 좌우 여백: 모바일 16px(섹션 제목과 탭이 왼쪽 16px에서 시작). 데스크톱은 가운데 1050px 고정 폭 영역.
- 간격 단계(관찰, pt): 2, 4, 6, 8, 12, 16, 20, 24 (요소 안쪽 여백에서 관찰한 값)
- 기본 단위: 4px 배수가 대부분이다. 배지 3/8px, 쿠폰 띠 6/8px, 옵션 상자 12/16px처럼 작은 값은 예외로 섞인다.
- 그리드·최대 폭: 데스크톱 상품 목록은 카드 폭 249px, 이미지 249×320(약 7.8:10 세로형). 1050px 안에 4장이 들어간다. 카드 사이 간격은 확인 필요.

### 그리드와 화면 폭
| 구분 | 폭 | 좌우 여백 | 상품 열 |
|---|---|---|---|
| 모바일(에뮬레이션) | 375px | 16px | 확인 필요 |
| 데스크톱 | 내용 1050px 고정, 가운데 | 가운데 정렬 | 4장(카드 249px) |

- 중단점 px: 확인 필요.
- 데스크톱 메인 배너: 1050×370.

### 화면 세로 리듬
| 구간 | 간격 |
|---|---|
| 상품 카드 안: 이미지 → 담기 → 상품명 → 정가 → 가격 → 후기 수 | 순서는 관찰, 간격 값은 확인 필요 |
| 섹션 → 섹션 | 확인 필요 |
| 모바일 팝업 좌우 | 20px(폭 335px) |

### 카드·상자 안쪽 여백
| 요소 | 안쪽 여백 |
|---|---|
| 배지 "Kurly Only" | 3px 8px |
| 쿠폰 띠 | 6px 8px |
| 장바구니 숫자 배지 | 2px 5px |
| 옵션 선택 상자 | 12px 16px |
| 로그인 입력창 | 위아래 0 · 좌 15px · 우 11px |
| 큰 CTA | 좌우 24px |
| 주 버튼 | 좌우 10px |

### 간격 적용 규칙
- 모바일 화면 왼쪽 시작선은 16px이다.
- 데스크톱 내용은 1050px 고정 폭 안에 두고, 상품 카드는 한 줄 4장(카드 폭 249px)이다.
- 배지·띠 같은 작은 요소의 안쪽 여백은 위아래를 좌우보다 좁게 둔다(배지 3px 8px, 쿠폰 띠 6px 8px, 옵션 상자 12px 16px).

### Don't
- 데스크톱 내용을 1050px보다 넓게 펼치지 않는다.
- 상품 이미지를 정사각형으로 자르지 않는다(249×320 세로형).
- 작은 요소 안쪽 여백을 위아래·좌우 같게 두지 않는다(위아래를 좁게).
- 모바일 시작선을 16px에서 어긋나게 두지 않는다.

## 5. 모서리·고도·모션
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-xs | 3px | 고객센터 문의 버튼 |
| radius-sm | 4px | 가장 많이 쓰는 값. 상품 카드 이미지, "담기" 버튼, 쿠폰 띠, 배지, 로그인 입력창, 모바일 팝업 |
| radius-md | 6px | 로그인·회원가입 큰 버튼, 상단 검색창, 후기 링크 칩 |
| radius-lg | 8px | 쿠폰 다운로드 버튼 |
| radius-xl | 10px | 옵션 선택 상자, 숫자 배지, 위쪽만 둥근 10px 10px 0 0 시트 |
| radius-2xl | 12px | 상세 화면 "장바구니 담기" 버튼 |
| radius-full | 50% | 원형 요소 |

- 테두리: 1px solid #dfe4eb(카드 안 버튼, 옵션 상자). 큰 검색창 안쪽 선은 inset 0 0 0 1px #f7f7f7.
- 크기가 커질수록 모서리가 커진다: 36px 담기 4px → 54px 주 버튼 6px → 56px 큰 CTA 12px(관찰에서 정리).

### 고도(층)
- 기본은 평면이다. 면은 테두리(#dfe4eb)와 회색 배경(#f7f7f7)으로 나눈다.
- 그림자는 떠 있는 요소에만 쓴다:
  - shadow-card: 0 0 4px rgba(0,0,0,.08), 0 1px 0 rgba(0,0,0,.03), 0 0 0 1px rgba(0,0,0,.02). 떠 있는 작은 패널(3곳에서 관찰).
  - shadow-pop: 0 1px 8px rgba(0,0,0,.2). 드롭다운성 레이어.
  - shadow-soft: 0 3px 4px rgba(0,0,0,.07). 상단 바 아래 그림자로 보이는 곳.
  - 모바일 팝업 뒤 배경: 검정에 불투명도 0.5.
- 상품 카드·입력창·버튼: 그림자 없음.

### 모션
- 가입 혜택 띠에 margin 0.4s linear, 상세 CTA에 0.1s ease-out. 그 밖은 확인 필요.
- 움직임 줄이기(prefers-reduced-motion) 대응: 확인 필요.

### Don't
- 상품 카드·입력창에 그림자를 넣지 않는다.
- 작은 버튼(36px)에 12px 모서리를 주지 않는다. 크기에 맞춰 4 → 6 → 12px.
- 위에 관찰된 3종 밖의 그림자를 새로 만들지 않는다.
- 팝업 딤을 0.5 밖의 불투명도로 두지 않는다.

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 보지 못한 상태는 `확인 필요`.

### 6.1 버튼
**종류**

| 변형 | 모양 | 쓰는 때 |
|---|---|---|
| 주 버튼(로그인) | 340×54, 좌우 10px, 배경 #5f0080, 글자 #ffffff 14px/400, 테두리 없음, 모서리 6px | 화면의 주요 행동 |
| 보조 버튼(회원가입) | 340×54, 배경 #ffffff, 글자 #5f0080 14px, 1px #5f0080 테두리, 모서리 6px | 주 버튼 옆 두 번째 행동 |
| 큰 CTA(장바구니 담기) | 432×56, 좌우 24px, 글자 18px/600, 테두리 없음, 모서리 12px. 활성 배경 확인 필요 | 상세 화면 구매 행동 |
| 큰 CTA 비활성 | 432×56, 배경 #e8dbf3, 글자 #c19edf, 모서리 12px | 옵션 선택 전 |
| 카드 "담기" | 카드 폭×36, 배경 #ffffff, 글자 #333333 14px, 1px #dfe4eb 테두리, 모서리 4px | 목록에서 바로 담기 |
| 쿠폰 다운로드 | 400×40, 투명 배경, 글자 #333333, 1px #672091 테두리, 모서리 8px | 상세 화면 쿠폰 받기 |
| 문의(약한 외곽선) | 140×40, 투명 배경, 글자 #333333 14px, 1px #e2e2e2 테두리, 모서리 3px | 고객센터 문의 |

**크기**

| 크기 | 높이 | 좌우 여백 | 모서리 | 글자 |
|---|---|---|---|---|
| 작은(카드 담기) | 36px | 확인 필요 | 4px | 14px/400 |
| 중간(쿠폰·문의) | 40px | 확인 필요 | 8px / 3px | 14px |
| 큰(주·보조) | 54px | 10px | 6px | 14px/400 |
| 가장 큰(CTA) | 56px | 24px | 12px | 18px/600 |

- 상태: 기본, 비활성(큰 CTA)을 봤다. 상세 CTA에는 transition 0.1s ease-out이 걸려 있다. 눌림 색과 로딩은 확인 필요.
- 쓰지 않는 때: 목록 카드 안에는 보라 채움 버튼을 쓰지 않고 흰 외곽선 "담기"를 쓴다.

**규칙**
- 보라 채움 버튼은 한 화면에 하나. 두 번째 행동은 흰 바탕 보라 외곽선(관찰에서 정리).
- 주 버튼과 보조 버튼은 같은 340×54 크기로 위아래로 쌓는다(로그인 화면).
- 버튼 문구는 "담기", "장바구니 담기"처럼 짧은 동사형.
- 옵션을 고르기 전 CTA는 비활성으로 두고, 이유(옵션 선택)를 옆 옵션 상자로 보여 준다. 비활성에는 `aria-disabled="true"`(구현 권장).
- 36px 버튼은 터치 영역을 44px 이상으로 넓힌다(구현 권장).

### 6.2 입력창
**크기·종류**

| 종류 | 크기 | 테두리 | 모서리 | 그 밖 |
|---|---|---|---|---|
| 로그인 입력창 | 340×54 | 1px #dddddd | 4px | 글자 14px/21px #333333, 여백 좌 15px·우 11px, 자간 -0.6px |
| 큰 검색창 | 400×48 | 1px #5f0080 | 6px | 왼쪽 여백 14px, 입력 글자 16px |
| 작은 검색창(스크롤 후) | 160×36 | 없음, 배경 #f7f7f7 | 6px | — |
| 옵션 선택 상자 | 432×48 | 1px #dfe4eb, 배경 #ffffff | 10px | 여백 12px 16px |

- 상태: 포커스·오류는 확인 필요.

**규칙**
- 브랜드 테두리(#5f0080)는 큰 검색창에만. 로그인 입력창은 회색 #dddddd.
- 입력 안내는 "[무엇]을 입력해주세요" 꼴.
- 입력창마다 보이는 라벨 또는 `aria-label`을 둔다(구현 권장).
- 오류는 `aria-invalid="true"`와 문구로 알린다(구현 권장, 오류 표시 모양은 확인 필요).

### 6.3 칩·탭
- 데스크톱 상단: 마켓컬리/뷰티컬리 전환 글자 18px. 선택 쪽은 #5f0080/500, 다른 쪽은 #b5b5b5/400.
- 모바일 상단 탭(추천·베스트·세일 등): 높이 44px, 글자 14px. 선택은 #672091/600, 나머지는 #666666/400.
- 후기 링크 칩: 모서리 6px. 나머지 값은 확인 필요.

| 상태 | 모바일 탭 | 데스크톱 전환 |
|---|---|---|
| 선택 | #672091 / 600 | #5f0080 / 500 |
| 선택 안 됨 | #666666 / 400 | #b5b5b5 / 400 |
| 눌림 | 확인 필요 | 확인 필요 |

**규칙**
- 선택은 색과 굵기를 함께 바꾼다. 색만 바꾸지 않는다.
- 탭 묶음에 `role="tablist"`, 선택 탭에 `aria-selected="true"`(구현 권장).

### 6.4 상품 카드·정보 표
- 상품 카드는 테두리·그림자 없이 이미지 → "담기" 버튼 → 상품명 → 정가 → 할인율+판매가 → 후기 수 순서로 쌓인다.
- 이미지 모서리 4px. 이미지 위 왼쪽 아래에 쿠폰 띠(#bd76ff 또는 #4dbed7, 여백 6px 8px, 모서리 4px, 흰 글자 14px/500)가 붙는다.
- 정가 14px #bcc4cc, 할인율 16px/700 #fa622f, 판매가 16px/700 #222222. 할인율과 판매가가 한 줄에 나란히 온다.
- 상세 정보 표: 항목 이름 칸 128px, 글자 14px #565e67. 값은 14px #333333.
- 상태: 품절·찜 상태는 확인 필요.
- 쓰지 않는 때: 상품 카드에 테두리·그림자를 넣지 않는다.

**규칙**
- 카드 안 순서를 바꾸지 않는다. "담기"가 상품명보다 위다.
- 할인 상품만 정가 줄을 둔다. 할인이 없으면 판매가 한 줄(관찰 범위에서는 확인 필요).
- 정가 취소선은 화면낭독기가 읽지 않으므로 "정가" 같은 숨은 글자를 붙인다(구현 권장).
- 상품 이미지 `alt`에 상품명(구현 권장).

### 6.5 상단 바·하단 탭 바
- 모바일 하단 탭 바: 높이 45px, 배경 #fcfcfc, 윗선 1px #dddddd, 아이콘 24px 네 개. 선택 아이콘은 보라.
- 상단 아이콘 버튼: 36×36.
- 상단 검색창은 스크롤하면 400×48 → 160×36으로 줄어든다(6.2 참고).

**규칙**
- 하단 탭 선택은 아이콘 색(보라)으로만 관찰됐다. 이름 글자 유무는 확인 필요.
- 선택 탭에 `aria-current="page"`(구현 권장).

### 6.6 바텀시트·모달
- 모바일 첫 진입 팝업: 좌우 20px 띄운 335px 폭 흰 상자, 모서리 4px. 뒤 배경은 검정에 불투명도 0.5.
- 위쪽만 둥근 10px 10px 0 0 모서리 요소가 있다. 바텀시트 높이·손잡이는 확인 필요.

**규칙**
- 팝업이 열리면 포커스를 팝업 안으로 옮기고 닫기 버튼을 둔다(구현 권장).

### 6.7 배지·쿠폰 띠·토스트
| 종류 | 바탕 | 글자 | 여백 | 모서리 |
|---|---|---|---|---|
| "Kurly Only" 배지 | #eceff3 | #672091 12px/500 | 3px 8px | 4px |
| 장바구니 숫자 배지 | #5f0080 | 흰색 10px/700 | 2px 5px | 10px |
| 쿠폰·특가 띠 | #bd76ff | 흰색 14px/500 | 6px 8px | 4px |
| 멤버스 쿠폰 띠 | #4dbed7 | 흰색 14px/500 | 6px 8px | 4px |

- 토스트·스낵바: 확인 필요. 실측 중에 뜨지 않았다.

**규칙**
- 띠는 이미지 왼쪽 아래에만 붙인다.
- 숫자 배지에는 "장바구니 3개"처럼 읽히는 이름을 준다(구현 권장).

### 6.8 아이콘·이미지
- 아이콘: 선형 SVG 아이콘. 상단 아이콘 버튼 36×36, 모바일 하단 탭 아이콘 24px. 아이콘 선 색은 #333333 또는 #a7b2bc.
- 사진: 상품 사진이 화면 대부분을 차지한다. 데스크톱 메인 배너는 1050×370 이미지. 상품 이미지는 세로로 긴 비율.

## 7. 패턴
- 목록에서 바로 담기: 상품 카드의 이미지 바로 아래 "담기" 버튼으로 상세에 가지 않고 담는다.
- 목록 → 상세: 상세 화면은 상품명(28px/600) → 판매가(28px/700) → 정보 표(항목 칸 128px) → 옵션 선택 상자(432×48) → 장바구니 담기 CTA(432×56) 순서다. 옵션을 고르기 전에는 CTA가 비활성(#e8dbf3/#c19edf)이다.
- 검색: 상단 큰 검색창(400×48, 보라 테두리)이 스크롤하면 작은 회색 검색창(160×36, #f7f7f7)으로 줄어든다.
- 할인 표시: 정가 취소선 → 할인율+판매가 한 줄, 이미지 위 쿠폰 띠.
- 로그인: 입력창 54px 두 개 → 보라 주 버튼 → 흰 외곽선 회원가입 버튼 → 소셜 로그인 버튼.
- 첫 진입 팝업: 모바일에서 검정 0.5 딤 위에 335px 흰 상자.
- 선택 전 안내(9장의 문장 구조로 SylviaLab이 쓴 예):
  ```
  상품을 선택해주세요       ← 옵션 상자 안내
  [장바구니 담기]          ← #e8dbf3 / #c19edf 비활성
  ```
  (예시 문구, SylviaLab 작성)
- 빈 상태·로딩·오류: 확인 필요.
- 결제: 확인 필요.

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #222222 | #ffffff | 15.9:1 | 통과 |
| #333333 | #ffffff | 12.6:1 | 통과 |
| #565e67 | #ffffff | 6.6:1 | 통과 |
| #666666 | #ffffff | 5.7:1 | 통과 |
| #999999 | #ffffff | 2.8:1 | 미달 |
| #bcc4cc | #ffffff | 1.8:1 | 미달 |
| #ffffff | #5f0080 | 11.7:1 | 통과 |
| #8d4cc4 | #ffffff | 5.3:1 | 통과 |
| #fa622f | #ffffff | 3.1:1 | 미달(큰 글자 3:1은 통과) |
| #672091 | #eceff3 | 8.3:1 | 통과 |
| #ffffff | #bd76ff | 2.9:1 | 미달 |

- 정가(#bcc4cc)와 흐린 안내 글자(#999999), 후기 수(#a7b2bc, 2.2:1)는 기준에 못 미친다. 멤버스 쿠폰 띠 흰 글자(#ffffff/#4dbed7)는 2.2:1, 비활성 CTA 글자(#c19edf/#e8dbf3)는 1.7:1이다.
- 할인율(#fa622f)은 16px/700이라 큰 글자 기준(굵게 14pt≈18.7px 이상)에는 조금 못 미친다. 본문 기준으로는 미달로 본다.
- 터치 영역: 주 버튼 54px, 큰 CTA 56px, 입력창 54px, 모바일 상단 탭 44px는 44pt 기준을 채운다. 카드 "담기" 36px, 상단 아이콘 버튼 36×36, 작은 검색창 36px는 44pt보다 작다.
- 최소 글자 크기: 장바구니 숫자 배지 10px, 배지·유틸 링크 12px.
- 포커스·스크린리더·글자 확대: 확인 필요.

### 점검 목록
- [ ] 키보드로 카드 "담기"·탭·검색창에 갈 수 있는지, 포커스 표시가 보이는지: 확인 필요.
- [ ] 정가·후기 수 같은 흐린 글자(#bcc4cc, #a7b2bc)는 보조 정보에만 둔다. 뜻이 필요한 글자는 #666666 이상(구현 권장).
- [ ] 쿠폰 띠 흰 글자(2.9:1, 2.2:1)는 띠 문구를 상세 화면에도 글자로 반복한다(구현 권장).
- [ ] 상품 사진·배너 대체 텍스트: 확인 필요.
- [ ] 브라우저 200% 확대에서 1050px 고정 폭이 가로 스크롤을 만드는지: 확인 필요.
- [ ] 36px 버튼·아이콘 버튼의 터치 영역 44px 확보(구현 권장).

## 9. 글쓰기 톤
- 말투: 해요체와 명령형 안내가 섞인다. 입력창 안내는 "~를 입력해주세요" 꼴.
- 문장 구조(직접 관찰한 구조만, 원문 복사 금지):
  - 입력 안내: [무엇]을 입력해주세요.
  - 선택 전 상태: [무엇]을 선택해주세요.
  - 혜택 띠: [대상] [금액] 할인, [조건] 처럼 숫자를 앞에 둔다.
  - 섹션 제목에 이모지를 붙이는 운영 문구가 있다. 이것은 기획전 문구이며 시스템 규칙으로 보지 않는다.
- 버튼 문구 꼴: "담기", "장바구니 담기"처럼 짧은 동사형.
- 숫자·단위 표기: 할인율은 "15%", 혜택 문구는 숫자를 앞에 둔다.

## 10. Do & Don't
관찰 기반 문서의 규칙은 "이 서비스 화면에서 반복되는 규칙"을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 주 버튼은 54px 높이, #5f0080 배경, 흰 14px 글자, 모서리 6px로 만든다.
- 상품 카드 할인율은 #fa622f 16px/700, 판매가는 #222222 16px/700로 한 줄에 둔다.
- 정가는 13~14px #bcc4cc 취소선으로 쓴다.
- 카드 안 "담기"는 흰 바탕, 1px #dfe4eb 테두리, 36px 높이, 모서리 4px로 만든다.
- 옵션을 고르기 전 CTA는 #e8dbf3 바탕에 #c19edf 글자로 비활성 처리한다.
- 가격 숫자에는 자간 -0.5px을 준다.
- 모바일 좌우 여백은 16px, 데스크톱 내용 폭은 1050px로 둔다.

### Don't
- 상품 카드에 테두리나 그림자를 넣지 않는다.
- #fa622f를 할인율 밖의 버튼·제목에 쓰지 않는다.
- 쿠폰 띠에 #bd76ff, #4dbed7 밖의 색을 쓰지 않는다.
- 면을 나눌 때 그림자부터 쓰지 않는다. #dfe4eb 테두리나 #f7f7f7 배경을 먼저 쓴다.
- 일반 글자 자간을 좁히지 않는다(숫자가 많은 곳만).
- 기획전 배너 색을 시스템 색으로 가져오지 않는다.

## 11. 구현·운영
- 코드 컴포넌트·패키지: 쇼핑몰 화면용은 공개 자료 없음. 컬리 기술 블로그에 물류용 KLDS와 웹 컴포넌트 라이브러리 Kitchen이 소개돼 있다(쇼핑몰 화면과는 별개).
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공개 자료 없음. GitHub thefarmersfront의 공개 저장소 4개 중 디자인 시스템 저장소는 없다.
- 버전·변경 관리: 공개 자료 없음
- 웹 스타일시트는 Next.js 빌드 경로(res.kurly.com/dist/kurlymall-nx/_next/…)에서 불러온다. 글꼴은 Pretendard Variable 1.3.9.

## 12. AI에 넣을 때
```
컬리 스타일로 디자인해 줘.
- 주색: #5f0080 (보조 #672091, 비활성 배경 #e8dbf3 / 글자 #c19edf)
- 할인율: #fa622f, 정가 #bcc4cc 취소선
- 글자: #333333 본문, #222222 제목·가격
- 배경: #ffffff, 구분면 #f7f7f7, 테두리 #dfe4eb
- 글꼴: Pretendard, 본문 14px, 상품명 16px, 가격 16px/700 자간 -0.5px
- 모서리: 기본 4px, 큰 버튼 6~12px (36px 4 → 54px 6 → 56px 12)
- 간격 단위: 4px, 모바일 좌우 16px, 데스크톱 1050px 고정 폭, 상품 4열(카드 249px, 이미지 249×320)
- 버튼: 주 버튼 54px 높이 보라 배경 흰 글자, 카드 안 "담기"는 흰 배경 회색 테두리 36px
- 그림자는 떠 있는 패널·드롭다운에만, 카드·입력창은 1px 테두리
- 분위기: 흰 면이 넓고 그림자가 거의 없다. 보라는 아껴 쓰고 상품 사진이 주인공
```

## 13. 참고 자료
- https://www.kurly.com/main (확인 2026-10-31, 데스크톱·모바일 폭 실측)
- https://www.kurly.com/member/login (확인 2026-10-31, 버튼·입력창 실측)
- https://www.kurly.com/goods/5031442 (확인 2026-10-31, 상세 화면 실측)
- https://res.kurly.com/dist/kurlymall-nx/_next/static/css/f938c003d317d642.css (확인 2026-10-31, 페이지가 불러오는 스타일시트 주소)
- https://res.kurly.com/fonts/pretendard-variable/1.3.9/pretendardvariable-dynamic-subset.min.css (확인 2026-10-31, 글꼴 파일)
- https://helloworld.kurly.com/blog/klds-web-structure-refactor (확인 2026-10-31, 컬리 기술 블로그. KLDS·Kitchen 존재만 참고, 값은 쓰지 않음)
- https://github.com/thefarmersfront (확인 2026-10-31, 공개 저장소 4개 중 디자인 시스템 저장소 없음)

근거와 한계
- 모든 색·크기·모서리는 위 세 화면의 computed style에서 읽었다. 화면에 여러 번 반복된 값만 토큰으로 묶었다. 목록 값은 메인 화면의 상품 목록 구역에서 읽었고, 카테고리 목록 화면은 따로 열지 않았다.
- 토큰 이름(primary, gray-800 등)은 SylviaLab이 역할에 맞춰 붙인 이름이다. 컬리의 내부 토큰 이름이 아니다.
- 실측값은 사이트가 바뀌면 달라질 수 있다. 기획전·배너 색은 운영 중에 자주 바뀌므로 넣지 않았다.
- 다크 모드, 상태색(성공·경고·오류), 토스트, 버튼 눌림 색, 활성 CTA 색은 확인하지 못했다.
- 앱 화면은 보지 않았다. 웹 모바일 폭 값이 앱과 같다는 보장은 없다.
- 컬리와 마켓컬리 이름, 브랜드는 권리자의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 글꼴 Pretendard Variable 1.3.9(컬리가 불러오는 res.kurly.com 글꼴 CSS 주소), 대체 글꼴 순서(body computed style). 쇼핑몰 화면용 공개 디자인 시스템 문서·토큰은 없다.
- **화면에서 잰 값(관찰, 2026-10-31 computed style)**: 모든 HEX, 글자 크기·굵기·행간·자간, 버튼·입력창·상자 크기(340×54, 432×56, 400×48, 160×36, 432×48 등), 안쪽 여백, 모서리(3/4/6/8/10/12px, 50%), 그림자 3종, 딤 0.5, transition(0.4s linear, 0.1s ease-out), 1050px 내용 폭, 카드 249px·이미지 249×320.
- **SylviaLab이 정리·권장한 것**: 모든 토큰 이름, 관찰 팔레트 → 역할 이름 두 층, 보라 진하기 번호, 크기 단계 묶음(작은~가장 큰 버튼), 원칙·규칙·Don't, 선택 전 안내 예시 문구, `(구현 권장)`이 붙은 접근성 항목.
