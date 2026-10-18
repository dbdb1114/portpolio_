import { motion } from "motion/react";
import { GraduationCap, Calendar, Award } from "lucide-react";

const educations = [
  {
    school: "학점은행제",
    degree: "컴퓨터과학과 학사",
    period: "2027.02 취득 예정",
    achievements: []
  },
  {
    school: "메가스터디 IT 아카데미",
    degree: "AI 서비스 개발자 과정",
    period: "2026.08 - 2026.11 (수강 중)",
    achievements: [
      "LangChain, LangGraph 기반 AI 서비스 개발 학습",
      "재직 중 병행 수강 (평일 야간과 주말, 주 3회)"
    ]
  },
  {
    school: "항해99",
    degree: "Redis 심화 활용 교육",
    period: "2025.01 - 2025.02",
    achievements: [
      "Redisson 분산락과 Lua Script 원자적 연산의 동시성 처리 전략 비교, 적용",
      "영화 예매 시스템 구축 프로젝트 수행"
    ]
  },
  {
    school: "항해99",
    degree: "취업 리부트",
    period: "2024.02 - 2024.05",
    achievements: [
      "Spring Cloud 기반 MSA 아키텍처 설계",
      "Redisson 분산락 기반 동시성 처리",
      "한정판매(선착순 이커머스) 시스템 구축 프로젝트 수행"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    date: "2026.06"
  },
  {
    name: "SQL 개발자 (SQLD)",
    issuer: "한국데이터산업진흥원",
    date: "2026.03"
  },
  {
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2025.12"
  },
  {
    name: "컴퓨터활용능력 2급",
    issuer: "대한상공회의소",
    date: "2025.05"
  },
  {
    name: "정보처리산업기사",
    issuer: "한국산업인력공단",
    date: "2024.12"
  }
];

export function EducationSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm text-gray-500 mb-4">04. Education</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12">학력, 교육 및 자격증</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Education */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            >
              <GraduationCap className="w-6 h-6" />
              학력 및 교육 과정
            </motion.h3>

            <div className="space-y-6">
              {educations.map((edu, index) => (
                <motion.div
                  key={edu.school + edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut"
                  }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-1">
                        {edu.school}
                      </h4>
                      <p className="text-gray-600">{edu.degree}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achievement}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.2 + achIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className="text-sm text-gray-600 flex items-start gap-2"
                      >
                        <span className="text-gray-400">•</span>
                        <span>{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
            >
              <Award className="w-6 h-6" />
              자격증
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.15,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-gradient-to-br from-gray-900 to-gray-700 p-5 rounded-xl text-white shadow-lg"
                >
                  <h4 className="font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-300 mb-2">{cert.issuer}</p>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
