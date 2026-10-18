import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { ProjectDetailModal } from "./ProjectDetailModal";

// 와트 프로젝트 이미지는 추후 제공 예정. URL을 받으면 images 배열에 추가
const mainProjects = [
  {
    title: "안전관리 솔루션 백엔드 인수 및 운영",
    company: "주식회사 와트",
    description: "테스트, 린트, CI가 없는 Spring Boot 3, Java 17, JPA, MS SQL 백엔드를 인수해 운영 이슈 대응과 신규 기능 개발을 맡고 있습니다. 이슈마다 원인, 해결, 판단 근거를 기록합니다.",
    tech: ["Java", "Spring Boot", "JPA", "MS SQL", "Linux", "go2rtc", "Claude Code"],
    period: "2026.09 - 진행 중",
    role: "백엔드",
    images: [],
    tasks: [
      {
        title: "테스트 없는 코드베이스의 안전한 수정",
        items: [
          "수정 대상 로직의 현재 동작을 @DataJpaTest 특성화 테스트로 먼저 고정한 뒤 변경",
          "버그는 재현 테스트의 실패를 확인한 뒤에만 수정",
          "테이블별 접근 경로(JPA 엔티티, 네이티브 쿼리, 저장 프로시저, JdbcTemplate)를 전수 열거해 숨은 스키마 의존성을 변경 전에 식별",
          "기능 추가 전 저장 프로시저 정의를 DB에서 회수해 저장소 파일과 diff"
        ]
      },
      {
        title: "목록 조회 API N+1 개선",
        items: [
          "Projection DTO가 File 엔티티를 직접 참조해 생긴 N+1을 원인으로 특정",
          "1차 조치가 같은 DTO를 쓰는 보고서 API를 깨뜨린 것을 확인하고, 배치 로드 후 File을 벌크 조회하도록 재수정",
          "배치 로드 로직을 공통 쿼리 클래스로 분리해 두 API가 재사용"
        ]
      },
      {
        title: "AI 에이전트 검증 체계",
        items: [
          "컴파일, 전체 테스트, 변경 대상별 테스트를 완료 조건으로 두고 Claude Code 훅으로 강제",
          "사양과 버그 판단, 모호한 요구사항은 에이전트가 결론 내지 않도록 중단 조건 명시",
          "코드 그래프 도구가 Service 간 의존 27건을 0건으로 잡는 것을 실측해, 주입 관계는 코드에서 직접 추출하도록 절차 수정",
          "AI 작업 리포트를 git, 테스트 파일과 대조해 절차 위반 2건 식별",
          "작업마다 실수와 점검 사항을 되먹임 기록으로 남기는 절차를 훅으로 강제",
          "3종의 인수인계 자료를 병합해 출처 간 모순 5건과 즉시 조치 항목 6건 문서화"
        ]
      },
      {
        title: "CCTV 송출 제어 신규 기능",
        items: [
          "작업 기간에 맞춰 go2rtc API로 CCTV(RTSP) 스트림을 등록하고 기간 종료 시 해제하는 로직 개발",
          "Linux 서버에서 중계 컨테이너와 포트를 직접 확인하며 작업"
        ]
      }
    ]
  },
  {
    title: "스마트 글래스 관리 웹 시스템",
    company: "주식회사 와트",
    description: "Nuxt 관리 웹과 React 앱(iframe)으로 구성된 스마트 글래스 관리 시스템입니다. 한전, 현대, 코오롱 등 고객사에 대응합니다.",
    tech: ["React", "Nuxt", "Vue", "Nginx", "webpack", "Jenkins"],
    period: "2026.01 - 재직 중",
    role: "프론트엔드",
    images: [],
    tasks: [
      {
        title: "고객사 분기 구조 재설계",
        items: [
          "고객사별로 흩어진 React 레포 2개와 분기 브랜치를 단일 레포, 통합 브랜치로 정리",
          "고객사별 기능 분기를 EnterpriseConfig 설정 주입으로 설계, 적용",
          "약 3개월 운영 후 실제 분기 축이 고객사가 아닌 템플릿임을 파악",
          "DB 기반 템플릿 단위 설정으로 재설계를 제안하고, 백엔드 개발자, 팀장과 협업해 전환 주도"
        ]
      },
      {
        title: "빌드 및 배포 안정화",
        items: [
          "프로세스 트리 메모리 측정으로 Jenkins 빌드 OOM 원인을 webpack 병렬 워커로 특정",
          "워커 튜닝으로 빌드 피크 메모리 약 42% 절감",
          "npm 개발 서버로 운영되던 프론트엔드를 Nginx 정적 리소스 서빙으로 전환",
          "고객사 내부망 Linux 서버에 직접 배포"
        ]
      },
      {
        title: "신규 기능 및 사용자 문제 개선",
        items: [
          "Google OTP 2차 인증의 설계, 구현, 매뉴얼 담당",
          "웹 설문지 플로우의 설계, 구현, 매뉴얼 담당",
          "보고서 다건 출력 문제를 직접 발견해 설계, 구현",
          "관리 웹 SPA 전환",
          "다국어(한국어, 영어, 스페인어) 적용",
          "머지 후 검증, CSS 사이드이펙트 분석 등 반복 작업을 Claude Code 스킬로 정형화",
          "ts-morph 의존성 그래프 추출로 기존 코드 분석 범위 최소화"
        ]
      }
    ]
  },
  {
    title: "와트톡 다자간 영상통화 웹 시스템",
    company: "주식회사 와트",
    description: "스마트 글래스 착용자와 원격 관리자가 쓰는 WebRTC 기반 다자간 영상통화 서비스입니다. 운영 장애 대응과 보안 개선을 맡았습니다.",
    tech: ["Nuxt", "Vue", "WebRTC", "Janus", "Docker", "Linux"],
    period: "2026.01 - 재직 중",
    role: "프론트엔드 및 운영",
    images: [],
    tasks: [
      {
        title: "영상통화 녹화본 누락 장애 대응",
        items: [
          "Linux 서버와 Docker 컨테이너에 접속해 Janus, mp4 인코더, 시그널링 로그를 정상 동작 시나리오와 비교 분석",
          "잘못된 녹화 저장 경로 설정과 DB의 파일 경로 불일치를 원인으로 특정",
          "녹화 파일을 원위치로 복구하고 경로 설정을 바로잡음"
        ]
      },
      {
        title: "WebRTC TURN 인증 개선",
        items: [
          "하드코딩된 TURN 장기 자격증명의 노출 위험을 제기",
          "HMAC 기반 시간 제한 자격증명(TURN REST API)으로 전환을 제안하고 주도",
          "백엔드 발급 API와 연동해 프론트엔드의 임시 자격증명 처리를 직접 구현"
        ]
      },
      {
        title: "보안 취약점 조치",
        items: [
          "백엔드 로그 분석 중 인증번호가 브라우저에 노출되는 취약점 발견",
          "노출 경로를 특정해 조치하고 재발 여부 검증",
          "고객사 보안 요구에 따라 민감 정보 로깅과 IP 하드코딩 제거",
          "파일 업로드 검증 개선"
        ]
      }
    ]
  },
  {
    title: "공공기관 공간 및 데이터 관리 시스템",
    company: "제타럭스 시스템",
    description: "공공기관의 공간 및 데이터 관리 시스템(SI)입니다. 백엔드와 관리자 화면 개발을 맡았습니다.",
    tech: ["Java", "Spring Boot", "MyBatis", "PostgreSQL", "Docker", "Vanilla JS"],
    period: "2024.07 - 2025.01",
    role: "웹 개발 (백엔드 및 화면)",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/zeta1.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/zeta2.png"
    ],
    tasks: [
      {
        title: "백엔드 개발",
        items: [
          "Spring Boot, MyBatis 기반 REST API 개발",
          "권한 시스템을 도입해 사용자 권한별 데이터 마스킹 처리",
          "어노테이션, 리플렉션 기반 업로드/다운로드 구조로 컬럼 변경 시 수정 범위를 어노테이션 선언으로 한정"
        ]
      },
      {
        title: "엑셀 업로드 성능 개선",
        items: [
          "파드 로그로 주소 정제 로직이 병목임을 특정",
          "병렬 처리를 적용해 엑셀 업로드 5분 → 2분 단축"
        ]
      },
      {
        title: "DB 스키마 이관",
        items: [
          "Java 코드 분석으로 사용/미사용 테이블 분류 자동화",
          "information_schema로 PostgreSQL 오브젝트 연관관계와 영향도 분석",
          "개발 서버 검증 후 운영 반영"
        ]
      },
      {
        title: "공공데이터 오픈 API 수집 안정화",
        items: [
          "대량 수집 시 비정형 응답 예외를 별도 로그와 파일로 분리해 문제 데이터를 즉시 식별"
        ]
      },
      {
        title: "관리자 화면 및 운영",
        items: [
          "JSP, Vanilla JS 기반 관리자 화면 개발",
          "MyBatis Interceptor로 API와 쿼리 호출 수를 집계해 ECharts 관리자 대시보드로 시각화",
          "Docker 기반 개발 및 배포 환경 운영"
        ]
      }
    ]
  },
  {
    title: "공공기관 민원 콜센터 웹 애플리케이션",
    company: "시스플랫",
    description: "공공기관 민원 콜센터 웹 애플리케이션의 유지보수와 신규 기능 개발을 Sprint 단위로 맡았습니다.",
    tech: ["Spring", "jQuery", "Oracle", "MariaDB"],
    period: "2023.09 - 2023.12",
    role: "웹 개발 (인턴)",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/soft1.png"
    ],
    tasks: [
      {
        title: "공통 구조 개선",
        items: [
          "공통 코드 구조를 설계, 구현해 화면별 커스터마이징 부담 절감",
          "인증, 세션 기반 접근 제어 모듈로 동시 로그인 정책 적용"
        ]
      },
      {
        title: "Oracle에서 MariaDB로 이관",
        items: [
          "이관 시 애플리케이션 영향 범위 점검",
          "호환성 이슈 대응",
          "데이터 정합성 검증"
        ]
      }
    ]
  },
  {
    title: "FEMS 공장 데이터 시각화 웹 시스템",
    company: "주식회사 이상 (외주 개발)",
    description: "공장 에너지 사용량 데이터를 시각화하는 웹 시스템 외주 개발입니다. 2인 팀에서 백엔드 전담, 화면 80%를 맡았습니다.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Chart.js"],
    period: "2023.03 - 2023.07",
    role: "풀스택",
    team: "2명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/fems.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/fems1.png"
    ],
    tasks: [
      {
        title: "대용량 연산 구간 안정화",
        items: [
          "동시 연산 요청 시 DB 서버가 다운되는 이슈 재현",
          "쿼리, 함수 사용 방식과 데이터 처리량 기준 테스트로 안정적인 처리 기준 도출",
          "일부 DB 연산을 애플리케이션 처리로 전환해 통계 쿼리 응답 30초 → 5초 단축"
        ]
      },
      {
        title: "설계 및 화면 개발",
        items: [
          "MySQL 데이터 모델 설계",
          "요구사항 정리, 개발 일정과 범위 조율 참여",
          "Chart.js 기반 실시간, 누적 에너지 사용량 시각화 화면 구현"
        ]
      }
    ]
  }
];

