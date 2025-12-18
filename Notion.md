![유정현 이력서사진.jpg](attachment:1535ed96-cdcf-4930-8d88-6fbdfeac4606:%E1%84%8B%E1%85%B2%E1%84%8C%E1%85%A5%E1%86%BC%E1%84%92%E1%85%A7%E1%86%AB_%E1%84%8B%E1%85%B5%E1%84%85%E1%85%A7%E1%86%A8%E1%84%89%E1%85%A5%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg)

### **Info**

name: 유정현
Phone: 010-5421-5350
Email: dbdb1114@naver.com

[Mobile이력서](https://www.notion.so/1c3e89cc3dfe410883bc9fe8529625d7?pvs=21)

[GIT-HUB](https://github.com/dbdb1114)

[Blog](https://velog.io/@dbdb1114/posts) 

 do {
     Result 결과 = 빠른실행.run();
 } while(!결과.equals(Comlete));

---

[어플](https://play.google.com/store/apps/details?id=com.bmw.firstapp_develop&hl=ko&gl=US)을 만들면서 고민하던 문제의 해결책을 찾고 적용하는 과정에 몰입하게 됐고, 이런 몰입의 즐거움에 개발을 시작하게 되었습니다. 기본기를 다지고자 학점은행제를 시작하였고 정보통신공학 학사 취득 예정에 있습니다. 좋은 코드를 작성하기 위한 [디자인 패턴](https://github.com/dbdb1114/DesignPattern/tree/main), [클린코드](https://velog.io/@dbdb1114/series/CleanCode)에 대한 학습과  [MSA](https://velog.io/@dbdb1114/MSA%EB%9E%80-%EB%AD%98%EA%B9%8C), [SpringCloud](https://velog.io/@dbdb1114/SpringCloud-OverView) 새로운 기술들도 정리하며 공부하고 있습니다. 

기술 이외에도 개발의 꽃이라고 생각하는 협업은 자신의 역할 이행과 주변을 둘러볼 줄 아는 시야라고 생각합니다. 몰입의 즐거움으로 시작했지만 팀원으로써 어떤 조직의 멀티플라이어(주변을 성장시키는 사람)가 되는 것도 또 다른 제 목표가 되었습니다.

### Skill

---

- SpringBoot 기반의 RestAPI 개발 경험
- SpringWebFlux를 활용한 재고관리 API 설계
- JSP, ThymeLeaf를 사용한 SSR API 개발 경험
- SpringCloud (gate-way, eureka, bus) 기반의 MSA 구축
- GIT과 SVN을 활용한 형상관리

- Redis를 활용한 ReadAside, WriteThrough 캐싱 전략 구현 경험
- Docker-Compose를 통한 개발 환경 관리
- MySQL DB 설계 및 활용 경험
- Postgresq DB 설계 및 활용 경험
- JWT 토큰 활용 인증 및 인가처리 구현
- React ContextAPI, React-Router 사용 경험

### Project

---

**핫딜
이커머스 시스템**

24.04.15~24.05.17

[**Project진척관리](https://github.com/users/dbdb1114/projects/1/views/1)** 

**특정 시간에 오픈되는 한정판매 시스템**

**프로젝트 유형** : 개인 프로젝트

**기술** : SpringBoot, SpringWebFlux, SpringCloud, Redis, Docker,  MySQL, JPA, Ngrinder, Scouter

**진행 업무**

- [Git CanvanBoard , Issue, PR](https://github.com/users/dbdb1114/projects/1) 활용한 진척 관리
- 요구사항 변화에 의한 Monolithic에서 MSA 전환
    - 공통 설정파일 관리를 위한 Spring Cloud Config 도입
    - 설정파일 적용 자동화를 위한 AMQP를 활용한 Spring Cloud Bus 도입
    - Docker-Compose를 활용한 서비스 컨테이너화 및 통신 구현
- 대용량 트래픽 대응을 위해 재고관리 API를 MVC에서 WebFlux로 변경
- 재고관리 API의 Reids 동시성 문제 해결 [[ 과정 기록 Notion ]](https://www.notion.so/NPE-4f936b87fc104e85a82f3c8e224d4eec?pvs=21)
    - **문제** : 약 100건 이상의 동시 요청시 존재하는 데이터에 대해 NullPointException 발생
    - **원인** : JUnit Test로 병렬처리 시도의 경우에만 문제 발생하여 동시성 문제로 파악
    - **해결** : Redisson 분산락 방식을 도입하여 해결 및 NullPointException 에러율 0% 달성
- 상품목록 및 상세정보 조회 성능 개선 **TPS : 155.7 → 423** 
[[ 목록 정보 기록 Notion ]](https://www.notion.so/PRODUCT-LIST-0b20f869c7d9409cad199df4afc1c5b1?pvs=21) [[ 상세 과정 기록 Notion ]](https://www.notion.so/PRODUCT-DETAIL-52cf3e3137a744819a19a43533a0613f?pvs=21)
    - **문제** : 많은 동시 요청시 요청 처리 속도가 최대 6초까지 걸리는 현상
    - **원인** : BlockingIO + DB 연산의 부하가 큰 것으로 추측
    - **해결** : Redis의 Cach를 활용하여, 평균 700ms 수준으로 성능 향상

---

**공장관리 웹 
애플리케이션**

( FE 1, BE 1 )

23.04~23.06
(8주)

**FEMS 공장 데이터 시각화 웹 시스템**
회사 내 직원, 장비, 공지사항을 관리하고, 실시간 에너지 사용량 데이터를 시각화

**프로젝트 유형** : 팀프로젝트 (BE 1, FE1)

**기술** : Java, Spring-Boot, ThymeLeaf , chart.js, HTML, CSS

**진행 업무**

- 쿼리 튜닝을 통한 응답 속도 개선 ( 2~3s ⇒ ~1s )
    - **문제** : 많은 데이터와 동시에 연산 요청시 DB 서버 다운 현상 발생
    - **원인** : DB서버가 노후된 상태였고, 데이터에 대한 많은 연산을 실행시킨 것이 과부하를 발생시킴
    - **해결** : 실행 쿼리를 사용 함수, 데이터 수 등을 변인으로 하여 응답속도를 테스트 하였고, 함수의 기능은 최대한 애플리케이션으로 전가시키고, 테스트를 통해 적정 수준의 데이터 수를 도출하여 해결
- Chart.js를 통한 데이터 시각화 페이지 40% 이상 담당
- 직원, 장비, 공지사항 등을 관리하는 CRUD 설계

**회고**

- 개발자라도 요구사항만 따르는 것 보다 그 다음을 조금더 고려하여 개발해야함

---

**GooHae 
가구 쇼핑몰**

( FE2, BE2 )

23.02~23.03
(4주)

24.03~
(리팩토링 진행)

**1인 가구를 위한 가구 쇼핑몰**
기본적인 쇼핑몰

**프로젝트 유형** : 팀프로젝트 (BE 2, FE 2)

**기술** : Java, Spring-Boot, ThymeLeaf , JS, CSS

**진행 업무** 

- Redis를 이용한 중복로그인 방지 [[ 과정 기록 Blog ]](https://velog.io/@dbdb1114/Redis-%EC%B0%8D%EC%96%B4%EB%A8%B9%EA%B8%B0-%EC%A4%91%EB%B3%B5%EB%A1%9C%EA%B7%B8%EC%9D%B8)   [[ Git Hub ]](https://github.com/dbdb1114/goo-hae/pull/2) **(리팩토링)**
- 상품등록 서비스 [[ 상품 테이블 스키마 변경 기록 정리 Blog ]](https://velog.io/@dbdb1114/%EC%83%81%ED%92%88-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%8A%A4%ED%82%A4%EB%A7%88-%EB%B3%80%EA%B2%BD) **(리팩토링)**
    - **문제 :** 상품 수량과 옵션에 대한 추가금을 설정할 수 없어 상품등록에 한계가 있음
    - **원인 :** 상품 테이블을 단일 테이블로 구성하여 기능이 제한됨
    - **해결** : 기존 테이블 스키마를 여러 테이블로 나누고 참조관계를 맺어 확장성을 확보함.
- 상품 이미지 업로드 [[ 상품 이미지 업로드 GitHub ]](https://github.com/dbdb1114/goo-hae/pull/1) **(리팩토링)**
    - **문제** : 상품의 수가 많아질 수록 서버의 책임이 강하게 설계됨
    - **원인** : 모든 이미지를 서버의 resources폴더에 저장중인 것이 가장 큰 원인으로 파악
    - **해결** : Cloudinary 서비스를 이용하여 이미지를 호스팅 하는 방식으로 변경함
- 장바구니, 마이페이지, 회원가입 및 로그인 등 기본적인 유저 관련 CRUD 구현

### Career

---

**콜센터 웹 
애플리케이션**
(사내 재직 프로젝트)

23.9~23.11 

**콜센터의 상담업무를 돕기 위한 웹 기반 시스템**
직원들 간의 소통 및 민원인의 정보 저장을 위한 기능이 주를 이룬 프로젝트

**프로젝트 유형** : 유지보수

**기술** : Java, Spring, JSP, JS, CSS, HTML

**진행 업무** 

- SessionListener를 통한 중복로그인 기능 구현
    - **문제 :** 중복로그인 기능 구현중 레거시 코드와 충돌현상 발생
    - **원인 :** 기존 코드에 중복로그인을 방지하는 일부 기능만 동작하여 로그인 기록을 두 번남기고 있던 것이 문제가 됨
    - **해결 :** 로그인 정보가 지나가는 모든 경로에 로그를 남겨 이상현상 지점을 찾고, 해당 코드를 삭제한 후 로컬 환경, 배포 환경에 서버를 구동시켜 추가한 코드가 문제 없이 작동하도록 테스트진행
- 애플리케이션 내 텍스트 에디터 변경
    - **문제** : 이미지 업로드시 base64로 인코딩 된 이미지가 바로 DB에 저장되는 현상 발생
    - **원인** : 기존에 사용하던 에디터의 이미지 업로드 방식과 달리 summernote의 경우 이미지를 드래그 앤 드랍 하자마자 업로드 로직 발생
    - **해결** : 공식문서에서 이미지 업로드 콜백 설정을 찾아 요구사항에 맞춰 변경 후 적용

**회고** 

- 레거시 코드는 완벽히 분석한 후에 새로운 코드는 최소로, 기존 코드를 최대한 사용하는 것이 안정성이 높음

---

### **Expreience**

항해 취업 리부트 코스 수료 ( 2024.03 ~ 2024.05 )

- WebFlux, Spring-Cloud를 활용한 MSA 프로젝트 진행

그린컴퓨터 웹 풀스택 개발자 과정 수료 ( 2022.09 ~ 2023.03 )

- Html, CSS, JS, REACT, JAVA, JSP, SPRING 강의 수강 및 프로젝트 진행

---

### **Education**

정보통신공학 학사 학점은행제 ( 2024.07 ~ 2025.08 )

을지대학교 물리치료학과 2년 수료 ( 2017.03 ~ 2022.05 )