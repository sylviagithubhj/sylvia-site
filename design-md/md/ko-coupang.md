---
version: "1.0"
name: "쿠팡"
description: "흰 바탕에 12px 글자가 빽빽한 상품 목록에서 가격 빨강 #cb1400·도착 초록 #008c00·카테고리 파랑 #346aff가 역할을 하나씩 맡는, 숫자 중심 종합 쇼핑몰"
source:
  - "관찰(웹 computed style): https://www.coupang.com/ 홈"
  - "관찰(웹 computed style): https://www.coupang.com/np/categories/393760 카테고리 목록"
  - "macOS Chrome 데스크톱, 창 너비 1362px, 비로그인, 실측일 2026-10-31"
  - "검색 결과·상품 상세는 접근 제한으로 값 없음"
updated: "2026-10-31"

# ─────────────────────────────────────────────
# 이름은 SylviaLab이 쓰임에 맞춰 붙였다. 관찰 팔레트 → 역할 이름 두 층.
# 단위는 px(웹 computed style).
# ─────────────────────────────────────────────
colors:
  # ── 관찰 팔레트 ──
  blue-500: "#346aff"
  blue-link: "#0073e9"
  blue-focus: "#4285f4"
  blue-count: "#18a0fb"
  red-600: "#cb1400"
  red-500: "#e12705"
  green-600: "#008c00"
  white: "#ffffff"
  gray-50: "#fafafa"
  gray-80: "#f5f5f5"
  gray-100: "#f0f0f0"
  gray-150: "#eeeeee"
  gray-200: "#dddddd"
  gray-220: "#d6d6d6"
  gray-300: "#cccccc"
  cool-200: "#dfe3e8"
  slate-300: "#c4cdd5"
  black: "#000000"
  gray-950: "#111111"
  slate-900: "#212b36"
  gray-800: "#333333"
  slate-700: "#454f5b"
  gray-700: "#555555"
  gray-600: "#666666"
  slate-500: "#768695"
  gray-500: "#888888"
  sky-100: "#ccedfd"
  red-50: "#fce9e6"
  red-100: "#fcd2cb"

  # ── 역할 ──
  category-blue: "{colors.blue-500}"     # 카테고리 버튼, 장바구니 개수 배지
  price-red: "{colors.red-600}"          # 할인가, 할인 문구, 단위 가격
  deal-red: "{colors.red-500}"           # 특가 배지 테두리·글자
  arrival-green: "{colors.green-600}"    # 도착 예정 날짜
  link-blue: "{colors.blue-link}"
  focus-blue: "{colors.blue-focus}"      # 검색창 2px 테두리
  count-blue: "{colors.blue-count}"      # 상단 장바구니·알림 숫자 글자
  surface: "{colors.white}"
  surface-band: "{colors.gray-100}"      # 상단 33px 메뉴 띠
  surface-subtle: "{colors.gray-50}"
  border: "{colors.gray-200}"
  border-alt: "{colors.gray-220}"
  border-checkbox: "{colors.gray-300}"
  line-cool: "{colors.cool-200}"
  text-primary: "{colors.black}"
  text-body: "{colors.gray-950}"
  text-product: "{colors.slate-900}"     # 상품명, 정상가
  text-sub: "{colors.gray-800}"          # 적립 안내
  text-secondary: "{colors.gray-600}"
  text-tertiary: "{colors.gray-500}"
  text-strike: "{colors.slate-500}"      # 정가 취소선
  shipping-tint: "{colors.sky-100}"      # 무료배송 배지 면
  price-tint: "{colors.red-50}"          # 가격 배지 면
  price-tint-border: "{colors.red-100}"