const subProjects = [
  {
    title: "한정판매 시스템 (선착순 이커머스)",
    company: "항해99 취업 리부트",
    description: "특정 시간에 오픈되는 선착순 판매 서비스입니다. 1인 개발로 진행했습니다.",
    tech: ["Spring Boot", "Spring WebFlux", "Spring Cloud", "JPA", "MySQL", "Redis", "Docker", "nGrinder"],
    period: "2024.02 - 2024.05",
    role: "백엔드",
    team: "1명",
    images: [],
    tasks: [
      {
        title: "동시성 처리",
        items: [
          "재고 API 100건 이상 동시 요청 시 발생한 NPE를 병렬 테스트로 동시성 이슈로 특정",
          "Redisson 분산락 도입으로 부하 테스트에서 재현되던 동시성 에러 제거"
        ]
      },
      {
        title: "조회 성능 개선",
        items: [
          "Redis 캐시 도입으로 상품 목록, 상세 조회 최대 6초 지연을 평균 700ms로 단축",
          "TPS 155.7 → 423 향상 (nGrinder 측정)",
          "재고 API를 MVC에서 WebFlux로 전환"
        ]
      },
      {
        title: "요구사항 변화에 따른 MSA 전환",
        items: [
          "Spring Cloud Config로 공통 설정 중앙화",
          "AMQP 기반 Spring Cloud Bus로 설정 반영 자동화",
          "Docker Compose 기반 서비스 컨테이너화"
        ]
      }
    ]
  },
  {
    title: "영화 예매 시스템",
    company: "항해99 Redis 심화 활용 교육",
    description: "Redis 심화 활용 교육 과정에서 1인 개발로 구축한 영화 예매 시스템입니다.",
    tech: ["Spring Boot", "Redis", "Java"],
    period: "2025.01 - 2025.02",
    role: "백엔드",
    team: "1명",
    images: [],
    tasks: [
      {
        title: "동시성 제어",
        items: [
          "Redisson 분산락과 Lua Script 원자적 연산을 각각 적용해 동시성 처리 전략 비교"
        ]
      }
    ]
  }
];

