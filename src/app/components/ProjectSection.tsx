import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { ProjectDetailModal } from "./ProjectDetailModal";

const mainProjects = [
  {
    title: "한국사 능력 검정 시험 학습 서비스",
    category: "Main Project",
    description: "기출문제 유형 선택부터 문제 풀이, 관리자 페이지까지 전체 사용자 플로우를 구현한 학습 서비스입니다.",
    tech: ["React", "Next.js", "TanStack Query", "Spring Boot", "MySQL"],
    period: "2024.01 - 2024.06",
    role: "웹 개발",
    team: "2명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/kht1.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/kht2.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/kht3.png"
    ],
    responsibilities: {
      frontend: [
        "기출문제 유형 선택부터 문제 풀이 페이지까지 사용자 플로우 전반의 화면 구현",
        "UI/UX 사용성 향상을 고려한 페이지 이동 구조 및 화면 흐름 설계",
        "TanStack Query를 활용한 API 캐싱 전략 적용으로 불필요한 API 요청 최소화",
        "문제 관리 CRUD 페이지 구조 설계 및 화면 구현",
        "문제 등록 전 미리보기 렌더링 기능을 제공하여 관리자 UX 개선"
      ]
    },
    link: "https://kht-admin-zp4y.vercel.app/"
  },
  {
    title: "공공기관 공간·데이터 관리 시스템",
    category: "Main Project",
    description: "공공기관의 토지 관리와 데이터 호출 통계를 제공하는 관리 시스템입니다. 권한별 데이터 마스킹과 엑셀 처리 기능을 구현했습니다.",
    tech: ["Vanilla JS", "Java", "Spring", "MyBatis", "PostgreSQL"],
    period: "2023.07 - 2024.01",
    role: "웹 개발",
    team: "3명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/zeta1.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/zeta2.png"
    ],
    responsibilities: {
      frontend: [
        "집계 데이터를 관리자 대시보드에서 ECharts로 시각화하여 모니터링 기능 제공",
        "Vanilla JS 기반 관리자 페이지 화면 구현 및 입력 데이터 유효성 검증 처리",
        "권한 시스템을 도입해 사용자 권한별 데이터 마스킹 처리"
      ],
      backend: [
        "MyBatis Interceptor 기반으로 API 및 쿼리 호출 수 집계 로직 구현",
        "엑셀 업로드/다운로드 기능 구현(어노테이션·리플렉션 기반으로 컬럼 변경에 유연한 구조 설계)",
        "엑셀 업로드 성능 개선: 5분 → 2분 (병렬 처리 적용)",
        "DB 스키마 이관 및 운영 반영",
        "대용량 공공데이터 파싱 안정화"
      ]
    }
  },
  {
    title: "축산물 품질 평가원 콜센터 애플리케이션",
    category: "Main Project",
    description: "콜센터의 상담업무를 돕기 위한 웹 기반 시스템 UI/UX 개선 및 유지보수",
    tech: ["Vanilla JS", "Spring", "jQuery", "Oracle", "MariaDB"],
    period: "2023.09 - 2023.11",
    role: "웹 개발자 인턴",
    team: "1명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/soft1.png"
    ],
    responsibilities: {
      frontend: [
        "jQuery 기반 인터랙티브 기능 구현 및 백엔드 연동으로 상담/민원 처리 UX 개선",
        "웹 애플리케이션 내부 라이브러리 교체 작업을 통한 공통 코드 개발로 효율성과 편의성 확보",
        "JavaScript, CSS 수정을 통한 요구사항 구현 및 UI/UX 개선"
      ],
      backend: [
        "레거시 애플리케이션 기능 모듈 확장 및 표준화",
        "공통 코드 구조를 설계·구현하여 화면별 커스터마이징 부담을 줄이고 유지보수성 개선",
        "인증·세션 기반 접근 제어 모듈을 도입해 동시 로그인 케이스를 정책적으로 관리",
        "Oracle DB → MariaDB 마이그레이션 과정에서 호환성 이슈 대응 및 정합성 검증에 참여"
      ]
    }
  },
  {
    title: "FEMS 공장 데이터 시각화 웹 시스템",
    category: "Main Project",
    description: "회사 내 직원, 장비, 공지사항을 관리하고, 실시간 에너지 사용량 데이터를 시각화하는 시스템",
    tech: ["Vanilla JS", "Chart.js", "Thymeleaf", "Java", "Spring Boot"],
    period: "2023.04 - 2023.06",
    role: "백엔드/프론트엔드(풀스택)",
    team: "2명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/fems.png",
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/fems1.png"
    ],
    responsibilities: {
      frontend: [
        "Chart.js 기반 데이터 시각화 화면 개발의 80% 이상을 담당",
        "실시간·누적 데이터 조회 결과를 차트 컴포넌트로 구성해 가독성과 모니터링 편의성 강화",
        "직원·장비·공지사항 관리 기능의 화면 구현 및 테이블, 페이지네이션 등 공통 UI 설계"
      ],
      backend: [
        "대용량 연산 구간 성능 개선 및 안정화",
        "쿼리·함수 사용 방식과 데이터 처리량을 기준으로 테스트하여 안정적인 처리 기준 도출",
        "응답 속도 2~3초 → 약 1초 수준으로 개선"
      ]
    }
  }
];

