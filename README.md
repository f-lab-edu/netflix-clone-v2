# Netflix Clone 프로젝트
1. 프로젝트 소게
1. 화면 구성
1. 기술 스택
1. 구현 기능
1. 프로젝트 구조
1. 배포

## 프로젝트 소게
Netflix 클론 코딩을 위한 개인 프로젝트 입니다.
최대한 유사하게 만드는 것을 목표로 진행하였습니다.
프로젝트 진행 기간 : 2024.12.23 ~ 

## 화면 구성
1. 로그인 페이지
    - password, login code(email)
1. 로그아웃 페이지
1. 비밀번호 찾기 페이지
    - email, sms
1. 회원가입
1. 프로필 변경 페이지
    1. 핀번호 입력 다이얼로그
1. 회원 설정
    1. 맴버쉽
        1. 결제 수단 등록
        2. 결제 이력 
    1. 보안
        1. 비밀번호
        1. 이메일 인증 & 관리
        1. 휴대폰 인증 & 관리
        1. 
    1. 디바이스 & 엑세스 관리 페이지
    1. 프로필
        1. 프로필 관리
1. 프로필
    1. 프로필 잠금
    1. 이메일 설정
    1. 언어 설정
    1. 시청 재한
    1. 자막 표시 설정(자막 스타일 지정)
    1. 재생 설정
    1. 시청 기록
1. 메인페이지
1. 검색 결과 페이지
1. 컨탠츠 시청 페이지
1. 컨텐츠 상세 보기

## 기술 스택
### FE
nextjs, react-hook-form, react-query, jotai, styled-component, msw, JWT, i18n

### BE
#### Featured
apollo/server, typeorm, type-graph, mysql

## 이번 프로젝트를 개발하며 배우고자 하는 점
- styled-component 깔끔하게 하기
- react-hook-form의 숙달
- react-query에 대한 이해도
- react의 고유 hook의 학습 및 숙달
- nextjs를 활용한 라우팅 및 middleware로 회원, 비회원 구분
- jotai를 통한 글로벌 변수 활용
- msw를 활용해 mock server를 이용한 개발 속도 가속

## 구현 기능
공통 사항

- [ ] 반응형 웹사이트 만들기
- [ ] react-hook-form을 활용하여 rule관리 및 입력에 대한 validation 수행
- [ ] react-hook-form을 활용한 가변 입력창(ex: 로그인 페이지, 비밀번호 찾기 페이지)에 대한 대응
- [ ] 각각의 요소별 애니메이션 구현
- [ ] react의 createPortal를 활용한 dialog 구현
- [ ] react의 useDeferredValue를 활용한 각종 폼 기능 구현