export function ProjectSection() {
  const [activeTab, setActiveTab] = useState<"main" | "sub">("main");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500 mb-4">03. Project</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">프로젝트</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 mb-8"
        >
          <button
            onClick={() => setActiveTab("main")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "main"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Main Projects
          </button>
          <button
            onClick={() => setActiveTab("sub")}
            className={`px-6 py-2 rounded-lg transition-all ${
              activeTab === "sub"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Sub Projects
          </button>
        </motion.div>

        {activeTab === "main" && (
          <div className="space-y-6">
            {mainProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    <div className="text-xs text-gray-500 mb-2">{project.company}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="text-sm text-gray-500 mb-4 flex flex-wrap gap-x-3">
                      <span>{project.period}</span>
                      <span>{project.role}</span>
                    </div>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="flex gap-2"
                  >
                    <button 
                      onClick={() => handleProjectClick(project)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </button>
                  </motion.div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  className="text-gray-600 mb-6"
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + 0.6 + techIndex * 0.05
                      }}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "sub" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-xs text-gray-500">{project.company}</div>
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1 + 0.2,
                      type: "spring"
                    }}
                    className="flex gap-2"
                  >
                    <button 
                      onClick={() => handleProjectClick(project)}
                      className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </motion.div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="text-sm text-gray-500 mb-3">{project.period}</div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.4 + techIndex * 0.05
                      }}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}