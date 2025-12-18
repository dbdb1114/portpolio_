import { motion } from "motion/react";
import { useState } from "react";
import { techIcons } from "../../constants/techIcons";

const skillCategories = {
  Language: [
    {
      name: "Java",
      description: "Spring Boot 기반 RESTful API 개발과 MSA 구조 설계 경험이 있습니다.",
      icon: techIcons.java.icon
    },
    {
      name: "JavaScript",
      description: "ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.",
      icon: techIcons.javascript.icon
    },
    {
      name: "Python",
      description: "ES6+ 문법을 활용하여 코드를 작성할 수 있습니다.",
      icon: techIcons.javascript.icon
    }
  ],
  FrontEnd: [
    {
      name: "React",
      description: "Context API, React Router를 활용한 SPA 개발 경험과 컴포넌트 기반 UI 설계 능력을 보유하고 있습니다.",
      icon: techIcons.react.icon
    },
    {
      name: "Next.js",
      description: "SSR과 정적 사이트 생성을 활용한 성능 최적화된 웹 애플리케이션 개발 경험이 있습니다.",
      icon: techIcons.nextjs.icon
    },
    {
      name: "HTML5",
      description: "시맨틱 태그를 활용하여 웹 표준을 준수하는 마크업을 작성할 수 있습니다.",
      icon: techIcons.html.icon
    },
    {
      name: "CSS3",
      description: "Flexbox, Grid, Animation 등 모던 CSS를 활용할 수 있습니다.",
      icon: techIcons.css.icon
    },
    {
      name: "TailwindCSS",
      description: "유틸리티 기반의 빠른 스타일링과 반응형 디자인 구현에 활용하고 있습니다.",
      icon: techIcons.tailwind.icon
    },
    {
      name: "Chart.js",
      description: "데이터 시각화 및 대시보드 구현을 위한 차트 라이브러리 활용 경험이 있습니다.",
      icon: techIcons.chart?.icon || techIcons.javascript.icon
    }
  ],
  BackEnd: [
    {
      name: "Spring Boot",
      description: "RESTful API 설계 및 MSA 구조의 마이크로서비스 개발 경험이 있습니다.",
      icon: techIcons.spring.icon
    },
    {
      name: "Spring WebFlux",
      description: "대용량 트래픽 대응을 위한 비동기 리액티브 프로그래밍 적용 경험이 있습니다.",
      icon: techIcons.spring.icon
    },
    {
      name: "Spring Cloud",
      description: "Gateway, Eureka, Config Server를 활용한 MSA 인프라 구축 경험이 있습니다.",
      icon: techIcons.spring.icon
    },
    {
      name: "JPA/Hibernate",
      description: "ORM을 활용한 데이터베이스 연동 및 쿼리 최적화 경험이 있습니다.",
      icon: techIcons.java.icon
    }
  ],
  Database: [
    {
      name: "MySQL",
      description: "관계형 데이터베이스 설계 및 복잡한 쿼리 작성이 가능합니다.",
      icon: techIcons.mysql.icon
    },
    {
      name: "PostgreSQL",
      description: "관계형 데이터베이스 설계 및 쿼리 작성이 가능합니다.",
      icon: techIcons.postgresql.icon
    },
    {
      name: "Redis",
      description: "분산락과 캐싱 전략(Read-Aside, Write-Through) 구현으로 성능 최적화 경험이 있습니다.",
      icon: techIcons.redis.icon
    }
  ],
  ETC: [
    {
      name: "Docker",
      description: "Docker-Compose를 활용한 멀티 컨테이너 개발 환경 구성 및 MSA 서비스 관리 경험이 있습니다.",
      icon: techIcons.docker.icon
    },
    {
      name: "Git",
      description: "버전 관리 및 협업을 위해 활용합니다.",
      icon: techIcons.git.icon
    },
    {
      name: "GitHub",
      description: "코드 관리 및 CI/CD 구축 경험이 있습니다.",
      icon: techIcons.github.icon
    },
    {
      name: "Figma",
      description: "디자인 시스템을 이해하고 개발에 반영할 수 있습니다.",
      icon: techIcons.figma.icon
    }
  ]
};

type CategoryKey = keyof typeof skillCategories;

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("FrontEnd");

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="text-sm text-gray-500 mb-4">02. Skills</div>
          <h2 className="text-4xl font-bold text-gray-900">기술 스택</h2>
        </motion.div>

        <div className="flex gap-12">
          {/* Left Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-48 flex-shrink-0"
          >
            <div className="space-y-1">
              {(Object.keys(skillCategories) as CategoryKey[]).map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeCategory === category
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Skills List */}
          <div className="flex-1">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="min-h-[500px]"
            >
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-xl font-semibold text-gray-900 mb-8"
              >
                Skill Stack <span className="text-gray-400">@</span>{" "}
                <span className="text-gray-700">{activeCategory}</span>
              </motion.h3>

              <div className="space-y-6">
                {skillCategories[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                    className="flex gap-4"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.08,
                        ease: "easeOut"
                      }}
                      className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-gray-200 shadow-sm p-3"
                    >
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {skill.name}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}