const subProjects = [
  {
    title: "GooHae 가구 쇼핑몰",
    category: "Sub Project",
    description: "1인 가구를 위한 가구 쇼핑몰 웹 애플리케이션입니다. 마이페이지, 장바구니 등 유저 중심의 프론트엔드와 전체 백엔드 시스템을 구현했습니다.",
    tech: ["Spring Boot", "ThymeLeaf", "JavaScript", "CSS", "MySQL", "Redis"],
    period: "2023.02 - 2023.03 (리팩토링: 2024.03~)",
    role: "백엔드 개발 (팀 4명)",
    team: "4명",
    images: [
      "https://korea-history-test.s3.ap-northeast-2.amazonaws.com/portpolio/goohae.png"
    ],
    responsibilities: {
      frontend: [
        "마이페이지, 장바구니 등 사용자 중심 페이지의 UI/UX 설계 및 구현",
        "ThymeLeaf 기반 서버사이드 렌더링 페이지 개발",
        "사용자 플로우를 고려한 인터페이스 설계"
      ],
      backend: [
        "Redis를 이용한 중복로그인 방지 기능 구현",
        "상품 테이블 스키마 재설계로 확장성 확보",
        "Cloudinary 서비스를 활용한 이미지 호스팅 시스템 구축",
        "상품등록, 장바구니, 마이페이지 등 유저 관련 전체 CRUD 기능 구현"
      ]
    }
  },
  {
    title: "핫딜 이커머스 시스템",
    category: "Sub Project",
    description: "특정 시간에 오픈되는 한정판매 시스템입니다. 대용량 트래픽 대응과 MSA 구조를 적용하여 실제 서비스 수준의 시스템을 구축했습니다.",
    tech: ["Spring Boot", "Spring WebFlux", "Spring Cloud", "Redis", "Docker", "MySQL"],
    period: "2024.04 - 2024.05",
    role: "백엔드 개발 (개인 프로젝트)",
    team: "1명",
    images: [
      "https://images.unsplash.com/photo-1692699203597-b5a4464f3f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU5Njc0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    responsibilities: {
      backend: [
        "Spring WebFlux를 활용한 비동기 재고관리 API 설계",
        "Redisson 분산락을 통한 동시성 문제 해결 (NullPointException 0% 달성)",
        "Redis 캐싱을 통한 API 성능 개선 (TPS 155.7 → 423)",
        "Spring Cloud를 활용한 MSA 구조 설계 (Gateway, Eureka, Config)",
        "Docker-Compose로 서비스 컨테이너화 및 통신 구현"
      ],
      tools: [
        "Ngrinder, Scouter를 활용한 성능 테스트",
        "Git CanvanBoard, Issue, PR을 활용한 진척 관리"
      ]
    }
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
          <div className="text-sm text-gray-500 mb-4">04. Project</div>
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
                    <div className="text-xs text-gray-500 mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="text-sm text-gray-500 mb-4">{project.period} · {project.role}</div>
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
                  <div className="text-xs text-gray-500">{project.category}</div>
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