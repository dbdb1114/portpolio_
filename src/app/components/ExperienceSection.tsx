import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "제타럭스 시스템",
    position: "웹 개발자",
    period: "2024.07 - 2025.01",
    description: "공공기관 토지 관리 시스템 구축 프로젝트에 참여하여 Spring Boot 기반 웹 애플리케이션 개발을 담당했습니다.",
    achievements: [
      "JSP, VanillaJS 기반의 화면단 퍼블리싱 및 프론트엔드 구현",
      "데이터 관련 각종 통계 페이지 테이블 뷰 개발 및 Chart 라이브러리를 활용한 시각화",
      "Spring Boot 기반 REST API 설계·구현",
      "Docker 기반 개발·배포 환경을 활용해 실행 환경 일관성 확보 및 배포 안정성 강화"
    ]
  },
  {
    company: "소프트디비 코리아",
    position: "웹 개발자 (인턴)",
    period: "2023.09 - 2023.12",
    description: "공공기관 민원 관리 콜센터 웹 애플리케이션의 유지보수 및 신규 기능 개발을 담당했습니다.",
    achievements: [
      "jQuery 기반 인터랙티브 기능 구현 및 백엔드 연동으로 상담/민원 처리 UX 개선",
      "웹 애플리케이션 내부 라이브러리 교체 작업 진행하여, 공통 코드 개발하여 효율성과 편의성 확보",
      "Oracle DB → MariaDB 마이그레이션 과정에서 호환성 이슈 대응 및 정합성 검증에 참여",
      "요구사항 정리 및 설계에 주도적으로 참여하여 기능 범위/처리 흐름을 명확히 정리"
    ]
  },
  {
    company: "주식회사 이상",
    position: "웹 개발자 (프리랜서)",
    period: "2023.03 - 2023.07",
    description: "공장 에너지 관리 시스템의 프론트엔드와 백엔드 개발을 모두 담당했습니다.",
    achievements: [
      "웹 페이지 프론트엔드 템플릿 선정 및 화면단 개발 참여",
      "차트 라이브러리를 활용한 시각화 페이지 개발",
      "MySQL 기반 데이터 모델 설계 및 Spring Boot REST API 설계·구현",
      "DB 통계 쿼리 튜닝을 통해 30초 → 5초로 개선하여 통계 조회 성능 대폭 향상"
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
          <div className="text-sm text-gray-500 mb-4">03. Experience</div>
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
                <div className="flex items-start justify-between mb-4">
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
                
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-gray-700">주요 성과:</div>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li 
                        key={achievement} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.4 + achIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}