typography:
  font-family: "'Apple SD Gothic Neo', 'Noto Sans TC', 'Noto Sans JP', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif"   # 웹폰트 없음
  price-lg:       { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "20px", fontWeight: 700, lineHeight: 1.2 }   # 홈 상품 가격, 행간 24px
  title:          { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "16px", fontWeight: 700 }                   # 카테고리 목록 판매가
  body-lg:        { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }
  product-name:   { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.3 }   # 행간 18.2px
  arrival:        { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: 1.5 }   # 행간 21px
  body-sm:        { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "13px", fontWeight: 400 }
  caption:        { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "12px", fontWeight: 400, lineHeight: 1.5 }   # 가장 많이 씀. 행간 18px(또는 24px)
  caption-strong: { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "12px", fontWeight: 700, lineHeight: 1.5 }   # 할인 문구, 배지
  micro:          { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "11px", fontWeight: 400 }                   # 단위 가격
  badge-num:      { fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans', Roboto, 'Helvetica Neue', Arial, sans-serif", fontSize: "10px", fontWeight: 700 }                   # 장바구니 개수

rounded:
  none: "0px"     # 상품 사진, 검색창
  xs: "2px"       # 가격 배지 왼쪽(2px 0 0 2px)
  sm: "3px"       # 무료배송 배지
  md: "4px"       # 특가 배지, 일반 버튼(가장 많음)
  lg: "10px"      # 필터 체크 칸
  full: "9999px"  # 장바구니 개수 원

# 간격 단계는 확인하지 못했다(관찰 크기는 4의 배수가 많음).
spacing: {}

size:
  badge: "20px"
  search-height: "41px"
  search-width: "554px"
  category-button-width: "110px"
  category-button-height: "119px"
  product-cell-width: "250px"
  product-card-height: "402px"
  product-image: "218px"
  filter-check-width: "112px"
  top-ad-band: "70px"
  menu-band: "33px"
  header: "119px"   # 안팎

border-width:
  regular: "1px"
  search: "2px"

layout:
  observed-window: "1362px"
  header-inner-width: "1024px"   # 가운데 정렬

elevation:
  menu: "0 4px 5px rgba(0,0,0,.3)"                                      # 펼침 메뉴(쓰임 추정)
  card: "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)"   # 떠 있는 요소 1곳

components:
  category-button:    { backgroundColor: "{colors.category-blue}", typography: "{typography.body-lg}", width: "{size.category-button-width}", height: "{size.category-button-height}" }
  search-form:        { backgroundColor: "{colors.surface}", borderColor: "{colors.focus-blue}", borderWidth: "{border-width.search}", typography: "{typography.product-name}", rounded: "{rounded.none}", width: "{size.search-width}", height: "{size.search-height}" }
  product-card:       { width: "{size.product-cell-width}", height: "{size.product-card-height}", imageSize: "{size.product-image}", imageRounded: "{rounded.none}" }
  price-sale:         { textColor: "{colors.price-red}", typography: "{typography.title}" }
  price-regular:      { textColor: "{colors.text-product}", typography: "{typography.title}" }
  price-original:     { textColor: "{colors.text-strike}", typography: "{typography.caption}", textDecoration: "line-through" }
  arrival-text:       { textColor: "{colors.arrival-green}", typography: "{typography.arrival}" }
  unit-price:         { textColor: "{colors.price-red}", typography: "{typography.micro}" }
  badge-free-shipping: { backgroundColor: "{colors.shipping-tint}", textColor: "{colors.text-primary}", typography: "{typography.caption-strong}", rounded: "{rounded.sm}", height: "{size.badge}", width: "54px" }
  badge-deal:         { backgroundColor: "{colors.surface}", borderColor: "{colors.deal-red}", textColor: "{colors.deal-red}", typography: "{typography.caption-strong}", rounded: "{rounded.md}", height: "{size.badge}", width: "66px" }
  badge-price:        { backgroundColor: "{colors.price-tint}", borderColor: "{colors.price-tint-border}", typography: "{typography.caption-strong}", rounded: "2px 0 0 2px", height: "{size.badge}", width: "50px" }
  cart-count:         { backgroundColor: "{colors.category-blue}", typography: "{typography.badge-num}", rounded: "{rounded.full}", height: "{size.badge}" }
  filter-check:       { borderColor: "{colors.border-checkbox}", rounded: "{rounded.lg}", width: "{size.filter-check-width}", height: "{size.badge}" }
  text-link:          { textColor: "{colors.link-blue}" }
---

# 쿠팡 디자인 시스템

> 근거: 관찰 기반 (실측일 2026-10-31, macOS Chrome 데스크톱 · 창 너비 1362px · Claude in Chrome으로 computed style 직접 읽음)
> 작성: SylviaLab · 최종 수정 2026-10-31

작업 환경의 셸과 WebFetch로는 coupang.com에 접속할 수 없었다(접속 오류). 그래서 연결된 Chrome 브라우저에서 공개 페이지를 열고 값을 읽었다. 로그인하지 않은 상태다. 검색 결과와 상품 상세 페이지는 "사용 권한이 제한된 페이지" 안내로 막혀서 재지 못했다. 실측 화면은 홈과 카테고리 목록 두 곳이다.

이 문서는 디자인 시스템의 다섯 층(원칙, 토큰, 컴포넌트, 사용 규칙, 구현·검증)을 한 파일로 줄인 요약이다. 맨 위 YAML은 도구와 AI가 그대로 읽는 값이고, 아래 글은 그 값을 언제·왜 쓰는지 설명한다. 둘이 어긋나면 YAML 값을 따른다.

## 1. 개요와 원칙
- 서비스 성격: 쿠팡이 운영하는 종합 온라인 쇼핑몰. 로켓배송(빠른 배송)과 가격 비교가 화면의 중심이다.
- 디자인 인상 한 줄: 흰 바탕에 정보가 빽빽한 목록. 색은 가격·할인 빨강(#cb1400), 도착 예정 초록(#008c00), 카테고리 파랑(#346aff) 세 가지가 역할을 나눠 맡는다.
- 공식 시스템 이름: 공개된 이름 없음. 홈 화면 class 이름에 `fw-` 접두어가 붙은 유틸리티 클래스(예: `fw-bg-[#f0f0f0]`)가 보인다.
- 디자인 원칙
  1. 색 하나에 역할 하나. 빨강은 가격·할인, 초록은 도착 예정, 파랑은 카테고리·개수 배지에만 나온다. (관찰에서 정리)
  2. 정보 밀도를 높인다. 글자 크기는 12px가 가장 많고, 상품명 14px, 가격만 16~20px bold로 키운다. (관찰에서 정리)
  3. 숫자를 먼저 보여 준다. 판매가·단위 가격·도착 날짜·리뷰 수·적립을 카드 한 장에 순서대로 쌓는다. (관찰에서 정리)
  4. 장식을 줄인다. 모서리는 2~4px, 상품 사진·검색창은 모서리 0. 글꼴 파일을 받지 않고 기기 글꼴을 쓴다. (관찰에서 정리)
- 톤: 꾸밈 없이 빠르게 비교하게. 가격과 도착 날짜가 가장 먼저 읽힌다.

### 특장점
- 도착 날짜를 가격과 같은 무게로 보여 준다 — 상품 카드에서 판매가(16px/700 #cb1400) 바로 아래에 "내일(요일) 도착"을 14px 초록 #008c00으로 둔다. 배송 약속이 가격과 다른 별도 색을 가진다.
- 카드 한 장에 비교 정보를 여섯 줄로 쌓는다 — 상품명 14px → 판매가 16px → 단위 가격 11px("100g당") → 도착 예정 14px → 리뷰 수 12px → 적립 12px. 단위 가격까지 빨강으로 묶어 값 비교를 돕는다.
- 배지를 두 방식으로만 만든다 — 연한 면 + 진한 글자(무료배송 #ccedfd, 가격 배지 #fce9e6), 또는 흰 면 + 색 테두리(특가 1px #e12705). 모두 높이 20px, 글자 12px/700.
- 웹폰트 없이 기기 글꼴 순서만 지정한다 — `"Apple SD Gothic Neo", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR", … Arial`로 내려받기 없이 빠르게 그린다.
- 검색창을 화면에서 가장 굵은 선으로 띄운다 — 554×41px 폼에 2px #4285f4 테두리, 모서리 0. 다른 테두리는 1px #dddddd다.

### 배울 점
- 가격 외에 배송 약속이 중요한 상품 목록을 만들 때 쿠팡처럼 도착 날짜에 별도 색(초록)을 주고 가격 바로 아래에 둔다.
- 비교가 중요한 목록에서는 판매가 옆에 단위 가격("100g당 n원")을 11px로 붙이고 가격과 같은 색으로 묶는다.
- 배지 종류가 많을 때 "연한 면 + 진한 글자"와 "흰 면 + 색 테두리" 두 꼴로만 만들고 높이(20px)·글자(12px/700)를 고정한다.

### 이 문서를 읽는 AI 에이전트에게
- 색은 역할 이름(`price-red`, `arrival-green`, `category-blue`, `text-product`)으로 쓴다. 팔레트 이름(`red-600`)은 YAML 정의에만 둔다.
- 색 하나에 역할 하나다. 빨강은 할인가·할인 문구·단위 가격, 초록은 도착 예정, 파랑은 카테고리 버튼·개수 배지. 다른 곳에 옮겨 쓰지 않는다.
- 새 화면의 글자 색은 `text-product`(#212b36)와 `text-body`(#111111) 두 개로 줄인다. 실측 화면에 섞여 있는 #000000·#333333을 늘리지 않는다.
- 상품 상세·검색 결과·구매 버튼은 재지 못했다. 그 화면의 값을 지어내지 말고 `확인 필요`로 둔다.
- 판단이 어려우면 더 작은 모서리(0~4px), 더 적은 색, 숫자를 앞에 두는 쪽을 고른다.

## 2. 색상
값은 computed style에서 읽었다. 토큰 이름은 SylviaLab이 쓰임에 맞춰 붙인 이름이다.

### 색 체계
공식 토큰은 공개되지 않았다. **관찰 팔레트 → 역할 이름** 두 층으로 정리했다.

| 층 | 예시 | 쓰는 곳 |
|---|---|---|
| 관찰 팔레트 | `red-600`, `slate-900`, `gray-200` | computed style에서 읽은 값. YAML 정의에만 쓴다 |
| 역할 이름 | `price-red`, `arrival-green`, `text-product`, `border` | 화면과 컴포넌트 |
| 역할 묶음 | 가격(빨강) · 배송(초록·하늘) · 탐색(파랑) · 중립(회색) | 색을 고를 때 먼저 묶음을 정한다 |

- 회색은 두 계열이 섞여 있다: 순수 회색(#111111 ~ #f0f0f0)과 푸른 회색(#212b36, #454f5b, #768695, #c4cdd5, #dfe3e8). 영역마다 만든 시기가 달라 보인다.

### 브랜드·행동
| 토큰 | HEX | 쓰임 |
|---|---|---|
| category-blue | #346aff | 상단 "카테고리" 버튼 면(110×119px), 장바구니 개수 배지 면, 일부 테두리 |
| price-red | #cb1400 | 할인가, "지금 n% 할인 중" 문구, 단위 가격 |
| deal-red | #e12705 | 특가 배지 테두리·글자 |
| arrival-green | #008c00 | 도착 예정 날짜("내일(요일) 도착") |
| link-blue | #0073e9 | 카테고리 필터 "더보기" 링크 |
| focus-blue | #4285f4 | 검색창 테두리 2px |
| count | #18a0fb | 상단 장바구니·알림 숫자 글자 |

### 바탕·선
| 토큰 | HEX | 쓰임 |
|---|---|---|
| white | #ffffff | 기본 바탕 |
| gray-50 | #fafafa | 약한 영역 바탕 |
| gray-80 | #f5f5f5 | 약한 영역 바탕 |
| gray-100 | #f0f0f0 | 상단 얇은 띠(높이 33px) 바탕 |
| gray-150 | #eeeeee | 약한 구분선 |
| line-cool | #dfe3e8 | 카테고리 화면 구분선(hr), 경로 줄 |
| gray-200 | #dddddd | 기본 테두리 |
| gray-220 | #d6d6d6 | 기본 테두리 |
| gray-300 | #cccccc | 필터 체크 칸 테두리 |
| line-slate | #c4cdd5 | 보조 테두리 |

### 글자
| 토큰 | HEX | 쓰임 |
|---|---|---|
| black | #000000 | 기본 글자(홈에서 가장 많음) |
| ink | #111111 | 목록 본문 글자 |
| ink-slate | #212b36 | 상품명, 정상가, 상단 메뉴 글자 |
| gray-800 | #333333 | 적립 안내 등 본문 |
| slate-700 | #454f5b | 보조 글자 |
| gray-700 | #555555 | 보조 글자 |
| gray-600 | #666666 | 보조 글자 |
| slate-500 | #768695 | 정가(취소선) |
| gray-500 | #888888 | 3차 글자 |

- 글자 색이 #000000, #111111, #212b36, #333333 네 가지로 섞여 있다. 영역마다 만든 시기가 달라 보인다. 새로 만든다면 상품명은 #212b36, 본문은 #111111로 맞추는 것을 권한다(SylviaLab 의견).

### 상태
| 토큰 | HEX | 쓰임 |
|---|---|---|
| success | #008c00 | 도착 보장·배송 관련 긍정 정보 |
| error / sale | #cb1400 | 할인가(오류 표시는 확인 필요) |
| info | #0073e9 | 링크 |
| shipping-tint | #ccedfd | "무료배송" 배지 면(글자 #000000) |
| price-tint | #fce9e6 | 카테고리 목록 가격 배지 면(테두리 #fcd2cb) |
| price-tint-border | #fcd2cb | 카테고리 목록 가격 배지 테두리 |

- warning: 확인 필요(관찰하지 못함).

### 역할별 색
- 빨강 `price-red`(#cb1400): 할인가(16~20px/700), "지금 n% 할인 중"(12px/700), 단위 가격(11px). 할인이 없으면 가격은 `text-product`(#212b36)다.
  - 짝: 가격 배지 면 #fce9e6 + 테두리 #fcd2cb. 특가 배지는 따로 `deal-red`(#e12705) 테두리·글자.
- 초록 `arrival-green`(#008c00): 도착 예정 날짜 14px/400 한 줄 전용.
- 파랑 세 갈래: 면은 `category-blue`(#346aff, 카테고리 버튼·개수 배지), 글자 링크는 `link-blue`(#0073e9), 검색창 테두리는 `focus-blue`(#4285f4). 숫자 글자는 #18a0fb.
- 하늘 `shipping-tint`(#ccedfd): 무료배송 배지 면. 글자는 검정.
- 회색: 테두리 1px #dddddd·#d6d6d6, 구분선 #dfe3e8·#eeeeee, 띠 #f0f0f0. 정가 취소선은 푸른 회색 #768695.
- 배지의 "배경/선/글자" 조합(관찰):

| 꼴 | 배경 | 선 | 글자 | 예 |
|---|---|---|---|---|
| 연한 면 | #ccedfd | 없음 | #000000 | 무료배송 |
| 연한 면 + 선 | #fce9e6 | 1px #fcd2cb | 12px/700 | 가격 배지 |
| 흰 면 + 색 선 | #ffffff | 1px #e12705 | #e12705 | 특가진행중 |
| 진한 면 | #346aff | 없음 | 10px/700 | 장바구니 개수 |

### 화면 모드
- 다크 모드: 확인 필요.

### 색 사용 규칙
- #cb1400은 할인가, "지금 n% 할인 중", 단위 가격에만 쓴다. 할인이 없으면 가격은 #212b36.
- #008c00은 도착 예정 날짜에만 쓴다.
- #346aff는 카테고리 버튼 면과 장바구니 개수 원 배지에 쓴다. 링크는 #0073e9로 따로 둔다.
- #e12705는 특가 배지 테두리·글자에만 쓴다.
- 기본 테두리는 1px #dddddd / #d6d6d6, 검색창만 2px #4285f4.
- 정가는 #768695 취소선.

### Don't
- 할인 없는 가격을 빨강으로 칠하지 않는다.
- 도착 예정 외의 문구(혜택, 적립)를 초록으로 쓰지 않는다.
- 링크 글자를 `category-blue`(#346aff)로 쓰지 않는다. 링크는 #0073e9다.
- 배지에 위 네 꼴 밖의 조합(예: 진한 빨강 면 + 흰 글자)을 만들지 않는다.
- 테두리를 2px로 쓰지 않는다. 2px는 검색창만이다.

## 3. 타이포그래피
- 글꼴: Apple SD Gothic Neo(macOS에서 먼저 잡힘). 전체 순서는 `"Apple SD Gothic Neo", "Noto Sans TC", "Noto Sans JP", "Noto Sans KR", "Noto Sans", Roboto, "Helvetica Neue", Arial, sans-serif` — 웹폰트 없이 기기 글꼴 순서만 지정.
- 대체 글꼴: 일부 오래된 영역은 Tahoma, Arial을 쓴다(카테고리 화면 글자 요소 62개).
- 자간: 확인 필요(값을 따로 읽지 않음). 행간은 px 고정값이 많다.
- 단위는 px(표의 pt = px).

### 위계와 사용처
| 단계 | 크기(pt) | 굵기 | 행간 | 쓰임 |
|---|---|---|---|---|
| price-lg | 20 | 700 | 24px | 홈 상품 가격 |
| title | 16 | 700 | 18~32px | 카테고리 목록 판매가. 그 밖의 쓰임 확인 필요 |
| body-lg | 16 | 400 | 24px | 홈에서 51회 반복. 쓰임 확인 필요 |
| body | 14 | 400 | 18.2~21px | 상품명(18.2px), 도착 정보(21px) |
| body-sm | 13 | 400 | 42px | 높이 42px 줄 안의 글자. 쓰임 확인 필요 |
| caption | 12 | 400 | 14~24px | 리뷰 수, 적립, 상단 메뉴 — 가장 많이 씀 |
| caption-strong | 12 | 700 | 18px | "n% 할인 중", 배지 글자 |
| micro | 11 | 400 | 16.5~18px | 단위 가격 |
| badge-num | 10 | 700 | 확인 필요 | 장바구니 개수 원 배지 |

- 홈 화면 글자 요소 중 12px/400/18px가 54개, 16px/400/24px가 51개로 가장 많았다. 카테고리 화면은 12px/400/18px(140), 12px/400/24px(126), 14px/400/21px(120) 순이다.
- 굵기는 400과 700 두 가지만 보인다. 700은 가격·할인 문구·배지 글자에 몰려 있다.

### 규칙
- 기본 글자는 12px/400(행간 18px 또는 24px).
- 상품명은 14px/400, 행간 18.2px, #212b36.
- 가격만 굵게: 홈 20px/700, 카테고리 목록 16px/700.
- 할인 안내와 배지 글자는 12px/700.
- 단위 가격은 11px/400으로 가장 작게, 가격과 같은 빨강.

### Don't
- 상품명을 굵게 쓰지 않는다. 카드에서 굵은 글자는 가격과 할인 문구뿐이다.
- 가격보다 큰 글자를 상품 카드 안에 두지 않는다.
- 단위 가격을 가격과 다른 색으로 쓰지 않는다.
- 웹폰트 파일을 불러와 글꼴 순서를 바꾸지 않는다.

## 4. 레이아웃·간격
- 간격 단계(관찰, pt): 확인 필요. 관찰한 크기는 4의 배수가 많다(20, 24, 32, 41, 70px 등은 예외).
- 기본 단위: 확인 필요.
- 기준 화면: macOS Chrome 데스크톱, 창 너비 1362px.

### 그리드와 중단점
| 구분 | 값 |
|---|---|
| 관찰 창 너비 | 1362px |
| 머리 영역 안쪽 폭 | 1024px, 가운데 정렬 |
| 상품 칸 폭(카테고리 목록) | 250px |
| 상품 사진 | 218×218px 정사각 |
| 모바일 좌우 여백·중단점 | 확인 필요 |

### 화면 세로 리듬(홈 상단)
| 영역 | 높이 | 배경 |
|---|---|---|
| 맨 위 광고 띠 | 70px | 이미지 |
| 얇은 메뉴 띠 | 33px | #f0f0f0 |
| 머리(로고·검색·카테고리 버튼) | 119px 안팎 | #ffffff |

- 구획 사이·카드 사이 세로 간격은 확인 필요.

### 카드 치수
| 항목 | 값 |
|---|---|
| 상품 카드(카테고리 목록) | 250×402px |
| 사진 | 218×218px, 모서리 0 |
| 카드 안 줄 수 | 6줄(상품명 → 판매가 → 단위 가격 → 도착 예정 → 리뷰 수 → 적립) |
| 카드 안쪽 여백 | 확인 필요 |

### 간격 적용 규칙
- 머리 영역은 1024px 폭 안에 가운데 정렬한다.
- 상품 칸은 250px 폭, 사진은 218×218px 정사각.
- 그 밖의 간격 규칙은 확인 필요.

### Don't
- 상품 사진을 정사각이 아닌 비율로 자르지 않는다.
- 머리 영역을 1024px보다 넓게 펼치지 않는다(데스크톱 관찰 기준).
- 간격 값을 정해진 단계처럼 문서화하지 않는다. 간격 단계는 확인되지 않았다.

## 5. 모서리·고도·모션
### 모서리
| 토큰 | 값 | 쓰임 |
|---|---|---|
| radius-none | 0px | 상품 사진, 검색창 |
| radius-xs | 2px | 가격 배지 왼쪽 모서리(2px 0 0 2px) |
| radius-sm | 3px | "무료배송" 배지 |
| radius-md | 4px | 특가 배지, 일반 버튼 — 홈에서 가장 많음(16) |
| radius-lg | 10px | 카테고리 필터 체크 칸(112×20px, 1px #cccccc) |
| radius-full | 9999px | 장바구니 개수 원(20×20px, 50%로도 지정) |

- 모서리는 0~4px가 기본이다. 10px와 원형은 필터 칸·개수 배지 두 곳뿐이다.

### 테두리
- border: 1px solid #dddddd / #d6d6d6 — 기본 테두리
- border-search: 2px solid #4285f4 — 검색창

### 고도(층)
- 기본은 평면이다. 상품 카드는 흰 바탕 위에 그림자 없이 놓인다(카드 그림자는 관찰되지 않음).
- 그림자는 두 값만 보였다.
  - shadow-menu: 0 4px 5px rgba(0,0,0,.3) — 펼침 메뉴 [쓰임 확인 필요]
  - shadow-card: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1) — 떠 있는 요소 1곳
- 면으로 층 나누기: 상단 메뉴 띠만 #f0f0f0이고 나머지는 흰색이다.

### 모션
- 길이·이징: 확인 필요.

### Don't
- 상품 사진·검색창에 모서리를 주지 않는다.
- 버튼·배지 모서리를 4px보다 크게 하지 않는다.
- 상품 목록 카드에 그림자를 넣지 않는다.
- 펼침 메뉴 그림자(rgba(0,0,0,.3))를 카드에 쓰지 않는다.

## 6. 컴포넌트
컴포넌트마다 크기, 종류, 상태, 규칙을 적는다. 보지 못한 상태는 `확인 필요`. 접근성 메모 중 서비스가 실제로 그렇게 한다는 근거가 없는 것은 `(구현 권장)`을 달았다.

### 6.1 버튼
| 종류 | 크기 | 모양 | 쓰는 곳 |
|---|---|---|---|
| 카테고리 버튼 | 110×119px | #346aff 면, 16px 글자 | 머리 영역 왼쪽 끝, 전체 카테고리 열기 |
| 텍스트 링크 | — | #0073e9 글자 | 카테고리 필터 "더보기" |
| 일반 버튼 | 확인 필요 | 모서리 4px | 확인 필요 |

- 구매·장바구니 버튼: 상품 상세가 막혀 재지 못했다. 확인 필요.
- 상태: 눌림·비활성·로딩 확인 필요.

**규칙**
- 링크로 이동하는 "더보기"는 버튼 모양이 아니라 파란 글자 링크로 둔다.
- 접근성: 링크는 `<a>`, 동작은 `<button>`으로 구분한다 (구현 권장). 키보드 포커스 표시를 지우지 않는다 (구현 권장).

### 6.2 검색창
| 항목 | 값 |
|---|---|
| 폼 크기 | 554×41px |
| 테두리 | 2px #4285f4 |
| 모서리 | 0 |
| 입력칸 | 14px 글자, 테두리 없음 |
| placeholder | 찾는 상품을 검색하라는 짧은 권유 문장 |

- 상태: 기본만 확인. 포커스·오류는 확인 필요.

**규칙**
- 검색창은 머리 가운데, 화면에서 유일하게 2px 테두리를 가진다.
- 접근성: placeholder만으로 이름을 대신하지 않고 `aria-label`을 단다 (구현 권장).

### 6.3 필터
| 항목 | 값 |
|---|---|
| 체크 칸 | 112×20px, 1px #cccccc 테두리, 모서리 10px |
| 더보기 | #0073e9 링크 |
| 선택 상태·탭 | 확인 필요 |

**규칙**
- 필터 목록은 카테고리 화면 왼쪽에 세로로 쌓고, 길면 "더보기" 링크로 접는다.
- 접근성: 체크 칸에 연결된 라벨을 둔다 (구현 권장). 20px 높이는 터치 기기에서 작다(확인 필요).

### 6.4 상품 카드
**크기**: 250×402px, 사진 218×218px 모서리 0.

**줄 구성(카테고리 목록)**

| 줄 | 크기·굵기 | 색 |
|---|---|---|
| 상품명 | 14px/400, 행간 18.2px | #212b36 |
| 판매가 | 16px/700 | #cb1400 |
| 단위 가격(100g당 등) | 11px/400, 행간 18px | #cb1400 |
| 도착 예정 | 14px/400, 행간 21px | #008c00 |
| 리뷰 수(괄호) | 12px/400, 행간 14px | #212b36 |
| 적립 안내 | 12px/400, 행간 18px | #333333 |

- 상품 카드(홈): 가격 20px/700. 할인 중이면 #cb1400, 아니면 #212b36. 정가는 12px #768695 취소선. 할인 안내 "지금 n% 할인 중" 12px/700 #cb1400.
- 상태: 품절·눌림 확인 필요.

**규칙**
- 줄 순서를 바꾸지 않는다. 가격 → 단위 가격 → 도착 예정이 붙어 있어야 비교가 쉽다.
- 정가 취소선은 할인가 위에 둔다.
- 접근성: 취소선 정가는 "정가"라는 글자로도 읽히게 한다 (구현 권장). 상품 사진에 상품명 대체 텍스트 (구현 권장).

### 6.5 배지
| 배지 | 크기 | 면 | 글자 | 테두리 | 모서리 |
|---|---|---|---|---|---|
| 무료배송 | 54×20px | #ccedfd | 12px/700 #000000 | 없음 | 3px |
| 특가진행중 | 66×20px | 흰색 | 12px/700 | 1px #e12705 | 4px |
| 가격 배지(카테고리) | 50×20px | #fce9e6 | 12px/700 | 1px #fcd2cb | 2px 0 0 2px |
| 장바구니 개수 | 20×20px | #346aff | 10px/700 | 없음 | 50% |

**규칙**
- 배지 높이는 모두 20px, 글자는 12px/700(개수 배지만 10px).
- 배지 문구는 짧은 명사구(무료배송, 특가진행중)다.

### 6.6 상단 바
- 맨 위 광고 띠 70px → 얇은 메뉴 띠 33px(#f0f0f0) → 머리 119px 안팎(#ffffff).
- 머리: 왼쪽 카테고리 버튼, 가운데 검색창, 오른쪽 마이쿠팡·장바구니 아이콘 + 12px #212b36 글자. 장바구니 숫자 글자는 #18a0fb, 개수 원 배지는 #346aff.
- 모바일 탭 바: 확인 필요.

**규칙**
- 접근성: 아이콘 옆에 글자(마이쿠팡, 장바구니)를 함께 둬 아이콘만으로 뜻을 전하지 않는다(관찰). 개수 배지는 "장바구니 n개"처럼 읽히게 한다 (구현 권장).

### 6.7 모달·토스트
- 바텀시트·모달·토스트: 확인 필요.

### 6.8 아이콘·이미지
- 아이콘: 확인 필요.
- 사진: 흰 배경 상품 사진을 정사각형으로 모서리 없이 쓴다.

## 7. 패턴
- 목록 → 상세: 카테고리 목록은 250px 칸에 정사각 사진 + 여섯 줄 정보 카드를 격자로 놓는다. 상세 화면은 접근이 막혀 확인 필요.
- 카드 정보 순서: 상품명 → 판매가 → 단위 가격 → 도착 예정 → 리뷰 수 → 적립.
- 할인 표시: 정가 취소선(#768695) + 빨강 할인가 + "지금 n% 할인 중"(12px/700).
- 필터: 카테고리 화면 왼쪽 체크 칸(112×20px) 목록 + "더보기" 링크.
- 검색: 머리 가운데 2px 파랑 테두리 검색창만 확인. 검색 결과 화면은 접근이 막혀 확인 필요.

### 빈 상태·로딩·오류
- 확인 필요(관찰하지 못함).

### 장바구니·결제 흐름
- 확인 필요(상품 상세부터 접근이 막힘).

## 8. 접근성
- 글자 대비(WCAG 2.x, 계산값):

| 글자 | 바탕 | 대비 | 본문 기준 4.5:1 |
|---|---|---|---|
| #212b36 | #ffffff | 14.3:1 | 통과 |
| #111111 | #ffffff | 18.9:1 | 통과 |
| #333333 | #ffffff | 12.6:1 | 통과 |
| #666666 | #ffffff | 5.7:1 | 통과 |
| #768695 | #ffffff | 3.7:1 | 미달(큰 글자 3:1은 통과) |
| #888888 | #ffffff | 3.5:1 | 미달(큰 글자 3:1은 통과) |
| #cb1400 | #ffffff | 5.8:1 | 통과 |
| #008c00 | #ffffff | 4.4:1 | 미달(큰 글자 3:1은 통과) |
| #0073e9 | #ffffff | 4.5:1 | 통과 |
| #ffffff | #346aff | 4.51:1 | 통과 |
| #000000 | #ccedfd | 17.1:1 | 통과 |
| #212b36 | #fce9e6 | 12.3:1 | 통과 |
| #e12705 | #ffffff | 4.7:1 | 통과 |

- 대비 메모: 도착 예정 초록(14px/400)은 4.4:1로 본문 기준에 조금 못 미친다. 정가 #768695(12px)와 3차 글자 #888888(3.5:1)도 모자란다. 빨강 가격·할인 문구는 통과한다. 링크 #0073e9는 기준에 딱 걸친다.
- 터치 영역: 데스크톱 화면이라 마우스 기준. 배지·필터 칸 높이 20px, 검색창 41px. 모바일 터치 영역은 확인 필요.
- 최소 글자 크기: 10px(장바구니 개수 배지), 11px(단위 가격).

### 점검 목록
| 항목 | 상태 |
|---|---|
| 키보드 조작·포커스 표시 | 확인 필요 |
| 스크린리더 | 확인 필요 |
| 대체 텍스트 | 확인 필요. 상품 사진에 상품명 (구현 권장) |
| 글자 확대 | 행간이 px 고정값이라 확대 시 줄이 겹치는지 확인 필요 |
| 색 외 단서 | 할인은 "n% 할인 중" 글자, 도착은 "도착" 글자가 함께 있어 색만으로 전달하지 않는다 |
| 터치 영역 | 데스크톱만 관찰. 모바일은 확인 필요 |

## 9. 글쓰기 톤
- 말투: 짧은 명사구와 숫자.
- 숫자·단위 표기: "지금 [n]% 할인 중", "내일([요일]) 도착", "최대 [n]원 적립", "(100g당 [n]원)"처럼 숫자를 괄호와 함께 바로 보여 준다(구조만 옮김). 날짜는 "내일", "새벽"처럼 가까운 시간 표현을 쓴다.
- 버튼 문구 꼴: 확인 필요. 검색창 placeholder는 짧은 권유 문장.

## 10. Do & Don't
관찰 기반 문서의 규칙은 "이 서비스 화면에서 반복되는 규칙"을 SylviaLab이 정리한 것이다(공식 규칙 아님).

### Do
- 할인가·할인 문구·단위 가격은 #cb1400으로 칠한다. 할인이 없으면 가격은 #212b36.
- 도착 예정 날짜는 14px/400 #008c00으로 가격 아래에 둔다.
- 상품 사진은 정사각(218×218px), 모서리 0으로 쓴다.
- 배지는 높이 20px, 글자 12px/700으로 맞춘다.
- 검색창은 2px #4285f4 테두리, 모서리 0으로 만든다.
- 기본 글자는 12px, 상품명 14px, 가격 16~20px/700.
- 정가는 12px #768695 취소선으로 할인가 위에 둔다.

### Don't
- 빨강 #cb1400을 가격·할인 밖(제목, 버튼 장식)에 쓰지 않는다.
- 초록 #008c00을 도착 정보 밖에 쓰지 않는다.
- 모서리를 4px보다 크게 둥글리지 않는다(필터 칸 10px, 개수 원 배지 제외).
- 상품 사진에 모서리를 주지 않는다.
- 웹폰트를 따로 불러오지 않는다(기기 글꼴 순서만 지정).
- 새 화면에서 글자 색 네 가지(#000000, #111111, #212b36, #333333)를 섞지 않는다. 상품명 #212b36, 본문 #111111로 맞춘다(SylviaLab 의견).

## 11. 구현·운영
- 코드 컴포넌트·패키지: 공개 자료 없음. 홈 화면 class 이름에 `fw-` 접두어 유틸리티 클래스(예: `fw-bg-[#f0f0f0]`)가 보인다는 관찰만 있다.
- Figma 라이브러리: 공개 자료 없음
- 문서·Storybook: 공개 자료 없음
- 버전·변경 관리: 공개 자료 없음

## 12. AI에 넣을 때
```
쿠팡 스타일로 디자인해 줘.
- 주색: 할인가 빨강 #cb1400, 도착 예정 초록 #008c00, 카테고리 파랑 #346aff
- 배경: #ffffff, 띠 #f0f0f0, 구분선 #dddddd / #dfe3e8
- 글자: 상품명 #212b36, 본문 #111111, 정가 취소선 #768695
- 글꼴: 기기 글꼴(Apple SD Gothic Neo, Noto Sans KR, Roboto 순)
- 크기: 기본 12px, 상품명 14px, 가격 16~20px bold
- 모서리: 2~4px, 상품 사진 0
- 상품 카드 6줄: 상품명 → 판매가 → 단위 가격 → 도착 예정 → 리뷰 수 → 적립
- 배지: 높이 20px. 무료배송 #ccedfd 면 + 12px bold, 특가는 흰 면 + 1px #e12705 테두리
- 검색창: 2px #4285f4 테두리, 모서리 0
- 분위기: 정보 밀도 높은 상품 목록, 숫자 중심
```

## 13. 참고 자료
- https://www.coupang.com/ (확인 2026-10-31) — 홈 화면 실측
- https://www.coupang.com/np/categories/393760 (확인 2026-10-31) — 카테고리 목록 화면 실측
- https://www.coupang.com/np/search?q=양말 (확인 2026-10-31) — 접근 제한 안내만 표시, 값 없음
- https://www.coupang.com/vp/products/7225189423 (확인 2026-10-31) — 접근 제한 안내만 표시, 값 없음

근거와 한계
- 쿠팡은 디자인 시스템 문서를 공개하지 않았다. 모든 값은 홈과 카테고리 목록의 computed style이다.
- 검색 결과와 상품 상세는 접근이 막혀 재지 못했다. 그래서 CLAUDE.md의 "최소 3개 화면" 기준을 채우지 못했다. 구매 버튼, 옵션 선택, 리뷰 영역 값이 비어 있다.
- 데스크톱 Chrome(macOS), 비로그인 한 번의 실측이다. 글꼴 순서상 Windows·Android에서는 다른 글꼴이 보인다.
- 앱 화면, 다크 모드, 모달·토스트, 모션은 확인하지 못했다.
- 토큰 이름은 SylviaLab이 쓰임에 맞춰 붙인 이름이다.
- 관찰한 값은 사이트가 바뀌면 달라질 수 있다.
- 원칙(1장), 사용 규칙, 패턴(7장), Do & Don't(10장)는 위 관찰값에서 SylviaLab이 정리했고, 대비(8장)는 실측 HEX로 계산했다.
- 서비스 이름과 브랜드는 쿠팡의 것이다. 이 문서는 식별·학습용 참고 자료로 SylviaLab이 독자적으로 작성했다.

## 부록 B. 값의 출처 구분
- **공식 자료 그대로**: 없음. 쿠팡은 디자인 시스템 문서·코드를 공개하지 않았다.
- **화면에서 잰 값(관찰)**: 모든 HEX, 글꼴 순서, 글자 크기·굵기·행간과 반복 횟수, 모서리, 테두리, 그림자 두 값, 검색창·카테고리 버튼·상품 카드·사진·배지·필터 칸 크기, 머리 영역 폭과 상단 띠 높이(홈·카테고리 목록 computed style, 2026-10-31).
- **SylviaLab이 정리·권장한 것**: 토큰 이름 전부(팔레트·역할 두 층), 글자 색을 #212b36·#111111 두 개로 줄이자는 권장, 배지 네 꼴 표 정리, 원칙·사용 규칙·Do·Don't, 패턴 정리, `(구현 권장)` 접근성 메모, 대비 계산값.
