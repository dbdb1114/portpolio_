import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "주식회사 와트",
    position: "풀스택 개발자",
    period: "2026.01 - 재직 중 (계약직)",
    description: "사내 안전관리 솔루션 백엔드(Spring Boot, JPA, MS SQL)를 2026.09부터 인수해 운영하고, 관리 웹과 다자간 영상통화 서비스 프론트엔드를 개발 및 운영합니다.",
    groups: [
      {
        label: "백엔드",
        items: [
          "테스트 없이 인수한 코드베이스를 특성화 테스트로 현재 동작을 고정한 뒤 수정",
          "버그는 재현 테스트의 실패를 확인한 뒤 수정",
          "목록 조회 API N+1 개선",
          "같은 DTO를 쓰는 보고서 API가 깨지지 않도록 벌크 조회 로직을 공통 쿼리 클래스로 분리",
          "변경 전 테이블별 접근 경로(JPA, 네이티브 쿼리, 저장 프로시저)를 전수 확인해 숨은 스키마 의존성 식별",
          "go2rtc 연동 CCTV(RTSP) 송출을 작업 기간에 맞춰 자동 등록하고 해제하는 기능 개발",
          "AI 에이전트 작업에 컴파일, 전체 테스트, 변경 대상별 테스트를 완료 조건으로 두고 Claude Code 훅으로 강제"
        ]
      },
      {
        label: "프론트엔드",
        items: [
          "고객사별로 흩어진 레포 통합",
          "운영 중 분기 기준이 템플릿임을 파악해 DB 기반 템플릿 설정으로 재설계 주도",
          "Jenkins 빌드 OOM 원인을 webpack 병렬 워커로 특정해 피크 메모리 약 42% 절감",
          "Google OTP 2차 인증, 웹 설문 등 신규 기능을 설계부터 매뉴얼, 고객 대응까지 담당"
        ]
      },
      {
        label: "운영 및 보안",
        items: [
          "영상통화 녹화본 누락 장애를 Linux 서버와 Docker 컨테이너 로그로 원인 특정해 복구",
          "하드코딩된 TURN 자격증명을 HMAC 기반 임시 자격증명으로 전환하는 개선 제안 및 주도",
          "인증번호가 브라우저에 노출되는 취약점 발견 및 조치",
          "고객사 내부망 Linux 서버에 직접 배포"
        ]
      }
    ]
  },
  {
    company: "(주)에스이에스",
    position: "테스트 엔지니어",
    period: "2025.07 - 2026.01",
    description: "HP 프린터 제품 QA를 담당했습니다.",
    groups: [
      {
        items: [
          "테스트 시나리오 설계 기반 HP 프린터 제품 기능, 회귀 테스트 수행",
          "결함의 재현 절차와 발생 조건을 명세화한 리포트로 개발팀과 이슈 커뮤니케이션"
        ]
      }
    ]
  },
  {
    company: "제타럭스 시스템",
    position: "웹 개발자",
    period: "2024.07 - 2025.01",
    description: "공공기관 공간 및 데이터 관리 시스템(SI)의 백엔드와 관리자 화면을 개발했습니다. (Spring Boot, MyBatis, PostgreSQL, JSP, Vanilla JS, Docker)",
    groups: [
      {
        label: "백엔드",
        items: [
          "Spring Boot, MyBatis 기반 REST API 개발",
          "권한 시스템 도입으로 사용자 권한별 데이터 마스킹 처리",
          "파드 로그로 주소 정제 병목을 특정하고 병렬 처리를 적용해 엑셀 업로드 5분 → 2분 단축",
          "어노테이션, 리플렉션 기반 업로드/다운로드 구조로 컬럼 변경 시 수정 범위를 어노테이션 선언으로 한정",
          "공공데이터 오픈 API 대량 수집 시 비정형 응답 예외를 별도 로그와 파일로 분리해 문제 데이터 즉시 식별"
        ]
      },
      {
        label: "DB 이관",
        items: [
          "Java 코드 분석으로 사용/미사용 테이블 분류 자동화",
          "information_schema로 PostgreSQL 오브젝트 연관관계와 영향도를 분석하고, 개발 서버 검증 후 운영 반영"
        ]
      },
      {
        label: "화면 및 운영",
        items: [
          "JSP, Vanilla JS 기반 관리자 화면 개발",
          "MyBatis Interceptor로 API와 쿼리 호출 수를 집계해 ECharts 관리자 대시보드로 시각화",
          "Docker 기반 개발 및 배포 환경 운영",
          "기능 단위 문서로 개발 커뮤니케이션"
        ]
      }
    ]
  },
  {
    company: "시스플랫",
    position: "웹 개발자 (인턴)",
    period: "2023.09 - 2023.12",
    description: "공공기관 민원 콜센터 웹 애플리케이션의 유지보수와 신규 기능 개발을 Sprint 단위로 맡았습니다. (Spring, jQuery, Oracle, MariaDB)",
    groups: [
      {
        items: [
          "공통 코드 구조를 설계, 구현해 화면별 커스터마이징 부담 절감",
          "인증, 세션 기반 접근 제어 모듈로 동시 로그인 정책 적용",
          "Oracle에서 MariaDB로 이관 시 애플리케이션 영향 범위 점검, 호환성 이슈 대응, 데이터 정합성 검증"
        ]
      }
    ]
  },
  {
    company: "주식회사 이상",
    position: "웹 개발자 (프리랜서)",
    period: "2023.03 - 2023.07",
    description: "FEMS 공장 데이터 시각화 웹 시스템을 외주 개발했습니다. 2인 팀에서 백엔드 전담, 화면 80%를 맡았습니다.",
    groups: [
      {
        items: [
          "동시 연산 시 DB 다운 이슈를 재현, 분석해 일부 연산을 애플리케이션으로 전환",
          "통계 쿼리 응답 30초 → 5초 단축",
          "MySQL 데이터 모델 설계",
          "요구사항 정리, 개발 일정과 범위 조율 참여"
        ]
      }
    ]
  }
];

export function ExperienceSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500 mb-4">02. Experience</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">경력</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-0"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  stiffness: 200
                }}
                className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut"
                }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div className="space-y-4">
                  {exp.groups.map((group, groupIndex) => (
                    <div key={groupIndex} className="space-y-2">
                      {group.label && (
                        <div className="text-sm font-semibold text-gray-700">{group.label}</div>
                      )}
                      <ul className="space-y-1">
                        {group.items.map((item, itemIndex) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.4 + itemIndex * 0.05,
                              ease: "easeOut"
                            }}
                            className="text-sm text-gray-600 flex items-start gap-2"
                          >
                            <span className="text-gray-400">•</span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}